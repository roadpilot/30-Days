// DAY 0
function processData(inputString) {
    // This line of code prints the first line of output
    console.log("Hello, World.");
    
    // Write the second line of output that prints the contents of 'inputString' here.
    console.log(inputString);
}

// DAY 1
function main() {
    var i = 4
    var d = 4.0
    var s = "HackerRank "

    // Declare second integer, double, and String variables.
    // Read and save an integer, double, and String to your variables.
    var i2 = Number(input_stdin_array[0])
    var d2 = Number(input_stdin_array[1])
    var s2 = input_stdin_array[2]

    // Print the sum of both integer variables on a new line.
    console.log(i + i2)
    // Print the sum of the double variables on a new line.
    console.log((d + d2).toFixed(1))

    // Concatenate and print the String variables on a new line
    // The 's' variable above should be printed first.
    console.log(s + s2)
}

// DAY 2
function solve(meal_cost, tip_percent, tax_percent) {
    // Write your code here
    let tip = meal_cost*(tip_percent/100);
    let tax = meal_cost*(tax_percent/100);
    console.log(Math.round(meal_cost+tip+tax))
}