import backendData from "@src/mockdata/treedata";
const setTimeAPI = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(new Date());
    }, 100);
  });
};
const getTreeDataAPI = () => {
  return new Promise(resolve => {
    setTimeout(resolve, 100, backendData);
  });
}
export { setTimeAPI, getTreeDataAPI };
