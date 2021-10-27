import React, {Component} from "react";
import {connect} from "react-redux";
import SubTree from "./subcomp/subtree.jsx";
import {setTreeAction} from "@src/actions/tree";
import classnames from "classnames/bind";
import style from "./scss/index.module.scss";
const cx = classnames.bind(style);
class Tree extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getTreeData();
  }
  getLocalData() {
    if (this.props.tree) return this.props.tree;
    return this.props.item;
  }
  render() {
    const TEMPLATE = (
      (this.props.tree && <article className={cx("directory")}>
        <h1>Folder Structure</h1>
        <SubTree  tree={{name: "Root", children: this.props.tree}}></SubTree>
      </article>)
    );
    return TEMPLATE;
  }
}
const mapStateToProps = (state) => {
  return {
     tree: state.tree.root
  };
}
const mapDispatchToProps = (dispatch) => {
 return {
   getTreeData: () => { dispatch(setTreeAction()) }
 };
}
const withRedux = connect(mapStateToProps, mapDispatchToProps)(Tree);
export default withRedux;