import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import contentData from "./contentData";
import { useNavigate } from "react-router-dom";

export default function AccordianComponent(props) {
  let tempData = contentData;
  const [accData, setAccData] = useState([]);
  const [flag, setFlag] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    let contItem = [];
    let urlString = "";
    if (props.checkedValue.jobTypes.length > 0) {
      let checkedItems = props.checkedValue.jobTypes;

      checkedItems.map((itemO, indexO) => {
        tempData.map((itemI, indexI) => {
          if (itemO.match(itemI.jobType)) {
            contItem.push(itemI);
            if (urlString != "") {
              let splitValue = urlString.split(",");
              if (!splitValue.includes(itemI.jobType)) {
                urlString = urlString + "_" + itemI.jobType;
              }
            } else {
              urlString = itemI.jobType;
            }
          }
        });
      });
      contItem = [...new Set(contItem)];
      setAccData(contItem);

      urlString = urlString.replace(/\s+/g, "-");
      const url = `/${urlString}`;
      navigate(url);
    } else {
      setAccData(tempData);
      navigate(`/`);
    }
  }, [props.checkedValue]);

  return accData.map((item, index) => {
    return (
      <div key={index + 1} style={{ marginBottom: "10px" }}>
        <Accordion expanded={flag}>
          <AccordionSummary>
            <Typography style={{ color: "#87CEEB", fontWeight: "bold" }}>
              {item.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div className="ls-jobs">
              <div className="row">
                <div className="salary col-lg-3 col-md-6 col-xs-6 nopadding">
                  <i className="icon-salary iSize gray-light"></i>
                  <div className="inlineBlock lineH mlAuto attributeSection">
                    <div className=" gray-light attributesVal textCaps ">
                      Monthly
                    </div>
                    <div className="perposelSalary attributeVal">
                      12,000 - 22,000
                    </div>
                  </div>
                </div>

                <div className="m-salary col-lg-3 col-md-6 col-xs-6 nopadding">
                  <i className="icon-employer iSize gray-light"></i>
                  <div className="inlineBlock lineH mlAuto attributeSection">
                    <div className="gray-light attributesVal textCaps">
                      Job Type
                    </div>
                    <div className="attributeVal">Full Time Jobs</div>
                  </div>
                </div>

                <div className="salary col-lg-3 col-md-6 col-xs-6 nopadding">
                  <i
                    className="icon-company iSize gray-light"
                    id="icon-company"
                  ></i>
                  <div className="inlineBlock mlAuto attributeSection">
                    <div className=" gray-light attributesVal textCaps">
                      Company
                    </div>
                    <div
                      className="attributeVal cursor-default"
                      title="Commque Technologies Pvt Ltd"
                    >
                      Commque Technologies Pvt Ltd{" "}
                    </div>
                  </div>
                </div>

                <div className="lstExperience col-lg-3 col-md-6 col-xs-6 nopadding">
                  <i className="icon-clock iSize gray-light"></i>
                  <div className="inlineBlock lineH mlAuto">
                    <div className=" gray-light attributesVal textCaps ">
                      Experience
                    </div>
                    <div>0 - 3 yrs </div>
                  </div>
                </div>
              </div>

              <div className="location msM10">
                <div className="categories">
                  <i className="icon-user1 gray-light"></i>
                  BPO/ Telecaller
                  <span className="subRoles gray-light hidden-xs hidden-sm">
                 
                    -<span>Incoming, Outgoing, Domestic, Voice</span>
                  </span>
                </div>
              </div>

              <div className="loc mSiteBlock">
                <i
                  className="icon-basic_geolocalize-01 gray-light"
                  id="icon-basic_geolocalize-01"
                ></i>
                <span>
                  <span className="city">
                    <b>Thane</b>
                  </span>{" "}
                  <span className="gray-light hidden-sm hidden-xs">
                    - Kalwa, Diva, Dombivli, Ulhasnagar
                    <span
                      className="jsHiddenLocality cursor-default"
                      title=",  Shahad"
                      data-value=",  Shahad"
                    >
                      &nbsp;+ 1 more
                    </span>
                  </span>
                </span>
              </div>

              <div className="cta-date-verify">
                <div className="col-sm-7">
                  <div className="postedBy gray small">
                    <div>
                      Posted by{" "}
                      <strong className="cursor-default" title="Individual">
                        Individual
                      </strong>
                    </div>
                    <div className="jsPostedOn">13 Jun 2022, 11:52 AM</div>
                  </div>

                  <div className="trustBadges"></div>
                </div>
                <hr className="clearfix visible-xs mhr" />
                <div className="col-md-5 text-right">
                  <div className="row">
                    <div className="iconVerified">
                      <span className="iconVerifiedTick icon-tick"></span>
                      <span
                        className="verifiedm"
                        title="This mobile number is verified"
                      >
                        {" "}
                        Phone verified{" "}
                      </span>
                    </div>
                    <button className="btn btn-primary apply-btton" data-qa="0">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    );
  });
}
