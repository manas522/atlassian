import {BrowserRouter, Switch, Route} from "react-router-dom";
import {Provider} from "react-redux";
import Clock from "@src/components/clock";
import Tree from "@src/components/tree";
import classnames from 'classnames/bind';
import style from "./app.module.scss";
import store from "./reducer";
const cx = classnames.bind(style)
function App() {
  console.log(store.getState().tree.root);
  return (
    <Provider store={store}>
      <main className={cx("app")}>
        <header className={cx("app__header")}>
          <h1>Atlassian Browser Interview</h1>
        </header>
        <section className={cx("app__router")}>
          <BrowserRouter>
            <Switch>
              <Route path="/" component={Clock} exact={true}/>
              <Route path="/tree" component={Tree}  exact={true}/>
            </Switch>
          </BrowserRouter>
        </section>
      </main>
    </Provider>
  );
}

export default App;
