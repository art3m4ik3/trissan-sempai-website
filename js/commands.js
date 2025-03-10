document.addEventListener("DOMContentLoaded", () => {
    const commandList = document.querySelector(".command-list");

    const commands = [
        {
            name: "afk",
            category: "utility",
            description: "Set your status as AFK (Away From Keyboard).",
            usage: "/afk [reason]",
            parameters: [
                {
                    name: "reason",
                    description: "The reason for going AFK (defaults to 'AFK')",
                },
            ],
        },
        {
            name: "boosterrole create",
            category: "utility",
            description: "Create a custom booster role for yourself.",
            usage: "/boosterrole create <color> <name>",
            parameters: [
                {
                    name: "color",
                    description:
                        "The color for your role (hex code or color name)",
                },
                { name: "name", description: "The name for your role" },
            ],
        },
        {
            name: "boosterrole rename",
            category: "utility",
            description: "Change the name of your booster role.",
            usage: "/boosterrole rename <name>",
            parameters: [
                { name: "name", description: "The new name for your role" },
            ],
        },
        {
            name: "boosterrole color",
            category: "utility",
            description: "Change the color of your booster role.",
            usage: "/boosterrole color <color_input>",
            parameters: [
                {
                    name: "color_input",
                    description:
                        "The color for your role (hex code, color name, or emoji)",
                },
            ],
        },
        {
            name: "boosterrole icon",
            category: "utility",
            description: "Set a custom icon for your booster role.",
            usage: "/boosterrole icon <emoji_or_url>",
            parameters: [
                {
                    name: "emoji_or_url",
                    description:
                        "The emoji or image URL to use as the role icon",
                },
            ],
        },
        {
            name: "boosterrole share",
            category: "utility",
            description: "Share your booster role with another member.",
            usage: "/boosterrole share <member>",
            parameters: [
                {
                    name: "member",
                    description: "The member to share your role with",
                },
            ],
        },
        {
            name: "boosterrole unshare",
            category: "utility",
            description: "Remove your shared booster role from a member.",
            usage: "/boosterrole unshare <member>",
            parameters: [
                {
                    name: "member",
                    description: "The member to remove your shared role from",
                },
            ],
        },
        {
            name: "boosterrole remove",
            category: "utility",
            description: "Remove your custom booster role.",
            usage: "/boosterrole remove",
            parameters: [],
        },
        {
            name: "counting leaderboard",
            category: "utility",
            description: "Show the counting leaderboard.",
            usage: "/counting leaderboard",
            parameters: [],
        },
        {
            name: "counting count",
            category: "utility",
            description: "Show the current counting number.",
            usage: "/counting count",
            parameters: [],
        },
        {
            name: "donate",
            category: "utility",
            description: "Support the bot by making a donation",
            usage: "/donate",
            parameters: [],
        },
        {
            name: "work",
            category: "economy",
            description: "Work to earn some money",
            usage: "/work",
            parameters: [],
        },
        {
            name: "balance",
            category: "economy",
            description: "Check your balance",
            usage: "/balance",
            parameters: [],
        },
        {
            name: "deposit",
            category: "economy",
            description: "Deposit money into your bank",
            usage: "/deposit <amount>",
            parameters: [
                { name: "amount", description: "Amount of money to deposit" },
            ],
        },
        {
            name: "rob",
            category: "economy",
            description: "Rob a user to steal some money",
            usage: "/rob <user>",
            parameters: [{ name: "user", description: "The user to rob" }],
        },
        {
            name: "fish",
            category: "economy",
            description: "Try your luck fishing",
            usage: "/fish",
            parameters: [],
        },
        {
            name: "mine",
            category: "economy",
            description: "Mine for valuable ores",
            usage: "/mine",
            parameters: [],
        },
        {
            name: "slots",
            category: "economy",
            description: "Try your luck at the slots",
            usage: "/slots <machine> <bet>",
            parameters: [
                {
                    name: "machine",
                    description: "Choose machine type (a/b/c/d)",
                },
                { name: "bet", description: "Amount to bet" },
            ],
        },
        {
            name: "shop",
            category: "economy",
            description: "View available items in the shop",
            usage: "/shop",
            parameters: [],
        },
        {
            name: "buy",
            category: "economy",
            description: "Buy an item from the shop",
            usage: "/buy <item> [quantity]",
            parameters: [
                { name: "item", description: "The item you want to buy" },
                {
                    name: "quantity",
                    description: "How many to buy (default: 1)",
                },
            ],
        },
        {
            name: "inventory",
            category: "economy",
            description: "View your inventory",
            usage: "/inventory",
            parameters: [],
        },
        {
            name: "lottery",
            category: "economy",
            description: "Try your luck with a lottery ticket!",
            usage: "/lottery",
            parameters: [],
        },
        {
            name: "coinflip",
            category: "economy",
            description: "Flip a coin and bet on the outcome",
            usage: "/coinflip <choice> <bet>",
            parameters: [
                { name: "choice", description: "heads or tails" },
                { name: "bet", description: "Amount to bet" },
            ],
        },
        {
            name: "diceroll",
            category: "economy",
            description: "Roll a dice and try to guess the number",
            usage: "/diceroll <guess> <bet>",
            parameters: [
                { name: "guess", description: "Guess (1-6)" },
                { name: "bet", description: "Amount to bet" },
            ],
        },
        {
            name: "image",
            category: "fun",
            description: "Generate an image based on a text prompt.",
            usage: "/image <prompt>",
            parameters: [
                {
                    name: "prompt",
                    description:
                        "The text description of the image you want to generate",
                },
            ],
        },
        {
            name: "insult",
            category: "fun",
            description: "Unleash a witty insult upon a member",
            usage: "/insult <user>",
            parameters: [
                {
                    name: "user",
                    description: "The unfortunate soul to receive an insult",
                },
            ],
        },
        {
            name: "dadjoke",
            category: "fun",
            description: "Get a good laugh, if thats even possible",
            usage: "/dadjoke",
            parameters: [],
        },
        {
            name: "waifu",
            category: "fun",
            description: "Generate a random waifu image",
            usage: "/waifu",
            parameters: [],
        },
        {
            name: "kiss",
            category: "fun",
            description: "Give someone a big smoooch",
            usage: "/kiss <user>",
            parameters: [
                {
                    name: "user",
                    description:
                        "Choose the lucky person to receive a big smooch",
                },
            ],
        },
        {
            name: "hug",
            category: "fun",
            description: "Give someone a warm hug",
            usage: "/hug <user>",
            parameters: [
                {
                    name: "user",
                    description:
                        "Choose the person you want to give a warm hug to!",
                },
            ],
        },
        {
            name: "bite",
            category: "fun",
            description: "Playfully bite someone",
            usage: "/bite <user>",
            parameters: [
                { name: "user", description: "Who do you want to bite" },
            ],
        },
        {
            name: "poke",
            category: "fun",
            description: "Poke someone",
            usage: "/poke <user>",
            parameters: [
                { name: "user", description: "Who do you want to poke?" },
            ],
        },
        {
            name: "wink",
            category: "fun",
            description: "Wink at someone",
            usage: "/wink <user>",
            parameters: [
                { name: "user", description: "The person you want to wink at" },
            ],
        },
        {
            name: "stare",
            category: "fun",
            description: "Gaze intently at someone",
            usage: "/stare <user>",
            parameters: [
                {
                    name: "user",
                    description:
                        "The person you want to stare at **intensely**",
                },
            ],
        },
        {
            name: "lick",
            category: "fun",
            description: "Send a playful lick to someone",
            usage: "/lick <user>",
            parameters: [
                { name: "user", description: "The person you want to lick" },
            ],
        },
        {
            name: "nyah",
            category: "fun",
            description: "Meow !",
            usage: "/nyah",
            parameters: [],
        },
        {
            name: "wyr",
            category: "fun",
            description: "Play would you rather!",
            usage: "/wyr",
            parameters: [],
        },
        {
            name: "cat",
            category: "fun",
            description: "Grab a picture of a kitty!",
            usage: "/cat",
            parameters: [],
        },
        {
            name: "rps",
            category: "fun",
            description: "Play rock, paper, scissors",
            usage: "/rps <choice>",
            parameters: [
                {
                    name: "choice",
                    description: "Choose rock, paper, or scissors",
                },
            ],
        },
        {
            name: "eightball",
            category: "fun",
            description: "Ask the magic 8-ball a question",
            usage: "/eightball <question>",
            parameters: [
                {
                    name: "question",
                    description: "Your question for the 8-ball",
                },
            ],
        },
        {
            name: "guess",
            category: "fun",
            description: "Guess a number between 1 and 10",
            usage: "/guess <number>",
            parameters: [{ name: "number", description: "Your guess (1-10)" }],
        },
        {
            name: "credits",
            category: "utility",
            description: "The list of the developers",
            usage: "/credits",
            parameters: [],
        },
        {
            name: "suggest",
            category: "utility",
            description: "Give us a suggestion!",
            usage: "/suggest <suggestion>",
            parameters: [
                {
                    name: "suggestion",
                    description: "The suggestion, be as detailed as possible",
                },
            ],
        },
        {
            name: "commands",
            category: "utility",
            description: "View the list of available commands",
            usage: "/commands",
            parameters: [],
        },
        {
            name: "level",
            category: "leveling",
            description: "Check your or someone else's level",
            usage: "/level [member]",
            parameters: [
                {
                    name: "member",
                    description: "The member to check level for (optional)",
                },
            ],
        },
        {
            name: "level_leaderboard",
            category: "leveling",
            description: "View the server's level leaderboard",
            usage: "/level_leaderboard",
            parameters: [],
        },
        {
            name: "ban",
            category: "moderation",
            description: "Ban a user from the server",
            usage: "/ban <user> <reason>",
            parameters: [
                { name: "user", description: "The user to ban" },
                { name: "reason", description: "The reason for the ban" },
            ],
        },
        {
            name: "kick",
            category: "moderation",
            description: "Kick a user from the server",
            usage: "/kick <user> <reason>",
            parameters: [
                { name: "user", description: "The user to kick" },
                { name: "reason", description: "The reason for the kick" },
            ],
        },
        {
            name: "mute",
            category: "moderation",
            description: "Mute a user",
            usage: "/mute <user> <reason> [duration]",
            parameters: [
                { name: "user", description: "The user to mute" },
                { name: "reason", description: "The reason for the mute" },
                {
                    name: "duration",
                    description:
                        "The duration of the mute in seconds (optional)",
                },
            ],
        },
        {
            name: "purge",
            category: "moderation",
            description: "Purge any amount of messages from the chat",
            usage: "/purge <amount>",
            parameters: [
                {
                    name: "amount",
                    description: "The amount of messages to purge",
                },
            ],
        },
        {
            name: "send_ticket",
            category: "utility",
            description: "Send the ticket creation embed",
            usage: "/send_ticket",
            parameters: [],
        },
        {
            name: "say",
            category: "utility",
            description: "Sends a message",
            usage: "/say <message>",
            parameters: [
                { name: "message", description: "The message to send" },
            ],
        },
        {
            name: "setnickname",
            category: "utility",
            description: "Change your nickname",
            usage: "/setnickname [nickname]",
            parameters: [
                {
                    name: "nickname",
                    description:
                        "Your new nickname. Leave empty to remove nickname",
                },
            ],
        },
        {
            name: "avatar",
            category: "utility",
            description: "Show a user's avatar",
            usage: "/avatar [user]",
            parameters: [
                {
                    name: "user",
                    description:
                        "The user to show avatar for. Leave empty for your own avatar",
                },
            ],
        },
        {
            name: "user_details",
            category: "utility",
            description: "Show detailed information about a user",
            usage: "/user_details [user]",
            parameters: [
                {
                    name: "user",
                    description:
                        "The user to show details for. Leave empty for your own details",
                },
            ],
        },
        {
            name: "messages count",
            category: "utility",
            description: "Shows message count for a user",
            usage: "/messages count [user]",
            parameters: [
                {
                    name: "user",
                    description: "The user to check message count for (optional)",
                },
            ],
        },
        {
            name: "messages leaderboard",
            category: "utility",
            description: "Shows the message count leaderboard",
            usage: "/messages leaderboard <period>",
            parameters: [
                {
                    name: "period",
                    description: "Select period (daily/weekly/monthly/total)",
                },
            ],
        },
        {
            name: "messages set",
            category: "utility",
            description: "Set message count for a user (Admin only)",
            usage: "/messages set <count> [user]",
            parameters: [
                {
                    name: "count",
                    description: "New message count",
                },
                {
                    name: "user",
                    description: "The user to set count for (optional)",
                },
            ],
        },
    ];

    function createCommandElement(command) {
        const commandItem = document.createElement("div");
        commandItem.classList.add("command-item");
        commandItem.setAttribute("data-category", command.category);

        commandItem.innerHTML = `
            <div class="command-header">
                <h3 class="command-name">${command.name}</h3>
                <span class="command-category ${command.category}">${
            command.category
        }</span>
            </div>
            <p class="command-description">${command.description}</p>
            <pre class="command-usage">${command.usage}</pre>
            ${
                command.parameters.length
                    ? `
                <div class="command-parameters">
                    <h4>Parameters:</h4>
                    ${command.parameters
                        .map(
                            (param) => `
                        <div class="parameter">
                            <span class="parameter-name">${param.name}</span>
                            <span class="parameter-description">${param.description}</span>
                        </div>
                    `
                        )
                        .join("")}
                </div>
            `
                    : ""
            }
        `;

        return commandItem;
    }

    commands.forEach((command) => {
        commandList.appendChild(createCommandElement(command));
    });

    const showMoreContainer = document.createElement("div");
    showMoreContainer.className = "show-more-container";
    const showMoreBtn = document.createElement("button");
    showMoreBtn.className = "show-more-btn";
    showMoreBtn.textContent = "Show More Commands";
    showMoreContainer.appendChild(showMoreBtn);
    commandList.parentNode.insertBefore(
        showMoreContainer,
        commandList.nextSibling
    );

    showMoreBtn.addEventListener("click", () => {
        commandList.classList.add("expanded");
        showMoreBtn.style.display = "none";
    });
});
