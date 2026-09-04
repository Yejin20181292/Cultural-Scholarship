# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

신라문화장학재단 소개 웹사이트. Vue 3 (`<script setup>`) + TypeScript + Vite로 만든 **정적 SPA**이며, 백엔드·API·CMS가 없다. 모든 문구와 데이터는 `.vue` 템플릿에 한국어로 직접 작성되어 있다.

## 명령어

```bash
npm run dev      # 개발 서버
npm run build    # 프로덕션 빌드 → dist/
npm run preview  # 빌드 결과 로컬 확인
```

- **테스트·린터·포매터가 설정되어 있지 않다.** 테스트 러너도 없으므로 "테스트를 돌려보라"는 요청이 오면 이 사실을 먼저 알려야 한다.
- `npm run build`는 `vite build`만 실행하며 **타입 체크를 하지 않는다.** `vue-tsc`가 devDependency에 있지만 어떤 스크립트에도 연결되어 있지 않다. 타입 검증이 필요하면 직접 실행한다:
  ```bash
  npx vue-tsc --noEmit -p tsconfig.app.json
  ```

## 아키텍처

### 라우팅 — vue-router 없이 직접 구현

`vue-router`를 쓰지 않는다. [src/App.vue](src/App.vue)가 `window.location.hash`를 읽어 화면을 전환한다.

- `ViewType` 유니언 타입(`'home' | 'about-sub' | ...`)이 화면 목록을 정의한다.
- 해시 규칙은 **두 단계**다: `#<view>/<tab>` (예: `#scholarship-sub/programs`).
- `App.vue`는 첫 번째 조각으로 어떤 Subpage 컴포넌트를 띄울지 정하고, **각 Subpage 컴포넌트가 두 번째 조각을 스스로 파싱해** 탭을 고른다.
- 홈으로 갈 때는 `history.pushState`로 해시를 지운다.

**화면이나 탭을 추가할 때**는 세 곳을 함께 고쳐야 한다: `App.vue`의 `ViewType`, `getViewFromHash()`, `navigateTo()`의 분기.

### Subpage 탭 패턴 — 컴포넌트마다 중복 구현

`*Subpage.vue` 5개는 각자 동일한 코드를 복제해 갖고 있다 (`ScholarshipSubpage.vue` 참고):

- `tabs` 배열 (`{ id, name }`)
- `getTabFromHash()` — 자기 view 접두사를 하드코딩해서 확인
- `activeTab` ref + `setActiveTab()` — 해시를 직접 쓴다
- `onMounted`에서 `hashchange` 리스너 등록, `onUnmounted`에서 해제

공용 컴포저블로 추출되어 있지 **않다.** 탭을 추가할 때는 해당 컴포넌트 안에서만 작업하고, 기존 컴포넌트의 패턴을 그대로 따른다.

### 인증 — localStorage 목업

[src/composables/useAuth.ts](src/composables/useAuth.ts)에 서버 없는 가짜 인증이 있다.

- `ref`들이 **`useAuth()` 함수 바깥, 모듈 최상위에 선언**되어 있어 전역 싱글턴처럼 동작한다. 어느 컴포넌트에서 `useAuth()`를 불러도 같은 상태를 공유한다.
- `login`/`signup`은 검증 없이 전달받은 `User` 객체를 그대로 `localStorage`에 저장한다 (`cultural_scholarship_user` 키).
- `AuthModal`과 `MyPageModal`은 `App.vue`에 항상 렌더링되어 있고, 열림 여부는 이 컴포저블의 플래그가 결정한다.

### 스타일링

- [src/style.css](src/style.css)에 디자인 토큰(`:root` CSS 변수)과 소수의 전역 유틸리티 클래스가 있다: `.container`, `.glass-card`, `.title-serif`, `.btn`/`.btn-primary`/`.btn-outline`, `.reveal`, `.section-*`, `.floating`.
- 그 외 모든 스타일은 컴포넌트의 `<style scoped>` 안에 있다 (13개 컴포넌트 전부 scoped, `App.vue`만 전역 `<style>`).
- 색상·폰트·간격을 바꿀 때는 개별 컴포넌트가 아니라 `style.css`의 CSS 변수를 먼저 확인한다. 브랜드 색은 `--primary-color: #065B89`.
- 제목용 서체는 Cinzel(`--font-title`), 본문은 Noto Sans KR. 둘 다 Google Fonts에서 `@import`로 불러온다.

### 스크롤 등장 애니메이션

`.reveal` 클래스 + `IntersectionObserver`로 구현되어 있으며, 홈 화면 섹션 3개(`AboutSection`, `NoticeSection`, `ScholarshipPrograms`)가 **각자 옵저버를 따로 만든다.** 요소가 뷰포트에 들어오면 `.active`가 붙는다.

## 작업 시 주의점

- **문구 수정이 이 저장소의 주된 작업이다.** 데이터 파일이나 API가 없으므로 텍스트는 해당 `.vue`의 `<template>` 안에서 직접 찾아 고친다. 컴포넌트가 최대 1,500줄까지 커서, 파일 전체를 읽기보다 문구로 grep하는 편이 빠르다.
- 모달을 열고 닫을 때 `document.body.style.overflow`를 직접 조작한다. 새 모달을 만들면 `onUnmounted`에서 반드시 원복해야 스크롤이 잠기지 않는다.
- 이미지는 `src/assets/`에서 ES import로 가져온다(`import historyPhoto1 from '../assets/history_photo1.jpg'`). `public/`에는 favicon과 아이콘 스프라이트만 있다.
- `README.md`는 Vite 기본 템플릿 내용 그대로이며 이 프로젝트에 대한 정보가 없다.

## 결정 사항

### 에이전트 플러그인 — 사용하지 않기로 함 (2026-09-04)

아래 세 플러그인을 마켓플레이스에 등록해 검토한 뒤, **전부 비활성화하기로 결정했다.** 다시 권하지 말 것.

| 플러그인 | 미사용 사유 |
| --- | --- |
| `superpowers` (obra) | 설계 승인 → 계획 → 서브에이전트 실행 절차를 강제한다. 이 저장소의 주 작업인 문구 수정에 비해 절차가 과하다. 내용 자체는 탄탄하므로, 기능을 처음부터 만드는 별도 프로젝트에서는 재검토할 만하다. |
| `caveman` (JuliusBrussee) | 출력을 극단적으로 압축한다. 사용자가 판단 근거 설명을 요구하는 대화 패턴이라 오히려 되묻는 횟수가 늘어난다. |
| `ponytail` (DietrichGebert) | "코드를 최소한으로" 지침인데 문구 수정 작업에는 개입 여지가 없고, hooks 실행 지연만 생긴다. |

셋을 동시에 켜면 caveman("짧게 쓰라")과 superpowers("설계 문서를 내라")가 정면으로 충돌한다.

현재 상태: `~/.claude/settings.json`에 `extraKnownMarketplaces` 등록만 남아 있고 `enabledPlugins` 키는 없다(= 전부 꺼짐). 저장소 클론은 `~/.claude/plugins/marketplaces/` 아래에 남아 있어 재다운로드 없이 다시 켤 수 있다.

`caveman`의 프록시(`npm install -g @caveman-ai/cli`)는 **설치한 적이 없다.** API 트래픽이 제3자를 거치는 경로는 없다.
