# Git Risky
## Using Git metadata to predict code bug risk

### Git metadata
* `git log` shows history of changes
    * commmit msg
    * who changed it
    * timeline
* `git diff` shows changes between two commits
* `git blame` identifies last commit to modify a particular line of code

### Model
1. Identify and label commits which introduced bugs
    * find  msgs starting with 'BUG' or 'Fix'
    * identify lines changed with `git diff`
    * find last commit to modify these lines with `git blame`
    * label that commit as having introduced bug
2. build commit-level features
        * lines changed
        * insertions
        * deletion
        * enhance / feature add
        * date
        * author
3. train binary classifier on features and labels
    * `from sklearn.ensemble import RandomForestClassifier`
4. score each new commit with model using git hooks
    * scripts that run automatically based on certain git actions
    * `[repo]/.git/hooks/post-commit`

### Commit hygiene
* each commit should only do one thing
* commit msgs should be meaningful and standardized
* use commit-msg hook to 
    * reject commit messages that are too short
    * enforce standards around message tags (BUG, TST, WIP, etc.)
* `git add --patch [file]` - selective commit
* `git rebase -i [base commit hash]` - small commits
    * only rebase unshared code
