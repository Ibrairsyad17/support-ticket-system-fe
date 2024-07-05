# ADS Digital Partner - Support Ticket System Frontend (Helptix)

This repository contains the source code for my internship project at PT. Adma Digital Solusi. It is a Customer Relationship Management (CRM) website that can connect to third-party social media platforms such as WhatsApp, Instagram, and X to handle customer complaints regarding product services. Additionally, this website can assign customer complaints to various employees within the company to resolve the issues. 

The project is deployed and can be accessed [here](https://www.helptix.adslink.id/)

## Table of contents

- [Overview](#overview)
- [Demo](#demo)
- [Other Documentation](#other-documentation)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Features](#features)
- [Usage](#usage)
- [Contributors](#contributors)
- [License](#license)
- [Contact](#contact)

## Overview

This project is a Customer Relationship Management (CRM) website that can connect to third-party social media platforms such as WhatsApp, Instagram, and X to handle customer complaints regarding product services. Additionally, this website can assign customer complaints to various employees within the company to resolve the issues. The website is divided into two main parts: the frontend and the backend. The frontend is built using React.js, while the backend is built using Node.js and Express.js. The frontend and backend communicate with each other using RESTful APIs, GraphQL, and Socket.IO.

## Demo

A demo of the website can be accessed [here](https://www.helptix.my.id/) or you can see the deployment [here](https://helptix.adslink.id/)

## Other Documentation

- [Backend Repository](https://github.com/Yuniarrr/fixit)
- [Schema Database](https://drawsql.app/teams/ads-partner/diagrams/desain-database)
- [RESTful API And GraphQL Documentation](https://crimson-astronaut-599860.postman.co/workspace/ADS-Digital-Partner~42cb4ca8-a6fd-4cb5-95e6-fc78e57320a5/collection/28599911-5ce90f21-be5c-4987-8c51-1ad57fd89f98?action=share&creator=28599911)
- [UI/UX Design](https://www.figma.com/file/D9kmax73ifOpNQC4QxjRpK/Support-Ticket-System?type=design&node-id=0-1&mode=design&t=OVOOWMiaQP33gfIQ-0)

## Technologies Used

- **Frontend**: Next.js, React.js, Redux, Material-UI, Socket.IO Client, GraphQL, Apollo Client, React Router, React Hook Form, Axios, NextAuth.js, shadcn/ui, etc.
- **Backend**: Node.js, Express.js, MySQL, Socket.IO, GraphQL, Apollo Server, JWT, Nodemailer, Google OAuth, Redis, Docker, Docker Compose, Nodemon, Prisma, Bcrypt, etc.
- **Database**: MySQL, Redis
- **Authentication**: JWT, Google OAuth, OTP (One Time Password), NextAuth.js
- **Deployment**: Vercel

## Installation

To run this project on your local machine, follow these steps:

1. Clone this repository:

```bash
git clone https://github.com/Ibrairsyad17/support-ticket-system-fe.git
```

2. Navigate to the project directory:

```bash
cd support-ticket-system-fe
```

3. Install the dependencies:

```bash
npm install
```

4. Create a `.env.local` or `.env` file in the root directory of the project and add the following environment variables:

```bash
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=YOUR_NEXTAUTH_SECRET
BASE_URL_DEV=YOUR_BASE_URL_DEV
BASE_URL_PROD=YOUR_BASE_URL_PROD
GOOGLE_CLIENT_ID=YOUR_GOOGLE_CLIENT_ID
GOOGLE_CLIENT_SECRET=YOUR_GOOGLE_CLIENT_SECRET
```

5. Run the development server:

```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Features

- User authentication: Users can sign in using their credentials like email and password. The website also supports Google OAuth for user authentication. Another user authentication method is by using OTP (One Time Password) sent to the user's email.
- User roles: There are three types of users in this website: admin, employee, and customer. Admins can manage users, employees, and complaints. Employees can manage complaints assigned to them. Customers only chat with employees using their social media accounts to resolve their complaints.
- Chat: Customers can chat with employees using their social media accounts like WhatsApp, Instagram, and X. The chat feature is built using Socket.IO.
- Complaint management: Admins can assign complaints to employees to resolve the issues. Employees can manage complaints assigned to them.
- User management: Admins can manage users and employees. They can add, edit, and delete users and employees.
- Ticket management: Admins can manage tickets. They can add, edit, and delete tickets. They can also assign tickets to employees to resolve the issues.
- The tickets can change status and the priority level. The status of the ticket can be assigned, in progress, checked, or done. The priority level of the ticket can be low, medium, or high. PIC (Person In Charge) can be assigned to the ticket and change the status and priority level of the ticket.
- Dashboard: The website has a dashboard that displays the number of complaints, users, and employees. The dashboard also displays the number of complaints resolved and unresolved.
- Responsive design: The website is responsive and can be accessed from any device like a desktop, tablet, or mobile phone.
- Keyword search: Users can search for complaints using keywords. The website will display complaints that contain the keywords.
- Manage keywords: Admins can manage keywords. They can add, edit, and delete keywords. They can also assign keywords to complaints.
- Real-time notifications: Users will receive real-time notifications when there is a new complaint, a new message, or a new ticket assigned to them.
- Real-time chat: Users can chat with each other in real-time using Socket.IO.

## Usage

To use this website, follow these steps:

1. Sign up for an account using your email and password or Google OAuth.
2. Sign in using your email and password or Google OAuth.
3. Chat with employees using your social media accounts like WhatsApp, Instagram, and X.
4. Submit complaints regarding product services.
5. Assign complaints to employees to resolve the issues.
6. Manage users, employees, and complaints.
7. Manage tickets.
8. Manage keywords.
9. Search for complaints using keywords.
10. Receive real-time notifications when there is a new complaint, a new message, or a new ticket assigned to you.
11. Chat with other users in real-time.
12. Change the status and priority level of the ticket.
13. Assign PIC (Person In Charge) to the ticket.
14. Log out from your account.
15. Sign in using OTP (One Time Password) sent to your email.
16. Reset your password using OTP (One Time Password) sent to your email.
17. Change your password.
18. Edit your profile.
19. Delete your account.
20. View the dashboard that displays the number of complaints, users, and employees.
21. View the dashboard that displays the number of complaints resolved and unresolved.
22. View the dashboard that displays the number of complaints assigned to you.
23. View the dashboard that displays the number of complaints resolved and unresolved assigned to you.
24. View the dashboard that displays the number of complaints assigned to you based on the status and priority level.
25. View the dashboard that displays the number of complaints resolved and unresolved assigned to you based on the status and priority level.
26. View the dashboard that displays the number of complaints assigned to you based on the status and priority level and the PIC (Person In Charge).
27. View the dashboard that displays the number of complaints resolved and unresolved assigned to you based on the status and priority level and the PIC (Person In Charge).

## Contributors

- **Ibrahim Irsad** - [ibrairsyad17](https://github.com/Ibrairsyad17)
- **Midyanisa Yuniar** - [Yuniarrr](https://github.com/Yuniarrr)

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions, feel free to contact us:
- **Email**: ibrairsyad1712@gmail.com
- **LinkedIn**: [Ibrahim Irsad](https://www.linkedin.com/in/ibrairsyad17/)
- **GitHub**: [ibrairsyad17](https://www.github.com/Ibrairsyad17)
- **Instagram**: [ibrairsyy._](https://www.instagram.com/ibrairsyy._/)
