/* EU feladatsor (JS fuggvenyekkel)
1) Importálja(olvassa be) az adatok stringetet tartalmazó tömböt egy objektumba, az objekum tulajdonságai sorrendben a következők:
• kezdő pont – Az adott útvonal kezdő pontja(kezdoPont)
• végpont – Az adott útvonal végpontja(vegPont)
• távolság – Adott útvonal hossza(tavolsag)
• emelkedés – Az adott útvonal emelkedése(összesen) (emelkedes)
• lejtés – Az adott útvonal lejtése(összesen) (lejtes)
• pecsételőhely-e – Az adott útvonal szakaszon van-e pecsételőhely (pecsetelohelyE)
2) Add meg a kéktúra adatsor, összesen hány túraszakaszt tartalmaz?
3) Add meg a kéktúra adatsor, szakaszainak teljes hosszát!
4) Jelenítsd meg a képernyőn a legrövidebb túraszakasz minden adatát!
5) Készíts egy függvényt HianyosNev() néven, ami abban az esetben, ha az adott hely pecsételőhelynek van jelölve de a nevéből hiányzik a név igaz(true) értékkel tér vissza, tehát a név HIÁNYOS!
6) Alkalmazza a hiányosnév függvényt, vizsgálja meg a túraszakaszokat, és állapítsa meg, van-e olyan állomás, ami ugyan pecsételőhelynek van jelölve, de hiányzik belőle a „pecsetelohely” kifejezés.
7) A túra kezdőmagassága 192 méter volt, ez az első szakasz kezdőmagassága. Ezek alapján próbálja meg megállapítani hol van a túra legmagasabb pontja, és jelenítse meg annak MINDEN adatát! */

let adatok=[
	"Sumeg, vasutallomas;Sumeg, buszpalyaudvar;1,208;16;6;n",
	"Sumeg, buszpalyaudvar;Mogyorosi-domb, geologiai bemutatohely;1,512;24;8;n",
	"Mogyorosi-domb, geologiai bemutatohely;Sumegi bazaltbanya vasutallomas;1,576;13;43;n",
	"Sumegi bazaltbanya vasutallomas;Sarvaly erdeszhaz, pecsetelohely;2,101;69;18;i",
	"Sarvaly erdeszhaz, pecsetelohely;Leteres a foldutrol a romos vadaszhaznal;4,250;82;66;n",
	"Leteres a foldutrol a romos vadaszhaznal;Kek rom jelzes kezdete Tatika varahoz;2,686;172;29;n",
	"Kek rom jelzes kezdete Tatika varahoz;Hidegkuti major;1,614;9;135;n",
	"Hidegkuti major;Leteres a Sztupahoz;3,903;153;53;n",
	"Leteres a Sztupahoz;Zalaszanto, romai katolikus templom;2,747;14;148;i",
	"Zalaszanto, romai katolikus templom;Leteres az orszagutrol Rezi fele;2,396;26;51;n",
	"Leteres az orszagutrol Rezi fele;Rezi, leteres a pecsetelohelyhez;3,328;112;13;i",
	"Rezi, leteres a pecsetelohelyhez;Gyongyosi csarda;2,535;31;173;i",
	"Gyongyosi csarda;Egregy, arpad-kori templom;5,239;134;109;n",
	"Egregy, arpad-kori templom;Heviz, leteres az autobuszallomashoz;2,595;20;49;i",
	"Heviz, leteres az autobuszallomashoz;Keszthely, Festetics kastely eszaki kapuja;5,114;58;32;n",
	"Keszthely, Festetics kastely eszaki kapuja;Keszthely, leteres a vasutallomashoz;1,820;3;36;i"
];

function inputFeldolgozas(adatok) {
	let pecsetelohelyek = [];	
	for(let p = 0; p < adatok.length; p++) {
		let pecsetelohely = {};
		let temp = adatok[p].split(";");
		pecsetelohely.kezdoPont = temp[0];
		pecsetelohely.vegPont = temp[1];
		pecsetelohely.tavolsag = Number(temp[2].replace(",", "."));
		pecsetelohely.emelkedes = Number(temp[3]);		
		pecsetelohely.lejtes = Number(temp[4]);
		pecsetelohely.pecsetelohelyE = temp[5];

		pecsetelohelyek.push(pecsetelohely);
	}
	
	return pecsetelohelyek;
}

const pecsetelohelyek = inputFeldolgozas(adatok);
document.write(`adatok: ${pecsetelohelyek[0]}`)


function kiirOsszes(pecsetelohelyek) {
    document.write(`<table border="1" style="border-collapse: collapse">`);
    document.write(`<tr><th>Sorszám</th><th>Kezdőpont</th><th>Végpont</th><th>Távolság</th><th>Emelkedés</th><th>Lejtés</th><th>Pecsételőhely?</th></tr>`);
    for (let i = 0; i < pecsetelohelyek.length; i++) {
        document.write(`<tr>
							<td>${i}.</td>
							<td>${pecsetelohelyek[i].kezdoPont}</td>
							<td>${pecsetelohelyek[i].vegPont}</td>
							<td>${pecsetelohelyek[i].tavolsag} km</td>
							<td>${pecsetelohelyek[i].emelkedes} m</td>
							<td>${pecsetelohelyek[i].lejtes} m</td>
							<td>${pecsetelohelyek[i].pecsetelohelyE}</td>
						</tr>`);
    } 
	document.write("</table>");
}

