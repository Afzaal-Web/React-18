import { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

function Like() {
  const [select, SetSelect] = useState(true);

  if (select) return <FaRegHeart size="40" onClick={() => SetSelect(false)} />;
  return <FaHeart size="40" color="red" onClick={() => SetSelect(true)} />;
}

export default Like;
