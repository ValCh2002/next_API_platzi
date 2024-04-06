'use client'
import { getTeamByIdData, selectTeam } from "@/lib/features/team/teamSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import React, { useEffect } from "react";

export const TeamDetails=React.memo(({ id }: { id: number })=>{
    const team=useAppSelector(selectTeam)
    console.log(team);
    
    const dispatch=useAppDispatch()
    useEffect(()=>{
        dispatch(getTeamByIdData(id))
    },[])
    return <div>
        <h3>Team Details</h3>
        <div className="detailsDiv">
                <h2>{team.name}</h2>
                <img src={team.flag} alt="" width={600}  />
                <h4>Fifa Code - {team.fifaCode}</h4>
            </div>
        </div>
})