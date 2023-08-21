import { forwardRef, useEffect, useRef, useState } from "react";


let counter = 0;

const Fcomponent = (props, ref) => {
    const [name, setName] = useState("");

    
    const handleChangeName = () => {
        setName(ref.current.value);
    }
    return (
        <div className="form-fa-group w-50 m-auto text-center mt-4 p-3">
            <h4>حدس کلمه</h4>
            <input ref={ref} type="text" className="form-control" autoComplete="off"/>
            <button className="btn btn-warning my-3" onClick={handleChangeName}>ثبت</button>
            <button className="btn btn-secondary my-3 mx-2" onClick={() => {
                ref.current.value = ""
            }}>مخفی</button>
            <br />
            <span>{counter++}</span>
        </div>
    )
}

export default forwardRef(Fcomponent);