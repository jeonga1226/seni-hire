import React, { useRef } from "react";
import { useDispatch } from "react-redux";

import Input from "@components/common/Input";
import Textarea from "@components/common/Textarea";
import Button from "@components/common/Button";

import { addOfferInfo } from "@store/offer/offer";

// category page
const OfferReg2 = (props) => {
  const dispatch = useDispatch();
  const recrtTitleInput = useRef(null);
  const jobclsNmInput = useRef(null);
  const clltPrnNumInput = useRef(null);
  const detCntsInput = useRef(null);

  const setOfferData = () => {
    dispatch(
      addOfferInfo({
        recrtTitle: recrtTitleInput.current?.value,
        jobclsNm: jobclsNmInput.current?.value,
        clltPrnNum: clltPrnNumInput.current?.value,
        detCnts: detCntsInput.current?.value,
      })
    );
  };

  return (
    <div>
      <Input id="recrtTitle" label="채용제목" ref={recrtTitleInput} />
      <Input id="jobclsNm" label="모집직종" ref={jobclsNmInput} />
      <Input id="clltPrnNum" label="모집인원" ref={clltPrnNumInput} />
      <Textarea id="detCnts" label="직무내용" ref={detCntsInput} />
      <div className="">
        <Button
          id="btnNext"
          onClick={() => {
            props.updateOfferId("3");
            setOfferData();
          }}
        >
          다음
        </Button>
      </div>
    </div>
  );
};

export default OfferReg2;
