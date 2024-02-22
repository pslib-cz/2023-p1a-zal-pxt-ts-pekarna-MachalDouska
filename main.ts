const cost: number = 6.7;
type Odber = {
    cas: number; // sekundy [s]
    prikon: number; // watt [W]
}

let data: Array<Odber> = [
    { cas: 100, prikon: 3500 },
    { cas: 75, prikon: 400 },
    { cas: 50, prikon: 350 },
    { cas: 250, prikon: 8000 },
    { cas: 500, prikon: 2000 },
]

for (let i = 0; i <= data.length; i += 1) {
    let kWh: number = data[i].prikon / 3600 * data[i].cas;
    let price: number = kWh * cost;
    console.logValue("cena:", price);
    let averageKwh: number = kWh / data.length;
    console.logValue("průměrný odběr:", averageKwh);
}