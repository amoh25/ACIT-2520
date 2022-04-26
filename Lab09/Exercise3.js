function func1(){    
    return new Promise((resolve, reject) => {
    console.log(1);

    resolve();
})};

function func2(){    
    console.log(2); 
    throw 'new'
};

function func3(){
    console.log(3);
}

function func4(){
    console.log(4)
}

func1().then(func1 => func2()).catch(func3).then(func2 => func4())