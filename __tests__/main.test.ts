import {test} from '@jest/globals'
import * as cp from 'child_process'
import * as path from 'path'
import * as process from 'process'

// shows how the runner will run a javascript action with env / stdout protocol
test('test runs', () => {
  process.env['INPUT_API_URL'] = 'http://localhost:3000'
  const np = process.execPath
  const ip = path.join(__dirname, '..', 'lib', 'main.js')
  const options: cp.ExecFileSyncOptions = {
    env: process.env
  }

  try {
    console.log(cp.execFileSync(np, [ip], options).toString())
  } catch (error) {
    console.log(error)
  }
})
