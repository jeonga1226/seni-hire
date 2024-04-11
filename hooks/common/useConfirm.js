import { useEffect, useState } from "react";
import { useModalContext } from "context/state";
const UseConfirm = () => {
  const  [confirm, setConfirm] = useModalContext();
  const [needsCleanup, setNeedsCleanup] = useState(false);

  const isConfirmed = (prompt) => {
    const promise = new Promise((resolve, reject) => {
      setConfirm({ prompt, isOpen: true, proceed: resolve, cancel: reject, type: "confirm" });
      setNeedsCleanup(true);
    });

    const reset = () => {
      setConfirm({ prompt: "", proceed: null, cancel: null, isOpen: false, type: "" });
      setNeedsCleanup(false);
    };

    return promise.then(
      () => {
        reset();
        return true;
      },
      () => {
        reset();
        return false;
      }
    );
  };

  // Call cancel in a cleanup func to avoid dangling confirm dialog
  useEffect(() => {
    return () => {
      if (confirm.cancel && needsCleanup) {
        confirm.cancel();
      }
    };
  }, [confirm, needsCleanup]);

  return {
    ...confirm,
    isConfirmed
  };
};

export default UseConfirm;
