import Base from "@layouts/Baseof";
import { useEffect, useState } from "react";
import { updateReceiptStatusForUser } from "/remote/receipt";
import { useRouter } from "next/router";
const Detail = () => {
  const router = useRouter();
  const [applicant, setApplicant] = useState({
    userName: "",
    birth: "",
    fullAddress: "",
    gender: "",
    mobile: "",
  });
  useEffect(() => {
    const applicant = JSON.parse(localStorage.getItem("applicant"));
    console.log(applicant);
    setApplicant(applicant);
  }, []);

  const accept = () => {
    updateReceiptStatusForUser(applicant, "accepted");
    router.push("/applicant");
  };
  const reject = () => {
    updateReceiptStatusForUser(applicant, "rejected");
    router.push("/applicant");
  };
  return (
    <Base>
      <section className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form action="#" className="space-y-4">
                <div>
                  <label className="sr-only" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Name"
                    type="text"
                    id="name"
                    disabled
                    value={applicant.userName}
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Name"
                    type="text"
                    id="name"
                    disabled
                    value={applicant.birth}
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Name"
                    type="text"
                    id="name"
                    disabled
                    value={applicant.fullAddress}
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Name"
                    type="text"
                    id="name"
                    disabled
                    value={applicant.gender}
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Name"
                    type="text"
                    id="name"
                    disabled
                    value={applicant.mobile}
                  />
                </div>
                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                    onClick={accept}
                  >
                    수락
                  </button>
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-red-500 px-5 py-3 font-medium text-white sm:w-auto"
                    onClick={reject}
                  >
                    거절
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Base>
  );
};

export default Detail;
