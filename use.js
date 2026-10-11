// atom.PC/use.js — plain — kein React — export
export function use(co2=100){
  let o2 = co2*0.7 + 30*0.3;
  return { o2, h2o:50*0.8, z:co2*0.3, txt:`CO2 ${co2} -> O2 ${o2.toFixed(1)} emuliert wie Elben` };
}
