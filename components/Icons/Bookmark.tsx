import React from "react";
import { MdBookmark, MdBookmarkBorder } from "react-icons/md";

function Bookmark({ active }: any) {
  return (
    <>{active ? <MdBookmark size={32} /> : <MdBookmarkBorder size={32} />}</>
  );
}

export default Bookmark;
