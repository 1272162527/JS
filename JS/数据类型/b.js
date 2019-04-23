function init () {
  console.log(whatever)
  var whatever = document.getElementById('amao')
  console.log(whatever)
  console.log('aa'*1)
  console.log(0/100)
  console.log(typeof('100'))
  if (undefined === null) {
    console.log(typeof (100))
  }else {
    console.log(typeof('100'))
  }
  if (100 === '100'){
    document.write(2)
}
  if ('1' === true) {
    document.write(3)
  }
}
window.onload = init