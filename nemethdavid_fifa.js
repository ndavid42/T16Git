//1. érték: Csapat neve (nev)
//2. érték: Csapat helyezése (helyezes)
//3. érték: Csapat helyének változása (valtozas)
//4. érték: Csapat Pontszama (pont)

const csapatAdat = [
"Anglia;4;0;1662", 
"Argentína;10;0;1614", 
"Belgium;1;0;1752", 
"Brazília;3;-1;1719", 
"Chile;17;-3;1576", 
"Dánia;14;-1;1584", 
"Franciaország;2;1;1725", 
"Hollandia;13;3;1586", 
"Horvátország;8;-1;1625", 
"Kolumbia;9;-1;1622", 
"Mexikó;12;0;1603", 
"Németország;16;-1;1580", 
"Olaszország;15;1;1583", 
"Peru;19;0;1551", 
"Portugália;5;1;1643", 
"Spanyolország;7;2;1631", 
"Svájc;11;0;1604", 
"Svédország;18;0;1560", 
"Szenegál;20;0;1546", 
"Uruguay;6;-1;1639"
];

let csapatok = [];
for(let i = 0; i < csapatAdat.length; i++) {
	let csapat = {};
 	csapat.nev = csapatAdat[i].split(";")[0];
	csapat.helyezes = Number(csapatAdat[i].split(";")[1]);
	csapat.valtozas = Number(csapatAdat[i].split(";")[2]);
	csapat.pont = Number(csapatAdat[i].split(";")[3]);
	
	/* document.write(`${csapat.nev}  / ${csapat.helyezes} / ${csapat.valtozas} / ${csapat.pont}<br />`); */
	csapatok.push(csapat);
}

/* document.write(`${csapatok[3].pont}`); */
csapatKiir(csapatok);
document.write(`<hr>`);

function csapatKiir(csapatok) {
	for(let i = 0; i < csapatok.length; i++) {
		document.write(`<br />${csapatok[i].nev} / ${csapatok[i].helyezes} / ${csapatok[i].valtozas} / ${csapatok[i].pont}`);
	}
}

function csapatKiirTabla(csapatok) {
	document.write(`<table style="border: 1px solid black; border-collapse: collapse;"><tr>
						<th>Csapat</th>
						<th>Helyezés</th>
						<th>Változás</th>
						<th>Pontszám</th></tr>`);
	   
	for(let i = 0; i < csapatok.length; i++) {
		document.write(`<tr><td>${csapatok[i].nev}</td>
						<td>${csapatok[i].helyezes}</td>
						<td>${csapatok[i].valtozas}</td>
						<td>${csapatok[i].pont}</td></tr>`);		
	}
	document.write(`</table>`)
}

//1. Adja meg aktuálisan hány csapat szerepel a ranglistán
function mennyiCsapat(csapatok) {
	return csapatok.length;
}

document.write(`<br />⚽ Csapatok száma: ${mennyiCsapat(csapatok)}`);


document.write(`<hr>`);
//2. Írja ki mennyi a résztvevő csapatok átlagpontszáma
function atlagPontszam(csapatok) {
	let osszpont = 0;
	for(let i = 0; i < csapatok.length; i++) {
		osszpont += csapatok[i].pont;
	}
	
	atlag = osszpont / csapatok.length;
	return atlag;
}

document.write(`<br />⚽ Csapatok átlag pontszáma: ${atlagPontszam(csapatok)}`);

document.write(`<hr>`);
//3. Listázza ki azokat a csapatokat, akik az átlagnál több pontot értek el!
//• Fejlesztési lehetőség: az eredményeket táblázatos formában jeleníti meg
function atlagnalTobb(csapatok) {
	let atlag = atlagPontszam(csapatok);
	let atlagFeletti = [];
	for(let i = 0; i < csapatok.length; i++) {
		if(csapatok[i].pont > atlag) {
			atlagFeletti.push(csapatok[i]);
		}
	}
	return atlagFeletti;
}

document.write(`<br />⚽ Átlagnál többet elért csapatok:`);
csapatKiir(atlagnalTobb(csapatok));
csapatKiirTabla(atlagnalTobb(csapatok));


document.write(`<hr>`);
//4. Írja ki a legtöbbet javító csapat adatait: Helyezés, CsapatNeve, Pontszáma
function legtobbetJavito(csapatok) {
	let legtobbJavitas = 0;
	let csapat = 0;
	for(let i = 0; i < csapatok.length; i++) {
		if (csapatok[i].valtozas > legtobbJavitas) {
			legtobbJavitas = csapatok[i].valtozas;
			csapat = i;
		}
	}
	
	let valasz = `helyezés: ${csapatok[csapat].helyezes}, csapat: ${csapatok[csapat].nev}, pontszám: ${csapatok[csapat].pont}`;
	return valasz;
}

document.write(`<br />⚽ A legtöbbet javító csapat: ${legtobbetJavito(csapatok)}`);


document.write(`<hr>`);
//5. Határozza meg a adatok közöt megtalálható-e Magyarország csapata!
//• Fejlesztési lehetőség: Bármely csapatot megnézni, szerepelt-e a listán
function orszagKeres(csapatok, orszag) {
	let valasz = "nem található meg :(";
	for(let i = 0; i < csapatok.length; i++) {
		if (csapatok[i].nev == orszag) {
			valasz = "megtalálható! :)";
		}
	}
	
	return valasz;
}

let keresettorszag = "Magyarország";
/* let keresettorszag = "Peru"; */
document.write(`<br />⚽ Megtalálható az adatok között ${keresettorszag}?: ${orszagKeres(csapatok, keresettorszag)}`);


document.write(`<hr>`);
//6. Készítsen statisztikát a helyezések változása (Valtozas) alapján csoportosítva a csapatok számáról a minta szerint! Csak azok a helyezésváltozások jelenjenek meg a képernyőn, amelyek esetében a csapatok száma több mint egy volt! A megjelenő csoportok sorrendje tetszőleges.
//• Fejlesztési lehetőség: az eredményeket táblázatos formában jeleníti me
function statisztika(csapatok) {
	return "hm? milyen minta?";
}

document.write(`<br />Statisztika: ${statisztika(csapatok)}`);
