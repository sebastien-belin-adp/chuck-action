import * as core from '@actions/core'
import * as github from '@actions/github'
import * as axios from 'axios';

async function run() {
  try {
    const token = process.env.GITHUB_TOKEN || ''

    const context = (github as any).context
    const command = context.payload.comment.body.trim()

    if (command == '/chuck') {
      const octokit = new github.GitHub(token)
      const repository = context.payload.repository
      const issue = context.payload.issue

      octokit.issues.createComment({
        owner: repository.owner.login,
        repo: repository.name,
        issue_number: issue.number,
        body: '![' + octocat + '](' + octodex_url + '/' + octocat + ')'
      })
    }
  } catch (err) {
    core.setFailed(err.message)
  }
}

module.exports = {
  run
}
