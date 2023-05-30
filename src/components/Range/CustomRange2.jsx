import React, {useEffect, useState} from 'react'

export const CustomRange2 = ({min, max}) => {
    const slideValue = document.querySelector(".range span");
    const [val, setVal] = useState(0)
    const handleOnChange = (value)=>{
        setVal(value)
        // let value = inputSlider.value;
        //depending on slidevalue we will set left:value% on span of sliderValue
        slideValue.textContent = val;
        slideValue.style.left = (val / 2) + "%";
        console.log(val, slideValue.style.left)
        slideValue.classList.add("show");

    }
    const handleOnBlur =()=>{
        slideValue.classList.remove("show");
    }
    useEffect(()=>{

    }, [val])
    return (
        <div className="range">
            <div className="sliderValue">
                <span>{val}</span>
            </div>
            <div className="field">
                <div className="value left">
                    {min}</div>

                {/* Dont Set min to 0  */}
                <input type="range" min={min} max={max} value={val} onBlur={()=>handleOnBlur()} onChange={(e)=>handleOnChange(e.target.value)} step="1" />
                <div className="value right">
                   {max}</div>
                    
            </div>
        </div>
    )
}

