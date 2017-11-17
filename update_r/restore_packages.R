## Get file path
list_dir <- .libPath()

## Find the corresponding Rdata files
previous <- dir(path = list_dir, pattern = 'installed.Rdata')

## Load the latest one
load(file.path(list_dir, previous[length(previous)]))

## Check it
head(installed)

## Get current packages
current <- dir(.libPaths())
