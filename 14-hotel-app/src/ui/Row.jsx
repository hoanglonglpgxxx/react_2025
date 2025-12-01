import { styled, css } from "styled-components";

const Row = styled.div.withConfig({
  shouldForwardProp: (prop) => !["type"].includes(prop),
})`
  display: flex;
  ${(p) =>
    p.type === "horizontal"
      ? css`
          align-items: center;
          justify-content: space-between;
        `
      : css`
          flex-direction: column;
          align-items: center;
        `}
`;

export default Row;
