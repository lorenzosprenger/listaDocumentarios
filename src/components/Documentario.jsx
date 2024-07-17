import React, { useState, useEffect } from 'react';

const Documentario = ({ addDocumentary, currentDocumentary }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (currentDocumentary) {
      setTitle(currentDocumentary.title);
      setDescription(currentDocumentary.description);
    } else {
      setTitle('');
      setDescription('');
    }
  }, [currentDocumentary]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newDocumentary = {
      id: currentDocumentary ? currentDocumentary.id : Date.now(),
      title,
      description
    };
    addDocumentary(newDocumentary);
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Título" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        required 
      />
      <textarea 
        placeholder="Descrição" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        required 
      />
      <button type="submit">{currentDocumentary ? 'Editar' : 'Adicionar'} Documentário</button>
    </form>
  );
};

export default Documentario;
