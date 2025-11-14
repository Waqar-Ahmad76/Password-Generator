# 🌈 Secure Password Generator

A dynamic and functional web application built with **React** and styled using **Tailwind CSS** that allows users to quickly generate secure, random passwords. The application utilizes modern React Hooks for state management and optimization.

## 🌟 Features

* **Dynamic Generation:** The password is automatically regenerated every time the user modifies the length, number inclusion, or special character inclusion settings.
* **Customizable Security:** Users can set the password length between 8 and 20 characters using a convenient range slider.
* **Toggle Options:** Separate checkboxes to easily include/exclude **numbers** and **special characters**.
* **Clipboard Functionality:** One-click copying of the generated password using the Web Clipboard API and the `useRef` hook for direct DOM interaction.
* **Optimized Performance:** Generation logic is optimized using the `useCallback` hook.

## ⚙️ Technologies Used

* **Frontend:** React (with Hooks: `useState`, `useCallback`, `useEffect`, `useRef`)
* **Styling:** Tailwind CSS
* **Build Tool:** Vite

## 🚀 Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

Ensure you have **Node.js** installed on your machine.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Waqar-Ahmad76/Password-Generator.git](https://github.com/Waqar-Ahmad76/Password-Generator.git)
    cd Password-Generator
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

### Running the App

Start the development server:

```bash
npm run dev
# or
yarn dev
```
---
## 👨‍💻 Author
Waqar Ahmad |
📘 BSCS Student | 💻 Learning Frontend Development

## 🤝 Contribution
Feel free to fork the repository, suggest improvements, or submit pull requests.