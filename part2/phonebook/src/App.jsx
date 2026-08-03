import { useState } from "react";

const Contact = ({ person }) => {
  return <li>{person.name}</li>;
};

const App = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas", id: "1" }]);
  const [newName, setNewName] = useState("");

  const addContact = (event) => {
    event.preventDefault();
    console.log("Add name:", newName);

    if (
      persons.some(
        (person) => person.name.toLowerCase() === newName.toLowerCase(),
      )
    ) {
      alert(`${newName} already added to phonebook`);
      return;
    }

    const contactObject = {
      name: newName,
      id: String(persons.length + 1),
    };

    console.log("New contact object:", contactObject);

    setPersons(persons.concat(contactObject));
    setNewName("");
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addContact}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <Contact key={person.id} person={person} />
        ))}
      </ul>
    </div>
  );
};

export default App;
