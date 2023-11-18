import React from 'react';
import ContactAPI from '../../api/contactAPI.tsx';
import AddForm from '../addForm.tsx';
import '../modal/modal.scss';
import UpdateForm from '../updateForm.tsx';

function Modal({ popup, title, body, currContact, ...props }) {
  const onClickButton = () => {
    ContactAPI.deleteContact(currContact.id);
    props.setIsAdded(!props.isAdded);
    props.setPopup(0);
    console.log(currContact);
  };
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2>{title}</h2>
        </div>

        {body == 'addForm' ? (
          <div className="modal-body">
            <AddForm setIsAdded={props.setIsAdded} setPopup={props.setPopup} currContact={currContact} />{' '}
          </div>
        ) : (
          body == 'updateForm' && (
            <div className="modal-body">
              <UpdateForm setIsAdded={props.setIsAdded} setPopup={props.setPopup} currContact={currContact} />{' '}
            </div>
          )
        )}

        <div className="modal-footer">
          <button className="cancelButton" onClick={() => props.setPopup(0)}>
            отмена
          </button>

          {props.button == 'добавить' ? (
            <button form="addForm" type="submit" className="button">
              {props.button}
            </button>
          ) : props.button == 'удалить' ? (
            <button className="button" onClick={onClickButton}>
              {props.button}
            </button>
          ) : (
            <button form="updateForm" className="button" type="submit">
              {props.button}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;
