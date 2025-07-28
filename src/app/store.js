import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/paswds/pswds.js'
import formReducer from './features/paswds/form.js'


export const store = configureStore({
  reducer: {
     counter: counterReducer,
     form : formReducer,
  },
})