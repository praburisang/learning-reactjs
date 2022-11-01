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
  }), new Date().toLocaleTimeString(), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      alert(1);
    }
  }, "Click Me"));
  ReactDOM.render(element_babel, root_babel);
}
;
tick();
setInterval(function () {
  tick();
}, 1000);

//component and state 
const root_state = document.querySelector('#state');
function Counter() {
  const [count, setState] = React.useState(0);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setState(count - 1);
    }
  }, "-"), /*#__PURE__*/React.createElement("span", null, count), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setState(count + 1);
    }
  }, "+"));
}
ReactDOM.render( /*#__PURE__*/React.createElement(Counter, null), root_state);

//component lifecycle
const root_lifecycle = document.querySelector('#lifecycle');
function Lifecycle() {
  const [klik, setKlik] = React.useState(false);
  React.useEffect(function () {
    console.log(document.getElementById('judul'));
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    id: "judul"
  }, "Halo ini judul"), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setKlik(true);
    }
  }, "klik saya"));
}
;
ReactDOM.render( /*#__PURE__*/React.createElement(Lifecycle, null), root_lifecycle);

// conditional rendering
const root_conditional = document.querySelector('#conditional-render');
function Conditional() {
  const [login, setLogin] = React.useState(false);
  // if (login){
  //     return (
  //         <h1>kamu sudah login</h1>
  //     )
  // }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, login == true && 'kamu sudah login'), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setLogin(true);
    }
  }, "Login"));
}
ReactDOM.render( /*#__PURE__*/React.createElement(Conditional, null), root_conditional);

// DOM MANIPULATION
const root_dom = document.querySelector('#dom-manipulation');
function Dom() {
  const manipulasiRef = React.useRef(null);
  React.useEffect(function () {
    setTimeout(function () {
      manipulasiRef.current.textContent = 'DOM Manipulation';
    }, 1000);
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    ref: manipulasiRef
  }, "Manipulasi Dom"));
}
ReactDOM.render( /*#__PURE__*/React.createElement(Dom, null), root_dom);

// list & Key
const root_list = document.querySelector('#list-key');
function Listkey() {
  fruits = ['apple', 'orange', 'grape', 'melon'];
  return /*#__PURE__*/React.createElement("ul", null, fruits.map(function (fruit) {
    return /*#__PURE__*/React.createElement("li", {
      key: fruit
    }, fruit);
  }));
}
;
ReactDOM.render( /*#__PURE__*/React.createElement(Listkey, null), root_list);

// uncontrolled form
const root_uncontrolled = document.querySelector('#uncontrolled-form');
function Uncontrolled() {
  const namaRef = React.useRef(null);
  function ketikaSubmit(event) {
    event.preventDefault();
    const nama = namaRef.current.value;
    console.log('nama: ', nama);
  }
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: ketikaSubmit
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Nama :"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "nama",
    ref: namaRef
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Kirim"));
}
ReactDOM.render( /*#__PURE__*/React.createElement(Uncontrolled, null), root_uncontrolled);

// controlled form
const root_controlled = document.querySelector('#controlled-form');
function Controlled() {
  const [nama, setNama] = React.useState('Prabu');
  function ketikaSubmit(event) {
    event.preventDefault();
    console.log('nama :', nama);
  }
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: ketikaSubmit
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Nama :"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "nama",
    value: nama,
    onChange: function (event) {
      setNama(event.target.value);
    }
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Kirim"));
}
ReactDOM.render( /*#__PURE__*/React.createElement(Controlled, null), root_controlled);

// data fetch and synchronized it to ui
const root_fetch = document.querySelector('#data-fetching');
function Fetching() {
  const [news, setNews] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(function () {
    // using then 
    // const getData = fetch('https://api.spaceflightnewsapi.net/v3/blogs').then(function(response){
    //     return response.json(); 
    //     }
    // ).then(function(response){
    //     console.log(response);
    // });
    // console.log(getData);

    // using async
    async function getData() {
      const request = await fetch('https://api.spaceflightnewsapi.net/v3/blogs');
      const response = await request.json();
      console.log(response);
      setNews(response);
      setLoading(false);
    }
    getData();
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Data Fetching"), loading ? /*#__PURE__*/React.createElement("h2", null, "Data is loading ...") : /*#__PURE__*/React.createElement("ul", null, news.map(function (item) {
    return /*#__PURE__*/React.createElement("li", {
      key: item.id
    }, item.title);
  })));
}
ReactDOM.render( /*#__PURE__*/React.createElement(Fetching, null), root_fetch);

// simple to-do-list
const root_tdl = document.querySelector('#to-do-list');
function Tdl() {
  const [activity, setActivity] = React.useState('');
  const [todos, setTodos] = React.useState([]);
  function addTodoHandler(event) {
    event.preventDefault();
    setTodos([...todos, activity]);
    setActivity('');
  }
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Simple To Do List"), /*#__PURE__*/React.createElement("form", {
    onSubmit: addTodoHandler
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: activity,
    placeholder: "Activity Name",
    onChange: function (event) {
      setActivity(event.target.value);
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Submit")), /*#__PURE__*/React.createElement("ul", null, todos.map(function (todo) {
    return /*#__PURE__*/React.createElement("li", {
      key: todo
    }, todo);
  })));
}
ReactDOM.render( /*#__PURE__*/React.createElement(Tdl, null), root_tdl);