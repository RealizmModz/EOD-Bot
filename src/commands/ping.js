module.exports = {
    data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Get your latency'),
     async execute(interaction) {
        await interaction.reply('Pong');
    },
};