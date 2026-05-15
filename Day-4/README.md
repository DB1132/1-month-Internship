# 📑 Daily Task Submission Report
**MERN Stack Internship | Prelytix Private Limited**

| Field | Details |
| :--- | :--- |
| **Student Name** | Dip Baldha |
| **Internship ID** | PRL-MERN-2026-XXXX |
| **Date** | 2026-05-15 |
| **Course Day** | Day 4 |
| **GitHub Repo** | https://github.com/DB1132/1-month-Internship |

---

## 🎯 Daily Objective

> Today, I learned about Props, Prop Drilling, Fetch API, useEffect hook, asynchronous JavaScript concepts, and how `.then()` and `.catch()` work while handling API requests in React. I also practiced displaying weather API data dynamically in React components.

---

## 🛠️ Implementation & Changes (Self-Documentation)

### 1. Understanding Props in React
- **What:** Learned how props are used to pass data between components.
- **How:** Passed values from parent components to child components using JSX attributes.
- **Why:** To understand component communication and reusable component design in React.

---

### 2. Prop Drilling Concept
- **What:** Explored Prop Drilling in React applications.
- **How:** Passed data through multiple nested components to reach the target component.
- **Why:** To understand challenges in large React applications and learn why Context API or state management libraries are useful.

---

### 3. Fetch API Implementation
- **What:** Learned how to fetch external API data in React.
- **How:** Used `fetch()` inside `useEffect()` hook to retrieve weather data from API.
- **Why:** To understand API integration and dynamic data rendering in frontend applications.

---

### 4. Understanding `.then()` and `.catch()`
- **What:** Learned promise handling syntax in JavaScript.
- **How:** Used `.then()` to process successful API responses and `.catch()` to handle errors.
- **Why:** To understand asynchronous programming and error handling in JavaScript.

---

### 5. Working with useEffect Hook
- **What:** Practiced using `useEffect()` for side effects.
- **How:** Triggered API calls when the component loads using dependency array `[]`.
- **Why:** To understand lifecycle behavior in functional React components.

---

## 💻 Code Snippet: My Primary Contribution

```jsx
import React, { useEffect, useState } from "react";

export default function Weather() {

  const [weather, setWeather] = useState(null);

  useEffect(() => {

    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m"
    )
      .then((response) => response.json())

      .then((data) => {
        console.log(data);
        setWeather(data);
      })

      .catch((error) => {
        console.log(error);
      });

  }, []);

  return (
    <div>
      <h1>Weather Data</h1>

      {weather && (
        <div>
          <p>Timezone: {weather.timezone}</p>

          <p>
            Temperature:
            {weather.hourly.temperature_2m[0]}°C
          </p>
        </div>
      )}
    </div>
  );
}


---

## 🛑 Challenges Faced & Solutions

- **Problem:** element prop in Route was not rendering components correctly.
- **Solution:** Used JSX syntax like <Home /> instead of directly passing component names.

- **Problem:** Conditional rendering syntax was incorrect.
- **Solution:** Learned correct ternary operator syntax inside JSX:
```jsx
    condition ? <Component1 /> : <Component2 />
```

- **Problem:** API data was not showing immediately.
- **Solution:** Learned that API requests are asynchronous and data loads after fetch completion.
- **Problem:** : Confusion between synchronous and asynchronous code execution.
- **Solution:** Practiced understanding Promise flow using .then() and .catch().
- **Problem:** : Understanding Prop Drilling became confusing with nested components.
- **Solution:** Learned how data flows through parent-child component hierarchy and explored Context API as a solution.

---

## 💡 Key Learnings

###  React Concepts
- Props are used to pass data between components
- Prop Drilling occurs when props are passed through many unnecessary components
- useEffect() is used for side effects like API calls
- useState() stores dynamic data in components
- Conditional rendering prevents application crashes before data loads

###  JS Concepts
- fetch() is used to request API data
- .then() handles successful responses
- .catch() handles errors
- Promises help manage asynchronous operations

---

## 🔗 Live Preview

- **Local Dev Server:** http://localhost:5173
- https://github.com/DB1132/1-month-Internship/tree/main/Day-4

---


**Signature:**  
*Dip Baldha*  
*Date: 2026-05-15*
