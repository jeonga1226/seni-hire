import Input from "@components/common/Input";
import useInput from "@hooks/common/useInput";
import useAlert from "@hooks/common/useAlert";
import DaumPost from "@components/receipt/DaumPost";
import PrivacyPolicy from "@components/receipt/PrivacyPolicy";
import {useRouter} from "next/router"
import { useEffect, useState } from "react";

import { AddReceipt } from "@remote/receipt";
import { getFullDate } from "@lib/utils/dateFormat";
("use client");

const Receipt = () => {
  const {isAlert} = useAlert();
  const router = useRouter();
  const [enroll_company, setEnroll_company] = useState({
    address: "",
  });
  // 주소검색 popup
  const [popup, setPopup] = useState(false);

  // 유효성검사 후 버튼 이벤트 전달
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false)

  // 일자리 id
  const jobId = router.query.jobId;
 
  const handlePost = (e) => {
    setEnroll_company({
      ...enroll_company,
      [e.target.name]: e.target.value,
    });
  };

  const handleComplete = (e) => {
    e.preventDefault();
    setPopup(!popup);
  };
  
  const {
    value: userName,
    valid: validName,
    onChange: onChangeName,
  } = useInput("", nameRule);

  const {
    value: birth,
    valid: validBirth,
    onChange: onChangeBirth,
  } = useInput("", birthRule);

  const {
    value: mobile,
    valid: validMobile,
    onChange: onChangeMobile,
  } = useInput("", mobileRule);

  const {
    value: address,
    valid: validAddress,
    onChange: onChangeAddress,
  } = useInput("", addressRule);

  useEffect(()=>{
    if(!nameRule(userName) && !birthRule(birth) && !mobileRule(mobile)) {
      setIsSubmitDisabled(false)
    } else {
      setIsSubmitDisabled(true);
    }
  }, [userName, birth, mobile])

  // 날짜계산
  const calculateAge = (dateStr) =>{
    const date = new Date(dateStr);
    const today = new Date();

    let age = today.getFullYear() - date.getFullYear();
    const m = today.getMonth() - date.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  // 하이픈 자동추가 (mobile)
  const handleMobileChange = (e) => {
    let { value } = e.target;
    value = value.replace(/\D/g, ""); // 숫자가 아닌 모든 문자 제거
    if (value.length <= 3) {
      // 앞 3자리 처리
    } else if (value.length <= 7) {
      // 중간 4자리 처리
      value = `${value.slice(0, 3)}-${value.slice(3)}`;
    } else {
      // 마지막 4자리 처리
      value = `${value.slice(0, 3)}-${value.slice(3, 7)}-${value.slice(7, 11)}`;
    }
    e.target.value = value; // 변경된 값을 이벤트 객체에 반영
    onChangeMobile(e); // 기존 onChange 함수 호출
  }
  // 하이픈 자동추가 (birth)
  const handleBirthChange = (e) => {
    let { value } = e.target;
    value = value.replace(/\D/g, ""); // 숫자가 아닌 모든 문자 제거
    if (value.length <= 4) {
      // 연도 입력 처리
    } else if (value.length <= 6) {
      // 월 입력 처리
      value = `${value.slice(0, 4)}-${value.slice(4)}`;
    } else {
      // 일 입력 처리
      value = `${value.slice(0, 4)}-${value.slice(4, 6)}-${value.slice(6, 8)}`;
    }
    e.target.value = value; // 변경된 값을 이벤트 객체에 반영
    onChangeBirth(e); // 기존 onChange 함수 호출
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const gender = e.target.gender.value;
    const agreement = e.target.agreement.value;

    if (
      userName == "" ||
      birth == "" ||
      mobile == "" ||
      address == "" ||
      enroll_company.address == ""
    ) {
      isAlert("정보를 모두 입력해주세요.");
      return;
    }
    if (gender == "") {
      isAlert("성별을 선택해주세요.");
      return;
    }
    if (agreement == "disagree" || agreement == "") {
      isAlert("개인정보 수집 및 이용에 동의해주세요.");
      return;
    }
    if (isSubmitDisabled) {
      isAlert("내용을 올바르게 입력해주세요.");
      return;
    }
    if (calculateAge(birth) < 60) {
      isAlert("만 60세 이상부터 지원 가능합니다.");
      return;
    }
    const fullAddress = enroll_company.address + " " + address;
    console.log(jobId, userName, gender, birth, fullAddress, mobile, agreement);

    const inputData = {
      jobId,
      userName,
      gender,
      birth,
      fullAddress,
      mobile,
      agreement,
      regDate : getFullDate()
    }

    AddReceipt(inputData)
      .then(() => {
        console.log("접수 성공");
        router.push('/receipt/end')
      }) 
      .catch((error) => {
        isAlert("접수에 실패했습니다.");
      });
  };


  const handleCancel = (e) => {
    e.preventDefault();
    router.push({
      pathname:'/home',
      query :{
        bizUserYn: 'N'
      }
    });
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <Input
        label="이름"
        value={userName}
        onChange={onChangeName}
        valid={validName}
        placeholder="이름을 입력하세요"
      />
      <div className="mb-6">
        <label className="mb-2 block">성별</label>
        <div className="radio-group">
          <input name="gender" type="radio" value="male" id="male" />
          <label for="male">남자</label>
          <input name="gender" type="radio" value="female" id="female" />
          <label for="female">여자</label>
        </div>
      </div>
      <Input
        label="생년월일"
        value={birth}
        onChange={handleBirthChange}
        valid={validBirth}
        placeholder="1990-01-01"
      />
      <Input
        label="연락처"
        value={mobile}
        onChange={handleMobileChange}
        valid={validMobile}
        placeholder="010-0000-0000"
      />
      <div className="mb-6">
        <label className="mb-2 block">주소</label>
        <div className="input-container">
          <input
            className="form-input w-full"
            name="address"
            type="text"
            value={enroll_company.address}
            onChange={handlePost}
            required
            placeholder="주소를 입력하세요"
            disabled
          />
          <button className="btn" onClick={handleComplete}>
            주소찾기
          </button>
          {popup && (
            <DaumPost
              company={enroll_company}
              setcompany={setEnroll_company}
            ></DaumPost>
          )}
        </div>
        <Input
          value={address}
          onChange={onChangeAddress}
          valid={validAddress}
          placeholder="상세주소"
        />
      </div>

      <div>
        <label className="mb-2 block">개인정보 수집 이용 및 동의</label>
      </div>
      <PrivacyPolicy/>
      <div className="mb-6">
        <input name="agreement" type="radio" value="agree" />
        동의함
        <input name="agreement" type="radio" value="disagree" />
        동의하지 않음
      </div>

      <button className="btn btn-primary mb-6 w-full">접수하기</button>
      <button className="btn btn-cancel w-full" onClick={handleCancel}>취소하기</button>
    </form>
  );
};

const nameRule = (value = "") => {
  const regEx = /^[ㄱ-ㅎ|가-힣]+$/;
  if (value === "") return;
  if (!regEx.test(value)) {
    return "올바른 이름을 입력해주세요";
  }
};

const birthRule = (value = "") => {
  const regEx = /^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
  if (value === "") return;
  if (!regEx.test(value)) {
    return "올바른 생년월일을 입력해주세요";
  }
};

const mobileRule = (value = "") => {
  const regEx = /^\d{3}-\d{3,4}-\d{4}$/;
  if (value === "") return;
  if (!regEx.test(value)) {
    return "올바른 전화번호를 입력해주세요";
  }
};

const addressRule = (value = "") => {
  if (value === "") return;
};

export default Receipt;
