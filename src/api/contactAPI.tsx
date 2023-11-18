import axios from 'axios';
import { ContactType, ContactWithAddInf } from '../types/contact.types';


const ContactAPI = {
  getContacts: () => {
    return axios.get('http://localhost:3333/api/contact');
  },
  createContact: (contact:ContactWithAddInf) => {
    return axios.post('http://localhost:3333/api/contact', contact )
  },
  changeContact: (contact:ContactType) => {
    return axios.put('http://localhost:3333/api/contact', contact)
  },
  deleteContact: (id:number) => {
    return axios.delete(`http://localhost:3333/api/contact/${id}`)
  }
};

export default ContactAPI

