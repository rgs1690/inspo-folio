import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
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
      createMyWork({
        ...formInput,
        uid: currentUid,
        dateAdded: new Date(),
      }).then((firebaseKey) => {
        resetForm();
        history.push(`/newInspo/${firebaseKey}`);
      });
    }
  };
  const inputStyle = {
    width: '50em',
    marginRight: 'auto',
    marginLeft: 'auto',
    textAlign: 'center',
    backgroundColor: '#A9CEF4',
    fontWeight: 'bold',
    marginTop: '1em',
    border: '1px solid black',
  };
  const formStyle = {
    textAlign: 'center',
    color: '#E5ECF0',
    marginTop: '3em',
    marginBottom: '3em',
  };
  const btnStyle = {
    backgroundColor: '#597081',
    border: '1px solid black',
  };
  const ArtFormStyle = styled.div`
    h1 {
      margin-top: 1em;
      text-align: center;
      color: #e5ecf0;
    }
  `;
  return (
    <div>
      <ArtFormStyle>
        <h1>Add Your Art Here : </h1>
        <Form style={formStyle} onSubmit={handleClick}>
          <Form.Group className="mb-3" controlId="artTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              style={inputStyle}
              type="text"
              placeholder="Enter title"
              value={formInput.artTitle || ''}
              onChange={(e) => handleChange(e)}
              name="artTitle"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="artSize">
            <Form.Label> Size</Form.Label>
            <Form.Control
              style={inputStyle}
              type="text"
              placeholder="enter size"
              value={formInput.artSize || ''}
              onChange={(e) => handleChange(e)}
              name="artSize"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="artUrl">
            <Form.Label>Image URL</Form.Label>
            <Form.Control
              style={inputStyle}
              type="url"
              placeholder="enter url"
              value={formInput.artUrl || ''}
              onChange={(e) => handleChange(e)}
              name="artUrl"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="artMedium">
            <Form.Label>Medium</Form.Label>
            <Form.Control
              style={inputStyle}
              type="text"
              placeholder="enter medium"
              value={formInput.artMedium || ''}
              onChange={(e) => handleChange(e)}
              name="artMedium"
            />
          </Form.Group>
          <Button style={btnStyle} type="submit">
            {obj.firebaseKey ? 'Update' : 'Add Inspos'}
          </Button>
        </Form>
      </ArtFormStyle>
    </div>
  );
}

MyWorkForm.propTypes = {
  obj: PropTypes.shape({}),
};
MyWorkForm.defaultProps = { obj: {} };
