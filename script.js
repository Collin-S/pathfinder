function rollDice() {
    return 1 + Math.floor(Math.random() * 20)
}

for (let i = 0; i < 5; i++) console.log(rollDice())