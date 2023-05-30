import {useState} from 'react'
import './style.css'
import styled from 'styled-components'
const PriceInput = styled.div`
   width: 100%;
    display: flex;
    margin: 30px 0 35px;
`
const Field = styled.div`
    display: flex;
    width: 100%;
    height: 45px;
    align-items: center;
    input{
        width: 100%;
        height: 100%;
        outline: none;
        font-size: 19px;
        margin-left: 12px;
        border-radius: 5px;
        text-align: center;
        border: 1px solid #999;
        -moz-appearance: textfield;
    }
`

const Slider = styled.div`
    height: 5px;
    position: relative;
    background: #ddd;
    border-radius: 5px;
    .progress{
        height: 100%;
        left: 25%;
        right: 25%;
        position: absolute;
        border-radius: 5px;
        background: #17A2B8;
    }
`
const RangeInput = styled.div`
    position: relative;
    input{
        position: absolute;
        width: 100%;
        height: 5px;
        top: -5px;
        background: none;
        pointer-events: none;
        -webkit-appearance: none;
        -moz-appearance: none;
    }
`
const Seperator = styled.div`
    width: 130px;
    display: flex;
    font-size: 19px;
    align-items: center;
    justify-content: center;
`

export const PriceDoubleRange = ({ min, max }) => {
    const [minVal, setMinVal] = useState(0)
    const [maxVal, setMaxVal] = useState(0)

    
    return (
        <div className="wrapp">

        <div className="price-input">
            <div className="field">
                <span>Min</span>
                <input type="number" className="input-min" value="2500" />
            </div>
            <div className="separator">-</div>
            <div className="field">
                <span>Max</span>
                <input type="number" className="input-max" value="7500" />
            </div>
        </div>
        <div className="slider">
            <div className="progress"></div>
        </div>
        <div className="range-input">
            <input type="range" className="range-min" min="0" max="10000" value="2500" step="100" />
            <input type="range" className="range-max" min="0" max="10000" value="7500" step="100" />
        </div>
    </div>
    )
}
