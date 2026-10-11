// pipeline.js - direcktV - stresst andere Respos - Bedarf + Zeit + Bench
const RESPOS = [
  { nr:11, name:'atom.PC', url:'https://iki1uc.github.io/atom.PC/', file:'11.html', check:'use.js' },
  { nr:22, name:'directV3', url:'https://iki1uc.github.io/directV3/anker.html', file:'22.html', check:'anker.html' },
  { nr:33, name:'OS', url:'https://iki1uc.github.io/OS/', file:'33.html', check:'OS' },
  { nr:44, name:'243', url:'https://iki1uc.github.io/243/', file:'44.html', check:'243' },
  { nr:55, name:'iki1uc', url:'https://iki1uc.github.io/iki1uc/', file:'55.html', check:'iki1uc' },
  { nr:66, name:'MXU', url:'https://iki1uc.github.io/MXU/', file:'66.html', check:'MXU' },
  { nr:77, name:'SYNC', url:'https://iki1uc.github.io/SYNC/', file:'77.html', check:'SYNC' },
  { nr:88, name:'NC', url:'https://iki1uc.github.io/NC/', file:'88.html', check:'NC' },
  { nr:99, name:'BLACK.HH.WHITE', url:'https://iki1uc.github.io/BLACK.HH.WHITE/', file:'99.html', check:'HH' },
];

export async function stress(){
  let log=[];
  for(let r of RESPOS){
    let t0=performance.now();
    try{
      let res=await fetch(r.url+'?t='+Date.now(), {method:'HEAD'});
      let t1=performance.now();
      let bedarf = res.ok? 'OK' : 'WEISS';
      let zeit = (t1-t0).toFixed(1)+'ms';
      let bench = res.ok && (t1-t0)<500? 'BESTE FIGURE 2en' : 'KO 21%/42%';
      log.push({nr:r.nr, name:r.name, bedarf, zeit, bench, url:r.url});
    }catch(e){
      log.push({nr:r.nr, name:r.name, bedarf:'FEHLT', zeit:'∞', bench:'entwerter', url:r.url});
    }
  }
  return log; // 9 Repos gestresst - Bedarf + Zeit + Bench
}
