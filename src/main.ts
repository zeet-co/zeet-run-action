import * as core from '@actions/core'
import {GraphQLClient} from 'graphql-request'
import {getSdk, JobRunState} from './generated/graphql'

async function run(): Promise<void> {
  try {
    const endpoint =
      core.getInput('api_url') || 'https://anchor.zeet.co/graphql'

    const token = core.getInput('deploy_key')
    const projectPath = core.getInput('project')
    let projectId = core.getInput('project_id')
    const command = core.getInput('command')
    const build = core.getBooleanInput('build')
    const wait = core.getBooleanInput('wait')

    const graphQLClient = new GraphQLClient(endpoint, {
      headers: {
        authorization: `Bearer ${token}`
      }
    })

    const sdk = getSdk(graphQLClient)

    if (!projectId) {
      if (!projectPath) {
        core.error('invalid input, project name or id is required')
      }

      const p = await sdk.GetProject({
        path: projectPath
      })
      projectId = p.project?.id
    }

    const job = await sdk.RunJob({
      input: {
        id: projectId,
        runCommand: command,
        build
      }
    })
    core.info(`${projectId} job run triggered!`)

    const link = `https://zeet.co/repo/${projectId}/jobs/${job?.runJob?.id}`

    core.info(`Zeet Dashboard: ${link}`)
    core.setOutput('link', link)

    if (wait) {
      let done = false
      while (!done) {
        const result = await sdk.GetJob({
          repo: projectId,
          job: job?.runJob?.id
        })

        if (
          result.currentUser?.repo?.jobRun?.state === JobRunState.JobRunRunning
        ) {
          core.info('job executing...')
        } else if (
          result.currentUser?.repo?.jobRun?.state ===
          JobRunState.JobRunSucceeded
        ) {
          core.info('job succeeded')
          done = true
        } else if (
          result.currentUser?.repo?.jobRun?.state === JobRunState.JobRunFailed
        ) {
          core.info('job failed, check Zeet dashboard for more info')
          core.setFailed('job failed, check Zeet dashboard for more info')
          done = true
        }
      }
    }

    core.debug(new Date().toTimeString())
  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(error.message)
    }
  }
}

run()
