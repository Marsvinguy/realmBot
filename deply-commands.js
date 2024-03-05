const { REST, Routes } = require('discord.js');
const { clientId, guildId, token } = require('./auth.json');
const fs = require('node:fs');
const path = require('node:path');

const commands = [];

const folderPath = path.join(__dirname, 'commands');
const commandFolder = fs.readdirSync(folderPath).filter(file => file.endsWith(".js"));

for(const file of commandFolder) {
    const filePath = path.join(folderPath, file);
    const command = require(filePath);
    if("data" in command && "execute" in command) {
        commands.push(command.data.toJSON());
    } else {
        console.log('Deploy found faulty command at ${filePath}');
    }
    
}

// Construct and prepare an instance of the REST module
const rest = new REST().setToken(token);

// and deploy your commands!
(async () => {
	try {
		console.log(`Started refreshing ${commands.length} application (/) commands.`);

		// The put method is used to fully refresh all commands in the guild with the current set
		const data = await rest.put(
			Routes.applicationGuildCommands(clientId, guildId),
			{ body: commands },
		);

		console.log(`Successfully reloaded ${data.length} application (/) commands.`);
	} catch (error) {
		// And of course, make sure you catch and log any errors!
		console.error(error);
	}
})();