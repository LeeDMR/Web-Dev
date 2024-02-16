let d1 = new Date(2012, 1, 20, 3, 12);

function getWeekDay(date) {
    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
  
    return days[date.getDay()];
  }
  
  let date = new Date(2014, 0, 3); 
  alert( getWeekDay(date) );

  function getLocalDay(date) {

    let day = date.getDay();
  
    if (day == 0) {
      day = 7;
    }
  
    return day;
  }


  function getDateAgo(date, days) {
    date.setDate(date.getDate() - days);
    return date.getDate();
  }

  function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
  }

  function getSecondsToday() {
    let now = new Date();
  

    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  
    let diff = now - today;
    return Math.round(diff / 1000);
  }

  function getSecondsToTomorrow() {
    let now = new Date();
  
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
  
    let diff = tomorrow - now; 
    return Math.round(diff / 1000); 
  }

