import * as core from '@actions/core'
import {GraphQLClient} from 'graphql-request'
import {getSdk} from './generated/graphql'

async function run(): Promise<void> {
  try {
    const endpoint =
      core.getInput('api_url') || 'https://anchor.zeet.co/graphql'

    const token = core.getInput('deploy_key')
    const projectId = core.getInput('project_id')
    const command = core.getInput('command')
    const build = core.getBooleanInput('build')

    const graphQLClient = new GraphQLClient(endpoint, {
      headers: {
        authorization: `Bearer ${token}`
      }
    })

    const sdk = getSdk(graphQLClient)

    const result = await sdk.RunJob({
      input: {
        id: projectId,
        runCommand: command,
        build
      }
    })
    core.info(`${projectId} job run triggered!`)

    const link = `https://zeet.co/repo/${projectId}/jobs/${result?.runJob?.id}`

    core.info(`Zeet Dashboard: ${link}`)
    core.setOutput('link', link)

    core.debug(new Date().toTimeString())
  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(error.message)
    }
  }
}

run()
