To write a README file for your Telegram bot project, you can follow this structure:

---

# Telegram Bot - Personal CV Bot

This is a Telegram bot built with Node.js that allows users to interact and get information about my personal CV, including my name, education, GitHub profile, portfolio, skills, and more. The bot also provides an option to download my CV as a PDF.

## Features

- Welcome Message: When a user starts the bot, they will receive a welcome message with interactive buttons for different sections.
- Markdown Formatting: Responses are sent with markdown formatting for better readability.

## How to Use

1. Start the Bot: Type `/start` to begin interacting with the bot.

## Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/miki2144/telegram-app.git
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory of the project and add your Telegram Bot token like this:

   ```bash
   BOT_TOKEN=your_telegram_bot_token
   ```

4. Run the bot:

   ```bash
   node bot.js
   ```

   The bot will start running and be available for interactions.

## Technologies Used

- Node.js: JavaScript runtime for executing server-side code.
- **node-telegram-bot-api**: Library for interacting with the Telegram Bot API.
- Markdown: Used for formatting responses in the bot.
- Path: Node.js module to handle file paths.

## License

This project is licensed under the MIT License.

## Contributing

Feel free to fork this repository, submit issues, or create pull requests. Contributions are welcome!

---

This README will help users understand what the bot does, how to use it, and how to set it up on their own system.
