import React, { useEffect, useLayoutEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

interface objT {
  testdata: string;
  testdata1: string;
}
type props = {
  setData: React.Dispatch<React.SetStateAction<objT>>;
};

const Header = ({ setData }: props) => {
  const setD = () => {
    setData({ testdata: "메인 이동", testdata1: "메인!" });
  };

  return (
    <>
      <div>
        <h1>헤더</h1>
        <a href="/" onClick={setD}>
          {" "}
          이거 누르면 메인감
        </a>
        <br />
        <a href="/1">이거 누르면 페이지 1로감</a>
        <br />
        <a href="/2">이거 누르면 페이지 2로감</a>
      </div>
    </>
  );
};

export default Header;
