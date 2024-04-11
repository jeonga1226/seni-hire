import React, { useEffect } from "react";
import useConfirm from "@hooks/common/useConfirm";
import Portal from "@components/common/Portal";
import Alert from "@components/common/Alert";
import Confirm from "@components/common/Confirm";

const Modal = () => {
  const { prompt = "", isOpen = false, proceed, cancel, type } = useConfirm();

  useEffect(() => {
    const handleKeydown = (e) => {
      if (proceed && isOpen && e.key === "Enter") {
        proceed();
      }
    };

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [proceed, isOpen]);

  return (
    <Portal>
      {isOpen && (
        // alert 백그라운드
        <div className="fixed bottom-0 left-0 right-0 top-0 z-10 ">
          <div className="absolute left-0 top-0 z-20 h-full w-full bg-black/60"></div>
          <div className="relative z-30 table h-full w-full">
            <div className="table-cell align-middle">
              {/* alert */}
              {type === "alert" ? (
                <Alert prompt={prompt} proceed={proceed} cancel={cancel} />
              ) : (
                <Confirm prompt={prompt} proceed={proceed} cancel={cancel} />
              )}
            </div>
          </div>
        </div>
      )}
    </Portal>
  );
};

export default Modal;
