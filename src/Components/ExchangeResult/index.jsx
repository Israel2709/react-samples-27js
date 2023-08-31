const ExchangeResult = ({ result, currency }) => {
  return (
    <>
      <h1>Valor en {currency}</h1>
      <h2>
        {result} {currency}
      </h2>
    </>
  );
};

export default ExchangeResult;
