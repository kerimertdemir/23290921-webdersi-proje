const kurlar = [
    { "code": "AED", "name": "BAE Dirhemi" },
    { "code": "AFN", "name": "Afgan Afganisi" },
    { "code": "ALL", "name": "Arnavut Lekası" },
    { "code": "AMD", "name": "Ermeni Dramı" },
    { "code": "ANG", "name": "Hollanda Antilleri Gulderi" },
    { "code": "AOA", "name": "Angola Kwanzası" },
    { "code": "ARS", "name": "Arjantin Pesosu" },
    { "code": "AUD", "name": "Avustralya Doları" },
    { "code": "AWG", "name": "Aruba Florini" },
    { "code": "AZN", "name": "Azerbaycan Manatı" },
    { "code": "BAM", "name": "Bosna-Hersek Markı" },
    { "code": "BBD", "name": "Barbados Doları" },
    { "code": "BDT", "name": "Bangladeş Takası" },
    { "code": "BGN", "name": "Bulgar Levı" },
    { "code": "BHD", "name": "Bahreyn Dinarı" },
    { "code": "BIF", "name": "Burundik Frankı" },
    { "code": "BMD", "name": "Bermuda Doları" },
    { "code": "BND", "name": "Brunei Doları" },
    { "code": "BOB", "name": "Bolivya Bolivianosu" },
    { "code": "BRL", "name": "Brezilya Reali" },
    { "code": "BSD", "name": "Bahama Doları" },
    { "code": "BTN", "name": "Bhutan Ngultrumu" },
    { "code": "BWP", "name": "Botsvana Pulası" },
    { "code": "BYN", "name": "Belarus Rublesi" },
    { "code": "BZD", "name": "Belize Doları" },
    { "code": "CAD", "name": "Kanada Doları" },
    { "code": "CDF", "name": "Kongolu Frankı" },
    { "code": "CHF", "name": "İsviçre Frankı" },
    { "code": "CLP", "name": "Şili Pesosu" },
    { "code": "CNY", "name": "Çin Yuanı" },
    { "code": "COP", "name": "Kolombiya Pesosu" },
    { "code": "CRC", "name": "Kosta Rika Kolonu" },
    { "code": "CUP", "name": "Küba Pesosu" },
    { "code": "CVE", "name": "Cape Verde Escudu" },
    { "code": "CZK", "name": "Çek Korunası" },
    { "code": "DJF", "name": "Cibuti Frankı" },
    { "code": "DKK", "name": "Danimarka Kronu" },
    { "code": "DOP", "name": "Dominik Pesosu" },
    { "code": "DZD", "name": "Cezayir Dinarı" },
    { "code": "EGP", "name": "Mısır Lirası" },
    { "code": "ERN", "name": "Eritre Nakfası" },
    { "code": "ETB", "name": "Etiyopya Birri" },
    { "code": "EUR", "name": "Euro" },
    { "code": "FJD", "name": "Fiji Doları" },
    { "code": "FKP", "name": "Falkland Adaları Lirası" },
    { "code": "FOK", "name": "Faroe Adaları Kronası" },
    { "code": "GBP", "name": "Sterlin" },
    { "code": "GEL", "name": "Gürcistan Larisı" },
    { "code": "GGP", "name": "Guernsey Lirası" },
    { "code": "GHS", "name": "Gana Cedis" },
    { "code": "GIP", "name": "Cebelitarık Lirası" },
    { "code": "GMD", "name": "Gambiya Dalasisi" },
    { "code": "GNF", "name": "Gine Frankı" },
    { "code": "GTQ", "name": "Gvatemala Ketzali" },
    { "code": "GYD", "name": "Guyana Doları" },
    { "code": "HKD", "name": "Hong Kong Doları" },
    { "code": "HNL", "name": "Honduras Lempirası" },
    { "code": "HRK", "name": "Hırvat Kunas" },
    { "code": "HTG", "name": "Haitili Gourdesi" },
    { "code": "HUF", "name": "Macar Forinti" },
    { "code": "IDR", "name": "Endonezya Rupiahı" },
    { "code": "ILS", "name": "İsrail Yeni Şekeli" },
    { "code": "IMP", "name": "Manx Lirası" },
    { "code": "INR", "name": "Hint Rupisi" },
    { "code": "IQD", "name": "Irak Dinarı" },
    { "code": "IRR", "name": "İran Riyali" },
    { "code": "ISK", "name": "İzlanda Kronası" },
    { "code": "JEP", "name": "Jersey Lirası" },
    { "code": "JMD", "name": "Jamaika Doları" },
    { "code": "JOD", "name": "Ürdün Dinarı" },
    { "code": "JPY", "name": "Japon Yeni" },
    { "code": "KES", "name": "Kenya Şilini" },
    { "code": "KGS", "name": "Kırgızistan Somu" },
    { "code": "KHR", "name": "Kamboçya Rieli" },
    { "code": "KID", "name": "Kiribati Doları" },
    { "code": "KMF", "name": "Komorlar Frankı" },
    { "code": "KRW", "name": "Güney Kore Wonu" },
    { "code": "KWD", "name": "Kuveyt Dinarı" },
    { "code": "KYD", "name": "Cayman Adaları Doları" },
    { "code": "KZT", "name": "Kazakistan Tengesi" },
    { "code": "LAK", "name": "Laos Kipi" },
    { "code": "LBP", "name": "Lübnan Lirası" },
    { "code": "LKR", "name": "Sri Lanka Rupisi" },
    { "code": "LRD", "name": "Liberya Doları" },
    { "code": "LSL", "name": "Lesotho Lotisi" },
    { "code": "LYD", "name": "Libya Dinarı" },
    { "code": "MAD", "name": "Fas Dirhemi" },
    { "code": "MDL", "name": "Moldova Leu’su" },
    { "code": "MGA", "name": "Madagaskar Ariary’si" },
    { "code": "MKD", "name": "Makedonya Denarı" },
    { "code": "MMK", "name": "Burma Kyatı" },
    { "code": "MNT", "name": "Moğol Tögrüğü" },
    { "code": "MOP", "name": "Makao Patakası" },
    { "code": "MRU", "name": "Moritanya Uguya’sı" },
    { "code": "MUR", "name": "Mauritius Rupisi" },
    { "code": "MVR", "name": "Maldiv Rufiyaa’sı" },
    { "code": "MWK", "name": "Malavi Kwacha’sı" },
    { "code": "MXN", "name": "Meksika Pesosu" },
    { "code": "MYR", "name": "Malezya Ringgiti" },
    { "code": "MZN", "name": "Mozambik Metikası" },
    { "code": "NAD", "name": "Namibya Doları" },
    { "code": "NGN", "name": "Nijerya Nairası" },
    { "code": "NIO", "name": "Nikaragua Cordobası" },
    { "code": "NOK", "name": "Norveç Kronası" },
    { "code": "NPR", "name": "Nepal Rupisi" },
    { "code": "NZD", "name": "Yeni Zelanda Doları" },
    { "code": "OMR", "name": "Umman Riyali" },
    { "code": "PAB", "name": "Panama Balboası" },
    { "code": "PEN", "name": "Peru Solu" },
    { "code": "PGK", "name": "Papua Yeni Gine Kinası" },
    { "code": "PHP", "name": "Filipinler Pesosu" },
    { "code": "PKR", "name": "Pakistan Rupisi" },
    { "code": "PLN", "name": "Polonya Zlotisi" },
    { "code": "PYG", "name": "Paraguay Guaranisi" },
    { "code": "QAR", "name": "Katar Riyali" },
    { "code": "RON", "name": "Romanya Leu’su" },
    { "code": "RSD", "name": "Sırp Dinarı" },
    { "code": "RUB", "name": "Rus Rublesi" },
    { "code": "RWF", "name": "Ruanda Frankı" },
    { "code": "SAR", "name": "Suudi Riyali" },
    { "code": "SBD", "name": "Solomon Adaları Doları" },
    { "code": "SCR", "name": "Seyşeller Rupisi" },
    { "code": "SDG", "name": "Sudan Lirası" },
    { "code": "SEK", "name": "İsveç Kronası" },
    { "code": "SGD", "name": "Singapur Doları" },
    { "code": "SHP", "name": "Saint Helena Lirası" },
    { "code": "SLE", "name": "Sierra Leone Leonesi" },
    { "code": "SOS", "name": "Somali Şilini" },
    { "code": "SRD", "name": "Surinam Doları" },
    { "code": "SSP", "name": "Güney Sudan Lirası" },
    { "code": "STN", "name": "São Tomé ve Príncipe Dobrasi" },
    { "code": "SYP", "name": "Suriye Lirası" },
    { "code": "SZL", "name": "Esvatini Lilangeni" },
    { "code": "THB", "name": "Tayland Bahtı" },
    { "code": "TJS", "name": "Tacikistan Somonisi" },
    { "code": "TMT", "name": "Türkmenistan Manatı" },
    { "code": "TND", "name": "Tunus Dinarı" },
    { "code": "TOP", "name": "Tonga Paʻangası" },
    { "code": "TRY", "name": "Türk Lirası" },
    { "code": "TTD", "name": "Trinidad ve Tobago Doları" },
    { "code": "TVD", "name": "Tuvalu Doları" },
    { "code": "TWD", "name": "Yeni Tayvan Doları" },
    { "code": "TZS", "name": "Tanzanya Şilini" },
    { "code": "UAH", "name": "Ukrayna Grivnası" },
    { "code": "UGX", "name": "Uganda Şilini" },
    { "code": "USD", "name": "Amerikan Doları" },
    { "code": "UYU", "name": "Uruguay Pesosu" },
    { "code": "UZS", "name": "Özbekistan Somu" },
    { "code": "VES", "name": "Venezuela Bolivarı" },
    { "code": "VND", "name": "Vietnam Dongu" },
    { "code": "VUV", "name": "Vanuatu Vatu’su" },
    { "code": "WST", "name": "Samoa Tālā’sı" },
    { "code": "XAF", "name": "Orta Afrika CFA Frankı" },
    { "code": "XCD", "name": "Doğu Karayip Doları" },
    { "code": "XDR", "name": "Özel Çekme Hakkı" },
    { "code": "XOF", "name": "Batı Afrika CFA Frankı" },
    { "code": "XPF", "name": "CFP Frankı" },
    { "code": "YER", "name": "Yemen Riyali" },
    { "code": "ZAR", "name": "Güney Afrika Randı" },
    { "code": "ZMW", "name": "Zambiya Kwacha’sı" },
    { "code": "ZWL", "name": "Zimbabve Doları" }
  ]
  


