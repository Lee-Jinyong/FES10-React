// --------------------------------------------------------------------------
// ✅ 틱택토 게임 만들기 (Squares 컴포넌트)
// --------------------------------------------------------------------------
// - [ ] squares 배열 데이터를 게임의 상수로 설정합니다.
// - [ ] squares 배열 데이터의 초기 상태 값은 9개의 `null`로 구성합니다.
// - [ ] squares 배열 데이터 모듈을 불러온 후, 순환해 Sqaure 컴포넌트를 리스트 렌더링 합니다.
// --------------------------------------------------------------------------

import { useState } from 'react';
import { PLAYER, PLAYER_COUNT, INITIAL_SQUARES } from '@/tic-tac-toe/constants';
import Square from '../Square/Square';
import S from './Squares.module.css';

function Squares() {
  // [게임 상태] --------------------------------------------------------------

  const [squares, setSquares] = useState(INITIAL_SQUARES);

  // [게임 상태 업데이트 기능] ----------------------------------------------------

  const handlePlay = (index) => () => {
    console.log(`play game #${index}`);
  };

  // [게임 파생된 상태] ----------------------------------------------------------

  // 게임 순서
  const gameIndex = squares.filter(Boolean).length % PLAYER_COUNT;

  // 현재 게임 플레이어
  const currentPlayer = gameIndex === 0 ? PLAYER.ONE : PLAYER.TWO;

  return (
    <div className={S.component}>
      {squares.map((square, index) => {
        return (
          <Square key={index} onPlay={handlePlay(index)}>
            {square}
          </Square>
        );
      })}
    </div>
  );
}

export default Squares;
