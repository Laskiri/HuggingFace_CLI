const minimist = require('minimist');
const path = require('path');

class ArgsHandler {
    constructor(filename, params) {
        let helpMessage = `Usage: node ${path.basename(filename)}`;
        for (const [key, value] of Object.entries(params)) {
            helpMessage += ` --${key}=<${value}>`;
        }
        this.helpMessage = helpMessage;
    }

    handleArgs(args) {
        const parsedArgs = minimist(args);
        if (parsedArgs.help || parsedArgs.info || parsedArgs.usage) {
            console.log(this.helpMessage);
            process.exit(0);
        }
        return parsedArgs;
    }
}

module.exports = ArgsHandler;