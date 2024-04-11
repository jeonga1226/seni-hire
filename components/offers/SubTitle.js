import { useState, useEffect } from "react";

const SubTitle = (props) => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (props.id == "1") setTitle("업체현황");
    else if (props.id == "2") setTitle("구인사항");
    else if (props.id == "3") setTitle("근로조건");
    else if (props.id == "4") setTitle("근로조건");
    else if (props.id == "5") setTitle("전형사항");
    else if (props.id == "6") setTitle("전형사항");
    else if (props.id == "7") setTitle("기타사항");
  }, [props.id]);

  return (
    <div className="sub-title">
      {props.id == 1 ? (
        ``
      ) : (
        <button
          className="btn-back"
          onClick={(e) => {
            props.updateOfferId(String(Number(props.id) - 1));
          }}
        >
          이전
        </button>
      )}

      <span>{title}</span>
    </div>
  );
};

export default SubTitle;
