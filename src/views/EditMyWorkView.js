import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleMyWork } from '../api/data/myWorkData';
import MyWorkForm from '../components/MyWorkForm';

export default function EditMyWorkView() {
  const [editItem, setEditItem] = useState({});
  const { firebaseKey } = useParams();

  useEffect(() => {
    getSingleMyWork(firebaseKey).then(setEditItem);
  }, []);
  return (
    <div>
      <MyWorkForm obj={editItem} />
    </div>
  );
}
