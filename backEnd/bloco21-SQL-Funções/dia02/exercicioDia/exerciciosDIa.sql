SELECT
    A.actor_id, A.first_name, F.film_id
FROM
    sakila.actor AS A
        INNER JOIN
    sakila.film_actor AS F ON A.actor_id = F.actor_id;
    
SELECT
    S.first_name, S.last_name, A.address
FROM
    sakila.staff AS S
        INNER JOIN
    sakila.address AS A ON S.address_id = A.address_id;
    
SELECT
    C.customer_id,
    C.first_name,
    C.email,
    C.address_id,
    A.address
FROM
    sakila.customer AS C
        INNER JOIN
    sakila.address AS A ON C.address_id = A.address_id
ORDER BY C.first_name DESC
LIMIT 100;

SELECT
    C.first_name, C.email, C.address_id, A.address, A.district
FROM
    sakila.customer AS C
        INNER JOIN
    sakila.address AS A ON C.address_id = A.address_id
WHERE
    A.district = 'California'
        AND C.first_name LIKE '%rene%';

SELECT
    stf.first_name,
    stf.last_name,
    AVG(pay.amount) AS `Média de pagamento`
FROM
    sakila.staff AS stf
INNER JOIN
    sakila.payment pay ON stf.staff_id = pay.staff_id
WHERE
    YEAR(pay.payment_date) = 2006
GROUP BY stf.staff_id;



SELECT
    CONCAT(Employee.FIRST_NAME, " ", Employee.LAST_NAME) AS "Nome Pessoa Colaboradora",
    CONCAT(Manager.FIRST_NAME, " ", Manager.LAST_NAME) AS "Nome Gerente"
FROM
	hr.employees AS Employee
INNER JOIN
	hr.employees AS Manager ON Employee.MANAGER_ID = Manager.EMPLOYEE_ID
WHERE
	Employee.DEPARTMENT_ID <> Manager.DEPARTMENT_ID;
    

SELECT
    CONCAT(Manager.FIRST_NAME, " ", Manager.LAST_NAME) AS "Nome Gerente",
    COUNT(*)
FROM
	hr.employees AS Manager
INNER JOIN
	hr.employees AS Employee ON Employee.MANAGER_ID = Manager.EMPLOYEE_ID
GROUP BY
	Manager.EMPLOYEE_ID;
    
USE Pixar;

SELECT
    m.title,
    (b.domestic_sales + b.international_sales) AS "Vendas"
FROM
    Movies m
        INNER JOIN
    BoxOffice b ON b.movie_id = m.id
WHERE
    b.international_sales > b.domestic_sales;
    
USE Pixar;

SELECT
    m.title, b.rating
FROM
    Movies m
        INNER JOIN
    BoxOffice b ON b.movie_id = m.id
ORDER BY b.rating DESC;


USE Pixar;

SELECT
    t.name,
    t.location,
    m.title,
    m.director,
    m.year,
    m.length_minutes
FROM
    Theater t
        LEFT JOIN
    Movies m ON t.id = m.theater_id
ORDER BY t.name;
