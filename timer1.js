'use strict';

const args = process.argv.slice(2);
const sortedArgs = () => {
  let newArgs = [];
  for (let arg of args) {
    if (arg > 0 && !arg.isNaN) {
      let modArg = ('0' + arg).slice(-2);
      newArgs.push(modArg);
    }
  }

  return newArgs.sort();
};
const usedArgs = sortedArgs();

const beepBeep = (usedArgs) => {
  for (let i = 0; i < usedArgs.length; i++) {
    setTimeout(() => {
      if (usedArgs.length === 0) {
        return undefined;
      } else {
        process.stdout.write('beep');
      }
    }, usedArgs[i] * 1000);
  }
};
beepBeep(usedArgs);