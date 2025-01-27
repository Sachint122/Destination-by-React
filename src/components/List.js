import React from 'react'
import { IoMdArrowDropright } from "react-icons/io";
export default function List( props ) {
    return (
        <>
            <div className={props.className}>
                <div>
                    <IoMdArrowDropright size={40} color='#00d4ff' />
                </div>
                <div>
                    <span> {props.head}: </span> 
                    {props.text}
                </div>
            </div>
        </>
    )
}
