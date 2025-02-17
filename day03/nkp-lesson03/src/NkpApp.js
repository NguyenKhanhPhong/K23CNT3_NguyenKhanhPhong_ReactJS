import NkpClassComp from "./components/NkpClassComp";
import NkpFuncComp from "./components/NkpFuncComp";
import NkpJsxExpression from "./components/NkpJsxExpression";

function NkpApp() {
  return (
    <div className="container border mt-3 bg-white">
      <h1>React JS Lesson03 - Nguyễn Khánh Phong</h1>
      
      <NkpJsxExpression />
      <hr/>
      {/* Sử dụng Function components */}
      <NkpFuncComp/>

      {/* sử dụng class components */}
      <NkpClassComp></NkpClassComp>
    </div>
  );
}

export default NkpApp;
