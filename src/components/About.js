import { Outlet } from "react-router-dom";
import ProfileFunctionalComponent from "./Profile";
import ProfileClass from "./ProfileClass";
import React from "react";
import UserContext from "../utils/UserContext";

//Funactional Component
// const About = () => {
//   return (
//     <div>
//       <h1>About Us Page</h1>
//       <p>Finding Path</p>
//       <ProfileFunctionalComponent name={"Sameer"} />
//       <ProfileClass name={"Sameer"} lname={"Ahmed"} />
//     </div>
//   );
// };

//Class Component
class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent - constructor");
  }

  componentDidMount() {
    console.log("parent - componentDidMount");
  }

  render() {
    console.log("parent - render");
    return (
      <div>
        <h1>About Us Page</h1>

        <UserContext.Consumer>
          {({ user }) => (
            <h2 className="font-bold text-xl p-10">
              {user.name} - {user.email}
            </h2>
          )}
        </UserContext.Consumer>
        <p>Finding Path</p>
        {/* <ProfileFunctionalComponent name={"Sameer"} /> */}
        <ProfileClass name={"Sameer"} lname={"Ahmed"} />
      </div>
    );
  }
}
export default About;
