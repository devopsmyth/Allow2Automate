import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import LoggedIn from '../components/LoggedIn';
import userActions from '../actions/user';
import deviceActions from '../actions/device';

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) => { // eslint-disable-line no-unused-vars
    const user = bindActionCreators(userActions, dispatch);
    const device = bindActionCreators(deviceActions, dispatch);
    return {

        onLogout: (data) => {
            user.logout(data);
            dispatch(push('/'));
        },

        onDeviceUpdate: (data) => {
            device.update(data);
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoggedIn);