import React from 'react';
import Modal from './modal.tsx';

const popupType = ['none', 'addForm', 'delete', 'updateForm'];

function CreateModal(props) {
  return (
    <div>
      {popupType[props.popup] == 'addForm' ? (
        <Modal title="Добавить контакт" body="addForm" button="добавить" {...props} />
      ) : popupType[props.popup] == 'delete' ? (
        <Modal title="Удалить контакт" body="delete" button="удалить" {...props} />
      ) : popupType[props.popup] == 'updateForm' ? (
        <Modal title="Измеить контакт" body="updateForm" button="изменить" {...props} />
      ) : (
        ''
      )}
    </div>
  );
}

export default CreateModal;
