import { Request, Response } from "express"
import Contact from "../contact"

class ContactController {
    async createContact(req: Request, res:Response) {
        const { name, number } = req.body
        await Contact.create({name, number})
        const newContact = await Contact.findAll({where: {number}})
        res.json(newContact[0])    
    }
    async getContacts(req: Request, res:Response) {
        const contacts = await Contact.findAll()
        res.json(contacts)
    }
    async deleteContact(req: Request, res:Response) {
        const id = req.params.id
        await Contact.destroy({where: {id}})
        res.json({mess:'success'})
    }
    async updateContact(req: Request, res:Response) {
        const id = req.params.id
        const { name, number } = req.body
        await Contact.update({name, number}, {where: {id}})
        const updatedContact = await Contact.findByPk(id)
        res.json(updatedContact)
    }
    async getOnePhoneNumber(req: Request) {
        const { number } = req.body
        const contact = await Contact.findByPk(number)
        return contact
    }
}

export default new ContactController()