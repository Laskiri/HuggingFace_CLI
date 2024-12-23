const axios = require('axios');
const config = require('../config.js');
const truncateAtLastDot = require('../helpers/truncateAtLastDot.js');
const ArgsHandler = require('../helpers/argsHandler.js');

const { HF_TOKEN } = config;

async function generateText({ model, prompt, max_tokens }) {


    const apiUrl = `https://api-inference.huggingface.co/models/${model}`;
    const headers = {
        Authorization: `Bearer ${HF_TOKEN}`,
        'Content-Type': 'application/json',
    };
    const data = {
        inputs: prompt,
        parameters: {
            max_new_tokens: max_tokens, // Ensure this parameter is correctly set
            return_full_text: false,
            temperature: temp,
        },
    };

    try {
        const response = await axios.post(apiUrl, data, { headers });
        return response.data;
    } catch (error) {
        console.error('Error generating text:', error);
        return null;
    }
}

function defaultPrompt() {
    const defaultPrompt = 'teach me something cool';
    /* console.log("Using default prompt: ", defaultPrompt); */
    return defaultPrompt;
}

// Parse command-line arguments
const params = {
    "model": "string",
    "prompt": "string",
    "max_tokens": "number"
}

const argsHandler = new ArgsHandler(__filename, params);
const args = argsHandler.handleArgs(process.argv.slice(2));
const model = args.model || 'gpt2';
const prompt = args.prompt || defaultPrompt();
const max_tokens = args.max_tokens || 100;
const temp = Math.random() * 0.2 + 0.8;
console.log('Generating text with the following specifications; \nModel:', model, '\nMax tokens:', max_tokens, '\nTemperature:', temp, '\nPrompt:', prompt);

generateText({ model, prompt, max_tokens }).then((result) => {
    if (result && result.length > 0 && result[0].generated_text) {
        const truncatedText = truncateAtLastDot(result[0].generated_text);
        console.log('Generated text:', truncatedText);
    } else {
        console.log('No text generated.');
    }
});