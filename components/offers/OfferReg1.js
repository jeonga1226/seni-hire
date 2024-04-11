import React, { useRef } from "react";
import { useDispatch } from "react-redux";

import Input from "@components/common/Input";
import Button from "@components/common/Button";

import { addOfferInfo } from "@store/offer/offer";

// category page
const OfferReg1 = (props) => {
  const dispatch = useDispatch();
  const plbizNmInput = useRef(null);
  const plbizNoInput = useRef(null);
  const plReprsntNmInput = useRef(null);
  const plDetAddrInput = useRef(null);

  const setOfferData = () => {
    dispatch(
      addOfferInfo({
        plbizNm: plbizNmInput.current?.value,
        plbizNo: plbizNoInput.current?.value,
        plReprsntNm: plReprsntNmInput.current?.value,
        plDetAddr: plDetAddrInput.current?.value,
      })
    );
  };

  return (
    <div>
      <Input id="plbizNm" label="사업체명" ref={plbizNmInput} />
      <Input id="plbizNo" label="사업자등록번호" ref={plbizNoInput} />
      <Input id="plReprsntNm" label="대표자" ref={plReprsntNmInput} />
      <Input id="plDetAddr" label="주소" ref={plDetAddrInput} />
      <div className="">
        <Button
          id="btnNext"
          onClick={() => {
            props.updateOfferId("2");
            setOfferData();
          }}
        >
          다음
        </Button>
      </div>
    </div>
  );
};

export default OfferReg1;
