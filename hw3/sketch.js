let x = 0;
let y = 0;
let jumping = false;
let jumpSpeed = 0;
let wave = false; // 손 흔들기 모드
let blink = false; // 눈 깜빡임 상태
let blinkTimer = 0; // 눈 깜빡임 타이머

function setup() {
    createCanvas(600, 400);
    frameRate(30);
}

function draw() {
    background('#8B5A2B'); // 나무 배경색

    // --- 자동 애니메이션: 눈 깜빡임 ---
    blinkTimer++;
    if (blinkTimer > 60) {
        // 약 2초마다 토글
        blink = !blink;
        blinkTimer = 0;
    }

    // --- 점프 물리 ---
    if (jumping) {
        y -= jumpSpeed;
        jumpSpeed -= 0.8;
        if (y > 0) {
            y = 0;
            jumping = false;
        }
    }

    // --- 몸통 (회색 티셔츠) ---
    fill('#D3D3D3');
    stroke('#404040');
    strokeWeight(4);
    rect(230 + x, 180 + y, 140, 100, 10);

    // --- 팔 ---
    fill('#F5DEB3');
    noStroke();
    rect(220 + x, 190 + y, 30, 80, 10); // 왼팔
    rect(350 + x, 190 + y, 30, 70, 10); // 오른팔

    // --- 손 ---
    ellipse(235 + x, 270 + y, 40, 40); // 왼손
    ellipse(365 + x, 230 + y, 40, 40); // 오른손

    // --- 브이사인 or 손 흔들기 ---
    stroke('#000000');
    strokeWeight(6);
    if (wave) {
        line(365 + x, 230 + y, 350, 190 + sin(frameCount * 0.3) * 10);
        line(365 + x, 230 + y, 380, 190 + cos(frameCount * 0.3) * 10);
    } else {
        line(365 + x, 230 + y, 350, 190);
        line(365 + x, 230 + y, 380, 190);
    }

    // --- 다리 (청바지) ---
    fill('#AEC6CF');
    stroke('#5F9EA0');
    strokeWeight(2);
    rect(210 + x, 280 + y, 80, 80, 15);
    rect(310 + x, 280 + y, 80, 80, 15);

    // --- 목 ---
    fill('#F5DEB3');
    noStroke();
    rect(285 + x, 150 + y, 30, 30);

    // --- 얼굴 ---
    stroke('#000');
    strokeWeight(2);
    fill('#F5DEB3');
    ellipse(300 + x, 120 + y, 100, 120);

    // --- 머리카락 ---
    fill('#000');
    noStroke();
    arc(300 + x, 110 + y, 100, 120, PI, TWO_PI);

    // --- 눈 ---
    fill('#000');
    if (!blink) {
        ellipse(280 + x, 120 + y, 10, 10);
        ellipse(320 + x, 120 + y, 10, 10);
    } else {
        stroke('#000');
        strokeWeight(2);
        line(275 + x, 120 + y, 285 + x, 120 + y);
        line(315 + x, 120 + y, 325 + x, 120 + y);
    }

    // --- 코 ---
    stroke('#000');
    strokeWeight(2);
    line(300 + x, 125 + y, 300 + x, 140 + y);

    // --- 입 (마우스 위치에 따라 표정 변화) ---
    noFill();
    stroke('#000');
    let smile = map(mouseX, 0, width, -PI / 3, PI / 3);
    arc(300 + x, 150 + y, 40, 20, smile, PI - smile);

    // --- 안경 ---
    noFill();
    stroke('#404040');
    strokeWeight(3);
    rect(260 + x, 110 + y, 40, 25, 5);
    rect(300 + x, 110 + y, 40, 25, 5);
    line(300 + x, 122 + y, 300 + x, 122 + y);
    stroke('#000');
    strokeWeight(4);
    line(260 + x, 110 + y, 340 + x, 110 + y);
}

// --- 키보드 인터랙션 ---
function keyPressed() {
    if (keyCode === LEFT_ARROW) x -= 10; // 왼쪽 이동
    if (keyCode === RIGHT_ARROW) x += 10; // 오른쪽 이동
    if (keyCode === UP_ARROW && !jumping) {
        // 점프
        jumping = true;
        jumpSpeed = 12;
    }
    if (key === ' ') wave = !wave; // 스페이스로 손 흔들기 토글
}

function mousePressed() {
    background(random(100, 255), random(100, 255), random(100, 255));
}
