import { connect } from 'react-redux';
import LeaderBoard from './LeaderBoard';

function MapStoreToProps(store) {
  return {
    leaderBoard: store.Landing.leaderBoard,
    username: store.Landing.username
  };
}

export default connect(MapStoreToProps)(LeaderBoard);
