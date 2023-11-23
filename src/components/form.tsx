import React from 'react';
import { Field, Formik } from 'formik';
import ContactAPI from '../api/contactAPI.tsx';
import { validateName, validateNumber } from '../validators/contactValidate.tsx';
import '../scss/components/form.scss';
import { ContactType, ContactWithAddInf, popupAction } from '../types/contact.types.tsx';

const Form = ({ setIsAdded, setPopup, currContact, popup, setCurrContact }: FormType) => {
  const firstCombCount = currContact?.number?.at(0) == '8' ? 1 : 2;

  const onSubmit = (values: ContactWithAddInf) => {
    const { name, number, FirstComb } = values;

    if (popup === 'addForm') {
      ContactAPI.createContact({ number: FirstComb + number, name })
        .then(() => {
          setIsAdded(true);
        })
        .catch((err) => console.error(err.response.data));
    }
    if (popup === 'delete') {
      ContactAPI.deleteContact(currContact?.id).then(() => setIsAdded(true));
    }
    if (popup === 'updateForm') {
      if (!(currContact?.number == FirstComb + number) || !(currContact.name == name)) {
        ContactAPI.changeContact({ id: currContact?.id, number: FirstComb + number, name })
          .then(() => {
            setIsAdded(true);
          })
          .catch((err) => err);
      }
    }

    setPopup('none');
    setCurrContact(null);
  };

  return (
    <div>
      <Formik
        initialValues={{
          name: currContact?.name || '',
          number: currContact?.number?.slice(firstCombCount) || '',
          FirstComb: `${firstCombCount}` == '1' ? '8' : '+7' || '+7',
        }}
        onSubmit={(values) => onSubmit(values)}>
        {(props: any) => (
          <form id={popup} onSubmit={props.handleSubmit}>
            <Field
              className="nameInput"
              type="text"
              name="name"
              placeholder="имя..."
              value={props.values.name}
              onChange={props.handleChange}
              validate={validateName}
            />
            {props.errors.name && props.touched.name ? (
              <div className="error"> {props.errors.name} </div>
            ) : null}

            <div className="num">
              <Field className="options" as="select" name="FirstComb">
                <option value="+7">+7</option>
                <option value="8">8</option>
              </Field>

              <Field
                className="numberInput"
                type="tel"
                name="number"
                placeholder="номер телефона..."
                value={props.values.number}
                onChange={props.handleChange}
                validate={validateNumber}
              />
            </div>

            {props.errors.number && props.touched.number ? (
              <div className="error"> {props.errors.number} </div>
            ) : null}
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Form;

export type FormType = {
  setIsAdded: (status: boolean) => void;
  setPopup: (popupType: popupAction) => void;
  currContact: ContactType | null;
  popup: popupAction;
  setCurrContact: (contact: null) => void;
};
