const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question('Qual a sua linguagem preferida? ', (language) => {
    console.log(`A minha linguagem preferiada é ${language}`)
    readline.close()
})