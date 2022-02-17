import { registerMicroApps, start } from "qiankun";

import "./style/index.less";
import styles from "./index.less";
console.log(styles.test);

registerMicroApps([
  {
    name: "reactApp",
    entry: "//localhost:3000",
    container: "#container",
    activeRule: "/app-react",
  },
  {
    name: "vueApp",
    entry: "//localhost:8080",
    container: "#container",
    activeRule: "/app-vue",
  }
]);
// 启动 qiankun
start();
