
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
        <p>{login == true && 'kamu sudah login'}</p>
        {/* <p>{login ? <b>kamu sudah login</b> : <i>kamu belum login</i>}</p> */}
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

// DOM MANIPULATION
const root_dom = document.querySelector('#dom-manipulation');
function Dom(){
    const manipulasiRef = React.useRef(null)
    React.useEffect(function() {
        setTimeout(function(){
            manipulasiRef.current.textContent = 'DOM Manipulation'
        },1000)
    },[])
    return (
        <>
        <h1 ref={manipulasiRef}>Manipulasi Dom</h1>
        </>
    )
}
ReactDOM.render(<Dom/>,root_dom)

// list & Key
const root_list = document.querySelector('#list-key');
function Listkey(){
    fruits = ['apple', 'orange', 'grape', 'melon'];
    return (
        <ul>
            {fruits.map(function(fruit){
                return <li key={fruit}>{fruit}</li>
            })}
        </ul>
    )
};
ReactDOM.render(<Listkey />, root_list);

// uncontrolled form
const root_uncontrolled = document.querySelector('#uncontrolled-form')
function Uncontrolled(){
    const namaRef = React.useRef(null);
    function ketikaSubmit(event){
        event.preventDefault();
        const nama = namaRef.current.value
        console.log('nama: ', nama);
    }
    return (
        <form onSubmit={ketikaSubmit}>
            <div>
                <label>Nama :</label>
                <input type="text" name="nama" ref={namaRef}/>
            </div>
            <button type="submit">Kirim</button>
        </form>
    )
}
ReactDOM.render(<Uncontrolled/>, root_uncontrolled)

// controlled form
const root_controlled = document.querySelector('#controlled-form')
function Controlled(){
    const [nama, setNama]= React.useState('Prabu');
    function ketikaSubmit(event){
        event.preventDefault();
        
        console.log('nama :', nama);
    }
    return (
        <form onSubmit={ketikaSubmit}>
            <div>
                <label>Nama :</label>
                <input type="text" name="nama" value={nama} onChange={function(event){
                    setNama(event.target.value)
                }}/>
            </div>
            <button type="submit">Kirim</button>
        </form>
    )
}
ReactDOM.render(<Controlled/>, root_controlled)

// data fetch and synchronized it to ui
const root_fetch = document.querySelector('#data-fetching');
function Fetching(){
    const [news, setNews] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    React.useEffect(function(){
        // using then 
        // const getData = fetch('https://api.spaceflightnewsapi.net/v3/blogs').then(function(response){
        //     return response.json(); 
        //     }
        // ).then(function(response){
        //     console.log(response);
        // });
        // console.log(getData);

        // using async
        async function getData(){
            const request = await fetch('https://api.spaceflightnewsapi.net/v3/blogs');
            const response = await request.json();
            console.log(response);

            setNews(response);
            setLoading(false);
        }
        getData();
    },[])
    return (
        <>
            <h1>Data Fetching</h1>
            {loading ? 
                <h2>Data is loading ...</h2> :
                <ul>
                {news.map(function(item){
                    return <li key={item.id}>{item.title}</li>
                })}
            </ul>
            }
            
        </>

    )
}
ReactDOM.render(<Fetching/>, root_fetch)

// simple to-do-list
const root_tdl = document.querySelector('#to-do-list');

function Tdl() {
    const [activity, setActivity] = React.useState('');
    const [todos, setTodos] = React.useState([]);

    function addTodoHandler(event){
        event.preventDefault();

        setTodos([... todos, activity]);
        setActivity('');
    }

    return (
        <>
        <h1>Simple To Do List</h1>
        <form onSubmit={addTodoHandler}>
            <input 
            type="text" 
            value = {activity}
            placeholder ="Activity Name"
            onChange={function(event){
                setActivity(event.target.value)
            }}
            />
            <button type="submit">Submit</button>
        </form>
        <ul>
            {todos.map(function(todo){
                return <li key={todo}>{todo}</li>
            })}
        </ul>
        </>
    )
}
ReactDOM.render(<Tdl/>, root_tdl)
