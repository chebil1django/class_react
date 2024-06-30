import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    person: {
      fullName: 'Profil ',
      bio: ' Experience with react',
      imgSrc: "https://th.bing.com/th/id/OIP.F8N47NFCKAaMf97INBReHQAAAA?rs=1&pid=ImgDetMain",
      profession: 'Engineer'
    },
    show: false,
    intervalId: null,
    mountedTime: null,
  };

  componentDidMount() {
 
    const mountedTime = new Date();
    this.setState({ mountedTime });


    const intervalId = setInterval(() => {
      this.setState({ mountedTime: new Date() });
    }, 1000);

    this.setState({ intervalId });
  }

  componentWillUnmount() {

    clearInterval(this.state.intervalId);
  }

  toggleShow = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, mountedTime } = this.state;

    return (
      <div className="App">
        <h1>Person Profile</h1>
        <button onClick={this.toggleShow}>Profil à afficher</button>

        {show && (
          <div className="profile">
            <img src={imgSrc} alt="Person" />
            <h2>{fullName}</h2>
            <p>{bio}</p>
            <p>Profession: {profession}</p>
          </div>
        )}


      </div>
    );
  }
}

export default App;
