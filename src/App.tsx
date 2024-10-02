import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Main from "./pages/main";
import Main2 from "./pages/main2";
import Header from "./components/header";
import Modal from "./components/modal";
import { Routes, Route, Link } from "react-router-dom";
interface objT {
  testdata: string;
  testdata1: string;
}

const init = {
  testdata: "",
  testdata1: "",
};

function App() {
  const [test, setTest] = useState<objT>(init);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const open = () => {
    setOpenModal(true);
  };
  return (
    <div className="App">
      <Header setData={setTest} />
      <Routes>
        <Route path="/" element={<div>{JSON.stringify(test)}</div>} />
        <Route path="/1" element={<Main Data={test} />} />
        <Route path="/2" element={<Main2 Data={test} setData={setTest} />} />
      </Routes>
      <button onClick={open}>모달 오픈</button>
      <br />
      <Modal openModal={openModal} setCloseModal={setOpenModal} />
    </div>
  );
}

export default App;
