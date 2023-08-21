# Operadores:

- 1 Escreva um programa que calcule a área de um retângulo com base no comprimento e largura fornecidos pelo usuário.
```javascript
let comprimento = parseFloat(prompt("Digite o comprimento"))
let largura = parseFloat(prompt("Digite a largura"))
window.alert(`Área do retângulo é igual a ${largura*comprimento}`)
```
- 2 Crie um programa que determine se um número é par ou ímpar utilizando o operador de módulo (%).
```javascript
let numero = parseInt(prompt("Digite um número"))
window.alert(`O número é ${numero%2==0 ? 'par' : 'impar'}`)
```
- 3 Escreva uma função que verifique se uma string fornecida pelo usuário contém a palavra "JavaScript".
```javascript
let palavra = prompt("Digite uma frase")
window.alert(`A palavra "JavaScript"${palavra.includes("JavaScript") ? '' : ' não'} está contida na frase`)
```
- 4 Implemente um programa que compare duas strings e determine se elas são iguais, ignorando maiúsculas e minúsculas.
```javascript
let string_um = prompt("Digite a primeira string").toLowerCase()
let string_dois = prompt("Digite a segunda string").toLowerCase()
window.alert(`As strings são ${string_um === string_dois ? 'iguais' : 'diferentes'}`)
```
- 5 Crie uma função que concatene duas listas (arrays) e retorne a lista resultante.
```javascript
let lista_um = ["item1-1", "item2-1", "item3-1"]
let lista_dois = ["item1-2", "item2-2", "item3-2"]
window.alert(`Resultado da concatenação das duas listas: ${[... lista_um , ... lista_dois]}`)
```

# Funções Nativas:

- 6 Escreva um programa que calcule a média dos valores em um array utilizando a função reduce() e length.
```javascript
let valores = [6, 6, 9]
const soma = valores.reduce((acumulador, numero) => { return acumulador + numero })
window.alert(`Média dos valores ${valores} : ${soma/valores.length}`)
```
- 7 Crie uma função que retorne a data e hora atuais no formato legível: "Dia/Mês/Ano Hora:Minuto:Segundo".
```javascript
let data = new Date()
window.alert(`${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`)
```
- 8 Implemente um programa que encontre o maior valor em um array usando a função Math.max().
```javascript
const valores = [-50, 0, 50]
window.alert(`Maior número entre [${valores}] : ${Math.max(... valores)}`)
```
- 9 Escreva uma função que gere um número inteiro aleatório entre dois valores dados como argumentos.
```javascript
const max = 10
const min = 20
function gerarNumero(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
window.alert(`Número aleatorio entre ${max} e ${min} : ${gerarNumero(max, min)}`)
```
- 10 Crie um programa que verifique se um número dado pelo usuário é um número primo usando uma função.
```javascript
let index=2
let numeroPrimo = true
const num = Number(prompt("Digite um numero"))

if(num > -1) {
    while(index<num) {
        if (num%index==0) {
            numeroPrimo = false
            break
        }
        index++
    }
    
    if (num > 1) {
        if (numeroPrimo) {
            window.alert("Este número é um número primo!")
        } else {
            window.alert("Este número não é um número primo!")
        }
    }
    
} else {
    window.alert("Não é possível verificar se este número é primo")
}
```

# Coerção e Tipos de Dados:

- 11 Declare uma variável com valor "5" (string) e outra variável com valor 2 (número). Multiplique as duas variáveis e explique o resultado.
```javascript
const string = "5"
const numero = 2
window.alert(string*numero)
window.alert("O resultado é um número pois o javascript tenta realizar esse cálculo de todas as maneiras possíveis convertendo os valores string para number, se a operação matemática retornar um número válido ele retorna esse valor")
```
- 12 Converta a string "123" em um número inteiro e armazene-o em uma variável.
```javascript
const valor = Number("123")
window.alert(`${valor} : type ${typeof valor}`)
```
- 13 Escreva um programa que adicione um número e uma string.
```javascript
const result = 5 + "123"
window.alert(`${result} : type ${typeof result}`)
```
- 14 Explique o resultado e discuta a coerção que ocorre.
```javascript
window.alert(`O resultado é uma string pois o '+' é usado para concatenar strings, logo o java script interpreta o '+' para concatenação entre número e string.`)
```
- 15 Declare uma variável com o valor null e outra variável com o valor undefined. Verifique se são iguais em valor e tipo.
```javascript
window.alert(`${undefined} == ${null} : ${undefined == null}\n${undefined} === ${null} : ${undefined === null}`)
window.alert("Valores iguais, porém tipos destintos")
```
- 16 Crie um programa que determine se uma variável é do tipo função usando o operador typeof.
```javascript
const funcao = Date.now().toFixed
if ((typeof funcao) == typeof function name(params) {}) {
  window.alert(`É uma função`)
} else {
  window.alert(`Não é uma função`)
}
```

# Operadores Matemáticos e Lógicos:

- 18 Escreva um programa que calcule o resultado da expressão: (10 + 5) * 3 / 20.
```javascript
const resultado = (10 + 5) * 3 / 20
window.alert(`${resultado}`)
```
- 19 Crie uma função que verifique se um número é positivo e ímpar ao mesmo tempo.
```javascript
const resultado = 7
window.alert(`${resultado} é positivo e ímpar? ${resultado%2!=0 && resultado > 0}`)
```
- 20 Implemente um programa que determine se um ano fornecido pelo usuário é bissexto ou não, considerando as regras: (a) Anos divisíveis por 4 são bissextos; (b) Anos divisíveis por 100 não são bissextos, a menos que também sejam divisíveis por 400.
```javascript
if (ano%4==0) {
  if (ano%100==0) {
    window.alert(`${ano} é bissexto`)
  } else {
    window.alert(`${ano} não é bissexto`)
  }
} else {
  window.alert(`${ano} não é bissexto`)
}
```
- 21 Escreva uma função que determine se uma pessoa tem permissão para entrar em um clube: idade mínima de 18 anos e não estar na lista de membros banidos (use operadores lógicos).
- 22 Crie um programa que simule um sistema de login. Peça ao usuário um nome de usuário e uma senha, e verifique se correspondem aos valores esperados.