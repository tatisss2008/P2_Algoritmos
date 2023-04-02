function media ()
{
    let nota1 = parseInt(document.getElementById('f').value);
    let nota2 = parseInt(document.getElementById('g').value);
    let nota3 = parseInt(document.getElementById('h').value);
    let notaExamen = parseInt(document.getElementById('i').value);
    let notaTrabajo = parseInt(document.getElementById('j').value)
        
    let promedio  = (nota1+nota2+nota3)/3;
    console.log("Promedio: "+(promedio));

    let final = (promedio * 0.55) + (notaExamen * 0.3) + (notaTrabajo * 0.15);
    let resultado = document.getElementById("resultado");
    resultado.value=final;
    console.log("Resultado: "+(final));    
    return final;
}
