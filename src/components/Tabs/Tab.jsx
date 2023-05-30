import React, { useState } from 'react'
import './index.css'
export const Tab = () => {
    const [tab, setTab] = useState(1);
    const toggleTab = (val) => {
        setTab(val)
    }
    return (
        <div className='tab-container'>
            <div className="tab-group">
                <button className={tab === 1 ? "tab active-tab" : "tab"} onClick={() => toggleTab(1)}>Tab 1</button>
                <button className={tab === 2 ? "tab active-tab" : "tab"} onClick={() => toggleTab(2)}>Tab 2</button>
                <button className={tab === 3 ? "tab active-tab" : "tab"} onClick={() => toggleTab(3)}>Tab 3</button>
            </div>

            <div className={tab === 1 ? "tab-content active-content" : "tab-content"} onClick={() => toggleTab(1)}>
                <h2>Content 1</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum magnam nisi illo non numquam? Hic nam rem cupiditate porro distinctio!</p>
            </div>
            <div className={tab === 2 ? "tab-content active-content" : "tab-content"} onClick={() => toggleTab(2)}>
                <h2>Content 2</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum magnam nisi illo non numquam? Hic nam rem cupiditate porro distinctio!</p>
            </div>
            <div className={tab === 3 ? "tab-content active-content" : "tab-content"} onClick={() => toggleTab(3)}>
                <h2>Content 3</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum magnam nisi illo non numquam? Hic nam rem cupiditate porro distinctio!</p>
            </div>

        </div>
    )
}
