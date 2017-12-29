# Python Tips

## Python 2 to Python 3 problems
* Encoding must be specified:
    - if something is read in as binary: `open(file, 'rb')`
    - to combine data everything must be in byte: `x = b'hello' + b'world'`
* `dictionary.keys()` returns a _view_ of a list of keys. To get an actual list of keys:
    - `list(dictionary.keys())`
