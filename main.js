let divisblebyTwo = "yu";
let divisblebyThree = "gi";
let  divisblebyFive = "oh";

function divide (num){
    let store = [];
    for (let i=1; i<= num; i++){
        if(i%2===0 && i % 5 === 0 ){
            let i = `${divisiblebyTwo}-${divisiblebyThree}-${divisiblebyFive}`;
            store.Push(i);
        
        }else if (i%2 === 0 && i % 3 === 0){
            let i = `${divisiblebyTwo}-${divisiblebyThree}`
            store.push(i);
        } else if (i%2 === 0 && i % 5 === 0){
            let i = `${divisiblebyTwo}-${divisiblebyFive}`
            store.push(i);
        }else if (i%2 === 0 && i % 3 === 0){
            let i = `${divisiblebyThree}-${divisiblebyFive}`
            store.push(i);
        }else if (i%2 === 0){
            let i = divisiblebyTwo;
            store.push(i);
        }else if (i%3 === 0){
            let i = divisiblebyThree;
            store.push(i);
        }else if (i%5 === 0){
            let i = divisiblebyFive;
            store.push(i);
        }else {
            store.push(i);
        }
    }
    return result;
}
let d = divide();
console.log(d);