function kiirEgy(pecsetelohelyek, index) {
    document.write(`<table border="1" style="border-collapse: collapse">`);
    document.write(`<tr><th>Kezdőpont</th><th>Végpont</th><th>Távolság</th><th>Emelkedés</th><th>Lejtés</th><th>Pecsételőhely?</th></tr>`);
        document.write(`<tr>
							<td>${pecsetelohelyek[index].kezdoPont}</td>
							<td>${pecsetelohelyek[index].vegPont}</td>
							<td>${pecsetelohelyek[index].tavolsag} km</td>
							<td>${pecsetelohelyek[index].emelkedes} m</td>
							<td>${pecsetelohelyek[index].lejtes} m</td>
							<td>${pecsetelohelyek[index].pecsetelohelyE}</td>
						</tr>`);
	document.write("</table>");
}

kiirOsszes(pecsetelohelyek);

//2) Add meg a kéktúra adatsor,(ezegy teljesen indokolatlan vessző itt) összesen hány túraszakaszt tartalmaz?
function hanySzakasz(pecsetelohelyek) {
	return pecsetelohelyek.length;
}

document.write(`<br><br><hr><br>2) A kéktúra adatsor ${(hanySzakasz(pecsetelohelyek))} szakaszt tartalmaz`)


//3) Add meg a kéktúra adatsor,(ez is egy indokolatan vessző) szakaszainak teljes hosszát!
function teljesHossz(pecsetelohelyek) {
	let hossz = 0;
	for (let i = 0; i < pecsetelohelyek.length; i++) {
		hossz += pecsetelohelyek[i].tavolsag;
	}
	
	return hossz;
}

document.write(`<br><br><hr><br>3) A kéktúra adatsor szakaszainak teljes hossza: ${Math.round(teljesHossz(pecsetelohelyek))} km`)


//4) Jelenítsd meg a képernyőn a legrövidebb túraszakasz minden adatát!
function legrovidebbSzakasz(pecsetelohelyek) {
	let legrovidebb = 0;
	for (let i = 1; i < pecsetelohelyek.length; i++) {
		if(pecsetelohelyek[i].tavolsag < pecsetelohelyek[legrovidebb].tavolsag) {
			legrovidebb = i;
		}
	}
	
	return legrovidebb;
}


document.write(`<br><br><hr><br>4) A kéktúra adatsor legrövidebb szakaszának adatai:`);
kiirEgy(pecsetelohelyek, legrovidebbSzakasz(pecsetelohelyek));

//5) Készíts egy függvényt HianyosNev() néven, ami abban az esetben, ha az adott hely pecsételőhelynek van jelölve de a nevéből hiányzik a név igaz(true) értékkel tér vissza, tehát a név HIÁNYOS!
function HianyosNev(pecsetelohelyek, index) {
	let hianyosE = false;
	let pecsetelohelyE = false;
	if (pecsetelohelyek[index].pecsetelohelyE == "i") {
		pecsetelohelyE = true
	}
	//console.log(String(pecsetelohelyek[index].vegPont).includes("pecsetelohely"));
	//console.log(pecsetelohelyE);
	if(!String(pecsetelohelyek[index].vegPont).includes("pecsetelohely") && pecsetelohelyE) {
		hianyosE = true;
	}

	return hianyosE;
}

document.write(`<br><br><hr><br>5) hiányos-e?: ${HianyosNev(pecsetelohelyek, 11)}`);

//6) Alkalmazza a hiányosnév függvényt, vizsgálja meg a túraszakaszokat, és állapítsa meg, van-e olyan állomás, ami ugyan pecsételőhelynek van jelölve, de hiányzik belőle a „pecsetelohely” kifejezés.
function vanEHianyos(pecsetelohelyek) {
	/* let vanHianyos = false */;
	let hianyosSzakaszok = [];
	
	for (let i = 1; i < pecsetelohelyek.length; i++) {
		if (HianyosNev(pecsetelohelyek, i)) {
			/* vanHianyos = true */;
			hianyosSzakaszok.push(i);
		}
	}
	
	return hianyosSzakaszok;
}

document.write(`<br><br><hr><br>6) Van-e hiányos szakasz?: ${vanEHianyos(pecsetelohelyek)} `);


//7) A túra kezdőmagassága 192 méter volt, ez az első szakasz kezdőmagassága. Ezek alapján próbálja meg megállapítani hol van a túra legmagasabb pontja, és jelenítse meg annak MINDEN adatát!

function legmagasabb(pecsetelohelyek) {
	let kezdo = 192;
	let aktualis = 192;
	let legmagasabb = [192, 0]; //legmagasabb pont, legmagasabb szakasz
	for (let i = 1; i < pecsetelohelyek.length; i++) {
		aktualis += pecsetelohelyek[i].emelkedes;
		if (aktualis > legmagasabb[0]) {
			legmagasabb[0] = aktualis;
			legmagasabb[1] = i;
		}
		aktualis -= pecsetelohelyek[i].lejtes;
	}
	
	return legmagasabb;
}

document.write(`<br><br><hr><br>7) Legmagasabb pont?: ${legmagasabb(pecsetelohelyek)[0]} m, ami a ${legmagasabb(pecsetelohelyek)[1]}. szakaszban van:`);
kiirEgy(pecsetelohelyek, legmagasabb(pecsetelohelyek)[1]);
