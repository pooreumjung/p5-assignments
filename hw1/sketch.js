function setup() {
    createCanvas(600, 400);
    noLoop(); // 한 번만 그리기
}

function draw() {
    background(240);

    // 랜덤 색상 팔레트
    let colors = [
        color(255, 99, 132),
        color(54, 162, 235),
        color(255, 206, 86),
        color(75, 192, 192),
        color(153, 102, 255),
        color(255, 159, 64),
        color(200, 200, 200),
        color(50, 50, 50),
    ];

    // 1) 배경에 격자 패턴 (사각형 반복)
    for (let x = 0; x < width; x += 100) {
        for (let y = 0; y < height; y += 100) {
            fill(random(colors));
            stroke(0);
            rect(x, y, 100, 100);
        }
    }

    // 2) 반투명 원 여러 개 (겹침 효과)
    for (let i = 0; i < 15; i++) {
        let c = random(colors);
        c.setAlpha(random(100, 200));
        fill(c);
        noStroke();
        ellipse(random(width), random(height), random(50, 150));
    }

    // 3) 삼각형 레이어
    for (let i = 0; i < 8; i++) {
        fill(random(colors));
        stroke(0);
        let x1 = random(width),
            y1 = random(height);
        let x2 = x1 + random(-100, 100),
            y2 = y1 + random(-100, 100);
        let x3 = x1 + random(-100, 100),
            y3 = y1 + random(-100, 100);
        triangle(x1, y1, x2, y2, x3, y3);
    }

    // 4) 대칭 도형 (좌우 반사 느낌)
    for (let i = 0; i < 5; i++) {
        let c = random(colors);
        fill(c);
        let y = i * 70 + 50;
        ellipse(150, y, 40, 40);
        ellipse(width - 150, y, 40, 40);
    }

    // 5) 랜덤 선 (리듬감)
    strokeWeight(2);
    for (let i = 0; i < 10; i++) {
        stroke(random(colors));
        line(random(width), random(height), random(width), random(height));
    }

    // 6) 강조 사각형 프레임
    noFill();
    stroke(0);
    strokeWeight(6);
    rect(3, 3, width - 6, height - 6);
}

// PNG 저장 단축키
function keyPressed() {
    if (key === 's' || key === 'S') {
        saveCanvas('20211444_정푸름_과제1', 'png');
    }
}
