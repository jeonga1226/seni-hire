import { useDispatch } from "react-redux";
import { useState } from "react";
import { useRouter } from "next/router";
import * as operatorActions from "../../store/organization/organization";
const OrganizationSearch = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const changeSearchObject = () => {
    dispatch(operatorActions.setSearchObject(searchObject));
    // router.push("/organization/list");
  };

  const [searchObject, setSearchObject] = useState({
    sido: "",
    sigungu: "",
  });
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
          전국 수행기관
        </h1>

        <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
          전국수행기관이란? 노인일자리 및 사회활동 지원사업을 직접적으로
          수행하는 기관을 말합니다.
        </p>

        <form
          action="#"
          className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
        >
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>

            <div className="relative">
              <input
                type="text"
                value={searchObject.sido}
                onChange={(e) =>
                  setSearchObject({ ...searchObject, sido: e.target.value })
                }
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="시/도"
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </span>
            </div>
          </div>

          <div>
            <label htmlFor="text" className="sr-only">
              시/군/구
            </label>

            <div className="relative">
              <input
                value={searchObject.sigungu}
                onChange={(e) =>
                  setSearchObject({ ...searchObject, sigungu: e.target.value })
                }
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="시/군/구"
              />

              <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </span>
            </div>
          </div>

          <button
            type="button"
            className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
            onClick={changeSearchObject}
          >
            검색하기
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrganizationSearch;
