import { connect } from 'react-redux';
import Landing from './Landing';

function MapStoreToProps(store) {
  return {
    leaderBoard: store.Landing.leaderBoard
  };
}

export default connect(MapStoreToProps)(Landing);
