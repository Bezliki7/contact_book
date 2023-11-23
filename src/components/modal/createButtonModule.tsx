import React from 'react';

function CreateButtonModule({ popup }) {
  return (
    <button form={popup} className="button" type="submit">
      {popup == 'addForm' ? 'Добавить' : popup == 'delete' ? 'Удалить' : 'Измеить'}
    </button>
  );
}

export default CreateButtonModule;
