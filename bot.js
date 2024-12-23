const TelegramBot = require('node-telegram-bot-api');
const path = require('path'); // For handling file paths

// Replace 'YOUR_BOT_TOKEN' with your Telegram Bot token
const token = '7609388714:AAFLhC7c0COP_hI4mG1B2hDYKFd7kLWg4oE';

// Create a bot instance
const bot = new TelegramBot(token, { polling: true });

// Define the path to your CV file
const cvPath = path.join(__dirname, 'My_cv_documentation.pdf');

// Welcome message with buttons
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const username = msg.from.username || 'User'; // Get username or fallback to 'User'

  const welcomeMessage = `Hello, ${username}! Welcome to the bot. Click the buttons below to get more information.`;

  const options = {
    reply_markup: {
      inline_keyboard: [
        [{ text: 'Name', callback_data: 'name' }],
        [{ text: 'Education', callback_data: 'education' }],
        [{ text: 'GitHub', callback_data: 'github' }],
        [{ text: 'Portfolio', callback_data: 'portfolio' }],
        [{ text: 'Location', callback_data: 'location' }],
        [{ text: 'Skills & Expertise', callback_data: 'skills' }],
        [{ text: 'Download My CV', callback_data: 'download_cv' }],
      ],
    },
  };

  bot.sendMessage(chatId, welcomeMessage, options);
});

// Handling button clicks
bot.on('callback_query', (callbackQuery) => {
  const chatId = callbackQuery.message.chat.id;
  const messageId = callbackQuery.message.message_id; // To identify the message for editing
  const data = callbackQuery.data;

  if (data === 'download_cv') {
    // Send the CV file to the user
    bot.sendDocument(chatId, cvPath)
      .then(() => {
        console.log('CV sent successfully!');
      })
      .catch((err) => {
        console.error('Failed to send CV:', err);
      });
  } else {
    let responseMessage = '';

    if (data === 'name') {
      responseMessage = 'My name is **Woldemichael Debesaw**.';
    } else if (data === 'education') {
      responseMessage = `
        I have a BSS in Information Technology. I graduated in 2024.
        During my time at Wolkite University, I gained significant experience in software development,
        working on various projects that enhanced my technical skills and problem-solving abilities.
      `;
    } else if (data === 'github') {
      responseMessage = 'Check out my GitHub: [GitHub Profile](https://github.com/miki2144)';
    } else if (data === 'portfolio') {
      responseMessage = 'You can view my portfolio here: [My Portfolio](https://woldemichael-website.vercel.app/)';
    } else if (data === 'location') {
      responseMessage = `
        **Location Information**:
        - **Birthplace**: Ziquala, Wag Himra
        - **Current Location**: Addis Ababa, Ethiopia
      `;
    } else if (data === 'skills') {
      responseMessage = `
        **Skills and Expertise**:
        - Full Stack Software Developer specializing in **PHP (Laravel Framework)**.
        - Proficient in **React.js**, **Node.js**, and other JavaScript technologies.
        - Strong knowledge of **Networking and Cybersecurity**.
        - Expertise in solving real-world problems with software technology solutions.
        - Additional skills in **MySQL**, **RESTful APIs**, and **Git version control**.
      `;
    }

    // Edit the same message with the new response and keep the buttons
    bot.editMessageText(responseMessage, {
      chat_id: chatId,
      message_id: messageId,
      parse_mode: 'Markdown',
      reply_markup: {
        inline_keyboard: [
          [{ text: 'Name', callback_data: 'name' }],
          [{ text: 'Education', callback_data: 'education' }],
          [{ text: 'GitHub', callback_data: 'github' }],
          [{ text: 'Portfolio', callback_data: 'portfolio' }],
          [{ text: 'Location', callback_data: 'location' }],
          [{ text: 'Skills & Expertise', callback_data: 'skills' }],
          [{ text: 'Download My CV', callback_data: 'download_cv' }],
        ],
      },
    });
  }
});
