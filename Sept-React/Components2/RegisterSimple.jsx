import React, {useRef} from "react"; 
import components from "./ganesha.jpg";

let RegisterSimple = () => {
    // useRef default null
    let imageEl = useRef(null);
    console.log(imageEl);
    console.log(imageEl.current);
    let clickButton = () => {
        console.log(imageEl.current);
        // current means - complete Element
    }
    return <>
    <img ref={imageEl} src={components} alt="image Ref Test" width="50" />
    <button className="btn btn-dark btn-sm" onClick={clickButton}>Click</button>
    </>
}

export default RegisterSimple;