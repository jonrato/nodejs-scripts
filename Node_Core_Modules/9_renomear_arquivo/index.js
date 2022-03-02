const fs = require('fs')

arqAntigo = 'novo_arquivo.txt'
arqNovo = 'outro_nome_novo.txt'

fs.rename(arqAntigo,arqNovo, function(err) {
    if(err){
        console.log(err)
    }
    console.log(`O arquivo ${arqAntigo} foi renomeado para ${arqNovo}`)
})