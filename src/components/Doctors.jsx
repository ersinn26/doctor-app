import Container from "react-bootstrap/Container";
import { doctorData } from "../helpers/data";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import AddModal from "./AddModal";
import { useState } from "react";

const Doctors = ({ setApps, apps }) => {
  const [showModal, setShow] = useState(false);
  const [drName, setDrName] = useState("");
  // console.log(doctorData);
  const addAppointment =(newAppo)=>{
    setApps([...apps,newAppo])
  }
  return (
    <Container>
      <h3 className="display-6 mb-3" style={{ color: "rgb(134,147,210)" }}>
        Our Doctors
      </h3>
      <Row>
        {doctorData.map(({ id, name, img, dep }) => (
          <Col xs={6} sm={4} lg={3} key={id}>
            <Image
              className="img-thumbnail doctor-img"
              src={img}
              alt={name}
              onClick={() => {
                setShow(true);
                setDrName(name);
              }}
            />
            <h5>{name}</h5>
            <p>{dep}</p>
          </Col>
        ))}
      </Row>
      <AddModal
        showModal={showModal}
        handleClose={() => setShow(false)}
        drName={drName}
        addAppointment={addAppointment}
      ></AddModal>
    </Container>
  );
};

export default Doctors;
