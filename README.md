# 🚀 Tectonas Angular Project

---

Hi, My name is **Aakash Lodhi**.  
I have completed this Angular mini project as part of a fresher assignment.

⚠ Note:  
This project uses **Standalone Components (Angular 17+)**, so the file names are:

home.ts  
login.ts  

instead of:

home.component.ts  
login.component.ts  

---

## 📌 Project Overview

A simple Angular mini project built to demonstrate core Angular fundamentals including:

- Routing
- Template-driven Forms
- Validation
- Route Guards
- localStorage
- Standalone Component Architecture (Modern Angular)

---

## 🚀 Project Features

✔ Login Page with validation  
✔ Default route redirect to `/login`  
✔ Protected Home route using Route Guard  
✔ Double-click to Add user functionality  
✔ Template-driven form validation  
✔ Email format validation  
✔ Age validation (between 1–100)  
✔ Error messages shown only after user interaction (touched || dirty)  
✔ Dynamic table rendering using *ngFor  
✔ Conditional rendering using *ngIf  
✔ Delete functionality  
✔ Logout functionality  
✔ Data persistence using localStorage  
✔ Clean and responsive UI  

---

## 🔐 Login Credentials

Username: admin  
Password: admin123  

---

## 🛠 Technologies Used

- Angular (Standalone Components – Angular 17+)
- TypeScript (Strict Typing)
- HTML
- CSS
- Browser localStorage API

---

## 📁 Project Structure

src/
└── app/
├── login/
│ └── login.ts
├── home/
│ └── home.ts
├── auth.guard.ts
├── app.routes.ts
├── app.config.ts


---

## 🧠 Angular Concepts Used

- Standalone Components
- Angular Routing
- Route Guards (canActivate)
- Template-driven Forms
- Two-way Binding (ngModel)
- Event Binding (click, dblclick)
- Form State Tracking (touched, dirty, invalid)
- Structural Directives (*ngIf, *ngFor)
- Component State Management (Array Handling)
- localStorage Integration
- Type Safety with Union Types (number | null)

---

## 🔎 Validation Improvements Implemented

- Used `novalidate` to disable browser default validation
- Used:

  field.invalid && (field.touched || field.dirty)

  for professional UX behavior
- Strong typing for age field:

  age: number | null

- Double-click controlled submission using:

  (dblclick)="addUser(userForm)"

---

## ▶ How to Run the Project

1️⃣ Clone the repository:

git clone <your-repo-link>


2️⃣ Navigate to project folder:

cd tectonas-ang-project


3️⃣ Install dependencies:

npm install


4️⃣ Run the project:

ng serve


5️⃣ Open in browser:

http://localhost:4200


---

## 📌 Assignment Requirements Covered

✔ Login validation  
✔ Default route redirection  
✔ Protected Home route  
✔ Add/Delete table data  
✔ Clear input fields after adding  
✔ Show "No data available" when table is empty  
✔ Basic form validation  
✔ Data persistence  

---

## 👨‍💻 Author

Developed by **Aakash Lodhi**  
Angular Fresher Assignment  
Built using Modern Angular Standalone Architecture