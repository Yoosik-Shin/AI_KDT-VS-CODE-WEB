
$(function() {
  const speed = 500   // 슬라이드마다 넘어가는시간 움직이는 속도 0.5초
  const time = 1500    // 넘어가려고 움직이기까지 걸리는 시간
  const $slide = $('.slide')  // html의 슬라이드 담고있는 영역
  const $container = $('.slide-container')
  const size = $slide.width() // 슬라이드의 가로사이즈 구하기 1200
  const count = $slide.length // 슬라이드 유사배열의 길이 3개
  $container.width(size * count) // 슬라이드를 담고 있는 컨테이너에 슬라이드의 총 길이를 계산해서 넣어줌

  setInterval(function() {
    $container.animate({
      left: -size  // 왼쪽으로 -size만큼 땡겨가게 써줌 이 경우 -1200
    }, speed, function() {
      $container.css('left', '0')
      $container.append($('.slide').first())
    })
  }, time)
})













// 제이쿼리 일반 가로슬라이드
// $(function() {
//   const speed = 500
//   const time = 1500
//   const slides = $('.slide img')
//   let index = 0
//   const size = 1200
 
//   setInterval(function() {
//     index = (index + 1) % 3
//     slides.each(function(i, slide) {
//       $(slide).css('transform', 
//         `translateX(calc(${size}px * -${index}))`)
//     });
//   }, time);
// })