const apiKey = "01b01d8e8fecf29fa725acc3"

window.onload = function() {

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
    }
}
function toggleTheme(){
    document.body.classList.toggle('dark');
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }

}

function finansURL(kur1, kur2, amount){
    let url = "https://v6.exchangerate-api.com/v6/YOUR-API-KEY/pair/kur1/kur2/AMOUNT".replace("YOUR-API-KEY", apiKey);
    url = url.replace("kur1", kur1).replace("kur2", kur2);
    url = url.replace("AMOUNT", amount);

    return url;
}

function aramaKapatma(){
    document.getElementById("back_overlay").remove();
}

async function kurCevirme(element){
    let url = "https://v6.exchangerate-api.com/v6/YOUR-API-KEY/pair/kur1/kur2".replace("YOUR-API-KEY", apiKey);
    url = url.replace("kur1",element.id);

    if(event.key === 'Enter'){
        if(element.id === "USD"){
            url = url.replace("kur2", "EUR");
            console.log(url);
            await fetch(url).then(kursonuc => kursonuc.json())
            .then(out => 
            {
                document.getElementById("EUR").value = (element.value*out['conversion_rate']).toFixed(2);                ;
            })
            url = url.replace("EUR", "TRY");
            await fetch(url).then(kursonuc => kursonuc.json())
            .then(out => 
            {
                document.getElementById("TRY").value = (element.value*out['conversion_rate']).toFixed(2);                ;
            })
        }
        else if(element.id === "EUR"){
            url = url.replace("kur2", "USD");
            await fetch(url).then(kursonuc => kursonuc.json())
            .then(out => 
            {
                document.getElementById("USD").value = (element.value*out['conversion_rate']).toFixed(2);                ;
            })
            url = url.replace("USD", "TRY");
            await fetch(url).then(kursonuc => kursonuc.json())
            .then(out => 
            {
                document.getElementById("TRY").value = (element.value*out['conversion_rate']).toFixed(2);                ;
            })
        }
        else if(element.id === "TRY"){
            url = url.replace("kur2", "EUR");
            await fetch(url).then(kursonuc => kursonuc.json())
            .then(out => 
            {
                document.getElementById("EUR").value = (element.value*out['conversion_rate']).toFixed(2);                ;
            })
            url = url.replace("EUR", "USD");
            await fetch(url).then(kursonuc => kursonuc.json())
            .then(out => 
            {
                document.getElementById("USD").value = (element.value*out['conversion_rate']).toFixed(2);                ;
            })
        }
    
    }

    
}

