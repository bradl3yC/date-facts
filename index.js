const chalk = require('chalk')
const moment = require('moment')
const midnight = moment().startOf('day')
const now = moment()

console.log(`Today is ${chalk.blue(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"))}`)
console.log(`It is the ${chalk.red(moment().format("DDDo"))} day of the year`)
console.log(`It is the ${chalk.red(parseInt((now - midnight) / 1000))} second of the day`);
if (moment().isDST() === true) {
  console.log(`It ${chalk.green("is")} during Daylight Savings Time`)
} else {
  console.log(`It ${chalk.red("is not")} during Daylight Savings Time`)
}
if (moment().isLeapYear() === true) {
  console.log(`It ${chalk.green("is")} a leap year`)
} else {
  console.log(`It ${chalk.red("is not")} a leap year`)
}
