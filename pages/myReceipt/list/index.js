import Base from "@layouts/Baseof";
import MyReceiptList from "@components/myReceipt/MyReceiptList";
import { markdownify } from "@lib/utils/textConverter";

const myReceipt = () => {
  return (
    <Base>
      <section className="section">
        <div className="container">
          {markdownify("나의 신청내역 확인", "h1", "h2 mb-8 text-center")}
          <MyReceiptList />
        </div>
      </section>
    </Base>
  );
};

export default myReceipt;
