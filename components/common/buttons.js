"use client";
import UseConfirm from "@hooks/common/useConfirm";
import UseAlert from "@hooks/common/useAlert";
import Link from "next/link";
const buttons = () => {
  // const { isConfirmed } = UseConfirm();
  // const { isAlert } = UseAlert();
  return (
    <div className=" flex justify-center">
      <Link
        className="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
        href="/organization/list"
      >
        리스트
      </Link>
      {/* Border */}
      <Link
        className="inline-block rounded border border-indigo-600 px-12 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
        href="/organization/map"
      >
        지도
      </Link>
    </div>
  );
};

export default buttons;
