import { styled, css } from "styled-components";

const Row = styled.div.withConfig({
  shouldForwardProp: (prop) => !["type"].includes(prop),
})`
  display: flex;
  ${(p) => p.type || "vertical"}
  ${(p) =>
    p.type === "horizontal"
      ? css`
          justify-content: space-between;
          align-items: center;
        `
      : css`
          flex-direction: column;
          align-items: center;
        `}
`;

export default Row;
