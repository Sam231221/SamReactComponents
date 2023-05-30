import { Tooltip } from "./ToolTip";

import './index.css'
const ToolTip = () => {
    return (
        <>
      <Tooltip text ={"Pressing this button destroys humanity"}>
      <span className="btn">Info</span>


      </Tooltip>
    
        </>
    );
};

export default ToolTip;
