# owasp-security-project
OWASP-based web application security assessment
This project demonstrates a structured security assessment and mitigation process for a Node.js-based web application using OWASP-recommended practices. The work was conducted in three phases, focusing on vulnerability identification, secure implementation, and advanced security validation.
## Technology Stack

- Node.js
- Express.js
- OWASP Juice Shop (for vulnerability assessment)
- Git & GitHub (version control)
- JWT (Authentication)
## Week 1: Security Assessment

The application was analyzed to identify common web vulnerabilities. OWASP Juice Shop was used as a reference platform to simulate real-world security flaws. Manual testing and automated scanning techniques were applied.

Key focus areas:
- Cross-Site Scripting (XSS)
- Input validation weaknesses
- Authentication and session handling issues
## Week 2: Security Implementation

Identified vulnerabilities were mitigated by applying secure coding practices. Input validation, password protection, and secure authentication mechanisms were implemented.

Security controls applied:
- Input validation using validator
- Password hashing with bcrypt
- Token-based authentication using JSON Web Tokens
- HTTP security headers enforced using Helmet
## How to Run the Project

Clone the repository:

git clone https://github.com/Faiq-18-max/owasp-security-project.git

Navigate to the project folder:

cd "Security Assessment"

Install dependencies:

npm install

Start the server:

npm start

The server will run on:

http://localhost:4000
## Security Logging

Security-related activities such as registration attempts and login events are logged using Winston. Logs are stored locally and can be used for auditing and analysis.
## Security Checklist

- Input validation applied
- Passwords securely hashed and salted
- Authentication tokens protected
- Security headers enabled
- Logs generated for critical events
## Conclusion

This project highlights the importance of integrating security into the development lifecycle. By identifying vulnerabilities early and applying defensive controls, the application demonstrates improved resilience against common web-based attacks.
## Author

Faiq Afaq  
Cyber Security Student
