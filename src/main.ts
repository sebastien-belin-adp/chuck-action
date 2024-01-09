const core = require("@actions/core")
const github = require("@actions/github")
const { Octokit } = require("@octokit/action");
const axios = require("axios")

const getChuckNorrisJoke = async () => {
  const response = await axios.get("https://api.chucknorris.io/jokes/random")
  return response.value
}

async function run () {
  try {
    const token = process.env.GITHUB_TOKEN || ""

    const context = github.context
    const command = context.payload.comment.body.trim()

    if (command === "/chuck") {
      const octokit = new Octokit();
      const repository = context.payload.repository
      const issue = context.payload.issue

      const joke = await getChuckNorrisJoke()
      console.debug(`Chuck Norris Joke: ${joke}`)

      octokit.rest.issues.createComment({
        owner: repository.owner.login,
        repo: repository.name,
        issue_number: issue.number,
        body: joke
      })
    }
  } catch (err) {
    core.setFailed(err.message)
  }
}

module.exports = {
  run
}
