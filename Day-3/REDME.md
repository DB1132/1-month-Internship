# 📑 Daily Task Submission Report
**MERN Stack Internship | Prelytix Private Limited**

| Field | Details |
| :--- | :--- |
| **Student Name** | Dip Baldha |
| **Internship ID** | PRL-MERN-2026-XXXX |
| **Date** | 2026-05-14 |
| **Course Day** | Day 3 |
| **GitHub Repo** | https://github.com/DB1132/1-month-Internship |

---

## 🎯 Daily Objective

> Today, I learned React Routing using React Router DOM and explored conditional rendering using the ternary operator. I created multiple pages with navigation and implemented dynamic component rendering based on conditions such as admin and user roles.

---

## 🛠️ Implementation & Changes (Self-Documentation)

### 1. React Routing Implementation
- **What:** Implemented client-side routing using React Router DOM.
- **How:** Used `BrowserRouter`, `Routes`, and `Route` components to create multiple pages like Login, Home, About, Admin, and User.
- **Why:** To understand navigation between pages without reloading the application.


### 2. Navigation Bar Creation
- **What:** Created a reusable Navbar component.
- **How:** Used `Link` from `react-router-dom` for smooth page navigation.
- **Why:** To create a user-friendly navigation system for moving between pages.


### 3. Conditional Rendering with Ternary Operator
- **What:** Displayed different navigation links based on admin condition.
- **How:** Used ternary operator inside JSX to render `Admin` or `User` links dynamically.
- **Why:** To understand how React conditionally renders components based on state or variables.


### 4. Login Navigation Functionality
- **What:** Added login button navigation.
- **How:** Used `useNavigate()` hook from React Router DOM to redirect users to Home page after login button click.
- **Why:** To learn programmatic navigation in React applications.

---

## 💻 Code Snippet: My Primary Contribution

```jsx
import { Link } from "react-router-dom";

export default function Navbar() {

  let isAdmin = true;

  return (
    <nav>
      <Link to="/home">Home</Link> |{" "}

      <Link to="/about-us">About</Link> |{" "}

      {isAdmin ? (
        <Link to="/admin">Admin</Link>
      ) : (
        <Link to="/user">User</Link>
      )}
    </nav>
  );
}
```


---

## 🛑 Challenges Faced & Solutions

- **Problem:** element prop in Route was not rendering components correctly.
- **Solution:** Used JSX syntax like <Home /> instead of directly passing component names.

- **Problem:** Conditional rendering syntax was incorrect.
- **Solution:** Learned correct ternary operator syntax inside JSX:
```jsx
    condition ? <Component1 /> : <Component2 />
```

- **Problem:** Navigation was reloading pages initially.
- **Solution:** Used Link from react-router-dom instead of anchor tags.

- **Problem:** Login button needed page redirection.
- **Solution:** Used useNavigate() hook for programmatic navigation.

---

## 💡 Key Learnings

###  React Router DOM
- BrowserRouter manages routing in React applications
- Routes contains all Route components
- Route maps paths to components
- Link enables navigation without page reload
- useNavigate() is used for navigation using functions

---

## 🔗 Live Preview

- **Local Dev Server:** http://localhost:5173
- **Git Repository:** https://github.com/Paa1Vyas/react_interns
- **Note:** All changes are done in the **dip_baldha** branch.

---


**Signature:**  
*Dip Baldha*  
*Date: 2026-05-13*
