# Deploying to Vercel

This project is set up as a React application within a subdirectory (`react-app`). Follow these steps to deploy it to Vercel.

## Prerequisites

- A [GitHub](https://github.com/) account.
- A [Vercel](https://vercel.com/) account.
- This project pushed to a GitHub repository.

## Deployment Steps

1.  **Log in to Vercel**: Go to [vercel.com](https://vercel.com/) and log in.
2.  **Add New Project**: Click on the "Add New..." button and select "Project".
3.  **Import Git Repository**: Find your repository in the list and click "Import".
4.  **Configure Project**:
    *   **Project Name**: You can leave this as is or change it.
    *   **Framework Preset**: Vercel should automatically detect **Vite**. If not, select it manually.
    *   **Root Directory**: Click "Edit" next to Root Directory and select `react-app`. This is crucial because your application lives inside this folder.
5.  **Build and Output Settings**:
    *   The default settings for Vite should work automatically:
        *   **Build Command**: `npm run build`
        *   **Output Directory**: `dist`
        *   **Install Command**: `npm install`
    *   *Note: You shouldn't need to change these if you set the Root Directory correctly.*
6.  **Deploy**: Click the "Deploy" button.

Vercel will now build your application. Once finished, you will see a dashboard with your live URL.
