import { useState } from "react";

export default function TextExpender({
  children,
  collappseNumWords = "40",
  expandButtonText = "Show",
  collapseButtonText = "Hide",
  btnColor = "#ff6622",
  isExpanded = false,
}) {
  const [isShow, setIsShow] = useState(isExpanded);
  const btnStyle = {
    color: { btnColor },
  };
  return (
    <div>
      <p>
        {isShow
          ? children
          : children.split(" ").slice(0, collappseNumWords).join(" ") + "..."}
      </p>
      <button style={btnStyle} onClick={() => setIsShow(!isShow)}>
        {isShow ? collapseButtonText : expandButtonText}
      </button>
    </div>
  );
}
