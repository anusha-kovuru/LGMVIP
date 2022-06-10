var row=1;
var entry=document.getElementById("entry");
entry.addEventListener("click", displayDetails); 
function reset()
{
    document.getElementById("name").value="";
    document.getElementById("age").value="";
    document.getElementById("email").value="";
    document.getElementById("city").value="";
    const genMale=document.getElementById("male");
    genMale.checked=false;
    const genFemale=document.getElementById("female");
    genFemale.checked=false;
    const skillsHtml=document.getElementById("html");
    skillsHtml.checked=false;
    const skillsCss=document.getElementById("css");
    skillsCss.checked=false;
    const skillsJs=document.getElementById("js");
    skillsJs.checked=false;
}
function displayDetails()
{
    var name=document.getElementById("name").value;
    var age=document.getElementById("age").value;
    var email=document.getElementById("email").value;
    var city=document.getElementById("city").value;
    var gender1="";
    if(document.getElementById("male").checked==true)
    {
        gender1="Male";
    }
    else if(document.getElementById("female").checked==true)
    {
        gender1="Female";
    }
    var skills="";
    if(document.getElementById("html").checked==true && (skills !="css" || skills!="jss"))
    {
        skills=skills+"html"+"<br>";
    }
    if(document.getElementById("css").checked==true &&(skills !="html" || skills!="js"))
    {
        skills=skills+"css"+"<br";
    }
    if(document.getElementById("js").checked==true && (skills !="html" || skills!="css"))
    {
        skills=skills+"js"+"<br>";
    }
    var display=document.getElementById("display");
    var newrow=display.insertRow(row);
    var cell1=newrow.insertCell(0);
    var cell2=newrow.insertCell(1);
    var cell3=newrow.insertCell(2);
    var cell4=newrow.insertCell(3);
    var cell5=newrow.insertCell(4);
    var cell6=newrow.insertCell(5);
    cell1.innerHTML=name;
    cell2.innerHTML=age;
    cell3.innerHTML=email;
    cell4.innerHTML=city;
    cell5.innerHTML=gender1;
    cell6.innerHTML=skills;
    
   row++;
 reset();

}