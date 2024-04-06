'use client'
import { getTeamsData, selectTeams } from "@/lib/features/team/teamSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Link from "next/link";
import React, { useEffect } from "react";

export const ShowTeams=React.memo(()=>{
    const teams=useAppSelector(selectTeams)
    const dispatch=useAppDispatch()
    useEffect(()=>{
        dispatch(getTeamsData(''))
    },[])
    return <div>
        <h3>Show Teams</h3>
        <div className="glxDiv">
            {teams.map(elm=>{
                return <div key={elm.id}>
                    <h4>{elm.fifaCode}</h4>
                    <img src={elm.flag} width={120} alt="" />
                    <p><Link href={'/team/'+elm.id}>See Team</Link></p>
                </div>
            })}
        </div>
        </div>
})