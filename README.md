
# AegisPass - Password Manager

>AegisPass is a simple, modern, and secure password manager built with React, Vite, and Tailwind CSS. It allows you to save, edit, delete, and copy your passwords for different websites, all stored locally in your browser.

## Features

- 🔒 Save passwords for different websites securely (local storage)
- ✏️ Edit and delete saved passwords
- 👁️ Show/hide password functionality
- 📋 Copy site, username, or password to clipboard
- 🎨 Beautiful, responsive UI with Tailwind CSS
- 🔔 Toast notifications for actions
- 💾 No backend required — all data stays in your browser

## Getting Started

### Prerequisites
- Node.js (v18 or above recommended)
- npm or yarn

### Installation

1. Clone the repository:
	```sh
	git clone <repo-url>
	cd pass-op
	```
2. Install dependencies:
	```sh
	npm install
	# or
	yarn install
	```
3. Start the development server:
	```sh
	npm run dev
	# or
	yarn dev
	```
4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Usage

1. Enter the website URL, username, and password in the form.
2. Click **Save** to store the password.
3. View, edit, delete, or copy your saved passwords from the list below.
4. All data is stored in your browser's local storage for privacy and security.

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Toastify](https://fkhadra.github.io/react-toastify/)
- [uuid](https://www.npmjs.com/package/uuid)

## Folder Structure

- `src/components/` — Navbar, Manager (main logic), Footer
- `public/icons/` — App icons
- `App.jsx` — Main app component


