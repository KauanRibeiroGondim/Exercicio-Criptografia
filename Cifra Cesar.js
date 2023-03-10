
let CifraCesarCripto = function(chave, frase){
    let alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let alfabetoM = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    frase = frase.split("")
    let n = frase.length
    let i = 1
    let x = 0
    let f = 0
    let y = 0
    while(i <= n){
        if(frase[f] == " "){
            f = f + 1
            i = i + 1
        }
        else if(frase[f] != alfabeto[x]){
            if(frase[f] == alfabetoM[x]){
                frase[f] = frase[f].toLowerCase()
                y = y + 1
                x = x - 1
            }
            x = x + 1
        }
        else{
            while(chave > 26){
                chave = chave - 26
            }
            x = x + chave
            while(x > 26){
                x = x - 26
            }
            frase[f] = alfabeto[x]
            if(y != 0){
                frase[f] = frase[f].toUpperCase()
                y = 0
            }
            i = i + 1
            f = f + 1
            x = 0
        }
    }
    return (frase.join(''))
}

let CifraCesarDescripto = function(chave, frase){
    let alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let alfabetoM = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    frase = frase.split("")
    let n = frase.length
    let i = 1
    let x = 0
    let f = 0
    let y = 0
    while(i <= n){
        if(frase[f] == " "){
            f = f + 1
            i = i + 1
        }
        else if(frase[f] != alfabeto[x]){
            if(frase[f] == alfabetoM[x]){
                frase[f] = frase[f].toLowerCase()
                y = y + 1
                x = x - 1
            }
            x = x + 1
        }
        else{
            while(chave > 26){
                chave = chave - 26
            }
            x = x - chave
            while(x < 0){
                x = x + 26
            }
            frase[f] = alfabeto[x]
            if(y != 0){
                frase[f] = frase[f].toUpperCase()
                y = 0
            }
            i = i + 1
            f = f + 1
            x = 0
        }
    }
    return (frase.join(''))
}

let chave = 20
let frase = "Bolao Bolao"
console.log("Frase a ser Criptografada: " + frase)

let fraseCripto = CifraCesarCripto(chave, frase)
console.log("\nFrase Criptografada: " + fraseCripto)

let fraseDescripto = CifraCesarDescripto(chave, fraseCripto)
console.log("\nFrase Descriptografada: " + fraseDescripto)
