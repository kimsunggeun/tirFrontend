import React, { useEffect, useLayoutEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

interface objT {
  testdata: string;
  testdata1: string;
}
type props = {
  openModal: boolean;
  setCloseModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const Modal = ({ openModal, setCloseModal }: props) => {
  const CloseModal = () => {
    setCloseModal(false);
  };
  return (
    <>
      {openModal && (
        <>
          모달오픈
          <br />
          <button onClick={CloseModal}>닫기</button>{" "}
        </>
      )}{" "}
    </>
  );
};

export default Modal;
