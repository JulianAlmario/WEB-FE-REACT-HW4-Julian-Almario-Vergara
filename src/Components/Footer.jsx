import logo from "../img/X.svg";
import logo2 from "../img/Instagram.svg";
import logo3 from "../img/Facebook.svg";

function Footer() {
  return (
    <footer className="flex text-white bg-[#1d1d2d] gap-5 items-center 
    justify-center p-5 max-[628px]:flex-col">
      <section className="w-2/6 text-center max-[628px]:w-full ">
        <h4 className="font-medium text-3xl mb-3 2xl:text-5xl">Nit</h4>
        <span className="2xl:text-3xl">901.234.567-8</span>
      </section>
      <section className="w-2/6 text-center border-x-2 border-white max-[628px]:border-none max-[628px]:w-full">
        <h4 className="font-medium text-3xl mb-3 2xl:text-5xl">Correo</h4>
        <span className="2xl:text-3xl">CompraOn@gmail.com</span>
      </section>
      <section className="w-2/6 text-center max-[628px]:w-full ">
        <h4 className="font-medium text-3xl mb-3 2xl:text-5xl 2xl:mt-3">Redes</h4>
        <div>
          <a href="#">
            <img
              className="w-1/12 h-2/12 inline mx-2"
              src={logo}
              alt="Icono de X"
            />
          </a>
          <a href="#">
            <img
              className="w-1/12 h-1/12 inline mx-2"
              src={logo2}
              alt="Icono de Instagram"
            />
          </a>
          <a href="#">
            <img
              className="w-1/12 h-1/12 inline mx-2"
              src={logo3}
              alt="Icono de Facebbok"
            />
          </a>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
