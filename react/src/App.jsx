import {useState} from 'react';
import { CORE_CONCEPTS, EXAMPLES} from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
// import {  } from './data.js';
import Example from './components/Examples/Examples.jsx';

function App() {
  // Only call hooks inside component Funcition
  // Only call hooks on the top level
  let [selectedTopic, setSelectedTopic] = useState(null);
  
  function handleSelect(selectedButton){
    setSelectedTopic(selectedButton);
    
  }
  return (
    <div>
      <Header />
      <main>
        <section  id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept 
            title={CORE_CONCEPTS[0].title} 
            description={CORE_CONCEPTS[0].description}
            image={CORE_CONCEPTS[0].image} 
            />
            <CoreConcept 
            {...CORE_CONCEPTS[1]} 
            />
            <CoreConcept 
            {...CORE_CONCEPTS[2]} 
            />
            <CoreConcept 
            {...CORE_CONCEPTS[3]}  
            />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'}onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'}onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'}onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'}onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          <Example selectedTopic={selectedTopic} {...EXAMPLES[selectedTopic] } />
        </section>
      </main>
    </div>
  );
}
export default App;