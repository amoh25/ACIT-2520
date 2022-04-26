function resolveAfter2Seconds(b,u,m ) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(b,u,m);
        }, 2000);
    });
}

async function func1(){    
    let b = await resolveAfter2Seconds(1)    
    console.log(b);
};

async function func2(){    
    let u = await resolveAfter2Seconds(2)  
    console.log(u); 
};

async function func3(){
    let m = await resolveAfter2Seconds(3)  
    console.log(m);
}


func1()
func2()
func3()