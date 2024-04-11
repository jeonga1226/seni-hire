import Base from "@layouts/Baseof";
import MyReceipt from "@components/myReceipt/MyReceipt";
import { markdownify } from "@lib/utils/textConverter";

const myReceipt = () => {
  return (
    <Base>
      <section className="section">
        <div className="container">
          {markdownify("나의 신청내역 확인", "h1", "h2 mb-8 text-center")}
          <MyReceipt />
        </div>
      </section>
    </Base>
  );
};

export default myReceipt;
