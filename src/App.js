import { useEffect, useState } from 'react';
import Selecto from "react-selecto";
import "./style.css";

function App() {
  const list = [];

  for (let i = 0; i < 60; ++i) {
    list.push(i);
  }
  const [val, setVal] = useState([]);

  useEffect(() => {
    console.log(val)
  },[val])

  return (
    <>
      <Selecto
          dragContainer={".container"}
          selectableTargets={[".list"]}
          hitRate={100}
          selectByClick={true}
          selectFromInside={true}
          ratio={0}
          onSelect={e => {
              e.added.forEach(el => {
                  el.classList.add("selected");
                  setVal(prev => [...prev, el.getAttribute("k")])
              });
              e.removed.forEach(el => {
                  el.classList.remove("selected");
                  setVal([])
              });
          }}
        ></Selecto>

      <div className="container">
          {list.map(i => <div className="list" key={i} k={i}>{i}</div>)}
      </div>
    </>
  );
}

export default App;