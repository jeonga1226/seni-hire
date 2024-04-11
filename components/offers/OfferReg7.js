import React, { useRef } from "react";
import { useDispatch } from "react-redux";

import Textarea from "@components/common/Textarea";
import Button from "@components/common/Button";

import { addOfferInfo } from "@store/offer/offer";

// category page
const OfferReg7 = (props) => {
  const dispatch = useDispatch();
  const etcTextarea = useRef(null);

  const setOfferData = () => {
    dispatch(
      addOfferInfo({
        etc: etcTextarea.current?.value,
      })
    );

    props.saveOffer();
  };

  return (
    <div>
      <Textarea
        id="etc"
        label="그 밖의 구인기업 희망사항"
        subLabel="그 밖에 구직자가 참고할 만한 사항 및 구인기업의 희망사항"
        ref={etcTextarea}
      />
      <div className="">
        <Button
          id="btnNext"
          onClick={() => {
            setOfferData();
          }}
        >
          완료
        </Button>
      </div>
    </div>
  );
};

export default OfferReg7;
