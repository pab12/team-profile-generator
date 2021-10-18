

function add(){
  return `
  Hello`
}
// Manager's name: ${manager.getName()}



function template(team){
  let template = "";
  console.log("this",`${team[0]}`)
  for(let i =0; i<team.length;i++){
    template += `
    <section class="my-3" id="aboutss">
    Manager's name: ${team[i].getName()}
    ${team[i].getEmail()}
    ${team[i].getId()}
    ${add()}
    `
  }
  return template;
}
//template(team);
module.exports = template;