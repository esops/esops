#!/usr/bin/env node

import run from './main'
import log from '../side-effects/console'
import {BadArgumentsMessage, EsopsHowTo} from '../core/messages'
const argv = require('minimist')(process.argv.slice(2))

// Force Overwrite
if (argv.overwrite || argv.o) require('prompts').inject([true])

// Help
if (argv._ && argv._[0] === 'help') {
  log.md(EsopsHowTo())
}

// Unknown Args (currently no arguments are supported)
else if (argv._.length > 0) {
  log.md(BadArgumentsMessage({args: process.argv.slice(2)}))
}

// Run Esops
else {
  const cwd = process.cwd()
  run({cwd})
}