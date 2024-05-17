const CardProducto = ({ id, Imagen, ProductName, Price }) => {
  return (
    <a href={`/ProductId`} className="group relative block overflow-hidden">
      <img
        src={Imagen}
        alt={ProductName}
        className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
      />
      <div className="relative border border-gray-100 bg-white p-6">
        <span className="whitespace-nowrap bg-blue-400 px-3  text-xs font-medium">
          En Stock!
        </span>

        <h3 className="mt-4 text-lg font-medium w-full truncate text-gray-900">
          {ProductName}
        </h3>

        <p className="mt-1.5 text-sm text-gray-700">${Price}</p>

        <form className="mt-4">
          <a
            href=""
            className="block w-full rounded text-center bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
          >
            Comprar
          </a>
        </form>
      </div>
    </a>
  );
};

export default CardProducto;
