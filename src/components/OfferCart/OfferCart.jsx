import React, {useState} from 'react';
import { HiX } from "react-icons/hi";

import './OfferCart.scss'

 const OfferCart = ({title, img, abstract, content}) => {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }

    if(modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

  return (
    <>
        <div className="app_offer-item" >
            <div className="app__img-wrap">
                <img src={img} alt={title} />
                <p className="abstract">{abstract}</p>
            </div>
            <div className="img-wrap">
                
                <h3 className="title" > {title}</h3>
            </div>
            
            <p className="abstract-sm">{abstract}</p>
            <div className="btnwhite" onClick={toggleModal} >
                <p>Więcej</p>
            </div>
       </div>
       { modal && (
            <div className="modal">
            <div className="overlay" onClick={toggleModal} ></div>
            <div className="modal-content">
                <h2>{title}</h2>
                <p>{content}</p>
                <HiX className="close-modal"  onClick={toggleModal} />
            
            </div>
        </div>
        )}
       
    </>
       
       
  )
}

export default OfferCart;