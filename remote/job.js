import { doc, collection, setDoc, getDoc, getDocs } from "firebase/firestore";

import { store } from "@remote/firebase";

export function registJob(job) {
  // 직업(생성된 ID)를 넣어줄 빈 문서를 추가
  const jobRef = doc(collection(store, "JOB"));

  // 용지에 내용을 채워 문서에 담는다.
  return setDoc(jobRef, job);
}

export async function getJobList(filterData) {
  const col = collection(store, "JOB");
  const docs = await getDocs(col);
  let items = [];

  docs.forEach((doc) => {
    items.push({
      ...doc.data(),
      id: doc.id, // id 추가
    });
  });

  if (filterData) {
    items = items.filter((item) => item.plDetAddr?.includes(filterData));
  }

  return items;
}

// // jobId로 한가지만 가져옴
// export async function getJobDetail(id) {
//   const col = collection(store, "JOB");
//   const docs = await getDocs(col);
//   let items = [];

//   docs.forEach((doc) => {
//     items.push(doc.data());
//   });

//   items = items.filter((item) => item.id == id)[0];

//   return items;
// }

// jobId로 한가지만 가져옴
export async function getJobDetail(id) {
  const col = collection(store, "JOB");
  const docs = await getDocs(col);
  let items = [];

  docs.forEach((doc) => {
    if (doc.id == id) {
      items.push({
        ...doc.data(),
        id: doc.id
      });
    }
  });

  // items = items.filter((item) => item.id == id)[0];

  return items[0];
}

export async function getJobInfo(id) {
  const jobSnapShot = await getDoc(doc(collection(store, "JOB"), id));

  return jobSnapShot.data();
}
