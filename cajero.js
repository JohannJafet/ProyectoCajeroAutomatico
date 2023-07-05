function loguear(){
    let user = document.getElementById("name").value;
    let pass = document.getElementById("password").value;

    let cuentas = [
        { nombre: "Mali", saldo: 200 },
        { nombre: "Gera", saldo: 290 },
        { nombre: "Maui", saldo: 67 }
      ];

      
    if(user==cuentas[0].nombre && pass=="1234"){
        alert("entro");
    }
    else{
        alert("Datos incorrectos");
    }
}

/*const nombre = document.getElementById("name")
const pass = document.getElementById("password")
const form = document.getElementById("form")*/





