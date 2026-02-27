# Affiliate Warehouse Landing Page

A premium, conversion-optimized landing page for Affiliate Warehouse, built with React, TailwindCSS, and Framer Motion.

## 🚀 How to Run

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Start Development Server**:
    ```bash
    npm run dev
    ```

3.  **Build for Production**:
    ```bash
    npm run build
    ```

## 📝 How to Edit

### Text Content
All text content is centralized in `src/data/content.ts`. Edit this file to change headlines, descriptions, FAQ items, and reviews without touching the code.

### Calendly Integration
1.  Open `src/components/sections/FormsSection.tsx`.
2.  Locate the comment `/* Calendly Placeholder */`.
3.  Replace the placeholder div with your actual Calendly embed code (e.g., `react-calendly` or standard iframe).

### Form Submission Email
1.  Open `src/data/content.ts` and update `forms.emailConfig` (currently a placeholder).
2.  In `src/components/sections/FormsSection.tsx`, the `handleSubmit` function currently simulates an API call.
3.  To connect to a real backend:
    *   Replace the `setTimeout` simulation with a `fetch` call to your API endpoint.
    *   Or integrate with a service like Formspree, Netlify Forms, or EmailJS.

### Styling
*   **Colors**: The theme uses standard Tailwind colors (`slate` for neutrals, `purple` for accents). To change the accent color, find-and-replace `purple` with another Tailwind color (e.g., `blue`, `emerald`) in the codebase.
*   **Fonts**: The app uses `Inter` (sans) and `JetBrains Mono` (mono). These are configured in `src/index.css`.

## 📂 Project Structure

*   `src/components/layout`: Header and Footer.
*   `src/components/sections`: Individual page sections (Hero, FAQ, Forms, etc.).
*   `src/components/ui`: Reusable UI atoms (Button, Card, Input).
*   `src/data`: Static content data.
*   `src/lib`: Utilities (cn helper).
