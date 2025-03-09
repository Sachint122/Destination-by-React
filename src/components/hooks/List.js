import React from 'react'
import { IoMdArrowDropright } from "react-icons/io";
export default function List(props) {
    return (
        <>
            <div className={props.className}>
                <div>
                    <IoMdArrowDropright size={40} color='#F26B23' />
                </div>
                <div>
                    <span> {props.head}: </span>
                    <p>
                        {props.text}
                    </p>
                </div>
            </div>
        </>
    )
}
