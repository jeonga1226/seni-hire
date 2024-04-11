import Base from "@layouts/Baseof";
import ReceiptEnd from "@components/receipt/ReceiptEnd";
import { markdownify } from "@lib/utils/textConverter";

const receipt = () => {
  return (
    <Base>
      <section className="section">
        <div className="container">
          {markdownify("접수완료", "h1", "h2 mb-8 text-center")}
          <ReceiptEnd />
        </div>
      </section>
    </Base>
  );
};

export default receipt;
