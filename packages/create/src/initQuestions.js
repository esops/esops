'use strict'

const inquirer = require('inquirer')

const initQuestions = [
  {
    type: 'list',
    name: 'language',
    default: 0,
    choices: [
      {
        name: 'JavaScript',
        value: 'javascript'
      },
      {
        name: 'TypeScript',
        value: 'typescript'
      }
    ],
    message: 'Which language do you want to use to write your elm in js app?'
  },
  {
    type: 'list',
    name: 'streamLib',
    default: 0,
    choices: [
      {
        name: 'XStream, tailored for Cycle.js',
        value: 'xstream'
      },
      {
        name: 'Most.js, a blazing fast stream library',
        value: 'most'
      },
      {
        name: 'RxJS',
        value: 'rxjs'
      }
    ],
    message: 'Which reactive stream library do you want to use?'
  }
]

module.exports = cb => {
  inquirer.prompt(initQuestions).then(cb)
}
