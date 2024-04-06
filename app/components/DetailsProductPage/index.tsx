'use client';
import { getProductByIdData, selectProduct } from "@/lib/features/product/productSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import { Card, Carousel } from "react-bootstrap";
export const DetailsProductPage = React.memo(({ id }: { id: number }) => {
    const product = useAppSelector(selectProduct)
    const dispatch = useAppDispatch()
    console.log(product);
    useEffect(() => {
        dispatch(getProductByIdData(id))
    }, [])

    return <div>
        <h3>Details Product</h3>
        <Card style={{ width: '18rem', margin:'auto' }}>
            <Carousel>
                {product.images?.map((elm, i) => {
                    return (<Carousel.Item key={i}>
                        <Card.Img key={i} variant="top" src={elm} alt="image not found" />

                    </Carousel.Item>)
                })}
            </Carousel>
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.price}$</Card.Text>
                <Card.Text> {product.description}</Card.Text>
            </Card.Body>
        </Card>
    </div>
})
