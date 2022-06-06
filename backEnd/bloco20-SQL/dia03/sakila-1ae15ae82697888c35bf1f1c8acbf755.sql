
SELECT * FROM PecasFornecedores.Pecas
WHERE name LIKE 'GR%';

SELECT * FROM PecasFornecedores.Fornecimentos
WHERE peca LIKE 2 ORDER BY Fornecedor ASC;

SELECT peca, Fornecedor, Preco FROM PecasFornecedores.Fornecimentos 
WHERE Fornecedor LIKE '%N%';

SELECT * FROM PecasFornecedores.Fornecedores
WHERE name LIKE '%LTDA%' ORDER BY name DESC;

SELECT COUNT(*) AS Resultado FROM PecasFornecedores.Fornecedores
WHERE code LIKE '%F%';

SELECT * FROM PecasFornecedores.Fornecimentos
WHERE Preco BETWEEN 15 AND 40 ORDER BY Preco ASC;

SELECT COUNT(*) AS 'Número de Vendas' FROM PecasFornecedores.Vendas
WHERE order_date BETWEEN '2018-04-15' AND '2019-07-30';

SELECT * FROM PecasFornecedores.Vendas;
















