import {useRouter} from "next/router"

const ReceiptEnd = () => {
  const router = useRouter();
  const goMain = () => {
    router.push({
      pathname:'/home',
      query :{
        bizUserYn: 'N'
      }
    });
  }
  return (
    <section className="section">
      <div className="container">
        <div className="flex h-[40vh] items-center justify-center">
          <div className="text-center">
            <h1 className="mb-4">접수에 성공했습니다.</h1>
          </div>
        </div>
        <div className="btn-wrap justify-center">
            <button className="main btn btn-primary" type="button" onClick={goMain}>메인으로 돌아가기</button>
        </div>
      </div>
    </section>
  );
};

export default ReceiptEnd;
