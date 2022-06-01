# Zeet Run Action

Use this Github Action to run a Job on [Zeet](https://zeet.co).

## Example
```yaml
    steps:
      - name: Run command
        uses: zeet-co/zeet-run-action@v2
        with:
          deploy_key: ${{ secrets.ZEET_TOKEN }}
          project: zeet-demo/zeet-demo-node
          command: whoami
```

## Params

| Name         | Description                                                                                                                                          | Required                  |
|--------------|------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------|
| api_url      | The Zeet API URL                                                                                                                                     | No                        |
| deploy_key   | Zeet API Key: Create by going to https://zeet.co/account/api, or to [Dashboard](https://zeet.co/dashboard) > Team Settings > API Keys > New API Key. | Yes                       |
| project_name | The project name                                                                                                                                     | Yes (or use project_id)   |
| project_id   | The project id                                                                                                                                       | Yes (or use project_name) |
| command      | The command to run                                                                                                                                   | Yes                       |
| build        | Trigger build, or use the latest image                                                                                                               | No (default false)        |
| wait         | Wait for the command to finish, while streaming its output                                                                                           | No (default false)        |

## Outputs
`link`: the link to the job in the Dashboard