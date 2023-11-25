import { NextFunction, Request, Response, Router } from 'express';
import contactDataValidate from '../validations/contact.validation';
import contactController from '../controller/contact.controller';

const router = new (Router as any)();

router.post('/contact', async (req:Request, res:Response,next:NextFunction) => {
  try {
    await contactDataValidate(req, res);
    await contactController.createContact(req, res);
  } catch (err) {
    next(err)
  }
});
router.get('/contact', contactController.getContacts);
router.put('/contact/:id', async (req:Request, res:Response,next:NextFunction) => {
  try {
    await contactDataValidate(req, res);
    await contactController.updateContact(req, res);
  } catch (err) {
    next(err)
  }
});
router.delete('/contact/:id', contactController.deleteContact);

export default router;
