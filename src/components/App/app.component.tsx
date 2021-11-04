import React, { Component } from 'react';
import './app.component.scss';

class AppComponent extends Component {
  public title: string = 'React App Works!';

  render() {
    return (
      <div>
        <h1>{this.title}</h1>
      </div>
    );
  }
}

export default AppComponent;
