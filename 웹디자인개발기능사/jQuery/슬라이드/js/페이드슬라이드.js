
$(function() {
  let index = 0
  const speed = 1000
  const time = 2000
  const $slide = $('.slide')
  const count = $slide.length
  $slide.not(":first").hide()   //첫번째요소(first) 제외하고
                                // 나머지요소(이 경우 2,3번) 숨김
  setInterval(function() {
    index = (index + 1) % count
    $slide.fadeOut(speed)
    $slide.eq(index).fadeIn(speed)  // eq() : 배열의 인덱스로 선택가능
                                    // 다음 슬라이드이미지 선택해서
                                    // fadeIn 해줌
  }, time)
})