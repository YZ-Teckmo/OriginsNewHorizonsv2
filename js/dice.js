//Test the values generated from the random number generator
function testDicesRandomness(diceString, times){
    let count = []
    for (let i = 0; i < times; i++) {
        let d = rollDicesFromString(diceString)
        if (count[d] == null) count[d] = 0;
        count[d] +=1
    }
    console.table(count)
}

//Roll all dices from a string declaring dices. It also does the aritmethic to the result
function rollDicesFromString(dicesString) {
    let dices =  diceTokenizer(dicesString)
    for (let i = 0; i < dices.length; i++) {
        if (dices[i] === 'd'){
            let d = rollDice(dices[i-1], dices[i+1])
            dices[i] = d
            dices[i-1] = ''
            dices[i+1] = ''
        }
    }

    let buffer = ""
    dices.forEach(element => {
        if (typeof(element) === typeof(0) || element === '+' || element === '-' || element === '*' || element === '/'  || element === '(' || element === ')'){
            buffer = buffer+element
        }
    });

    let res = eval(buffer)
    return res
}

//Roll a single X sided dice N times 
function rollDice(times, sides){
    let buffer = 0
    for (let i = 0; i < times; i++) {
        buffer = buffer + Math.floor(Math.random() * (sides) + 1)
    }
    return parseInt(buffer)
}

//Convert the dice string to a list of tokens
function diceTokenizer (dicesString){
    let tokens = []
    let buffer = ""
    for (const c of dicesString) {
        if (!isNaN(c)){
            buffer = buffer + c
        } else {
            tokens.push(buffer)
            buffer = ""
            tokens.push(c)
        }
    }
    tokens.push(buffer)
    return tokens
}

/*
# Tokens:
- Numeros
- Letras: d
- Aritimetica: +, -, *, /
- Ordem: () 
*/

/*habilidades{
 "habs": [
	{
	 "nome": "",
	 "descricao": "",
	 "dices": ""
	}
  ]
}*/