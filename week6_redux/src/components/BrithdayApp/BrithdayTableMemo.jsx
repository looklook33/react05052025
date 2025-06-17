import { useEffect, useMemo, useState } from "react";

const getPeople = async () => {
  const people = [
    {
      name: "John Doe",
      birthdate: "01/15/1990",
    },
    {
      name: "Jane Smith",
      birthdate: "03/22/1985",
    },
    {
      name: "Michael Johnson",
      birthdate: "09/10/1992",
    },
    {
      name: "Emily Williams",
      birthdate: "06/05/1988",
    },
    {
      name: "David Brown",
      birthdate: "12/04/1997",
    },
    {
      name: "Sarah Davis",
      birthdate: "07/19/1991",
    },
    {
      name: "Christopher Wilson",
      birthdate: "11/30/1984",
    },
    {
      name: "Jessica Taylor",
      birthdate: "02/08/1994",
    },
  ];

  return people;
};

export default function BirthdateTableMemo() {
  const [person, setPerson] = useState([]);
  const [name, setName] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [sortBy, setSortBy] = useState("");

  const fetchPerson = async () => {
    const res = await getPeople();
    setPerson(res);
  };

  function addPerson() {
    if (name && birthdate) {
      setPerson([...person, { name, birthdate }]);
      setName("");
      setBirthdate("");
    }
  }

  useEffect(() => {
    fetchPerson();
  }, []);

  const sortedPeople = useMemo(() => {
    let sorted = [...person];
    if (sortBy === "name") {
      sorted.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "birthdate") {
      sorted.sort((a, b) => new Date(a.birthdate) - new Date(b.birthdate));
    }
    return sorted;
  },[person, sortBy]);

  return (
    <div>
      <h2>Brithday app WITH useMemo</h2>
      <div>
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="date"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />
        <button onClick={addPerson}>Add Person</button>
      </div>
      <div>
        <label>Sort by:</label>
        {"   "}
        <label>name</label>
        <input
          type="radio"
          name="sort"
          value="name"
          checked={sortBy === "name"}
          onChange={(e) => setSortBy(e.target.value)}
        />
        {"   "}
        <label>Brithday</label>
        <input
          type="radio"
          name="sort"
          value="birthdate"
          checked={sortBy === "birthdate"}
          onChange={(e) => setSortBy(e.target.value)}
        />
      </div>
      <hr />
      <div>
        {sortedPeople.map((p, index) => {
          return (
            <li key={index}>
              {p.name} - {p.birthdate}
            </li>
          );
        })}
      </div>
    </div>
  );
}
