'use client';
import {
  getCategoriesData,
  selectCategories,
} from '@/lib/features/category/categorySlice';
import {
  filterByCategoryData,
  filterProductMinMaxPriceData,
  getProductsData,
  seacrhProductByTitleData,
  selectProducts,
} from '@/lib/features/product/productSlice';

import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Card, Form, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Range } from 'react-range';
export const ShowProductsPage = React.memo(() => {
  const products = useAppSelector(selectProducts);
  const categories = useAppSelector(selectCategories);
  const dispatch = useAppDispatch();
  const [rangeValue, setRangeValue] = useState({
    minValue: 100,
    maxValue: 1000,
  });
  useEffect(() => {
    dispatch(getProductsData(''));
    dispatch(getCategoriesData(''));
  }, []);
  return (
    <div>
      <h3>Show Products</h3>
      <div style={{ display: 'flex', gap: '30px', marginLeft: '20px' }}>
      <h5>Filter By Price</h5>
        <p>Min - {rangeValue.minValue}</p>
        <p>Max - {rangeValue.maxValue}</p>
      </div>
      <Range
        step={1}
        min={0}
        max={1500}
        allowOverlap={true}
        values={[rangeValue.minValue, rangeValue.maxValue]}
        onChange={(values) => {
          console.log(values);
          setRangeValue({
            minValue: values[0],
            maxValue: values[1],
          });
          dispatch(
            filterProductMinMaxPriceData({ min: values[0], max: values[1] }),
          );
        }}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '6px',
              width: '30%',
              backgroundColor: 'black',
              margin: '15px',
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '15px',
              width: '15px',
              borderRadius: '15px',
              backgroundColor: '#fff',
              border: '3px solid',
            }}
          />
        )}
      />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '250px',
          margin: '20px',
          gap: '10px',
        }}
      >
        <Form.Control
          placeholder="Search By Title"
          onChange={(e) => {
            dispatch(seacrhProductByTitleData(e.target.value));
          }}
        />
        <Form.Select
          aria-label="Default select example"
          onChange={(e) => {
            dispatch(filterByCategoryData(e.target.value));
          }}
        >
          <option value="" hidden>
            All Categories
          </option>
          {categories.map((elm) => {
            return (
              <option key={elm.id} value={elm.id}>
                {elm.name}
              </option>
            );
          })}
        </Form.Select>
      </div>
      <div className="products">
        {products.map((elm) => {
          return (
            <Card
              key={elm.id}
              style={{ width: '18rem', display: 'grid', margin: '10px' }}
            >
              <Card.Img src={elm.images[0]} />
              <Card.Body>
                <Card.Title>
                  <Link href={'/product/' + elm.id}>{elm.title}</Link>{' '}
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Category - {elm.category?.name}
                </Card.Subtitle>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
});
