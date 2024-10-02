import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import React, { useEffect, useLayoutEffect, useState } from "react";

interface Car {
  make: string;
  model: string;
  price: number;
}

interface Sonata extends Car {
  color: string;
  char: boolean;
}

type MoadlType = {
  modal: boolean;
};

const init = {
  make: "",
  model: "",
  price: 0,
  color: "",
  char: false,
};

interface objT {
  testdata: string;
  testdata1: string;
}

type props = {
  Data: objT;
};

// type props = {
//     Data: string[];
//   };

// 인터페이스는 파람 ex)여러개

//  test 가 빈값이여야됨
//  실행됬을때는 빈값
//  버튼 누르고 test 변경됫을때만 useEffect 쓰고싶음

// const data =ref({...})

//  const click = () =>{data.value = {...}}

//  watch((data.vlaue)=>{console.log('변환됨') })

// 최초실행시 서버랑 통신한후에 값을 들고와서  A 라는 데이터 안에  A.Password 가 b 면  -> CancelWork()
//

//  useEffect(()=>{if(A.Password ==='b'){CancelWork()} },[A.Password])

// 뷰 watch는 초기값을 설정해두면 watch X
// 리엑트는 초기값 설정해도 useEffect 를 하네?

// type 단발성 ex) 모달 온오프 강제성 가능
// 유즈 이펙트 = watch vue
const Main = ({ Data }: props) => {
  const [test, setTest] = useState<Sonata>(init);

  const clickTest = () => {
    test.char
      ? setTest({ ...init, char: false })
      : setTest({ ...test, make: "하우진", char: true });
  };

  //   watch
  useEffect(() => {
    console.log("하우진 짱짱맨");
  }, [test]);

  //  최초 실행될때  vue  mounted 개념 => 렌더 됬을때 쓰는거
  useEffect(() => {
    console.log("하우진 실행됨");
  }, []);

  //   useLayoutEffect = 완전 렌더 됬을때 쓰는거
  //   useLayoutEffect(() => {
  //     console.log("하우진 뒤늦게실행됨");
  //   }, []);
  //   const columnDefs: ColDef[] = [
  //     { headerName: "Make", field: "make" },
  //     { headerName: "Model", field: "model" },
  //     { headerName: "Price", field: "price" },
  //   ];

  //   const rowData: Car[] = [
  //     { make: "Toyota", model: "Celica", price: 35000 },
  //     { make: "Ford", model: "Mondeo", price: 32000 },
  //     { make: "Porsche", model: "Boxster", price: 72000 },
  //   ];

  //   const DrowData: Sonata[] = [
  //     { make: "Toyota", model: "Celica", price: 35000, color: "red" },
  //   ];

  return (
    <>
      <p>여기는 페이지1</p>
      <button onClick={clickTest}>누르면 변경함</button>
      <div>{JSON.stringify(test)}</div>
      <div>{JSON.stringify(Data)}</div>
    </>

    // <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
    //   <AgGridReact rowData={rowData} columnDefs={columnDefs} />
    // </div>
  );
};

export default Main;
