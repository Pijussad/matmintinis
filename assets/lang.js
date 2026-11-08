/* Miksike / Matmintinis – client-side language switcher.
   Lithuanian is the default and source language. */
(function(){
  var LANGS = ['lt','et','lv','sl','ru','en'];
  var NAMES = {lt:'Lietuvių', et:'Eesti', lv:'Latviešu', sl:'Slovenščina', ru:'Русский', en:'English'};

  function getParam(name){
    try{ return new URLSearchParams(location.search).get(name); }catch(e){ return null; }
  }
  var lang = getParam('lang');
  if(!lang){ try{ lang = localStorage.getItem('mm_lang'); }catch(e){ lang=null; } }
  if(LANGS.indexOf(lang) < 0) lang = 'lt';
  try{ localStorage.setItem('mm_lang', lang); }catch(e){}
  window.MM_LANG = lang;

  /* Lithuanian base phrase -> translations */
  var D = {
    "Pradžios tinklapis":{et:"Avaleht",lv:"Sākums",sl:"Domov",ru:"Главная",en:"Home"},
    "E. darbo lakštai":{et:"E-töölehed",lv:"E-darba lapas",sl:"E-delovni listi",ru:"Электронные листы",en:"Worksheets"},
    "Mano e. darbo lakštai":{et:"Minu e-töölehed",lv:"Manas e-darba lapas",sl:"Moji e-delovni listi",ru:"Мои эл. листы",en:"My worksheets"},
    "Paslaugos":{et:"Teenused",lv:"Pakalpojumi",sl:"Storitve",ru:"Услуги",en:"Services"},
    "Kontaktai":{et:"Kontaktid",lv:"Kontakti",sl:"Kontakt",ru:"Контакты",en:"Contacts"},
    "Nuostatos":{et:"Seaded",lv:"Iestatījumi",sl:"Nastavitve",ru:"Настройки",en:"Settings"},
    "Paieška":{et:"Otsi",lv:"Meklēt",sl:"Iskanje",ru:"Поиск",en:"Search"},
    "Svečias":{et:"Külaline",lv:"Viesis",sl:"Gost",ru:"Гость",en:"Guest"},
    "Pradžia":{et:"Avaleht",lv:"Sākums",sl:"Domov",ru:"Главная",en:"Home"},
    "Taisyklės":{et:"Reeglid",lv:"Noteikumi",sl:"Pravila",ru:"Правила",en:"Rules"},
    "Statistika":{et:"Statistika",lv:"Statistika",sl:"Statistika",ru:"Статистика",en:"Statistics"},
    "Treniruotės laukas":{et:"Trenniväljak",lv:"Treniņu lauks",sl:"Polje za vadbo",ru:"Тренировочная площадка",en:"Training field"},
    "Treniruočių rezultatai":{et:"Treeningu tulemused",lv:"Treniņu rezultāti",sl:"Rezultati vadbe",ru:"Результаты тренировок",en:"Training results"},
    "*VARŽYBOS*":{et:"*VÕISTLUSED*",lv:"*SACENSĪBAS*",sl:"*TEKMOVANJA*",ru:"*СОРЕВНОВАНИЯ*",en:"*COMPETITIONS*"},
    "Istorija":{et:"Ajalugu",lv:"Vēsture",sl:"Zgodovina",ru:"История",en:"History"},
    "Pratybos su natūraliais skaičiais":{et:"Harjutused naturaalarvudega",lv:"Vingrinājumi ar naturālajiem skaitļiem",sl:"Vaje z naravnimi števili",ru:"Упражнения с натуральными числами",en:"Practice with natural numbers"},
    "Pratybos su sveikaisiais skaičiais":{et:"Harjutused täisarvudega",lv:"Vingrinājumi ar veselajiem skaitļiem",sl:"Vaje s celimi števili",ru:"Упражнения с целыми числами",en:"Practice with integers"},
    "Sudėtis":{et:"Liitmine",lv:"Saskaitīšana",sl:"Seštevanje",ru:"Сложение",en:"Addition"},
    "Atimtis":{et:"Lahutamine",lv:"Atņemšana",sl:"Odštevanje",ru:"Вычитание",en:"Subtraction"},
    "Sudėtis ir atimtis":{et:"Liitmine ja lahutamine",lv:"Saskaitīšana un atņemšana",sl:"Seštevanje in odštevanje",ru:"Сложение и вычитание",en:"Addition and subtraction"},
    "Palyginimas":{et:"Võrdlemine",lv:"Salīdzināšana",sl:"Primerjanje",ru:"Сравнение",en:"Comparison"},
    "Reikšmių įstatymas":{et:"Lünkamine",lv:"Trūkstošā vērtība",sl:"Vstavljanje vrednosti",ru:"Подстановка значений",en:"Missing value"},
    "Daugyba":{et:"Korrutamine",lv:"Reizināšana",sl:"Množenje",ru:"Умножение",en:"Multiplication"},
    "Dalyba":{et:"Jagamine",lv:"Dalīšana",sl:"Deljenje",ru:"Деление",en:"Division"},
    "Daugyba ir dalyba":{et:"Korrutamine ja jagamine",lv:"Reizināšana un dalīšana",sl:"Množenje in deljenje",ru:"Умножение и деление",en:"Multiplication and division"},
    "Visi veiksmai":{et:"Kõik tehted",lv:"Visas darbības",sl:"Vse operacije",ru:"Все действия",en:"All operations"},
    "Normaliai":{et:"Tavaline",lv:"Parasti",sl:"Običajno",ru:"Обычно",en:"Normal"},
    "Sprintas":{et:"Sprint",lv:"Sprints",sl:"Sprint",ru:"Спринт",en:"Sprint"},
    "Laikas:":{et:"Aeg:",lv:"Laiks:",sl:"Čas:",ru:"Время:",en:"Time:"},
    "Taškai:":{et:"Punktid:",lv:"Punkti:",sl:"Točke:",ru:"Очки:",en:"Points:"},
    "Lygis:":{et:"Tase:",lv:"Līmenis:",sl:"Stopnja:",ru:"Уровень:",en:"Level:"},
    "Pradėti":{et:"Alusta",lv:"Sākt",sl:"Začni",ru:"Начать",en:"Start"},
    "Baigti":{et:"Lõpeta",lv:"Beigt",sl:"Končaj",ru:"Закончить",en:"Finish"},
    "Atšaukti":{et:"Tühista",lv:"Notīrīt",sl:"Prekliči",ru:"Очистить",en:"Clear"},
    "Grįžti į pradžią":{et:"Tagasi algusesse",lv:"Atgriezties sākumā",sl:"Nazaj na začetek",ru:"Вернуться в начало",en:"Back to start"},
    "Data":{et:"Kuupäev",lv:"Datums",sl:"Datum",ru:"Дата",en:"Date"},
    "Pratimas":{et:"Harjutus",lv:"Vingrinājums",sl:"Vaja",ru:"Упражнение",en:"Exercise"},
    "Taškai":{et:"Punktid",lv:"Punkti",sl:"Točke",ru:"Очки",en:"Points"},
    "Lygis":{et:"Tase",lv:"Līmenis",sl:"Stopnja",ru:"Уровень",en:"Level"},
    "Išvalyti rezultatus":{et:"Tühjenda tulemused",lv:"Notīrīt rezultātus",sl:"Počisti rezultate",ru:"Очистить результаты",en:"Clear results"},
    "Grįžti į treniruotės lauką":{et:"Tagasi treeninguväljale",lv:"Atgriezties treniņu laukā",sl:"Nazaj na polje za vadbo",ru:"Вернуться на тренировочную площадку",en:"Back to training field"},
    "Rezultatų dar nėra. Sužaiskite pratimą ir rezultatas atsiras čia.":{et:"Tulemusi veel pole. Mängi üks harjutus ja tulemus ilmub siia.",lv:"Rezultātu vēl nav. Nospēlē vienu vingrinājumu, un rezultāts parādīsies šeit.",sl:"Rezultatov še ni. Odigraj eno vajo in rezultat se bo prikazal tukaj.",ru:"Результатов пока нет. Сыграйте одно упражнение, и результат появится здесь.",en:"No results yet. Play one exercise and the result will appear here."},
    "Treniruotės laukas – treniruotės":{et:"Trenniväljak",lv:"Treniņu lauks",sl:"Polje za vadbo",ru:"Тренировочная площадка",en:"Training field"}
  };

  /* Game-engine dynamic phrases */
  var G = {
    et:{vajad:"Vajad",punkti:"punkti",viim40sek:"Viimased 40 sekundit!",lopeta:"Lõpeta",tubli:"Hästi, jõudsid järgmisele tasemele",kahjuks:"Vabandust, sa ei läbinud seda taset",aeglabi:"Aeg läbi!",lisaaeg:"Lisaaeg 10 sekundit!",guest:"Külaline",grade:"klass"},
    lv:{vajad:"Nepieciešams",punkti:"punkti",viim40sek:"Pēdējās 40 sekundes!",lopeta:"Beigt",tubli:"Labi, tu sasniedzi nākamo līmeni",kahjuks:"Atvaino, tu neizpildīji šo līmeni",aeglabi:"Laiks beidzies!",lisaaeg:"Papildu 10 sekundes!",guest:"Viesis",grade:"klase"},
    sl:{vajad:"Potrebuješ",punkti:"točk",viim40sek:"Zadnjih 40 sekund!",lopeta:"Končaj",tubli:"Dobro, sedaj si na naslednji stopnji!",kahjuks:"Žal, nisi dosegel dovolj točk.",aeglabi:"Čas je potekel!",lisaaeg:"10 sekund več!",guest:"Gost",grade:"razred"},
    ru:{vajad:"Нужно",punkti:"очков",viim40sek:"Последние 40 секунд!",lopeta:"Закончить",tubli:"Хорошо, вы перешли на следующий уровень",kahjuks:"К сожалению, вы не прошли этот уровень",aeglabi:"Время вышло!",lisaaeg:"Дополнительные 10 секунд!",guest:"Гость",grade:"класс"},
    en:{vajad:"You need",punkti:"points",viim40sek:"Last 40 seconds!",lopeta:"Finish",tubli:"Good, you advanced to the next level",kahjuks:"Sorry, you did not pass this level",aeglabi:"Time is up!",lisaaeg:"Extra 10 seconds!",guest:"Guest",grade:"grade"}
  };

  function translateTextNode(node){
    if(lang==='lt') return;
    var s=node.nodeValue; var t=s.trim(); if(!t) return;
    var e=D[t]; if(e && e[lang]){ node.nodeValue = s.replace(t, e[lang]); }
  }
  function translateDom(){
    if(lang==='lt'){ translateInputs(); return; }
    try{
      var walker=document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
      var nodes=[]; while(walker.nextNode()) nodes.push(walker.currentNode);
      nodes.forEach(translateTextNode);
    }catch(e){}
    translateInputs();
  }
  function translateInputs(){
    if(lang==='lt') return;
    var inputs=document.querySelectorAll('input[type=button],input[type=submit]');
    for(var i=0;i<inputs.length;i++){
      var el=inputs[i]; var v=el.value; var tv=v.trim();
      var e=D[tv]; if(e && e[lang]) el.value=e[lang];
    }
  }

  function wireFlags(){
    var map={lithuania:'lt',eesti:'et',latvia:'lv',slovenia:'sl',russianflag:'ru',england:'en'};
    var links=document.querySelectorAll('.flags a');
    for(var i=0;i<links.length;i++){
      (function(a){
        var img=a.querySelector('img'); if(!img) return;
        var key=null; for(var k in map){ if(img.src.indexOf(k)>=0){ key=map[k]; break; } }
        if(!key) return;
        a.href='#';
        a.title=NAMES[key]||key;
        a.style.opacity=(key===lang)?'1':'0.5';
        if(key===lang){ a.style.outline='2px solid #ffcc00'; a.style.outlineOffset='1px'; }
        a.onclick=function(ev){
          ev.preventDefault();
          try{ localStorage.setItem('mm_lang', key); }catch(e){}
          var u; try{ u=new URL(location.href); }catch(e){ u=null; }
          if(u){ u.searchParams.set('lang', key); location.href=u.toString(); }
          else { location.href=location.pathname+'?lang='+key; }
        };
      })(links[i]);
    }
  }

  function overrideGame(){
    if(lang==='lt') return;
    var g=G[lang]; if(!g) return;
    try{
      if(typeof vajad!=='undefined'){
        vajad=g.vajad; punkti=g.punkti; viim40sek=g.viim40sek; lopeta=g.lopeta;
        tubli=g.tubli; kahjuks=g.kahjuks; aeglabi=g.aeglabi; lisaaeg=g.lisaaeg;
      }
    }catch(e){}
    // wrap alusta to localize the player line
    try{
      if(typeof window.alusta==='function' && !window.__mmAlusta){
        var _a=window.alusta; window.__mmAlusta=true;
        window.alusta=function(){
          var r=_a.apply(this,arguments);
          try{
            var y=document.getElementById('ylrida');
            if(y){ y.innerHTML=y.innerHTML.replace('Svečias', g.guest).replace('klasė', g.grade); }
          }catch(e){}
          return r;
        };
      }
    }catch(e){}
  }

  function translateBody(){
    translateDom();
    overrideGame();
    wireFlags();
  }

  function fixTeade(){
    if(lang==='lt') return;
    var el=document.getElementById('txtTeade'); if(!el) return;
    var g=G[lang]; if(!g) return;
    var tx=el.textContent;
    var m=tx.match(/^Jums reikia surinkti (\d+) tšk\.$/);
    if(m){ el.textContent=g.vajad+' '+m[1]+' '+g.punkti; return; }
    if(tx==='Paskutinės 40 sekundžių!'){ el.textContent=g.viim40sek; return; }
    if(tx==='Sprintas'){ var e=D['Sprintas']; if(e&&e[lang]) el.textContent=e[lang]; return; }
    if(tx==='Laikas baigėsi!'){ el.textContent=g.aeglabi; return; }
  }
  setInterval(fixTeade, 400);
  function fixPlayer(){
    if(lang==='lt') return; var g=G[lang]; if(!g) return;
    ['ylrida','player'].forEach(function(id){
      var el=document.getElementById(id); if(!el) return;
      var t=el.innerHTML;
      var nt=t.replace(/Svečias/g, g.guest).replace(/klasė/g, g.grade);
      if(nt!==t) el.innerHTML=nt;
    });
  }
  setInterval(fixPlayer, 500);

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded', translateBody);
  } else {
    translateBody();
  }
})();
