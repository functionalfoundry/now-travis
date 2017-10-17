# now-travis

This is a work-in-progress iteration on the official
version of [now-travis](https://github.com/eliperelman/now-travis)
and the modifications made in the [glamorous-website](https://github.com/kentcdodds/glamorous-website/blob/master/other/now-travis) repo.

## Installation

```bash
# NPM
npm install --dev @functionalfoundry/now-travis

# Yarn
yarn add --dev @functionalfoundry/now-travis
```

## Usage

This version of now-travis requires the following environment
variables to be defined:

* `ROOT_DIR` — the directory to deploy
* `TRAVIS_INSTANCE` — `com` or `org`
* `NOW_NAME` — the name to use for deployments
* `NOW_ALIAS` — the now.sh alias to use
* `NOW_TOKEN` — an access token to deploy to now.sh
* `GH_TOKEN` — a personal GitHub token to annotate PRs with deployment URLs

## License

This project is licensed under the MIT License.
