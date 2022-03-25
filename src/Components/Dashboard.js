import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Data from "./Data"
import { useParams } from "react-router";
import DashboardCss from "../Components/Dashboard.css"
import Logo from "../Components/assets/frontlogo.png"

const Dashboard = () => {
  const [uname,setUname] = useState('')
  const [ucomp,setUcomp]=useState('')
  const [uDoj,setUDoj]=useState('')
  const [name,setName]=useState('')
  const {id} = useParams()
  
  const userdata = Data.filter((item)=>item.id ==id)
  useEffect(()=>{
    if(userdata){
      setUname(userdata[0].username)
      setUcomp(userdata[0].company)
      setUDoj(userdata[0].doj)
      setName(userdata[0].name)
      //console.log(userdata[0].username)
    }
  })
  return (
    <div className="dashboard-page">
      <Row>
        <Col className="left-col" xs={2}>
          <div className="employee-info">
            <img src={Logo} alt={uname} className="page-logo"/>
            <hr />
            <h5 className="name">Name:<span className="emp-name"> {name}</span></h5>
          </div>
        </Col>
        <Col className="right-col" xs={10}>

        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
