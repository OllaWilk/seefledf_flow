import React, {useState} from 'react';
import { HiX } from "react-icons/hi";
import './Modal.scss'

 const Modal = (props) => {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }

  return (
    <>
        {/* <button onClick={toggleModal} className="btn-modal">
            Open
        </button> */}
        
        { modal && (
            <div className="modal">
            <div className="overlay" onClick={toggleModal} ></div>
            <div className="modal-content">
                <h2>{props}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati deleniti dolor illum sunt id. Quaerat unde aperiam numquam placeat, at minus enim impedit corrupti expedita nisi officia nostrum, sed aliquid?
                Consequuntur necessitatibus repellat eum optio, est provident vero obcaecati fugiat placeat natus deserunt odit porro cumque sed voluptas. Ducimus dignissimos quas dolores excepturi sequi assumenda ipsum. Facere esse consequatur modi.
                Vero, blanditiis molestiae? Voluptatum, quod quo. Qui mollitia accusantium, iste cupiditate adipisci perferendis eaque similique deserunt quas magnam vitae! Iure voluptas expedita deserunt consectetur error ea perspiciatis ullam assumenda rem.
                Optio quisquam commodi aut necessitatibus vitae quaerat unde, recusandae debitis tempora qui sapiente assumenda perspiciatis tempore accusamus quia nam. Nihil, aspernatur magni vitae dignissimos ex illo. Fugit autem sapiente doloribus!
                Obcaecati amet ipsa provident nihil, est pariatur totam, animi, earum dolorum beatae odit aliquam? Dolore ab, voluptas assumenda cupiditate earum consequuntur expedita eveniet tempore voluptatibus. Quasi officia non laboriosam molestiae.
               
                ta earum vel provident exercitationem in cupiditate a itaque voluptas similique amet omnis accusamus. Iure, amet animi! Optio laborum explicabo voluptates itaque earum.
                Modi velit qui fuga iure perspiciatis sit blanditiis sint pariatur iusto consectetur commodi ipsam inventore voluptatibus hic exercitationem voluptate, beatae asperiores laboriosam mollitia itaque est dolorem. Asperiores numquam illo accusantium.
                Nemo, eum est ducimus iste, facere sunt omnis quia ratione eos tenetur libero natus nobis dolor doloremque, dolorem magnam! Perspiciatis cupiditate ad facere dolor doloribus vero. Nulla, esse. Dolorem, deserunt.</p>
                <HiX className="close-modal"  onClick={toggleModal} />
            
            </div>
        </div>
        )}
        
    </>
  )
}

export default Modal;