# POV (Point of View) 🎞️
>
> 취향이 비슷한 사람들과 클럽을 만들고 함께 리뷰를공유할 수 있는 소셜 플랫폼
>
> #### 🗓️ 프로젝트 일정: 2024년 11월 16일 - 2024년 12월 19일 (5주)

<img width="835" alt="image" src="https://github.com/user-attachments/assets/7684cb3d-cf8f-493f-a451-b084d1e36481" />

## 💡 기획 의도

- 'Point of View'는 '관점'이라는 뜻을 담고 있는데, 이는 저희 서비스가 사용자들의 다양한 관점을 공유하는 플랫폼임을 나타냄과 동시에 저희 팀이 이 프로젝트를 진행하며 어떤 관점에서 접근했는지를 의미하기도 합니다.

## 🎯 서비스 목표

- 사용자의 선호 장르에 따른 **영화를 추천**해주고,**영화 리뷰를 작성**할 수 있는 기능을 제공
- 선호 장르가 비슷한 사용자 간의 모임인 **클럽**을 만들고, **가입하거나 초대**할 수 있는 기능을 제공

<br/>

## 👥 Team Members (팀원 및 팀 소개)

| <img src="https://avatars.githubusercontent.com/u/93921784?v=4" width="130" height="130"> | <img src ="https://avatars.githubusercontent.com/u/44727850?v=4" width="130" height="130"> | <img src ="https://avatars.githubusercontent.com/u/90168987?v=4" width="130" height="130"> |
| :---------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------: |
|                         [김다연 FE](https://github.com/dyeon-dev) |                                                  [신혜민 FE](https://github.com/shinhm1)                           |                             [박주광 FE](https://github.com/jugpark)                             |
| ✨ 무한 스크롤 구현<br> ✨ 에러바운더리 핸들링<br> ✨ 서스펜스 적용<br> ✨ 영화 리뷰 기능 구현<br> ✨ 클럽 관련 기능 구현<br> 시사회 응모 결제 구현<br> 영화, 리뷰 좋아요 기능 구현<br>영화 데이터 추가 작업 및 페이지 구현| ✨ 소셜 로그인 구현<br>✨ 회원가입 기능 구현<br>✨ FCM 알림기능 구현<br> 마이페이지 구현<br> 전체 UI 디자인 및 퍼블리싱<br>아톰 단위 컴포넌트 구현|  ✨ 어드민 전체 페이지 개발<br>✨ TMDB 영화 등록 구현<br>✨ 영화 큐레이션 생성<br>리뷰 숨김처리 구현<br>개발 환경 세팅<br>반응형 레이아웃 구현<br>영화 페이지 구현|

<br/>

## 🛠️ 기술 스택

<img width="787" alt="image" src="https://github.com/user-attachments/assets/c4cecbd7-9a8f-4331-8de6-c49efd55f240" />

### 팀프로젝트 노션 & 피그마 & 스토리북 & 디자인 시스템 배포

- [Notion Link](https://www.notion.so/shinhm1/13ce7e8fdd12808998d7dc98583a28e4?pvs=4)
- [Figma Link](https://www.figma.com/design/LPgTWB5ycZKHceP9pQDOmo/UI?node-id=1-2&p=f&t=NhkTp0IcCRKWKkwa-0)
  - [Design System Figma](https://www.figma.com/design/LPgTWB5ycZKHceP9pQDOmo/UI?node-id=1-3&p=f&t=z7EcT8zy9piFwWlW-0)
- [Storybook Link](https://673c240da97b5391fe1cbe2f-ryyeqhtkia.chromatic.com/?path=/docs/design-system-avatar--docs)
- [Npm Link](https://www.npmjs.com/package/pov-design-system?activeTab=readme)

<br>

## 🧑🏼‍💻 개발 내용 및 구현 과정

### 디자인 시스템 도입

<img width="1126" alt="image" src="https://github.com/user-attachments/assets/9956de02-05b5-4d57-87e3-7a0f392e087b" />
<img width="1119" alt="image" src="https://github.com/user-attachments/assets/43bf6471-9798-4fe7-8f33-5f05e4c797a3" />

### Tanstack Query

<img width="845" alt="image" src="https://github.com/user-attachments/assets/776fea3e-c80d-4f59-a1d7-b547eabaaf36" />
<img width="1109" alt="image" src="https://github.com/user-attachments/assets/239d9796-bf3b-471e-b56e-dc8bcdd361e2" />

### 사용자 경험 및 UI 안정성 개선
>
> 🎯 리액트 서스펜스
<img width="1008" alt="image" src="https://github.com/user-attachments/assets/7b21ad57-e80c-4a7d-b646-e10172a749f7" />

> 🎯 리액트 에러바운더리
<img width="998" alt="image" src="https://github.com/user-attachments/assets/2f7882ba-1ad5-4dc5-a3e8-2cc23c48af82" />

> 🎯 반응형 UI 및 라이트 모드 지원
<img width="983" alt="image" src="https://github.com/user-attachments/assets/dac096f3-257c-48d0-af0f-ae0f3246e8d1" />

<br/>

## 🧩 Folder Structure

```plaintext
src/
├── apis/                   
├── assets/
├── components/
│   ├── mols/              # 컴포넌트 (우리가 흔히 아는)
│   └── templates/         # 레이아웃 (페이지 양쪽 패딩 등 페이지 레이아웃)
├── constants/
├── hooks/
│   └── queries/
├── pages/
│   ├── main/
│   │   └── index.tsx      # pages/{route}/.. 안의 tsx 파일은 index.tsx로 통일
│   ├── login/
│   │   └── index.tsx      
│   └── movie/
│       └── index.tsx      
├── stories/
├── stores/
├── types/                 # 에픽 별로 type 정의
│   └── movie/              
├── routes/
├── main.tsx
├── App.tsx                 
└── index.tsx                          
```

<br/>

## ⚙️ 개발 환경 실행 방법

```
git clone https://github.com/eureka-final/pov-frontend
```

```
npm install
```

```
npm run dev
```

<br/>

## 🪄 커밋 컨벤션

### 기본 구조

```
type(영문): subject(한글)
```

### type 종류

| 커밋 태그 | 설명                              | 예시                          |
|-----------|-----------------------------------|-------------------------------|
| feat      | 새로운 기능 추가                   | feat: …                       |
| fix       | 버그 수정                          | fix: …                        |
| style     | HTML, CSS로 UI 구현 시 작성       | style: 로그인 페이지 UI 구현    |
| refactor  | 코드 리팩토링                      | refactor: update login logic  |
| docs      | 문서 (README, 템플릿) 수정         | docs: …                       |
| test      | 테스트 코드                        | test: …                       |
| build     | 빌드 관련 파일 수정               | build: …                      |
| ci        | CI 설정 파일 수정                 | ci: …                         |
| pref      | 성능 개선                          | pref: …                       |
| chore     | 의존성 추가 등 기타 작업           | chore: …                      |
