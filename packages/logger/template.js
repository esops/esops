import chalk from 'chalk';
import path from 'path';
import termImg from 'term-img';

require('colors'); // TODO: Change help to generated by actual CLI system

export const logo = () => ``;

export const info = message => `\n${logo()} ${chalk.dim.bold('INFO')} | ${chalk.green(message)}`;

export const error = err => `\n${logo()} ${chalk.red.bold('ERROR')} | ${chalk.red(err.message)}`;

export const slogan = () => ``;

// NOTE: termImg only support iTerm. For fallback on other terminals, 
// this will just use the slogan template.
export const header = () => logo();

export const help = () => (`
Main Commands

   ${'setup'.blue}       Wizard to help set up a your environment.
   ${'dev'.blue}         Begin developing a ntux application.
   ${'ship'.blue}        This will ship the app.
   ${'help'.blue}        Open help documentation.
   
Additional Commands:   

  ${'build'.blue}        Build production build. Should mainly be used by devop tools.
  ${'setup:base'.blue}   Set up spa-config and code editor related items (like linting).
  ${'setup:react'.blue}  Install all dependencies needed to get react environment going.
  ${'help'.blue}         Get help.  
`.grey
);