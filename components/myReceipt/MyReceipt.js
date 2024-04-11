import Input from "@components/common/Input";
import useInput from "@hooks/common/useInput";
import useAlert from "@hooks/common/useAlert";
import {useEffect,useState} from "react"
import {useRouter} from "next/router"

import { GetReceiptByUser } from "../../remote/receipt";

("use client");

const MyReceipt = () => {
  const {isAlert} = useAlert();
  const router = useRouter();

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

  // 유효성검사 후 버튼 이벤트 전달
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false)

  useEffect(()=>{
    if(!nameRule(userName) && !birthRule(birth) && !mobileRule(mobile)) {
      setIsSubmitDisabled(false)
    } else {
      setIsSubmitDisabled(true);
    }
  }, [userName, birth, mobile])

  const handleSubmit = (e) => {
    e.preventDefault();

    const gender = e.target.gender.value;
    if (
      userName == "" ||
      birth == "" ||
      mobile == ""
    ) {
      isAlert("정보를 모두 입력해주세요.");
      return;
    }
    if (gender == "") {
      isAlert("성별을 선택해주세요.");
      return;
    }
    if (isSubmitDisabled) {
      isAlert("내용을 올바르게 입력해주세요.");
      return;
    }

    const userData = {
      userName,
      gender,
      birth,
      mobile
    }

    GetReceiptByUser(userData)
        .then(receipts => {
            console.log(receipts);
            router.push({
              pathname: '/myReceipt/list',
              query: {receipts: JSON.stringify(receipts)}
              },
              'myReceipt/list'
            )
            // if (receipts.length) {
            //   console.log("리스트 있음");
            // } else {
            //   console.log("리스트 없음");
            //   router.push("/myReceipt/list")
            // }
        })
        .catch(error => {
            console.error("Error : ", error);
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
        onChange={onChangeBirth}
        valid={validBirth}
        placeholder="1990-01-01"
      />
      <Input
        label="연락처"
        value={mobile}
        onChange={onChangeMobile}
        valid={validMobile}
        placeholder="010-0000-0000"
      />

      <button className="btn btn-primary mb-6 w-full">조회</button>
      <button className="btn btn-cancel w-full" onClick={handleCancel}>취소</button>
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

export default MyReceipt;
