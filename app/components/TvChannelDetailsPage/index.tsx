'use client'
import { getTvChannelByIdData, selectTvChannel } from "@/lib/features/tvChannel/tvChannelSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import React, { useEffect } from "react";

export const TvChannelsDetails=React.memo(({ id }: { id: number })=>{
    const tvChannel=useAppSelector(selectTvChannel)
    const dispatch = useAppDispatch()
    useEffect(()=>{
        dispatch(getTvChannelByIdData(id))
    },[])
    return <div>
        <h3>Tv Channel Details</h3>
        <div className="detailsDiv">
                <h2>{tvChannel.name}</h2>
                <img src={tvChannel.icon} alt="" width={600}  />
                <h4>Country - {tvChannel.country}</h4>
                <p>Language - {tvChannel.lang}</p>
            </div>
        
        </div>
})