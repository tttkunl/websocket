const toEatDinner = (status, food, time) => {
    return new Promise((resolve, reject) => {
      setTimeout(() =>{
        if(status){
          resolve(`成功吃到 ${food}`);
        }else{
          reject(`沒錢了，沒辦法吃 ${food}`);
        };
      }, time);
    });
  };
  
  Promise.race([
      toEatDinner(1, 'chicken', 2000),
      toEatDinner(1, 'pizza', 4000),
      toEatDinner(1, 'rice', 3000)
    ])
    .then(res => console.log(res))
    .catch(err => console.log(err)); // 沒錢了，沒辦法吃 pizza