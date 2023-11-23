import React from 'react';
import ContactAPI from '../../api/contactAPI.tsx';
import '../modal/modal.scss';
import Form, { FormType } from '../form.tsx';

function Modal(props) {
  const onClickButton = () => {
    ContactAPI.deleteContact(props.currContact.id);
    props.setIsAdded(!props.isAdded);
    props.setPopup('none');
    props.setCurrContact(null);
  };
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2>{ props.popup == 'addForm' ? 'Добавить контакт' : props.popup == 'delete' ? 'Удалить контакт' : 'Измеить контакт' }</h2>
        </div>

        <div className="modal-body">
          <Form {...props as FormType} />
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

          {props.popup == 'addForm' ? (
            <button form="addForm" type="submit" className="button">
              добавить
            </button>
          ) : props.popup == 'delete' ? (
            <button className="button" onClick={onClickButton}>
              удалить
            </button>
          ) : (
            <button form="updateForm" className="button" type="submit">
              изменить
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;
