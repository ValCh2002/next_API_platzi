import { createAppSlice } from "@/lib/createAppSlice";
import { ITeam } from "@/type/type";
import { getTeamByIdAPI, getTeamsAPI } from "./teamAPI";

const initialState: { teams: ITeam[], team: ITeam } = {
    team: {} as ITeam,
    teams: []
}

export const teamSlice = createAppSlice({
    name: "teams",
    initialState,
    reducers: (create) => ({
        getTeamsData: create.asyncThunk(
            async () => {
                return await getTeamsAPI()
            },
            {
                fulfilled: (state, action) => {
                    state.teams = action.payload
                }
            }
        ),
        getTeamByIdData: create.asyncThunk(
            async (id: number) => {
                return await getTeamByIdAPI(id)
            },
            {
                fulfilled: (state, action) => {
                    state.team = action.payload
                }
            }
        )
    }),
    selectors: {
        selectTeam: (app) => app.team,
        selectTeams: (app) => app.teams
    }
})
export const { getTeamsData, getTeamByIdData } = teamSlice.actions
export const { selectTeam, selectTeams } = teamSlice.selectors

