//Arrays

//1st option on declaring an array
var colors = ['red','blue','green']; //string array
alert(colors); //This will alert all values of array colors
alert(colors[0]); //alerts red
alert(colors[1]); //alerts blue
alert(colors[2]); //alerts green
alert(colors[3]); //alerts undefined because array is only upto 2.

//2nd option on declaring an array
var colors = new Array('red', 'blue', 'green'); //string array
colors[3] = 'yellow'; //alerts red blue green yellow
colors.push('purple'); //push or adds purple to array color
alert(colors[4]); //displays purple

var numbers = [5,77,6,43]; //integers array
var numberstring = [5,77,6,'Seven']; //intergers and string
alert(numbers.length); //outputs 4 because there are 4 values in array.
alert(numbers.sort()); //sort by values
alert(numbers.reverse()); //gives the reverse order

