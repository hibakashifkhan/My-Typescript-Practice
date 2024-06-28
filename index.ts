#! /usr/bin/env node





//***********************************************************// 
//**PROGRAM README FILE DESCRIBING THE OPERATION AND SCENARIO**/
//***********************************************************// 

// is programe mein users input dega k aya barish horahi hy aur  agar tyre puncture hy
//to user governor house nahi jayega else agar barish nahi horahi to user governor house jayega is tarhan
// ka scenareo banaya hy practice k liye, additionally is programe mein inquirer k through user se input le kar
// us input to condition k andar match kya gaya hy takay user input k through result generate kya jasakay.


import inquirer from 'inquirer';

let answers = await inquirer.prompt([
    { 
        message: "Is it Raining ?.",
        type: "list",
        name: "rain",
        choices: ["Yes","No"],
},

{ 
        message: "Is bike tyre is puncture ?.",
        type: "list",
        name: "puncture",
        choices: ["Yes","No"],
},

{ 
        message: "Select options below to proceed further",
        type: "list",
        name: "operator",
        choices: ["Go...","Exit..."],
},

])

//****************************************************************************/
// using if else statement to match the conditions on the basis of user input
//****************************************************************************/

if (answers.rain === "Yes" && answers.puncture === "Yes"){
    console.log (" User cannot go to Governor House as it raining and bike tyre is punctured")
    }
    else if (answers.rain === "No" && answers.puncture === "No"){
        console.log (" User can go to Governor House as it is not raining and bike tyre is not punctured")
    }

    else if (answers.rain === "Yes" && answers.puncture === "No" && answers.operator === "Go..."){
        console.log (" User can go to Governor House as it raining and bike tyre is not punctured")
    }
    else if (answers.rain === "No" && answers.puncture === "Yes" && answers.operator === "Go..."){
        console.log (" User cannot go to Governor House as it is not raining and bike tyre is punctured")
    }
    else {
        console.log (" User cannot proceed as the operator selection is 'Exit...'")
    }
