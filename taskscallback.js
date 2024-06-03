

function maintask(callfunction){
    
    console.log(" Student started studying Programming");
    setTimeout(callfunction,2000);
}

function task1(){
    console.log("Studying Frontend");
}

function task2(){
    console.log("Studying HTML");
}

function task3(){
    console.log("Studying CSS");
}

function task4(){
    console.log("Studying Tailwind");
}

maintask(task1);
maintask(task2);
maintask(task3);
maintask(task4);