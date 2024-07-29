import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AvatarListPage from "./pages/AvatarList";

const container = document.getElementById("react-app");

if (container) {
  createRoot(container).render(
    // React.createElement(React.StrictMode, null, React.createElement(AvatarListPage))

    // JSX
    // React 고급 패턴 (Advanced Pattern)
    // React 내장 컴포넌트
    // Compound Component Pattern
    // Namespace.Module
    // <React.StrictMode>
    //   <AvatarListPage />
    // </React.StrictMode>

    // 구조 분해 할당 + JSX
    <StrictMode>
      <AvatarListPage />
    </StrictMode>
  );
} else {
  console.warn('문서에 "#app" 요소가 존재하지 않습니다.');
}
