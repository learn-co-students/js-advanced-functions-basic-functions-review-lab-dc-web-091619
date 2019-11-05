function saturdayFun(todo = "roller-skate") {
  return `This Saturday, I want to ${todo}!`
}

function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(pa_out="*") {
  return function(pa_in="special") {
    return `You are ${pa_out}${pa_in}${pa_out}!`
  }
}

const Calculator = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b){
    return a - b;
  },
  multiply: function(a, b){
    return a*b;
  },
  divide: function(a, b){
    return a/b;
  }
}

function actionApplyer(integer, array) {
  if (array.length === 0) {
    return integer;
  } else {
    let argument = integer;
    for (let i=0; i<array.length; i++) {
      argument = array[i](argument);
    }
    return argument;
  }
}