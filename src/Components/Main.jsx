import Intro from "./Main_Components/Intro";
import Diagnosis from "./Main_Components/Diagnosis";
// import Identity from "./Main_Components/Identity";
// import Objectives from "./Main_Components/Objectives";

function Main({diag,obj}){
    return (
        <main className="bg-[#efefef]">
        <Intro/>
        <h2 className="m-5 text-4xl font-semibold text-blue-600">1. Diagnostico Actual</h2>
        <section className="flex flex-wrap gap-2 items-end">
        <Diagnosis number={1} diag={diag[0]}/>
        <Diagnosis number={2} diag={diag[1]}/>
        <Diagnosis number={3} diag={diag[2]}/>
        <Diagnosis number={4} diag={diag[3]}/>
        </section>
        
        {/* <Identidad/>
        <Objetivo/> */}
        </main>
    );
}
export default Main;