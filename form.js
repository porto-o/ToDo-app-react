function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-primary todo"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add Todo
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                New task
              </h1>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label html-for="recipient-name" className="col-form-label">
                    Todo:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                    value={value}
                    placeholder="Add todo..."
                    onChange={(e) => setValue(e.target.value)}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
