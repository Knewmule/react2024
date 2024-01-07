import {useState} from 'react';
import { EXAMPLES} from '../data.js';
import Examples from "./Examples/Examples";
import TabButton from "./TabButton";
import Section from './Section.jsx';
export default function Example(){
  // Only call hooks inside component Funcition
  // Only call hooks on the top level
  let [selectedTopic, setSelectedTopic] = useState(null);
  
  function handleSelect(selectedButton){
    setSelectedTopic(selectedButton);
    
  }
    return(
        <Section title="Examples"id="examples">
          <menu>
            <TabButton isSelected={selectedTopic === 'components'}onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'}onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'}onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'}onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          <Examples selectedTopic={selectedTopic} {...EXAMPLES[selectedTopic] } />
        </Section>
    );
}