import React from 'react';
import { useEffect, useState } from 'react';
import ContactAPI from '../api/contactAPI.tsx';
import '../scss/components/home.scss';
import Contact from './contact/contact.tsx';
import Skeleton from './contact/skeleton.tsx';
import { ContactType, popupAction } from '../types/contact.types.tsx';
import Modal from './modal/modal.tsx';

function Home() {
  const [contact, setContact] = useState([]);
  const [popup, setPopup] = useState<popupAction>('none');
  const [isAdded, setIsAdded] = useState(false);
  const [currContact, setCurrContact] = useState<ContactType | null>(null);
  const [isLOading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    ContactAPI.getContacts().then((res) => {
      setContact(res.data);
      setIsAdded(false);
      setIsLoading(false);
    });
  }, [isAdded]);

  return (
    <div className="content">
      <button id="myBtn" onClick={() => setPopup('addForm')}>
        Добавиить контакт
      </button>

      {isLOading
        ? [...new Array(4)].map((_, index) => (
            <div className="skeleton" key={index}>
              <Skeleton />
            </div>
          ))
        : [...contact].reverse().map((obj: ContactType) => (
            <div key={obj.id}>
              <Contact obj={obj} setPopup={setPopup} setCurrContact={setCurrContact} />
            </div>
          ))}

      {popup !== 'none' && (
        <Modal
          setIsAdded={setIsAdded}
          popup={popup}
          setPopup={setPopup}
          setContact={setContact}
          currContact={currContact}
          setCurrContact={setCurrContact}
        />
      )}
    </div>
  );
}

export default Home;
