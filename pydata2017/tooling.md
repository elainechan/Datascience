# Python Datascience Tooling

## Conda, Pip, and Homebrew
* [Conda: myths and misconceptions](https://jakevdp.github.io/blog/2016/08/25/conda-myths-and-misconceptions/)
* [Fixing conflicts between Anaconda and Homebrew](https://hashrocket.com/blog/posts/keep-anaconda-from-constricting-your-homebrew-installs)
* [Pipenv and virtual environments](http://docs.python-guide.org/en/latest/dev/virtualenvs/)
* [Deciding between Conda and Homebrew](https://stackoverflow.com/questions/33541876/os-x-deciding-between-anaconda-and-homebrew-python-environments)
* [The reason Conda exists](http://technicaldiscovery.blogspot.com/2013/12/why-i-promote-conda.html)
* [Commands: Conda vs Pip vs Virtualenv](http://stuarteberg.github.io/conda-docs/_downloads/conda-pip-virtualenv-translator.html)
* [Conda command reference](https://conda.io/docs/commands.html)
* [Deep dive into all options](https://wilsonmar.github.io/python-install/)
* [Conda installation guide](https://conda.io/docs/user-guide/install/index.html#system-requirements)

## Matplotlib
* First line, one of these three:
    * `%matplotlib inline` - static
    * `%matplotlib notebook` - interactive
    * `%matplotlib ipympl` - for Jupyter Lab JavaScript frontend
* Then `import matplotlib.pyplot as plt`
## Pandas
### Indexing and Reading
* `pd.read_*` - CSV, Parquet, JSON, etc.
* `.index`
* `.columns`
* `.dtypes`
* `.values`
* `__getitem__`
* `.loc[]`
* `.iloc[]`
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
## R
* R notebook
* Rmarkdown
* [Resolving R and Homebrew conflict](http://azaleasays.com/2014/08/25/homebrew-warnings-about-unbrewed-dylibs-installed-by-r/)
* [R and Homebrew on Stackoverflow](https://apple.stackexchange.com/questions/125853/homebrew-doctor-warnings-requesting-library-deletions)
* [Chris Roach talk](https://github.com/croach/pydata_nyc_2017)
* [Chris Roach presentation slides](https://github.com/croach/pydata_nyc_2017)
* [Regional smoothing in R](https://pudding.cool/process/regional_smoothing/)
    * [Smoothing repo](https://github.com/polygraph-cool/smoothing_tutorial)

## Modeling
* [Ibex: pandas adaptors for scikit-learn](http://ibex.readthedocs.io/en/latest/)
* [Edward: Bayesian modeling on TensorFlow](http://edwardlib.org/)

## Visualization
* [bqplot: ggplot for Jupyter](https://github.com/bloomberg/bqplot)
* [Plotly for Python](https://plot.ly/dash/workshop/graphing-tutorial)
* [Dash: Shiny for Python](https://plot.ly/dash/)
* [Polygraph repos](https://github.com/polygraph-cool)

## Scrollytelling
* [Responsive scrollytelling](https://pudding.cool/process/responsive-scrollytelling/)
* [How to implement scrollytelling](https://pudding.cool/process/how-to-implement-scrollytelling/)

## Web App
* [Keith Ingersoll](https://github.com/keithing?tab=repositories)
* Frontend-only
    * web page not communicate with server
    * can include widgets
    * R: flexdashboard, htmlwidgets
    * Python ipywidgets, nbconvert
* front + back
    * data passed btw frontend and server
    * server talk with db
    * server run custom R / Python code
    * R notebook, Jupyter notebook
    * 
* Readonly
    * RMarkdown, nbconvert

* Program structure
    * define filter data and plot figure
    * setup code
    * UI code defining app layout
    * server code that reacts to changes in inputs
    * call to start app
* Types / functions
    * live optimization
    * real time model scoring
    * model inspection (LIME, SHAP)
    * unsupervised learning validation
        * clustering
        * matching
    * image labeling
* [bokeh](https://bokeh.pydata.org/en/latest/docs/gallery.html#gallery)

## Shell and Command Line
* data pipelines using Python to call shell and [dgsh](https://github.com/dspinellis/dgsh)
* [iTerm color schemes](https://github.com/mbadolato/iTerm2-Color-Schemes)
