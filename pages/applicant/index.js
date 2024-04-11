import React, { useRef } from "react";
import { useRouter } from "next/router";

import Base from "@layouts/Baseof";
import ApplicantSearch from "@components/applicant/ApplicantSearch";

const Application = () => {
  const setList = () => {
    // 리스트 조회
  };

  return (
    <Base>
      <ApplicantSearch searchApplicantList={setList} />
      <section className="section">
        <div className="container">{/* 리스트 영역 */}</div>
      </section>
    </Base>
  );
};

export default Application;
