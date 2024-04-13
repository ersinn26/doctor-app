import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/Col"
import {TiDelete,  TiTick } from "react-icons/ti"


const AppointmentList = ({apps,setApps}) => {
  const handleDelete = (id) => {
    setApps(apps.filter(appo => appo.id!== id))
  }
  const handleToggle = (id) => {
    setApps(apps?.map(appo => appo.id === id ? {...appo, consulted: !appo.consulted} : appo))
  }


  return (
    <Container className="p-2">
      <h3 className="display-6 mb-2" style={{ color: "rgb(134,147,210)" }}>
        Appointment List
      </h3>
      {
        apps?.length?( apps.map(({id,patient,day,doctor,consulted}) =>(
        <Row key={id}
         className={"appointments justify-content-between align-items-center mx-auto " + (consulted ? "consulted" : "")} >
        <Col>
        <h4>{patient}</h4>
        <h5>{doctor}</h5>
        </Col>
        <Col >
        <h4>Date:{new Date(day).toLocaleDateString()}</h4>
        <h5>Time:{new Date(day).toLocaleTimeString()}</h5>
        </Col>
        
        <Col className="text-end">
        <TiTick type="button" className="text-success display-2" onClick={()=>handleToggle(id)}></TiTick>
        <TiDelete type="button" className="text-danger display-2" onClick={()=>handleDelete(id)}></TiDelete>
        </Col>
        </Row>))): (
          <img src="./img/appointment.jpg" width="70%" alt="" />
        )}
    </Container>
  )
}

export default AppointmentList
