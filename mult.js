

function addnum(res,calladd){
    setTimeout(calladd,2000);
    console.log("Multiplication "+res);
    
    

}

function add(){
    let a=12;
    let b=2;
    let c=a*b;
    console.log(c)
}

addnum("Result",add);