function addBudget()
{
    var client= document.getElementById("client-name").value;
    var project= document.getElementById("project-name").value;
    var amount= document.getElementById("budget").value;
    var list=localStorage.getItem("obj");
    var budget={};
    budget.client=client;
    budget.project=project;
    budget.amount=amount;

    if(list==null)
    {
        var arr= new Array();
        arr.push(budget);
        localStorage.setItem("obj",JSON.stringify(arr));
        document.getElementById("out").innerHTML="Record Added successfully!"

    }
    else{
        list=JSON.parse(list);
        list.push(budget);
        localStorage.setItem("obj",JSON.stringify(list));
        document.getElementById("out").innerHTML="Record Added successfully!"
    }

    console.log(localStorage.getItem("obj"));
}

