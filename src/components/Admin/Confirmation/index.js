import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Modal from 'react-modal';
import { P, Button, Actions } from './styles';
import ConfirmationImg from '../../../assets/svgs/Confirmation.svg';

export default function Confirmation({
  handleDelete, closeModal, isDelete,
}) {
  return (
    <Modal
      isOpen={isDelete}
      className="modal delete-modal"
      onRequestClose={closeModal}
      overlayClassName="overlay"
      ariaHideApp={false}
    >
      <img src={ConfirmationImg} alt="employer" width={180} />
      <P>Are you sure you want to delete this employers profile?</P>
      <Actions>
        <Button onClick={handleDelete}>Yes, Delete</Button>
        <Button onClick={closeModal}>No, Keep it</Button>
      </Actions>
      <button type="button" onClick={closeModal} className="closeModal-btn">
        <AiOutlineClose />
      </button>
    </Modal>
  );
}
