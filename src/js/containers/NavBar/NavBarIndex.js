import { connect } from 'react-redux';
import NavBar from './NavBar';

function MapStoreToProps(store) {
  return {
    leaderBoard: store.Landing.leaderBoard,
    userPoints: store.Landing.userPoints,
    username: store.Landing.username
  };
}

export default connect(MapStoreToProps)(NavBar);
