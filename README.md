# Signal Scout AI

Create a simple, clean and professional frontend for my MSc Computer Science project.

Project Title:
AI-Based Stock Buy/Hold/Sell Signal Prediction System Using Machine Learning

The frontend should be basic and easy to understand. This is a college academic project, NOT a complex professional trading platform.

Use:

React

Vite

TypeScript

Tailwind CSS

shadcn/ui

Lucide icons

Use dummy/mock stock data for now. Do not build the ML model or backend yet.

DESIGN

Use a simple modern financial dashboard.

Colors:

White/light background

Dark text

Green for BUY

Orange/yellow for HOLD

Red for SELL

Blue as the primary UI color

Keep:

Simple cards

Clean tables

Rounded corners

Minimal animations

Good spacing

Responsive design

Do NOT add unnecessary features.

PAGE 1 — LANDING PAGE

Create a simple landing page.

Navbar:

StockSignal AI logo

Home

About

Login

Register

Hero section:

AI-Based Stock Buy/Hold/Sell Signal Prediction

Subtitle:

"Analyze stock market data and generate machine-learning based BUY, HOLD and SELL signals."

Buttons:

Get Started

Login

Below the hero, show a simple 3-step section:

Select Stock

Analyze Market Data

Get BUY / HOLD / SELL Signal

Add a small footer with:

"StockSignal AI — Academic Project"

and:

"Disclaimer: This application is developed for educational and research purposes only and does not provide financial advice."

PAGE 2 — LOGIN / REGISTER

Create a simple authentication page.

Login:

Email

Password

Login button

Link to Register

Register:

Full Name

Email

Password

Confirm Password

Register button

Link to Login

No complicated authentication functionality is required yet. Use mock authentication.

PAGE 3 — DASHBOARD

After login, show the main dashboard.

Use a simple top navbar/sidebar.

Navigation:

Dashboard

Watchlist

Analyze Stock

Top 20 Signals

Settings

Logout

Dashboard content:

Heading:
"Dashboard"

Subtitle:
"Stock market signals at a glance"

Show 3 simple cards:

Total Stocks
20

BUY Signals
8

HOLD Signals
7

SELL Signals
5

Then show a section:

Recent Signals

A simple table:

StockCurrent PriceSignalConfidenceRELIANCE₹2,845BUY84%TCS₹3,890HOLD72%INFY₹1,510BUY79%HDFCBANK₹1,742SELL81%

Make BUY green, HOLD orange, and SELL red.

Clicking a stock should open its Stock Details page.

PAGE 4 — WATCHLIST

Create a simple Watchlist page.

Heading:
"My Watchlist"

Button:
"+ Add Stock"

Show a table:

StockPriceChangeSignalActionRELIANCE₹2,845+1.42%BUYViewTCS₹3,890-0.32%HOLDViewINFY₹1,510+0.81%BUYViewHDFCBANK₹1,742-1.12%SELLView

Allow the user to remove stocks from the watchlist.

Use local mock state for now.

PAGE 5 — ANALYZE STOCK

Create an "Analyze Stock" page.

At the top:

Analyze Stock

Search box:

"Search stock name or symbol"

Example:

[ RELIANCE ]

Button:

[ Analyze ]

Below it, show the selected stock:

RELIANCE INDUSTRIES
NSE: RELIANCE

Current Price:
₹2,845.30

Change:
+1.42%

Then show the ML prediction prominently:

AI Signal

🟢 BUY

Confidence:
84%

Model:
Random Forest

Below this show a simple section:

Technical Indicators

Cards:

RSI
62.4

MACD
+12.3

SMA 50
₹2,780

EMA 20
₹2,810

Volume
2.4M

Do not make this page overly complicated.

PAGE 6 — TOP 20 SIGNALS

Create a page called:

Top 20 Stock Signals

This page displays the top 20 stocks based on their ML-generated BUY/HOLD/SELL signal.

At the top provide three filter buttons:

[ ALL ] [ BUY ] [ HOLD ] [ SELL ]

When BUY is selected, show only BUY stocks.

When HOLD is selected, show only HOLD stocks.

When SELL is selected, show only SELL stocks.

Display a simple table:

Rank | Stock | Current Price | Change | Signal | Confidence | View

Example stocks:

RELIANCE

TCS

INFY

HDFCBANK

ICICIBANK

SBIN

ITC

LT

AXISBANK

BHARTIARTL

MARUTI

SUNPHARMA

HCLTECH

KOTAKBANK

WIPRO

TITAN

ASIANPAINT

ADANIENT

BAJFINANCE

TATASTEEL

Use dummy values.

Signal colors:

BUY = green

HOLD = orange

SELL = red

The View button should open that stock's Stock Details page.

PAGE 7 — STOCK DETAILS

Create a dedicated page for each stock.

Example:

RELIANCE INDUSTRIES

NSE: RELIANCE

Current Price:
₹2,845.30

Change:
+1.42%

Then show:

Technical Indicators

IndicatorValueStatusRSI62.4BullishMACD+12.3BullishSMA 50₹2,780Price AboveEMA 20₹2,810Price AboveVolume2.4MNormal

Then show:

AI Prediction

BUY

Confidence:
84%

Model:
Random Forest

Add a button:

View Price Chart ↗

This button should open an external TradingView stock chart in a new browser tab.

For example, for RELIANCE use the appropriate TradingView symbol URL.

Create the TradingView link dynamically based on the selected stock.

IMPORTANT:
Do not create an internal price chart. The price chart will be viewed externally on TradingView.

Also add:

Add to Watchlist

button.

PAGE 8 — SETTINGS

Keep the Settings page very basic.

Profile

Name
Email

Preferences

Default Market:
NSE

Theme:
Light / Dark

Notifications:
On / Off

Account

Change Password

Logout

NAVIGATION

Use React Router.

Routes:

/
Landing Page

/login
Login

/register
Register

/dashboard
Dashboard

/watchlist
Watchlist

/analyze
Analyze Stock

/top-signals
Top 20 Signals

/stock/:symbol
Stock Details

/settings
Settings

MOCK DATA

Create one centralized mock data file.

Each stock should contain:

symbol

companyName

currentPrice

changePercent

signal

confidence

rsi

macd

sma50

ema20

volume

tradingViewUrl

Example:

{
symbol: "RELIANCE",
companyName: "Reliance Industries",
currentPrice: 2845.30,
changePercent: 1.42,
signal: "BUY",
confidence: 84,
rsi: 62.4,
macd: 12.3,
sma50: 2780,
ema20: 2810,
volume: "2.4M"
}

Use TypeScript types for the stock data.

IMPORTANT

Keep the entire frontend BASIC.

Do NOT add:

Portfolio management

Real-time trading

Payment system

Complex charts

News feed

Crypto section

Financial advisor

Chatbot

Complicated analytics

Unnecessary animations

The main purpose of the application is:

Stock → Technical Indicators → Machine Learning Prediction → BUY / HOLD / SELL

The UI should be clean, simple, academic and easy to demonstrate during an MSc project presentation.

Make sure all navigation buttons and links work correctly.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/d968a468-c0be-49e3-aead-e8943dfe59ce).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
