<template>
  <div>
    <h3>List of Cars</h3>
    <div>
      <input v-model="term" type="text" placeholder="search">
    </div>

    <select name="make" id="make" v-model="make" aria-placeholder="make">
      <option value>Select Make</option>
      <option value="Audi">Audi</option>
      <option value="Nissan">Nissan</option>
      <option value="Ford">Ford</option>
      <option value="Dodge">Dodge</option>
      <option value="Chevrolet">Chevrolet</option>
    </select>
    
    <select name="year" id="year" v-model="year">
      <option value>Select Year</option>
      <option value="2018">2018</option>
      <option value="2017">2017</option>
      <option value="2016">2016</option>
      <option value="2015">2015</option>
      <option value="2014">2014</option>
      <option value="2013">2013</option>
      <option value="2012">2012</option>
      <option value="2011">2011</option>
      <option value="2010">2010</option>
      <option value="2009">2009</option>
      <option value="2008">2008</option>
      <option value="2007">2007</option>
      <option value="2006">2006</option>
      <option value="2005">2005</option>
      <option value="2004">2004</option>
      <option value="2003">2003</option>
      <option value="2002">2002</option>
      <option value="2001">2001</option>
      <option value="2000">2000</option>
      <option value="1999">1999</option>
      <option value="1998">1998</option>
      <option value="1997">1997</option>
      <option value="1996">1996</option>
      <option value="1995">1995</option>
      <option value="1994">1994</option>
      <option value="1993">1993</option>
      <option value="1992">1992</option>
      <option value="1991">1991</option>
      <option value="1990">1990</option>
      <option value="1989">1989</option>
      <option value="1988">1988</option>
      <option value="1987">1987</option>
      <option value="1986">1986</option>
      <option value="1985">1985</option>
      <option value="1984">1984</option>
      <option value="1983">1983</option>
      <option value="1982">1982</option>
      <option value="1981">1981</option>
      <option value="1980">1980</option>
    </select>

     <select name="order" id="order" v-model="order" aria-placeholder="order">
      <option value=1>ascending</option>
      <option value=-1>descending</option>
    </select>

    <ul v-for="car in searchData" :key="car.name">
      <li>
        {{car.make}} {{car.model}}
        {{car.year}}
        <small>{{car.vin}}</small>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      order:1,
      make: "",
      year: "",
      term: "",
      cars: [
        {
          make: "Nissan",
          model: "Sentra",
          year: 2003,
          vin: "1GYS3DEF6ER791359"
        },
        {
          make: "Ford",
          model: "Explorer",
          year: 1995,
          vin: "JH4CU2E83CC472755"
        },
        {
          make: "Maybach",
          model: "57",
          year: 2010,
          vin: "JM3KE2BE3E0103975"
        },
        {
          make: "Dodge",
          model: "Neon",
          year: 2004,
          vin: "4A31K5DFXAE516491"
        },
        {
          make: "Mercedes-Benz",
          model: "E-Class",
          year: 1989,
          vin: "WBA3A5C59FF635638"
        },
        {
          make: "Pontiac",
          model: "Grand Prix",
          year: 1996,
          vin: "WAULT58E85A792527"
        },
        {
          make: "Cadillac",
          model: "Escalade",
          year: 2009,
          vin: "WBSWD93529P940095"
        },
        {
          make: "Chevrolet",
          model: "TrailBlazer",
          year: 2004,
          vin: "WAUDL74F76N188508"
        },
        {
          make: "Mitsubishi",
          model: "3000GT",
          year: 1992,
          vin: "1FTEW1CW5AK410922"
        },
        {
          make: "Chrysler",
          model: "LHS",
          year: 1999,
          vin: "WAULD54B24N400819"
        },
        {
          make: "Chevrolet",
          model: "Tahoe",
          year: 2010,
          vin: "JTHDU1EF4E5549699"
        },
        {
          make: "Pontiac",
          model: "Bonneville",
          year: 1993,
          vin: "WAULT58E04A122274"
        },
        {
          make: "Ford",
          model: "Thunderbird",
          year: 2002,
          vin: "5UXFG2C57BL425336"
        },
        {
          make: "Mazda",
          model: "Protege",
          year: 2002,
          vin: "5LMJJ3H52AE502430"
        },
        {
          make: "Toyota",
          model: "Corolla",
          year: 2005,
          vin: "WAUEH98E58A017138"
        },
        {
          make: "Dodge",
          model: "Charger",
          year: 2009,
          vin: "1FTSF3A56AE858920"
        },
        {
          make: "Pontiac",
          model: "Fiero",
          year: 1988,
          vin: "1C4RDJEG6CC276600"
        },
        {
          make: "Pontiac",
          model: "Firebird",
          year: 1985,
          vin: "YV1612FSXE2605631"
        },
        {
          make: "Chevrolet",
          model: "Corvette",
          year: 1985,
          vin: "1N6AA0CJ9EN317756"
        },
        {
          make: "BMW",
          model: "X5",
          year: 2013,
          vin: "5XXGM4A72FG181678"
        },
        {
          make: "Ford",
          model: "Expedition EL",
          year: 2008,
          vin: "1HGCR2F33EA954194"
        },
        {
          make: "Chevrolet",
          model: "Venture",
          year: 1998,
          vin: "1FTEW1CW4AF600588"
        },
        {
          make: "Chevrolet",
          model: "Suburban 2500",
          year: 2007,
          vin: "1N4AA5AP8EC902420"
        },
        {
          make: "Audi",
          model: "TT",
          year: 2006,
          vin: "3VW517ATXFM579179"
        },
        {
          make: "Suzuki",
          model: "X-90",
          year: 1997,
          vin: "JM3TB2CA2F0641741"
        },
        {
          make: "Chrysler",
          model: "PT Cruiser",
          year: 2004,
          vin: "WAUSH78E38A171919"
        },
        {
          make: "BMW",
          model: "M3",
          year: 1998,
          vin: "WAUFFAFL9AN237779"
        },
        {
          make: "Volkswagen",
          model: "GTI",
          year: 1985,
          vin: "WDDUG7JB8EA833333"
        },
        {
          make: "Ford",
          model: "Ranger",
          year: 1994,
          vin: "KM8JT3AC3AU932995"
        },
        {
          make: "Toyota",
          model: "Paseo",
          year: 1994,
          vin: "WAURD68D81A428865"
        },
        {
          make: "Ford",
          model: "Club Wagon",
          year: 1996,
          vin: "KMHHT6KD9AU752136"
        },
        {
          make: "Mercedes-Benz",
          model: "SL-Class",
          year: 2008,
          vin: "WAUEF48H77K774666"
        },
        {
          make: "Volkswagen",
          model: "Passat",
          year: 2007,
          vin: "WBAKG7C52DJ524297"
        },
        {
          make: "Audi",
          model: "A4",
          year: 2009,
          vin: "19UUA8F55EA837698"
        },
        {
          make: "Buick",
          model: "Regal",
          year: 2004,
          vin: "WAUHF98P06A602078"
        },
        {
          make: "Suzuki",
          model: "Daewoo Magnus",
          year: 2006,
          vin: "1FTEW1E84AF060545"
        },
        {
          make: "Cadillac",
          model: "Catera",
          year: 1997,
          vin: "5N1AA0NCXEN819883"
        },
        {
          make: "GMC",
          model: "Sierra 2500",
          year: 2005,
          vin: "YV1672MWXB2379929"
        },
        {
          make: "Volkswagen",
          model: "Corrado",
          year: 1992,
          vin: "JTDKN3DU2B0435016"
        },
        {
          make: "Subaru",
          model: "Loyale",
          year: 1993,
          vin: "JN8AZ2KR3DT596974"
        },
        {
          make: "Lincoln",
          model: "Continental",
          year: 1995,
          vin: "5UXFE83567L348961"
        },
        {
          make: "GMC",
          model: "Savana 3500",
          year: 2002,
          vin: "3N1BC1AP0AL528114"
        },
        {
          make: "Suzuki",
          model: "Swift",
          year: 1996,
          vin: "SAJWA4EC3DM886350"
        },
        {
          make: "Ford",
          model: "Expedition",
          year: 1999,
          vin: "WBSBL93465P785277"
        },
        {
          make: "Mazda",
          model: "Protege5",
          year: 2002,
          vin: "WUAUUAFG9EN968479"
        },
        {
          make: "Lexus",
          model: "LX",
          year: 2003,
          vin: "JH4DB76581S175737"
        },
        {
          make: "Cadillac",
          model: "CTS",
          year: 2004,
          vin: "WBAFR9C54CC866957"
        },
        {
          make: "Mazda",
          model: "MPV",
          year: 2005,
          vin: "1N6AA0EC9DN533829"
        },
        {
          make: "Volkswagen",
          model: "Type 2",
          year: 1990,
          vin: "2T1BURHE7FC650315"
        },
        {
          make: "Acura",
          model: "CL",
          year: 1997,
          vin: "1GYS4KEF3ER426610"
        },
        {
          make: "Volkswagen",
          model: "GLI",
          year: 2009,
          vin: "1FMEU8DE4AU696671"
        },
        {
          make: "Tesla",
          model: "Roadster",
          year: 2010,
          vin: "SCBZB25E91C089765"
        },
        {
          make: "Oldsmobile",
          model: "Cutlass Supreme",
          year: 1996,
          vin: "WBA3T3C56F5970229"
        },
        {
          make: "Mazda",
          model: "RX-7",
          year: 1989,
          vin: "WDDGF4HB0CF438955"
        },
        {
          make: "Subaru",
          model: "Legacy",
          year: 1996,
          vin: "JN8AZ2KR8CT558977"
        },
        {
          make: "Audi",
          model: "5000S",
          year: 1985,
          vin: "SCBLC37F94C608235"
        },
        {
          make: "Nissan",
          model: "Quest",
          year: 2008,
          vin: "WAUVT68E65A685488"
        },
        {
          make: "Hyundai",
          model: "Elantra",
          year: 1993,
          vin: "1G4GG5E31CF948754"
        },
        {
          make: "Chevrolet",
          model: "Prizm",
          year: 1998,
          vin: "5N1AR2MM9EC497859"
        },
        {
          make: "GMC",
          model: "Vandura G3500",
          year: 1996,
          vin: "WBADX1C57CE431675"
        },
        {
          make: "Lincoln",
          model: "Town Car",
          year: 1990,
          vin: "JM1NC2JF1B0967036"
        },
        {
          make: "Hyundai",
          model: "Excel",
          year: 1994,
          vin: "JN1CV6EK4DM963416"
        },
        {
          make: "Hyundai",
          model: "Elantra",
          year: 1993,
          vin: "4T3BA3BB0FU369550"
        },
        {
          make: "Ford",
          model: "Expedition",
          year: 2008,
          vin: "WBAUP9C55AV058907"
        },
        {
          make: "Buick",
          model: "Coachbuilder",
          year: 1990,
          vin: "1GYS4DEF5ER125557"
        },
        {
          make: "Aston Martin",
          model: "DB9",
          year: 2011,
          vin: "WAUSF98E28A411317"
        },
        {
          make: "Toyota",
          model: "4Runner",
          year: 1997,
          vin: "WDCGG5GB1BF412775"
        },
        {
          make: "Chevrolet",
          model: "Monte Carlo",
          year: 2007,
          vin: "WAUKFBFLXEA827183"
        },
        {
          make: "Lincoln",
          model: "Town Car",
          year: 2009,
          vin: "JH4NA21694S883770"
        },
        {
          make: "Hyundai",
          model: "Azera",
          year: 2006,
          vin: "WBA6B4C5XFD165314"
        },
        {
          make: "Chevrolet",
          model: "Camaro",
          year: 2012,
          vin: "5GAEV13D59J079587"
        },
        {
          make: "BMW",
          model: "X5",
          year: 2011,
          vin: "WBAVA33577F114724"
        },
        {
          make: "Infiniti",
          model: "G",
          year: 2008,
          vin: "1FMEU6DEXAU243627"
        },
        {
          make: "Chevrolet",
          model: "Equinox",
          year: 2011,
          vin: "1G6DM1E31C0160829"
        },
        {
          make: "Chevrolet",
          model: "Sportvan G30",
          year: 1995,
          vin: "2G4GY5GVXB9397923"
        },
        {
          make: "Aston Martin",
          model: "DB9",
          year: 2010,
          vin: "WVWAP7AN0EE702414"
        },
        {
          make: "Toyota",
          model: "Corolla",
          year: 2011,
          vin: "5GAER23748J832285"
        },
        {
          make: "Infiniti",
          model: "M",
          year: 2006,
          vin: "1D7RB1GKXAS346762"
        },
        {
          make: "Ford",
          model: "Tempo",
          year: 1987,
          vin: "1GTN1TEH5EZ233233"
        },
        {
          make: "Chevrolet",
          model: "Corvette",
          year: 1954,
          vin: "2HNYD2H30DH719813"
        },
        {
          make: "Kia",
          model: "Optima",
          year: 2008,
          vin: "JTHBW1GG8E2799231"
        },
        {
          make: "Pontiac",
          model: "Grand Prix",
          year: 1996,
          vin: "WVWED7AJ9CW771570"
        },
        {
          make: "Jeep",
          model: "Wrangler",
          year: 2001,
          vin: "WAUGVAFR5AA283323"
        },
        {
          make: "Nissan",
          model: "Armada",
          year: 2010,
          vin: "1FTSW3A59AE798647"
        },
        {
          make: "Nissan",
          model: "Maxima",
          year: 1993,
          vin: "WAUVT58EX3A992167"
        },
        {
          make: "Ford",
          model: "E-Series",
          year: 1963,
          vin: "WAUKH98E47A335057"
        },
        {
          make: "Mercedes-Benz",
          model: "CL-Class",
          year: 2002,
          vin: "3N1CN7AP2DL066872"
        },
        {
          make: "Dodge",
          model: "Caravan",
          year: 2003,
          vin: "1N4AB7AP4DN703246"
        },
        {
          make: "Saturn",
          model: "VUE",
          year: 2003,
          vin: "1G6AX5SX0E0282478"
        },
        {
          make: "Scion",
          model: "xA",
          year: 2004,
          vin: "1N6AA0CA8EN523361"
        },
        {
          make: "Pontiac",
          model: "Sunbird",
          year: 1991,
          vin: "YV140MAB7F1826950"
        },
        {
          make: "Jaguar",
          model: "XK Series",
          year: 2000,
          vin: "WAUUL78E06A471339"
        },
        {
          make: "Volkswagen",
          model: "GTI",
          year: 2001,
          vin: "4T1BF1FK3DU684879"
        },
        {
          make: "Scion",
          model: "FR-S",
          year: 2013,
          vin: "2G4WS52J911002659"
        },
        {
          make: "Toyota",
          model: "T100 Xtra",
          year: 1995,
          vin: "3D7TP2CT1BG346184"
        },
        {
          make: "Subaru",
          model: "Justy",
          year: 1988,
          vin: "WDDHF5KB4FB687905"
        },
        {
          make: "GMC",
          model: "Envoy",
          year: 2003,
          vin: "WBA3T3C55F5793513"
        },
        {
          make: "Lexus",
          model: "RX Hybrid",
          year: 2010,
          vin: "VNKJTUD31FA918471"
        },
        {
          make: "Chrysler",
          model: "Sebring",
          year: 2006,
          vin: "SAJWA4EC5FM138962"
        },
        {
          make: "Mitsubishi",
          model: "RVR",
          year: 1993,
          vin: "SCBDR33W87C586046"
        }
      ]
    };
  },
  computed: {
    filteredData() {
      return this.sortAlphabetical(this.filterMake(this.filterYear(this.cars)));
    },

    searchData() {
      let result = this.filteredData;
      if (this.term) {
        result = this.filteredData.filter(
          car =>
            car.make.toLowerCase().indexOf(this.term.toLowerCase()) !== -1 ||
            car.model.toLowerCase().indexOf(this.term.toLowerCase()) !== -1 ||
            car.year.toString().indexOf(this.term) !== -1
        );
      }
      return result;
    }
  },
  methods: {
    sortAlphabetical(cars) {
      cars.sort((a, b) =>{
        if (a.make < b.make) {
          return -1*this.order;
        }
        if (a.make > b.make) {
          return 1*this.order;
        }
        return 0;
      });

      return cars;
    },

    filterMake(cars) {
      return this.make != ""
        ? cars.filter(car => car.make === this.make)
        : cars;
    },
    filterYear(cars) {
      return this.year != ""
        ? cars.filter(car => car.year.toString() === this.year)
        : cars;
    }
  }
};
</script>

<style scss scoped>
ul {
  display: block;
  text-align: left;
}
</style>