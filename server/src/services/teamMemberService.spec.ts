import { TeamMemberService } from "./teamMemberService"

const createTeamMemberSpy = jest.fn();
const getAllTeamMembersSpy = jest.fn();

const teamMemberService = new TeamMemberService(
    {
        create: createTeamMemberSpy,
        getAll: getAllTeamMembersSpy
    }
)

describe("teamMemberService POST", () => {
    it("should be able to submit a feedback", async () => {
        await expect(teamMemberService.execute({
            name: 'Leonardo',
            createdAt: ''
        })).resolves.not.toThrow()

        expect(createTeamMemberSpy).toHaveBeenCalled()
    })

    it("should not be able to submit a feedback without a name", async () => {
        await expect(teamMemberService.execute({
            name: '',
            createdAt: ''
        })).rejects.toThrow()
    })
})

describe("teamMemberService GET", () => {
    it("should be able to read all team members", async () => {
        const allTeamMembers = await teamMemberService.getAll()
        console.log("allTeamMembers", allTeamMembers)

        expect(allTeamMembers).resolves.not.toThrow()
        expect(getAllTeamMembersSpy).toHaveBeenCalled()
    })
})