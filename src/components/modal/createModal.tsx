import React from 'react';
import Modal from './modal.tsx';


function CreateModal(props) {
  return (
    <div>
      {props.popup == 'addForm' ? (
        <Modal title="Добавить контакт" body="addForm" button="добавить" {...props} />
      ) : props.popup == 'delete' ? (
        <Modal title="Удалить контакт" body="delete" button="удалить" {...props} />
      ) : props.popup == 'updateForm' ? (
        <Modal title="Измеить контакт" body="updateForm" button="изменить" {...props} />
      ) : (
        ''
      )}
    </div>
  );
}

export default CreateModal;
