function Person({ age, hobbies, name }) {
    const voteText = age >= 18
        ? "Go vote!"
        : "Go study!";
  
    // your browser will issue a stern warning about this; we'll learn how to fix
    // that later.
    const hobbies = hobbies.map(hobby => <li>{hobby}</li>);
  
    return (
      <div>
        <p>Learn some information about this person:</p>
        <ul>
          <li>Name: {name.slice(0, 5)}</li>
          <li>Age: {age}</li>
          <ul>
            Hobbies:
            {hobbies}
          </ul>
        </ul>
        <h3>{voteText}</h3>
      </div>
    );
  }