import {Command, flags} from '@oclif/command'

export default class Publish extends Command {
  static description = 
  `Once complete, this sub command will publish the code to different places it belongs. 
For Example,
stateless functions go to firebase,
react web app goes to github pages, firebase hosting and heroku hosting at once.
stateful web api goes to heroku,
so does python ML api written in flask.
Code also gets pushed to its repository. 
  `;

  static flags = {
    help: flags.help({char: 'h'}),
    prod: flags.boolean({char: 'p'}),
    dev: flags.boolean({char: 'd'})
  }

  

  async run() {
    console.log(this.parse(Publish))
  }
}
