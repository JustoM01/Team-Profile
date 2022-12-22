const htmlBlocks = function (employeeArray){
    return `
<div> ${employeeArray} </div>

    `
}
function appendManager (manager) {
    return`
    <h2> ${manager.name} </h2>

    `

}




function templatePagejs (employees){
    const teamCard = [];
    for (let i = 0; i < employees.length; i++) {
        const role = employees[i].getRole();
        const member = employees[i]

        if (role === "Manager") teamCard.push(appendManager(member))
    //     else if(role === "Engineer") teamCard.push(appendEngineer(member))
    //     else if(role === "Intern") teamCard.push(appendIntern(member))
    }

    return htmlBlocks()

};

module.exports = templatePagejs;