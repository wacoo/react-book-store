import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';

const initialState = {
  isLoading: false,
  books: [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
  ],
  error: undefined,
};

const postBook = createAsyncThunk('book/postBook', async (book) => {
  try {
    const res = await axios.post(`${URL}/apps/pl26YsC3m6nFxyjIbE8C/books`, book);
    return (await res).data;
  } catch (err) {
    return err.message;
  }
});

const getBook = createAsyncThunk('book/getBook', async () => {
  try {
    const res = await axios.get(`${URL}/apps/pl26YsC3m6nFxyjIbE8C/books`);
    // console.log((await res).data.item1);
    return (await res).data;
  } catch (err) {
    return err.message;
  }
});

const removeBook = createAsyncThunk('book/removeBook', async (bookId) => {
  try {
    const res = axios.delete(`${URL}/apps/pl26YsC3m6nFxyjIbE8C/books/${bookId}`);
    // console.log((await res).data.item1);
    return (await res).data;
  } catch (err) {
    return err.message;
  }
});

const bookSlice = createSlice({
  name: 'book',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(postBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postBook.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(postBook.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(getBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books = [];
        const { payload } = action;
        if (typeof payload !== 'object') {
          state.error = 'Payload must be an object';
        } else {
          Object.entries(payload).forEach(([key, val]) => {
            const st = {};
            st.item_id = key;
            st.title = val[0].title;
            st.author = val[0].author;
            st.category = val[0].category;
            state.books.push(st);
          });
          state.error = '';
        }
      })
      .addCase(getBook.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(removeBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books.push(action.payload);
      })
      .addCase(removeBook.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default bookSlice.reducer;
export { postBook, getBook, removeBook };
