
import {
  doc,
  collection,
  setDoc,
  getDoc,
  getDocs,
  updateDoc,
  query,
  where,
  orderBy,
  limit,
  deleteDoc
} from "firebase/firestore";

import { store } from "@remote/firebase";
import { getJobDetail, getJobInfo } from "@remote/job";

const RECEIPT_COLLECTION = "RECEIPT";
const RECEIPT_REF = collection(store, RECEIPT_COLLECTION);

// 접수 등록
export async function AddReceipt(receiptData) {
  // RECEIPT 컬렉션의 마지막 문서를 가져와 새로 등록할 문서의 ID값 만들어주기 (id+1)
  const q = query(RECEIPT_REF, orderBy("regDate", "desc"), limit(1));
  const querySnapshot = await getDocs(q);
  const lastReceiptId = querySnapshot.docs[0].id;
  const lastIndex = Number(lastReceiptId.match(/\d+/)[0]) + 1;

  // RECEIPT 컬렉션에 새로운 접수 데이터 등록
  const receiptId = RECEIPT_COLLECTION + lastIndex;
  const receiptRef = doc(RECEIPT_REF, receiptId);
  await setDoc(receiptRef, receiptData);
}

// 나의 접수 내역 조회
export async function GetReceiptByUser(userData) {
  const userQuery = query(
    RECEIPT_REF,
    where("userName", "==", userData.userName),
    where("gender", "==", userData.gender),
    where("birth", "==", userData.birth),
    where("mobile", "==", userData.mobile)
  );
  const querySnapshot = await getDocs(userQuery);
  const receipts = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  const jobDetailsPromises = receipts.map((receipt) =>
    getJobDetail(receipt.jobId)
  );
  const jobDetails = await Promise.all(jobDetailsPromises);

  const receiptJoinJobDetail = receipts.map((receipt) => {
    const jobDetail = jobDetails.find((detail) => detail.id === receipt.jobId);
    return { ...receipt, jobDetail };
  });

  return receiptJoinJobDetail;
}

// 전체 접수 리스트 가져오기
export async function GetAllReceipts() {
  const querySnapshot = await getDocs(RECEIPT_REF);
  const receipts = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return receipts;
}

// ID로 접수내역 가져오기
export async function GetReceiptById(receiptId) {
  const receiptRef = doc(RECEIPT_REF, receiptId);
  const receiptSnapshot = await getDoc(receiptRef);
  return receiptSnapshot.exists()
    ? { id: receiptSnapshot.id, ...receiptSnapshot.data() }
    : null;
}

// ID로 접수내역 가져오기
export async function GetapplicantList(jobId) {
  const userQuery = query(RECEIPT_REF, where("jobId", "==", jobId));
  const querySnapshot = await getDocs(userQuery);
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

export async function updateReceiptStatusForUser(applicant, status) {
  const userQuery = query(
    RECEIPT_REF,
    where("userName", "==", applicant.userName),
    where("gender", "==", applicant.gender),
    where("birth", "==", applicant.birth),
    where("mobile", "==", applicant.mobile)
  );
  const querySnapshot = await getDocs(userQuery);

  // 검색된 문서들에 대해 반복하여 업데이트 수행
  const updatePromises = querySnapshot.docs.map(async (docSnapshot) => {
    const docRef = doc(RECEIPT_REF, docSnapshot.id); // 문서 참조 생성
    await updateDoc(docRef, { status: status }); // status 필드 업데이트
  });

  // 모든 업데이트 작업이 완료될 때까지 기다림
  await Promise.all(updatePromises);
}

// 접수취소
export async function CancelReceipt(receiptId) {
    const receiptRef = doc(RECEIPT_REF, receiptId);
    try {
        await deleteDoc(receiptRef)
    } catch (error) {
        console.error("Error", error);
    }
}

