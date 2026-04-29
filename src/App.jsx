
import componentsImg from './assets/components.png';
import {CORE_CONCEPTS} from './data';
import Header from './components/Header';
import CoreConcept from './components/CoreConcept'
//function UserData(){
 // const user = {first:"Kiefer", last:"Villarreiz", age:"22"};
  //return(
 // <div>
 //   <h2>{user.last}, {user.first}</h2>
 //   <h3>Age: {user.age}</h3>
  //</div>
 // )
//}







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
      </main>

    </div>
  );
}

export default App;
