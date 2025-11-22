# Deployment Guide for DomaiNesia cPanel

This guide explains how to deploy this project to the DomaiNesia shared hosting environment.

**IMPORTANT CONTEXT:** The cPanel server has limited memory and **cannot** build the project on its own. The standard `git push` deployment method will fail. You **must** build the project on your local computer and upload the finished files manually.

---

## Prerequisites

-   Node.js and npm installed on your local computer.
-   Access to the DomaiNesia cPanel.
-   The project's source code on your local computer.

---

## Step-by-Step Deployment Process

### Step 1: Get Latest Code & Install Dependencies

On your local machine, make sure you have the latest version of the source code and all dependencies installed.

```bash
# Get the latest code from the main branch
git pull origin main

# Install dependencies
npm install
```

### Step 2: Build the Project Locally

Run the build command on your local machine. This will compile the application and create a `dist` folder containing the optimized, static files.

```bash
npm run build
```

### Step 3: Prepare Files for Upload

This is a critical step. We need to upload the **contents** of the `dist` folder, not the folder itself.

1.  Navigate into the `dist` folder that was just created on your computer.
2.  Inside, you will see `index.html`, an `assets` folder, and other files.
3.  Select **all of these files and folders** and compress them into a single `.zip` file. You can name it `upload.zip`.

### Step 4: Upload and Extract in cPanel

1.  Log in to the DomaiNesia cPanel and open the **File Manager**.
2.  Navigate to the project's root directory on the server, which is `public_html/fly/`.
3.  Click the **"Upload"** button and select the `upload.zip` file you created in the previous step.
4.  Once uploaded, right-click on `upload.zip` in the File Manager and choose **"Extract"**.
5.  After extraction, you should see `index.html`, the `assets` folder, and other files directly inside `public_html/fly/`.

### Step 5: Verify cPanel Document Root

For the website to be accessible, the domain must point to the correct folder.

1.  In the cPanel main menu, find and open **"Domains"** or **"Subdomains"**.
2.  Locate the domain or subdomain for this project.
3.  Ensure its **"Document Root"** is set to `public_html/fly`.

If you have followed these steps, the deployment will be successful.

---

## Key Reminders & "Don'ts"

-   ✅ **DO** build the project on your own computer.
-   ✅ **DO** zip and upload only the **contents** of the `dist` folder.
-   ❌ **DO NOT** use the "Git Version Control" tool in cPanel to deploy this project. It will fail due to server memory limits.
-   ❌ **DO NOT** commit the `dist` folder to the Git repository. It is correctly ignored by `.gitignore`.
