import React from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";
import './Style/head.css';
import { BsPostage } from 'react-icons/bs';
export default function Head({ image, headers, text1 = "", text2 = "", text3 = "" ,pos="top -100px"}) {
    return (
        <>
            <div className="head-main"  style={{ position: 'relative', overflow: 'hidden' }}>
                <div
                    // className="background-overlay"
                    style={{
                        backgroundImage: `url(${image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: `center ${pos}`,
                        filter: 'brightness(50%)', // Adjusts visibility
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: -1
                    }}
                ></div>
                <h1 className="head-main-h">{headers}</h1>
                <p>
                    {text3
                        ? <>{text1} <IoIosArrowRoundForward /> {text2} <IoIosArrowRoundForward /> {text3}</>
                        : <>{text1} <IoIosArrowRoundForward /> {text2}</>
                    }
                </p>
            </div>
        </>
    );
}

