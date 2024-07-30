import { randomNumber, typeOf } from '../utils';

function DataBinding({ statusMessages }) {
  // <div> 남용
  // 요소를 선택하는 최후의 수단(기준)
  // 1. HTML에는 이미 의미적인 요소가 준비되어 있음
  // 2. 의미에 맞는 요소가 존재하지 않을 때 비로소 <div> 사용 권장

  // 전달된 props의 각 속성 타입 검사
  // if (!Array.isArray(statusMessages)) {
  //   console.warn('statusMessages가 배열이 아니야! 다시 확인해~');
  //   return null;
  // }
  // 리액트에서 이렇게 하는 거 아님!!!

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

// 컴포넌트 속성 타입 검사
// Prop Type Validation

// 리액트가 제공하는 방법
// Component.propTypes

DataBinding.propTypes = {
  statusMessages(props, propName, componentName) {
    // 컴포넌트 속성의 값은?
    const propValue = props[propName];
    // console.log(propValue);

    // 컴포넌트 속성 값의 타입은? (문자값)
    const propType = typeOf(propValue); // 'array'
    console.log(propType);

    // 허용할 데이터 타입 이름은?
    const allowedDataType = 'array';

    // 검사 수행
    if (propType !== allowedDataType) {
      // 오류가 있음
      // 오류 메시지를 출력
      // 메시지는 `[      ] 컴포넌트 [     ] 속성 타입은 "[    ]" 타입이 요구되나, 실제 전달된 타입은 "[    ]"입니다.`
    }

    // 아무런 오류가 없으니 패스
  },
};
