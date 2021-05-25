document.addEventListener('DOMContentLoaded', () => {
  const listFood = ["순대국", "홍합탕", "콩나물국밥", "북엇국", "뼈해장국", "육개장", "매생이국" , "선지 해장국", "우거지국", "된장찌개", "김치찌개", "부대찌개", "순두부찌개", "청국장찌개", "동태찌개", "비지찌개", "고추장찌개", "오징어찌개", "닭개장", "떡국", "소고기무국", "시래깃국", "갈비탕", "추어탕", "삼계탕", "대구탕", "매운탕", "설렁탕"
    ]
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