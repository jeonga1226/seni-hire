import React, { useRef } from "react";
import { useRouter } from "next/router";

import Input from "@components/common/Input";
import Button from "@components/common/Button";
import useAlert from "@hooks/common/useAlert";

const ApplicantSearch = (props) => {
  const { isAlert } = useAlert();
  const router = useRouter();

  const plbizNoInput = useRef(null);

  const search = () => {
    if (plbizNoInput.current?.value.length < 1) {
      return isAlert("사업자등록번호를 입력하세요.");
    } else {
      props.searchApplicantList();
    }
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
          구직 합격자 선정
        </h1>

        <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
          사업자등록번호로 등록한 구인 목록을 확인할 수 있습니다.
        </p>

        <form
          action="#"
          className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
        >
          <div>
            <Input
              id="plbizNo"
              label="사업자등록번호"
              placeholder="사업자등록번호를 입력하세요"
              ref={plbizNoInput}
            />
          </div>

          <Button onClick={() => search()}>확인</Button>
        </form>
      </div>
    </div>
  );
};

export default ApplicantSearch;
