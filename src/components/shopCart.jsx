

import { useContext } from "react";
import { Cartcontext } from "../context/cartContext";
const ShopCart = () => {
  const { Cartitems } = useContext(Cartcontext);

  return (
    <div className="dropdown dropdown-end z-10 ">
      <div tabIndex="0" role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg
            className="w-6 h-6 text-black"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M14 7h-4v3a1 1 0 0 1-2 0V7H6a1 1 0 0 0-.997.923l-.917 11.924A2 2 0 0 0 6.08 22h11.84a2 2 0 0 0 1.994-2.153l-.917-11.924A1 1 0 0 0 18 7h-2v3a1 1 0 1 1-2 0V7Zm-2-3a2 2 0 0 0-2 2v1H8V6a4 4 0 0 1 8 0v1h-2V6a2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>

          <span className="badge badge-sm indicator-item">
            {Cartitems.length}
          </span>
        </div>
      </div>
      <div
        tabIndex="0"
        className="mt-3 z-[1] card card-compact dropdown-content w-80 bg-base-100 shadow"
      >
        <div className="card-body">
          {Object.values(Cartitems).length ? (
            <ul className="flex flex-col gap-2 p-1 h-[400px] z-10 overflow-auto">
              {Object.values(Cartitems).map((cartItem) => (
                <li
                  key={cartItem.key}
                  className="border shadow-xl rounded-xl p-2 bg-slate-100 w-full h-[125px] flex gap-1"
                >
                  <div className="w-1/2 p-2">
                    <img
                      alt="objeto carrito"
                      src={`https://backend-wolf.vercel.app/imagen/${cartItem.imagen}`}
                      className="rounded-2xl w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-1/2 py-2 h-full">
                    <p className="text-gray-700 text-xs mb-1 font-bold">
                      {cartItem.nombre}
                    </p>
                    <p className="text-gray-500 text-xs mb-1 font-semibold">
                      Cantidad :{cartItem.quantity}
                    </p>
                    <p className="text-gray-500 text-xs mb-1 font-semibold">
                      Color :{cartItem.color}
                    </p>
                    <p className="text-gray-500 text-xs mb-1 font-semibold">
                      Talla :{cartItem.talla}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>¡Tu carrito está vacío!</p>
          )}
          <div className="card-actions">
            <a href="/Compras" className="btn btn-primary btn-block">
              Ver carrito
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCart;
