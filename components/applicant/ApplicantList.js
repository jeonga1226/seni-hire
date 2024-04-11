import { useRouter } from "next/router";

const List = ({ ApplicantList }) => {
  const router = useRouter();
  const moveDetail = (applicant) => {
    localStorage.setItem("applicant", JSON.stringify(applicant));
    router.push("/applicant/detail");
  };
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              이름
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              생일
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              성별
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              전화번호
            </th>
            <th className="px-4 py-2"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {ApplicantList.map((item) => {
            return (
              <tr key={item.id}>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  {item.userName}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {item.birth}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {item.gender}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {item.mobile}
                </td>
                <td className="whitespace-nowrap px-4 py-2">
                  <button
                    className="btn btn-primary w-full"
                    onClick={() => moveDetail(item)}
                  >
                    상세보기
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default List;
