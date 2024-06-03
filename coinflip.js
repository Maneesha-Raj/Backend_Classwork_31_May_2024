function flipcoin(callflip){
    const value= Math.random();
    
    const result = (value<0.5)?'Heads': 'Tails';

    callflip(result);

}

function toss(result){
    console.log(" ",result);
}

flipcoin(toss);