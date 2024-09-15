
function Diagnosis({diag}){
    let type=diag.type;
    let type2;
    let items=diag.items;
    let color;
    let color2;

    switch(type) {
        case "Debilidades": 
          type2="Debilidad"
          break;
        case "Oportunidades": 
          type2="Oportunidad";
          break;
        case "Fortalezas": 
          type2="Fortaleza";
          break;
        case "Amenazas": 
          type2="Amenaza";
          break;
        }

    switch(diag.id) {
    case 1: 
      color = "bg-yellow-300 border-yellow-700";
      color2 = "text-yellow-700";
      break;
    case 2: 
      color = "bg-green-300 border-green-700";
      color2 = "text-green-700";
      break;
    case 3: 
      color = "bg-blue-300 border-blue-700";
      color2 = "text-blue-700";
      break;
    case 4: 
      color = "bg-red-300 border-red-700";
      color2 ="text-red-700";
      break;
    }

    let property=`${color} border-2 w-5/12 p-2 my-5 mx-auto max-[768px]:w-9/12`;
    let h3title=`text-3xl text-center ${color2} mb-2 font-semibold`;
    let h3title2=`text-2xl ${color2}`
    
   return(
    <section className={property}>
   <h3 className={h3title}>{type}</h3>
   <ul className="style-none">
   {items.map((it)=>(
    <li key={it.id}>
    <h3 className={h3title2}>{type2} {it.id}</h3>
    <p className={`${color2} my-2 font-normal`}>{it.descripcion}</p>
    </li>
   ))}
   </ul>
   </section>
   );
}

export default Diagnosis;