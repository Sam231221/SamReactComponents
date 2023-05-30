import React, {useState} from 'react'
import './index.css'
import { BasicModal } from './BasicModal'
const Modals = () => {
    const [isVisible, setVisible] = useState(false)
    return (
        <div>
            <h2>Modal</h2>
            <p>The modal component provides a solid foundation for creating dialogs, popovers, lightboxes, or whatever else.
                The Modal offers important features:

                💄 Manages modal stacking when one-at-a-time just isn't enough.
                🔐 Creates a backdrop, for disabling interaction below the modal.
                🔐 It disables scrolling of the page content while open.
                ♿️ It properly manages focus; moving to the modal content, and keeping it there until the modal is closed.
                ♿️ Adds the appropriate ARIA roles automatically.

            </p>
            <button onClick={()=>setVisible(true)}>Basic Modal</button>
           {isVisible && <BasicModal setvisible={setVisible} />}
        </div>
    )
}
export default Modals