async function kurAra(element) {
    if(event.key === 'Enter' || (element.nodeName === "BUTTON")){
        searchTerm = document.querySelector('#arama').value;
        let result = [];
        searchTerm = searchTerm.toLowerCase();

        for (i=0; i<161; i++){
            if(kurlar[i].name.toLowerCase().includes(searchTerm)){
                result.push(kurlar[i]);
            }
        }

        backOverlay = document.createElement("div");
        backOverlay.setAttribute("id", "back_overlay");
        document.body.appendChild(backOverlay);

        const overlay = document.createElement("div");
        overlay.setAttribute("id","overlay");
        overlay.setAttribute("onclick","aramaKapatma()");
        backOverlay.appendChild(overlay)

        const aramasonuc = document.createElement("div");
        aramasonuc.setAttribute("id","arama_sonuc");
        
        backOverlay.appendChild(aramasonuc);

        for(i=0;i<result.length;i++){
            let sonuc = document.createElement("span");
            let url = "https://v6.exchangerate-api.com/v6/YOUR-API-KEY/pair/kur/TRY".replace("YOUR-API-KEY", apiKey);
        
            await fetch(url.replace("kur",result[i].code)).then(kursonuc => kursonuc.json())
            .then(out => 
            {
                sonuc.innerHTML = " = "+out['conversion_rate'];                ;
            })
            sonuc.innerHTML = result[i].name+sonuc.innerHTML;
            aramasonuc.appendChild(sonuc);
            aramasonuc.appendChild(document.createElement("br"));
            aramasonuc.appendChild(document.createElement("br"));
            
    }

    }

}

