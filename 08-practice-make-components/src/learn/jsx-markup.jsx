import DataBinding from './data-binding';
import ConditionalRendering from './conditional-rendering';
import ConditionalDisplay from './conditional-display';
import RenderLists from './render-lists';

function JSX_Markup() {
  // jsx(React.Fragment, { children: jsx('dl', { ... }) }) => dl이 이미 하나뿐인 요소이기 때문에 Fragment를 사용할 필교아 없음

  return (
    <dl className="descriptionList">
      <DataBinding />
      <ConditionalRendering />
      <ConditionalDisplay />
      <RenderLists />
    </dl>
  );
}

export default JSX_Markup;
