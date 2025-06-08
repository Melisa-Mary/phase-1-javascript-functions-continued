// code your solution here
// 1. Function declaration
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

// 2. Function expression
const mondayWork = function(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};

// 3. Function returning a function
function wrapAdjective(style = "*") {
  return function(adjective = "special") {
    return `You are ${style}${adjective}${style}!`;
  };
}

