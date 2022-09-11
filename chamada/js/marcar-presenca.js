function marcar(){
    let nome = document.querySelector("#txt_nome").value;
    let senha = $("#txt_senha").val();

    console.log("nome:" + nome);
    console.log("Senha:" + senha);

    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let td6 = document.createElement("td");
    let td7 = document.createElement("td");
   
    td1.innerHTML = nome;
    td2.innerHTML = "x";
    td3.innerHTML = "x";
    td4.innerHTML = "x";
    td5.innerHTML = "x";
    td6.innerHTML = "x";
    td7.innerHTML = "";

    let tr = document.createElement("tr");
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    tr.appendChild(td6);
    tr.appendChild(td7);

    let tbody = document.querySelector("#dados");
    tbody.appendChild(tr);

}