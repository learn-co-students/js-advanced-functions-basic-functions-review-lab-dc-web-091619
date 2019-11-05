// Your code here
function saturdayFun(word="roller-skate"){
    return "This Saturday, I want to "+ word +"!"
}

let mondayWork = function (something = "go to the office"){
    return `This Monday, I will ${something}.`
}

function wrapAdjective(flair = "*"){
    return function (parameter="special"){
        return `You are ${flair}${parameter}${flair}!`
    }
}

let Calculator = {
    add: function(){
        return 1+3
    },
    subtract: function(){
        return 1-3
    },
    multiply: function(){
        return 1*3
    },
    divide: function(){
        return 10/5
    }
}

function actionApplyer (number, functionsArr){
    let num = number

    for (let i = 0; i<functionsArr.length; i++ ){
        num = functionsArr[i](num)
    }
    return num
}