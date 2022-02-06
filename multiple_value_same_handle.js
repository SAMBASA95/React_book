import React, { useState, useRef, useEffect } from 'react';

const ControlledInputs = () => {
  // const [firstName, setFirstName] = useState('')
  // const [email, setEmail] = useState('')
  // const [age, setAge] = useState('')
  const refContainer = useRef(null)
  const [person, setPerson] = useState({ firstName: '', email: '', age: '' })
  const [people, setPeople] = useState([])

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    // console.log(name, value);
    setPerson({ ...person, [name]: value })
    if (person.firstName && person.email && person.age === '') {
      console.log('found All')
    } else {
      console.log('No!!')
    }
  }
  // console.log(people);

  const handleSubmit = (e) => {
    e.preventDefault()
    if (person.firstName && person.email && person.age) {
      const newPerson = { ...person, id: new Date().getTime().toString() }
      setPeople([...people, newPerson])
      setPerson({ firstName: '', email: '', age: '' })
    }
  }

  useEffect(() => {
    // console.log(refContainer.current.value)
    // console.log(refContainer.current)
    refContainer.current.focus()
  })

  return (
    <>
      <article>
        <form className="form">
          <div className="form-control">
            <label htmlFor="firstName">Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              ref={refContainer}
              value={person.firstName}
              onChange={handleChange} />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              value={person.email}
              onChange={handleChange} />
          </div>
          <div className="form-control">
            <label htmlFor="age">Age:</label>
            <input
              type="text"
              id="age"
              name="age"
              value={person.age}
              onChange={handleChange} />
          </div>
          <button type='submit' onClick={handleSubmit}>Add Person</button>
        </form>
        {
          people.map((person) => {
            const { id } = person
            return (
              <div className="item" key={id}>
                <h4>{person.firstName}</h4>
                <p>{person.email}</p>
                <p>{person.age}</p>
              </div>
            );
          })
        }
      </article>
    </>
  );
};

export default ControlledInputs;
