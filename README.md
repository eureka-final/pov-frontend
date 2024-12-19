 # POV (Point of View) 🎞️
> 영화에 대한 나만의 감상을 작성하고 공유할 수 있는 리뷰 서비스 
> 취향이 비슷한 사람들과 클럽을 만들고 함께 리뷰를 공유할 수 있는 소셜 플랫폼
> #### 🗓️ 프로젝트 일정: 2024년 11월 18일 - 2024년 12월 19일 (3주)
<img width="563" alt="image" src="https://github.com/user-attachments/assets/5a25f3c3-cff7-4389-af05-0a4a0a26ce9d" />


## 기획 의도 💡
- 'Point of View'는 '관점'이라는 뜻을 담고 있는데, 이는 저희 서비스가 사용자들의 다양한 관점을 공유하는 플랫폼임을 나타냄과 동시에 저희 팀이 이 프로젝트를 진행하며 어떤 관점에서 접근했는지를 의미하기도 합니다.

## 서비스 목표 🎯
- 사용자의 선호 장르에 따른 **영화를 추천**해주고, **영화 리뷰를 작성**할 수 있는 기능을 제공 
- 선호 장르가 비슷한 사용자 간의 모임인 **클럽**을 만들고, **가입하거나 초대**할 수 있는 기능을 제공


<br/>

## 👥 Team Members (팀원 및 팀 소개)
| 김다연 | 신혜민 | 박주광 |
|:------:|:------:|:------:|
| FE | FE | FE |
| ✨ 무한 스크롤 구현<br> ✨ 에러바운더리 핸들링<br> ✨ 서스펜스 적용<br> ✨ 영화 리뷰 기능 구현<br> ✨ 클럽 관련 기능 구현<br> 시사회 응모 결제 구현<br> 영화, 리뷰 좋아요 기능 구현<br>영화 데이터 추가 작업 및 페이지 구현| ✨ 소셜 로그인 구현<br>✨ 회원가입 기능 구현<br>✨ FCM 알림기능 구현<br> 마이페이지 구현<br> 전체 UI 디자인<br>아톰 단위 컴포넌트 구현 | ✨ 어드민 전체 페이지 개발<br>TMDB 영화 등록 구현<br>리뷰 숨김처리 구현<br>개발 환경 세팅<br>반응형 레이아웃 구현<br>영화 페이지 구현 |

### 팀프로젝트 노션 & 피그마 & 스토리북
- [Notion Link](https://www.notion.so/shinhm1/13ce7e8fdd12808998d7dc98583a28e4?pvs=4)
- [Figma Link](https://www.figma.com/design/LPgTWB5ycZKHceP9pQDOmo/UI?node-id=1-2&p=f&t=NhkTp0IcCRKWKkwa-0)
- [Storybook](https://673c240da97b5391fe1cbe2f-ryyeqhtkia.chromatic.com/?path=/docs/design-system-avatar--docs)

<br/>

## 🪐 주요 기능 및 서비스 구조도
<img width="1210" alt="image" src="https://github.com/user-attachments/assets/3e06ec70-90bb-4beb-b672-b00e93bff40f">
<img width="1208" alt="image" src="https://github.com/user-attachments/assets/61fc44ac-2187-4c7f-80fe-a7cc8f2cf3f7">


<br/>

## 💫 서비스 화면 및 기능소개
### 1. 로그인/로그아웃 화면
<img width="1123" alt="image" src="https://github.com/user-attachments/assets/221944d8-796b-4090-9856-3a07edd166ce">

### 2. 반려견 등록 페이지
<img width="1126" alt="image" src="https://github.com/user-attachments/assets/5769d6f9-d9df-40dc-9d15-2243dbfe60b7">


### 3. 쇼핑 페이지
<img width="1125" alt="image" src="https://github.com/user-attachments/assets/4aaf7c31-854d-41a2-9141-bf77e3370d0b">
<img width="1120" alt="image" src="https://github.com/user-attachments/assets/b24cb3a8-376e-434c-abe7-e8100213b066">
<img width="1122" alt="image" src="https://github.com/user-attachments/assets/888515da-8bca-466e-b43d-b2a0555245ed">

### 4. 결제 페이지
<img width="1120" alt="image" src="https://github.com/user-attachments/assets/f9195dd1-6315-4853-a264-8cb44e0e3983">
<img width="1117" alt="image" src="https://github.com/user-attachments/assets/106f51db-33ba-4f2c-a783-897146c6f8c6">

### 5. 펫스티벌 조회 페이지
<img width="1121" alt="image" src="https://github.com/user-attachments/assets/73633f6c-ba69-4421-9637-e331afd11d2f">

### 6. 펫스티벌 참여 인증 페이지
<img width="1125" alt="image" src="https://github.com/user-attachments/assets/c52c1eb8-79fa-49f6-a0ed-9dc55917dae2">

<br/>

## 🛠️ 기술 스택 및 아키텍쳐 구조도
<img width="1014" alt="image" src="https://github.com/user-attachments/assets/fb28246f-0e9c-46fb-b8cc-d6e4cfca77d7">
<img width="638" alt="image" src="https://github.com/user-attachments/assets/96250dd5-4507-4394-9806-54aaed089235">


<br/>

## 🧩 DB 설계 및 FE 프로젝트 구조
<img width="983" alt="image" src="https://github.com/user-attachments/assets/54f13f24-f043-49ac-8f64-6bffd6b95134">

```plaintext
project/
├── supabase/                # Supabase Edge Function 모음
│   ├── functions/  
│   ├──├── _shared/ 
│   ├──├── payment-cancel/
│   ├──├── payment/
├── src/
│   ├── assets/              # 이미지, 폰트 등 정적 파일
│   ├── components/          # UI 컴포넌트 모음
│   ├── stories/             # 디자인 재사용이 가능한 UI 컴포넌트 및 storybook 배포 파일 모음
│   ├── hooks/               # 커스텀 훅 모음
│   ├── service/             # Supabase Client 및 DB 관련 파일 모음
│   ├── pages/               # 각 페이지 컴포넌트 모음
│   ├── App.js               
│   ├── index.js             
│   package-lock.json    
│   package.json         
├── .gitignore               
└── README.md                
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

<br/>

### 😍 프로젝트 회고
<img width="1142" alt="image" src="https://github.com/user-attachments/assets/70557f09-28a7-47fa-9684-2bf1814b6f43">
