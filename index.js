const { Client, GatewayIntentBits, ActivityType } = require('discord.js');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Keep bot alive with a web server
app.get('/', (req, res) => {
    res.send('Bot is running 24/7!');
});

app.listen(PORT, () => {
    console.log(`Web server is listening on port ${PORT}`);
});

// Discord Bot
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);

    // Set or clear bot status
    client.user.setPresence({
        activities: [{ name: '', type: ActivityType.Playing }], // Clear activity
        status: 'online', // Set bot status (options: 'online', 'idle', 'dnd', 'invisible')
    });
    console.log('Status bot telah dihapus.');
});

client.on('messageCreate', message => {
    if (message.content === '!ping') {
        message.reply('Pong!');
    }
});

client.login(process.env.TOKEN);
