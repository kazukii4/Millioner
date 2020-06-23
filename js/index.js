var questions = ["столица Кыргызстана? ", "Кто изображен на 100$? ", "сколько пальцев на руке? ", "Столица Грузии? ", "Столица России? "]
var answers = ["Шанхай, Душанбе, Баткен, Бишкек", "Адам, Бенжамин, супермен, Сооронбай", "5, 10, 250, 1", "Шанхай, Тбилиси, Баткен, Бишкек", "Шанхай, Тбилиси, Москва, Бишкек"]
var quesAns = ["Бишкек", "Бенжамин", 5, "Тбилиси", "Москва"]

var sumsOfQestions = [] // пустой список для подсчета сумм

for (var a = 1; a<questions.length+1; a++){
    sumsOfQestions.push(500*a)
} // цикл считающий суммы 

var name = prompt("Введите ваше имя")

var sum = prompt("Введите несгораемую сумму "+ sumsOfQestions)

var count, allSum, i , otvet // перечисление переменных 
count=0 //количество правельных ответов
allSum=0 //общая сумма выйигрыша

for(i=0; i<questions.length; i++){  // цикл переберающий вопросы
    otvet= prompt("уважаемый "+name+ " ответьте на следующий вопрос "+ questions[i] + answers[i])
    if(otvet == quesAns[i]){
        alert("Cool")
        count++
        allSum = allSum+500
    }else{
        alert("Извините но вы проиграли")
        alert("вы ответили на "+ count +" вопроса из "+ questions.length)
        if(allSum>=sum){ //проверка на то что наша несгороемая сумма соответсвует выйигрышу
            alert("ваш выйигрыш = " + sum)
        }else{
            alert("ваш выйигрыш = 0")
        }
       
        break
    }
}

alert("Поздравляю "+name+"Вы выйграли максимальную сумму денег в размере "+ allSum)




// var arr = []

// for (var i=0; i<=100; i++){

//     if (i%3 == 0){
//         arr.push()
//         console.log(arr + "true")
//     }else{
//         arr.push()
//         console.log(arr + "false")
//     }
// }
// console.log(arr)




// var arr=['qwerty', 123, 2345.65, "asdd342", true]

// console.log(arr)

// arr.push("12324234")

// console.log(arr)
// arr.pop()

// console.log(arr)

// for(var i=0; i<arr.length; i++){
//    console.log(arr[i])
//    if(arr[i] == 123){
//        console.log(arr[i] + "имеется в вашем списке")
//        break
//    }
// } цикл
    


// if(name == "Baiel" || name =="sultan"){
    //     alert("menthor")
    // }else if(name=="tilek"){
    //     alert("student")
    // }else if(name=="fake"){
    //     alert("wtf")
    // }else if(name==""){
    //     alert("gfk")
    // }else{
    //     alert("somebody")
    // }
    
    
    
    // var num = 12
    
    // if(num =="12"){
    //     alert(true)
    // }else{
    //     alert(false)
    // }
    
    
    
    // var name = prompt("введите ваше имя")
    // var age = prompt("введите ваш возраст")
    // if(name=="Adam" && age == 21){
    //     alert(совершенно)
    // }else if( age < 21){
    //     alert(несовершенно)
    // }
    
    
    
    
    //    var ob = {
    //       name:"Baiel",
    //       age:16,
    //       arr:[123, "dsadasasd", "fdssd" 0.3, 2342344)
    //    }
    // console.log(ob)
    
    
    
    
    // var name = "chel"
    // var age = 16
    // var dateofbirth = "10.04.04"
    // var ves= 60
    // var mentor = "true" //boolean - true or false +-= 1 or 0
    
    // console.log("hello my name is "+name+"i^m "+age+"y.o")