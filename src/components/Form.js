import icon1 from '../images/icon/Name Icons.png'
import icon2 from '../images/icon/Open mail Icons.png'
import icon3 from '../images/icon/Phone survey Icons.png'
export default function Form({ open }) {
    return (
        <>
            {open && (
                <div id="formModal" className="modal">
                    <form className="form">
                        <div>
                            <p id="heading">Enquire Now</p>
                            <p className="form-content">Fill this form to get a call back from our team</p>
                        </div>
                        <div className="field">
                            <img className="input-icon" src={icon1} alt="" />
                            <input autoComplete="off" placeholder="Enter Your Name" className="input-field" type="text" />
                        </div>
                        <div className="field">
                            <img className="input-icon" src={icon2} alt="" />
                            <input placeholder="Enter Your Email" className="input-field" type="email" />
                        </div>
                        <div className="field">
                            <img className="input-icon" src={icon3} alt="" />
                            <input placeholder="Enter Your Number" className="input-field" type="number" />
                        </div>
                        <div className="field">
                            <textarea placeholder="Enter Your Message" className="input-field"></textarea>
                        </div>
                        <button type="button" className="button3">Send</button>
                    </form>
                </div>
            )}
        </>
    );
}
