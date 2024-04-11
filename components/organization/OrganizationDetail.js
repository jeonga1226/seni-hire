const OrganizationDetail = ({ organizationInfo }) => {
  const org =
    organizationInfo === null
      ? {
          orgName: "",
          zipAddr: "",
          orgTypeNm: "",
          telNum: "",
        }
      : organizationInfo;
  return (
    <div className="flow-root">
      <dl className="-my-3 divide-y divide-gray-100 text-sm">
        <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">기관명</dt>
          <dd className="text-gray-700 sm:col-span-2">{org.orgName}</dd>
        </div>

        <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">주소</dt>
          <dd className="text-gray-700 sm:col-span-2">{org.zipAddr}</dd>
        </div>

        <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">기관타입</dt>
          <dd className="text-gray-700 sm:col-span-2">{org.orgTypeNm}</dd>
        </div>

        <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">전화번호</dt>
          <dd className="text-gray-700 sm:col-span-2">{org.telNum}</dd>
        </div>
      </dl>
    </div>
  );
};

export default OrganizationDetail;
