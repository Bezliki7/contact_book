import React from 'react';
import ChangeSvg from '../../assets/changeSvg';
import TrashSvg from '../../assets/trashSvg';

function Contact({ obj, setPopup, setCurrContact }) {
  const onClickSvg = (popupType) => {
    setPopup(popupType);
    setCurrContact(obj);
  };

  const sliceNumber = (n: string) =>n[0] +'' +(n[0] == '8' ? '' : n[1]) +' ' +
  n.slice(-10, -7) +'-' +n.slice(-7, -4) +'-' +n.slice(-4);
  
  return (
    <>
      <div className="contact">
        <div> name: {obj.name} </div>
        <div>phone number: {sliceNumber(obj.number)}</div>
      </div>
      <div onClick={() => onClickSvg(3)}>
        <ChangeSvg />
      </div>
      <div onClick={() => onClickSvg(2)}>
        <TrashSvg />
      </div>
    </>
  );
}

export default Contact;
