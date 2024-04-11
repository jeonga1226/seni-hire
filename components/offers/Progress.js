import { useState, useEffect } from "react";

const Progress = ({ id }) => {
  console.log("Progress props   >>", id);
  const [percent, setPercent] = useState("");

  useEffect(() => {
    if (id == "1") setPercent("0");
    else if (id == "2") setPercent("15");
    else if (id == "3") setPercent("30");
    else if (id == "4") setPercent("45");
    else if (id == "5") setPercent("60");
    else if (id == "6") setPercent("75");
    else if (id == "7") setPercent("90");
  }, [id]);

  return (
    <div className="progress-box">
      <progress
        className="w100p"
        id="percentPrgs"
        max="100"
        value={percent}
      ></progress>
      <p className="">{percent}%</p>
    </div>
  );
};

export default Progress;
