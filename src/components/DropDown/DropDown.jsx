import React, { useState, useEffect, useRef } from 'react';
import user from '../../img/user.png'
import edit from '../../img/edit.png';
import inbox from '../../img/envelope.png';
import settings from '../../img/settings.png';
import help from '../../img/question.png';
import logout from '../../img/log-out.png';
import { DropdownItem } from './DropDownItem';
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai'

import './index.css'
export const DropDown = () => {
    const [open, setOpen] = useState(false);
    let menuRef = useRef();

    useEffect(() => {
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setOpen(false);
                console.log(menuRef.current);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    });

    return (
        <div className='drop-container' ref={menuRef}>
            <div className='menu-trigger' onClick={() => { setOpen(!open) }}>
                Dropdown Menu
                {!open ? (<AiOutlineCaretDown />) : (< AiOutlineCaretUp />)}
            </div>

            <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`} >

                <ul>
                    <DropdownItem img={user} text={"My Profile"} />
                    <DropdownItem img={edit} text={"Edit Profile"} />
                    <DropdownItem img={inbox} text={"Inbox"} />
                    <DropdownItem img={settings} text={"Settings"} />
                    <DropdownItem img={help} text={"Helps"} />
                    <DropdownItem img={logout} text={"Logout"} />
                </ul>
            </div>
        </div>
    )
}
