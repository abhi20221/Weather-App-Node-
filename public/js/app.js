const Search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageSec = document.querySelector("#message-2");
const temp = document.querySelector("#temp");
console.log("Client side javascript!!");

//function to set the detail
const setDetail=(tmp="",location,forecast="")=>{
    temp.textContent = tmp;
    messageOne.textContent = location;
    messageSec.textContent= forecast;
}

document.querySelector("button").addEventListener("click",async()=>{
    //e.preventDefault();
    messageOne.textContent = "Loading.....";
    messageSec.textContent="";
    const location = document.querySelector("input").value;
    try{
    const data = await fetch('http://localhost:3000/weather?id='+location);
    const res = await data.json();
    //if error exist!!.
    if(res.err) return setDetail(undefined,res.err,undefined);
    
    setDetail(res.temp,res.location,res.forecast);
    }catch(e){
        const msg = "Failed to fetch!!";
        setDetail(undefined,msg,undefined)
        console.log(e);
    }
})