import React, { useRef } from "react";
import { useDispatch } from "react-redux";

import Input from "@components/common/Input";
import SelectBox from "@components/common/SelectBox";
import Button from "@components/common/Button";

import { addOfferInfo } from "@store/offer/offer";

// category page
const OfferReg3 = (props) => {
  const dispatch = useDispatch();
  const payTypeButton = useRef(null);
  const payInput = useRef(null);
  const dutyHrTypeButton = useRef(null);
  const dutyHrInput = useRef(null);
  const workPlcButton = useRef(null);
  const workPlcNmInput = useRef(null);

  const setOfferData = () => {
    dispatch(
      addOfferInfo({
        payType: payTypeButton.current?.innerText,
        pay: payInput.current?.value,
        dutyHrType: dutyHrTypeButton.current?.innerText,
        dutyHr: dutyHrInput.current?.value,
        workPlc: workPlcButton.current?.innerText,
        workPlcNm: workPlcNmInput.current?.value,
      })
    );
  };

  return (
    <div>
      <SelectBox
        id="payType"
        label="임금"
        value="선택하세요"
        list={payList}
        subLabel="고용보험료 등 사회보험료 공제 전 금액기준, 시간외 휴일근무수당은 제외"
        ref={payTypeButton}
      />
      <Input id="pay" ref={payInput} />
      <SelectBox
        id="dutyHrType"
        label="근무시간"
        value="선택하세요"
        list={dutyHrList}
        ref={dutyHrTypeButton}
      />
      <Input id="dutyHr" ref={dutyHrInput} />
      <SelectBox
        id="workPlc"
        label="근무장소"
        value="선택하세요"
        list={workPlcList}
        ref={workPlcButton}
      />
      <Input id="workPlcNm" ref={workPlcNmInput} />
      <div className="">
        <Button
          id="btnNext"
          onClick={() => {
            props.updateOfferId("4");
            setOfferData();
          }}
        >
          다음
        </Button>
      </div>
    </div>
  );
};

export default OfferReg3;

const payList = [
  { value: "시급" },
  { value: "일급" },
  { value: "월급" },
  { value: "연봉" },
];

const dutyHrList = [{ value: "매일" }, { value: "주" }, { value: "교대" }];

const workPlcList = [
  { value: "사업자주소동일" },
  { value: "사업체지사" },
  { value: "타사업체" },
];
