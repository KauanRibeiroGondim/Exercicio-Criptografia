
let VigenereCripto = function(chave, frase){

    c = 0
    chave = chave.split("")
    frase = frase.split("")
    while(chave.length < frase.length){
        chave.push(chave[c])
        c = c + 1
    }
    
    let alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    c = 0
    let i = 1
    let am = 0
    let a = 0
    let f = 0
    while(i <= frase.length){

        if(chave[c] != alfabeto[am]){
            am = am + 1
        }else if(frase[f] != alfabeto[a]){
            a = a + 1
        }else {
            am = am + a
            while(am > 26){
                am = am - 26
            }

            frase[f] = alfabeto[am]
            i = i + 1
            f = f + 1
            c = c + 1
            am = 0
            a = 0
        }
    }
    return frase.join("")
    // eu uso o alfabeto normal para achar a letra certa no alfabeto modificado, o modificado simplesmente é o alfabeto normal começando de outro
    // local
}

let p = VigenereCripto("bolao", "bolaobolao")
console.log(p)


