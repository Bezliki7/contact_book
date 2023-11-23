import React from 'react';
import ChangeSvg from '../../assets/changeSvg.tsx';
import TrashSvg from '../../assets/trashSvg.tsx';
import { ContactType, popupAction } from '../../types/contact.types.tsx';

function Contact({ obj, setPopup, setCurrContact }:ContactProps) {
  const onClickSvg = (popupType:popupAction) => {
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
      <div onClick={() => onClickSvg('updateForm')}>
        <ChangeSvg />
      </div>
      <div onClick={() => onClickSvg('delete')}>
        <TrashSvg />
      </div>
    </>
  );
}

export default Contact;

type ContactProps = {
  obj: ContactType
  setPopup: (popupType: popupAction) => void
  setCurrContact: (obj : ContactType) => void
}