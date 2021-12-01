import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import PropTypes from 'prop-types';
import MyWorkView from '../views/MyWorkView';
import InspoView from '../views/InspoView';
import MyWorkDetailsView from '../views/MyWorkDetailsView';
import InspoDetailsView from '../views/InspoDetailsView';
import MyWorkForm from '../components/MyWorkForm';
import InspoForm from '../components/InspoForm';
import EditMyWorkView from '../views/EditMyWorkView';
import EditInspoView from '../views/EditInspoView';

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={MyWorkView} />
        <Route exact path="/inspos" component={InspoView} />
        <Route
          exact
          path="/myWorkDetails/:firebaseKey"
          component={MyWorkDetailsView}
        />
        <Route
          exact
          path="/inspoDetails/:firebaseKey"
          component={InspoDetailsView}
        />
        <Route exact path="/newArt" component={MyWorkForm} />
        <Route exact path="/newInspo" component={InspoForm} />
        <Route exact path="/editArt/:firebaseKey" component={EditMyWorkView} />
        <Route exact path="/editInspo/:firebaseKey" component={EditInspoView} />
      </Switch>
    </div>
  );
}
// Routes.propTypes = {
//   uid: PropTypes.string,
// };
// Routes.defaultProps = { uid: '' };
