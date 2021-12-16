import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleInspo } from '../api/data/inspoData';
import InspoForm from '../components/InspoForm';

export default function EditInspoView() {
  const [editItem, setEditItem] = useState({});
  const { firebaseKey } = useParams();
  useEffect(() => {
    getSingleInspo(firebaseKey).then(setEditItem);
  }, []);
  return (
    <div>
      <InspoForm obj={editItem} />
    </div>
  );
}
