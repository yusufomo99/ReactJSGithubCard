# ReactJSGithubCard
A githubCard in React JS

The RactJS code for this project can be found here https://github.com/yusufomo99/ReactJSGithubCard/new/, 

I created a App Class that extends React.Component 'class App extends React.Component'and it is the main Class that gets rendered in the DOM becayse it handles the UI. All other Classes are called from it.
The Card Class handles the UI of the data array from the API. and the Form Class handles the logic of interacting with Github API and oushing the data for display on CardList Class.

The "props" parameter in the App constructor  enables easy access of data from different Classes.

React components has a built-in state object.
The state object is where you store property values that belongs to the component.
When the state object changes, the component re-renders.
Changing the state Object
To change a value in the state object, use the this.setState() method.
When a value in the state object changes, the component will re-render, meaning that the output will change according to the new value(s). You can check more on my medium.com article on it here https://medium.com/@yusufjimohaweda/toggling-setstate-in-react-js-91a79eceb120 and 
https://github.com/yusufomo99/Toggling-setState-in-React-JS/blob/master/reactsetStateToggle.js


On the Form Class, axios was used to get the data from the github api and JS Es6 async. below is the synopsis

state ={userName:''};
   handleSubmit = async (event)=>{
   
    event.preventDefault();
     const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);
   this.props.onSubmit(resp.data);
     
    this.resetInput();
     //this.setState({userName:''})
  
  }


