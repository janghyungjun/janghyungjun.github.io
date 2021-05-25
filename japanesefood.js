document.addEventListener('DOMContentLoaded', () => {
  const listFood = ["초밥", "연어덮밥", "치킨마요덮밥", "돈부리", "라멘", "우동", "문어숙회", "연어"]
  const wrapper = document.querySelector('#wrapper')

  for (let i =0; i<listFood.length; i++) {
    const text = document.createElement('div')
    wrapper.appendChild(text)
    text.innerText = listFood[i]
  }
  
  const listText = document.querySelectorAll('#wrapper > div')
  
  const choButton = document.querySelector("#chooseButton")
  choButton.addEventListener("click", function(event) {
    for ( i=0; i<listText.length; i++) {
      listText[i].style.border = "0px"
      listText[i].style.backgroundImage = ""
    }// 다시 돌릴때 노란표시 초기화 
    let randomNumber = Math.floor(Math.random()*listFood.length); //랜덤넘버 생성
    let count = 0;
    console.log(randomNumber)
    listText[0].style.border = "0.25vw solid orange" 
    if (randomNumber === 0) {
      console.log("0번 인덱스 입니다")
      listText[randomNumber].style.backgroundImage = "url('images/check.jpg')"
      listText[randomNumber].style.backgroundSize = "cover"
    } else {
      let timerId1 = setInterval( function() {
        if (count === randomNumber-1){
          listText[randomNumber].style.backgroundImage = "url('images/check.jpg')"
          listText[randomNumber].style.backgroundSize = "cover"
          clearInterval(timerId1)  // 스탑 
        }
        listText[count].style.border = "0vw"
        listText[count+1].style.border = "0.25vw solid orange" //노란표시 생기게 하기 
        count += 1 
      },500) // border 바꾸기 
  
    }
  })
})