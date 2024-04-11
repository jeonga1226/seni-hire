import useAlert from "@hooks/common/useAlert";
import UseConfirm from "@hooks/common/useConfirm";
import {useRouter} from "next/router";
import { useEffect, useState } from "react";
import Indicator from "@components/common/Indicator";
import { CancelReceipt } from "@remote/receipt";
("use client");

const MyReceiptList = () => {
  const router = useRouter();
  const [receipts, setReceipts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const {isConfirmed} = UseConfirm();
  const {isAlert} = useAlert();

  useEffect(() => {
    if (router.isReady) {
      const isParam = router.query.receipts;
      
      // 파라미터가 없는 경우 홈으로 리다이렉트
      if (!isParam) {
        router.push({
          pathname:'/home',
          query :{
            bizUserYn: 'N'
          }
        });
        return;
      }
    }
    
    try {
      const parsedReceipts = JSON.parse(router.query.receipts);
      setReceipts(parsedReceipts);
    } catch (error) {
      console.log("Parsing error:",error);
      // 파싱에 실패한 경우, 홈으로 리다이렉트
      router.push({
        pathname:'/home',
        query :{
          bizUserYn: 'N'
        }
      });
    }
    setIsLoading(false);
  }, [router]);
   
  if(isLoading) {
    return <Indicator/>;
  }

  const goReceipt = () =>{
    router.back();
  }
  
  const receiptStatus = (date) => {
    let _today = new Date(); // 오늘
    let _date = new Date(date); // 비교날짜

    if (_today > _date) { // 마감
      return "";
    } else {
      return "ing";
    }
  }

  const cancelHandler = async (id) => {
    console.log('cancel');
    if(await isConfirmed("접수를 취소하시겠습니까?"))  {
      CancelReceipt(id)
        .then(()=>{
          isAlert("접수가 취소되었습니다.");
          const updatedReceipts = receipts.filter(receipt => receipt.id !== id);
          setReceipts(updatedReceipts);
        })
        .catch(()=>{
          isAlert("접수 취소에 실패하였습니다.") 
        })
      console.log('확인')
    }
  }

  const resultHandler = () => {
    console.log('result'); 
    isAlert("축하합니다. 지원하신 사업에 선발되었습니다.<br/> 담당자의 연락을 기다리세요");
    isAlert("아쉽게도 지원하신 사업에 선발되지 않았습니다.")
  }
    return (
      <section className="section">
        {receipts.length === 0 ? (
          <div className="container">
          <div className="flex h-[40vh] items-center justify-center">
            <div className="text-center">
              <h1 className="mb-4">조회 결과가 없습니다.</h1>
              
            </div>
          </div>
          <div className="btn-wrap justify-center">
              <button className="main btn btn-primary" type="button" onClick={goReceipt}>돌아가기</button>
          </div>
        </div>
        ) : (
          <div className={`row space-y-1 px-6`}>
            <div>

            </div>
            <div>
              {receipts.map((item)=>(
                <div className="job-list col-12 receipt-list" key={item.id}> {/*key={item.jobDetail.jobid}*/}
                <div className="receipt-item">
                  <ul className="mb-4 mt-4 flex flex-wrap items-center space-x-3 text-text">
                    <li>수행사: {item.jobDetail.plbizNm}</li>
                    <li>{item.jobDetail.jobclsNm}</li>
                    <li>{item.jobDetail.plDetAddr}</li>
                  </ul>
      
                  <h4 className="mb-2">
                    {item.jobDetail.recrtTitle}
                  </h4>
                  <p className="receipt-status">
                    <div>
                      <span>진행상태 : 
                        <span className={receiptStatus(item.jobDetail.toDd)}>{receiptStatus(item.jobDetail.toDd) ? " 신청중" : " 마감"}</span>
                      </span>
                      <span>( 신청일: {item.regDate} )</span>
                    </div>
                  </p>
                </div>
                <div className="flex justify-end items-center">
                  {receiptStatus(item.jobDetail.toDd) ? (
                  <button className="btn btn-outline-primary receipt-btn px-4 py-5 text-sm" onClick={()=>cancelHandler(item.id)}>
                    신청취소
                  </button>  
                  ):(
                  <button className="btn btn-primary receipt-btn px-4 py-5 text-sm" onClick={()=>resultHandler(item.id)}>
                    결과확인
                  </button>
                  )}
                  
                </div>
                </div>
              ))}
            </div>
          </div>
        )}
      
    </section>
    )
}
export default MyReceiptList;