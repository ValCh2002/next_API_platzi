'use client'
import { getStadiumByIdData, selectStadium } from "@/lib/features/stadium/stadiumSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

export const StadiumDetails=React.memo(({ id }: { id: number })=>{
    const stadium=useAppSelector(selectStadium)
    console.log(stadium);
    
    const dispatch=useAppDispatch()
    useEffect(()=>{
        dispatch(getStadiumByIdData(id))
    },[])
    return <div>
        <h3>Stadium Details</h3>
            <div className="detailsDiv">
                <h2>{stadium.name}</h2>
                <img src={stadium.image} alt="" width={600}  />
                <h4>City - {stadium.city}</h4>
            </div>
        </div>
})