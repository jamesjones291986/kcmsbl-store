# KCMSBL Store — Prototype

A working prototype for a **KCMSBL merchandise store** with league gear and
self-service **team stores** where players order their own gear (ships direct
to their door). Built as a static site so it can be hosted for free and shown
around before we commit to a platform.

**Live demo (once GitHub Pages is enabled):** `https://jamesjones291986.github.io/kcmsbl-store/`
**Intended home:** `store.kcmsbl.com` (linked from the main league site at kcmsbl.com)

---

## What this demo shows

- **League store** (`index.html`) — official KCMSBL gear, championship & All-Star
  seasonal shirts, and a replica trophy option.
- **Team directory** — pick a team, go to its store.
- **Team stores** (`team.html?t=federal-blues`) — each store auto-themes to the
  team's colors and shows only the products that team offers. Jerseys include a
  name/number field.
- **Working cart** — add/remove items, persists across pages, mock checkout.
- **Player login + team routing** (`login.html`) — a player logs in and is sent
  straight to *their* team store, and is warned if they land on a similarly-named
  team in another division (e.g. Federal Blues vs National Blues). In the real
  build this maps to the league's existing roster data.
- **"For Team Managers" section** — the 4-step self-service vision (upload logo →
  pick products → share link → players order).

Try switching between **Federal Blues** and **National Athletics** to see the
same code re-skin per team from a single config in `data.js`. Then log in via
`login.html` (demo emails are listed on that page) to see team routing.

## The core idea

Teams are always ordering jerseys, hats, and gear — and individual players
constantly need to order *after* the bulk team order already happened (new
players, missed windows, lost items). This store stays open year-round so any
player can order their own gear anytime, in their size, shipped to them. The
league maintains the front door; a partner dealer can handle fulfillment.

---

## Files

| File | Purpose |
|------|---------|
| `index.html` | League store landing + team directory + championship gear |
| `team.html` | Team store page (driven by `?t=<team-slug>`) + wrong-team guardrail |
| `login.html` | Player login → routes to their correct team store |
| `data.js` | Product catalog + team configs + player roster (demo) |
| `store.js` | Cart + session logic (localStorage) + product rendering + mock checkout |
| `styles.css` | All styling |
| `TALKING_POINTS.md` | Discussion doc: platform options, partner model, costs, recommendation |

## Run it locally

Just open `index.html` in a browser — no build step, no server needed.

## Deploy free on GitHub Pages

1. Repo is already on GitHub.
2. **Settings → Pages → Source: Deploy from a branch → `main` / `/root`**.
3. Goes live at `https://jamesjones291986.github.io/kcmsbl-store/`.
4. (Later) point `store.kcmsbl.com` at it with a DNS CNAME.

## Status

⚠️ **Prototype only.** The cart, checkout, and login are mocked. This is a
*spec/demo* to align on direction — real payment, fulfillment, and roster-backed
login are not built. See `TALKING_POINTS.md` for the build-vs-partner decision.
