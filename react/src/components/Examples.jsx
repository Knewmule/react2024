export default function Example(selectedTopic){
    return (
        <div id="tab-content">
        <h3>{selectedTopic.title}</h3>
            <p>{selectedTopic.description}</p>
            <pre>
              <code>
                {selectedTopic.code}
              </code>
            </pre>
        </div>
    );    
}