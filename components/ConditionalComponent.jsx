import Welcome from"../components/Welcome";
import Code from"./Code";

export default function ConditionnalComponent(){
    const display=false;
    return display ? <Welcome/> : <Code/>
}
