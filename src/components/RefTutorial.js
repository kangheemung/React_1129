import React, { useRef } from "react";
import RefTutorial from "./components/RefTutorial"; // Ensure the path and filename are correct

function RefTutorial(){
    const inputRef = useRef(null);
    const onClick=() =>{
        inputRef.current.focus();
    };
    return(
        <div>
          <h1>Pedro</h1>
          <input type="text" pleaceholder="Ex..." ref={inputRef}/>
          <button onClick={onClick}>Focus the input</button> {/* Button to trigger focus */}
        </div>
    );
      
);
}
export default RefTutorial;