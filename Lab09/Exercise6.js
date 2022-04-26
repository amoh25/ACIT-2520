async function func1(){    
    const thenable = {
        then: function(resolve, _reject){
            resolve(1)
        }
    }  
    console.log(await thenable);
};

async function func2(){    
    const thenable = {
        then: function(resolve, _reject){
            resolve(2)
        }
    }  
    console.log(await thenable);
};

async function func3(){
    const thenable = {
        then: function(resolve, _reject){
            resolve(3)
        }
    }  
    console.log(await thenable);
};


func1()
func2()
func3()