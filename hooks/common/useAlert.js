import { useEffect, useState } from "react";
import { useModalContext } from "context/state";
const useAlert = () => {
  const [alert, setAlert] = useModalContext();
  const [needsCleanup, setNeedsCleanup] = useState(false);

  const isAlert = (prompt) => {
    const promise = new Promise((resolve, reject) => {
      setAlert({
        prompt,
        isOpen: true,
        proceed: resolve,
        cancel: reject,
        type: "alert",
      });
      setNeedsCleanup(true);
    });

    const reset = () => {
      setAlert({
        prompt: "",
        proceed: null,
        cancel: null,
        isOpen: false,
        type: "",
      });
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
      if (alert.cancel && needsCleanup) {
        alert.cancel();
      }
    };
  }, [alert, needsCleanup]);

  return {
    ...alert,
    isAlert,
  };
};

export default useAlert;
