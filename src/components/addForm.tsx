import React from 'react';
import { Field, Formik } from 'formik';
import ContactAPI from '../api/contactAPI.tsx';
import { validateName, validateNumber } from './validators/contactValidate.tsx';
import '../scss/components/form.scss';
import { ContactWithAddInf } from '../types/contact.types.tsx';

const AddForm = ({ currContact, ...props }) => {
  const onSubmit = (values: ContactWithAddInf) => {
    const { number, FirstComb, name } = values;

    ContactAPI.createContact({ number: FirstComb + number, name })
      .then(() => {
        props.setIsAdded(true);
      })
      .catch((err) => console.error(err.response.data));

    props.setPopup(0);
  };

  return (
    <div>
      <Formik
        initialValues={{ name: '', number: '', FirstComb: '+7' }}
        onSubmit={(values) => onSubmit(values)}>
        {({ handleChange, handleSubmit, errors, touched }) => (
          <form id="addForm" onSubmit={handleSubmit}>
            <Field
              className="nameInput"
              type="text"
              name="name"
              placeholder="имя..."
              onChange={handleChange}
              validate={validateName}
            />
            {errors.name && touched.name ? <div className="error"> {errors.name} </div> : null}
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
                onChange={handleChange}
                validate={validateNumber}
              />
            </div>
            {errors.number && touched.number ? (
              <div className="error"> {errors.number} </div>
            ) : null}
          </form>
        )}
      </Formik>
    </div>
  );
};

export default AddForm;
