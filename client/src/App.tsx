import React, { useState, createContext, Dispatch } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useRoutes } from './routes';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Navmenu } from './components/Navmenu';
import { observer } from 'mobx-react-lite';
import { useStore } from 'hooks';
import { Popup } from 'components/Popup';
import cn from 'classnames';

export interface ITheme {
  isOverflow: boolean;
  setOverflow: Dispatch<any>;
}

export const Theme = createContext<ITheme | null>(null);
const App = observer(() => {
  const { isAuthenticated } = useStore();
  const routes = useRoutes(isAuthenticated);
  const [modal, setModal] = useState(false);
  const [isOverflow, setOverflow] = useState(false);

  return (
    <Theme.Provider value={{ isOverflow, setOverflow }}>
      <Router>
        <Navbar
          setVisibleModal={setModal}
          isVisibleModal={modal}
          isAuthenticated={isAuthenticated}
        />
        <div className={cn(['container'], { ['overflow_hidden']: isOverflow })}>
          {routes}

          <Popup isVisibleModal={modal} setVisibleModal={setModal}></Popup>
        </div>
        <Footer />
      </Router>
    </Theme.Provider>
  );
});

export default App;
