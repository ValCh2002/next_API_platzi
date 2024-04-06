'use client'
import { getBooksData, selectBooks } from "@/lib/features/books/bookSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import React, { useEffect } from "react";

export const ShowBooks=React.memo(()=>{
    const books=useAppSelector(selectBooks)
    const dispatch=useAppDispatch()
    useEffect(()=>{
        dispatch(getBooksData(''))
    },[])
return (<div>
        <h3>Show Books</h3>
        <div className="booksDiv">
            {books.map(elm=>{
                return <div key={elm.id}>
                    <h4>{elm.title}</h4>
                    <img src={elm.picUrl} alt="" />
                    <p>Author - {elm.author}</p>
                    
                </div>
            })}
        </div>

    </div>)
})