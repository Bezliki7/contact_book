import { Request, Response } from "express"
import db from "../db.js"

class ContactController {
    async createContact(req: Request, res:Response) {
        const { name, number } = req.body
        const newContact = await db.query(`INSERT INTO contact (name, number) values ($1, $2) RETURNING *`, [name, number])
        res.json(newContact.rows[0])
    }
    async getContacts(req: Request, res:Response) {
        const contacts = await db.query('SELECT * FROM contact')
        res.json(contacts.rows)
    }
    async deleteContact(req: Request, res:Response) {
        const id = req.params.id
        const contact = await db.query('DELETE FROM contact where id = $1', [id])
        res.json(contact.rows)
    }
    async updateContact(req: Request, res:Response) {
        const id = req.params.id
        const { name, number } = req.body
        const newContact = await db.query(`UPDATE contact set name = $1, number = $2 where id = $3 RETURNING *`, [name, number,id])
        res.json(newContact.rows[0])
    }
    async getOnePhoneNumber(req: Request) {
        const { number } = req.body
        const contact = await db.query('SELECT * FROM contact where number = $1', [number])
        return contact.rows
    }
}

export default new ContactController()