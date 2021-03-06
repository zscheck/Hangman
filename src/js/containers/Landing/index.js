import { connect } from 'react-redux';
import Landing from './Landing';

function MapStoreToProps(store) {
  return {
    leaderBoard: store.Landing.leaderBoard,
    userId: store.Landing.userId,
    userPoints: store.Landing.userPoints,
    username: store.Landing.username
  };
}

export default connect(MapStoreToProps)(Landing);
