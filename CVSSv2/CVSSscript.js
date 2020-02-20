function counter() {
    let exp = 0;
    let imp = 0;
    let baseScore = 0;

    let select = document.getElementById('select1');
    let value = select.value;
    let AV;
    switch (value) {
        case 'L':
            AV = 0.395;
            break;
        case 'A':
            AV = 0.646;
            break;
        case 'N':
            AV = 1.0;
            break;
    }
    select = document.getElementById('select2');
    value = select.value;
    let AC;
    switch (value) {
        case 'H':
            AC = 0.35;
            break;
        case 'M':
            AC = 0.61;
            break;
        case 'L':
            AC = 0.71;
            break;
    }
    select = document.getElementById('select3');
    value = select.value;
    let AU;
    switch (value) {
        case 'M':
            AU = 0.45;
            break;
        case 'S':
            AU = 0.56;
            break;
        case 'N':
            AU = 0.704;
            break;
    }
    select = document.getElementById('select4');
    value = select.value;
    let C;
    switch (value) {
        case 'N':
            C = 0.0;
            break;
        case 'P':
            C = 0.275;
            break;
        case 'C':
            C = 0.66;
            break;
    }
    select = document.getElementById('select5');
    value = select.value;
    let I;
    switch (value) {
        case 'N':
            I = 0.0;
            break;
        case 'P':
            I = 0.275;
            break;
        case 'C':
            I = 0.66;
            break;
    }
    select = document.getElementById('select6');
    value = select.value;
    let A;
    switch (value) {
        case 'N':
            A = 0.0;
            break;
        case 'P':
            A = 0.275;
            break;
        case 'C':
            A = 0.66;
            break;
    }
    console.log("AV/AC/AU")
    console.log(AV + " " + AC + " " + AU);
    console.log("C/I/A")
    console.log(C + " " + I + " " + A);
    exp = 20 * AV * AC * AU;
    imp = 10.41 * (1 - (1 - C) * (1 - I) * (1 - A));
    console.log("EXP/IMP")
    console.log(exp + " " + imp);
    let fimp = 0;
    if (imp != 0) {
        fimp = 1.176;
    }

    console.log("f(imp)")
    console.log(fimp)
    baseScore = (((0.6 * imp) + (0.4 * exp) - 1.5) * fimp).toFixed(1);
    console.log("BASE SCORE:")
    console.log(baseScore);
    document.getElementById('timeButton').disabled = false;
    document.getElementById('contextButton').disabled = false;
    document.getElementById('baseScore').innerHTML = baseScore;
}

function counter2() {
    let temporalScore = 0;

    let select = document.getElementById('select7');
    let value = select.value;
    let E;
    switch (value) {
        case 'ND':
            E = 1.0;
            break;
        case 'U':
            E = 0.85;
            break;
        case 'POC':
            E = 0.9;
            break;
        case 'F':
            E = 0.95;
            break;
        case 'H':
            E = 1.0;
            break;
    }
    select = document.getElementById('select8');
    value = select.value;
    let RL;
    switch (value) {
        case 'ND':
            RL = 1.0;
            break;
        case 'U':
            RL = 1.0;
            break;
        case 'OF':
            RL = 0.87;
            break;
        case 'TF':
            RL = 0.9;
            break;
        case 'W':
            RL = 0.95;
            break;
    }
    select = document.getElementById('select9');
    value = select.value;
    let RC;
    switch (value) {
        case 'ND':
            RC = 1.0;
            break;
        case 'UC':
            RC = 0.9;
            break;
        case 'UR':
            RC = 0.95;
            break;
        case 'C':
            RC = 1.0;
            break;

    }

    temporalScore = (document.getElementById('baseScore').innerHTML * E * RL * RC).toFixed(1);
    console.log("TEMPORAL SCORE:")
    console.log(temporalScore)
    document.getElementById('temporalScore').innerHTML = temporalScore;
}

