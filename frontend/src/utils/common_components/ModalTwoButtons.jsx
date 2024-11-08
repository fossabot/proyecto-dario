import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Backdrop from './Backdrop';
import style from './ModalOneButton.module.css';
import { dropIn } from '../common_functions';
import MotionButton from '../buttons/MotionButton';

const ModalTwoButton = ({ message, setOpenModal, setAccept, buttonText1, buttonText2 }) => {
  
  const handleClickOk = () => {
    setAccept(true)
    setOpenModal(false); // Close the modal
  };

  const handleClickCancel = () => {
    setOpenModal(false); // Close the modal
  };

  return (
    <Backdrop>
      <motion.div className={style.messageContainer}>
        <h1 className={style.message}>{message}</h1>
<div className={style.buttonContainer} style={{display: 'flex', width: '100%', justifyContent: 'center', gap: '2%', color: '#212427'}}>
      <MotionButton buttonText={buttonText1} onClick={handleClickOk} className={style.button} />
      <MotionButton buttonText={buttonText2} onClick={handleClickCancel} className={style.button} />
</div>
      </motion.div>
    </Backdrop>
  );
};

export default ModalTwoButton;
