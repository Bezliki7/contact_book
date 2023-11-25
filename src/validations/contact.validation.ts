import { Request, Response } from 'express';

const contactDataValidate = async (req:Request, res:Response) => {
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
  } else {
    throw new Error('number should have 11||12 characters');}
};

export default contactDataValidate;
