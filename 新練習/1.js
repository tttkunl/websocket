let set=true

let owo = new Promise(function(resolve,reject){
    if (set){
        
        resolve("我很安全");
    }else{
        console.log("危險")
        reject();
    }
});

owo.then(function(kkk){
    console.log(`${kkk}`)
});