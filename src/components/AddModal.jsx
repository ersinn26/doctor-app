import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function Example({ showModal, handleClose, drName }) {
  //   const [showModal, setShow] = useState(false);

  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);

  const [patientName, setPatientName] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Appointment for {drName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Patient Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter patient name"
                onChange={(e) => setPatientName(e.target.value)}
                value={patientName}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDate">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="datetime-local"
                placeholder="Date"
                onChange={(e) => setDate(e.target.value)}
                value={date}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="text-center">
          <Button variant="success" type="submit">
            Save
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
