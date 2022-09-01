//Services
const gestionFondServices = require("../services/gestionFond.service");

//Controllers
const calculate = (req, res) => {
  let tauxAnnuel = parseFloat(req.body.tauxAnnuel);
  let duree = parseFloat(req.body.duree);
  let montantAchat = parseFloat(req.body.montantAchat);
  let fondsPropres = parseFloat(req.body.fondsPropres);
  console.log(req.body.tauxAnnuel);
  const {amortissements,fraisAchat} = gestionFondServices.calculate(montantAchat,fondsPropres,duree,tauxAnnuel);
  res.status(200).json({amortissements : amortissements,fraisAchat:fraisAchat});
};

const calculFondsPropres = (req,res) => {
  let montantAchat = parseFloat(req.body.montantAchat);
  let emprunter = parseFloat(req.body.emprunter);
  let fonds = gestionFondServices.calculFondsPropres(montantAchat,emprunter);
  res.status(200).json({fonds : fonds});
}


module.exports = {
  calculate,
  calculFondsPropres
};
