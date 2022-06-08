// var userName = document.querySelector("#user-name");
// var h2E1 = document.querySelector("#greet-user");

// function register() {
//     h2E1.innerHTML = "Welcome Mr. " + userName.value;
//     userName = 
// }




// var paraE1 = document.querySelector("#para")

// function karachi(){
//     paraE1.innerHTML = "You live in Sindh Province";
// }
// function islamabad(){
//     paraE1.innerHTML = "You live in Capital of Pakistan";
// }
// function pesh(){
//     paraE1.innerHTML = "You live in KPk Province";
// }
// function kashmir(){
//     paraE1.innerHTML = "You live in Kashmir Province";
// }
// function india(){
//     paraE1.innerHTML = "F***";
// }


// var  paraE1 = document.querySelector("#para");

// function provinceName(proName){
//     paraE1.innerHTML = "you live in " + proName
// }

// var num1 = 5;
// var num2 = 3;

// var sum = num1++ - ++num2 + ++num1 + --num2 * ++num1;
// console.log(sum);






// var tableForm = document.querySelector("#table-name");
// var tableForm, count;

// function printTable() {
//     tableName = +tableForm.value;
//     count = 0;
//     console.log(tableName + " x " + count + " = " + tableName * count++);
//     console.log(tableName + " x " + count + " = " + tableName * count++);
//     console.log(tableName + " x " + count + " = " + tableName * count++);
//     console.log(tableName + " x " + count + " = " + tableName * count++);
//     console.log(tableName + " x " + count + " = " + tableName * count++);
//     console.log(tableName + " x " + count + " = " + tableName * count++);
//     console.log(tableName + " x " + count + " = " + tableName * count++);
//     console.log(tableName + " x " + count + " = " + tableName * count++);
//     console.log(tableName + " x " + count + " = " + tableName * count++);
//     console.log(tableName + " x " + count + " = " + tableName * count++);
//     console.log(tableName + " x " + count + " = " + tableName * count++);
//     tableForm.value = "";
// }




// var age = +prompt("What is your age?");
// var minAge = 16;

// if (age >= minAge) {
//     console.log("Congrats! You have got admission.");
// }


// var answer = +prompt("Guess a number between 1 to 5");
// var secretNo = 4;

// if(answer === secretNo){
//     console.log("Bingo! you r correct")
// }
// else if()










// var nationality = document.querySelector("#nation");
// var visaStatus = document.querySelector("#visa");
// var greetEl = document.querySelector("#message");

// var requiredNationality = "UK";
// var requiredVisa = "active";

// function enterSwitzerLand(){
//     if (nationality.value === requiredNationality || visaStatus === requiredVisa){
//         greetEl.innerHTML = "Welcome to SwitzerLand"
//     }
//     else{
//         greetEl.innerHTML = "Sorry! go to Afghanistan"
//     }
// }









// var qualification = document.querySelector("#qualification");
// var enrollment = document.querySelector("#enrollment");
// var greetEl = document.querySelector("#message");

// var requiredEducation = "matric";
// var alreadyEnrolled = "no";

// function applyForAdmission(){
//     if (qualification.value === requiredEducation && enrollment.value === alreadyEnrolled){
//         greetEl.innerHTML = "Congrats! You r eligible for this admission"
//     }
//     else{
//         greetEl.innerHTML = "Sorry! You r not eligible for this admission"
//     }
// }


// var fNumber = +prompt("Enter Fisrt Number");
// var operator = prompt("Enter Operator");
// var sNumber = +prompt("Enter Second Number");

// if(operator == "+"){
//     var result = fNumber + sNumber
//     alert(result);
// }
// else if(operator == "-"){
//     var result = fNumber - sNumber
//     alert(result);
// }
// else if(operator == "*"){
//     var result = fNumber * sNumber
//     alert(result);
// }
// else if(operator == "/"){
//     var result = fNumber / sNumber
//     alert(result);
// }
// else{
//     alert("Syntax Error")
// }









// var fruits = [ "Apple", "Mango", "Grappes", "banana", "pineapple" ];

// console.log(fruits[3]);
// console.log(fruits[1]);













// var fruits = [
// prompt ("enter your fruits name"),
// prompt ("enter your fruits name"),
// prompt ("enter your fruits name"),
// prompt ("enter your fruits name")
// ];
// console.log(fruits);
















// var num = [
//     [0,1,2,3],
//     [4,5,6,7],
//     [8,9,10,11]
// ]


// console.log(num[0][2], num[1][1], num[2][3]);


















// var fastfood = ["Biryani", "Qurma", "Mountain Dew", "Chappti", "More Cold Drinks"];

// fastfood.pop();
// console.log(fastfood);

// fastfood.push("Tikka");
// console.log(fastfood);


















// var fruits = [ "Apple", "Mango", "Grappes", "banana", "pineapple" ];

// fruits.shift();
// console.log(fruits);
// fruits.unshift("Watermelon", "Dates");
// console.log(fruits);




















// var names = [];
// var userName = document.querySelector("#user-name");
// var studentEl = document.querySelector("#message");

// function AdmitUserName(){
    
//     names.push(userName.value);
//     console.log(names);
//     userName.value = "";
//     studentEl.innerHTML = names;
// }


















// var Animal = ["Tiger", "Lion", "Donkey", "Cow", "Mandi"];

// Animal.splice(0, 2 );

// console.log(Animal);




// var Animal = ["Tiger", "Lion", "Donkey", "Cow", "Mandi"];

// Animal.splice(1, 0, "Horse");

// console.log(Animal);











// var fruits = ['Apple', 'Mango', 'Orange', 'Grappes', 'PineApple'];
// var favfruits = fruits.slice(1, 3);
// console.log(favfruits);


















// var xyz = ["Tiger", "Lion", "Donkey", "Cow", "Mandi"];

// console.log(xyz.length);




// var num = [150, 100, 125, 500, 450, 350];
// console.log(num.sort());










// var CarsName = "Audi - LandCruiser - Sonata - Civic";
// var CarsArr = CarsName.split(" - ");
// console.log(CarsArr);

















var userName = ['The', 'New', 'World','Order'];
var fullName = userName.join(" ");
console.log(fullName);
