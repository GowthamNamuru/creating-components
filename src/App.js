import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import Bag from './components/Bag';
import Apple from './components/Apple';
import Pear from './components/Pear';

function App() {
  return (
    <div>
    <Header name = 'Gowtham' color = 'purple'/>
    <Main greet = 'Howdy'/>
    <Sidebar greet = 'Howdy'/>
    <Bag children = {<Apple color = "yellow" number = "5" />}/>
    <Bag children = {<Pear friend = "Anshu"/>}/>
    </div>
  );
}

function Example() {
  return (<h1>Example</h1>)
}

export default App;
