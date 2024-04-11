import {useRouter} from "next/router"
import { markdownify } from "@lib/utils/textConverter";

const NotFound = ({ data }) => {
  const { frontmatter, content } = data;
  const router = useRouter();
  const goMain = () => {
    router.push("/");
  }
  return (
    <section className="section">
      <div className="container">
        <div className="flex h-[40vh] items-center justify-center">
          <div className="text-center">
            <h1 className="mb-4">{frontmatter.title}</h1>
            {markdownify(content, "div", "content prose-headings:text-text")}
          </div>
        </div>
        <div className="btn-wrap justify-center">
            <button className="main btn btn-primary" type="button" onClick={goMain}>메인으로 돌아가기</button>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
