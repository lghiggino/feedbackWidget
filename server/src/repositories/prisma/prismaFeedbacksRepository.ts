import { prisma } from "../../prisma";
import { FeedbacksRepository, FeedbackCreateData } from "../feedbacksRepository";
import { TeamMemberRepository, TeamMemberCreateData } from "../teamMemberRepository";


export class PrismaFeedbacksRepository implements FeedbacksRepository {
    async create({ type, comment, screenshot }: FeedbackCreateData) {
        await prisma.feedback.create({
            data: {
                type,
                comment,
                screenshot
            }
        });
    }

    async findAll(){
        await prisma.feedback.findMany()
    }
}

export class PrismaTeamMemberRepository implements TeamMemberRepository {
    async create({ name }: TeamMemberCreateData) {
        await prisma.team.create({
            data: {
                name
            }
        });
    }
}