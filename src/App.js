import "./App.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import * as React from "react";
import {useState} from "react";
import AccordianComponent from "./components/AccordianComponent";
import jobType from "./components/jobType";
import { useNavigate } from "react-router-dom";

export default function App() {
	
  const [expandedPanel, setExpandedPanel] = useState(false);
  let jobTypeData = jobType;
  const navigate = useNavigate();

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    console.log({ event, isExpanded });
    setExpandedPanel(isExpanded ? panel : false);
  };
   
  const [checkedJT, setCheckedJT] = useState({
    jobTypes: []
  });

  const handleOnChange = (e) => {
	// Destructuring
    const { value, checked } = e.target;
    const { jobTypes } = checkedJT;
      
    console.log(`${value} is ${checked}`);
     
    // Case 1 : The user checks the box
    if (checked) {
      setCheckedJT({
        jobTypes: [...jobTypes, value],
      });
    }
  
    // Case 2  : The user unchecks the box
    else {
      setCheckedJT({
        jobTypes: jobTypes.filter((e) => e !== value),
      });
    }
  };
    
  return (
    <div>
      <nav className="navbar navbar-custom navbar-shrink oldNav">
        <div className="container">
          <div className="row">
            <span className="quikrLogo">
              <a href="https://www.quikr.com/jobs/" className="home-logo">
                <img
                  height="39px"
                  alt="quikr-jobs-logo"
                  src="https://teja10.kuikr.com/images/jobs/quikr-jobs-logo.1634653573.png"
                  style={{ display: "inline" }}
                />
              </a>
            </span>
          </div>
        </div>
      </nav>
      <div className="bodyM">
        <div className="showResult">
          <div className="pull-left">
            <span className="display-contents">
              Showing results 31732 for{" "}
              <b> BPO/ Telecaller Jobs in India - June, 2022</b>
            </span>
          </div>
        </div>
        <div className="sidenav">
          <div className="f-heading">
            <i className="icon-filter" id="icon-filter">
              Filter Jobs
            </i>
          </div>
          <Accordion expanded={expandedPanel === 'panel1'} onChange={handleAccordionChange('panel1')} >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Job Type</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
			   <ul className="toppings-list">
              {jobTypeData.map(({ name, id }, index) => {
          return (
            <li key={index}>
              <div className="toppings-list-item">
                <div className="left-section">
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={name}
                    value={name}
					onChange={handleOnChange}
                  />
                  <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                </div>
              </div>
            </li>
          );
        })}
		</ul>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion expanded={expandedPanel === 'panel2'} onChange={handleAccordionChange('panel2')} >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Monthly Salary</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
           <Accordion expanded={expandedPanel === 'panel3'} onChange={handleAccordionChange('panel3')} >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Company</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>

        <div style={{marginTop:'45px', width:'70%'}}>
		<AccordianComponent checkedValue={checkedJT}/>
           
        </div>
      </div>
    </div>
  );
}
