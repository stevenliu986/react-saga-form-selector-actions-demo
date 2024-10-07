const Todo = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Hello World" />
      <button>Submit</button>
    </form>
  );
};

export default Todo;
