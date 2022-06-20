const auth = (req, res, _next) => {
  const regex = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;
  const { productName, infos } = req.body;

  if (!productName || productName === "") return res.status(400).send({ "message": "O campo productName é obrigatório" });

  if (productName.length < 5) return res.status(400).send({ "message": "O campo productName deve ter pelo menos 4 caracteres" });

  if (!infos || infos === {}) return res.status(400).send({ "message": "O campo infos é obrigatório" });

  if (infos.saleDate === undefined || !infos.saleDate) return res.status(400).send({ "message": "O campo saleDate é obrigatório" });
  
  if (!infos.saleDate.match(regex)) return res.status(400).send({ "message": "O campo saleDate não é uma data válida" });
  
  if (infos.warrantyPeriod < 1 || infos.warrantyPeriod > 3) return res.status(400).send({ "message": "O campo warrantyPeriod precisa estar entre 1 e 3" });

  if(!infos.warrantyPeriod) return res.status(400).send({ "message": "O campo warrantyPeriod é obrigatório" });

  return res.status(201).send({ "message": "Venda cadastrada com sucesso" });
}

module.exports = auth
