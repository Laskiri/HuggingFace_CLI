# AI Model CLI Tool

This command-line tool provides quick and simple access to various AI models from Hugging Face. You can choose different model types and tune selected parameters if desired, or use the default configurations for minimal setup.

## Features

- Choose from different leightweight AI models available on Hugging Face.
- Pass the desired model aswell as given input as arguments to the command line script and await the result being logged or created to a desired output folder.  
- Default configurations in place for quick and easy usage.

## Prerequisites

- Node.js installed on your machine.
- A Hugging Face API token.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repository.git
   cd your-repository

2. Install the dependencies:
    ```JavaScript
     npm install

3. Create a .env file in the root directory and add your Hugging Face API token:
    HF_TOKEN=your_huggingface_token

## Usage
 1. Enter the folder of the type of model you want to make use of, eg for textGeneration:
    ```JavaScript
    cd ./textGeneration
 2. Call the script with node eg;
    ```JavaScript
    node textGen.js --model=gpt2 --prompt="Once upon a time" --max_tokens=50
 3. To display the help message, you can use either the usage,info or help flag:
    ```JavaScript
    node textGen.js --help


## License
This project is licensed under the MIT License.
    