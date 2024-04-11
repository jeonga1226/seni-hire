import React, { useRef } from "react";
import { useDispatch } from "react-redux";

import SelectBox from "@components/common/SelectBox";
import Input from "@components/common/Input";
import Button from "@components/common/Button";

import { addOfferInfo } from "@store/offer/offer";
import useInput from "@hooks/common/useInput";

// category page
const OfferReg5 = (props) => {
  const dispatch = useDispatch();
  const acptMthdTpButton = useRef(null);
  const acptMthdInput = useRef(null);
  const frDdInput = useRef(null);
  const toDdInput = useRef(null);

  const setOfferData = () => {
    dispatch(
      addOfferInfo({
        acptMthdTp: acptMthdTpButton.current?.innerText,
        acptMthd: acptMthdInput.current?.value,
        frDd: frDdInput.current?.value,
        toDd: toDdInput.current?.value,
      })
    );
  };

  const {
    value: frDate,
    valid: validFrDate,
    onChange: onChangeFrDate,
  } = useInput("", dateRule);

  const {
    value: toDate,
    valid: validToDate,
    onChange: onChangeToDate,
  } = useInput("", dateRule);

  return (
    <div>
      <SelectBox
        id="acptMthdTp"
        label="접수방법"
        value="선택하세요"
        list={acptMthdTpList}
        ref={acptMthdTpButton}
      />
      <Input id="acptMthd" ref={acptMthdInput} />
      <Input
        id="frDd"
        label="접수시작일"
        value={frDate}
        onChange={onChangeFrDate}
        valid={validFrDate}
        placeholder="2024-01-01"
        ref={frDdInput}
      />
      <Input
        id="toDd"
        label="접수마감일"
        onChange={onChangeToDate}
        value={toDate}
        valid={validToDate}
        placeholder="2024-01-01"
        ref={toDdInput}
      />
      <div className="">
        <Button
          id="btnNext"
          onClick={() => {
            props.updateOfferId("6");
            setOfferData();
          }}
        >
          다음
        </Button>
      </div>
    </div>
  );
};

export default OfferReg5;

const acptMthdTpList = [
  { value: "방문" },
  { value: "전자우편" },
  { value: "우편" },
  { value: "팩스" },
];

const dateRule = (value = "") => {
  const regEx = /^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
  if (value === "") return;
  if (!regEx.test(value)) {
    return "올바른 생년월일을 입력해주세요";
  }
};
