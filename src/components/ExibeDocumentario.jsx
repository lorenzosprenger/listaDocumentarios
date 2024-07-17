import React from 'react';

const ExibeDocumentario = ({ documentaries, editDocumentary, removeDocumentary }) => {
  return (
    <div>
      {documentaries.length > 0 ? (
        documentaries.map(doc => (
          <div key={doc.id} className="documentary-item">
            <h2>{doc.title}</h2>
            <p>{doc.description}</p>
            <button onClick={() => editDocumentary(doc)}>Editar</button>
            <button onClick={() => removeDocumentary(doc.id)}>Remover</button>
          </div>
        ))
      ) : (
        <p>Nenhum documentário adicionado.</p>
      )}
    </div>
  );
};

export default ExibeDocumentario;
