import { createSlice } from "@reduxjs/toolkit";

const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
const savedUser = localStorage.getItem("user");
const savedToken = localStorage.getItem("token");

const initialState = {
  users: savedUsers,
  currentUser: savedUser || null,
  token: savedToken || null,
  isLogin: !!savedUser,
  error: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerUser: (state, action) => {
      const exists = state.users.find(
        (u) => u.username === action.payload.username,
      );

      if (exists) {
        state.error = "Username sudah terdaftar!";
        return;
      }

      state.users.push(action.payload);
      localStorage.setItem("users", JSON.stringify(state.users));
    },

    loginUser: (state, action) => {
      const user = state.users.find(
        (u) =>
          u.username === action.payload.username &&
          u.password === action.payload.password,
      );

      if (!user) {
        state.error = "Username atau password salah!";
        state.isLogin = false;
        return;
      }

      // berhasil login
      state.currentUser = user.username;
      state.isLogin = true;
      state.token = "auth-token-" + user.username; // dummy token
      state.error = "";

      localStorage.setItem("user", user.username);
      localStorage.setItem("token", state.token);
    },

    logout: (state) => {
      state.currentUser = null;
      state.isLogin = false;
      state.token = null;
      state.error;

      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },

    updateProfile: (state, action) => {
      const { oldUsername, username, password } = action.payload;

      const userIndex = state.users.findIndex(
        (u) => u.username === oldUsername,
      );

      if (userIndex === -1) return;

      state.users[userIndex] = { username, password };
      state.currentUser = username;

      localStorage.setItem("users", JSON.stringify(state.users));
      localStorage.setItem("user", username);
    },

    clearError: (state) => {
      state.error = "";
    },
  },
});

export const { registerUser, loginUser, logout, updateProfile, clearError } =
  authSlice.actions;

export default authSlice.reducer;
