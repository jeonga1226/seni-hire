import React, { useRef } from "react";
import { useDispatch } from "react-redux";

import Input from "@components/common/Input";
import Button from "@components/common/Button";

import { addOfferInfo } from "@store/offer/offer";
import useInput from "@hooks/common/useInput";

// category page
const OfferReg6 = (props) => {
  const dispatch = useDispatch();
  const reprInput = useRef(null);
  const reprPhoneNumInput = useRef(null);
  const reprEmailInput = useRef(null);

  const {
    value: mobile,
    valid: validMobile,
    onChange: onChangeMobile,
  } = useInput("", mobileRule);

  const {
    value: email,
    valid: validEmail,
    onChange: onChangeEmail,
  } = useInput("", emailRule);

  const setOfferData = () => {
    dispatch(
      addOfferInfo({
        repr: reprInput.current?.value,
        reprPhoneNum: reprPhoneNumInput.current?.value,
        reprEmail: reprEmailInput.current?.value,
      })
    );
  };

  return (
    <div>
      <Input id="repr" label="담당자 이름" ref={reprInput} />
      <Input
        id="reprPhoneNum"
        value={mobile}
        valid={validMobile}
        onChange={onChangeMobile}
        label="담당자 연락처"
        ref={reprPhoneNumInput}
      />
      <Input
        id="reprEmail"
        label="담당자 이메일"
        valid={validEmail}
        value={email}
        onChange={onChangeEmail}
        ref={reprEmailInput}
      />
      <div className="">
        <Button
          id="btnNext"
          onClick={() => {
            props.updateOfferId("7");
            setOfferData();
          }}
        >
          다음
        </Button>
      </div>
    </div>
  );
};

export default OfferReg6;

const mobileRule = (value = "") => {
  const regEx = /^\d{3}-\d{3,4}-\d{4}$/;
  if (value === "") return;
  if (!regEx.test(value)) {
    return "올바른 전화번호를 입력해주세요";
  }
};

const emailRule = (value = "") => {
  const regEx = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
  if (value === "") return;
  if (!regEx.test(value)) {
    return "올바른이메일주소를를 입력해주세요";
  }
};
