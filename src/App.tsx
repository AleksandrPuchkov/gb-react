import React, { FC, useState } from 'react'
import { Provider } from 'react-redux'
import { defaultContext, ThemeContext } from './utils/ThemeContext'
import { AppRouter } from './components/AppRouter'
import { persistor, store } from './store'
import { PersistGate } from 'redux-persist/integration/react'

export const App: FC = () => {
  const [theme, setTheme] = useState(defaultContext.theme);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={
      {
        theme,
        toggleTheme,
      }
    }>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <AppRouter />
        </PersistGate>
      </Provider>
    </ThemeContext.Provider>
  )
};