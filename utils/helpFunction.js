const arrondiTrois = (x) => {
  let res = Math.round(x * 1000) / 1000;
  return res;
};
const arrondiDeux = (x) => {
  let res = Math.round(x * 100) / 100;
  return res;
};
const calculeTauxMensuel = (tauxAnnuel) => {
  let tauxAn = tauxAnnuel / 100 ;
  let taux = (Math.pow(1 + tauxAn, 1 / 12) - 1) * 100;
  return arrondiTrois(taux);
};

const calculeMensualite = (tauxMensuel,capital,duree)=> {
  let tauxMen = tauxMensuel / 100;
  let mensualite = capital * tauxMen * Math.pow((1+tauxMen),duree)/(Math.pow((1+tauxMen),duree)-1) ;
  return arrondiDeux( mensualite);
};

module.exports = {
  calculeMensualite,
  calculeTauxMensuel,
  arrondiDeux
};
