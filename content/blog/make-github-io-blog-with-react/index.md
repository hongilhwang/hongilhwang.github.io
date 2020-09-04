---
title: github/React로 블로그 만들기
date: "2020-08-07T20:00:00.000Z"
description: "github.io도메인으로 블로그를 만들기 위한 글입니다."
---

 자유로운 나의 블로그를 가지고 싶었다. 그렇게 [github pages](https://pages.github.com/)를 자세 하게 알아보기로 했다.
검색을 하면서 정적페이지를 만들어 주는 프레임워크 하나씩 사용을 해보면서, 나에게 가장 익숙한 React.js를 사용하는 `GatsbyJS`를 사용하게 되었다.

## GatsbyJS란 무엇인가?
`React.js` 기반의 정적 페이지 생성 프레임워크라고 이해 하면 될 것 같다.

## 사용 방법
### Github에서 저장소를 하나 만들자. 
Github에서 저장소를 하나 만든다. 가장 중요한것은 `[접속자이름].github.io` 을 프로젝트 이름으로 해야 한다. 반드시 접속자 이름으로 해야 한다.

### 블로그 프로젝트 만드는 방법 
cli 를 이용하여, 보일러플레이트를 설치 할수 있다.
```shell script
npm i -g gatsby-cli
```
이후, 설치된 cli를 이용하여 명령을 실행 한다.
```shell script
gatsby new [프로젝트명] [스타터팩 Github 주소]
```
starter github 주소는 [https://www.gatsbyjs.org/starters?v=2](https://www.gatsbyjs.org/starters?v=2) 에서 마음에 드는 디자인을 선택해서 입력한다.

### 배포 
배포를 하게되면, 내가 빌드한 파일들이 master에 모두 업로드 된다. 그렇게 되면, 내가 작업 하는 파일들과 배포하는 파일들이 뒤죽박죽 된다.
그래서 나의 경우 작업 파일은 develop에 두었으며, master에 머지 하지 않고 배포 명령을 통해서만 master를 갱신 했다.

또, 배포 전에 알아야 할것이, contents 파일을 각 프로젝트에 두고 접속 할것이냐, 아니면 해당 master에 두고 접속 할것이냐를 정해야 된다. 
나는 https://hongilhwang.github.io 를 입력하여 접속 할것이기 때문에 사이트 방식을 선택 했다. 

사이트 방식으로 배포 하기 위해서는 `gh-pages`가 필요하다. 
```shell script
npm i -g gh-pages
```
이후, package.json 파일에 스크립트를 추가한다. 
```json 
  "scripts": {
    "deploy": "gatsby build && gh-pages -d public -b master",
  }
```
이제, 위 명령을 실행하면, 빌드한 나의 블로그가 master 게시 되게 된다. 

위와 같이 작업을 진행한 나의 블로그는 [github](https://github.com/hongilhwang/hongilhwang.github.io)에서 확인 할수 있다.