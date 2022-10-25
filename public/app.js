// select element from HTML DOM
const root = document.querySelector('#root');
// create element
const element = document.createElement('h1');
element.textContent = 'Hello from javascript';
element.className = 'heading-1';
// render element to HTML DOM
root.appendChild(element);

//creating ui using react
const root_react = document.querySelector('#root-react');
const element_react = React.createElement('h1', {
  children: 'Hello from REACT',
  className: 'heading-1'
});
ReactDOM.render(element_react, root_react);

// react fragment example
const react_fragment = document.querySelector('#react-fragment');
const p1 = React.createElement('p', {
  children: 'Paragraf 1'
});
const p2 = React.createElement('p', {
  children: 'Paragraf 2'
});
const element_fragment = React.createElement(React.Fragment, {
  children: [p1, p2]
});
ReactDOM.render(element_fragment, react_fragment);

// babel
const root_babel = document.querySelector('#babel');
function ngegas(text) {
  return text.toUpperCase();
}
const nama = 'prabu';
function Halo(props) {
  return /*#__PURE__*/React.createElement("p", null, "halo ", /*#__PURE__*/React.createElement("b", null, props.name));
}
function tick() {
  const element_babel = /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "apple"), /*#__PURE__*/React.createElement("li", null, "orange"), /*#__PURE__*/React.createElement("li", null, "grape"), /*#__PURE__*/React.createElement("h1", null, ngegas(nama)), /*#__PURE__*/React.createElement(Halo, {
    name: "Prabuwono"
  }), new Date().toLocaleTimeString());
  ReactDOM.render(element_babel, root_babel);
}
;
tick();
setInterval(function () {
  tick();
}, 1000);