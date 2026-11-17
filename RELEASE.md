# Discord Architect v1.0.0

**Server-as-Code Configurator, Modular `discord.js` Bot, and Windows Desktop GUI (`.exe`)**

Design, customize, and deploy a complete Discord server—categories, channels, emojis, roles, verification, 28+ third-party bots, scheduled events, and moderation automations—from a single desktop application.

![Discord Architect UI](docs/screenshot.jpg)

---

## Downloads (Windows x64)

| File | Type | Size | Description |
| :--- | :--- | :--- | :--- |
| `Discord Architect 1.0.0.exe` | Portable `.exe` | ~81 MB | Run directly with zero installation |
| `Discord Architect Setup 1.0.0.exe` | Windows Installer | ~88.2 MB | Standard NSIS installer with Start Menu shortcut |

---

## What's New in v1.0.0

### Category-Wise Server & Channel Editor
- **Grouped Category Cards:** View all server categories, channels, and access gates (`Everyone`, `Verified`, `Staff Only`) organized cleanly by category.
- **Double-Click to Rename + Insert Emojis:** Double-click any category or channel name (or click the edit icon) to rename it inline and insert emojis (`👋`, `✅`, `🎭`, `💬`, `🎮`, `🚀`, `🛡️`, etc.).
- **Add / Remove:** Create new categories, add channels inside any category, or remove channels before deploying.

### Existing Server Conflict Detection
- Automatically inspects your target Discord server before deploying to detect exact or similar existing channels (`welcome`, `roles`, `general`, `chat`, etc.).
- Prompts you with a **Conflict Resolution Dialog** to choose:
  - **Replace Similar Channels (Recommended)**
  - **Keep Existing & Add Only Missing**
  - **Wipe All Channels & Rebuild Fresh**

### 28+ Third-Party Bot Integration Pack
Filterable by category (**Moderation**, **Leveling**, **Music**, **Analytics**, **Utility**, **Games**, **AI & Media**) with search, auto-created `@Bots` role, dedicated channels, and 1-click OAuth2 invite links:
- **Leveling & Economy:** MEE6, Arcane, Tatsu, UnbelievaBoat
- **Moderation & Security:** Carl-bot, Dyno, ProBot, Wick, Sapphire, YAGPDB
- **Music & Voice:** Jockie Music, Chip Music, FredBoat, Green-bot
- **Analytics & Growth:** Statbot, Invite Tracker, DISBOARD
- **Utility & Tickets:** GiveawayBot, Ticket Tool, Simple Poll, PatchBot
- **Fun & Mini-Games:** Dank Memer, Mudae, Karuta, OwO, Counting
- **AI & Media:** Midjourney, MedalBot

### Community Automation & Security
- **Process Verification:** One-Click Verify button, Math Captcha modal, or Rules Acceptance gate.
- **Rich Self-Role Picker:** Interactive `#self-roles` embed with animated/static emoji buttons and color-coded roles.
- **Staff & Admin Privileges:** `/setup`, `/promote`, and `/stats` restricted to Admins/Moderators; Ticket Claim/Close and Report Timeout/Dismiss buttons guarded by `isStaffMember()`.
- **Scam & Third-Party Link Guard:** Native Discord AutoMod rules + real-time phishing domain, unauthorized invite, and mass-mention blocker logging to `#scam-alerts`.
- **Tickets, Downloads, Promos & Events:** Private support tickets, `#downloads` resource list with user submissions, connected video platform promos, scheduled listening ads, `#discussions` forum, live `👥 Members: <count>` entry counter, and automatic **Discord Scheduled Events** creation.

---

## Quick Start (Desktop `.exe`)

1. Download and launch **`Discord Architect 1.0.0.exe`** (or run **`Discord Architect Setup 1.0.0.exe`**).
2. Open the **4. Deploy** tab, paste your **Discord Bot Token** and **Client ID** from the [Discord Developer Portal](https://discord.com/developers/applications) (with **Server Members Intent** and **Message Content Intent** enabled), and click **Connect Bot**.
3. Click **Invite Architect Bot to Server** to add the bot to your Discord server.
4. Pick a preset or customize your categories, channels, roles, and bots, then click **Deploy Blueprint Now**.
