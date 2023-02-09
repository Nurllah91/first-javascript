const allNumbers = [32, 335, 35, 45, 55, -534, -33, 566, 32, 56,];

function  getPositive(numbers){
    let positiveNumbers = [];

    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] > 0){
            positiveNumbers.push ( numbers[i]);
        }else{
            break;
        }
    }

    return positiveNumbers;

}


const positiveNumbers = getPositive(allNumbers);
console.log(positiveNumbers);