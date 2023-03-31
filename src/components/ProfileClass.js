import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    console.log("child constructor");
    //create state
    this.state = {
      userInfo: {
        name: "",
        location: "",
      },
    };
  }

  async componentDidMount() {
    //API Calls
    const data = await fetch("https://api.github.com/users/sameerahmeds");
    const json = await data.json();
    console.log(json);
    this.setState({ userInfo: json });

    console.log("child componentDidMount");
  }

  componentDidUpdate() {
    console.log("child componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("child componentWillUnmount");
  }

  render() {
    console.log("child render");
    return (
      <div>
        <h1> Profile Class Component</h1>
        <img src={this.state.userInfo?.avatar_url} />
        <h2>Name: {this.state.userInfo?.name}</h2>
        <h2>Location: {this.state.userInfo?.location}</h2>
      </div>
    );
  }
}

export default Profile;
