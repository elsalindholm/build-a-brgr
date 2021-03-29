import { observer } from 'mobx-react';
import React from 'react';
import { AppState } from './AppState';
import { AboutPage } from './Body/About/About';
import { HomePage } from './Body/Home/Home';
import { MenuPage } from './Body/Menu/Menu';
import { Footer } from './Footer';
import { Header } from './Header';

@observer
export class App extends React.PureComponent {
  private readonly appState = new AppState();
  public render() {
    return (
      <div>
        <Header appState={this.appState} />
        <div className={'body'}>
          <div className={'main-page-holder'}>
            <HomePage />
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}
