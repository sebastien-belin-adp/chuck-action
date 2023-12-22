# chuck-action

Display a Chuck Norris Joke to a PR

## Example

```yml
on: issue_comment

jobs:
  chuck-norris-joke:
    runs-on: ubuntu-latest
    steps:
    - uses: sebastien-belin-adp/chuck-action@main
      env:
        GITHUB_TOKEN: "${{ secrets.GITHUB_TOKEN }}"
```
