function setup() {
    // 과제 규격에 맞는 캔버스 크기
    createCanvas(600, 400);
    noLoop();
}

function draw() {
    // --- 배경 (나무 상자 느낌) ---
    background('#8B5A2B'); // 갈색

    // --- 인물 그리기 ---
    // 몸통 (회색 티셔츠)
    fill('#D3D3D3');
    stroke('#404040');
    strokeWeight(4);
    rect(230, 180, 140, 100, 10);

    // 티셔츠 목과 소매
    fill('#404040');
    noStroke();
    arc(300, 180, 80, 40, 0, PI); // 목
    rect(210, 180, 40, 20, 5); // 왼쪽 소매
    rect(370, 180, 40, 20, 5); // 오른쪽 소매

    // 다리 (청바지)
    fill('#AEC6CF');
    stroke('#5F9EA0');
    strokeWeight(2);
    rect(210, 280, 80, 80, 15); // 왼쪽 다리
    rect(310, 280, 80, 80, 15); // 오른쪽 다리

    // 팔
    fill('#F5DEB3');
    noStroke();
    rect(220, 190, 30, 80, 10); // 왼쪽 팔
    rect(350, 190, 30, 70, 10); // 오른쪽 팔

    // 손
    ellipse(235, 270, 40, 40); // 왼손
    ellipse(365, 230, 40, 40); // 오른손

    // 브이사인
    stroke('#000000');
    strokeWeight(6);
    line(365, 230, 350, 190);
    line(365, 230, 380, 190);

    // 목
    fill('#F5DEB3');
    noStroke();
    rect(285, 150, 30, 30);

    // 얼굴
    stroke('#000000');
    strokeWeight(2);
    fill('#F5DEB3');
    ellipse(300, 120, 100, 120);

    // 머리카락
    fill('#000000');
    noStroke();
    arc(300, 110, 100, 120, PI, TWO_PI);

    // 눈
    fill('#000000');
    ellipse(280, 120, 10, 10);
    ellipse(320, 120, 10, 10);

    // 코
    stroke('#000000');
    strokeWeight(2);
    line(300, 125, 300, 140);

    // 입
    noFill();
    arc(300, 150, 40, 20, 0, PI);

    // 안경 (단순화된 테)
    noFill();
    stroke('#404040');
    strokeWeight(3);
    rect(260, 110, 40, 25, 5); // 왼쪽 안경
    rect(300, 110, 40, 25, 5); // 오른쪽 안경
    line(300, 122, 300, 122); // 가운데 연결

    // 윗 테 강조
    stroke('#000000');
    strokeWeight(4);
    line(260, 110, 300, 110);
    line(300, 110, 340, 110);
}
