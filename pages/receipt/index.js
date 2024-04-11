import Base from "@layouts/Baseof";
import Receipt from "@components/receipt/Receipt";
import { markdownify } from "@lib/utils/textConverter";

const receipt = () => {
  return (
    <Base>
      <section className="section">
        <div className="container">
          {markdownify("접수하기", "h1", "h2 mb-8 text-center")}
          <Receipt />
        </div>
      </section>
    </Base>
  );
};

export default receipt;
