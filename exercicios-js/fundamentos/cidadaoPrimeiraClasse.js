
//criação normal de uma função
function fun1()
{

}

//criar de forma literal
const fun2 = function(){}

//armazenar em um array
const array = [function (a,b){ return a + b}, fun1, fun2]

console.log(array[0](2,4))

//armazenar em um atributo de objeto
const obj = {}
obj.falar = function() {return "opa"}
console.log(obj.falar())


//passar função como parametro
function run(fun)
{
    fun()
}

run(function(){console.log("olaroloar")})