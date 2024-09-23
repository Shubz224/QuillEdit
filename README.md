# QuillEdit - Collaborative Document Editor

![Project Logo or Intro Image](./assets/Screenshot%20(94).png)

## 📄 About

**QuillEdit** is a Google Docs-like tool that allows users to create, edit, and format documents in real-time. Users can access a document via a unique document ID and share the link with others for collaborative editing. All changes are synchronized in real-time using **Socket.IO**, ensuring that multiple users can edit the same document simultaneously from different locations.

## 🛠️ How It Works

1. A user visits QuillEdit, and a blank document is generated with a unique ID.
2. Users can edit and format the document using the **Quill text editor** interface.
3. The document can be accessed later using the same document ID from the URL.
4. Changes made by any user are reflected in real-time for others using **Socket.IO**, enabling seamless collaboration across different devices.
5. Multiple users can edit the document at the same time from different locations.

## 🚀 Features

- Real-time collaborative editing using **Socket.IO**.
- Document can be accessed using a unique ID.
- Users can format the text and save edits.
- Seamless integration of **Quill** text editor for rich-text formatting.
- Automatically saves document changes for later access via document ID.

## 📸 Feature Snapshots

- **Real-Time Editing:** Collaborate with others in real-time using the same document.
  
  ![Real-Time Collaboration](./assets/Screenshot%20(96).png)

- **Text Formatting with Quill:** A clean, intuitive interface for editing and formatting documents.

  ![Text Formatting](./assets//Screenshot%20(96).png)

  - **Managing Docs in Db:** All docs are saved in real time with Unique uuid's in MongoDb.

  ![Text Formatting](./assets//Screenshot%20(97).png)

## 🛠️ Technologies Used

- **Frontend:**
  - React
  - Quill.js (for the text editor interface)
  - Socket.IO (for real-time communication)
  
- **Backend:**
  - Node.js
  - Express
  - MongoDB (for storing documents)
  - Socket.IO (for real-time communication between clients)

## ⚙️ Difficult Part

One of the most challenging aspects of building this project was integrating **Socket.IO** for real-time updates. Since I was new to socket-based programming, managing the synchronization of document edits across multiple users and ensuring data consistency required extra effort and research. However, it was a great learning experience!

## 🌱 Future Scope

In the future, I plan to enhance **QuillEdit** by adding:
- **User Management:** Users will have accounts to store multiple documents.
- **Refreshed UI:** A more modern and responsive user interface for a better editing experience.
- **Live Editing Feature:** Users will be able to see who is editing the document live, with indicators showing their presence.

