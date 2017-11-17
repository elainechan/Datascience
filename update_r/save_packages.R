## Run before updating R
## Source: "https://www.r-bloggers.com/updating-r/"

## Get path
list_dir <- .libPaths()

## Get the list of installed packages
installed <- dir(.libPaths())

## Save the list for later use
save(installed, file = file.path(list_dir, paste0(Sys.Date(), '-installed.Rdata')))

## Explore the list
head(installed)
length(installed)