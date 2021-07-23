import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/topicsSlice";

const quizzesSlice = createSlice({
  name: 'quizzes',
  initialState:{
    quizzes:{}
  },
  reducers:{
    addQuiz: (state, action) => {
      state.quizzes[action.payload.id] = action.payload;
    }
  }
});

export const quizActionCreator = (payload) => {
  const {id, topicId} = payload;
  return (dispatch) => {
    dispatch(quizzesSlice.actions.addQuiz(payload));
    dispatch(addQuizId({id,topicId}))
  }
}
export const selectQuizzes = (state) => state.quizzes.quizzes;
export const {addQuiz} = quizzesSlice.actions;
export default quizzesSlice.reducer