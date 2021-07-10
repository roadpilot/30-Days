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

// DAY 3
function main() {
    const N = parseInt(readLine().trim(), 10);
// If  is odd, print Weird
// If  is even and in the inclusive range of 2 to 5, print Not Weird
// If  is even and in the inclusive range of 6 to 20, print Weird
// If  is even and greater than 20, print Not Weird
    if (N%2 > 0){
        console.log("Weird");
    }
    else if (N%2 === 0 && ((N>=2 && N<=5) || N>20)){
        console.log("Not Weird");
    }
    else if (N%2 === 0 && N>=6 && N<=20){
        console.log("Weird");
    }
    // else if (N%2 === 0 && N>=6 && N<=20){
    //     console.log("Not Weird");
    // }
}

// DAY 4
function Person(initialAge){
    // Add some more code to run some checks on initialAge
    if (initialAge>=0){this.age = initialAge}
    else {
        this.age = 0;
        console.log("Age is not valid, setting age to 0.")
    }
  this.amIOld=function(){
   // Do some computations in here and print out the correct statement to the console
    switch(true) {
        case (this.age < 13):
            console.log("You are young.")
            break;
        case (this.age < 18):
            console.log("You are a teenager.")
            break;
        default:
            console.log("You are old.")
    }
  };
   this.yearPasses=function(){
          // Increment the age of the person in here
        this.age++;
   };
}

// DAY 5
function main() {
    const n = parseInt(readLine().trim(), 10);
    for (let i=1; i<=10; i++){
        console.log(`${n} x ${i} = ${n*i}`);
    }
}

// DAY 6
function processData(input) {
    //Enter your code here
    input.split('\n').slice(1).forEach(el => {
        var odd = "";
        var even = "";
        el.split('').forEach((el,i)=>{
            (i%2==0 || i==0) ? even+=el : odd+=el;
        })
    console.log(even+" "+odd)
    })
} 

// DAY 7
function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    let str = "";
    arr.reverse().forEach(el => {str+=el+' '})
    console.log(str)
}

// DAY 8
function processData(input) {
    //Enter your code here
    // console.log(input.split('\n'))
    let arr = input.split('\n')
    const n = Number(arr[0])
    arr.splice(0,1)
    names = arr.splice(n)
    // obj = {}
    // console.log(arr)
    var kvarr = arr.map(el => el.split(' '))
    kvmap = new Map(kvarr)
    names.map(name => {
        if (kvmap.has(name)){
            console.log(`${name}=${kvmap.get(name)}`);
        }else{
            console.log("Not found");
        }
    })

    // console.log(Object.keys(obj))
} 

// DAY 9
function factorial(n) {
    // Write your code here
    return (n==1) ? n : n * factorial(n-1);
}

// DAY 10 BINARY
function main() {
    const n = parseInt(readLine().trim(), 10);
    console.log(n.toString(2).split('0').sort().reverse()[0].length)
}

// DAY 11 2d arrays
function main() {
    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }
    const HGsum = [];
    let sum = 0;
    for (let c = 0; c < arr.length - 2; c++) { //iterate all but last 2 columns
        for (let r = 0; r < arr[c].length - 2; r++) { //iterate all but last 2 rows in columns
            sum = arr[c][r] + arr[c][r+1] + arr[c][r+2] 
                           + arr[c+1][r+1] 
              + arr[c+2][r] + arr[c+2][r+1] + arr[c+2][r+2];
            HGsum.push(sum);
        }
    }
    console.log(HGsum.sort((a,b) => b-a)[0])
}

// DAY 12 JS CLASS INHERITANCE
class Student extends Person {
    /*	
    *   Class Constructor
    *   
    *   @param firstName - A string denoting the Person's first name.
    *   @param lastName - A string denoting the Person's last name.
    *   @param id - An integer denoting the Person's ID number.
    *   @param scores - An array of integers denoting the Person's test scores.
    */
    // Write your constructor here
    constructor(firstName, lastName, id, scores) {
        super(firstName, lastName, id);
        this.scores = scores
    }  
    /*method Name: calculate
    *   @return A character denoting the grade.
    */
    // Write your method here
    calculate() {
        let arr = this.scores;
        const avg = arr.reduce((a,b) => a+b, 0)/arr.length;
        // console.log(avg)
        switch(true) {
            case (avg>=90):
                return "O";
            case (avg>=80):
                return "E";
            case (avg>=70):
                return "A";
            case (avg>=55):
                return "P";
            case (avg>=40):
                return "D";
            default:
                return "T";
        }
    }
}

// DAY 13 Abstract classes
// Declare your class here.
class MyBook extends Book {
    /**   
    *   Class Constructor
    *   
    *   @param title The book's title.
    *   @param author The book's author.
    *   @param price The book's price.
    **/
    // Write your constructor here
    constructor(title, author, price) {
        super(title, author);
        this.price = price;
    }     
    /**   
    *   Method Name: display
    *   
    *   Print the title, author, and price in the specified format.
    **/
    // Write your method here
    display = () => {
        console.log(`Title: ${this.title}`)
        console.log(`Author: ${this.author}`)
        console.log(`Price: ${this.price}`)
    }
// End class

// DAY 14 (HAD TO JUMP TO PYTHON FOR THIS CHALLENGE)
class Difference:
    def __init__(self, a):
        self.__elements = a

    def computeDifference(self):
        min = 101
        max = 0 #per constraints
        for item in self.__elements:
            if item < min:
                min = item
            if item > max:
                max = item
        self.maximumDifference = max - min 

# End of Difference class

_ = input()
a = [int(e) for e in input().split(' ')]

d = Difference(a)
d.computeDifference()

print(d.maximumDifference)