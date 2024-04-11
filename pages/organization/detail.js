import Base from "@layouts/Baseof";
import OrganizationDetail from "@components/organization/OrganizationDetail";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import Map from "@components/common/Map";
const Detail = () => {
  const route = useRouter();
  const { id } = route.query;
  const [organizationInfo, setOrganizationInfo] = useState({
    zipAddr: "서울특별시 강남구 봉은사로108길 33",
  });

  useEffect(() => {
    const fetchOrganizationInfo = async () => {
      if (!id) return;
      const url = `https://apis.data.go.kr/B552474/JobBsnInfoService/getJobOperInsttInfo?id=${id}`;
      try {
        const response = await axios.get(url, {
          params: {
            orgCd: id,
            serviceKey: process.env.NEXT_PUBLIC_ORG_API,
          },
        });
        setOrganizationInfo(response.data.response.body.items.item);
      } catch (error) {
        console.error("Failed to fetch organization info:", error);
      }
    };

    fetchOrganizationInfo();
  }, [id]);
  return (
    <Base>
      <section className="section">
        <div className="container">
          <Map
            zipAddr={organizationInfo.zipAddr}
            zipName={organizationInfo.orgName}
          ></Map>
          <OrganizationDetail
            organizationInfo={organizationInfo}
          ></OrganizationDetail>
        </div>
      </section>
    </Base>
  );
};
export default Detail;
