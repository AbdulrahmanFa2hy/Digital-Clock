function clock() {
  let data = new Date()
  data.setHours(24)
  let hours = data.getHours()
  let minutes = data.getMinutes()
  let seconds = data.getSeconds()
  let flag = 'AM';
  if(hours == 0){
    hours = 12;
  }
  if(hours > 12){
    hours -= 12;
    flag = "PM"
  }
  if(hours < 10) hours = "0" + hours;
  if(minutes < 10) minutes = "0" + minutes;
  if(seconds < 10) seconds = "0" + seconds;
  document.body.append(data)
  document.body.innerText = `${hours} : ${minutes} : ${seconds} ${flag}`

  setTimeout(function () {
    clock()
  }, 1000)
  
}

clock()

