import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../utils/firebase";

export const BlogThunk = createAsyncThunk("blog/data", async () => {
  const querySnapshot = await getDocs(collection(db, "contents"));
  const result = [] as any;
  querySnapshot.forEach((data) => {
    result.push({ ...data.data(), id: data.id });
  });
  return result;
});
