import * as path from 'path'
import {Try} from 'riteway'

import esops from '../../index'
import {cleanErrorString} from '../../test-utilities/fs-utils'
import {withSnapshots} from '../../test-utilities/withSnapshots'
import {withTempDir} from '../../test-utilities/withTempDir'

const rootPath = path.join(__dirname, './module')

const describe = withSnapshots(__filename)

describe('esops() bad json', async assert => {
  await withTempDir(__dirname, rootPath, async root => {
    const snap = cleanErrorString(root)(await Try(esops, {root}))
    await assert({
      given: 'non parseable',
      should: 'throw a friendly error',
      snap
    })
  })
})