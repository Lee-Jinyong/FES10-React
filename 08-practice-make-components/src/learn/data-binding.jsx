import { randomNumber } from '../utils';

function DataBinding({ statusMessages }) {
  // <div> 남용
  // 요소를 선택하는 최후의 수단(기준)
  // 1. HTML에는 이미 의미적인 요소가 준비되어 있음
  // 2. 의미에 맞는 요소가 존재하지 않을 때 비로소 <div> 사용 권장

  // data(props)
  // random logic을 작성해서 임의의 상태 메시지가 표시되도록 하기
  // JavaScript 프로그래밍
  // Math.random() / Math.floor() / Math.round()

  const statusMessage =
    statusMessages[randomNumber(0, statusMessages.length - 1)];

  // JSX (generate markup)
  return (
    <>
      <dt>데이터 바인딩(data binding)</dt>
      <dd>
        <p>상태 메시지(status message)를 연결해 화면에 출력합니다.</p>
        <span className="status">
          {/* statusMessage 값을 화면에 표시합니다. (랜덤 표시도 도전!) */}
          {statusMessage}
        </span>
      </dd>
    </>
  );
}

// JSX runtime (classic): React.createElement(type(only one), props, children)
// JSX runtime (automatic): jsx(type(only one), props)

export default DataBinding;
