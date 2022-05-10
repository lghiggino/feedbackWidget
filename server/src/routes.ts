import dayjs from "dayjs";
import { Router } from "express";
import { NodemailerMailAdapter } from "./adapters/nodemailer/nodemailer.mail.adapter";
import { PrismaFeedbacksRepository } from "./repositories/prisma/prismaFeedbacksRepository";
import { SubmitFeedbackService } from "./services/submitFeedbackService";

export const routes = Router()

routes.get('/', (req, res) => {
    res.send(`<div> 
    <a href="https://feedback-widget-gules.vercel.app/"> 
    <h1>NLW Return</h1>   
    </a>
    </div>`)
})

//https://youtu.be/YBp7UWyhe28?t=2939

routes.get('/health', (req, res) => {
    res.json(`I am healthy at ${Date.now()}`)
})

routes.post('/feedbacks', async (req, res) => {
    const { type, comment, screenshot } = req.body

    const prismaFeedbackRepository = new PrismaFeedbacksRepository()
    const nodemailerMailAdapter = new NodemailerMailAdapter()
    const submitFeedbackService = new SubmitFeedbackService(
        prismaFeedbackRepository,
        nodemailerMailAdapter
    )

    const createdAt = dayjs().format('yyyy-mm-dd')

    const feedback = await submitFeedbackService.execute({
        type,
        comment,
        screenshot,
        createdAt
    })

    return res.status(201).json({ data: feedback })
})