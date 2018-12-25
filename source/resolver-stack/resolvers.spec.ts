import {describe} from 'riteway'

import * as resolver from './'
import {MOCK_STACKS} from '../core/examples'

describe('resolver()', async assert => {
  const config = {
    cwd: MOCK_STACKS['basic-gitignore']
  }

  assert({
    given: 'single FS path',
    should: 'return fs path as LocalOptionWithProps',
    expected: [[config.cwd + '/', {}]],
    actual: await resolver.resolve('./', config)
  })

  assert({
    given: 'single FS path as array',
    should: 'return fs path as LocalOptionWithProps',
    expected: [[config.cwd + '/', {}]],
    actual: await resolver.resolve(['./'], config)
  })

  assert({
    given: 'single FS path with props',
    should: 'return fs path as LocalOptionWithProps',
    expected: [[config.cwd + '/', {}]],
    actual: await resolver.resolve([['./', {}]], config)
  })
})

/**
 * Utilities
 */
// const withTempFolder = callback => t => {
//   const dirname = __dirname + '/.tmp/'
//   if (!fs.existsSync(dirname)) fs.mkdirSync(dirname)
//   callback({t, dirname})
//   rimraf.sync(dirname, fs)
// }

// const keyValueExists = (key, value, list) =>
//   R.pipe(
//     R.find(R.propEq(key, value)),
//     R.isEmpty,
//     R.not
//   )(list)

/**
 * Specifications
 */

// test('resolve stack manifest', t => {
//   t.plan(1)
//   const actual = resolvers.findStackDefinition(MOCK_STACKS.basic)
//   const expected = [
//     '../../templates/basic',
//     '../../templates/basic-with-package'
//   ]
//   t.deepEquals(actual, expected)
// })

// test('get list of paths from template directory', t => {
//   t.plan(1)
//   const templateDirectory = MOCK_INFRASTRUCTURES.basic
//   const actual = resolvers.findStackDefinition(templateDirectory)
//   const expected = [
//     path.join(templateDirectory, '.vscode/settings.json'),
//     path.join(templateDirectory, 'src/stores/stores-architecture.md'),
//     path.join(templateDirectory, 'tsconfig.json')
//   ]
//   t.deepEqual(actual, expected)
// })