import image from '../img/Logo.jpg';

function Header(){
    return (
        <header className='border-b-8 border-blue-800 border-solid bg-[#58cffa]'>
         <section className='flex items-center p-2 max-[768px]:gap-5'>
         <img className='w-1/12 h-2/12 max-[768px]:w-2/12 max-[768px]:h-3/12 max-[550px]:w-2/12 max-[550px]:h-3/12'  src={image} alt="Logo" />
         <h1 className='text-6xl text-blue-900 font-bold mx-auto underline max-[768px]:text-5xl max-[550px]:text-4xl'>Planeacion estrategica</h1>
         </section>
        </header>
    );
}

export default Header;