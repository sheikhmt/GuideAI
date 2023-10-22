const process = require('process');
const argument = process.argv[2];

const { TextServiceClient } = require("@google-ai/generativelanguage");
const { GoogleAuth } = require("google-auth-library");
const { log } = require('console');
const { getPromptString } = require('./prompt.js')

const MODEL_NAME = "models/text-bison-001";
const API_KEY = "AIzaSyD7T1qI3GXs3QFex_JPpCNL_uZEvnpYums";

const client = new TextServiceClient({
  authClient: new GoogleAuth().fromAPIKey(API_KEY),
});

const promptString = "";

const stopSequences = [];
//cd C:\Dev\GuideAI\ai
//node ai_agent.js

class AIAgent
{
	constructor()
    {
        console.log('(new AI agent created)');
    }

    // Input message
    inputMessage(message)
    {
        const promptString = getPromptString(message);
        client.generateText({
            model: MODEL_NAME, // required, which model to use to generate the result
            temperature: 0.35, // optional, 0.0 always uses the highest-probability result
            candidateCount: 1, // optional, how many candidate results to generate
            top_k: 40, // optional, number of most probable tokens to consider for generation
            top_p: 0.95, // optional, for nucleus sampling decoding strategy
            max_output_tokens: 1024, // optional, maximum number of output tokens to generate
            stop_sequences: stopSequences, // optional, sequences at which to stop model generation
            // optional, safety settings
            safety_settings: [{"category":"HARM_CATEGORY_DEROGATORY","threshold":1},{"category":"HARM_CATEGORY_TOXICITY","threshold":1},{"category":"HARM_CATEGORY_VIOLENCE","threshold":2},{"category":"HARM_CATEGORY_SEXUAL","threshold":2},{"category":"HARM_CATEGORY_MEDICAL","threshold":2},{"category":"HARM_CATEGORY_DANGEROUS","threshold":2}],
            prompt: {
              text: promptString,
            },
          }).then(result => {
            // console.log(JSON.stringify(result, null, 2));
            // console.log('result:',JSON.stringify(result, null, 2))
            const output = JSON.stringify(result[0].candidates[0].output, null, 2)
            console.log(output);
            var input = prompt('Type message (type "exit" to quit): ');
            if (input.includes('exit'))
            {
                return;
            }
            ai.inputMessage(input);
          });
    }

    // Output message
    outputMessage(message)
    {
        return message;
    }
}



// Test loop
const prompt = require('prompt-sync')();
var ai = new AIAgent();
var input = prompt('Type message (type "exit" to quit): ');
ai.inputMessage(input);
// while (true)
// {
//     // Input
//     var input = prompt('Type message (type "exit" to quit): ');
//     if (input.includes('exit'))
//     {
//         break;
//     }

//     // Output
//     var output = ai.inputMessage(input);
// }
