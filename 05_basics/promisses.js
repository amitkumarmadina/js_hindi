const promis=new Promise(function(resolve,reject){
    //Doing async calls,cryptography,network
    setTimeout(function(){
    console.log('The task is completed');
    resolve()
    },1000)
})

    promis.then(function(){
        console.log("promise consume");
    })

    new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve()
        },1000)
    }).then(function(){
        console.log("RESOLVED ALREADY");
        
    })


        const prom_3=new Promise(function(resolve,reject){
            setTimeout(function(){
                resolve({unername:'chi',
                    email:'kau@gmail.com'})
            },1000)
        })
        prom_3.then(function(user){
                console.log(user);
        })

        const promis_4=new Promise(function(resolve,reject){
            setTimeout(function(){
            let error=false;
            if(!error){
                resolve({username:'amit',pass:'123'})
            }else{
                reject('Error:something went wrong')
            }
            },1000)
        })

        const username=promis_4
        .then((user)=>{
            console.log(user);
            return user.username;
        }).
        then((username)=>{
                console.log(username);  
        }).
        catch(function(error){
            console.log(error);
            
        }).finally(()=>console.log("the pr"))


const prom_5=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({username:'jai',pass:'beeru'})
        }else{
            reject('Error:something went wrong again')
        }
        },1000)
    })

    async function consumeProFive(){
    //    const response=await prom_5
    //    console.log(response);
    try{
        const response=await prom_5
      console.log(response);
    }catch{
        console.log(error);
        
    }
    }

    consumeProFive()

    /*
    async function getAllUsers(){
        try{
            const response=await fetch('https://jsonplaceholder.typicode.com/users')
            const data=await response.json();
            console.log(data);
            
        }catch{
            console.log("the error is",error);
            
        }
    }
    getAllUsers(); */


    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
        return response.json()
    }).then((data)=>{
        console.log(data);
        
    })
    .catch((error)=>console.log(error))
