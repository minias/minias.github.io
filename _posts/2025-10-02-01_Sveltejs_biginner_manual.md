---
layout: post
title: Svelte biginner manual
tags: [front-end,svelte,js,ts,vite]
---

## 📘 Svelte 초보자 학습 매뉴얼

### 1.1 SvelteKit 설치

``` bash
# 최신 SvelteKit 프로젝트 생성
npm create svelte@latest my-app
cd my-app
npm install
npm run dev
```

👉 **SvelteKit**은 Svelte 단독보다 권장.\
라우팅, SSR, API 핸들링까지 지원해서 초보자도 바로 실무 감각을 익힐 수
있음.

------------------------------------------------------------------------

## 2. 기본 문법

### 2.1 데이터 바인딩

``` svelte
<script>
  let name = "흙먹는거아";
</script>

<input bind:value={name} />
<p>안녕하세요, {name}님!</p>
```

### 2.2 조건부 렌더링

``` svelte
<script>
  let loggedIn = true;
</script>

{#if loggedIn}
  <p>로그인 성공!</p>
{:else}
  <p>로그인 필요</p>
{/if}
```

### 2.3 반복 렌더링

``` svelte
<script>
  let items = ["사과", "바나나", "체리"];
</script>

<ul>
  {#each items as item}
    <li>{item}</li>
  {/each}
</ul>
```

------------------------------------------------------------------------

## 3. 상태 관리 (Svelte Store)

### 3.1 Writable Store

``` js
// src/lib/stores/user.js
import { writable } from "svelte/store";

export const user = writable({ name: "Guest", level: 0 });
```

### 3.2 사용하기

``` svelte
<script>
  import { user } from "$lib/stores/user";
</script>

<h1>{$user.name}님 환영합니다</h1>
{#if $user.level >= 2}
  <button>관리자 메뉴</button>
{/if}
```

------------------------------------------------------------------------

## 4. 라우팅 (SvelteKit)

### 4.1 기본 구조

```sh
src/routes/
  ├── +page.svelte        // 메인 페이지
  ├── about/+page.svelte  // /about 페이지
  └── dashboard/+page.svelte
```

### 4.2 Layout 활용

- `src/routes/+layout.svelte` → 모든 페이지 공통 UI (예: 헤더/푸터)\
- `src/routes/dashboard/+layout.svelte` → 특정 하위 라우트 전용 레이아웃

------------------------------------------------------------------------

## 5. API 연동

### 5.1 클라이언트에서 호출

``` svelte
<script>
  let posts = [];

  onMount(async () => {
    const res = await fetch("/api/posts");
    posts = await res.json();
  });
</script>
```

### 5.2 서버 엔드포인트

``` ts
// src/routes/api/posts/+server.ts
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
  return new Response(JSON.stringify([{ id: 1, title: "Hello" }]));
};
```

------------------------------------------------------------------------

## 6. 세션 & 인증

- `hooks.server.ts`를 이용해 요청 시 쿠키/세션 검사 가능\
- 로그인된 사용자 정보를 `event.locals`에 저장\
- UI에서는 `store`와 연동해 권한 기반 조건부 렌더링

예:

``` ts
// src/hooks.server.ts
export async function handle({ event, resolve }) {
  const token = event.cookies.get("auth");
  event.locals.user = token ? { name: "흙먹는거아", level: 2 } : null;
  return resolve(event);
}
```

------------------------------------------------------------------------

## 7. 배포 전략

### 7.1 정적 사이트

``` bash
npm install -D @sveltejs/adapter-static
```

- `svelte.config.js`에서 adapter-static 적용\
- GitHub Pages, Netlify 등에 배포

### 7.2 Node.js 서버

``` bash
npm install -D @sveltejs/adapter-node
```

- PM2로 프로세스 관리

``` bash
pm2 start build/index.js --name my-svelte-app
```

------------------------------------------------------------------------

## 8. 자주 겪는 이슈 & 해결법

- **메인 화면이 안 뜸** → `vite.config.ts` 플러그인 충돌 → 최소화 후
    실행\
- **배포 시 adapter-auto 문제** → 반드시 `adapter-static` 또는
    `adapter-node`로 변경\
- **UI 컴포넌트 부족** → `shadcn-svelte` 같은 검증된 UI Kit 활용

------------------------------------------------------------------------

## 9. 학습 로드맵

1. SvelteKit 프로젝트 생성
1. 기본 문법 (if/each/bind)
1. Store 활용해 전역 상태 관리
1. 라우팅 & Layout 구조 이해
1. API 연동 (서버/클라이언트)
1. 세션/권한 처리
1. 빌드 & 배포
