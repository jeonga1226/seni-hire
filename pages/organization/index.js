import { useSelector } from "react-redux";
import axios from "axios";
import { useState, useEffect } from "react";
import Base from "@layouts/Baseof";
import OrganizationSearch from "@components/organization/OrganizationSearch";
import Organization from "@components/organization/List";
import UseAlert from "@hooks/common/useAlert";
const OrganizationPage = () => {
  const searchObject = useSelector(
    (state) => state.orgReducer.organization.searchObject
  );
  const [orgList, setOrgList] = useState([]);
  const { isAlert } = UseAlert();
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://apis.data.go.kr/B552474/OdsnCodeInquiryService2/getOdsnAreaCodeInquiryList2",
        {
          params: {
            numOfRows: 99,
            pageNo: 1,
            contRegnStr1: searchObject.sido,
            contRegnStr2: searchObject.sigungu,
            serviceKey: process.env.NEXT_PUBLIC_ORG_API,
          },
        }
      );
      if (response.data.response.body.items === "") {
        return isAlert("검색 결과가 없습니다.");
      }
      const orgLists = await axios.get(
        "https://apis.data.go.kr/B552474/JobBsnInfoService/getJobOperInsttList",
        {
          params: {
            numOfRows: 99,
            pageNo: 1,
            dstrCd1: searchObject.sido
              ? response.data.response.body.items !== ""
                ? response.data.response.body.items?.item[0].contRegnStr1Code
                : ""
              : "",
            dstrCd2: searchObject.sigungu
              ? response.data.response.body.items?.item.contRegnStr2Code
              : "",
            serviceKey: process.env.NEXT_PUBLIC_ORG_API,
          },
        }
      );
      setOrgList(
        Array.isArray(orgLists.data.response.body.items.item)
          ? orgLists.data.response.body.items.item
          : orgLists.data.response.body.items.item == undefined
          ? []
          : [orgLists.data.response.body.items.item]
      );
    };
    fetchData();
  }, [searchObject]);
  return (
    <Base>
      <OrganizationSearch></OrganizationSearch>
      <section className="section">
        <div className="container">
          <Organization organizationList={orgList}></Organization>
        </div>
      </section>
    </Base>
  );
};

export default OrganizationPage;
