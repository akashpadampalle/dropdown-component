import React, { useState } from 'react'
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md"
import "./style.css"


interface DropdownProps {
    title: string,
    list: string[]
}

const Dropdown: React.FC<DropdownProps> = ({ title, list }) => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");

    const handleOptionClick = (text: string) => {
        setOpen(false);
        setValue(text);
    }


    return (
        <div
            className='dropdown-parent'
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}

        >
            <div className='dropdown-title'> <span>{value ? value : title}</span> {open ? <MdArrowDropUp /> : <MdArrowDropDown />}  </div>
            {open &&
                <div className='dropdown-element-container'>
                    <div className='dropdown-element' onClick={() => handleOptionClick("")}>none</div>
                    {
                        list?.map(
                            (text, index) => (
                                <div
                                    className='dropdown-element'
                                    key={index}
                                    onClick={() => handleOptionClick(text)}
                                >
                                    {text}
                                </div>
                            )
                        )
                    }
                </div>
            }
        </div>
    );
}

export default Dropdown