CREATE TABLE countries (
  code CHAR(2) NOT NULL,
  year INT NOT NULL,
  gdp_per_capita DECIMAL(10,2) NOT NULL,
  govt_debt DECIMAL(10,2) NOT NULL
);

--ANSWER
SELECT code, avg(govt_debt)
FROM countries
WHERE year > 2017
GROUP BY code
HAVING min(gdp_per_capita) >= 40000
ORDER BY 2 desc
limit 3
