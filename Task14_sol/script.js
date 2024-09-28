function divideNumbers(num1, num2){
    return new Promise((resolve, reject) => {
        if(num2==0){
            reject("Warning: Division by zero is undefined.");
        }else{
            const result = num1/num2;
            resolve(result);
        }
    })
}

divideNumbers(10, 2)
.then((result)=> console.log("Result is here: ", result))
.catch((warning) => console.log(warning));

divideNumbers(10, 0)
.then((result) => console.log("Result is here: ", result))
.catch((warning)=> console.log(warning));
