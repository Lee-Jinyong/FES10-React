import { func } from 'prop-types';

SearchBox.propTypes = {
  onSearch: func,
};

/**@type {({ onSearch}: { onSearch: (searchText: string) => void}) => JSX.Element} */
function SearchBox({ onSearch }) {
  // React 훅 함수를 선행 학습한 수강생은 아래 명령형 코드 대신,
  // React의 선언형 방식으로 컴포넌트 코드를 작성 후 테스트 할 수 있습니다.
  const handleSearch = (e) => {
    e.stopPropagation();

    const { type, key, target } = e;
    const inputedValue = target.value.trim();

    if (!inputedValue) {
      console.warn('검색어가 입력되지 않았습니다.');
      return;
    }

    if (type === 'change' || (type === 'keydown' && key === 'Enter')) {
      onSearch?.(inputedValue);
    }
  };

  return (
    <div className="SearchBox">
      <label htmlFor="">검색</label>
      <input
        type="search"
        placeholder="검색어 입력"
        onChange={handleSearch}
        onKeyDown={handleSearch}
      />
    </div>
  );
}

export default SearchBox;
