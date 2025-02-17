# Pandas

## Tutorials
* [How to Learn Pandas (Ted Petrou)](https://medium.com/dunder-data/how-to-learn-pandas-108905ab4955)
* [Idiomatic Pandas (Ted Petrou)](https://github.com/tdpetrou/Learn-Pandas)
* [Subsetting in Pandas, Part 1 (Ted Petrou)](https://medium.com/dunder-data/selecting-subsets-of-data-in-pandas-6fcd0170be9c)
* [Subsetting in Pandas, Part 2 (Ted Petrou)](https://medium.com/dunder-data/selecting-subsets-of-data-in-pandas-39e811c81a0c)
* [Pandas .head() to .tail() (Tom Auspurger)](https://github.com/TomAugspurger/pydata-nyc-ph2t)
* [Effective Pandas series (Tom Auspurger)](https://github.com/TomAugspurger/effective-pandas)
* [Julia Evans Pandas cookbook](https://github.com/jvns/pandas-cookbook)
* [Official Pandas cookbook](https://pandas.pydata.org/pandas-docs/stable/cookbook.html)
* [100 Pandas puzzles](https://github.com/ajcr/100-pandas-puzzles)
* [Samora Pandas exercises](https://github.com/guipsamora/pandas_exercises)

## Numpy Tutorials
- [101 NumPy Exercises for Data Analysis](https://www.machinelearningplus.com/101-numpy-exercises-python/)
- [Numpy 100](https://github.com/rougier/numpy-100/blob/master/100%20Numpy%20exercises.md)

## Algorithms
- [Rosalind Algorithms](http://rosalind.info/problems/locations/)

## Reading
* `pd.read_*` - CSV, Parquet, JSON, etc.; returns DataFrame
### DataFrame Components
* Each column of the data is a `pd.Series`, kind of like a 1-dimensional version of a DataFrame.
* Both `pd.DataFrames` and `pd.Series` have row labels, which can be accessed with the `.index` attribute
* `flights.index` is a pd.Index
* `DataFrames` store their column labels in a `.columns` attribute, which is also a `pd.Index`
* DataFrames are a columnar data structure, which mean they're a container for heterogenous data.
    * `.dtypes`
* You can get a NumPy array from a pandas `DataFrame` with the `.values` attribute.
## Indexing
The goal of indexing is to subset data.
### Ways of subsetting
There are many ways you might want to specify which subset you want to select:
- Like lists, index by integer position.
- Like dictionaries, index by label.
- Like NumPy arrays, index by _boolean masks_.
- with a scalar, `slice`, or array
    - Any of those should work on the index (row labels), or columns of a DataFrame, or both
    - Any of those should work on hierarchical indexes.
### Rules
1. `[ ]` - selects row OR column, not both simultaneously
2. `[[ ]]` 
    - `__getitem__`, selects columns
    - `flights.groupby("unique_carrier").first()[['dep_delay', 'arr_delay']]`
3. `.loc[ ]`
    - for label-based indexing 
    - selects subsets of rows and columns by label only
    - `>>> df.loc[row_labels, column_labels]`
4. `.iloc[]`
    - for position-based indexing
    - selects subsets of rows and columns by integer location only
    - `>>> df.iloc[row_positions, column_positions]`
### Details
* The arguments to `.loc` and `.iloc` are `.loc[row_indexer, column_indexer]`. 
* The column indexer is optional.
* An indexer can be one of
    - A scalar or array (of labels or integer positions)
    - A `slice` object (including `:` for everything)
    - A boolean mask
* boolean indexing - `flights.loc[flights.cancelled == 1]`
* `drop()`
### Alignment
* `.isna()`
* `.dropna()`
* `union()`
* `reindex()`
* `.merge()`
* `.concat()`
### Iterators, Groupby
* `agg()`
* `groupby()`
* `transform()`
### Tidy Data
* Definition
    1. Each variable forms a column
    2. Each observation forms a row
* `melt()`
* `pivot_table()`

## Idiomatic Pandas
### Subsetting
* `>>> method.__abs__??` - see if method calls pandas
* a method that doesn't accept iterable [is / is not] calling pandas
* `city1 = c1['CITY']` - Series
* `city2 = c2[['CITY']]` - DataFrame
### Copying
* when to `.copy()`
* Selecting a Series creates a view of the original, which is then modified.
* Selecting a DataFrame creates a copy of the original.
* A view is a just a pointer to the original data.
* A copy is a fresh new object not connected to the original.
* check which one it is with `._is_view` for debugging
### Vectorizing vs `apply`
* use `apply` when there's no Series method available
* `apply` sucks mainly because it's slow in Python
* R `apply` works better because of R's functional nature
### Aggregation
* taking many values, representing them by a single value
* only use `apply` when `agg` doesn't work
* do as much outside of `apply` as possible

* missing data
* one-dimensional basic summary statistics - look at one array 
* how many unique values
* frequency, mean, etc.
