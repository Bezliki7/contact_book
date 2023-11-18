import React from 'react';
import { Field, Formik, FormikProps } from 'formik';
import ContactAPI from '../api/contactAPI.tsx';
import { validateName, validateNumber } from './validators/contactValidate.tsx';
import '../scss/components/form.scss';
import { ContactWithAddInf } from '../types/contact.types.tsx';

const UpdateForm = ({ setIsAdded, setPopup, currContact }) => {
  const fnCount = currContact.number[0] == '8' ? 1 : 2;

  const onSubmit = (values: ContactWithAddInf) => {
    const { name, number, FirstComb } = values;
    console.log(!(currContact.number == FirstComb + number) || !(currContact.name == name) )
    if (!(currContact.number == FirstComb + number) || !(currContact.name == name) ) {
      ContactAPI.changeContact({ id: currContact.id, number: FirstComb + number, name })
        .then(() => {
          setIsAdded(true);
        })
        .catch((err) => err);
    }
    setPopup(0);
  };
  return (
    <div>
      <Formik
        initialValues={{
          name: currContact.name,
          number: currContact.number.slice(fnCount),
          FirstComb: `${fnCount}` == '1' ? '8' : '+7',
        }}
        onSubmit={(values) => onSubmit(values)}>
        {(props: FormikProps<ContactWithAddInf>) => (
          <form id="updateForm" onSubmit={props.handleSubmit}>
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

export default UpdateForm;
