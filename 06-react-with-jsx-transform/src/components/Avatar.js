import { createElement as h } from "https://esm.sh/react";

/* 
<figure aria-label="이름 (온라인)">
  <img src="face.jpg" alt="이름" />
  <figcaption>
    <img />
  </figcaption>
</figure>
*/

/* props: {
  name: '사용자 이름',
  photo: '이미지 파일 이름',
  status?: 'online' | 'offline' | 'dont-disturb' | 'away'
  size?: 숫자 값
} */

function Avatar({ name, photo, status = "offline", size = 64 }) {
  // 지역 변수
  let iconPath = "";
  let statusMessage = "";

  // 4가지 조건 분기
  // switch 문
  switch (status) {
    default:
    case "offline":
      iconPath = "/icons/status-offline.svg";
      statusMessage = "오프라인";
      break;
    case "online":
      iconPath = "/icons/status-online.svg";
      statusMessage = "온라인";
      break;
    case "dont-disturb":
      iconPath = "/icons/status-dont-disturb.svg";
      statusMessage = "방해금지";
      break;
    case "away":
      iconPath = "/icons/status-away.svg";
      statusMessage = "자리비움";
      break;
  }

  const label = `${name} (${statusMessage})`;

  return h(
    "figure",
    {
      className: "Avatar",
      "aria-label": label,
      title: label,
    },
    h("img", {
      src: `/faces/${photo}`,
      alt: name,
      width: size,
      height: size,
    }),
    h(
      "figcaption",
      null,
      h("img", {
        src: iconPath,
        alt: "",
      })
    )
  );
}

export default Avatar;
