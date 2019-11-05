// Your code here
function saturdayFun(string="roller-skate") {
    return `This Saturday, I want to ${string}!`
}

let mondayWork = function(string="go to the office") {
    return `This Monday, I will ${string}.`
}

function wrapAdjective(string = "*") {
    return function(adjective = "special") {
        return `You are ${string}${adjective}${string}!`
    }
}

let Calculator = {
    add : function() {return 1 + 3},
    subtract : function() {return 1 - 3},
    multiply : function() {return 1 * 3},
    divide : function() {return 10 / 5}
}

function actionApplyer(num, functionsArray) {
    if (functionsArray.length === 0) {
        return num }
    else {
        let a = num
        functionsArray.forEach(func => a = func(a))
        return a 
    }

}