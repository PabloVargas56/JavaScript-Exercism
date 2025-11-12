for (let i = 1; i <= 10; i++) {
    if (i === 1) {
        console.log("Medalla de Oro");
    } else if (i === 2) {
        console.log("Medalla de Plata");
    } else if (i === 3) {
        console.log("Medalla de Bronce");
    } else {
        console.log(i);
    }
}

for (let i = 1; i <= 10; i++) {
    switch (i) {
        case 1:
            console.log("Medalla de Oro");
            break;
        case 2:
            console.log("Medalla de Plata");
            break;
        case 3:
            console.log("Medalla de Bronce");
            break;
        default:
            console.log(i);
            break;
    }
}


