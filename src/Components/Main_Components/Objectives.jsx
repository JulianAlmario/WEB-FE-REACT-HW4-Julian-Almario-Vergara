function Objectives({object}){
    for (let i=0;i<object.length;i++){

        if(object[i].compliance>=0 && object[i].compliance<=35){
            object[i].color="text-red-700";
            object[i].state="Critico";
           }else if(object[i].compliance>=36 && object[i].compliance<=75){
            object[i].color="text-orange-700";
            object[i].state="Aceptable";
           }else if(object[i].compliance>=76 && object[i].compliance<=100){
            object[i].color="text-green-700";
            object[i].state="Exitoso";
           }
           
    }
    

    return(
       
       <section>
        <h2 className="m-5 text-4xl font-semibold text-blue-600">3. Objetivos Estrategicos</h2>
        <table className="mx-auto my-3 max-[550px]:text-xs max-[400px]:text-[8px]">
            <thead>
            <tr>
                <th className="border-2 border-black p-2 bg-blue-700 text-white max-[550px]:p-1">Codigo</th>
                <th className="border-2 border-black p-2 bg-blue-700 text-white max-[550px]:p-1">Objetivo</th>
                <th className="border-2 border-black p-2 bg-blue-700 text-white max-[550px]:p-1">Meta</th>
                <th className="border-2 border-black p-2 bg-blue-700 text-white max-[550px]:p-1">Avance</th>
                <th className="border-2 border-black p-2 bg-blue-700 text-white max-[550px]:p-1">Cumplimiento</th>
                <th className="border-2 border-black p-2 bg-blue-700 text-white max-[550px]:p-1">Critico</th>         
            </tr>
            </thead>
           <tbody>
           {object.map((obj)=>(
                
                <tr key={obj.id}>
                 <td className="border-2 border-black p-2 bg-blue-200 text-center max-[550px]:p-1">{obj.id}</td>
                 <td className="border-2 border-black p-2 bg-blue-200  text-center max-[550px]:p-1">{obj.goal}</td>
                 <td className="border-2 border-black p-2 bg-blue-200  text-center max-[550px]:p-1">{obj.target}</td>
                 <td className="border-2 border-black p-2 bg-blue-200  text-center max-[550px]:p-1">{obj.progress}</td>
                 <td className="border-2 border-black p-2 bg-blue-200  text-center max-[550px]:p-1">{`${obj.compliance}%`}</td>
                 <td className={`${obj.color} border-2 border-black p-2 bg-blue-200  text-center font-medium`}>{obj.state}</td>
                </tr>
            ))}
           </tbody>
        </table>
       </section>
    );
}

export default Objectives;