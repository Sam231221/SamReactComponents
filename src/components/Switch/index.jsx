import { useState } from 'react'
import './index.css'
import Switch from './Switch'
import ThemeSwitcher from './ThemeSwitcher'
const index = () => {
    const [isToggled,setToggle] = useState(false)
    return (
        <div>
            <h2>Switch</h2>
            <p>Switches toggle the state of a single setting on or off.Switches are the preferred way to adjust settings on mobile. The option that the switch controls, as well as the state it's in, should be made clear from the corresponding inline label.</p>
            <br /><br />
            <Switch isToggled={isToggled} onToggle={()=>setToggle(!isToggled)} rounded={true}/>
           <ThemeSwitcher />
        </div>
    )
}
export default index