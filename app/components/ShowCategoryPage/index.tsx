'use client';
import {
  getCategoriesData,
  selectCategories,
} from '@/lib/features/category/categorySlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { Card } from 'react-bootstrap';
export const ShowCategoryPage = React.memo(() => {
  const categories = useAppSelector(selectCategories);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCategoriesData(''));
  }, []);
  return (
    <div>
      <h3>Show Category</h3>
      <div className="products">
        {categories.map((elm) => {
          return (
            <Card
              key={elm.id}
              style={{
                height: '280px',
                width: '18rem',
                display: 'inline-block',
                margin: '15px',
              }}
            >
              <Card.Img
                variant="top"
                src={elm.image}
                style={{ height: '180px' }}
              />
              <Card.Body>
                <Card.Title>{elm.name}</Card.Title>
                <Link href={'/categories/' + elm.id}>See More</Link>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
});
