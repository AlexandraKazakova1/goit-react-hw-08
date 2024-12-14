import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.goit.global";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials) => {
    const { data } = await axios.post("/users/signup", credentials);
    setAuthHeader(data.token);
    return data;
  }
);

export const login = createAsyncThunk("auth/login", async (credentials) => {
  const { data } = await axios.post("/users/login", credentials);
  setAuthHeader(data.token);
  return data;
});

export const logout = createAsyncThunk("auth/logout", async () => {
  await axios.post("/users/logout");
  clearAuthHeader();
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, { getState }) => {
    const state = getState();
    const token = state.auth.token;
    if (!token) return;
    setAuthHeader(token);
    try {
      const { data } = await axios.get("/users/current");
      return data;
    } catch (error) {
      clearAuthHeader();
      return rejectWithValue(error.message);
    }
  }
);
