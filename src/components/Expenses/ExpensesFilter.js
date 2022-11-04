import React from "react";
import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;

// u sljedećem dijelu kursa uvjeravamo se da je lista dinamički prikazana i
// upravljanje dinamičkim nizom i dodavanje troškova u ovom trenutku to nije moguće,
//  ali prije nego što se pritisne sljedeći odjeljak kursa želim da vježbate ono što naučite
// u ovom modulu i za da želim da dodate novu komponentu želim da dodate ovu komponentu filtera
//  ovdje koja vam omogućava da koristite padajući meni i postavite odabir filtera na 2019, 2020,
// 2021, 2022 da biste napravili ovu komponentu koju možete koristiti stilom za označavanje koju nađete
//  u prilogu da biste pronašli css datoteku i nađete js datoteku sa osnovnim oznakama filtera koju možete
//  koristiti jer chellenge shod ne bude markup stil, ali je korak do izazova za vas da slušate promjene na
//  tom padajućem izborniku i mi nikada korisnik ne bira novo stanje, bira novu godinu iz padajućeg menija,
// tako da nikada korisnik ne mijenja odabranu vrijednost koju ste morali poslušati tamo događaj i onda
//  provjerite da li je ta odabrana godina koju je korisnik izabrao ovu odabranu vrijednostje na kraju za
// sročeno komponenti troškova koju ste obukli, također dodajte komponentu filtera troškova tamo jednostavno
// zamotajte ovu karticu s div, a zatim dodajte komponentu filtera troškova koju ćete napraviti pored ove kartice
//  za koju to možete učiniti za u trenutku kada želim da ovo dodate i onda na riječ obucite odabranu godinu od
// filtera troškova do ove komponente troškova i onda ovdje u komponenti troškova pohranjenoj u stanju ne trebate
//  ništa, ali još ne morate filtrirati listu troškova budući da smo stvarno naučili kako to funkcionira, samo želim
//  da slušate događaj promjene, a zatim za unesene podatke na komponentu višeg nivoa, dakle na komponentu
// troškova iu toj komponenti pohranjenoj u stanju koje je vaš cilj, naravno, uporedite vaše
// rješenje s mojim želi da završite, ali svakako prvo probate sami
