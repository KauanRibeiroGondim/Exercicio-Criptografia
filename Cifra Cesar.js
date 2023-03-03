let alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let alfabetoM = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
let frase = "Bolao bolao"
frase = frase.split("")
let n = frase.length
let chave = 2
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
        while((x + chave) > 26){
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
console.log(frase.join(''))