var doc=document.getElementById("ta");
 console.log(doc);
(function ()
{
    var list=localStorage.getItem("obj");
    list=JSON.parse(list);
   
    for (const i in list) {
        var trtag=document.createElement("tr");
       
        var thtag= document.createElement("th");
        thtag.appendChild(document.createTextNode(eval(i)+1))
        trtag.appendChild(thtag)

        var tdtag= document.createElement("td");
        tdtag.appendChild(document.createTextNode(list[i].client));
        trtag.appendChild(tdtag);

        var tdtag= document.createElement("td");
        tdtag.appendChild(document.createTextNode(list[i].project));
        trtag.appendChild(tdtag);

        var tdtag= document.createElement("td");
        tdtag.appendChild(document.createTextNode(list[i].amount));
        trtag.appendChild(tdtag);

        
        document.getElementById("ta").appendChild(trtag);
    }
   

})();