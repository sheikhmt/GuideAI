class AIAgent
{

	constructor()
    {
        console.log('(new AI agent created)');
    }

    // Input message
    inputMessage(message)
    {
        console.log('input message: ' + message);
        this.outputMessage(message);
    }

    // Output message
    outputMessage(message)
    {
        console.log('output message: ' + message);
        return message;
    }
}


// Test loop
const prompt = require('prompt-sync')();
var ai = new AIAgent();
while (true)
{
    // Input
    var input = prompt('Type message (type "exit" to quit): ');
    if (input.includes('exit'))
    {
        break;
    }

    // Output
    var output = ai.inputMessage(input);
}