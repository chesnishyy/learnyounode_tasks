

console.log(process.argv.filter((element, index) => index >= 2).reduce((summ, element, index) => +summ + +element))