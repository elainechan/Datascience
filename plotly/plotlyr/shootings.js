
var play_duration = 10000,
    rewind_duration = 700,
    pause_duration = 700;

var margin = { top: 28, right: 35, bottom: 90, left: 25 },
    width = 1090 - margin.left - margin.right,
    height = 275 - margin.top - margin.bottom;  

d3.select("#chart").style("height", (height+margin.top+margin.bottom)+"px");

var x = d3.scaleLinear()
    .rangeRound([0, width])
    .domain([0, 277]);

var y = d3.scaleLinear()
    .range([height, 0])
    .domain([0, 5]);

var line = d3.line()
    .x(function(d,i) { return x(i); })
    .y(function(d) { return y(d); })
    .curve(d3.curveStepBefore);

var total_deaths = 0,
    total_injuries = 0;

d3.tsv("data/shootings_forinter2017.tsv", type, function(error, shootings) {
    if (error) throw error;
    
    // Timeline data.
    var days_since = [0];
    for (i = 1; i < shootings.length; i++) {
        var days_between = shootings[i].daynum - shootings[i-1].daynum
        if (days_between > 0) {
            for (j = 1; j < days_between; j++) {
                days_since.push(days_since[days_since.length-1]+1);
            }
            days_since.push(0);
        }
    }
    
    // Init the SVG
    var svg = d3.select("#chart").append("svg")
        .datum(days_since)
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    
    
    // Axes
    var xAxis = d3.axisBottom(x)
        .tickValues([0, 273])
        .tickFormat(d => d == 0 ? "Jan. 1" : "Oct. 1");
    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0,"+(height+40)+")")
        .call(xAxis)
    var yAxis = d3.axisLeft(y)
        .tickSize(width)
        .tickValues(d3.range(0, 6))
        .tickFormat(d => d);
    svg.append("g")
        .attr("class", "y axis")
        .attr("transform", "translate("+width +",0)")
        .call(yAxis)
    .append("text")
        .attr("class", "axistitle")
        .attr("fill", "#000000")
        .attr("x", -width)
        .attr("dy", "-1.2em")
        .attr("dx", "-.6em")
        .text("Days Since Mass Shooting");
        
    
    
    // Days-since line    
    var daysline = svg.append("path")
        .attr("class", "line")
        .attr("d", line);
    
    var total_length = daysline.node().getTotalLength();
    daysline
        .attr("stroke-dasharray", total_length + " " + total_length)
        .attr("stroke-dashoffset", total_length);
    
    
    // Shootings
    var circle = svg.selectAll("circle.shooting")
        .data(shootings)
      .enter().append("circle")
        .attr("class", "shooting")
        .attr("r", 0)
        .attr("cx", function(d,i) { return x(d.daynum); })
        .attr("cy", function(d,i) {
            // Hacking offset.
            if (i > 2 && d.daynum == shootings[i-3].daynum) {
                return height + 50;
            }
            else if (i > 1 && d.daynum == shootings[i-2].daynum) {
                return height + 40;    
            } 
            else if (i > 0 && d.daynum == shootings[i-1].daynum) {
                return height + 30;
            } 
            else {
                return height + 20;
            }
            
        });
    // Start animation.
    play();
    
    
    // Play
    function play() {
        daysline
            .transition()
            .ease(d3.easeLinear)
            .duration(play_duration)
            .attr("stroke-dashoffset", 0);
        
        circle
            .transition()
            .delay(function(d,i) {
                return Math.round(((d.daynum-1) / 278) *  play_duration);
            })
            .duration(300)
            .ease(d3.easeElastic)
            .attr("r", function(d) {
                return 2 * Math.sqrt(d.nkilled+d.ninjured) 
            })
            .on("end", function(d,i) {
                total_deaths += d.nkilled;
                total_injuries += d.ninjured;
                
                d3.select("#shootings .count").text(i+1);
                d3.select("#deaths .count").text(total_deaths);
                d3.select("#injuries .count").text(d3.format(",")(total_injuries));
                
                if (i == shootings.length-1) {
                    setTimeout(rewind, pause_duration);
                }
            });
    }
    
    
    
    // Rewind
    function rewind() {
        
        daysline
            .transition()
            .ease(d3.easeLinear)
            .duration(rewind_duration)
            .attr("stroke-dashoffset", total_length);
        
        circle
            .sort(function(a,b) { return b.daynum - a.daynum; })
            .transition()
            .delay(function(d,i) {
                return Math.round(((278-d.daynum) / 278) *  rewind_duration);
            })
            .duration(0)
            .ease(d3.easeLinear)
            .attr("r", 0)
            .on("end", function(d,i) {
                total_deaths -= d.nkilled;
                total_injuries -= d.ninjured;
                
                d3.select("#shootings .count").text(275-i-1);
                d3.select("#deaths .count").text(total_deaths);
                d3.select("#injuries .count").text(d3.format(",")(total_injuries));

                if (i == shootings.length-1) {
                    setTimeout(play, pause_duration);
                }
            });
    }
    
    // Counters
    // d3.select("#deaths .count").transition().duration(anim_duration)
//         .tween("text", function() {
//             var that = d3.select(this),
//                 i = d3.interpolateNumber(that.text().replace(/,/g, ""), 350);
//                 return function(tr) {
//                     that.text(Math.round(i(tr)));
//                 }
//         });   

    
}); // @end d3.tsv()


function type(d) {
    d.nkilled = +d.nkilled;
    d.ninjured = +d.ninjured;
    d.daynum = +d.daynum;
    return d;
}

