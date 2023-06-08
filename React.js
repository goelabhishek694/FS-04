
//------->how to transfer data from child to parent<---------

import { useEffect } from "react";

// import { useState } from "react";
// import ChildComp from "./ChildComp";
function ParentComp(prop) {
  let [counter, setCounter] = useState(0);
    let callback = (value) => setCounter(value);
    useEffect(() => {
        setCounter(10)
        console.log(value);
    })
  return (
    <div>
      <p>Value of Counter : {counter}</p>
      <ChildComp callbackFn={callback} counterValue={counter} />
    </div>
  );
}

export default ParentComp;

function ChildComp(props) {
  let childCounterValue = props.counterValue;
  return (
    <div>
      <button onClick={() => props.callbackFn(++childCounterValue)}>
        Increment
      </button>
    </div>
  );
}

// export default ChildComp;




