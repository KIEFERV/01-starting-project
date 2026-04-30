
import { CORE_CONCEPTS, EXAMPLES } from './data';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcepts/CoreConcepts.jsx'
import TabButton from './components/TabButton/TabButton.jsx';
import { useState } from 'react';
function App() {
const [selectedTopic, setSelectedTopic] = useState();
 
  let tabContent = <p>Please select a topic</p>;
  if(selectedTopic){
    tabContent = (
      <div id = "tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p>{EXAMPLES[selectedTopic].description}</p>
          <pre>
            <code>
             {EXAMPLES[selectedTopic].code}
            </code>
          </pre>
         </div>

    )
  }
  function handleSelect(selectedButton){
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }
  return (
    <div>
     <Header />
      <main>
       <section id = "core-concepts">
         <h2>Time to get started!</h2>
        <ul>
          <CoreConcept 
          {
            ...CORE_CONCEPTS[0]
          }
          />
           <CoreConcept  
           {
            ...CORE_CONCEPTS[1]
          }/>
            <CoreConcept 
             {
            ...CORE_CONCEPTS[2]
          }/>
             <CoreConcept 
                {
            ...CORE_CONCEPTS[3]
             //CORE_CONCEPT.map((concept))=>CoreConcept {...concept}/>)
          }/>
         
        </ul>
       </section>
       <section>
        <section id = "examples">
          <h2>Examples</h2>
          <menu>
           <TabButton isSelect = {selectedTopic==="components"} onSelect={()=>handleSelect("components")}>Components</TabButton>
            <TabButton  isSelect = {selectedTopic==="jsx"}  onSelect={()=>handleSelect("jsx")} >JSX</TabButton>
           <TabButton  isSelect = {selectedTopic==="props"}  onSelect={()=>handleSelect("props")} >Props</TabButton>
            <TabButton  isSelect = {selectedTopic==="state"}   onSelect={()=>handleSelect("state")} >State</TabButton>
          </menu>
         {tabContent}
        </section>
       </section>
      </main>

    </div>
  );
}

export default App;
