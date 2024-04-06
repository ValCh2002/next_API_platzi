'use client'
import { getStadiumsData, selectStadiums } from "@/lib/features/stadium/stadiumSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Link from "next/link";
import React, { useEffect } from "react";

export const ShowStadiums = React.memo(() => {
    const stadiums = useAppSelector(selectStadiums)
    const dispatch = useAppDispatch()
    console.log(stadiums);

    useEffect(() => {
        dispatch(getStadiumsData(''))
    }, [])
    return <div>
        <h3>Show Stadiums</h3>
        <div className="glxDiv">
            {stadiums.map(elm => {
                return (
                    <div key={elm.id}>
                        <h4>{elm.name}</h4>
                        <p>City - {elm.city}</p>
                        <p><Link href={'/stadiums/'+elm.id}>See Stadium</Link></p>
                    </div>
                )
            })}
        </div>

    </div>
})