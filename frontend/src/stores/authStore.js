import { create } from "zustand";
import { persist } from "zustand/middleware";
import toast from "react-hot-toast";
import { jwtDecode } from "jwt-decode";
import api from "../lib/axios.js";

const refreshToken = async () => {
  try {
    const token = localStorage.getItem('token');
    if (!token) return false;
    
    const decoded = jwtDecode(token);
    if (decoded.exp * 1000 - Date.now() < 900000) {
      const response = await api.post('/api/auth/refresh', {}, {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      if (response.data?.token) {
        localStorage.setItem('token', response.data.token);
        return true;
      }
    }
    return false;
  } catch (error) {
    console.error('Token refresh failed:', error);
    return false;
  }
};

const useAuthStore = create(
  persist(
    (set, get) => ({
      // State
      user: null,
      isAuthenticated: false,
      userProfile: null,
      repos: null,
      techStack: {},
      isLoading: false,
      error: null,
      token: null,

      // Initialize authentication state
      initialize: async () => {
        try {
          const token = localStorage.getItem('token');

          if (!token) {
            set({ isLoading: false });
            return;
          }

          const decoded = jwtDecode(token);

          if (decoded.exp * 1000 < Date.now()) {
            const refreshed = await refreshToken();
            if (!refreshed) throw new Error('Token refresh failed');

            const newToken = localStorage.getItem('token');
            const newDecoded = jwtDecode(newToken);
            
            set({
              user: {
                id: newDecoded.id,
                username: newDecoded.username,
                avatar: newDecoded.avatar
              },
              token: newToken,
              isAuthenticated: true,
              isLoading: false
            });
          } else {
            set({
              user: {
                id: decoded.id,
                username: decoded.username,
                avatar: decoded.avatar
              },
              token,
              isAuthenticated: true,
              isLoading: false
            });
          }
        } catch (error) {
          console.error('Auth initialization error:', error);
          localStorage.removeItem('token');
          set({
            user: null,
            token: null,
            isAuthenticated: false,
            isLoading: false
          });
        }
      },

      // GitHub login
      loginWithGitHub: () => {
        localStorage.removeItem('token');
        const timestamp = new Date().getTime();
        window.location.href = `http://localhost:5000/api/auth/github?t=${timestamp}`;
      },

      // Logout
      logout: async () => {
        try {
          const token = localStorage.getItem('token');
          if (token) {
            await api.post('/api/auth/logout', {}, {
              headers: { Authorization: `Bearer ${token}` }
            }).catch(err => console.log('Logout API error (non-critical):', err));
          }
        } catch (error) {
          console.error('Logout error:', error);
        }

        localStorage.removeItem('token');
        localStorage.removeItem('githubToken');

        set({
          user: null,
          token: null,
          isAuthenticated: false,
          techStack: {},
          userProfile: null,
          repoData: null
        });

        toast.success("Logged out successfully.");

        // Optional: Force clean GitHub OAuth state
          setTimeout(() => {
            window.location.href = "https://github.com/logout";
          }, 500);
      },

      // Set authentication data after successful login
      setAuthData: (authData) => {
        if (!authData?.token || !authData?.user) return;

        localStorage.setItem('token', authData.token);
        set({
          user: authData.user,
          token: authData.token,
          isAuthenticated: true
        });
      },

      getUserContributions: async () => {
        try {
          set({isLoading: true});

          const response = await api.get("/api/auth/contributions");

          set({isLoading: false})

          console.log(`contributions: ${response.data.contributions}`)

          toast.success(response.data.message)
        } catch (error) {
          set({isLoading: false})
          toast.error("Couldn't analyze your github profile")
        }
      },

      // Setup auto token refresh
      setupTokenRefresh: () => {
        refreshToken();
        const interval = setInterval(refreshToken, 600000);
        return () => clearInterval(interval);
      }
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({ 
        token: state.token,
        user: state.user,
        isAuthenticated: state.isAuthenticated 
      }),
    }
  )
);

export default useAuthStore;