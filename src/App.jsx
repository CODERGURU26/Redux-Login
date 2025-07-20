import React, { useState } from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'

import { persistStore } from 'redux-persist'
import Login from './Login'
import { PersistGate } from 'redux-persist/es/integration/react'

const persistor = persistStore(store)

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Login />
      </PersistGate>
    </Provider>
  )

}

export default App