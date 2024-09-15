import image from '../img/Logo.jpg';

function Header(){
    return (
        <header className='border-b-8 border-blue-800 border-solid bg-[#58cffa]'>
         <section className='flex items-center p-3 '>
         <img className='w-1/12 h-2/12 my-auto'  src={image} alt="Logo" />
         <h1 className='text-6xl text-blue-900 font-bold mx-auto underline'>Planeacion estrategica</h1>
         </section>
        </header>
    );
}

export default Header;