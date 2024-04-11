import Base from "@layouts/Baseof";
import config from "@config/config.json";
import dateFormat from "@lib/utils/dateFormat";
import { humanize, slugify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";
import MapComponent from "@components/common/Map";
import { getJobInfo } from "@remote/job";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import companyImage from "/public/images/icon-home.png";
import mapImage from "/public/images/icon-map2.png";
import telImage from "/public/images/icon-gtel.png";
import internetImage from "/public/images/icon-com.png";
// const URL = `http://apis.data.go.kr/B552474/SenuriService/getJobInfo?serviceKey=${process.env.NEXT_PUBLIC_JOB_LIST_API}`;

const JobDetail = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const route = useRouter();
    const { id } = route.query;

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

            const response = await getJobInfo(id);
            console.log(response);
            setData(response);
        } catch (e) {
            setError(e);
        }
        setLoading(false);
    };

  // 접수페이지로 이동
  const handleReceipt = () => {
    route.push(
      {
        pathname: "/receipt",
        query: { jobId: id },
      },
      "/receipt"
    );
  };

    useEffect(() => {
        fetchData();
    }, []);

  return (
    <Base>
      <section className="section">
        <div className="container">
          <div className={`row space-y-1`}>
            <div className="board-list">
              <ul className="board-list-item">
                <li className="board-list-title">
                  <div className="view">
                    <strong>
                      <span className="pr-4">
                        {data.plbizNm ? data.plbizNm : "-"}
                      </span>
                      <span
                        className={
                          `job-state job-accepting pt-2 ` +
                          dateCompare(data.toDd)
                        }
                      >
                        {dateCompare(data.toDd) ? "마감" : "접수중"}
                      </span>
                    </strong>
                    
                    {dateCompare(data.toDd)
                    ? <div className="icon none">
                        <div className="icon-box c-pur">
                          <button
                          className="btn btn-primary w-full"
                          onClick={handleReceipt}
                          >
                            접수하기
                          </button>
                        </div>
                      </div>
                    :  <div className="icon">
                          <div className="icon-box c-pur">
                            <button
                            className="btn btn-primary w-full"
                            onClick={handleReceipt}
                          >
                            접수하기
                            </button>
                            </div>
                        </div>}
                    <div className={dateCompare(data.toDd) ? "icon none" : "icon"}>
												<div className="icon-box c-pur">
                          <button
                          className="btn btn-primary w-full"
                          onClick={handleReceipt}
                        >
                          접수하기
                        </button>
												</div>
							      </div>
                  </div>
                  <div className="view-detail">
                    <div className="txt">
                      <ul>
                        <li>
                        <div className="txt-i">
                            <Image
                              src={companyImage}
                              width={30}
                              height={30}
                              alt="test"
                              className="rounded-lg"
                            />
                          </div>
                        <div className="txt-t">
                          <span>사업체명</span>
                          <strong>{data.oranNm ? data.oranNm : "-"}</strong>
                        </div>
                        </li>
                        <li>
                        <div className="txt-i">
                            <Image
                              src={mapImage}
                              width={30}
                              height={30}
                              alt="test"
                              className="rounded-lg"
                            />
                          </div>
                        <div className="txt-t">
                          <span>주소</span>
                          <strong>
                              {data.plDetAddr ? data.plDetAddr : "-"}
                            </strong>
                        </div>
                        </li>
                        <li>
                          <div className="txt-i">
                            <Image
                              src={telImage}
                              width={30}
                              height={30}
                              alt="test"
                              className="rounded-lg"
                            />
                          </div>
                          <div className="txt-t">
                            <span>연락처</span>
                            <strong>
                              {data.clerkContt ? data.clerkContt : "-"}
                            </strong>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="tbl-view">
                    <div className="tbl-row">
                      <div className="tbl-th">구인사항</div>
                      <div className="tbl-td">
                        <span className="tbl-view-tit">
                          {data.plbizNm ? data.plbizNm : "-"}
                        </span>
                        <dl>
                          <dt>· 근무지역</dt>
                          <dd>사업장 내</dd>
                        </dl>
                        <dl>
                          <dt>· 직무내용</dt>
                          <dd>{data.recrtTitle ? data.recrtTitle : "-"}</dd>
                        </dl>
                      </div>
                      <div className="tbl-td td-dt">
                        <span className="dt">
                          시작접수일 ㅣ {data.frDd ? data.frDd : "-"}
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="tbl-view">
                    <div className="tbl-row">
                      <div className="tbl-th">근로조건</div>
                      <div className="tbl-td">
                        <dl>
                          <dt>· 모집인원</dt>
                          <dd>
                            <span>
                              {data.clltPrnNum ? data.clltPrnNum : "0"}
                            </span>{" "}
                            명
                          </dd>
                        </dl>
                        <dl>
                          <dt>· 상세내용</dt>
                          <dd>{data.detCnts ? data.detCnts : "-"}</dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="tbl-view">
                    <div className="tbl-row">
                      <div className="tbl-th">전형사항</div>
                      <div className="tbl-td">
                        <dl>
                          <dt>· 접수마감일자</dt>
                          <dd>{data.toDd ? data.toDd : "-"}</dd>
                        </dl>
                        <dl>
                          <dt>· 구인담당자</dt>
                          <dd>
                            성명 : <span>{data.repr ? data.repr : "-"}</span> /
                            연락처 :
                            <span>
                              {data.reprPhoneNum ? data.reprPhoneNum : "-"}
                            </span>
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <MapComponent zipAddr={data.plDetAddr} zipName={data.plbizNm} />
          </div>
        </div>
      </section>
    </Base>
  );
};

export default JobDetail;
