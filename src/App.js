
import React, { useState } from 'react';
import './App.css';

function App() {
  const [image, setImage] = useState(null);
  const [tags, setTags] = useState({
    species: '',
    density: '',
    terrain: '',
    equipment: '',
    notes: ''
  });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleChange = (field, value) => {
    setTags(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    console.log("Tagged Data:", tags);
    alert("Tags submitted. Check console for output.");
  };

  return (
    <div className="App" style={{ padding: '20px', maxWidth: '600px', margin: 'auto' }}>
      <h2>🌿 Brush AI Manual Tagger</h2>

      <input type="file" accept="image/*" onChange={handleImageUpload} />

      {image && <img src={image} alt="Brush Sample" style={{ width: '100%', marginTop: '10px' }} />}

      <div>
        <label>Species:</label>
        <select onChange={(e) => handleChange('species', e.target.value)}>
          <option value="">Select</option>
          <option value="Mesquite">Mesquite</option>
          <option value="Cedar">Cedar</option>
          <option value="Huisache">Huisache</option>
          <option value="Unknown">Unknown</option>
        </select>
      </div>

      <div>
        <label>Density:</label>
        <select onChange={(e) => handleChange('density', e.target.value)}>
          <option value="">Select</option>
          <option value="Light">Light</option>
          <option value="Moderate">Moderate</option>
          <option value="Heavy">Heavy</option>
        </select>
      </div>

      <div>
        <label>Terrain:</label>
        <select onChange={(e) => handleChange('terrain', e.target.value)}>
          <option value="">Select</option>
          <option value="Flat">Flat</option>
          <option value="Slope">Slope</option>
          <option value="Rocky">Rocky</option>
          <option value="Sandy">Sandy</option>
          <option value="Cleared">Cleared</option>
        </select>
      </div>

      <div>
        <label>Equipment Present:</label>
        <select onChange={(e) => handleChange('equipment', e.target.value)}>
          <option value="">Select</option>
          <option value="None">None</option>
          <option value="Skid Steer">Skid Steer</option>
          <option value="Brush Cutter">Brush Cutter</option>
          <option value="Rock Crusher">Rock Crusher</option>
        </select>
      </div>

      <div>
        <label>Notes:</label>
        <textarea onChange={(e) => handleChange('notes', e.target.value)} placeholder="Additional notes..." />
      </div>

      <button onClick={handleSubmit}>Submit Tags</button>
    </div>
  );
}

export default App;
