'use client';
import { createUserData } from '@/lib/features/user/userSlice';
import { useAppDispatch } from '@/lib/hooks';
import { IUser } from '@/type/type';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
export const AddUserPage = React.memo(() => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IUser>();
  const save = (data: IUser) => {
    dispatch(createUserData(data));
    reset();
  };
  return (
    <div>
      <h3>Add User</h3>
      <form onSubmit={handleSubmit(save)}>
        <div className="inps">
          <Form.Control
            placeholder="Name"
            {...register('name', { required: 'Enter Name' })}
          />
          {errors.name && <p>{errors.name.message}</p>}
          <Form.Control
            placeholder="Email"
            {...register('email', { required: 'Enter Email' })}
          />
          {errors.email && <p>{errors.email.message}</p>}
          <Form.Control
            placeholder="Password"
            {...register('password', { required: 'Enter Paswword' })}
          />
          {errors.password && <p>{errors.password.message}</p>}
          <Form.Control
            placeholder="Image URL"
            {...register('avatar', { required: 'Enter Image URL' })}
          />
          {errors.avatar && <p>{errors.avatar.message}</p>}
          <Button variant="outline-dark">Add User</Button>
        </div>
      </form>
    </div>
  );
});
