class AlarmClock {

  constructor(alarmCollection, timerId) {
    this.alarmCollection = [];
    this.timerId = null;
  }

  addClock(time, action, id) {

    if (id === undefined) {
      throw new Error('Введите id');
    } else if (this.alarmCollection.find(idSearching => idSearching.id === id)) {
      return 'Такой id уже есть';
    }

    this.alarmCollection.push({time, action, id}); 
  } 

  removeClock(id) {

    this.alarmCollection = this.alarmCollection.filter(checkId => checkId.id !== id);
    return `${this.alarmCollection.splice(this.id)} удалён`;
  }  

  getCurrentFormattedTime() {
    const currentDate = new Date();
    const hours = currentDate.getHours() < 10 ? `0${currentDate.getHours()}` : `${currentDate.getHours()}`;
    const minutes = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : `${currentDate.getMinutes()}`;

    return `${hours}:${minutes}`;
  } 

  start() {
    
    function checkClock(clock) {
      if (clock.time === this.getCurrentFormattedTime()) {
        return clock.action;
      }
    }

    if (this.timerId === null) {
      this.timerId = setInterval(() => {
        this.alarmCollection.forEach(clock => checkClock(clock));
      }, 500); 
    } 

  } 

  stop() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  printAlarms() {
    return this.alarmCollection.forEach(clock => console.log(`Будильник ${clock.id} установлен на ${clock.time}`));
  }

  clearAlarms() {
    clearInterval(this.timerId);
    return this.alarmCollection = [];
  }
}

// For example


function testCase() {
  let alarm = new AlarmClock();

  alarm.addClock('20:00', () => console.log('Пора!'), 1);

  alarm.addClock('20:01', () => {console.log('Вставай уже!'); alarm.removeClock(2)}, 2);

  //alarm.addClock('20:03', () => console.log('Иди умываться!'));
  
  alarm.printAlarms();
  alarm.start();
  alarm.stop();
}

testCase();