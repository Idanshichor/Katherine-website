<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project Maintenance Rules

When making changes to the website structure, styles, API integrations, or DNS configurations, you MUST:
1. Create a new feature/fix branch (e.g. `feature/your-change-name` or `fix/bug-name`) instead of committing directly to `main`.
2. Update the [project_log.md](file:///Users/idanshichor/Documents/App%20Dev/Websites%20/katherine-website/project_log.md) file to log your edits, the rationale behind them, and current status. Always refer to [project_log.md](file:///Users/idanshichor/Documents/App%20Dev/Websites%20/katherine-website/project_log.md) before implementing changes.
3. **Consistency Check:** Whenever there is a change to something visual that has implications on SEO or other pages, or any text/copy changes that have implications on the rest of the website, or any change with cross-page implications, you MUST always ask the user if you should update it everywhere.
4. **Deploying & Remotes:** Always commit and push feature branches to the `live` remote repository (`https://github.com/Idanshichor/kt-velasquez-website.git`) instead of `origin` to trigger Vercel preview deployments.



