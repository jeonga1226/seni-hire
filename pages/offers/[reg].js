import { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

import Base from "@layouts/Baseof";

import OfferReg1 from "@components/offers/OfferReg1";
import OfferReg2 from "@components/offers/OfferReg2";
import OfferReg3 from "@components/offers/OfferReg3";
import OfferReg4 from "@components/offers/OfferReg4";
import OfferReg5 from "@components/offers/OfferReg5";
import OfferReg6 from "@components/offers/OfferReg6";
import OfferReg7 from "@components/offers/OfferReg7";
import Progress from "@components/offers/Progress";
import SubTitle from "@components/offers/SubTitle";

import { registJob } from "remote/job";
import { initOfferInfo } from "@store/offer/offer";
import useAlert from "@hooks/common/useAlert";

// offer page
const Offer = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const offerInfo = useSelector((state) => state.offerReducer.offer.offerInfo);
  const { isAlert } = useAlert();

  const [offerId, setOfferId] = useState("1");
  const [content, setContent] = useState();

  console.log("redux offerInfo : ", offerInfo);

  // fetchData 함수이기 때문에, offerId 값이 바뀌든 말든 컴포넌트가 랜더링될 때 마다 새로운 참조값으로 변경이 됩니다.
  // 그러면 useEffect() 함수가 호출되어 user 상태값이 바뀌고 그러면 다시 랜더링이 되고 그럼 또 다시 useEffect() 함수가 호출
  // useCallback을 사용할 경우 !
  // seEffect()에 넘어온 함수는 offerId 값이 변경되지 않는 한 재호출 되지 않게 됩니다.
  const fetchData = useCallback(async () => {
    // content 영역 컴포넌트 변경
    if (offerId === "1") setContent(<OfferReg1 updateOfferId={setOfferId} />);
    else if (offerId === "2")
      setContent(<OfferReg2 updateOfferId={setOfferId} />);
    else if (offerId === "3")
      setContent(<OfferReg3 updateOfferId={setOfferId} />);
    else if (offerId === "4")
      setContent(<OfferReg4 updateOfferId={setOfferId} />);
    else if (offerId === "5")
      setContent(<OfferReg5 updateOfferId={setOfferId} />);
    else if (offerId === "6")
      setContent(<OfferReg6 updateOfferId={setOfferId} />);
    else if (offerId === "7")
      setContent(
        <OfferReg7
          saveOffer={async () => {
            registJob(offerInfo);
            dispatch(initOfferInfo());
            if ((await isAlert("구인 신청이 완료되었습니다.")) == true) {
              router.replace("/");
            }
          }}
        />
      );
  }, [offerId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Base title="구인신청">
      <div className="section pt0">
        <div className="container">
          <SubTitle id={offerId} updateOfferId={setOfferId} />
          <Progress id={offerId} />
          <div className="content">{content}</div>
        </div>
      </div>
    </Base>
  );
};

export default Offer;
