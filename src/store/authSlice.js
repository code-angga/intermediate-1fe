import { createSlice } from "@reduxjs/toolkit";

const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
const savedUser = localStorage.getItem("user");

const initialState = {
  users: savedUsers, // semua user terdaftar
  currentUser: savedUser || null,
  isLogin: !!savedUser,
  error: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerUser: (state, action) => {
      const exists = state.users.find(
        (u) => u.username === action.payload.username
      );

      if (exists) {
        state.error = "Username sudah terdaftar!";
        return;
      }

      state.users.push(action.payload);
      state.error = "";

      localStorage.setItem("users", JSON.stringify(state.users));
    },

    loginUser: (state, action) => {
      const user = state.users.find(
        (u) =>
          u.username === action.payload.username &&
          u.password === action.payload.password
      );

      if (!user) {
        state.error = "Username atau password salah!";
        return;
      }

      state.currentUser = user.username;
      state.isLogin = true;
      state.error = "";

      localStorage.setItem("user", user.username);
    },

    logout: (state) => {
      state.currentUser = null;
      state.isLogin = false;
      localStorage.removeItem("user");
    },

    clearError: (state) => {
      state.error = "";
    },
  },
});

export const { registerUser, loginUser, logout, clearError } =
  authSlice.actions;

export default authSlice.reducer;
