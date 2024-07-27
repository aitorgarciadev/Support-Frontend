import { defineStore } from "pinia";
import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/support-requests";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error;
    if (response) {
      switch (response.status) {
        case 400:
          throw new Error(
            `Bad Request: ${
              response.data ||
              "The request could not be understood or was missing required parameters."
            }`
          );
        case 401:
          throw new Error(
            `Unauthorized: ${
              response.data ||
              "Authentication credentials were missing or incorrect."
            }`
          );
        case 403:
          throw new Error(
            `Forbidden: ${
              response.data ||
              "The request is understood, but it has been refused or access is not allowed."
            }`
          );
        case 404:
          throw new Error(
            `Not Found: ${
              response.data || "The requested resource could not be found."
            }`
          );
        case 500:
          throw new Error(
            `Server Error: ${
              response.data ||
              "An error occurred on the server while processing the request."
            }`
          );
        default:
          throw new Error(
            `Unexpected Error: ${
              response.data || "An unexpected error occurred."
            }`
          );
      }
    }
    throw error;
  }
);

export const useRequestStore = defineStore({
  id: "request",
  state: () => ({
    requests: [],
    error: null,
    isLoading: false,
  }),
  getters: {
    getRequestById: (state) => (id) =>
      state.requests.find((req) => req.id === id),
    totalRequests: (state) => state.requests.length,
  },
  actions: {
    async fetchAllRequests() {
      this.isLoading = true;
      try {
        const { data } = await api.get("");
        this.requests = data;
      } catch (error) {
        this.error = error.message;
      } finally {
        this.isLoading = false;
      }
    },

    async addRequest(newRequest) {
      this.isLoading = true;
      try {
        console.log("Sending request:", newRequest);
        const { data } = await api.post("", newRequest);
        this.requests.push(data);
      } catch (error) {
        console.error("Error response:", error.response);
        this.error = error.message;
      } finally {
        this.isLoading = false;
      }
    },

    async updateRequest(id, updatedRequest) {
      this.isLoading = true;
      try {
        const { data } = await api.put(`/${id}`, updatedRequest);
        const index = this.requests.findIndex((req) => req.id === id);
        if (index !== -1) {
          this.requests[index] = data;
        } else {
          throw new Error(`Request with id ${id} not found in local state.`);
        }
      } catch (error) {
        this.error = error.message;
      } finally {
        this.isLoading = false;
      }
    },

    async deleteRequest(id) {
      this.isLoading = true;
      try {
        await api.delete(`/${id}`);
        this.requests = this.requests.filter((req) => req.id !== id);
      } catch (error) {
        this.error = error.message;
      } finally {
        this.isLoading = false;
      }
    },

    clearError() {
      this.error = null;
    },
  },
});
