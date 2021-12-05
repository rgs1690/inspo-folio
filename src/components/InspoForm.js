import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import getCurrentUsersUid from '../helpers/getCurrentUserUID';
import { createInspo, updateInspo } from '../api/data/InspoData';

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
        history.push('/inspos');
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

  return (
    <div>
      <h1>INSPO FORM</h1>
      <Form onSubmit={handleClick}>
        <Form.Group className="mb-3" controlId="inspoTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control
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
            type="text"
            placeholder="why did this art inspire you?"
            value={formInput.inspoDescription || ''}
            onChange={(e) => handleChange(e)}
            name="inspoDescription"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          {obj.firebaseKey ? 'Update' : 'Add Inspos'}
        </Button>
        <Button variant="primary" type="button" onClick={handleAddAnotherInspo}>
          Add Another Inspo
        </Button>
      </Form>
    </div>
  );
}
InspoForm.propTypes = {
  obj: PropTypes.shape({}),
};
InspoForm.defaultProps = { obj: {} };
