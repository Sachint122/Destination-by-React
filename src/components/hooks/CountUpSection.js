import React from 'react'
import CountUp from './CountUp'
import './Style/CountUpSection.css';
import icon1 from './images/icon/download (2).png';
import icon2 from './images/icon/download (1).png';
import icon3 from './images/icon/download (4).png';
import icon4 from './images/icon/download (3).png';
export default function CountUpSection(props) {
    return (
        <>
            <div className="wrapper">
                <div className="container">
                    <img src={icon1} />
                    <div className='count'>
                        <CountUp from={0} to={props.text1} />
                    </div>
                    <span className="text">Total No. of Students Till Date</span>
                </div>
                <div className="container">
                    <img src={icon2} />
                    <div className='count'>
                        <CountUp from={0} to={props.text2} text='LPA' />
                    </div>
                    <span className="text">Highest Salary Package</span>
                </div>
                <div className="container">
                    <img src={icon3} style={{width:'20%'}} />
                    <div className='count'>
                        <CountUp from={0} to={props.text3} text='Drives' />
                    </div>
                    <span className="text">Total No. of Drives Conducted</span>
                </div>
                <div className="container">
                    <img src={icon4} />
                    <div className='count'>
                        <CountUp from={0} to={props.text4} text='LPA' />
                    </div>
                    <span className="text">Average Salary Package</span>
                </div>
            </div>
        </>
    )
}
