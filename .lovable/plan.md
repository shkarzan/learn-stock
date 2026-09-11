# StockSignal AI Frontend Plan

## Goal
Build a complete, presentation-ready academic frontend for stock signal prediction using centralized mock data only. Keep it simple, responsive, and focused on the flow: stock selection → indicators → BUY/HOLD/SELL prediction.

## Pages and navigation
- Create a shared StockSignal AI identity and working navigation across all requested URLs.
- Build `/` as the landing page with navbar, concise project introduction, calls to action, three-step explanation, academic footer, and disclaimer.
- Build `/login` and `/register` with validated mock forms and links between them.
- Build `/dashboard` with summary cards and a clickable recent-signals table.
- Build `/watchlist` with mock add/remove behavior and links to stock details.
- Build `/analyze` with stock search/selection, analysis result, prediction, and indicator cards.
- Build `/top-signals` with all 20 stocks, working signal filters, and stock-detail links.
- Build `/stock/$symbol` with pricing, indicators, prediction, dynamic TradingView link in a new tab, and watchlist control.
- Build `/settings` with locally editable profile, market, theme, notifications, mock password action, and logout.
- Add a reusable dashboard sidebar/top bar with a compact mobile navigation state.

## Mock behavior and data
- Define a typed `Stock` model and one centralized dataset containing all 20 requested NSE stocks and TradingView URLs.
- Persist the mock user profile, signed-in state, preferences, theme, and watchlist in browser storage.
- Never retain a password; login/register remain clearly mock-only frontend flows.
- Make logout return to login, stock rows open the correct detail page, filtering update immediately, and TradingView open safely in a new tab.
- Handle unknown stock symbols with a clear not-found state and a path back to the stock list.

## Visual direction
- Use a white/light financial dashboard with dark text, blue primary actions, green BUY, amber HOLD, and red SELL.
- Use restrained cards, clean tables, small corner radii, generous spacing, Lucide icons, and minimal motion.
- Provide an accessible dark theme from Settings while preserving semantic signal colors.
- Keep tables readable on small screens through responsive layouts and horizontal scrolling where appropriate.

## Technical approach
- Preserve the existing React, Vite, TypeScript, Tailwind CSS v4, and shadcn/ui setup.
- Use the project’s built-in TanStack Router rather than installing a second router; it provides the exact requested URLs and client-side navigation.
- Create reusable layout, navigation, signal badge, stat card, stock table, storage helper, and formatting utilities.
- Use semantic design tokens in the global stylesheet and existing shadcn controls for buttons, inputs, cards, badges, tables, switches, and selectors.
- Add unique title, description, Open Graph, and Twitter metadata to every page.

## Validation
- Check the complete login/register, dashboard, watchlist, analyze, filtering, stock details, TradingView, settings, theme, and logout flows.
- Verify desktop and mobile layouts, keyboard-accessible controls, no overlapping text, valid external links, and a clean build/runtime console.
- Confirm all 20 stock records render and that every navigation target exists.

## Out of scope
- No backend, ML model, real authentication, live market data, internal charts, portfolio tools, trading, payments, news, crypto, chatbot, or financial-advice features.