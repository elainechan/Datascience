## Serverless Machine Learning Model on AWS

### Classification
* Tags
* Taxonomy
    * rules-based classifier

### Model
* AP Metadata Services custom tagging API
* Lambda-based classifier
* client(API gateway) - workflow (step fn) - scaling(ec2 autoscaling) - worker (sklearn) - classifier (lambda)
* Step functions - visual workflows to coordinate microservices
    * LinearSVC, MultinomialNB, KNeighborsClassifier
* register Amazon Machine Image(AMI) for training
* `sklearn-build-lambda` can generate appropriately sized zip
* save mocel, taxonomy to disk, add to dependency zip

### Deployment
* Serverless Framework
* zip artifact support for lambda creation

### Classifying with Lambda
* cold starts - allocating more memory may help
* store large models in S3 and use 'container reuse'
    * download assets to /tmp
    * check /tmp for cached data before invocation

### Measure results
* confusion matrix
* precision 
* recall (correct positive /total positives)
* [Precision and recall Scikit-learn reference](http://scikit-learn.org/stable/auto_examples/model_selection/plot_precision_recall.html)

### Improvement
* correct tagging
* quantity
* balanced training sets across classes

### Contact
* [AP Metadata](https://developer.ap.org/ap-metadata-services)
dfox@
smyles@
vzielinska@
apmetadata@
