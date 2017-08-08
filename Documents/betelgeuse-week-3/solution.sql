CREATE TABLE syntax_practice (
    user_id serial PRIMARY KEY,
    username character varying(12),
    city character varying(128),
    transactions_completed integer,
    transactions_attempted integer,
    account_balance numeric(12,2)
);

INSERT INTO syntax_practice (username, city, transactions_completed, transactions_attempted, account_balance) VALUES ('shawn', 'chicago', 5, 10, 355.80),
('cherise', 'minneapolis', 9, 9, 4000.00),
('larry', 'minneapolis', 3, 4, 77.01),
('dallas', 'new york', 6, 12, 0.99),
('anthony', 'chicago', 0, 0, 0.00),
('travis', 'miami', 1, 100, 500000.34),
('davey', 'chicago', 9, 99, 98.04),
('ora', 'phoenix', 88, 90, 3.33),
('grace', 'miami', 7, 9100, 34.78),
('hope', 'phoenix', 4, 10, 50.17);

SELECT * FROM syntax_practice;

-- Get all users from Chicago
SELECT * FROM syntax_practice WHERE city ILIKE 'chicago';
--Get all the users with usernames that contain the letter a
SELECT * FROM syntax_practice WHERE username ILIKE '%a%';
--	1.	The bank is giving a new customer bonus! Update all records with an account balance of 0.00 and a transactions_attempted of 0. Give them a new account balance of 10.00.
UPDATE syntax_practice 
SET account_balance = 10.00
WHERE 
account_balance = 0
AND 
transactions_attempted = 0;
--Select all users that have attempted 9 or more transactions.
SELECT * FROM syntax_practice WHERE transactions_attempted >= 9;
--Get the username and account balance of the 3 users with the highest balances, sort highest to lowest balance. NOTE: Research LIMIT
SELECT username, account_balance FROM syntax_practice 
ORDER BY account_balance DESC LIMIT 3;
--Get the username and account balance of the 3 users with the lowest balances, sort lowest to highest balance.
SELECT username, account_balance FROM syntax_practice 
ORDER BY account_balance ASC LIMIT 3;
--Get all users with account balances that are more than $100.
SELECT * FROM syntax_practice WHERE account_balance > 100;
-- Add a new record.
INSERT INTO syntax_practice(username,city,transactions_completed,transactions_attempted,account_balance)
VALUES ('shiela','omaha','4','34','34.67');
--The bank is losing money in Miami and Phoenix and needs to unload low transaction customers: Delete users that reside in miami OR phoenix and have completed fewer than 5 transactions.
DELETE FROM syntax_practice 
WHERE 
(city = 'chicago'
OR 
city = 'miami')
AND 
transactions_completed < 5;