
function template(team) {
  let template = "";

  // looping to create each card for every employee in the array
  function employeeCard() {
    for (let i = 0; i < team.length; i++) {
      if (team[i].getRole() === "Manager") {
        template += `
        <div class="card" style="width: 15rem; ">
        <div class="card-body">
          <h4 class="card-title"><h5 class="card-title">${team[i].getName()}</h5>${team[i].getRole()}</h4>
          <p class="card-text">id: ${team[i].getId()} </p>
          <a href = "mailto: ${team[i].getEmail()}">${team[i].getEmail()}</a></a>
          <p>Office Number: ${team[i].getOfficeNumber()}</p>
        </div>
      </div>`;
      } else if (team[i].getRole() === "Engineer") {
        template += `
        <div class="card" style="width: 15rem; ">
        <div class="card-body">
          <h4 class="card-title"><h5 class="card-title">${team[i].getName()}</h5>${team[i].getRole()}</h4>
          <p class="card-text">id: ${team[i].getId()} </p>
          <a href = "mailto: ${team[i].getEmail()}">${team[i].getEmail()}</a></a>
          <p>GitHub profile: <a href="https://github.com/${team[i].getGitHub()}" target="_blank">${team[i].getGitHub()}</a></p>
        </div>
      </div>`;
      } else {
        template += `
        <div class="card" style="width: 15rem; ">
        <div class="card-body">
          <h4 class="card-title"><h5 class="card-title">${team[i].getName()}</h5>${team[i].getRole()}</h4>
          <p class="card-text">id: ${team[i].getId()} </p>
          <a href = "mailto: ${team[i].getEmail()}">${team[i].getEmail()}</a></a>
          <p>School: ${team[i].getSchool()}</p>
        </div>
      </div>`;
      }

    }
  }
  template += `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <link rel="stylesheet" href="styles.css">
  <title>Team Profile Generator</title>
</head>
<body>
   <div class ="header">My Team</div>
  <div class = "row  content">
    <div class ="col container">
`
     employeeCard();

    
 
  template += `
    </div>
  </div>
  
</body>
</html>`

  
  return template;


}
//template(team);
module.exports = template;
