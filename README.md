# Product Hunt Clone

Welcome to my repository for **Product Hunt Clone**.

## Introduction

**Product Hunt Clone** is a replica of the popular website Product Hunt, built with Next.js 14 and PostgreSQL. This application provides a platform for users to discover and share a curated list of unicorn startups, ordered by user likes. Key features of this clone include the ability to register new products, view a list of all products sorted by upvotes, delete products (restricted to authorized users), and filter products by tags and search terms.

The PostgreSQL database is securely deployed on **Amazon RDS**, ensuring high availability and scalability.

## Table of Contents

- [Introduction](#introduction)
- [Key Features](#key-features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Deployed Version](#deployed-version)
- [What's Coming Up](#whats-coming-up)
- [Conclusion](#conclusion)

## Key Features

- **Product Listing:** The home page displays all products stored in the PostgreSQL database, the list is sorted by the most voted products.
- **Reviewed Products:** Users can view all products that have been reviewed by the team.
- **Upvote System:** Each product includes an upvote system, allowing users to like products. 
- **Register New Products:** Authorized users can register new products through a dedicated page.
- **Delete Products:** Only authorized users have the ability to delete products from the database.
- **Authentication & Authorization:** The application uses the Clerk library to manage the authentication and authorization processes.
- **Filter by Tags:** Users can filter products based on displayed tags.
- **Search Functionality:** Users can filter products using a search input.

## Technologies Used

**Back-end:**

- **PostgreSQL:** Relational database management system.
- **Next.js:** Framework for building server-side rendered applications.
- **Clerk:** Authentication and user management.
- **Prisma:** ORM for interacting with the database.

**Front-end:**

- **React:** Library for building user interfaces.
- **Next.js:** Framework for server-side rendering and routing.
- **TypeScript:** Superset of JavaScript that provides static typing.
- **Framer Motion:** Animation library for React.
- **React DOM:** Library for working with the DOM in React.
- **React Icons:** Library for including popular icons in React applications.
- **Context API:** React API for state management across components.
- **Tailwind CSS:** Utility-first CSS framework for styling.

## Installation

Before you start, ensure you have `node` and `npm` installed on your machine. 

1. **Clone the repository**:
   
   ```bash
   git clone https://github.com/gbnunes7/product-hunt-clone.git
   ```

2. **Navigate to the repository**:

   ```bash
   cd product-hunt-clone
   ```

3. **Install the dependencies**:

   ```bash
   npm install
   ```

## Running the Application

  ```bash
  npm run dev
  ```

## Docker Compose

If you prefer to run the application using Docker, you can use the provided docker-compose.yml file. Make sure to have Docker and Docker Compose installed on your machine.

1. **Build and run the containers:**

```bash
docker-compose up --build
```

- The application will be accessible at http://localhost:3000.

## Deployed Version

You can also visit the deployed version of the application [here](https://product-hunt-clone-alpha.vercel.app).


## Conclusion

This project demonstrates the powerful combination of modern front-end and back-end technologies, with a strong focus on security, usability, and data management. The integration of PostgreSQL with Amazon RDS ensures reliable data handling, while the use of Clerk streamlines user authentication. Thank you for exploring the Product Hunt Clone! I welcome contributions and feedback to help enhance its capabilities further.

---

If you find any bugs or have a feature request, please open an issue on [GitHub](https://github.com/gbnunes7/product-hunt-clone/issues).

**Made by [Gabriel Melo](https://github.com/gbnunes7)**.
