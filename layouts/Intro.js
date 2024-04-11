import Button from "@components/common/Button";
import Base from "./Baseof";
import Link from "next/link";
import Image from "next/image";
import greenImage from "/public/images/btn_go_green.png";
import blueImage from "/public/images/btn_go_blue_green.png";

const Intro = () => {
    return (
        <div id="gate_body">
            <div id="gate_container">
                <div className="gate_layout">
                    <div className="gate_contents">
                        <div className="gate_box">
                            <h1 className="gate_title">일자리 신청하기</h1>
                            <div className="gate_inbox">
                                <h2 className="gate_title_sub color_green">노인일자리 검색 및 지원</h2>
                                <div className="gate_list">
                                    <ul>
                                        <li>일자리 검색 및 조회</li>
                                        <li>전국수행기관 조회</li>
                                        <li>나의 접수내역</li>
                                    </ul>
                                </div>
                                <div className="gate_btn_area">
                                    <Link
                                        href={{
                                            pathname: `/home`,
                                            query: { bizUserYn: "N" }, // props
                                        }}
                                        >
                                        <Image src={greenImage} width={220} height={70} alt="일자리 신청하기 바로가기" className="rounded-lg"/>
                                    </Link>
                                </div>
                                <div className="gate_info color_orange_red"><strong>&quot;</strong>일자리를 부.탁.해.<strong>&quot;</strong></div>
                            </div>
                        </div>
                        <div className="gate_box">
                            <h1 className="gate_title">일자리 등록 (기업)</h1>
                            <div className="gate_inbox">
                                <h2 className="gate_title_sub color_blue_green">노인일자리 구인공고 등록</h2>
                                <div className="gate_list">
                                    <ul>
                                        <li>구직 신청자 선정</li>
                                        <li>구인공고 등록</li>
                                        <li></li>
                                    </ul>
                                </div>
                                <div className="gate_btn_area">
                                    <Link
                                        href={{
                                            pathname: `/home`,
                                            query: { bizUserYn: "Y" }, // props
                                        }}
                                        >
                                        <Image src={blueImage} width={220} height={70} alt="일자리 신청하기 바로가기" className="rounded-lg"/>
                                    </Link>
                                </div>
                                <div className="gate_info color_blue_green"><strong>&quot;</strong>기업전용 서비스<strong>&quot;</strong></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Intro;
