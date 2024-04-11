import Link from "next/link";

const Organization = ({ organizationList }) => {
  const normalizedList = Array.isArray(organizationList)
    ? organizationList
    : [organizationList];
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              기관명
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              주소
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              기관타입
            </th>
            <th className="px-4 py-2">상세보기</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {normalizedList.map((element) => {
            return (
              <tr key={element.orgCd}>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  {element.orgName}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {element.zipAddr}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {element.orgTypeNm}
                </td>
                <td className="whitespace-nowrap px-4 py-2">
                  <Link
                    className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                    href={`/organization/detail?id=${element.orgCd}`}
                  >
                    View
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Organization;
