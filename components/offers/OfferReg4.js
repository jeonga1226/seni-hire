import React, { useRef } from "react";
import { useDispatch } from "react-redux";

import SelectBox from "@components/common/SelectBox";
import Button from "@components/common/Button";

import { addOfferInfo } from "@store/offer/offer";

// category page
const OfferReg4 = (props) => {
  const dispatch = useDispatch();
  const retirePayTpButton = useRef(null);
  const emplymShpNmButton = useRef(null);
  const workTpButton = useRef(null);

  const setOfferData = () => {
    dispatch(
      addOfferInfo({
        retirePayTp: retirePayTpButton.current?.innerText,
        emplymShpNm: emplymShpNmButton.current?.innerText,
        workTp: workTpButton.current?.innerText,
      })
    );
  };

  return (
    <div>
      <SelectBox
        id="retirePayTp"
        label="퇴직급여"
        value="선택하세요"
        list={retirePayTpList}
        ref={retirePayTpButton}
      />
      <SelectBox
        id="emplymShpNm"
        label="고용형태"
        value="선택하세요"
        list={emplymShpList}
        ref={emplymShpNmButton}
      />
      <SelectBox
        id="workTp"
        label="일자리유형"
        value="선택하세요"
        list={workTpList}
        ref={workTpButton}
      />
      <div className="">
        <Button
          id="btnNext"
          onClick={() => {
            props.updateOfferId("5");
            setOfferData();
          }}
        >
          다음
        </Button>
      </div>
    </div>
  );
};

export default OfferReg4;

const retirePayTpList = [
  { value: "퇴직금" },
  { value: "퇴직연금" },
  { value: "해당없음" },
];
const emplymShpList = [
  { value: "기간의 정함이 없는 근로계약" },
  { value: "기간의 정함이 있는 근로계약" },
  { value: "시간제" },
  { value: "파견 근로" },
];
const workTpList = [
  { value: "사회서비스형" },
  { value: "시장형" },
  { value: "취업알선형" },
  { value: "시니어인턴쉽" },
];
