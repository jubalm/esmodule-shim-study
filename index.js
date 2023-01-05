import { h, render } from "preact";

const Button = h("a", { href: "/#!/hashroute"}, "Go to hashbang");
const App = h("div", null, Button);

render(App, document.getElementById("app"));
