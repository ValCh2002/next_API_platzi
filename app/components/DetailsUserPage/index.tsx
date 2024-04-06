'use client';
import { getUserByIdData, selectUser } from '@/lib/features/user/userSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
export const DetailsUserPage = React.memo(({ id }: { id: number }) => {
  const user = useAppSelector(selectUser);
  console.log(user);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getUserByIdData(id));
  }, []);
  return (
    <div>
      <h3>Details User</h3>
      <Row xs={1} md={2} className="g-4">
        {Array.from({ length: 1 }).map((_, idx) => (
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" src={user.avatar} />
              <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Card.Text>{user.email}</Card.Text>
                <Card.Text>{user.role}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
});
