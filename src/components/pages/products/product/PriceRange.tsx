"use client"
import { getTrackBackground, Range } from "react-range";
// prop type 
type IProps = {
   STEP: number;
   MIN: number;
   MAX: number;
   values: number[];
   handleChanges: (val: number[]) => void
}
const PriceRange = ({ STEP, MIN, MAX, values, handleChanges }: IProps) => {
   return (
      <>
         <Range
            step={STEP}
            min={MIN}
            max={MAX}
            values={values}
            onChange={(vals) => handleChanges(vals)}
            renderTrack={({ props, children }) => (
               <div
                  {...props}
                  key='track'
                  style={{
                     ...props.style,
                     height: '5px',
                     width: '100%',
                     borderRadius: "18px",
                     background: getTrackBackground({
                        values: values,
                        colors: ["#EDEDED", "#f248b4", "#EDEDED"],
                        min: MIN,
                        max: MAX
                     }),
                  }}
               >
                  {children}
               </div>
            )}
            renderThumb={({ props, index }) => (
               <div
                  {...props}
                  key={`thumb-${index}`}
                  className="ui-input"
                  style={{
                     ...props.style,
                     height: '20px',
                     width: '20px',
                     backgroundColor: "#f248b4",
                     outline: "none",
                     borderRadius: "50px",
                     border: "6px solid #ffffff",
                     boxShadow: "0px 8px 25px 0px rgba(0, 0, 0, 0.3)"
                  }}
               />
            )}
         />
      </>
   );
};


export default PriceRange;