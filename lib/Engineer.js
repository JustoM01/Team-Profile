const Employee = require('./Employee')

class Engineer extends Employee{
    constructor(name, id, email, githubname){
        super(name, id, email);
        this.githubname = githubname
    }

    getgitHhub(){
        return this.githubname;
    }
    getRolle(){
        return 'Engineer'
    }

    
}
module.exports=Engineer;