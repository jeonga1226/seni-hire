import Base from "@layouts/Baseof";
import List from "@components/applicant/ApplicantList";
import { GetapplicantList } from "@remote/receipt";
import { useState, useEffect } from "react";
const ApplicantList = () => {
  const [ApplicantList, setApplicantList] = useState([]);
  useEffect(() => {
    GetapplicantList("123123123").then((res) => {
      console.log(res);
      setApplicantList(res);
    });
  }, []);
  return (
    <Base>
      <section className="section">
        <div className="container">
          <List ApplicantList={ApplicantList}></List>
        </div>
      </section>
    </Base>
  );
};

export default ApplicantList;
