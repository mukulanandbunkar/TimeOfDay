
const time = document.getElementById('time-input')
function changeBg(timeValue=Number(time.value.split(":").join("."))) {
  let tym = timeValue;
  console.log((Number(tym)));
  if((tym > 4.59)&& (tym < 12)){
    document.body.style.backgroundColor = '#87CEEB'
    document.getElementById('greeting').innerText = 'GOOD MORNING'
    const whiteText = document.getElementsByClassName('text-white');
    for(let i=0; i< whiteText.length; i++){
      whiteText[i].style.color = '#000';
    }
  }else if((tym > 11.59) && (tym < 18.59)) {
    document.body.style.backgroundColor = '#ffcc00'
    document.getElementById('greeting').innerText = 'GOOD AFTERNOON'
    const whiteText = document.getElementsByClassName('text-white');
    for(let i=0; i< whiteText.length; i++){
      whiteText[i].style.color = '#000';
    }
  }else{
    document.body.style.backgroundColor = '#000'
    const whiteText = document.getElementsByClassName('text-white');
    for(let i=0; i< whiteText.length; i++){
      whiteText[i].style.color = 'white';
    }
    document.getElementById('greeting').innerText = 'GOOD NIGHT'
  }
}


function onLoad() {
  let d = new Date()
  let tym = `${d.getHours()}:${d.getMinutes()}`;
  time.value = tym;
  changeBg(tym.split(":").join("."));
}

onLoad();