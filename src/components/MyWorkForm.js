import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import getCurrentUsersUid from '../helpers/getCurrentUserUID';
import { createMyWork, updateMyWork } from '../api/data/myWorkData';

const initialState = {
  artMedium: '',
  artSize: '',
  artTitle: '',
  artUrl: '',
  uid: '',
};
export default function MyWorkForm({ obj = {} }) {
  const history = useHistory();
  const currentUid = getCurrentUsersUid();
  const [formInput, setFormInput] = useState(initialState);
  useEffect(() => {
    if (obj.firebaseKey) {
      setFormInput({
        artMedium: obj.artMedium,
        artSize: obj.artSize,
        artTitle: obj.artTitle,
        artUrl: obj.artUrl,
        uid: obj.uid,
        firebaseKey: obj.firebaseKey,
      });
    }
  }, [obj]);

  const handleChange = (e) => {
    setFormInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const resetForm = () => {
    setFormInput(initialState);
  };
  const handleClick = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      updateMyWork(formInput).then(() => {
        history.push('/');
      });
    } else {
      createMyWork({ ...formInput, currentUid, dateAdded: new Date() });
      resetForm();
      history.push('/');
    }
  };
  return (
    <div>
      <Form onSubmit={handleClick}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            value={formInput.artTitle || ''}
            onChange={(e) => handleChange(e)}
            name="artTitile"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label> Size</Form.Label>
          <Form.Control
            type="text"
            placeholder="enter size"
            value={formInput.artSize || ''}
            onChange={(e) => handleChange(e)}
            name="artSize"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Image URL</Form.Label>
          <Form.Control
            type="url"
            placeholder="enter url"
            value={formInput.artUrl || ''}
            onChange={(e) => handleChange(e)}
            name="artUrl"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Medium</Form.Label>
          <Form.Control
            type="text"
            placeholder="enter medium"
            value={formInput.artMedium || ''}
            onChange={(e) => handleChange(e)}
            name="artMedium"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

MyWorkForm.propTypes = {
  obj: PropTypes.shape({}),
};
MyWorkForm.defaultProps = { obj: {} };
