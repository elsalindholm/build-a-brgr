import { observer } from 'mobx-react';
import React from 'react';
import { AppState } from './AppState';
import { Footer } from './Footer';
import { Header } from './Header';

@observer
export class App extends React.PureComponent {
  private readonly appState = new AppState();
  public render() {
    return (
      <div>
        <Header />
        <div></div>
        <Footer />
      </div>
    );
  }
}
