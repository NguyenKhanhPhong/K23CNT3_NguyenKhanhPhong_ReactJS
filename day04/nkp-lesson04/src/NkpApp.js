import NkpClassComp from "./components/NkpClassComp";
import NkpFuncComp from "./components/NkpFuncComp";
import NkpJsxExpression from "./components/NkpJsxExpression";

function NkpApp(){
  return (
    <div className="container border">
      <h1>Demo component - props - state</h1>
      <hr/>
      <div className='alert alert-danger'>
    <NkpFuncComp name="Phong Nguyễn" address="123 Hà Nội" company="PhongXeDap" />
      </div>
    </div>
  );
}
export default NkpApp;