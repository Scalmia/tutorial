// === Time Travel Widget Logic ===
const slider = document.getElementById('time-slider');
const display = document.getElementById('time-display');
const body = document.body;

slider.addEventListener('input', function () {
    const totalMinutes = parseInt(this.value);
    const hour = Math.floor(totalMinutes / 60);
    const minute = totalMinutes % 60;

    const formattedTime = hour.toString().padStart(2, '0') + ':' + minute.toString().padStart(2, '0');
    display.textContent = formattedTime; 

    if (hour >= 6 && hour < 12) {
        body.className = 'morning';
    } else if (hour >= 12 && hour < 18) {
        body.className = 'afternoon';
    } else {
        body.className = 'night';
    }
});

// === Narrative Generator Logic ===

// Data categories for the generator
const characters = [
    "기억을 잃은 안드로이드",
    "몰락한 왕조의 마지막 후계자",
    "시간을 되돌릴 수 있는 저주에 걸린 용병",
    "인간의 감정을 연구하는 외계인 학자",
    "전설 속 드래곤과 마음이 이어진 어린 아이",
    "마법을 믿지 않는 강력한 마법사",
    "사이버펑크 도시의 뒷골목을 지배하는 천재 해커",
    "동물과 대화할 수 있는 은둔형 외톨이",
    "다른 차원에서 넘어온 기억 형사"
];

const settings = [
    "태양이 두 개인 사막 행성",
    "끝없이 비가 내리는 네온사인 가득한 디스토피아 거대 도시",
    "구름 위를 떠다니는 공중 섬들의 제국",
    "인류가 멸망한 후 거대한 자연이 뒤덮은 지구",
    "마법과 증기기관 기계가 공존하는 19세기 런던",
    "은하계 외곽의 버려진 거대 우주 정거장",
    "모든 사람이 가면을 쓰고 살아가는 신비한 북부 대륙",
    "빛이 닿지 않는 심해 1만 미터 아래의 수중 제국"
];

const goals = [
    "인류 최후의 백신을 찾아 우주선으로 귀환하는 것",
    "세상을 멸망시키려는 고대의 악마를 부활 직전에 막아내는 것",
    "자신의 잃어버린 기억 속에 감춰진 끔찍한 진실을 마주하는 것",
    "왕국을 전복시킬 수 있는 절대적인 아티팩트를 파괴하는 것",
    "단 한 명의 사랑하는 사람을 살리기 위해 신과 위험한 거래를 하는 것",
    "자신을 배신하고 모든 것을 빼앗은 자들에게 가장 완벽한 복수를 완성하는 것",
    "수백 년간 이어진 두 종족 간의 끔찍한 전쟁을 끝내는 것",
    "차원의 틈새로 빨려 들어가는 세계의 폭주를 막고 문을 영원히 닫아버리는 것"
];

const generateBtn = document.getElementById('generate-btn');
const storyOutput = document.getElementById('story-output');

generateBtn.addEventListener('click', function() {
    // 1. Loading state (Add a little fade effect)
    storyOutput.style.opacity = '0.3';
    storyOutput.innerHTML = '<p style="color: #666; font-size:1rem; font-weight:normal;">운명의 톱니바퀴를 돌리는 중...</p>';
    
    // 2. Generate and display after a brief delay
    setTimeout(() => {
        // Randomly select one item from each array
        const randomChar = characters[Math.floor(Math.random() * characters.length)];
        const randomSetting = settings[Math.floor(Math.random() * settings.length)];
        const randomGoal = goals[Math.floor(Math.random() * goals.length)];

        // Formulate the narrative text into a natural Korean sentence
        const narrativeText = `당신은 <strong>[${randomSetting}]</strong>에 불시착한 <strong>[${randomChar}]</strong>입니다. <br>당신의 목표는 <strong>[${randomGoal}]</strong>입니다.`;
        
        // Output the result
        storyOutput.innerHTML = `<p>${narrativeText}</p>`;
        storyOutput.style.opacity = '1';
    }, 400); 
});
