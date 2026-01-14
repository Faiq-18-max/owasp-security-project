README - Security Assessment Project

1. Project Overview
This project demonstrates web application security assessment and mitigation based on OWASP Top 10 using Node.js and OWASP Juice Shop.

2. Prerequisites
- Node.js installed
- Docker installed
- npm available
- Internet browser

3. Running the Application using Docker (OWASP Juice Shop)

Step 1: Pull the OWASP Juice Shop image
docker pull bkimminich/juice-shop

Step 2: Run the container on port 3000
docker run --rm -p 3000:3000 bkimminich/juice-shop

Step 3: Open the application
Open browser and go to:
http://localhost:3000

4. Running Custom Node.js Security Application

Step 1: Navigate to project directory
cd Desktop

Step 2: Install dependencies
npm install
npm install express body-parser validator bcrypt jsonwebtoken helmet winston


Step 3: Start the server
node server.js

The application will run on:
http://localhost:4000

5. Security Assessment Commands

Install OWASP ZAP (manual tool):
https://www.zaproxy.org/download/

Basic npm security audit:
npm audit

Fix vulnerabilities automatically:
npm audit fix

Check outdated packages:
npm outdated

Update dependencies:
npm update

6. Security Testing (Manual)

Test input validation using curl:
For Registration:
curl -X POST http://localhost:4000/register ^
-H "Content-Type: application/json" ^
-d "{\"email\":\"test@example.com\",\"password\":\"Test@123\"}"

For Login: 
curl -X POST http://localhost:4000/login -H "Content-Type: application/json" -d "{\"email\":\"test@example.com\",\"password\":\"Test@123\"}"

For Invalid Input:
curl -X POST http://localhost:4000/register -H "Content-Type: application/json" -d "{\"email\":\"wrong\",\"password\":\"123\"}"

7. Logging
Security logs are stored in:
security.log

8. Notes
- Ensure only one application uses port 3000 at a time.
- Change ports if conflicts occur.
- Use HTTPS in production environments.

End of README
