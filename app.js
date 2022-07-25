// let cash = 50
// let price = 40
// let isStoreOpen = false

// let str = cash>=40 && isStoreOpen ? 'give the receipt' : 'do not give receipt'
// console.log(str)

// let count = 1;

// while(count<=100){
//     console.log (count)
//     count++;

// }


// FOR LOOP

// for (let i = 0; i < 100; i +=2){
//     console.log(i)
// }


/** Write a for-loop that loops through 1 to 20
 * If the number is divisible by 3, print "Frontend"
 * If the number is divisible by 5, print "Simplified"
 * If the number is divisible by 3 and 5, print "Frontend Simplified"
 * If the number is *not* divisible by either 3 or 5, print the number
 * 
 * *Example
 * 1->1
 * 2->2
 * 3-> "Frontend"
 * 4->4
 * 5->"Simplified"
 * ...
 * 15-> "Frontend Simplified"
 * ...
 * 20-> "Simplified"
 */

// for (let i = 1; i<=20; i++){

//     if(i % 3===0 && i % 3===0) {
//         console.log(`${i} Frontend Simplified`)
//     }
//     else if(i % 3===0) {
//         console.log(`${i} Frontend`)
//     }
//     else if(i % 5===0) {
//         console.log(`${i} Simplified`)
//     }
//     else{
//         console.log(`${i} -> ${i} `)
//     }

// }



// const str = "abcd"

// for (let i=0; i< str.length; ++i){
//     console.log(str[i])
// }


// FUNCTIONS: 

// DRY - Don't Repeeat Yourself

// //Function definition

// function welcomePersonToFES(firstName, lastName){
//     console.log(`Welcome to FES, ${firstName} ${lastName}`)

// }

// //Call the Function
// welcomePersonToFES('Anson','Chow');
// welcomePersonToFES('John','Doe');





// function sumOfTwoNumbers (num1, num2){
//    return  num1 + num2
// }

// console.log(sumOfTwoNumbers(10, 10))



// 1st way of defining a function:


// function convertCelsiustoFahrenheit(celsius){
//     let fahrenheit = celsius * 1.8 +32
//     return fahrenheit
// }

// console.log (convertCelsiustoFahrenheit(0))
// console.log (convertCelsiustoFahrenheit(10))
// console.log (convertCelsiustoFahrenheit(30))

// 2nd way of defining a function:

// const convertCelsiustoFahrenheit = (celsius) => {
//     return celsius * 1.8 + 32
// }


// console.log (convertCelsiustoFahrenheit(0))


// ARRAYS: 

// let item1 = 20
// let item2 = 30
// let item3 = 40
// let item4 = 50
// let item5 = 100

// is the same as

// let arr = [20,30,40,50,100]

// //First element of array
// console.log(arr[0])

// //Last element of array:
// console.log(arr[arr.length-1])

// //Add element onto end of array:
// arr.push(200)

//[20, 30, 40, 50, 100]

// let newArr = arr.filter((element) => {
//     console.log(element)
//     if(element < 50){
//     return true;
//     }
// })

// console.log(newArr)

// console.log(arr)

// Same thing: You can remove the parenthesis around element if there is only one variable
// If there is only one line of code underneath, you can get rid of return


// let arr = [20,30,40,50,100]

// let newArr = arr.filter(element =>  element < 50)

// console.log(newArr)


/**
 * Filter out all the 'FAIL' elements in an array
 * 
 * @examples
 * ['A+,' 'A,' 'Fail'] => ['A+', 'A']
 * ['FAIL, 'FAIL', 'B'] => ['B']
 * ['FAIL'] => []
 */

// let grades = ['A+', 'A', 'Fail'] 

// let goodGrades = grades.filter((element) => {
//     console.log (element)
//     if (element !== 'Fail'){
//     return true;
//     }
// })

// console.log (goodGrades)

// let grades = ['A+', 'A', 'Fail'] 

// let goodGrades = grades.filter(element => element !== 'Fail')

// console.log (goodGrades)


let grades = ['A+', 'A', 'Fail'] 


// Create a new empty array called 'goodGrades'
let goodGrades = []

for (let i = 0; i < grades.length; ++i){

    if (grades[i] !== 'Fail'){
        goodGrades.push (grades[i]);
    }
    // add the current element onto 'goodGrades only if
    // the current element is not equal to 'Fail'
}

// console log 'goodGrades'
console.log(goodGrades);