import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Data from "./Data"
import { useParams } from "react-router";
import DashboardCss from "../Components/Dashboard.css"
import Logo from "../Components/assets/frontlogo.png"
import {FaHouseUser,FaUser,FaFile,FaFileCsv,FaQuestion} from "react-icons/fa"

const Dashboard = () => {
  const [uname,setUname] = useState('')
  const [ucomp,setUcomp]=useState('')
  const [uDoj,setUDoj]=useState('')
  const [name,setName]=useState('')
  const {id} = useParams()
  
  const userdata = Data.filter((item)=>item.id == id)
  useEffect(()=>{
    if(userdata){
      setUname(userdata[0].username)
      setUcomp(userdata[0].company)
      setUDoj(userdata[0].doj)
      setName(userdata[0].name)
      //console.log(userdata)
    }
  })
  return (
    <div className="dashboard-page">
      <Row className="page-row">
        <Col className="left-col" xs={4} lg={2}>
          <div className="employee-info">
            <img src={Logo} alt={uname} className="page-logo"/>
            <hr />
            <h5 className="name">Name:<span className="emp-name"> {uname}</span></h5>
            <h5 className="name">Company:<span className="emp-name"> {ucomp}</span></h5>
            <h5 className="name">DOJ:<span className="emp-name"> {uDoj}</span></h5>
            <hr />
            <div className="page-section">
            <h5 className="menu-tab"><FaHouseUser /> Home</h5>
            <h5 className="menu-tab"><FaUser />My Profile</h5>
            <h5 className="menu-tab"><FaFile /> My Documents</h5>
            <h5 className="menu-tab"><FaFileCsv /> My Payslips</h5>
            <h5 className="menu-tab"><FaQuestion /> My Queries</h5>
            </div>
          </div>
        </Col>
        <Col className="right-col" xs={8} lg={10}>

        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
