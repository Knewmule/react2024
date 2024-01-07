import './Examples.css';
export default function Example({selectedTopic,title, description, code}){
    return (
        <>
          {!selectedTopic ? <p>Please Click a Button</p> : 
          (<div id="tab-content"><h3>{title}</h3>
          <p>{description}</p>
          <pre>
            <code>
              {code}
            </code>
          </pre></div>)
          }
        </>
    );    
}