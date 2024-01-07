import {useState} from 'react';
import { EXAMPLES} from '../data.js';
import Examples from "./Examples/Examples";
import TabButton from "./TabButton";
import Section from './Section.jsx';
import Tabs from './Tabs.jsx';
export default function Example(){
  // Only call hooks inside component Funcition
  // Only call hooks on the top level
  let [selectedTopic, setSelectedTopic] = useState(null);
  
  function handleSelect(selectedButton){
    setSelectedTopic(selectedButton);
    
  }
    return(
        <Section title="Examples" id="examples">
          <Tabs buttons={
            <>
            <TabButton isSelected={selectedTopic === 'components'}
        onClick={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'}
            onClick={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'}
            onClick={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'}
            onClick={() => handleSelect('state')}>State</TabButton>
            </>
          }><Examples selectedTopic={selectedTopic} 
          {...EXAMPLES[selectedTopic] } />
          </Tabs>
          
          
        </Section>
    );
}