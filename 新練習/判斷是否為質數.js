// const n = 6;
// let isPrime = true;

// if (isPrime){
//     console.log('是質數');
// }
//遇到throw err;問題代表程式在錯誤的路徑中被執行
// 在funtion中會比較希望以狀態(True、False)來當結果會讓程式在執行上更有彈性。
function isPrime(n){ 
    for(let i=2;i<n;i++){
        if(n%i===0){
            console.log('此數不為質數');
            return;// break;
        }
    }
    console.log("是質數")
}


isPrime(5);
isPrime(6);
