// --------------------------------------------------------------------------
// ✅ Figma → SVG 패스 애니메이션
// --------------------------------------------------------------------------
// - [x] Figma를 사용해 SVG 패스 애니메이션을 적용할 아이콘 또는 다이어그램을 그립니다.
// - [x] 드로잉 시, 고려할 점
//   - [x] Stroke 속성으로 그립니다.
// - [x] 애니메이션을 적용하기 위해 고려할 점
//   - [x] strokeDasharray
//   - [x] strokeDashoffset
//   - [x] visibility
//   - [x] pathLength
// --------------------------------------------------------------------------
import { string } from 'prop-types';
import S from './PracticeSVGPathAnimation.module.css';

PracticeSVGPathAnimation.propTypes = {
  color: string,
};

function PracticeSVGPathAnimation({ color = '#4729B4 ' }) {
  return (
    <div className={S.component}>
      <svg width={210} height={41} viewBox="0 0 210 41" fill="none">
        <circle
          cx="20.5"
          cy="20.5"
          r="17.5"
          stroke={color}
          strokeDasharray={1}
          strokeDashoffset={0}
          strokeWidth={6}
          pathLength={1}
        />
        <line
          x1={35}
          y1={20}
          x2={173}
          y2={20}
          stroke={color}
          strokeDasharray={1}
          strokeDashoffset={0}
          strokeWidth={6}
          pathLength={1}
        />
        <circle
          cx="189.5"
          cy="20.5"
          r="17.5"
          stroke={color}
          strokeDasharray={1}
          strokeDashoffset={0}
          strokeWidth={6}
          pathLength={1}
        />
      </svg>
    </div>
  );
}

export default PracticeSVGPathAnimation;
