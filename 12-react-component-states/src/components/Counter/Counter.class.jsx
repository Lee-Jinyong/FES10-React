// ------------------------------------------------------------------------------
// ✅ Counter 컴포넌트
// ------------------------------------------------------------------------------
// - [x] `count` 속성(prop, 기본 값: 1)을 전달받아 화면에 표시
// - [x] `step` 속성(기본 값: 1)을 전달받아 버튼 레이블에 표시
// - [x] `min` 속성(기본 값: 1) 보다 `count` 값이 크거나 같아야 함
// - [x] `max` 속성(기본 값: 1000) 보다 `count` 값이 작거나 같아야 함
// - [x] 사용자가 감소 버튼을 클릭하면 `count` 감소 (step 만큼)
// - [x] 사용자가 증가 버튼을 클릭하면 `count` 증가 (step 만큼)
// - [x] 사용자가 감소 버튼을 클릭했을 때 `count` 값이 `min` 보다 작거나 같을 경우 감소 버튼 비활성화
// - [x] 사용자가 증가 버튼을 클릭했을 때 `count` 값이 `max` 보다 크거나 같을 경우 증가 버튼 비활성화
// ------------------------------------------------------------------------------

import { Component } from 'react';

class Counter extends Component {
  render() {
    return <></>;
  }
}

// React 개발 도구(devTools)에 표시되는 이름 설정
// 참고: https://ko.legacy.reactjs.org/docs/react-component.html#displayname
Counter.displayName = 'CounterClass';

export default Counter;
