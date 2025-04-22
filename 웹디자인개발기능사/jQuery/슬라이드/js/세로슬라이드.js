

$(function() {
  const speed = 500   // 슬라이드마다 넘어가는시간 움직이는 속도 0.5초
  const time = 3000    // 넘어가려고 움직이기까지 걸리는 시간
  const $slide = $('.slide')  // html의 슬라이드 담고있는 영역
  const $container = $('.slide-container')
  const size = $slide.height() // 슬라이드의 가로사이즈 구하기 1200
                              // 세로슬라이드라면 세로사이즈 height로 바꾸자
  const count = $slide.length // 슬라이드 유사배열의 길이 3개
  $container.width(size * count) // 슬라이드를 담고 있는 컨테이너에 슬라이드의 총 길이를 계산해서 넣어줌

  setInterval(function() {
    $container.animate({
      top: -size  // 왼쪽으로 -size만큼 땡겨가게 써줌 이 경우 -1200
    }, speed, function() {
      $container.css('top', '0')
      $container.append($('.slide').first())
    })
  }, time)
})