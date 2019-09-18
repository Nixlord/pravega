import { Command, flags } from '@oclif/command'

export default class Git extends Command {
  static description = "This is for automating best practices git workflow. (Master, Dev, Hotfix concurrently)"

  static flags = {
    help: flags.help({ char: 'h' }),
    feature: flags.string({
      char: 'f',
      description: 'feature wise branch change along with automatic stash/worktree management. '
    })
  }

  static args = [
    { name: 'feature' }
  ]

  async run() {
    console.log(this.parse(Git));
  }
}
