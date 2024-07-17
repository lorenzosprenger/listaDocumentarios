import React, { useState } from 'react';
import ExibeDocumentario from './components/ExibeDocumentario';
import Documentario from './components/Documentario';

const App = () => {
  const [documentaries, setDocumentaries] = useState([]);
  const [currentDocumentary, setCurrentDocumentary] = useState(null);

  const addDocumentary = (documentary) => {
    if (currentDocumentary) {
      setDocumentaries(documentaries.map(doc => 
        doc.id === currentDocumentary.id ? documentary : doc
      ));
      setCurrentDocumentary(null);
    } else {
      setDocumentaries([...documentaries, documentary]);
    }
  };

  const editDocumentary = (documentary) => {
    setCurrentDocumentary(documentary);
  };

  const removeDocumentary = (id) => {
    setDocumentaries(documentaries.filter(doc => doc.id !== id));
    if (currentDocumentary && currentDocumentary.id === id) {
      setCurrentDocumentary(null);
    }
  };

  return (
    <div className="app">
      <h1>Lista de Documentários</h1>
      <Documentario addDocumentary={addDocumentary} currentDocumentary={currentDocumentary} />
      <ExibeDocumentario 
        documentaries={documentaries} 
        editDocumentary={editDocumentary} 
        removeDocumentary={removeDocumentary} 
      />
    </div>
  );
};

export default App;
