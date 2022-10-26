
// select element from HTML DOM
const root = document.querySelector('#root');
// create element
const element = document.createElement('h1');
element.textContent = 'Hello from javascript';
element.className = 'heading-1'
// render element to HTML DOM
root.appendChild(element)

//creating ui using react
const root_react = document.querySelector('#root-react');        
const element_react = React.createElement('h1', {
    children : 'Hello from REACT',
    className : 'heading-1',
});
ReactDOM.render(element_react,root_react);

// react fragment example
const react_fragment = document.querySelector('#react-fragment');
const p1 = React.createElement('p', {
    children:'Paragraf 1'
});
const p2 = React.createElement('p', {
    children:'Paragraf 2'
});
const element_fragment = React.createElement(React.Fragment, {
    children:[p1,p2]
});
ReactDOM.render(element_fragment, react_fragment);


// babel
const root_babel = document.querySelector('#babel')
function ngegas(text){
    return text.toUpperCase()
}
const nama = 'prabu';
function Halo(props){
    return <p>halo <b>{props.name}</b></p>
}
function tick(){
    const element_babel = (
        <ul>
            <li>apple</li>
            <li>orange</li>
            <li>grape</li>
            <h1>{ngegas(nama)}</h1>
            <Halo name='Prabuwono' />
            {new Date().toLocaleTimeString()}
            <button onClick={function(){
                alert(1);
            }}>Click Me</button>
        </ul>
    );
    ReactDOM.render(element_babel, root_babel);
};
tick();
setInterval(function (){
    tick()
}, 1000);

//component and state 
const root_state = document.querySelector('#state')
function Counter(){
    const [count, setState] = React.useState(0);
    
    return (
        <>
        <button onClick={
            function(){
                setState(count-1)
            }
        }>
            -
        </button>
        <span>{count}</span>
        <button onClick={
            function(){
                setState(count+1)
            }
        }>
            +
        </button>
        </>
    );
}

ReactDOM.render(<Counter />, root_state)

//component lifecycle
const root_lifecycle = document.querySelector('#lifecycle');
function Lifecycle(){
    const [klik, setKlik] = React.useState(false);
    React.useEffect(function(){
        console.log(document.getElementById('judul'))
    })
    return (
        <>
        <h1 id="judul">Halo ini judul</h1>
        <button onClick={
            function(){
                setKlik(true)
            }
        }>
            klik saya
        </button>
        </>
    );
};
ReactDOM.render(<Lifecycle />, root_lifecycle);

// conditional rendering
const root_conditional = document.querySelector('#conditional-render');
function Conditional(){
    const [login, setLogin] = React.useState(false);
    // if (login){
    //     return (
    //         <h1>kamu sudah login</h1>
    //     )
    // }
    return(
        <>
        <p>{login ? <b>kamu sudah login</b> : <i>kamu belum login</i>}</p>
        <button onClick={
            function(){
                setLogin(true)
            }
        }>
            Login
        </button>
        </>
    )
}
ReactDOM.render(<Conditional/>, root_conditional)