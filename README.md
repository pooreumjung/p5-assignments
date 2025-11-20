# P5.js Visual Portfolio – Assignments Collection

2025년 2학기 숭실대학교 컴퓨터학부 P5.js 기반 과제 모음
<br>
본 프로젝트는 P5.js를 활용하여 제작한 4가지 시각 예술·인터랙션 과제를 모아 GitHub Pages로 배포한 결과물입니다.

👉 GitHub Pages 링크: https://pooreumjung.github.io/p5-assignments/

## 📁 구성

| 번호                        | 제목                              | 주요 내용                  | 링크                                                                        |
| --------------------------- | --------------------------------- | -------------------------- | --------------------------------------------------------------------------- |
| **#1 추상화(abstract art)** | 기본 도형을 활용한 정적 추상 예술 | Shape · Color Study        | 🔗 [작품 보기](https://pooreumjung.github.io/p5-assignments/hw1/index.html) |
| **#2 캐리커처(Caricature)** | 나를 묘사하는 캐리커처            | 얼굴 특징·색상 표현        | 🔗 [작품 보기](https://pooreumjung.github.io/p5-assignments/hw2/index.html) |
| **#3 인터랙티브 캐릭터**    | 키보드 + 마우스 인터랙션 추가     | 동작·반응형 캐릭터         | 🔗 [작품 보기](https://pooreumjung.github.io/p5-assignments/hw3/index.html) |
| **#4 추상화 애니메이션**    | 과제 #1 기반 애니메이션 확장      | 움직임·색상 변화·크기 변화 | 🔗 [작품 보기](https://pooreumjung.github.io/p5-assignments/hw4/index.html) |

## Assignment Details

### 과제 #1 — Abstract Arts

#### 주제: 다양한 기본 도형(원·사각형·삼각형 등)을 활용한 추상 미술 작품 제작

✔️ 요구사항

여러 도형 활용: ellipse(), rect(), triangle() 등
<br>
색상 표현: fill(), stroke() 등

---

### 과제 #2 — 나의 캐리커처 만들기

#### 주제: p5.js를 사용하여 자신을 과장·단순화한 캐리커처 제작

✔️ 요구사항

기본 도형만으로 얼굴 구성 (ellipse, rect 등)
<br>
fill()/stroke()로 피부·머리·눈 색상 표현
<br>
자신을 나타내는 특징 요소 추가 (예: 안경)

---

### 과제 #3 — 인터랙티브 캐릭터 만들기

#### 주제: 과제 2의 캐리커처에 움직임과 상호작용을 추가하여 GIF로 출력

✔️ 요구사항

키보드 + 마우스 인터랙션 모두 포함
<br>
외부 이미지 리소스 사용 X
<br>
반복문은 필요할 경우만 사용 (배열 등 고급 문법은 X)
<br>
움직임 기반 동작 만들기 (이동, 표정 변화 등)
<br>

✔️ 제출방법
<br>
10초 이상 인터랙션을 담은 GIF(≤ 1MB)

---

### 과제 #4 — 추상화 애니메이션 만들기

#### 주제: 과제 #1의 정적 추상화를 애니메이션 작품으로 확장

✔️ 요구사항
<br>
기본 애니메이션: sin(), cos(), frameCount 등
<br>
색상 변화: lerpColor(), colorMode() 등
<br>
크기 변화 구현
<br>
원작(#1)을 크게 해치지 않는 선에서 수정 가능

✔️ 제출방법
<br>
애니메이션 GIF (10초, ≤ 1MB)

---

## 기술 스택 / Tools

p5.js 1.x
<br>
HTML / CSS / JavaScript (최소 수준)
<br>
GitHub Pages for Deployment
<br>
GIF Export: saveGif()
