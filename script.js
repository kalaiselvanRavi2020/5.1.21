var data;
let p = new Promise((resolve,reject)=>{
    if(true)
    {
        let request = new XMLHttpRequest();
        request.open('GET', 'https://restcountries.eu/rest/v2/all', true)
        request.send();
     
        request.onload = function () {
           data = JSON.parse(this.response);
           resolve(data);
        }
    }
    else
    reject(err)
})

p.then((data)=>{
    
   let y=prompt("enter value",placeholder= "num only");
    if(y>=250)
    {
    alert("enter b/w 0-249");
    y=prompt("enter value",placeholder= "num only");
    }
    console.log(data);
    let name=document.createTextNode(data[y].name);
    document.getElementById("displayheader").appendChild(name); 
    
    var url = data[y].flag;
    var image = new Image();
    image.src = url;
    image.alt="Card image cap"
document.getElementById('line2').appendChild(image); 

let capital=document.createTextNode("capital : ");
    let v=document.createElement("span")
    let value=document.createTextNode(data[y].capital);
    v.setAttribute("class","mystyle")
    v.append(value);
    document.getElementById("line3").append(capital,v);
    
    let code=document.createTextNode("Country Codes: ");
    let v1=document.createTextNode(data[y].alpha2Code)
    let val1=document.createTextNode(",");
    let value2=document.createTextNode(data[y].alpha3Code);
    document.getElementById("line4").append(code,v1,val1,value2);


    let region=document.createTextNode("Region: ");
    let v2=document.createTextNode(data[y].region)
    document.getElementById("line5").append(region,v2);


    let lat=document.createTextNode("Lat,Long : ");
    let v3=document.createTextNode(data[y].latlng[0])
    let val2=document.createTextNode(",");
    let value3=document.createTextNode(data[y].latlng[1]);
    document.getElementById("line6").append(lat,v3,val2,value3);
   
    return data[y];
    
}).catch((error)=>{
console.log("error")
});
    let display =document.createElement("div");
    let displaydata=document.createElement("div");
    displaydata.setAttribute("class","card");
    let displayheader=document.createElement("div");
    displayheader.setAttribute("class","card-header");
    displayheader.setAttribute("style","width:25rem;");
    displayheader.id="displayheader";

    let displaybody=document.createElement("div");
    displaybody.setAttribute("class","card-body");
    displaybody.setAttribute("style","width:25rem;");
    let line2=document.createElement("div");
    line2.setAttribute("class","card-img-top");
    line2.setAttribute("style","width:25rem;");
    line2.setAttribute("style","height:50%;")
    line2.id="line2"
   displaybody.appendChild(line2);
    
    


    let line3=document.createElement("h5");
    line3.setAttribute("class","card-text");
    line3.id="line3";
    displaybody.appendChild(line3);

    let line4=document.createElement("h5");
    line4.setAttribute("class","card-text");
    line4.id="line4";
    displaybody.appendChild(line4);
    
    let line5=document.createElement("h5");
    line5.setAttribute("class","card-text");
    line5.id="line5";
    displaybody.appendChild(line5);

    let line6=document.createElement("h5");
    line6.setAttribute("class","card-text");
    line6.id="line6";
    displaybody.appendChild(line6);
    
    
    displaydata.appendChild(displayheader);
    displaydata.appendChild(displaybody);
    display.appendChild(displaydata);
    document.body.appendChild(display);
