const toEatDinner = (food, time) => {
    return new Promise(resolve => {
      if(true){
        setTimeout(() => resolve(`成功吃到 ${food}`), time);
      };
    });
  };
  
  toEatDinner('chicken', 3000)
    .then(res => {
    console.log(res);
    return toEatDinner('pizza', 1000)
  }).then(res => {
    console.log(res);
    return toEatDinner('rice', 2000)
  }).then(res => {
    console.log(res);
  });