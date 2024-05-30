import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import Bag from './components/Bag';
import Apple from './components/Apple';
import Pear from './components/Pear';
import Child from './data-flow/child';
import InputComponent from './hooks/Inputcomponent';
import RegistrationForm from './hooks/RegistrationForm';

function App() {
  const date = new Date()
  return (
    // <div>
    // <Header name = 'Gowtham' color = 'purple'/>
    // <Main greet = 'Howdy'/>
    // <Sidebar greet = 'Howdy'/>
    // <Bag children = {<Apple color = "yellow" number = "5" />}/>
    // <Bag children = {<Pear friend = "Anshu"/>}/>
    // <Child message = {date.toLocaleTimeString()} />
    // </div>
    // <InputComponent />
    <RegistrationForm />
  );
}

function Example() {
  return (<h1>Example</h1>)
}

export default App;
