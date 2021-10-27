import React, {lazy} from "react";
import classnames from "classnames/bind";
import style from "../scss/subtree.module.scss";
const cx = classnames.bind(style);
class SubTree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      close: false
    };
  }
  renderLazyTree = (item) => {
    const SubTree =  lazy(() => import ("@src/components/tree/subcomp/subtree.jsx"));
    const TEMPLATE =  <React.Suspense fallback={<span>loading...</span>}>
      <SubTree tree={item}></SubTree>
    </React.Suspense>;
    return TEMPLATE;
  }
  renderTree = (arr) => {
    console.log(arr); 
    const childrenTEMPLATE = arr.map(item => {
      if (item.children) return <li className={cx("tree__item")} key={item.key}>{this.renderLazyTree(item)}</li>
      return <li className={cx("tree__item")} key={item.key}>
        <span className={cx("bullets")}>•</span>{item.name}
      </li>
    });
    return <ul className={cx("tree__list-item")}>{childrenTEMPLATE}</ul>
  }
  handleClickOpen = () => {
    this.setState(prev => ({...prev, close: !prev.close }))
  }
  render() {
    const TEMPLATE = (
      <div className={cx("tree")}>
        <div className={cx("tree__summary")} onClick= {this.handleClickOpen}>{(!this.state.close ? <span className={cx("bullets")}>▶</span> : <span className={cx("bullets")}>▼</span>)}{this.props.tree.name}</div>
        {this.state.close && this.renderTree(this.props.tree.children)}
      </div>
    );
    return TEMPLATE;
  }
}
export default SubTree;