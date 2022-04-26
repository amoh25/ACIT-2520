function func1(){    
    console.log(1);
};

function func2(){    
    console.log(2); 
};

function func3(){
    console.log(3);
}

function func4(){
    console.log(4)
}

Promise.all([func1(),func2(),func3(),func4()])
.then([1,2,3,4])