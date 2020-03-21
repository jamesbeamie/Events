import React from "react";
import "../../assets/styles/index.css";
import "../../assets/styles/modal.css";

const DelModal = props => {
  return (
    <div className='MyModal'>
      <section className='MyModal_content'>{props.children}</section>
    </div>
  );
};

export default DelModal;
