function Workdays(){
    return (<h1>Workdays!!!</h1>)
}
function Weekends(){
    return (<h1>Weekends!!!!</h1>)
}
function FullInfo(){
    
    const time = new Date();
    const theDate = time.toLocaleString(("en-us"), {weekday: "long"});
   return <h3>Date : {theDate}</h3>
}
export default function CurrentDate() {
    const day = new Date().getDay();

    //const day = 6;
    if (day >= 1 && day <= 5){
        return <FullInfo />
    }
    else {
        return <Weekends />
    }

    
  
}
