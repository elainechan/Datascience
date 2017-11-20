// Some info about viewport percentages:
// http://stackoverflow.com/questions/1575141/make-div-100-height-of-browser-window

(function() {
    var d3 = Plotly.d3;
    
    var WIDTH_IN_PERCENT_OF_PARENT = 60,
        HEIGHT_IN_PERCENT_OF_PARENT = 80;
    
    var gd3 = d3.select('body')
        .append('h1').html("Robert and Jane's Arranged Marriage")
        .append('div')
        .style({
            width: WIDTH_IN_PERCENT_OF_PARENT + '%',
            'margin-left': (100 - WIDTH_IN_PERCENT_OF_PARENT) / 2 + '%',
    
            height: HEIGHT_IN_PERCENT_OF_PARENT + 'vh',
            'margin-top': (100 - HEIGHT_IN_PERCENT_OF_PARENT) / 2 + 'vh'
        });
    
    var gd = gd3.node();
    
    var trace1 = { 
        x: [0, 10, 20, 30],
        y: [0, 1, 2, 4],
        type: 'scatter',
        mode: 'lines',
        line: {
            width: 8, // set line width
            color: '#edf8b1' // set line color
        },
        name: 'Jane'
    };

    var trace2 = {
        x: [0, 10, 20, 30],
        y: [8, 9, 5, 4],
        type: 'scatter',
        mode: 'lines',
        line: {
            width: 8,
            color: '#2c7fb8'
        },
        name: 'Robert'            
    };

    var data = [trace1, trace2];

    var layout = {
        title: 'Happiness Levels Over the Years',
        xaxis: {
            title: 'Years Elapsed Since Wedding',
            titlefont: {
                family: 'courier new, monospace',
                size: 18,
                color: '#181818'
            },
            showgrid: false
        },
        yaxis: {
            title: 'Happiness Levels',
            titlefont: {
                family: 'courier new, monospace',
                size: 18,
                color: '#181818'
            },
            showgrid: false
        }
    };

    Plotly.plot(gd, data, layout);
    
    window.onresize = function() {
        Plotly.Plots.resize(gd);
    };
    
})();
