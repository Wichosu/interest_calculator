import React, { useState, useCallback} from 'react';

const CallbackRef = () => {

  const [height, setHeight] = useState();
  // const [value, setValue] = useState();
  const [rect, ref] = useClientRect();

  const measuredRef = useCallback(node => {
    if (node !== null) {
      setHeight(node.getBoundingClientRect().height);
    }
  }, []);

  // const inputValue = useCallback( node => {
  //   if (node !== null) {
  //     setValue(node.getBoundingClientRect().value);
  //   }
  // }, [value]);

  return (
    <div>
      <h1 ref={ref} style={{fontSize: '10vw'}}>Hello, world</h1>
      { rect !== null &&
        <h2>The above header is {Math.round(rect.height)} px tall</h2>
      }
      {/* <input ref={inputValue} /> */}
      {/* <h2>Current input value: {value}</h2> */}
    </div>
  );

  function useClientRect() {
    const [rect, setRect] = useState(null);
    const ref = useCallback( node => {
      if (node !== null) {
        setRect(node.getBoundingClientRect());
      }
    }, []);
    return [rect, ref];
  }
}

export default CallbackRef;
