import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Image from "next/image";

import mainImage from "/public/images/main_searth_img.png";
import bizMainImage from "/public/images/biz_main.png";
import Base from "@layouts/Baseof";
import JobList from "@components/jobList/list.js";
import { setBizUserYn } from "@store/user/user";

// 일자리 검색 화면
const Home = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  dispatch(setBizUserYn(router.query.bizUserYn));

  const [input, setInput] = useState();
  const [searchToggle, setSearchToggle] = useState(false);

  const inputChange = (e) => {
    setInput(e.target.value);
  };
  const showJobList = () => {
    setSearchToggle(true);
  };

  return (
    <Base>
      <section className="section">
        {router.query.bizUserYn == "N"
        ? <div className="container text-center">
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
              <label className="h4 mb-2 block" htmlFor="name">
                원하는 지역을 검색해보세요
              </label>
              <div className="w-full">
                <input
                  className="ipt-search-bar form-input"
                  name="name"
                  type="text"
                  onChange={inputChange}
                  required
                />
                <button
                  className="btn bg-indigo-600 px-6 py-3 text-white"
                  onClick={showJobList}
                >
                  검색
                </button>
              </div>
            </div>

            <div className="text-left">
              {searchToggle && <JobList filterData={input} />}
            </div>
          </div>
        : <div className="container text-center"><Image src={bizMainImage} width={887} height={750} alt="test" className="rounded-lg" /></div>
      }
      </section>
    </Base>
  );
};

export default Home;
