import useConfirm from "@hooks/common/useConfirm";
import Link from "next/link";
import Image from "next/image";
import mainImage from "/public/images/main_searth_img.png";
import React from "react";
import Base from "@layouts/Baseof";
import JobList from "@components/jobList/list.js"
import { useState } from "react";

// 일자리 검색 화면
const About = () => {
  const { isConfirmed } = useConfirm();
  const [input, setInput] = useState();
  const [searchToggle, setSearchToggle] = useState(false);
  
  const inputChange = (e) => {
    setInput(e.target.value);
  }
  const showJobList = () => {
    setSearchToggle(true);
  }
  return (
    <Base>
      <section className="section">
        <div className="container text-center">
          {
            <div className="img-cover mb-8">
              <Image
                src={mainImage}
                width={920}
                height={515}
                alt="test"
                className="rounded-lg"
              />
            </div>
          }
          <div className="mb-6">
            <label className="mb-2 block h4" htmlFor="name">
              원하는 지역을 검색해보세요
            </label>
            <div className="w-full">
              <input
                className="form-input ipt-search-bar"
                name="name"
                type="text"
                onChange={inputChange}
                required
              />
              <button className="btn bg-indigo-600 px-6 py-3 text-white" onClick={showJobList}>검색</button>
            </div>
          </div>
          
          <div className="text-left">
            {searchToggle && <JobList filterData={input}/>}
          </div>
        </div>
      </section>
    </Base>
  );
};

export default About;
