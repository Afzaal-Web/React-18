import { useState } from "react";

interface Props {
  children: string;
  maxChar: number;
}

function ExpandableText({ children, maxChar }: Props) {
  const [isExpanded, setExpended] = useState(false);

  if (children.length <= maxChar) return <p>{children}</p>;

  const text = isExpanded ? children : children.substring(0, maxChar);

  return (
    <p>
      {text}...{" "}
      <button onClick={() => setExpended(!isExpanded)}>
        {isExpanded ? "less" : "More"}
      </button>
    </p>
  );
}

export default ExpandableText;
