//Loops

for(var i = 0; i < 10; i++){
    console.log(i); //displays 0 to 9 in console (Inspect Element)
    console.log('I love the number '+i); //Displays I love the number 0-9 in loop
}
var i = 0;
while(i < 10){
    console.log(i);
    i++
}


var numbers = [33,54,76,34,2,6];
numbers.reverse(); //This will reverse the order of var numbers before loop.

numbers.forEach(function(number){
    console.log(number);
}); //loops array number using foreach

for(var i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
} //loops array number using for loop
