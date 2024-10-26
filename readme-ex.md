# 목차
- 🍙 프로젝트 소개 (개요)
- 🗺 Architecture
- 🗂 파일 디렉토리 구조
- 📱 주요 화면 및 구현 기능
    1. 1️⃣ STEP1. Onboarding 화면 구현
        - 관련 PR
        - 고민한 점
        - Trouble Shooting
        - 키워드
    1. 2️⃣ STEP2. 네트워크 및 TabBar 화면/설정 화면 구현
        - 관련 PR
        - 고민한 점
        - Trouble Shooting
        - 키워드
    1. 3️⃣ STEP3. 게임 화면 및 애니메이션 구현
        - 관련 PR
        - 고민한 점
        - Trouble Shooting
        - 키워드
    1. 4️⃣ STEP4. 게임결과 화면 구현
        - 관련 PR
        - 고민한 점
        - Trouble Shooting
        - 키워드
  1. 🌙 업데이트 및 리팩토링 계획
- 배운 점
- 오류 해결방안
- 시연영상

---

## 프로젝트 소개 (개요)

Firebase사용법과 Delegate패턴, MVC패턴.<br>

My: HTML과 CSS를 사용하여 UI구현 기능학습을 위한 클론코딩 프로젝트 입니다. 학원 수업에 추가적으로 예습 복습 내용의 실질적인 활용을 위해 첫 개인 프로젝트를 시작했습니다.

🔗 웹 링크 / QR코드
🔗 앱 이미지

진행 기간
개발 : 2024.07.29 ~ 2024.08.11 (2주)

기술 스택
개발 환경
iOS : swift 5, xcode 13.4
서버 : Java 17, IntelliJ IDEA
라이브러리
iOS : RxSwift, Firebase, Realm, SwiftLint, Lottie
서버 : Spring boot
Deployment Target : iOS 14.0

Github: https://github.com/<br>
Skills: ActiveLabel, CocoaPods, Firebase, MVC

---

## 애플 아이맥 페이지를 선택한 이유

HTML과 CSS를 배우기로 마음먹기 전부터 웹사이트의 애니메이션에 관심이 갔고,
첫 개인 프로젝트로 기본적이면서도 반응형 웹과 애니메이션까지 알아볼 수 있어서 좋다고 생각했습니다.
이후로는 쇼핑몰 브라우저를 만들어보면서 더욱 심화된 자바스크립트와 인풋에 대해 공부할 수 있었으면 좋겠습니다.

---

## 배운 점

- 반응형 웹 3가지 범위에서 다른 코드: 가로 화면을 줄일 때,
가장 작은 화면: hidden, 중간 화면: grid view로 간격 감소, 큰 화면: 고정.
- 스크롤 애니메이션
- 자바스크립트로 펼쳐지는 nav 만들기
- 학습 후 바로 활용해봄으로써 확실한 기능과 알맞는 코드, 최근 사용되는 기능을 알 수 있다.
- 미리 기능학습으로 예습을 한 후 학원 수업에 참여하여 이해도를 높이고, 학습 효율을 증가시켰습니다.

추가적인 내용: https://velog.io/

https://velog.io/@rimu/htmlCSS-%EC%9B%B9%EC%82%AC%EC%9D%B4%ED%8A%B8-%ED%81%B4%EB%A1%A0-%EC%BD%94%EB%94%A9-project-2-feat.-%EC%9C%84%EC%BD%94%EB%93%9C-%EC%82%AC%EC%A0%84%EC%8A%A4%ED%84%B0%EB%94%94-1%EC%A3%BC%EC%B0%A8
읽어보기
-> 프로젝트 .md 쓰기 참고. 끝내고나서 생각해봐도 주요 문제와 해결 몇 개 적기.
문제 화면 캡쳐와 간단하게 적은 코드 겻들여 설명하기
부족한 점.. 적기



---

## 블로그

- fixed 어떻게 사용하지..
- right-nav에 transition 넣기..



### Source Code from the Browser - Study
@media only screen and (max-width: 833px)

<nav> 
Color: rgba(0, 0, 0, .8); or #333336;
Color-hover: black;
Font-size: 17px;
Position: absolute;
Top, left: 0; z-index: 9999;
Display: block;
Height: 48px;
Margin: 0;
Min-width: 38px;

<div>	
Display: block;
max-width: 1024px;
height: 44px;

<div> Phone screen -> Apple button
<button>
<ul> For every screen
<li> 1 Apple button, all the other nav items, 3 돋보기, 4 장바구니
    <div> or <a> 
Display: flex;
Justify-content: center;
Padding: 0 8px;
Height: 44px;
White-space: nowrap;
(<div> and blabla and <a>) or (<span> svg or text”apple”)
<div>

** okay, nothing said ‘inline-text’, however I’m gonna use it.