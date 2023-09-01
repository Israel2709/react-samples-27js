const AmountForm = (props) => {
  const { inputHandler, amount } = props;
  return (
    <>
      <h1>Ingresa el monto a convertir en MXN</h1>
      <form action="" className="border rounded border-secondary shadow p-3">
        <div className="form-group">
          <input
            type="number"
            className="form-control"
            onChange={inputHandler}
            value={amount}
          />
        </div>
      </form>
    </>
  );
};

export default AmountForm;
