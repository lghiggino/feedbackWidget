import { TeamMemberRepository } from "../repositories/teamMemberRepository";

interface TeamMemberServiceRequest {
    name: string;
    createdAt: string;
}

export class TeamMemberService {
    constructor(
        private teamMemberRepository: TeamMemberRepository,
    ) { }

    async execute(request: TeamMemberServiceRequest) {
        const { name, createdAt } = request;

        if(!name){
            throw new Error('Name is required')
        }

        const teamMember = await this.teamMemberRepository.create({
            name,
            createdAt
        });

        return teamMember
    }

    async getAll(){
        const allTeamMembers = await this.teamMemberRepository.getAll()
        return allTeamMembers
    }
}

