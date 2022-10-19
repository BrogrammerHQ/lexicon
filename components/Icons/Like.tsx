import React from "react";
import { MdThumbUpOffAlt, MdThumbUp } from "react-icons/md";

function Like({ active }: any) {
  return (
    <>{active ? <MdThumbUp size={32} /> : <MdThumbUpOffAlt size={32} />}</>
  );
}

export default Like;
