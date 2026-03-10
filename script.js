// 1. HTML에 있는 시계와 슬라이더를 자바스크립트(근육)로 가져옵니다.
const slider = document.getElementById('time-slider');
const display = document.getElementById('time-display');
const body = document.body;

// 2. 슬라이더를 움직일 때마다(input) 이 안의 명령을 실행해라!
slider.addEventListener('input', function () {
    // 현재 슬라이더의 숫자(시간)를 가져옵니다.
    const hour = parseInt(this.value);

    // 숫자가 9면 '09:00', 14면 '14:00' 형태로 예쁘게 만듭니다.
    const formattedTime = hour.toString().padStart(2, '0') + ':00';
    display.textContent = formattedTime; // 화면 시계 업데이트

    // 3. 시간대에 따라 <body> 태그의 '명찰(class)'을 뗐다 붙였다 합니다!
    if (hour >= 6 && hour < 12) {
        // 6시 ~ 11시: 아침
        body.className = 'morning';
    } else if (hour >= 12 && hour < 18) {
        // 12시 ~ 17시: 오후 (노을)
        body.className = 'afternoon';
    } else {
        // 그 외 시간: 밤
        body.className = 'night';
    }
});
