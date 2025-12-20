import { createSlice } from "@reduxjs/toolkit"

interface UiState {
  theme: "light" | "dark"
  isMobileMenuOpen: boolean
}

const initialState: UiState = {
  theme: "dark",
  isMobileMenuOpen: false,
}

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light"
    },
    toggleMobileMenu: (state) => {
      state.isMobileMenuOpen = !state.isMobileMenuOpen
    },
    closeMobileMenu: (state) => {
      state.isMobileMenuOpen = false
    },
  },
})

export const { toggleTheme, toggleMobileMenu, closeMobileMenu } = uiSlice.actions
export default uiSlice.reducer
