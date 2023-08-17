import "./App.css"

import Todo from "./components/todo/Todo"
import {Provider} from "react-redux"
// import { store } from "./store"
function App() {
  return (
    <div className="app">
      {/* <Provider store={store}>
     
      </Provider> */}
      <Todo />
    </div>
  )
}

export default App
