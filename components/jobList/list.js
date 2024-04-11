import config from "@config/config.json";
import dateFormat from "@lib/utils/dateFormat";
import Link from "next/link";
import axios from "axios";
import { getJobList } from "@remote/job";
import { useState, useEffect } from "react";
import Indicator from "@components/common/Indicator";

// const URL = `http://apis.data.go.kr/B552474/SenuriService/getJobList?serviceKey=${process.env.NEXT_PUBLIC_JOB_LIST_API}`;

const JobList = ({ filterData }) => {
  const { summary_length } = config.settings;

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const dateCompare = (date) => {
    let _today = new Date(); // 오늘
    let _date = new Date(date); // 비교날짜

    if (_today > _date) {
      return "end";
    } else {
      return "";
    }
  };

  const fetchData = async () => {
    try {
      setError(null);
      setData([]);
      setLoading(true);
      // const response = await axios.get(URL, {
      //   params: {
      //     numOfRows: 10,
      //     pageNo: 1,
      //   },
      // });
      let response = await getJobList(filterData);
      console.log(response);
      setData(response);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <Indicator />;
  if (error) return <div>Error...</div>;
  if (!data) return null;

  return (
    <div className={`row space-y-1 px-6`}>
      {data.map((item) => (
        <div className="job-list col-12" key={item.id}>
          <ul className="mb-4 mt-4 flex flex-wrap items-center space-x-3 text-text">
            <li>{item.plbizNm}</li>
            <li>{item.jobclsNm}</li>
            <li>접수방법 : {item.acptMthdTp.split("\n")[1]}</li>
          </ul>

          <h4 className="mb-2">
            <Link
              className="block hover:text-primary"
              href={`/jobList/detail?id=${item.id}`}
            >
              {item.recrtTitle}
            </Link>
          </h4>
          <p className="text-text">
            <span
              className={`job-state job-accepting ` + dateCompare(item.toDd)}
            >
              {dateCompare(item.toDd) ? "마감" : "접수중"}
            </span>
            <span>
              <span>
                신청기간 : {item.frDd} ~ {item.toDd}
              </span>
            </span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default JobList;