function yuzdeHesapla(dun, bugun){
    let yuzde=bugun-dun;
    yuzde=yuzde/dun;
    if(yuzde>0){
        return "<span style='color: green'>"+"+"+yuzde.toFixed(3)+"%</span>";
    }
    else if(yuzde<0){
        return "<span style='color: red'>"+"-"+yuzde.toFixed(3)+"%</span>";
    }
    else{
        return yuzde.toFixed(3)+"%";
    }    
}

function kurURL(kur){
    if(kur=="dolar"){
        kur="USD/TRY";
    }
    else if(kur=="euro"){
        kur="EUR/TRY";
    }
    else if(kur=="dinar"){
        kur="KWD/TRY";
    }


    return "https://api.twelvedata.com/time_series?apikey=c8fc3ada2e7e47739465bb611cf054e6&interval=1day&symbol="+kur+"&country=US&format=JSON";

}

async function finans(kur){
    fetch(kurURL(kur))
        .then(response => response.json())
        .then(out => {document.getElementById(kur+"1").innerHTML= out.values[0].high+"<br><br><br>"+yuzdeHesapla(out.values[1].low,out.values[0].high)})
}

function tıklama(kur){
    window.location='detaylar.html?name='+ encodeURIComponent(kur);
    
}


finans("dolar");
finans("dinar");
finans("euro");

