# Discord Architect

Full-stack **Server-as-Code** configurator, Electron Desktop GUI (`.exe`), and modular `discord.js` bot. Select your community type, looks/design, verification mode, roles, permissions, 28+ third-party bots, and automation modules—then deploy the entire server in one click.

<img src="https://i.imgur.com/u7Dia8W.png" alt="Discord Architect UI">

## Features

- **Category-Wise Server & Channel Editor:** Double-click any category or channel name to rename it inline, insert emojis, or add/remove channels.
- **Conflict Detection:** Inspects existing servers for matching/similar channels (`welcome`, `roles`, `general`, etc.) and lets you replace, keep, or rebuild fresh.
- **28+ Third-Party Bot Pack:** MEE6, Carl-bot, Dyno, ProBot, Wick, Arcane, Jockie Music, Statbot, GiveawayBot, Ticket Tool, Dank Memer, Midjourney, and more—with 1-click OAuth2 invite links and dedicated channels.
- **Process Verification & Security:** Button or Math Captcha verification, locked Staff/Mod channels, Staff-only moderation buttons, `/report` command, and real-time phishing/scam link detection.
- **Community Modules:** Support Tickets, Auto-Reply rules, `#downloads` resource list, connected Video Platform promotions, Listening Ads, Discussion Forum, Auto Scheduled Events, and live Member Entry Counter.
- **Windows Desktop App (`.exe`):** Bundled Electron GUI (`apps/desktop`) with built-in SQLite storage and in-app bot token connection.

## Monorepo Structure

- `packages/shared` — Shared `ServerBlueprint` TypeScript types and 6 community presets.
- `apps/bot` — Modular `discord.js` v14 bot + Express REST API + SQLite (`node:sqlite`).
- `apps/web` — React 19 + Vite + **Astryx Design System** (`@astryxdesign/core`) configurator & live preview.
- `apps/desktop` — Electron Windows Desktop GUI & `.exe` packager (`electron-builder`).

## Quick Start

```bash
npm install
npm run build
```

1. Copy `apps/bot/.env.example` to `apps/bot/.env` and add your `DISCORD_TOKEN` and `DISCORD_CLIENT_ID` (or paste them directly in the **4. Deploy** tab of the Desktop app).
2. Run `npm run dev:desktop` to launch the Desktop GUI, or `npm run build:exe` to generate the Windows `.exe` installer and portable executable in `apps/desktop/release/`.
