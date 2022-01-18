module.exports = {
    mode: "jit",
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                discord_blue: "#295DE7",
                discord_blurple: "#7289da",
                discord_purple: "#5865f2",
                discord_green: "#3ba55c",
                server_background_color: "#36393f",
                discord_side_bg: "#202225",
            },
        },
    },
    plugins: [require("tailwind-scrollbar-hide")],
};
