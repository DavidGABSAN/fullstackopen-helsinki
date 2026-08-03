import { useState } from "react";

const Contact = ({ person }) => {
  return (
    <li>
      {person.name} {person.number}
    </li>
  );
};

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", id: "1", number: "627982827" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addContact = (event) => {
    event.preventDefault();
    console.log("Add name:", newName);

    if (newName.length === 0) {
      alert("You must add a name.");
      return;
    }

    if (
      persons.some(
        (person) => person.name.toLowerCase() === newName.toLowerCase(),
      )
    ) {
      alert(`${newName} is already added to phonebook`);
      return;
    }

    if (persons.some((person) => person.number === newNumber)) {
      alert(`${newNumber} is already added to phonebook`);
      return;
    }

    if (newNumber.length !== 9) {
      alert("The phone number must be 9 digits long.");
      return;
    }

    const contactObject = {
      name: newName,
      number: newNumber,
      id: String(persons.length + 1),
    };

    console.log("New contact object:", contactObject);

    setPersons(persons.concat(contactObject));
    setNewName("");
    setNewNumber("");
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addContact}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
          number: <input value={newNumber} onChange={handleNumberChange} />
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
