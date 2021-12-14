import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';

export default function Forms({
  width,
  backgroundColor,
  border,
  color,
  margin,
}) {
  const formStyle = {
    width,
    backgroundColor,
    textAlign: 'center',
  };
  const formControlStyle = {
    border,
    textAlign: 'center',
  };
  const labelStyle = {
    color,
  };
  const btnStyle = {
    margin,
  };
  return (
    <Form style={formStyle}>
      <Form.Group className="mb-3" controlId="inspoTitle">
        <Form.Label style={labelStyle}>Title</Form.Label>
        <Form.Control
          style={formControlStyle}
          type="text"
          placeholder="Enter title"
          name="inspoTitle"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="inspoArtist">
        <Form.Label style={labelStyle}>Artist Name</Form.Label>
        <Form.Control
          style={formControlStyle}
          type="text"
          placeholder="Enter artist"
          name="inspoArtist"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="artSize">
        <Form.Label style={labelStyle}> Size</Form.Label>
        <Form.Control
          style={formControlStyle}
          type="text"
          placeholder="enter size"
          name="artSize"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="artUrl">
        <Form.Label style={labelStyle}>Image URL</Form.Label>
        <Form.Control
          style={formControlStyle}
          type="url"
          placeholder="enter url"
          name="artUrl"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="artMedium">
        <Form.Label style={labelStyle}>Medium</Form.Label>
        <Form.Control
          style={formControlStyle}
          type="text"
          placeholder="enter medium"
          name="artMedium"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="yearCompleted">
        <Form.Label style={labelStyle}>Year Completed</Form.Label>
        <Form.Control
          style={formControlStyle}
          type="text"
          placeholder="enter year at was completed"
          name="yearCompleted"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="inspoDescription">
        <Form.Label style={labelStyle}>
          Please explain how this work inspired your art
        </Form.Label>
        <Form.Control
          style={formControlStyle}
          type="text"
          placeholder="why did this art inspire you?"
          name="inspoDescription"
        />
      </Form.Group>
      <div>
        <Button style={btnStyle} variant="primary" type="submit">
          Submit
        </Button>
        <Button style={btnStyle} variant="primary" type="button">
          Add Another Inspo
        </Button>
      </div>
    </Form>
  );
}
Forms.propTypes = {
  backgroundColor: PropTypes.string,
  border: PropTypes.string,
  color: PropTypes.string,
  width: PropTypes.string,
  margin: PropTypes.string,
};
Forms.defaultProps = {
  backgroundColor: '',
  border: '',
  color: '',
  width: '',
  margin: '',
};
