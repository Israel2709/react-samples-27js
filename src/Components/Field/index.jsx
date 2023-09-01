const Field = ({ fieldHandler }) => {
  return (
    <form action="">
      <div className="form-group">
        <label htmlFor="">Escribe tu título:</label>
        <input type="text" className="form-control" onChange={fieldHandler} />
      </div>
    </form>
  );
};

export default Field;
