/*-----1------*/

console.log("Hello World");

/*-----2------Add two numbers*/

function addTwoNumbers(a, b){
    console.log(a+b);
}

addTwoNumbers(3,4);

/*-----3------Squra root*/

function squraRoot1(num1){
    console.log(Math.sqrt(num1));
}
squraRoot1(4);

function squraRoot2(num1){
    console.log(num1*num1);
}

squraRoot2(4);

/*-----4------Calculate the Area of a Triangle*/

function areaOfTraiangle(num1){
    let pie = 3.14;
    console.log(pie * (num1*num1));
}
areaOfTraiangle(4);

/*-----5------Swap Two Variables*/
 function swapTwoValue(num1, num2){
    num1 = num1 + num2;
    num2 = num1 - num2;
    num1 = num1 - num2;
    console.log(num1, num2);
 }

 swapTwoValue(3,15);

/*-----6------Solve Quadratic Equation*/

function quadEquation(){

}

/*-----7------Convert Kilometers to Miles*/

function kgToMiles(kg){
    console.log(kg * 0.62)
}

kgToMiles(3);

/*-----8------Convert Celsius to Fahrenheit*/

function celsiusToFahrenheit(cel){
    console.log((cel * 9/5) + 32);
}

celsiusToFahrenheit(3);

/*-----9------Generate a Random Number*/

function generateRandom(){
    console.log("Generate Random Number : " , Math.floor(Math.random()* 100000));
}

generateRandom();

/*-----10------Check if a number is Positive, Negative, or Zero*/

function checkNumber(num1){
    if(num1 > 0){
        console.log(` ${num1} is Positive Number`);
    }
    else if(num1 < 0){
        console.log(` ${num1} is Negative`);
    }
    else{
        console.log(` ${num1} is Zero`);
    }
}

checkNumber(15);

/*-----11------Check if a Number is Odd or Even*/

function oddEven(num1){
    if(num1%2 == 0){
        console.log(`${num1} is Even Number`);
    }
    else{
        console.log(`${num1} is Odd Number`);
    }
}

oddEven(15);


/*-----12------Find the Largest Among Three Numbers*/

function largeNumber(num1,num2,num3){
    if(num1 <= num2 && num1 <= num3){
        if(num2 >= num3){
            console.log(`${num2} is big number`);
        }
        else{
            console.log(`${num3} is big number`);
        }
    }
    else{
        console.log(`${num1} is big number`);
    }
}

largeNumber(3,12,8);

/*-----13------Check Prime Number*/

function primeNumber(num1){
    let flag = 0;
    if (num1 == 0 || num1 == 1){    flag = 1; }

    for (let i = 2; i <= num1 / 2; ++i) {
        if (num1 % i == 0) {
        flag = 1;
        break;
        }
    }

    if (flag == 0){
        console.log(`${num1} is prime number`);
    }
    else{
        console.log(`${num1} is not prime number`);    
    }
}

primeNumber(33);

/*-----14------Print All Prime Numbers in an Interval*/

function allPrimeNumber(num1){
    let numbers = [];
    for (let i = 2; i <= num1 ; i++) {
        let flag = 0;
        for(let j = 2; j < i ; j++){
            
            if (i % j == 0 && i !== j) {
                if(i%j == 0){
                    flag = 1;
                    break;
                }
            }
        }
        if(flag == 0){
            numbers.push(i);
        }
    }

    console.log(numbers);
}

allPrimeNumber(133);

/*-----15------Find the Factorial of a Number*/

function factorial(num1){
    let result = 1;
    for(let i = 1; i<= num1; i++) {
        result = result * i;
    }
    console.log(result);
}

factorial(6);

/*-----16------Display the Multiplication Table*/

function mutlipleTable(num1){
    let result = 1;
    for(let i = 1; i <= 10 ; i++){
        console.log(`${num1} * ${i} = ${num1*i}`);
    }
}

mutlipleTable(3);

/*-----17------Print the Fibonacci Sequence*/

function fibonacci(num1){
    let first = 0;
    let second = 1;
    let third = 0;
    console.log(first);
    for(let i = 1; i <= num1 ; i++){
        console.log(second);
        second = first + second;
        first = second - first;

    }
}

fibonacci(12);

/*-----18------Check Armstrong Number*/

function armstrong(num1){
    let sum = 0;
    let temp = num1;
    while (temp > 0) {
        // finding the one's digit
        let remainder = temp % 10;

        sum += remainder * remainder * remainder;

        // removing last digit from the number
        temp = parseInt(temp / 10); // convert float into integer
    }
    // check the condition
    if (sum == num1) {
        console.log(`${num1} is an Armstrong number`);
    }
    else {
        console.log(`${num1} is not an Armstrong number.`);
    }
}

armstrong(153);

/*-----19------Find the Sum of Natural Numbers*/

function sumNatural(num1){
    let result = 0;
    for(let i = 1; i<= num1; i++) {
        result = result + i;
    }
    console.log(result);
}

sumNatural(4);

/*-----20------Check if the Numbers Have Same Last Digits*/

function sumNatural(num1,num2){
    let result = 0;
    if(num1%10 == num2 %10){
        console.log(`${num1} & ${num2} lasts digit are same`);
    }
    else{
        console.log(`${num1} & ${num2} lasts digit are not same`);        
    }
    
}

sumNatural(445,315);

/*-----21------Find HCF or GCD*/

function hcf(num1,num2){
    let result = 1;
    for(let i=2; i< num1 || i< num1 ; i++){
        if(num1%i == 0 && num2 % i ==0){
            num1 =  num1/i;
            num2 = num2/i;
            result = result * i;
        }
    }
    console.log(`${num1} & ${num2} HCF is ${result}`);           
}

hcf(210,420);

function gcd(num1,num2){
    let result = 1;
    for(let i=2; i<= num1 || i<= num1 ; i++){
        if(num1%i == 0 && num2 % i ==0){
            result = i;
        }
    }
    console.log(`${num1} & ${num2} GCF is ${result}`);           
}

gcd(80,40);

/*-----22------Find LCM*/

function lcm(num1,num2){
    let i=2;
    if(num1<= num2){
        i = num2;
    }
    else{
        i = num1;
    }
    for(; i< 10000 ; i++){
        if(i % num1 == 0 && i % num2 ==0){
            break
        }
    }
    console.log(`${num1} & ${num2} LCM is ${i}`);           
}

lcm(36,54);
lcm(20,25);

/*-----23------Find the Factors of a Number*/

function factors(num1){

    for(let i=2; i<= num1 ; i++){
        if(num1 %i == 0){
            console.log(`${num1} factors is ${i}`);       
        }
    }
        
}

factors(36);

/*-----24------Find Sum of Natural Numbers Using Recursion*/
 function sumOfNaturalNum(num1){
    if(num1 > 1){
        return num1 + sumOfNaturalNum(num1-1);
    }
    else return 1;     
 }

 console.log(sumOfNaturalNum(5));

 function multipleOfNaturalNum(num1){
    if(num1 > 1){
        return num1 * multipleOfNaturalNum(num1-1);
    }
    else return 1;   
 }

 console.log(multipleOfNaturalNum(5));

/*-----25------Guess a Random Number*/

function guessRandom(num1){
    if(num1 == (Math.floor(Math.random()*10))){
        console.log(`${num1} Numbers are matched`)
    }
    else{
        console.log("Numbers are not matched")
    }
}

guessRandom(4);
guessRandom(3);