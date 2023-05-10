import { createSlice } from "@reduxjs/toolkit";

const uniqueCards = ["yellow", "green", "pink", "blue", "gold", "orange"];
export const allCards = [...uniqueCards, ...uniqueCards];

const initialState = {
  board: Array.from(allCards, (element, index) => ({
    id: index,
    contents: element,
    visible: true,
    matched: true,
  })),
  moves: 0,
};

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    setBoard(state, action) {
      const newBoard = Array.from(action.payload, (element, index) => ({
        id: index,
        contents: element,
        visible: false,
        matched: false,
      }));
      return { board: newBoard, moves: 0 };
    },
    flipCard(state, action) {
      // card id matches with index of this card in array
      const firstCardId = action.payload;
      state.board[firstCardId].visible = true;
      const firstVisibleCard = state.board[firstCardId];

      const [secondCardId] = state.board
        .filter((card) => card.visible && card.id !== action.payload)
        .map((card) => card.id);

      const secondVisibleCard = state.board[secondCardId];

      if (secondVisibleCard) {
        state.moves += 1;
        if (secondVisibleCard.contents === firstVisibleCard.contents) {
          state.board[firstCardId] = {
            ...firstVisibleCard,
            visible: false,
            matched: true,
          };
          state.board[secondCardId] = {
            ...secondVisibleCard,
            visible: false,
            matched: true,
          };
        }
      }
    },
    reset(state) {
      state.board = state.board.map((card) => ({ ...card, visible: false }));
    },
  },
});

export const { setBoard, flipCard, reset } = boardSlice.actions;

export default boardSlice.reducer;

export const selectBoard = (state) =>
  state.board.board.map((card) => ({ id: card.id, contents: card.contents }));

export const selectMovesNumber = (state) => state.board.moves;

export const selectVisibleIDs = (state) =>
  state.board.board
    .filter((card) => card.visible === true)
    .map((card) => card.id);

export const selectMatchedIDs = (state) =>
  state.board.board
    .filter((card) => card.matched === true)
    .map((card) => card.id);
