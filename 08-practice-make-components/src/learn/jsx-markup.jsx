import DataBinding from './data-binding';
import ConditionalRendering from './conditional-rendering';
import ConditionalDisplay from './conditional-display';
import RenderLists from './render-lists';
import * as learnData from '../data/learn';

function JSX_Markup() {
  // jsx(React.Fragment, { children: jsx('dl', { ... }) }) => dl이 이미 하나뿐인 요소이기 때문에 Fragment를 사용할 필교아 없음

  // 부모(상위) 컴포넌트가 자식(하위) 컴포넌트에 데이터를 전달할 수 있을까?
  // 리액트 월드에서는 위에서 아래로 데이터를 전달할 수 있는데 그 데이터를 [ props ]라 부르기로 했다.
  // 이것이 컴포넌트의 속성(Properties, props)이다.

  // learnData 구조 분해 할당
  const { statusMessages } = learnData;

  return (
    <dl className="descriptionList">
      {/* {React.createElement(DataBinding, { statusMessages: statusMessages })} */}
      <DataBinding statusMessages={statusMessages} />
      <ConditionalRendering />
      <ConditionalDisplay />
      <RenderLists />
    </dl>
  );
}

export default JSX_Markup;
