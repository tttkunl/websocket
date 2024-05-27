// 設定function sendRequest 回傳 new Promise 使用promise時要用resolve,reject
function sendRequest(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            // resolve("go go")
            reject("server have problem")
        }, 2000);
    });
}

// let promise= sendRequest();
// promise.then(function(username){
//     console.log(username)
// })
// 會直接返回用戶名所以設一個物件


async function getUsername(){
    try{
        let username=await sendRequest();
        console.log(username);
    }catch(mseeage){
        console.log(`error${mseeage}`)
    }
    
}
getUsername()