let colors;

function setup() {
    createCanvas(600, 400);
    colorMode(HSB, 360, 100, 100, 100);
}

function draw() {
    background(0, 0, 95);
    let t = frameCount * 0.01;

    // 1) 애니메이션 격자
    let gridSize = 80;
    for (let x = 0; x < width; x += gridSize) {
        for (let y = 0; y < height; y += gridSize) {
            // 팔레트 흔들림
            let hue = (x * 0.2 + y * 0.3 + frameCount * 0.4) % 360;
            let sat = 40 + 30 * sin((x + y) * 0.01 + t);
            let bri = 60 + 20 * sin(t + x * 0.03);

            fill(hue, sat, bri, 80);
            noStroke();
            rect(x, y, gridSize, gridSize);
        }
    }

    // 2) 중앙 오브젝트
    push();
    translate(width / 2, height / 2);
    rotate(sin(frameCount * 0.01) * 0.8);

    let layers = 12;
    for (let i = 0; i < layers; i++) {
        let angle = frameCount * 0.02 + i * 0.6;

        let hue = (angle * 30 + i * 10) % 360;
        fill(hue, 60, 100, 70);

        stroke(hue, 40, 50, 80);
        strokeWeight(1.5);

        let r = 80 + sin(frameCount * 0.02 + i) * 30;

        let x1 = cos(angle) * r;
        let y1 = sin(angle) * r;
        let x2 = cos(angle + PI * 0.66) * r;
        let y2 = sin(angle + PI * 0.66) * r;
        let x3 = cos(angle + PI * 1.33) * r;
        let y3 = sin(angle + PI * 1.33) * r;

        triangle(x1, y1, x2, y2, x3, y3);
    }
    pop();

    // 3) 유기적으로 움직이는 원
    for (let i = 0; i < 16; i++) {
        let tt = frameCount * 0.015 + i;
        let cx = noise(i * 0.3, frameCount * 0.01) * width;
        let cy = noise(i * 0.3 + 50, frameCount * 0.01) * height;

        let hue = (i * 40 + frameCount * 2) % 360;

        fill(hue, 70, 100, 40 + 40 * sin(tt));
        noStroke();
        ellipse(cx, cy, 40 + 25 * sin(tt * 2));
    }

    // 4) 좌우 대칭 오브젝트
    for (let i = 0; i < 5; i++) {
        let y = i * 70 + 60;
        let wob = sin(frameCount * 0.05 + i * 0.4) * 25;

        fill((i * 60 + frameCount * 2) % 360, 60, 100);
        noStroke();

        let sz = 40 + 10 * sin(frameCount * 0.1 + i);

        ellipse(150 + wob, y, sz);
        ellipse(width - 150 - wob, y, sz);
    }

    // 5) 리듬감 있는 선
    strokeWeight(2);
    for (let i = 0; i < 20; i++) {
        let hue = (i * 30 + frameCount * 2) % 360;
        stroke(hue, 80, 100, 60);

        let x1 = noise(i * 0.2, frameCount * 0.01) * width;
        let y1 = noise(i * 0.2 + 100, frameCount * 0.01) * height;
        let x2 = noise(i * 0.2 + 200, frameCount * 0.01) * width;
        let y2 = noise(i * 0.2 + 300, frameCount * 0.01) * height;

        line(x1, y1, x2, y2);
    }

    // 6) 프레임 강조
    noFill();
    stroke(0);
    strokeWeight(6);
    rect(3, 3, width - 6, height - 6);
}

// GIF 저장
function keyPressed() {
    if (key === 'g' || key === 'G') {
        saveGif('pooreum_assignment2_v2', 10);
    }
}
