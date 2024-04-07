'use client';
import { createCategoryData } from '@/lib/features/category/categorySlice';
import { useAppDispatch } from '@/lib/hooks';
import { ICategory } from '@/type/type';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
export const AddCategoryPage = React.memo(() => {
  const dispatch = useAppDispatch();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<ICategory>();
  const save = (data: ICategory) => {
    dispatch(createCategoryData(data));
  };
  return (
    <div>
      <h3>Add Category</h3>
      <form onSubmit={handleSubmit(save)}>
        <div className="inps">
          <Form.Control
            placeholder="Category Name"
            {...register('name', { required: 'Enter Category Name' })}
          />
          {errors.name && <p>{errors.name.message}</p>}
          <Form.Control
            placeholder="Category Picture URL"
            {...register('image', { required: 'Enter Category Picture URL' })}
          />
          {errors.image && <p>{errors.image.message}</p>}
          <Button variant="outline-dark">Add Category</Button>
        </div>
      </form>
    </div>
  );
});
