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

## R
* R notebook
* Rmarkdown
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

## Shell
* data pipelines using Python to call shell and [dgsh](https://github.com/dspinellis/dgsh)
