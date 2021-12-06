import React, { useState } from "react";
import { Range, getTrackBackground } from "react-range";

const Test = () => {
    const STEP = 1;
    const MIN = 0;
    const MAX = 100;
    const [values, setValues] = useState([25, 75]);
  
    return (
     <div>
          <Range
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        onChange={values => {
          console.log(values);
          setValues(values);
        }}
        renderTrack={({ props, children }) => (
          // eslint-disable-next-line jsx-a11y/no-static-element-interactions
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: "15px",
              display: "flex",
              width: "100%"
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: "5px",
                width: "100%",
                borderRadius: "4px",
                background: getTrackBackground({
                  values,
                  colors: ["#ccc", "#548BF4", "#ccc"],
                  min: MIN,
                  max: MAX
                }),
                alignSelf: "center"
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "20px",
              width: "20px",
              borderRadius: "100%",
              backgroundColor: "#FFF",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0px 2px 6px #AAA"
            }}
          >
            <div
              style={{
                height: "16px",
                width: "5px",
                backgroundColor: isDragged ? "#548BF4" : "#CCC"
              }}
            />
          </div>
        )}
     
      />
      <h1>{values[0]}-{values[1]}</h1>
     </div>
    
    );
  };

  export default Test
