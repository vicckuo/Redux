import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import FormPage from './routes/FormPage';
import MenuPage from './routes/MenuPage';

import { Provider } from 'react-redux';
import store from './data/store'

function Layout(props) {
  //使用react-redux和useSelector
  const account = useSelector((state) => state.account)
  const password = useSelector((state) => state.password)

  return (
    <>
      <nav>
        <Link to="/">點我連結到第一頁</Link>
        <Link to="/form" style={{ marginLeft: '20px' }}>
          點我連到第二頁
        </Link>
        <br />
        <span>目前登入帳號：{account}</span>
        <br />
        <span>目前登入密碼：{password}</span>
      </nav>
      {props.children}
    </>
  )
}

function App() {

  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes>
            <Route exact path="/" element={<MenuPage />}>
            </Route>
            <Route path="/form" element={<FormPage />}>
            </Route>
          </Routes>
        </Layout>
      </Router >
    </Provider>
  )
}

export default App