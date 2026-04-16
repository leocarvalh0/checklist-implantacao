import { Provider } from 'react-redux'

import { store } from './store'

import Checklist from './components/Checklist'

import { GlobalCss } from './styles'

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <GlobalCss />
        <Checklist />
      </div>
    </Provider>
  )
}

export default App
