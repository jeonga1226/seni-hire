
const PrivacyPolicy = () => {
  const term = `
    ’노인일자리 ‘사이트를 통한 노인일자리 업무시스템의 노인일자리사업 신청과 관련하여 아래와 같이 개인정보를 수집·이용 하고자 합니다.\n
    내용을 상세히 읽으신 후 동의 여부를 결정하여 주시기 바랍니다.\n
    □ 개인정보 수집·이용 내역\n
    ○ 항목\n
    필수정보 - 이름, 성별, 생년월일, 연락처, 주소, 상세주소\n
    ○ 수집목적\n
    노인일자리 및 사회활동 지원 사업 참여신청 제외자 구분, 참여자 선발점수 부여 및 활동관리(부적격·부정수급 등),\n
    맞춤형 일자리 제공, 대기자 관리, 노인일자리 및 사회활동 지원사업 연구 수행 등\n
    ○ 보유기간\n
    노인일자리업무시스템에 접수된 데이터 : 사업 종료 후 5년까지\n
    ※ 위의 필수정보 수집·이용에 대한 동의를 거부할 권리가 있으며,\n
    동의를 거부할 경우 노인일자리 서비스 신청(참여)에 제한을 받을 수 있습니다.\n
  `

  return (
    <div className="content mb-16 text-left">
        <div className="border border-indigo-400 p-4 rounded-lg">
          {term.split('\n').map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </div>
        {/* <textarea
          className="text-long w-full border-primary"
          value=""/> */}
      </div>
  );
};

export default PrivacyPolicy;
