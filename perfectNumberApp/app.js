let eded = Number(prompt("ededi daxil edin"))

function perfectCount(eded) {
    let cem = 0;
    for (let i = 2; i <= eded / 2; i++) {
        if (eded % i == 0) {
            cem += i;
        } 
    }
    cem += 1 + eded; 
    if (cem == eded * 2) {
        alert("muq eded")
    } else {
        alert("muq eded deyil")
    }
    return cem;
}



