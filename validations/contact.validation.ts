import { Request, Response } from 'express';
import contactController from '../controller/contact.controller.js';

const contactDataValidate = async (req:Request, res:Response, n:number) => {
  if (!req.body.name) {
    throw new Error('name is required');
  }
  if (!req.body.number) {
    throw new Error('number is required');
  }
  if (req.body.name.length < 3) {
    throw new Error('name should have atleast 3 characters');
  }
  if (req.body.number.length == 11 || req.body.number.length == 12) {
    undefined
  } else {throw new Error('number should have 11||12 characters');}

  const response = await contactController.getOnePhoneNumber(req);
  if (response.length > n ) {
    throw new Error('number is already exist');
  }

};

export default contactDataValidate;