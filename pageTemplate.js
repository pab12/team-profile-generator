

function add(){
  return `
  Hello`
}
// Manager's name: ${manager.getName()}



function template(team){
  let template = "";

  template += `
  <section class="my-3" id="aboutss">
 
  `
  console.log("this",`${team[0]}`)
  for(let i =0; i<team.length;i++){
    if(team[i].getRole() === "Manager"){
       template += `${team[i].getOfficeNumber()}`;
    } else if(team[i].getRole() === "Engineer") {
      template += `${team[i].getGitHub()}`;
    } else {
      template += `${team[i].getSchool()}`;
    }
   
  }
  return template;
}
//template(team);
module.exports = template;


// Manager's name: ${team[i].getName()}
// ${team[i].getEmail()}
// ${team[i].getId()}
// ${add()}