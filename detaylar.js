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

async function getJSONData(kur) {
    try {
        const response = await fetch(kurURL(kur));

        const data = await response.json();

        return data;
    } catch (error) {
        console.error("JSON dosyası alınamadı:", error);
    }
}

async function graf(){
    let kur = document.location.href;   
    kur = kur.split('?')[1].split('=')[1];

    getJSONData(kur).then(data => {
        console.log(data);
        const euro = data;
        let para = [];

        let tarih = [];

        if (euro !== undefined) {
            a=0;
            for (i=29;i>=0;i--) {

                para[a] = euro.values[i].high;

                a++;
            }
            a=0;
            for (i=29;i>=0;i--) {

                tarih[a] = euro.values[i].datetime;

                a++;
            }
        }
        new Chart("myChart",{
            type: "line",
            data: {
                labels: tarih,
                datasets: [{
                    borderColor:"rgb(255,255,255)",
                    data: para,
                    pointRadius: 5,
                    pointHoverRadius: 5,
                    lineTension: 0
                }]
            },
            options: {
                legend: {display: false},

            }
        });
    });

}

graf();