import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';

import {
  loadSpells,
  loadClasses,
  loadSchools,
  addSubclass,
} from '../../actions';
import * as data from '../../data';
import VisibleSpellList from '../../containers/VisibleSpellList';
import SelectedSpellDetail from '../../containers/SelectedSpellDetail';
import VisibleControls from '../../containers/VisibleControls';

import './App.scss';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(loadSpells(data.SPELLS));
    this.props.dispatch(loadClasses(data.CLASSES));
    this.props.dispatch(loadSchools(data.SCHOOLS));

    this.props.dispatch(addSubclass('Druid', 'circles', data.CIRCLES));
    this.props.dispatch(addSubclass('Cleric', 'domains', data.DOMAINS));
    this.props.dispatch(addSubclass('Paladin', 'oaths', data.OATHS));
    this.props.dispatch(addSubclass('Warlock', 'patrons', data.PATRONS));
  }

  render() {
    let isSpellDetailActive = this.props.currentSpellId !== null;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Spellbook</h1>
        </header>
        <main className="App-main">
          <div className="App-main-container">
            <section className="App-section App-section--list">
              <nav className="App-spell-list-nav">
                <VisibleControls />
              </nav>
              <div className="App-spell-list">
                <div className="App-spell-list-container">
                  <VisibleSpellList />
                </div>
              </div>
            </section>
            <section
              className={classNames('App-section App-section--detail', {
                'is-active': isSpellDetailActive,
              })}
            >
              <SelectedSpellDetail />
            </section>
          </div>
        </main>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentSpellId: state.currentSpellId,
  };
}

export default connect(mapStateToProps)(App);
