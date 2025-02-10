var x=100; //global
function VarDemo(){
    console.log("x ben trong ham:",x);
}
console.log("x ben ngoai ham",x);

// thuc thi ham
VarDemo();

// local
function fn_demo(){
    var y=200; //local
    console.log("y ben trong ham",y);
}
fn_demo();
// y ben ngoai ham
console.log("y ben ngoai ham",y); // ==error: ReferenceError: y is not defined
fn_demo();
