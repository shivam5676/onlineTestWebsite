import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  question: [
    {
        no: 0,
        subject: "what will be sum of 3 and 2 ",
        A: "9",
        B: "6",
        C: "3",
        D: "5",
      },
    {
      no: 1,
      subject: "which day is today",
      A: "sunday",
      B: "monday",
      C: "wednesday",
      D: "friday",
    },
    {
      no: 2,
      subject: "what will be sum of 3+2 ",
      A: "9",
      B: "6",
      C: "3",
      D: "5",
    },
    ,
    {
      no: 3,
      subject: "what will be multiply of 3 and 2 ",
      A: "9",
      B: "6",
      C: "3",
      D: "5",
    },
    {
      no: 4,
      subject: "which day is after today",
      A: "sunday",
      B: "monday",
      C: "wednesday",
      D: "none of the above",
    },
    {
      no: 5,
      subject: "what will be sum of 3 and 2 ",
      A: "9",
      B: "6",
      C: "3",
      D: "5",
    },
    {
      no: 6,
      subject: "which day is today",
      A: "sunday",
      B: "monday",
      C: "wednesday",
      D: "friday",
    },
    {
      no: 7,
      subject: "what will be sum of 3+2 ",
      A: "9",
      B: "6",
      C: "3",
      D: "5",
    },
    ,
    {
      no: 8,
      subject: "what will be multiply of 3 and 2 ",
      A: "9",
      B: "6",
      C: "3",
      D: "5",
    },
    {
      no: 9,
      subject: "which day is after today",
      A: "sunday",
      B: "monday",
      C: "wednesday",
      D: "none of the above",
    },
    {
      no: 10,
      subject: "what will be sum of 3 and 2 ",
      A: "9",
      B: "6",
      C: "3",
      D: "5",
    },
  ],
  current: [
    {
        no: 0,
        subject: "what will be sum of 3 and 2 ",
        A: "9",
        B: "6",
        C: "3",
        D: "5",
      },
  ],
  selectorSheet: [
    { no: 0, attempted: false, submit: false },
    { no: 1, attempted: false, submit: false },
    { no: 2, attempted: false, submit: false },
    { no: 3, attempted: false, submit: false },
    { no: 4, attempted: false, submit: false },
    { no: 5, attempted: false, submit: false },
    { no: 6, attempted: false, submit: false },
    { no: 7, attempted: false, submit: false },
    { no: 8, attempted: false, submit: false },
    { no: 9, attempted: false, submit: false },
    { no: 10, attempted: false, submit: false },
    { no: 11, attempted: false, submit: false },
    
  ],
};

const questionSlice = createSlice({
  name: "test questions",
  initialState: initialState,
  reducers: {
    questionList() {},
    currentQuestion() {
      //current+1 when submit button will be clicked or skip btn will be clicked
    },
    submitQuestion(state, action) {
      console.log(action);
      const question = state.selectorSheet;
      question[action.payload].attempted = true;
      question[action.payload].submit = true;
      state.selectorSheet = question;
      state.current = [state.question[action.payload+1]];
    },
    skipQuestion(state, action) {
      const queNo = action.payload;
  

      const question = state.selectorSheet;
   
      question[action.payload].attempted = true;
   
     
      state.selectorSheet = question;

      state.current = [state.question[action.payload+1]];
    },
  },
});
export const questionSliceAction = questionSlice.actions;
const questionSlicereducer = questionSlice.reducer;
export default questionSlicereducer;