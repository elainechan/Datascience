pollutantmean <- function(directory, pollutant, id = 1:332) {
    fset <- getdata(directory)
    rangeset <- subset(fset, fset['ID'] == id)
    pset <- rangeset[, pollutant]
    pmean <- mean(pset, na.rm = TRUE)
    return(pmean)
}

getdata <- function(directory) {
    setwd(directory)
    file_list <- list.files()
    for (file in file_list) { # refactor using apply family
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