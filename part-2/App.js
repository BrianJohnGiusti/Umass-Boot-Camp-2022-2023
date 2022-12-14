function App() {
    return (
      <div>
        <Tweet
          name="Brian Giusti"
          username="juiceT"
          date={new Date().toDateString()}
          message="Hello World"
        />
      </div>
    );
  }