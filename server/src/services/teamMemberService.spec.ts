import { TeamMemberService } from "./teamMemberService"

const createTeamMemberSpy = jest.fn();

const teamMemberService = new TeamMemberService(
    { create: createTeamMemberSpy }
)

describe("teamMemberService", () => {
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