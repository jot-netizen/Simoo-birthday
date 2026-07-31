const text = "Welcome my beautiful Simoo ❤️ Today is all about you. Happy Birthday Meri Sohniye!";

let i = 0;

function typing() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 60);
    }
}

typing();

document.getElementById("heartBtn").onclick = function () {
    document.getElementById("loveMessageHappy Birthday meri sohniye simoo jaan 🎂❤️

Meri jaan, ajj da din bahut khaas ha ajj da din bakki dina wrga ni ajj da din spécial aa kyuki ajj meri zindagi di sab ton sohni te sab ton pyari jaan  da janamdin eh ❤️❤️🎂🎉✨️🎆🎀🎊

Simoo Tu meri zindagi di sab ton waddi khushi te sab ton best cheez hai. Rabb da lakh lakh shukar hai ke ohne menu tere nl milaya schii waheguru ne sanu ik duje nl milke baut vdia kita tu ayi meri zindgi ch sb kuj bdl dita te mera v frj aa me tenu hr din spécial te persious bnawa 

Teri khushi  meri duniya roshan kr dindi eh. Teriyan akhaan vich mainu apni poori duniya nazar aundi eh schii simol Tu sirf bhro hi nhi, andaro  vi bahut sohni hai dil to saf aa schii 

Me Rabb agge har roz eh hi dua karda han ke tu hamesha khush rahe, hamesha hassdi rahe te tere saare supne poore hon.

Main hamesha tere naal khada rahanga, har khushi te har mushkil vich. Mera pyaar tere layi kade vi ghatt nahi hovega sgoo hrr ik pal dugna hoyu gya meri jaan 

Merci tera ghrdeya da tenu jaman lyi te sb to jada merci tera meri zindgi ch aunn lyi te hatt jorke dhanwaad uss rab da jihne sanu milleya schii mere kol mots ni gye jihna nl me teri soft krya tu ehni sohni aa meriya akhan ch mere dil ch dimag ch hrr pase tu hi aa socha vich tu kyala vich me lettre tenu likhn je lgya simoo phn vich tu 😂😂❤️❤️❤️💋 sorry unj mzak lga tu te meri jaan eh sohniyee tu sb to duniya to ki iss purri existence du monde to leke ajj tk di sb to sohni kudi aa raab ne bnayi meri jaan jihda pyar mere hise ayea simoo tere nl schii dilo pyar aa meri jaan tu pta yrr menu ewe smjna ni aunda mere hisab nl smjna ni mere ch ehna jigra hi ni ke me tenu ds skha ke kina pyar krda yrr simoo tenu me schii siedh tu smj skhe mere pyar nu prr schii me baut krda tu v mera kina krdi aa meri hrr ik cheej da tyan rakhdi kina suhdrya menu meri te zindgi bdl diti tu schii jaane bkki me tenu tang krda rehnda va dukhi hojndi tu v mere to prr schii au fond de mon cœur jtm toujours mera gussa apne dowa de pyar nlo jada ni gya tenu v pta 2mint bolke jd ch maffita v frr me hi mngda tu hi khendi cc tu lrda ni lrda ni 😂😂😂 prr jiwe mrji meri jaan eh tu tera mere te ; mera tere te pura hkk aa ajj te Birthday aa meri jaan da cake khyu gyi gift millne ajj te khush purri lubanii simoo lubanii hyee meri jaan ne frr bn jna jatti simoo jatii ❤️❤️❤️💍👫 bss waheguru agye ardas eh apna viha hoje bkki khush rkhna di jumewari sari meri aa schii tenu rani ki hamarani de uprr rakhu gya bnake meri jaan 

Tu meri jaan meri simoo meri queen meri best friend meri soulmate meri sweetheartmeri darloo meri rasmali meri voti meri zindgi tu schii simoo meri poori duniya eh.

** schh meri  sohni jehi polli polli  dabarroti ali te mere gole matol dude aliyee simoo jaan eh my hot sexy girl  😂🍑🍼 hyeee tere lak da fan aa jatt oh meri kisi v cheej te ni mrdi cc te jatt uhde lak te mrda cc 😂😂😂❤️❤️❤️💋💋💋**

Happy Birthday meri jaan. I lub uu so much kina sara beaucoup Main tenu ajj vi pyaar krda va , kl v kranga te hamesha krda  rawaga. Forever and always. ❤️♾️

❤️❤️❤️ HAPPY BIRTHDAY MERI JAAN MERI SIMOO ❤️❤️❤️").classList.remove("hidden");
};

const birthday = new Date("September 10, 2026 00:00:00").getTime();

setInterval(function () {

const now = new Date().getTime();

const distance = birthday - now;

const days = Math.floor(distance / (1000 * 60 * 60 * 24));

const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

const seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("countdown").innerHTML =
"⏳ " + days + " Days " + hours + "h " + minutes + "m " + seconds + "s ❤️";

},1000);
