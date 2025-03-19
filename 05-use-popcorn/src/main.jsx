import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import TextExpender from "./TextExpender.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <TextExpender>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aspernatur illum in
      officiis, inventore repellat, fugit autem vel voluptatem fugiat ex minus iste
      quibusdam id quia nobis fuga accusantium? Blanditiis?
    </TextExpender>

    <TextExpender
      isExpanded={true}
      expandButtonText="Show text"
      collapseButtonText="Hide text"
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aspernatur illum in
      officiis, inventore repellat, fugit autem vel voluptatem fugiat ex minus iste
      quibusdam id quia nobis fuga accusantium? Blanditiis?
    </TextExpender> */}
  </StrictMode>
);
