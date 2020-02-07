// Do what needs to be done.

/*
FEATURE SPECIFICATION

Additional Plugin Style Features
> github issues through hub cli
> jira issues

Restrictions
> Only one stash per branch allowed

Structure: 
pravega/src/index.js 
    feature/ 
        feature.js
        options/
            switch.sh
            new.sh
            start.sh
            finish.sh
            
/\ *************************************************** /\ *************************************************** /\

pravega feature:switch <branch> <step? = "">
    git stash save "-".join[<currentBranch>, <branch>, <step>?]
    git checkout branch/step?
    if (git stash list | grep <branch>)
        git stash apply [stashIndex]
        git stash drop [stashIndex]

/\ *************************************************** /\ *************************************************** /\

pravega feature:new <featureName> <target? = master> <update? = true>
    pravega feature:switch <target>
    if update:
        git pull origin <target>
    git checkout -b <featureName>

/\ *************************************************** /\ *************************************************** /\

pravega feature:start <featureName> <stepName>
    if !on(featureName)
        pravega feature:switch <featureName> <stepName? = currentStep>
    if worktree clean
        git checkout -b <featureName>/<stepName>
    else
        abort and tell to do (
            pravega feature:step <featureName> <stepName>
                OR
            pravega save
        )


/\ *************************************************** /\ *************************************************** /\

pravega feature:step <featureName> <stepName> <message>
    if !on(featureName)
        pravega feature:switch <featureName> <stepName? = currentStep>
    pravega save <message>
    git checkout <featureName> 
    git merge --squash <featureName>/<stepName>
    git commit --amend -m // open editor to edit message    


/\ *************************************************** /\ *************************************************** /\

pravega feature:finish <featureName> <target? = master> <message>
    if !on(featureName)
        pravega feature:switch <featureName>
    pravega save <message>
    git checkout <target> 
    git merge --squash <featureName>
    git commit --amend -m // open editor to edit message    

/\ *************************************************** /\ *************************************************** /\

// save, push, deploy work on current branch only. 

pravega save <message>
    git add . 
    git commit -m <message>

/\ *************************************************** /\ *************************************************** /\

pravega push <target? = origin, heroku, all> <message>
    pravega save <message>
    git push <target> <currentBranch>

/\ *************************************************** /\ *************************************************** /\

pravega deploy <message>
    pravega push all <message>
    firebase-deploy functions

*/