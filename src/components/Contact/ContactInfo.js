import React,{useState} from 'react';

import {HiOutlinePhoneIncoming,HiOutlineMail,HiLocationMarker} from 'react-icons/hi';

import ContactModal from '../modal/contactModal';

import './ContactInfo.css';
function ContactInfo(props) {
    const [modalShow,setModalShow]=useState(false);
    return (
        <div className="container">
            <div className="contact">
                <div className="contact-left">
                    <div className="left-details">
                        <h1>contact us</h1>
                        <p>Laboris quis eiusmod mollit eu pariatur. Mollit cupidatat minim cupidatat tempor cupidatat cillum aute eu voluptate et fugiat nulla. Voluptate eu ad excepteur occaecat consectetur dolore duis consectetur id cupidatat dolore est adipisicing est. Commodo anim consectetur cupidatat aliqua minim excepteur aliqua reprehenderit do veniam deserunt commodo.LAP|HOME is a company that provides quality and affordable services to it's users.</p>
                        <ul>
                            <li>
                                <span><HiOutlinePhoneIncoming className="phone"/></span>
                                <span>0554588483</span>
                            </li>
                            <li>
                                <span><HiOutlineMail className="mail"/></span>
                                <span>frimpongdarkwakwame@gmail.com</span>
                            </li>
                            <li>
                                <span><HiLocationMarker className="location"/></span>
                                <span>North Street,East-Legon@Accra</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="contact-right">
                    <div className="right-details">
                        <form>
                            <h1>get in touch</h1>
                            <label>Full Name</label>
                            <input type="text" placeholder="Enter your name"/>
                            <label>Email</label>
                            <input type="email" name="email" placeholder="Enter your email"/>
                            <label>Message</label>
                            <textarea type="text" placeholder="Type your message"/>
                            <div className="contact-btn" type="button" onClick={()=>setModalShow(true)}>
                                <span>Send</span>
                            </div>
                            <ContactModal show={modalShow} onHide={()=>setModalShow(false)}/>
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default ContactInfo;