// 1st task

function cachingDecoratorNew(func) {
  const cache = [{}];

  function wrapper(...args) {

    const hash = args.join(', ');
    let idx = cache.findIndex((item) => item.hash === hash);
    if (idx !== -1) {
      let objetc = cache[idx].result;

      console.log("Из кэша: " + objetc); 
      return "Из кэша: " + objetc;
    }

    let result = func(...args); 
    cache.push({ hash, result }); 
    if (cache.length > 5) { 
      cache.shift(); 
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;  
  }

  return wrapper;
}



// 2nd task

function debounceDecoratorNew(func, ms) {
  let timerId;
  let flag = false;

  return function () {

    if (!flag) {
      flag = true;
      func.apply(this, arguments);
      return;
    }

    const funcCall = () => { func.apply(this, arguments) };

    clearTimeout(timerId);

    timerId = setTimeout(funcCall, ms);
  }
}

// Для отладки

setTimeout(upgradedSendSignal); // Сигнал отправлен
setTimeout(upgradedSendSignal, 300); // проигнорировано так как от последнего вызова прошло менее 2000мс (300 - 0 < 2000)
setTimeout(upgradedSendSignal, 900); // проигнорировано так как времени от последнего вызова прошло: 900-300=600 (600 < 2000)
setTimeout(upgradedSendSignal, 1200); // проигнорировано так как времени от последнего вызова прошло: 1200-900=300 (300 < 2000)
setTimeout(upgradedSendSignal, 2300); // проигнорировано так как времени от последнего вызова прошло: 2300-1200=1100 (1100 < 2000)
setTimeout(upgradedSendSignal, 4400); // Сигнал отправлен так как времени от последнего вызова прошло: 4400-2300=2100 (2100 > 2000)
setTimeout(upgradedSendSignal, 4500); // Сигнал будет отправлен, так как последний вызов debounce декоратора (спустя 4500 + 2000 = 6500) 6,5с



// 3rd task


let count = 0;

function debounceDecorator2(debounceDecoratorNew) {

  function wrapper() {
    count++
    console.log(debounceDecoratorNew('Function called ' + count));
  }

  return wrapper();
} 


debounceDecorator2();
debounceDecorator2();
debounceDecorator2();