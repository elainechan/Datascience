library(plotly)
library(crosstalk)

setwd('~/Datascience/plotcon2017')
sd <- SharedData$new(cars)
speeds <- filter_slider('speed', 'Speed', sd, ~speed)
p <- plot_ly(sd, x = ~speed, y = ~dist) %>%
    add_markers(alpha = 0.5) %>%
    highlight('plotly_selected')

tags <- bscols(
    widths = c(6, 6),
    p, speeds
)

htmltools::save_html(tags, file = "cars.html", libdir = "html-dependencies")
htmlwidgets::saveWidget(p, "cars1.html", selfcontained = TRUE)