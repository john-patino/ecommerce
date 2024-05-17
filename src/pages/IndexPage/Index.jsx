import { useState } from "react";
import LayoutIndex from "../../Layouts/layoutIndex";
import HeroComponent from "./components/hero-Component";
import CardProducto from "../../components/cardProducto";
import BannerComponent from "./components/banner-Component";
import SubscribeCard from "../../components/subscribeSection";
import { FaShippingFast } from "react-icons/fa";
import { RiSecurePaymentFill } from "react-icons/ri";

const IndexPage = () => {
  //estados locales

  const [masVendidas, setMasvendidas] = useState([
    {
      id: "1",
      Image:
        "https://dummyimage.com/720x600",
      ProductName: "Google Pixel 8 Pro",
      Price: 1099,
    },
    {
      id: "2",
      Image:
        "https://dummyimage.com/720x600",
      ProductName: "Apple iPhone 15 Pro Max",
      Price: 1499,
    },
    {
      id: "3",
      Image:
        "https://dummyimage.com/720x600",
      ProductName: "Oppo Find N3 Flip",
      Price: 899,
    },
    {
      id: "4",
      Image:
        "https://dummyimage.com/720x600",
      ProductName: "Samsung Galaxy Z Fold 5",
      Price: 1799,
    },
  ]);
  return (
    <LayoutIndex>
      <HeroComponent />

      <section className="my-5">
        <div class="flex-wrap items-center justify-center gap-8 text-center sm:flex">
          <div class="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 ">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center w-12 h-12 mx-auto text-white bg-indigo-500 rounded-md">
                <FaShippingFast className="size-5"/>
              </div>
            </div>
            <h3 class="py-4 text-2xl font-semibold text-gray-700 sm:text-xl">
              Envios Gratuitos
            </h3>
            <p class="py-4 text-gray-500 text-md ">
              Encompassing today’s website design technology to integrated and
              build solutions relevant to your business.
            </p>
          </div>
          <div class="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 sm:mt-16 md:mt-20 lg:mt-24 ">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center w-12 h-12 mx-auto text-white bg-indigo-500 rounded-md">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="w-6 h-6"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"></path>
                </svg>
              </div>
            </div>
            <h3 class="py-4 text-2xl font-semibold text-gray-700 sm:text-xl ">
              Garantia de sastifaccion
            </h3>
            <p class="py-4 text-gray-500 text-md ">
              Share relevant, engaging, and inspirational brand messages to
              create a connection with your audience.
            </p>
          </div>
          <div class="w-full px-4 py-4 mt-6 bg-white rounded-lg shadow-lg sm:w-1/2 md:w-1/2 lg:w-1/4 ">
            <div class="flex-shrink-0">
              <div class="flex items-center justify-center w-12 h-12 mx-auto text-white bg-indigo-500 rounded-md">
              <RiSecurePaymentFill className="size-5"/>
              </div>
            </div>
            <h3 class="py-4 text-2xl font-semibold text-gray-700 sm:text-xl ">
              Pago Seguro
            </h3>
            <p class="py-4 text-gray-500 text-md ">
              Let us help you level up your search engine game, explore our
              solutions for digital marketing for your business.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <div className="w-full flex items-center mt-10 flex-col gap-2">
          <h2 className="text-4xl  body-font font-bold capitalize tracking-wider ">
            Mas Vendidos
          </h2>
          <div className="divider w-3/5 mx-auto "></div>
          <div className="grid w-full px-10 py-5 lg:grid-cols-4 grid-cols-2 grid-rows-1 gap-5">
            {masVendidas.map((producto) => (
              <div className="col-span-1 w-full ">
                <CardProducto
                  Price={producto.Price}
                  ProductName={producto.ProductName}
                  alt="imagen"
                  Imagen={producto.Image}
                  id={producto.id}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <BannerComponent
        Title="Descubre Lo que mas te Luce"
        Description="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años"
        ButtonText="Ver mas"
        UrlImage="/Camisabanner.png"
      />
      <div className="p-10"><SubscribeCard/></div>
    </LayoutIndex>
  );
};

export default IndexPage;
