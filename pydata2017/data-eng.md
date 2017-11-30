# Data Engineering

## Multiprocessing

### Streamz and Dask
* [Streamz blogpost](http://matthewrocklin.com/blog/work/2017/04/13/streaming)
* [Dask](https://github.com/dask/dask)
* [Streamz](https://github.com/mrocklin/streamz)

### PyPy
* Vicki Boykis
* github veekaybee
* @vboykis
* [Slides](https://veekaybee.github.io/data-lake-talk/#/)

### PySpark and Apache Arrow
* [Speeding up PySpark with Apache Arrow (Bryan Cutler)](https://arrow.apache.org/blog/2017/07/26/spark-arrow/)
* [Vectorized UDFs for Spark (Li Jin)](https://databricks.com/blog/2017/10/30/introducing-vectorized-udfs-for-pyspark.html)
* [Using Apache Arrow](https://www.slideshare.net/julienledem/improving-python-and-spark-performance-and-interoperability-with-apache-arrow)
* [Arrow vs. Parquet and ORC for columnar data (Daniel Abadi)](http://dbmsmusings.blogspot.com/2017/10/apache-arrow-vs-parquet-and-orc-do-we.html)
* [Arrow vs. Parquest and ORC (Wes McKinney)](http://wesmckinney.com/blog/arrow-columnar-abadi/)

## Asynchronous
* useful when
* many network calls (API, etc)
* writing a new stat library
* input/output
* HTTP, database, RAM access

### Asynchronous programming
* Process vs threads
* Computing: concurrent vs parallel
* Multitasking: preemptive vs cooperative
* `aio-libs` - asyncio package collection
* Blocking vs non-blocking
* Asyncrony: single-threaded programming with a queue of non-blocking tasks
    * baking bread while doing dishes (state is retained)
### Coroutines
* @robsmallshire
* Subroutines: subset of coroutines
* Generators (semicoroutines) are between Coroutines and Subroutines
* result = await future

* Round Robin scheduler
* I/O aware scheduler
* `await` - [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)

### Python implementations
* `aio-libs` - asyncio package
* `asyncio`
* stackless python
* greenlet
* eventlet

## Tooling

### Processing Engines
* [PySpark](http://spark.apache.org/docs/2.1.0/api/python/pyspark.html)
* [Dask](https://dask.pydata.org/en/latest/)
* [Flink](http://training.data-artisans.com/)
* [Streamz](https://streamz.readthedocs.io/en/latest/)
* [Dremio](https://docs.dremio.com/)

### Databases
* [Cassandra](http://cassandra.apache.org/)
* [HBase](https://hbase.apache.org/)
* [Kudu](https://kudu.apache.org/overview.html)
* [Impala](https://impala.apache.org/)

### Standards
* [Hadoop HDFS](https://hortonworks.com/apache/hdfs/)
* [Parquet](https://parquet.apache.org/documentation/latest/)
* [Arrow](https://arrow.apache.org/)
* [ORC](https://orc.apache.org/docs/types.html)

### Warehouse / Clusters
* [Hive](https://hive.apache.org/)
* [Borg](https://static.googleusercontent.com/media/research.google.com/en//pubs/archive/43438.pdf)
* [Kubernetes](https://kubernetes.io/)
