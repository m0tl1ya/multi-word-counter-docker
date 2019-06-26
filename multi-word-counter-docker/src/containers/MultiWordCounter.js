import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TotalCountbar from '../components/TotalCountBar';
import CountingZone from '../components/CountingZone';
import * as CounterActions from '../actions/counterActions';
import * as ModeActions from '../actions/modeActions';

const MultiWordCounter = ({ counters, mode, actions }) => (
  <div>
    <TotalCountbar
      counters={counters}
      addCounterTop={actions.counterActions.addCounterTop}
      addCounterBelow={actions.counterActions.addCounterBelow}
      refresh={actions.counterActions.refresh}
      switchMode={actions.modeActions}
    />
    <CountingZone
      counters={counters}
      actions={actions.counterActions}
      mode={mode}
    />
  </div>
);

MultiWordCounter.propTypes = {
  counters: PropTypes.arrayOf.isRequired,
  mode: PropTypes.objectOf.isRequired,
  actions: PropTypes.objectOf.isRequired,
};

const mapStateToProps = state => ({
  counters: state.counters,
  mode: state.mode,
});

// console.log(CreateModuleActions);

const mapDispatchToProps = dispatch => ({
  actions: {
    counterActions: bindActionCreators(CounterActions, dispatch),
    modeActions: bindActionCreators(ModeActions, dispatch),
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(MultiWordCounter);
