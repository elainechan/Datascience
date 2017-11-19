## Plotly for R Workshop

### Day One
* glue between statistical models and rendering of visualization
* `ploty_json` - display data schema
* Plotly builds on htmlwidgets
* Traces are not too scalable
* Viridis color palette - popular in Matplotlib
    * [Paper](https://cran.r-project.org/web/packages/viridis/vignettes/intro-to-viridis.html)
* [Crosstalk](https://www.google.com/search?q=r+crosstalk&oq=r+crosstalk&aqs=chrome..69i57j69i60j0j69i64l3.2485j0j1&sourceid=chrome&ie=UTF-8) - viz library not requiring Shiny
* Visualizations don't scale, models don't surprise (Wickham)
* Linking to Shiny allows more flexibility and feature options
* `ggplotly`

### Day Two
* `geomsf` probably replacing `ggmap` but it's `sf` for now
* Mollweide projection
* `leaflet()` `plot_mapbox()`
* `tempdir()`
    * represents dir of the current R session
    * contains files of printed/viewed plots, etc.
```r
withr::with_dir('~', {
    htmltools::save_html(tags, file = 'leaflet-your-turn.html, libdir = #
})
browseURL('~/leaflet-your-turn.html')
htmlwidgets::saveWidget(p, 'quakes-your-turn.html', selfcontained = TRUE)
# 1 plot is fine selfcontained, but larger, do differently
# use `unlink` to delete files
```
* [Linking selection](https://github.com/cpsievert/apps/blob/master/shiny/apps/plotlyLinkedBrush/app.R) - linking selection between two plots with `"plotly_selected"` on line 43-44
* `data(package = 'plotly')` - to find sample data shipped with each package
* `reactive()` to make code more performant
* `gather()` - reshape wide format to long format
* `brower()` - for debugging
* `plotly_example('shiny', '[example-name]')`

## Books
* [R for Data Science](http://r4ds.had.co.nz/)
* [Advanced R](http://adv-r.had.co.nz/)
* [R Packages book](http://r-pkgs.had.co.nz/)
* [Plotly for R](https://plotly-book.cpsievert.me/)

## Resources
* [Victory - React compoments modular charts](https://formidable.com/open-source/victory/)
* [Plotly.js workshop](https://github.com/plotly/plotcon-2017-plotlyjs-workshop)
* [Plotly for R workshop](https://github.com/cpsievert/plotcon17)
* [Data visualization for social science with ggplot2](http://socviz.co/)
* [Mapbox](https://www.mapbox.com/developers/)
* [Leaflet](http://leafletjs.com/reference-1.2.0.html)
* Crosstalk - allow web-only access without R
* Shiny
* htmlwidgets
* [Shiny Proxy](https://www.shinyproxy.io/) - for deploying in enterprise context
* [Shiny container for serving app](http://lukesingham.com/shiny-containers-with-shinyproxy/)
* [Spatial Reference](http://www.spatialreference.org/ref/)
* [Dash](https://plot.ly/dash/)

## Ideas
* [Mass Shootings](http://flowingdata.com/2017/10/06/in-2017-no-more-than-five-days-without-a-mass-shooting/)
* [Diversity in Tech](https://github.com/elainechan/women-tech-speakers-organizers/blob/master/notes.md)

## Data Sources
* [Flowing Data](http://flowingdata.com/category/statistics/data-sources/)

## Dash instructor
* charley@plot.ly
* chris@plot.ly


