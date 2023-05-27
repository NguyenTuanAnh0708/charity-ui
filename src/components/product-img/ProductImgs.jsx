import React, { useState, useRef } from 'react';
import './product-img.scss';
import Modal, { ModalContent } from '../modal/Modal';
const ProductImgs = (props) => {
  const setModalImg = (id) => {
    const modal = document.querySelector(`#modal_img_${id}`);
    const img = modal.querySelector('img');
    img.setAttribute('src', props.imgs.primary);
    modal.classList.toggle('active');
    console.log(img);
  };
  return (
    <>
      <div className="product__img">
        <img src={props.imgs.primary} class="image" alt="normal" />
        <img src={props.imgs.secondary} class="image-hover" alt="hover" />
        <button className="product__img__zoom" onClick={() => setModalImg(props.id)}>
          <i class="bx bx-expand"></i>
        </button>
      </div>
      <ImgsModal id={props.id} />
    </>
  );
};

export default ProductImgs;
//
const ImgsModal = (props) => {
  const imgRef = useRef(null);
  const onClose = () => {
    imgRef.current.src = '';
  };
  return (
    <Modal active={false} id={`modal_img_${props.id}`}>
      <ModalContent onClose={onClose}>
        <img ref={imgRef} src="" alt="" />
      </ModalContent>
    </Modal>
  );
};
