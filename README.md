# chuck-action

Display a Chuck Norris Joke to a PR using https://api.chucknorris.io/

## Example

```yml
on: issue_comment

permissions:
  issues: write

jobs:
  chuck-norris-joke:
    runs-on: ubuntu-latest
    steps:
    - uses: sebastien-belin-adp/chuck-action@main
      env:
        GITHUB_TOKEN: "${{ secrets.GITHUB_TOKEN }}"
```