function counter3() {
    let contextScore = 0;

    let select = document.getElementById('select10');
    let value = select.value;
    let CDP;
    switch (value) {
        case 'ND':
            CDP = 0.0;
            break;
        case 'N':
            CDP = 0.0;
            break;
        case 'L':
            CDP = 0.1;
            break;
        case 'LM':
            CDP = 0.3;
            break;
        case 'MH':
            CDP = 0.4;
            break;
        case 'H':
            CDP = 0.5;
            break;
    }
    select = document.getElementById('select11');
    value = select.value;
    let TD;
    switch (value) {
        case 'ND':
            TD = 1.0;
            break;
        case 'N':
            TD = 0.0;
            break;
        case 'L':
            TD = 0.25;
            break;
        case 'M':
            TD = 0.75;
            break;
        case 'H':
            TD = 1.0;
            break;
    }
    select = document.getElementById('select12');
    value = select.value;
    let CR;
    switch (value) {
        case 'ND':
            CR = 1.0;
            break;
        case 'L':
            CR = 0.5;
            break;
        case 'M':
            CR = 1.0;
            break;
        case 'H':
            CR = 1.51;
            break;

    }
    select = document.getElementById('select13');
    value = select.value;
    let IR;
    switch (value) {
        case 'ND':
            IR = 1.0;
            break;
        case 'L':
            IR = 0.5;
            break;
        case 'M':
            IR = 1.0;
            break;
        case 'H':
            IR = 1.51;
            break;

    }
    select = document.getElementById('select14');
    value = select.value;
    let AR;
    switch (value) {
        case 'ND':
            AR = 1.0;
            break;
        case 'L':
            AR = 0.5;
            break;
        case 'M':
            AR = 1.0;
            break;
        case 'H':
            AR = 1.51;
            break;

    }
    select = document.getElementById('select1');
    value = select.value;
    let AV;
    switch (value) {
        case 'L':
            AV = 0.395;
            break;
        case 'A':
            AV = 0.646;
            break;
        case 'N':
            AV = 1.0;
            break;
    }
    select = document.getElementById('select2');
    value = select.value;
    let AC;
    switch (value) {
        case 'H':
            AC = 0.35;
            break;
        case 'M':
            AC = 0.61;
            break;
        case 'L':
            AC = 0.71;
            break;
    }
    select = document.getElementById('select3');
    value = select.value;
    let AU;
    switch (value) {
        case 'M':
            AU = 0.45;
            break;
        case 'S':
            AU = 0.56;
            break;
        case 'N':
            AU = 0.704;
            break;
    }
    select = document.getElementById('select4');
    value = select.value;
    let C;
    switch (value) {
        case 'N':
            C = 0.0;
            break;
        case 'P':
            C = 0.275;
            break;
        case 'C':
            C = 0.66;
            break;
    }
    select = document.getElementById('select5');
    value = select.value;
    let I;
    switch (value) {
        case 'N':
            I = 0.0;
            break;
        case 'P':
            I = 0.275;
            break;
        case 'C':
            I = 0.66;
            break;
    }
    select = document.getElementById('select6');
    value = select.value;
    let A;
    switch (value) {
        case 'N':
            A = 0.0;
            break;
        case 'P':
            A = 0.275;
            break;
        case 'C':
            A = 0.66;
            break;
    }
    select = document.getElementById('select7');
    value = select.value;
    let E;
    switch (value) {
        case 'ND':
            E = 1.0;
            break;
        case 'U':
            E = 0.85;
            break;
        case 'POC':
            E = 0.9;
            break;
        case 'F':
            E = 0.95;
            break;
        case 'H':
            E = 1.0;
            break;
    }
    select = document.getElementById('select8');
    value = select.value;
    let RL;
    switch (value) {
        case 'ND':
            RL = 1.0;
            break;
        case 'U':
            RL = 1.0;
            break;
        case 'OF':
            RL = 0.87;
            break;
        case 'TF':
            RL = 0.9;
            break;
        case 'W':
            RL = 0.95;
            break;
    }
    select = document.getElementById('select9');
    value = select.value;
    let RC;
    switch (value) {
        case 'ND':
            RC = 1.0;
            break;
        case 'UC':
            RC = 0.9;
            break;
        case 'UR':
            RC = 0.95;
            break;
        case 'C':
            RC = 1.0;
            break;

    }
    let AdjustedImpact = 10;
    let AdjustedImpactVal = 10.41 * (1 - (1 - C * CR) * (1 - I * IR) * (1 - A * AR));

    if (AdjustedImpactVal < 10) {
        AdjustedImpact = AdjustedImpactVal;
    }

    console.log(AdjustedImpact)
    exp = 20 * AV * AC * AU
    imp = 10.41 * (1 - (1 - C) * (1 - I) * (1 - A));
    let fimp = 0;
    if (imp != 0) {
        fimp = 1.176;
    }
    let AdjustedBaseScore = ((0.6 * AdjustedImpact) + (0.4 * exp) - 1.5) * fimp;
    console.log(AdjustedBaseScore)
    let AdjustedTemporal = AdjustedBaseScore * E * RL * RC;
    console.log(AdjustedTemporal)

    contextScore = ((AdjustedTemporal + (10 - AdjustedTemporal) * CDP) * TD).toFixed(1);

    console.log("ENVIRONMENTAL SCORE:")
    console.log(contextScore);
    document.getElementById('environmentalScore').innerHTML = contextScore;

}
