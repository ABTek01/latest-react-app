import './App.css';
import Title from './components/Title.js'
import Input from './components/InputLogic.js'
import Body from './components/Body.js'
//import Body from './components/body'
function App() {
  //incorporate default props from outside component
  return (
    <>
      <Title centeredText='center'/>
      <Body textColorStyle='red'/>
      {/*react.js; render props pattern c/react.js.children
      component that uses logic on child component.
      */}
      <InputLogic>
        {
          //incorporate prop/state parameters when created
          ()=>{
            //child input component
          }
        }
      </InputLogic>
      <hr/>
    </>
  );
}



export default App;
