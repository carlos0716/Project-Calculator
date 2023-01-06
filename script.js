const add = (a, b) => a + b;

const substract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => {
    if (a === 0){
        return 0;
    }
    else if( b === 0) {
        return console.log('Error');
    }
    else {
       return a / b;
    }
};
 
const operate = (a, b, c) => {
    if (b === '+') {
       return add(a,c);
    } else if (b === '-') {
        return substract(a,c);
    } else if(b ==='*') {
        return multiply(a,c);
    } else if (b === '/') {
        return divide(a,c);
    }
 }




