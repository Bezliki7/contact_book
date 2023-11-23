import { Router } from 'express';
import ContactController from '../controller/contact.controller.js';
import contactDataValidate from '../validations/contact.validation.js';
import contactController from '../controller/contact.controller.js';

const router = new Router();

router.post('/contact', async (req, res, next) => {
  try {
    await contactDataValidate(req, res, 0);
    await contactController.createContact(req, res);
  } catch (err) {
    next(err)
  }
});

router.get('/contact', ContactController.getContacts);
router.put('/contact/:id', async (req, res,next) => {
  try {
    await contactDataValidate(req, res, 1);
    await contactController.updateContact(req, res);
  } catch (err) {
    next(err);
  }
});
router.delete('/contact/:id', ContactController.deleteContact);

export default router;
