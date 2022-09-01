//calculate service
const {
  calculeMensualite,
  calculeTauxMensuel,
  arrondiDeux
} = require("../utils/helpFunction");


const calculate = (
  montantAchat,
  fondsPropres,
  dureeCredit,
  tauxAnnuel
) => {
  let fraisAchat = 0;
  if (montantAchat > 50000) {
    fraisAchat = montantAchat / 10;
  }
  let emprunterBrut = montantAchat + fraisAchat - fondsPropres;
  let emprunterNet = emprunterBrut + emprunterBrut / 50;
  let tauxMensuel = calculeTauxMensuel(tauxAnnuel);
  let soldeDebut = emprunterNet;
  const mensualite = calculeMensualite(tauxMensuel, emprunterNet, dureeCredit);
  let interet = arrondiDeux(soldeDebut * (tauxMensuel / 100));
  let capitalRembourse = arrondiDeux(mensualite - interet);
  let soldeFin = arrondiDeux(soldeDebut - capitalRembourse);
  const amortissements = [];
  amortissements.push({
    periode: 1,
    soldeDebut: soldeDebut,
    mensualite: mensualite,
    interet: interet,
    capitalRembourse: capitalRembourse,
    soldeFin: soldeFin,
  });
  for (let i = 2; i < dureeCredit+1; i++) {
    soldeDebut = soldeFin;
    interet = arrondiDeux(soldeDebut * (tauxMensuel / 100));
    capitalRembourse = arrondiDeux(mensualite - interet);
    soldeFin = arrondiDeux(soldeDebut - capitalRembourse);
    amortissements.push({
      periode: i,
      soldeDebut: soldeDebut,
      mensualite: mensualite,
      interet: interet,
      capitalRembourse: capitalRembourse,
      soldeFin: soldeFin,
    })

  }
  return ({amortissements,fraisAchat});
};

const calculFondsPropres = (montantAchat,emprunter)=> {
  let fraisAchat = 0;
  if (montantAchat > 50000) {
    fraisAchat = montantAchat / 10;
  }
  let emprunterBrut = arrondiDeux((emprunter * 100 ) / 102)
  console.log(emprunterBrut);
  let fonds = arrondiDeux((montantAchat + fraisAchat) - emprunterBrut);
  console.log(fonds);
  return fonds;

}


module.exports = {
  calculate,
  calculFondsPropres
};
