import React, { Component } from 'react';
// import logo from '../logo.svg';
import './App.css';
// import Dashboard from './Dashboard'
import Main from './Main'
// import Users from './Users'
import Create from './Create'
import Stacks from './Stacks'
import SignIn from './Sign-in'
import SignUp from './Sign-up'
// import Filter from './Filter'
import TopNav from './TopNav'
import QuizRoom from './QuizRoom'
// import {Grid} from 'react-bootstrap'
// import { render } from 'react-dom';
import faker from 'faker'
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';

// import react router
import {Route, Switch} from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userObj: null,
      stacks: [
        {
          id: faker.random.number({ min: 1, max: 100 }),
          name: faker.random.word(),
          // title: faker.random.word(),
          // owner: '',
          // cards: [
          //   sentence: [
          //
          //   ]
          // ],
          description: faker.random.words(),
          quantity: faker.random.number({ min: 2, max: 100 }),
        },
        {
          id: faker.random.number({ min: 1, max: 100 }),
          name: faker.random.word(),
          description: faker.random.words(),
          quantity: faker.random.number({ min: 2, max: 100 }),
        },
        {
          id: faker.random.number({ min: 1, max: 100 }),
          name: faker.random.word(),
          description: faker.random.words(),
          quantity: faker.random.number({ min: 2, max: 100 }),
        },
        {
          id: faker.random.number({ min: 1, max: 100 }),
          name: faker.random.word(),
          description: faker.random.words(),
          quantity: faker.random.number({ min: 2, max: 100 }),
        },
        {
          id: faker.random.number({ min: 1, max: 100 }),
          name: faker.random.word(),
          description: faker.random.words(),
          quantity: faker.random.number({ min: 2, max: 100 }),
        },
        {
          id: faker.random.number({ min: 1, max: 100 }),
          name: faker.random.word(),
          description: faker.random.words(),
          quantity: faker.random.number({ min: 2, max: 100 }),
        },
        {
          id: faker.random.number({ min: 2, max: 100 }),
          name: faker.random.word(),
          description: faker.random.words(),
          quantity: faker.random.number({ min: 1, max: 100 }),
        },
        {
          id: faker.random.number({ min: 2, max: 100 }),
          name: faker.random.word(),
          description: faker.random.words(),
          quantity: faker.random.number({ min: 1, max: 100 }),
        },
        {
          id: faker.random.number({ min: 2, max: 100 }),
          name: faker.random.word(),
          description: faker.random.words(),
          quantity: faker.random.number({ min: 1, max: 100 }),
        },
      ]
    }
    this.handleStoringUsers = this.handleStoringUsers.bind(this);
  }

  //make a function that sets the state in the app and bind that function in the constructor and pass it down to the nav, so from the nav we can set the state

  handleStoringUsers(userObj) {
    this.setState({ userObj });
    console.log("this.state!!!", this.state.userObj)
  }

  componentDidMount() {
    const oauthScript = document.createElement("script");
    oauthScript.src = "https://cdn.rawgit.com/oauth-io/oauth-js/c5af4519/dist/oauth.js";

    document.body.appendChild(oauthScript);
  }

  render(){
    debugger
    return (
      <div className="App">
        <TopNav handleStoringUsers={this.handleStoringUsers} userObj={this.state.userObj}/>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/stacks" render={({staticcontext, ...props }) => <Stacks {...props} stacks={this.state.stacks} />}/>
          {/* <Route path="/users" component={Users} /> */}
          <Route path="/create" component={(props) => <Create {...props} userObj={this.state.userObj} />} />
          <Route path="/quizroom" component={QuizRoom} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
        </Switch>
      </div>
      )
  }
};

export default App;
