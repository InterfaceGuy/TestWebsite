# Youth In The World Website

This repository contains the source code for the Youth In The World website, built using the Astro framework.

## Development

To run the website locally for development:

1.  **Install dependencies:**
    ```bash
    npm install
    ```
2.  **Start the development server:**
    ```bash
    npm run dev
    ```

This will start a local development server, typically at `http://localhost:4321`.

## Building for Production

To build the static site for deployment:

```bash
npm run build
```

The output will be generated in the `dist/` directory.

## Using the Admin Page (Temporary)

A temporary admin page is available to easily add new blog posts to the site.

1.  Access the admin page at `/TestWebsite/admin` (or `/admin` if running locally without the base path).
2.  You will need a GitHub Personal Access Token (PAT) with permissions to write to this repository.
3.  Enter your GitHub PAT in the designated field.
4.  Provide a filename for your new blog post (e.g., `my-awesome-post.md`). This will be used as the slug for the blog post URL.
5.  Enter the Markdown content for your blog post, including any necessary frontmatter (e.g., `title`, `category`, `date`, `imgSrc`).
    ```markdown
    ---
    title: "Your Article Title"
    category: "Category Name"
    date: "YYYY-MM-DD"
    imgSrc: "https://example.com/your-image.jpg" # Optional image URL
    ---

    Your blog post content goes here in Markdown format.
    ```
6.  Click "Create Blog Post".

The script on the admin page will use your PAT to create a new file in the `src/content/blog/` directory of the GitHub repository. Once the file is added and the site rebuilds (or the dev server picks up the change), the new post will appear on the blog page (`/TestWebsite/blog`).

**Note:** The PAT is used directly in the browser script and is not stored. This is a basic implementation for demonstration purposes. For a production site, a more secure CMS solution would be recommended.
