const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const templatePage = require('./Src/template');

const builTeam = (dataObject) => {
    return inquirer
    .prompt([
        {
            type: 'list',
            name: 'Buildteam',
            message: 'Which Employee would you like to add',
            choices: ['Manager', 'Engineer', 'Intern', 'Finish Building Team']
        },
    

    
    ])
    .then((menudata)=>{
        if(menudata.BuildTeam === 'Engineer'){
            return addEngineer(dataObject);

        }else if(menudata.BuildTeam === 'Intern'){
            return addIntern(dataObject);
        }else if(menudata.BuildTeam === 'Manager'){

        
        
            return addManager  (dataObject);
        }else{
            return dataObject;
        }
        
    });
};

const addEngineer = (objectData)=>{
    return inquirer
    .prompt([
{
    type: 'input',
    name: 'EngineerName',
    message:'Please enter the name of your Engineer'
},
{
    type: 'input',
    name:'EngineerId',
    message: 'Please '
}
    ])
    .then((engineerData)=>{
        const { engineerName, engineerId, engineerEmail, engineerGithub } =
        engineerData;

      const engineerClass = new Engineer(
        engineerName,
        engineerId,
        engineerEmail,
        engineerGithub
      );
      return builTeam(objectData)  
    })
}

builTeam();