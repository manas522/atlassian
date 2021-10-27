import React from "react";
import {withRouter} from "react-router";
import "./scss/index.global.scss";
import {connect} from "react-redux";
import classnames from "classnames/bind";
import {setCurrentTime} from "@src/actions/clock";
import style from "./scss/index.module.scss";
const cx = classnames.bind(style)
class Clock extends React.Component {
  constructor(props) {
    super(props);
  }
  handleClickCB = () => {
    this.props.setTime();
  }
  componentDidMount() {
    this.props.setTime();
  }
  componentDidUpdate() {
    console.log(this.props.currenttime);
  }
  render() {
    const TEMPLATE = (
      <article className={cx("clock")}>
        {this.props.currenttime && 
        (<time className={cx("clock__time")} onClick={this.handleClickCB}>
          <span>{this.props.currenttime.getHours()}</span>
          :
          <span>{this.props.currenttime.getMinutes()}</span>
        </time>)
        }
      </article>
    );
    return TEMPLATE;
  }
};
const mapStateProps = (state, props) => {
  console.log(state);
  return {
    currenttime: state.clock.currenttime
  };
};
const mapActionsToProps = (dispatch, props) => {
  return {
    setTime: () => { dispatch(setCurrentTime()) }
  };
};
const withRedux = connect(mapStateProps, mapActionsToProps)(Clock);
export default withRouter(withRedux);