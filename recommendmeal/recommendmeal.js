document.addEventListener('DOMContentLoaded', () => {
  const divideFood = document.querySelectorAll('.divideFood');

  //span 태그들 공통CSS 적용
  for( let i = 0; i<divideFood.length; i++) {
    divideFood[i].style.width = "100%"
    divideFood[i].style.height = "100%"
    divideFood[i].style.position = "absolute"
    divideFood[i].style.borderRadius = "50%"
    divideFood[i].style.backgroundSize = "cover"
    divideFood[i].style.opacity = "0.5"
    divideFood[i].onmouseover = function() {
      this.style.opacity = 1.0;
    }
    divideFood[i].onmouseout = function() {
      this.style.opacity = 0.5;
    }
  }


  const arrow = document.querySelector("#arrow")
  const choButton = document.querySelector("#chooseButton")
  choButton.addEventListener("click", function(event) {
    //투명도 초기화
    for( let i = 0; i<divideFood.length; i++) {
      divideFood[i].style.opacity = "0.5"
    }  
    //랜덤넘버 생성
    let randomNumber = Math.ceil(Math.random()*8);
    let degree = randomNumber*45
    let count = 0;

    //화살표 랜덤 넘버만큼 돌리기
    let timerId2 = setInterval( function() {
      arrow.style.transform = `rotate(${45*count}deg)`
      count += 1
      if( degree < count*45) {
        clearInterval(timerId2)
        if(randomNumber==8) {
          randomNumber = 0
        }
        divideFood[randomNumber].style.opacity="1.0"
        count = 0
      }
    },50) //화살표 돌아가는 속도 설정 
  })
  


})
