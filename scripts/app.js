function addition(num1, num2){
    console.log(num1+num2);

    

}
function init(){

        console.log("Hello world");
        addition(3, 2);
        addition(9, 5);
        printNumbers();
        
    

}
let numbers = [12,4,123,4567,234,56,12,87,124,865,233,788,43,91,544,782,653,845];
function printNumbers(){
    for(let i=0; i<numbers.length; i++){
        if(numbers[i]>500){
            console.log(numbers[i]);
        }
    }
}
window.onload = init;