const Employee = require('./Employee')

class Intern extends Employee{
    constructor(name, id, email, schoolname){
        super({name, id, email});
        this.schoolname = schoolname
    }

    getSchool(){
        return this.schoolname;
    }
    getRolle(){
        return 'Intern'
    }

    
}

module.exports=Intern;