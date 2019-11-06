// Your code here
function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`
}

let wrapAdjective = function(flair = "*"){
    return function(something = "special"){
        return `You are ${flair}${something}${flair}!`
    }
}

let Calculator = {
    add: function(a, b){
        return a + b
    },
    subtract: function(a,b){
        return a - b
    }, 
    multiply: function(a,b){
        return a * b
    },
    divide: function(a,b){
        return a/b
    }
}

function actionApplyer(starting, array){
    if (array.length === 0 ){
        return starting;
    } else {
        let start = starting

        for (let i = 0; i < array.length; i++ ){
          start = array[i](start)
        }
      
        return start
    }


}