pollutantmean <- function(directory, pollutant, id = 1:332) {
    fset <- getdata(directory)
    pset <- fullset[, pollutant]
    pmean <- mean(pset, na.rm = TRUE)
    return(pmean)

    ## return mean of pollutant across all monitors in 'id' vector
    ## ignoring 'NA' values
    ## do not round results
}

getdata <- function(directory) {
    setwd(directory)
    file_list <- list.files()
    for (file in file_list) {
        if (!exists('dataset')) {
            dataset <- read.table(file, header=TRUE, sep=',')
        } else {
            temp <- read.table(file, header=TRUE, sep=',')
            dataset <- rbind(dataset, temp)
            rm(temp)
        }
    }
    return(dataset)
}