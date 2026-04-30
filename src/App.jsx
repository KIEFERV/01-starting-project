
import componentsImg from './assets/components.png';
import { CORE_CONCEPTS } from './data';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcepts/CoreConcepts.jsx'
import TabButton from './components/TabButton/TabButton.jsx';

function App() {
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
           <TabButton>Components</TabButton>
            <TabButton >JSX</TabButton>
           <TabButton >Props</TabButton>
            <TabButton >State</TabButton>
          </menu>
        </section>
       </section>
      </main>

    </div>
  );
}

export default App;
