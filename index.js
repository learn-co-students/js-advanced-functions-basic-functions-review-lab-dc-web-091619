function saturdayFun(activity="roller-skate"){
  return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(work="go to the office"){
  return `This Monday, I will ${work}.`
}

function wrapAdjective(flair="*"){
  return function(besonders="special"){
    return `You are ${flair}${besonders}${flair}!`
  }
}

let Calculator = {
  add: function(a,b){ return a + b },
  subtract: function(a,b){ return a - b },
  multiply: function(a,b){ return a * b },
  divide: function(a,b){ return a / b }
};

function actionApplyer(int,array){
  let a = int
  for (let i = 0; i < array.length; i++){
    a = array[i](a)
  }
  return a
};