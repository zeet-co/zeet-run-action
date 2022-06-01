import * as core from '@actions/core'
import * as exec from '@actions/exec'

async function run() {
  const out = await exec.getExecOutput('zeet job:run', [
    core.getInput('project') || core.getInput('project_id'),
    core.getInput("command"),
    `--build=${core.getInput('build')}`,
    `--follow=${core.getBooleanInput('wait')}`,
  ],
{failOnStdErr: true}
  )

  const links = out.stdout.match(/https?:\/\/zeet\.co\/repo[^\s]+/)
  core.setOutput('link', links ? links[0] : 'Not Found')
}

run()
