# Exploring react / redux

## React

### Class-based Components

- Use classes to create
- Contain state
- Contain lifecycle hooks
- Props automatically attached
- Not concerned with UI

### Functional Components

- Use functions to create
- Don't contain state
- Retrieve data from props
- Props passed in as params
- Only concerned with UI

#### Basic syntax

```js
class App extends Component {
  state = {
    users: [{ id: 1, name: 'Someone', age: 18 }]
  };
  addUser = (newUser) => {
    newUser.id = Math.random();
    let users = [...this.state.users, newUser];
    this.setState({ users: users });
  };
  deleteUser = (id) => {
    let users = this.state.users.filter((user) => {
      return user.id !== id;
    });
    this.setState({ users: users });
  };
  render() {
    return (
      <div className='App'>
        <Profile deleteUser={this.deleteUser} users={this.state.users} />
        <AddUser addUser={this.addUser} />
      </div>
    );
  }
}
```

#### `this` keyword

- Failed Example:

```js
class App extends Component {
  state = { name: 'Someone', age: 10 };
  handleClick(e) {
    console.log(this.state); //state is undefined
  }
}
```

- Reason:
  Generally, the value of `this` keyword is determined by how and where the function is called, not by where the function sits.  
  By default, in reaction to a DOM event in the browser window, the value of `this` keyword is lost in the function. (so it is undefined)
  `render()` is a build-in react function, so `this` is bound to react component instance automatically.

- Solution:

  1. Use arrow function (Easiest way)

     ```js
     handleClick = (e) => {
       console.log(this.state);
     };
     ```

     Bind value of `this` to whatever `this` is outside of the function, which is the react component instance in this case.

  2. Bind `this` manually where the function is called

     ```js
     <form className='form' onSubmit={this.handleSubmit.bind(this)}>
       // Omitted
     </form>
     ```

     The contect of `this` is set to what's been passed to `bind()`

  3. Bind `this` in constructor(less popular)

     ```js
     class App extends Component {
     constructor() {
       super();
       this.state = { name: 'Someone', age: 10 }
       this.handleChange = this.handleChange.bind(this);
     }
     ```

## React Router

```
npm install react-router-dom
```

Basic Syntax Example:
`App.js`

```js
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route path='/' component={Home} />
          <Route path='/about' component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
```

`Navbar.js`

```js
import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/about'>About</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
```

`<Link to='/about'>About</Link>` - Works like `<a href='/about'>About</a>`
`<NavLink to='/about'>About</NavLink>` - When this link is clicked, `active` class is added.

### Programmatic Redirects

React Router automatically apply `props` (contains `history`, `location`, and `match`) to every `Route`.
Using these props can achieve programmatic redirects.

#### Router Parameters

Example:

```
props.match.params.user_id
```

Note: The name of the parameter (e.g.`user_id`) needs to match what's in the Route (e.g. Navbar.js)

```js
<Route path="/:user_id" component={User}>
```

#### Switch

By wrapping `Switch` tag around `Route`, `Router` will only match the first one it found. Otherwise, `Router` will match all the `Route` tags that match.

Example:

```js
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/:user_id' component={About} />
          </Switch>
        </div>
      </Router>
    );
  }
}
```

Note; Route `/about` and `/:user_id` will both be matched if `Switch` is not used.

#### Forced redirect

Example:

```js
setTimeout(() => {
  props.history.push('/');
}, 2000);
```

Expected behavior: Jump to the top page after 2s.

For components that do not in `Route`, by default, React Router doesn't pass props. (e.g. in example above, `<Navbar/>` does not receive `props` by default)

To add React Router props manually, we can use a higher order component, `withRouter`.

Example:
`Navbar.js`

```js
import { NavLink, withRouter } from 'react-router-dom';
const Navbar = (props) => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/about'>About</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default withRouter(Navbar);
```

## Redux

A central data store for all app data, so that no data is passing around component tree (i.e. prop drilling). By using Redux, it makes state management easy.

- Get data: Components can reach out to Redux for data
- Update data: States can only be updated by `Reducer`
  _Update Process_:
  1. Changes made on one `Component`
  2. `Component` **dispatches** an action (e.g. ADD_POST)
  3. Action passed to `Reducer`
  4. `Reducer` updates the central state
  5. `Redux` passes the changes to all components that subscribes to this changes (i.e. using this data as props)

Example in a nutshell

```js
const { createStore } = Redux;

const initState = {
  users: [],
  posts: []
};

function myReducer(state = initState, action) {
  if (action.type === 'ADD_POST') {
    return {
      // spread everything in state
      ...state,
      posts: [...state.posts, action.post]
    };
  }
}
// pass reducer function to Redux (every changes will go through the reducer)
const store = createStore(myReducer);

// listen and react to the changes (trigger every time when data changed)
store.subscribe(() => {
  console.log(store.getState());
});

// mimic changes in component
const action = {
  type: 'ADD_POST',
  post: { title: 'some title', body: 'some body content' }
};

store.dispatch(action);
```

## React Context API

Context provides a way to pass data through the component tree without having to pass props down manually at every level.
Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language.

### Example Steps

1. Set up `ThemeContext` and `ThemeContextProvider`
2. Wrap components with provider
   ```js
   function App() {
     return (
       <div className='App'>
         <ThemeContextProvider>
           <Navbar />
           <BookList />
         </ThemeContextProvider>
       </div>
     );
   }
   ```
3. Import `Context` in children component (as follows)

   **Method 1** - Using `React.createContext`

   - Can only be use with class component
   - Cannot achieve using multiple context in one component (another one would need to `Context.Consumer`)

   ```js
   class Navbar extends Component {
     static contextType = ThemeContext;
     render() {
       const { isLightTheme, light, dark } = this.context;
       const theme = isLightTheme ? light : dark;
       return (
         <nav style={{ background: theme.ui, color: theme.syntax }}>
           <h1>Context API</h1>
           <ul>
             <li>Home</li>
             <li>About</li>
             <li>Contact</li>
           </ul>
         </nav>
       );
     }
   }
   ```

   **Method 2** - Using `Context.Consumer`

   - Can use on both class and functional components
   - Able to consume multiple context in one component (e.g. wrapping outside of `ThemeContext.Consumer`)

   ```js
   class Navbar extends Component {
     render() {
       return (
         <ThemeContext.Consumer>
           {(context) => {
             const { isLightTheme, light, dark } = context;
             const theme = isLightTheme ? light : dark;
             return (
               <nav style={{ background: theme.ui, color: theme.syntax }}>
                 <h1>Context API</h1>
                 <ul>
                   <li>Home</li>
                   <li>About</li>
                   <li>Contact</li>
                 </ul>
               </nav>
             );
           }}
         </ThemeContext.Consumer>
       );
     }
   }
   ```
