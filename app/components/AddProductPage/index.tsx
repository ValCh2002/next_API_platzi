'use client';
import {
  getCategoriesData,
  getCategoryByIdData,
  selectCategories,
  selectCategory,
} from '@/lib/features/category/categorySlice';
import { createProductData } from '@/lib/features/product/productSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { IProduct } from '@/type/type';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
export const AddProductPage = React.memo(() => {
  const categories = useAppSelector(selectCategories);
  const category = useAppSelector(selectCategory);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IProduct>();
  useEffect(() => {
    dispatch(getCategoriesData(''));
  }, []);
  const save = (data: IProduct) => {
    dispatch(
      createProductData({ ...data, category: category, images: [data.images] }),
    );
    reset();
  };
  return (
    <div>
      <h3>Add Product</h3>
      <form onSubmit={handleSubmit(save)}>
        <div className="inps">
          <Form.Control
            placeholder="Title"
            {...register('title', { required: 'Enter Title!!' })}
          />
          {errors.title && <p>{errors.title.message}</p>}
          <Form.Control
            placeholder="Price"
            {...register('price', { required: 'Enter Price!!' })}
          />
          {errors.price && <p>{errors.price.message}</p>}
          <Form.Control
            placeholder="Description"
            {...register('description', { required: 'Enter Description!!' })}
          />
          {errors.description && <p>{errors.description.message}</p>}
          <Form.Control
            placeholder="Image URL"
            {...register('images', { required: 'Enter Image URL!!' })}
          />
          {errors.images && <p>{errors.images.message}</p>}
          <Form.Select
            {...register('categoryId', { required: 'Choose Category' })}
            onChange={(e) => {
              dispatch(getCategoryByIdData(e.target.value));
            }}
          >
            <option value="" hidden>
              Choose Category
            </option>
            {categories.map((elm) => {
              return (
                <option key={elm.id} value={elm.id}>
                  {elm.name}
                </option>
              );
            })}
          </Form.Select>
          {errors.categoryId && <p>{errors.categoryId.message}</p>}
          <Button variant="outline-dark">Add Product</Button>
        </div>
      </form>
    </div>
  );
});
