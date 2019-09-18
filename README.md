<<<<<<< HEAD
pravega
=======

Framework for small dev teams to leverage the power of cloud easily

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/pravega.svg)](https://npmjs.org/package/pravega)
[![CircleCI](https://circleci.com/gh/NixLord/pravega/tree/master.svg?style=shield)](https://circleci.com/gh/NixLord/pravega/tree/master)
[![Downloads/week](https://img.shields.io/npm/dw/pravega.svg)](https://npmjs.org/package/pravega)
[![License](https://img.shields.io/npm/l/pravega.svg)](https://github.com/NixLord/pravega/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
* [pravega](#pravega)
<!-- tocstop -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g pravega
$ pravega COMMAND
running command...
$ pravega (-v|--version|version)
pravega/0.1.0 win32-x64 node-v10.16.3
$ pravega --help [COMMAND]
USAGE
  $ pravega COMMAND
...
```
<!-- usagestop -->
```sh-session
$ npm install -g pravega
$ pravega COMMAND
running command...
$ pravega (-v|--version|version)
pravega/0.1.0 win32-x64 node-v10.16.3
$ pravega --help [COMMAND]
USAGE
  $ pravega COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`pravega git [FEATURE]`](#pravega-git-feature)
* [`pravega hello [FILE]`](#pravega-hello-file)
* [`pravega help [COMMAND]`](#pravega-help-command)
* [`pravega publish`](#pravega-publish)

## `pravega git [FEATURE]`

This is for automating best practices git workflow. (Master, Dev, Hotfix concurrently)

```
USAGE
  $ pravega git [FEATURE]

OPTIONS
  -f, --feature=feature  feature wise branch change along with automatic stash/worktree management.
  -h, --help             show CLI help
```

_See code: [src\commands\git.ts](https://github.com/NixLord/pravega/blob/v0.1.0/src\commands\git.ts)_

## `pravega hello [FILE]`

describe the command here

```
USAGE
  $ pravega hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ pravega hello
  hello world from ./src/hello.ts!
```

_See code: [src\commands\hello.ts](https://github.com/NixLord/pravega/blob/v0.1.0/src\commands\hello.ts)_

## `pravega help [COMMAND]`

display help for pravega

```
USAGE
  $ pravega help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.1/src\commands\help.ts)_

## `pravega publish`

Once complete, this sub command will publish the code to different places it belongs. 

```
USAGE
  $ pravega publish

OPTIONS
  -d, --dev
  -h, --help  show CLI help
  -p, --prod

DESCRIPTION
  For Example,
  stateless functions go to firebase,
  react web app goes to github pages, firebase hosting and heroku hosting at once.
  stateful web api goes to heroku,
  so does python ML api written in flask.
  Code also gets pushed to its repository.
```

_See code: [src\commands\publish.ts](https://github.com/NixLord/pravega/blob/v0.1.0/src\commands\publish.ts)_
<!-- commandsstop -->
* [`pravega hello [FILE]`](#pravega-hello-file)
* [`pravega help [COMMAND]`](#pravega-help-command)

## `pravega hello [FILE]`

describe the command here

```
USAGE
  $ pravega hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ pravega hello
  hello world from ./src/hello.ts!
```

_See code: [src\commands\hello.ts](https://github.com/NixLord/pravega/blob/v0.1.0/src\commands\hello.ts)_

## `pravega help [COMMAND]`

display help for pravega

```
USAGE
  $ pravega help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.1/src\commands\help.ts)_
<!-- commandsstop -->
=======
# pravega
Will hold the main CLI
>>>>>>> f12f0e05fd6e63c93b9912fdb78c184a698196a5
