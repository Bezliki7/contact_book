import React from 'react';
import '../modal/modal.scss';
import Form, { FormType } from '../form.tsx';
import CreateButtonModule from './createButtonModule.tsx';

function Modal(props) {
  return (
    <div className="modal">
      <div className="modal-content">
        
        <div className="modal-header">
          <h2>
            {props.popup == 'addForm'
              ? 'Добавить контакт'
              : props.popup == 'delete'
              ? 'Удалить контакт'
              : 'Измеить контакт'}
          </h2>
        </div>

        <div className="modal-body">
          <Form {...(props as FormType)} />
        </div>

        <div className="modal-footer">
          <button
            className="cancelButton"
            onClick={() => {
              props.setPopup('none');
              props.setCurrContact(null);
            }}>
            отмена
          </button>
          
          <CreateButtonModule popup={props.popup} />
        </div>

      </div>
    </div>
  );
}

export default Modal;
