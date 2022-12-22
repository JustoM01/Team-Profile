const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const templatePagejs = require('./Src/template');
const Manager = require('./lib/Manager');
const employees = [];

const createManager = () =>{
    return inquirer.prompt([
        {
            type : 'input',
            name : 'managername',
            message : 'please enter managers name',
        },
        {
            type: 'input',
            name: 'managerid',
            message: 'enter manager id number',
        },

        {
            type: 'input',
            name: 'manageremail',
            message: 'enter manager email',

        },

        {
            type: 'input',
            name: 'managerofficenumber',
            message: 'enter manager office number',

        }
    ])

    .then (managerData => {
        const manager = new Manager(managerData.managername, managerData.managerid, managerData.manageremail, managerData.managerofficenumber)
        employees.push(manager)
        console.log(employees);
    
    })
}


const writeFile = data => {
    console.log(data);
    fs.writeFile('./Templates/index.html', data, err => {
        if(err)
        {
            console.log(err);
            return;
        }

        console.log('page is being created')
    })
}

createManager()
.then(employees => templatePagejs(employees))
.then(pageHTML => writeFile(pageHTML))