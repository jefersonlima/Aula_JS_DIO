//AULA 5
function clicou(){
    //alert("Obrigado por clicar!")
    //document.getElementById("agradecimento").innerHTML = "Obrigado por Clicar!"
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por Clicar!</b>"
}

function redirecionar(){
    window.open("http://www.google.com.br");
    //window.location.href = "http://www.google.com.br";
}

function trocar(elemento){
    //alert("trocar texto");
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("pagina carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}


/*
//AULA 4
var validar = 0;
function validaIdade(idade){
    var validar;
    if(idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual sua idade");
console.log(validaIdade(idade));

function soma(n1, n2){
    return n1 + n2;
}

alert(soma(5, 10));

function setReplece(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}

alert(setReplece("Vai Japão", "Japão", "Brasil"));
*/
/*
//AULA 3

var data = new Date();
alert(data);
alert(data.getDate());
alert(data.getMonth()+1);
alert(data.getHours());
alert(data.getMinutes());

var count;
for(count=0; count <= 5; count++){
    alert(count);
}

var count = 0;
while (count <= 5){
    //console.log(count);
    alert(count)
    //count = count + 1;
    count++;
}

var idade = prompt("Qual sua idade");
//var idade = 18;
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
}
*/

/*
//AULA 2
//DICIONARIOS
var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"Uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].cor);

var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);

//LISTA
var lista = ["maça", "Pêra", "Laranja"];
console.log(lista[1]);
lista.push("Uva");
console.log(lista)
lista.pop();
console.log(lista)
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());

console.log(lista.join( " | "))
*/
/*
//AULA 1
var nome = "Jeferson Lima";
var idade = 38;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo";

var n1 = 5;
var n2 = 3;
//alert("Bem vindo " + nome);
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
console.log(nome);
console.log(idade + idade2);

console.log(frase.replace("Japão", "Brasil"));
//alert(frase.replace("Japão", "Brasil"));
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());

console.log(n1 * n2)
*/

