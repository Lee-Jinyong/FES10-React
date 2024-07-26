// TODO: 컴포넌트 정의(with 속성) & 추출
// <li> 리액트 엘리먼트를 생성하는 클래스 컴포넌트를 작성

import React from "https://esm.sh/react";

class ArchitectureList extends React.Component {
  render() {
    // props 객체
    const { lang, children } = this.props;

    return React.createElement(
      "ul",
      { className: "architectures", lang },
      children
    );
  }
}

export default ArchitectureList;
