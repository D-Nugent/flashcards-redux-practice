import { createSlice } from "@reduxjs/toolkit"

const topicsSlice = createSlice({
  name: 'topics',
  initialState: {
    topics:{}
  },
  reducers:{
    addTopic: (state,action) => {
      state.topics[action.payload.id] = {...action.payload,quizIds:[]}
    },
    addQuizId: (state,action) => {
      const {topicId,id} = action.payload;
      state.topics[topicId].quizIds.push(id);
    }
  }
})

export const selectTopics = (state) => state.topics.topics;
export const {addTopic, addQuizId} = topicsSlice.actions;
export default topicsSlice.reducer;