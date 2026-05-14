# 📑 Daily Task Submission Report
**MERN Stack Internship | Prelytix Private Limited**

| Field | Details |
| :--- | :--- |
| **Student Name** | Dip Baldha |
| **Internship ID** | PRL-MERN-2026-XXXX |
| **Date** | 2026-05-13 |
| **Course Day** | Day 2 |
| **GitHub Repo** | https://github.com/DB1132/1-month-Internship |

---

## 🎯 Daily Objective

> Today, I learned version control fundamentals using Git and GitHub commands for collaborative development. I also explored React hooks, specifically `useEffect`, to manage side effects and lifecycle behavior in functional components. I implemented practical examples of form handling with timers and data persistence using `useEffect`.

---

## 🛠️ Implementation & Changes (Self-Documentation)

### 1. New Features / Logic Implemented
- **What:** Created a basic form with a 10-second countdown timer.
- **How:** Used `useEffect` with `setInterval` to decrease time every second and show an alert when time reaches 0.
- **Why:** To understand how `useEffect` works for side effects and how cleanup functions prevent memory leaks.


### 2. Git & Version Control Workflow
- Initialized git repository and cloned project from GitHub.
- Created feature branch using `git checkout -b dip_baldha`.
- Staged changes with `git add .` and committed with descriptive messages.
- Pushed local branch to remote repository with `git push -u origin dip_baldha`.
- Practiced pulling latest changes with `git pull origin main` and pushing updates with `git push origin dip_baldha`.

### 3. UI/UX Enhancements
- Implemented form inputs with real-time state updates.
- Added countdown timer display with red styling for urgency.
- Integrated form reset functionality that clears input values.
- Added visual feedback with alerts on form submission and session expiration.

---

## 💻 Code Snippet: My Primary Contribution

```jsx
import { useEffect, useState } from "react";

const Form = () => {
  const [time, setTime] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(interval);
          alert("Session expired! Please submit the form within 10 seconds.");
          return 0;
        }

        return prevTime - 1;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Enter name" />
      <br />

      <input type="email" name="email" placeholder="Enter email" />
      <br />

      <textarea name="message" placeholder="Enter message" />
      <br />

      <button type="submit">Submit</button>
      <br />

      <button type="reset">Reset</button>

      <h2 style={{ color: "red" }}>Time Left: {time}</h2>
    </form>
  );
};

export default Form;
```

---

## 🛑 Challenges Faced & Solutions

- **Problem:** Timer alert was firing repeatedly.
- **Solution:** Used `clearInterval(interval)` and returned `0` when time reached zero.

- **Problem:** Timer needed to stop after component unmount.
- **Solution:** Added cleanup function inside `useEffect`.

- **Problem:** Timer should start only once.
- **Solution:** Used empty dependency array `[]` in `useEffect`.

- **Problem:** Git branch changes were confusing at first.
- **Solution:** Practiced clone, commit, push, pull, and branch commands step by step.

---

## 💡 Key Learnings

### Git & GitHub Commands
- `git clone <url>` - Clone remote repository to local machine
- `git add .` - Stage all changes for commit
- `git commit -m "<message>"` - Commit staged changes with a message
- `git push` - Push commits to remote repository
- `git checkout -b <branch-name>` - Create and switch to a new branch
- `git push -u origin <branch-name>` - Push branch and set upstream
- `git pull origin <branch-name>` - Pull latest changes from remote branch
- `git push origin <branch-name>` - Push changes to a specific branch

### React useEffect Hook
- Runs side effects after rendering
- Dependency array controls when it runs
- Cleanup function prevents memory leaks
- Useful for timers, API calls, subscriptions, and logging

### Form Handling
- Controlled inputs require `value` and `onChange`
- `e.preventDefault()` stops page reload on submit
- State can be reset after form submission

---

## 🔗 Live Preview

- **Local Dev Server:** http://localhost:5173
- **Git Repository:** https://github.com/Paa1Vyas/react_interns
- **Note:** All changes are done in the **dip_baldha** branch.

---


**Signature:**  
*Dip Baldha*
*Date: 2026-05-13*