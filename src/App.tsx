import React from 'react';
import FirstPageUserChoosesCard from "../src/components/FirstPageUserChoosesCard/FirstPageUserChoosesCard";
import SecondPageUserChoosesRows from "../src/components/SecondPageUserChoosesRow/SecondPageUserChoosesRow";
import ThirdPageUserIsShownTheirChosenCard from "../src/components/ThirdPageUserIsShownTheirChosenCard/ThirdPageUserIsShownTheirChosenCard";
import { HashRouter, Switch, Route} from "react-router-dom";
import './App.css';

const App: React.FC = () => {

  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route path="/" exact component={FirstPageUserChoosesCard} />
          <Route path="/choose-row" exact component={SecondPageUserChoosesRows} />
          <Route path="/result" exact component={ThirdPageUserIsShownTheirChosenCard} />
        </Switch> 
      </HashRouter>
    </div>
  );
}

export default App;
