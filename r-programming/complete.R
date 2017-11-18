library('plyr')
complete <- function(directory, id = 1:332) {
    setwd(directory)
    fullset <- getdata(directory)
    compset <- na.omit(fullset)
    freqset <- count(compset, 'ID')
    cases <- rowSums(freqset[c(id),])
    # rangeset <- subset(compset, compset['ID'] == id)
    # return data frame
    # first column is the name of the file
    # second column is the number of complete cases
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