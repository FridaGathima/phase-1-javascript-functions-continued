function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
 } 

const mondayWork = function (activity = "go to the office") {
    return `This Monday, I will ${activity}.`
 }

function wrapAdjective (operator = "*"){
    return function (activity = "a hard worker"){
                return `You are ${operator}${activity}${operator}!`;
    }  
 }


