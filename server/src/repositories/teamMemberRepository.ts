export interface TeamMemberCreateData {
    name: string
    createdAt: string
}

export interface TeamMemberRepository {
    create: (data: TeamMemberCreateData) => Promise<void>;
}