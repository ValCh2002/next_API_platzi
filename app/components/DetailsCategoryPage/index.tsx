'use client';
import { getCategoryByIdData, selectCategory } from "@/lib/features/category/categorySlice";
import { getAllProductByCategoryData, selectProducts } from "@/lib/features/product/productSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
export const DetailsCategoryPage=React.memo(({id}:{id:number})=>{
    const category=useAppSelector(selectCategory)
    const products=useAppSelector(selectProducts)
    const dispatch=useAppDispatch()
    useEffect(()=>{
        dispatch(getCategoryByIdData(id))
        dispatch(getAllProductByCategoryData(id))

    },[])
    return <div>
        <h3>All Products Of {category.name}</h3>
        {products.map(elm=>{
            return  (<Card key={elm.id} style={{ width: '18rem', display: 'inline-block' }}>
            <Card.Body>
                <Card.Title><Link href={'/product/'+elm.id}>{elm.title}</Link>   </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Category - {elm.category?.name}</Card.Subtitle>
            </Card.Body>
        </Card>)
        })}
        </div>
})
