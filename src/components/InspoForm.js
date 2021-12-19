import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { useHistory, useParams } from 'react-router-dom';
import getCurrentUsersUid from '../helpers/getCurrentUserUID';
import { createInspo, updateInspo } from '../api/data/inspoData';

const initialState = {
  artMedium: '',
  artSize: '',
  artUrl: '',
  inspoTitle: '',
  yearCompleted: '',
  uid: '',
  inspoDescription: '',
  inspoArtist: '',
};
const InspoFormStyle = styled.div`
  h1 {
    margin-top: 1em;
    text-align: center;
    color: #e5ecf0;
  }
`;
export default function InspoForm({ obj = {} }) {
  const history = useHistory();
  const currentUid = getCurrentUsersUid();
  const [formInput, setFormInput] = useState(initialState);
  const { firebaseKey } = useParams();
  useEffect(() => {
    if (obj.firebaseKey) {
      setFormInput({
        artMedium: obj.artMedium,
        artSize: obj.artSize,
        inspoTitle: obj.inspoTitle,
        inspoArtist: obj.inspoArtist,
        artUrl: obj.artUrl,
        uid: obj.uid,
        firebaseKey: obj.firebaseKey,
        yearCompleted: obj.yearCompleted,
        inspoDescription: obj.inspoDescription,
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
      updateInspo(formInput).then(() => {
        history.push('/inspos');
      });
    } else {
      createInspo({
        ...formInput,
        uid: currentUid,
        myWorkId: firebaseKey,
      }).then(() => {
        resetForm();
        history.push('/');
      });
    }
  };
  const handleAddAnotherInspo = () => {
    createInspo({
      ...formInput,
      uid: currentUid,
      myWorkId: firebaseKey,
    }).then(() => {
      resetForm();
    });
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
    marginRight: '1em',
  };
  return (
    <div>
      <InspoFormStyle>
        <h1>Add Your Inspirations Here: </h1>
        <Form style={formStyle} onSubmit={handleClick}>
          <Form.Group className="mb-3" controlId="inspoTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              style={inputStyle}
              type="text"
              placeholder="Enter title"
              value={formInput.inspoTitle || ''}
              onChange={(e) => handleChange(e)}
              name="inspoTitle"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="inspoArtist">
            <Form.Label>Artist Name</Form.Label>
            <Form.Control
              style={inputStyle}
              type="text"
              placeholder="Enter artist"
              value={formInput.inspoArtist || ''}
              onChange={(e) => handleChange(e)}
              name="inspoArtist"
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
          <Form.Group className="mb-3" controlId="yearCompleted">
            <Form.Label>Year Completed</Form.Label>
            <Form.Control
              style={inputStyle}
              type="text"
              placeholder="enter year at was completed"
              value={formInput.yearCompleted || ''}
              onChange={(e) => handleChange(e)}
              name="yearCompleted"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="inspoDescription">
            <Form.Label>
              Please explain how this work inspired your art
            </Form.Label>
            <Form.Control
              style={inputStyle}
              type="text"
              placeholder="why did this art inspire you?"
              value={formInput.inspoDescription || ''}
              onChange={(e) => handleChange(e)}
              name="inspoDescription"
            />
          </Form.Group>
          <Button style={btnStyle} type="submit">
            {obj.firebaseKey ? 'Update' : 'Submit'}
          </Button>
          {!obj.firebaseKey ? (
            <Button
              style={btnStyle}
              type="button"
              onClick={handleAddAnotherInspo}
            >
              Add Another Inspo
            </Button>
          ) : (
            ''
          )}
        </Form>
      </InspoFormStyle>
    </div>
  );
}
InspoForm.propTypes = {
  obj: PropTypes.shape({}),
};
InspoForm.defaultProps = { obj: {} };
