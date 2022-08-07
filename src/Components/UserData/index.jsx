import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getUserAction, getUserRequest, getUserSuccess, getUserError} from '../../actions';

function UserData(props) {
  const {user, isFetching, error, getInfoUserAction} = props;

  useEffect( () => { getInfoUserAction() }, [])

  return (
    <div>
      <h2>Random User:</h2>
      {error && <p>load error</p>}
      {isFetching && <p>load...</p>} 
      <div>{JSON.stringify(user)}</div>
    </div>
  )
}

const mapStateToProps = (state) => state.userData; // user reducer

const mapDispatchToProps = (dispatch) => {
  return{
    getInfoUserAction: () => {dispatch(getUserAction())},
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(UserData);