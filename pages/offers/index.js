// import { getTaxonomy } from "@lib/taxonomyParser";

import Button from "@components/common/Button";
import Base from "@layouts/Baseof";
import Link from "next/link";

const Offers = () => {
  return (
    <Base>
      <section className="section">
        <div className="container max-w-[700px]">
          <div className="offer-main-top">
            <p>안녕하세요</p>
            <span>노인일자리를 쉽게 등록해보세요.</span>
          </div>
          <div className="mt100">
            <Button size="large">
              <Link href={`/offers/reg`}>구인등록 시작하기</Link>
            </Button>
          </div>
        </div>
      </section>
    </Base>
  );
};

export default Offers;
