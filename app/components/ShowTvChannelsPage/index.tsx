'use client'
import { getTvChannelsData, selectTvChannels } from "@/lib/features/tvChannel/tvChannelSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Link from "next/link";
import React, { useEffect } from "react";

export const ShowTvChannels=React.memo(()=>{
    const tvChannels=useAppSelector(selectTvChannels)
    const dispatch=useAppDispatch()
    useEffect(()=>{
        dispatch(getTvChannelsData(''))
    },[])
    return <div>
        <h3>Show Tv Channels</h3>
        <div className="glxDiv">
            {tvChannels.map(elm => {
                return (
                    <div key={elm.id}>
                    <h4>{elm.name}</h4>
                    <img src={elm.icon} width={120} alt="" />
                    <p><Link href={'/tvChannels/'+elm.id}>See TV Channel</Link></p>
                </div>
                )
            })}
        </div>
        </div>
})