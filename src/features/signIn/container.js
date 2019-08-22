import { connect } from "react-redux";

import SignIn from "./screen";
import { doSignIn } from "./action";

const mapStateToProps = state => ({
  onRequest: state.signIn.onRequest,
  onRequestFailed: state.signIn.onRequestFailed,
  onRequestSuccess: state.signIn.onRequestSuccess
});

const mapDispatchTopProps = dispatch => ({
  doSignIn: () => dispatch(doSignIn())
});

export default connect(
  mapStateToProps,
  mapDispatchTopProps
)(SignIn);
