
  const testData = [
    ];


const CardList = (props) => (
 <div>
  {props.profiles.map(profile=><Card {...profile}/>)}
  
  </div>
);


class Card extends React.Component {
 
  render(){
    const profile = this.props;
    return (
      
     <div className="github-profile">
        <img src={profile.avatar_url} />
        <div className="info">
          <div className="name" style={{color: 'green'}}>{profile.name}</div>
          <div className="name" style={{color: 'green'}}>{profile.public_repos} repos</div> 
          
                   <div className="name" style={{color: 'green'}}>{profile.followers} followers </div>
          <div className="company">{profile.company}</div>
      
        </div>
        <hr />
      </div>
    );
   
  }

}


//Form
class Form extends React.Component {
 //Using ReactRef userNameInput = React.createRef();
  state ={userName:''};
   handleSubmit = async (event)=>{
   
    event.preventDefault();
     const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);
   this.props.onSubmit(resp.data);
     
    this.resetInput();
     //this.setState({userName:''})
  
  }
   //reset Input
   resetInput = ()=>this.setState({userName:''})


  render(){
  
    
    return (
      
      <form  onSubmit={this.handleSubmit}>
        <input id="myvalue" type="text"
          placeholder="type here.." 
          value={this.state.userName}
          onChange= {(event)=>this.setState({userName:event.target.value})}
          
          //using Reacr Ref ref={this.userNameInput }
          required /> <input type="submit" value="Add User" />
         
        </form>
  
    );
   
  }

}


//Form End




//Begin App Render
class App extends React.Component {
  

 constructor(props){
   
   super(props);
   this.state = {profiles:testData};
 this.addNewProfile = (profileData)=>{
     this.setState((prevState) =>({profiles: [...prevState.profiles, profileData]
                                  }));
   }
   
 }
  // state = {profiles:testData ,}; Easy babel option 
  render(){
    return(
     <div className="header">
      {this.props.title}
        <Form onSubmit={this.addNewProfile} />
      <CardList profiles ={this.state.profiles} />
        
    </div>
    ) 
   
  }
  
 //}
}

/*
const App = ({title})=>(
<div className="header">{title}</div>
);

*/


ReactDOM.render(<App title="The Github Card App" />, mountNode);

/*
NOtES
 style={{color: Math.random() < 0.5 ? 'green':'red'}}

*/