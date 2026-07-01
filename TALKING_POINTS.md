# KCMSBL Store — Talking Points

A discussion doc for deciding **how** to build the KCMSBL store. Read alongside
the live prototype demo.

---

## 1. The vision

A merch store linked from **kcmsbl.com** with two layers:

- **League store** — official KCMSBL gear, championship shirts, All-Star Game
  shirts, optional replica trophies.
- **Team stores** — each team gets its own page (e.g. `/store/federal-blues`).
  Team managers set up their gear once; players then order their own items
  (size, name/number) and it ships directly to them.

**The key problem it solves:** players constantly need to order gear *after* the
team's bulk order — new players, missed the window, lost a jersey. A store that
never closes fixes that. The league just maintains the site; it does not handle
inventory or shipping.

---

## 2. Open questions to decide together

1. **Build vs. buy** — use an existing platform (fast, less control) or build our
   own (full control, more work + ongoing maintenance)?
2. **Profit or at-cost?** — do we add a markup (league fundraising) or pass gear
   through at cost as a member perk? (We can start at-cost and turn on markup later.)
3. **Who designs team gear?** — do managers get a blank canvas (risky: quality +
   copyright), or a **curated catalog** they drop their logo into (recommended)?
4. **Trophies/plaques** — worth offering? They're hard goods and need a separate
   supplier from apparel.
5. **URL** — is `store.kcmsbl.com` important, or is linking out to a platform fine?

---

## 3. Platform options (researched)

### Option A — SquadLocker (recommended for speed)
- **Built for leagues.** Free team stores that "never close," managers self-serve,
  ships direct to players, returns handled even on custom items (~2 week turnaround).
- Org can add a **markup for fundraising** (flip on anytime).
- **Downside:** lives on `squadlocker.com` (we link from kcmsbl.com), less brand control.
- **Effort:** low. Mostly setup, no code, no fulfillment on us.

### Option B — Shopify + Printful (middle ground)
- Lives at **store.kcmsbl.com**, full brand control. ~$39/mo + per-item costs.
- Print-on-demand auto-fulfills apparel.
- **Downsides:** *we* set up each team's products (not true self-serve), and
  Printful **can't do trophies/plaques** (separate supplier needed).
- **Effort:** medium. A weekend to stand up; ongoing team onboarding is on us.

### Option C — Custom build (this prototype)
- Full control, exactly the self-serve flow we want, at store.kcmsbl.com.
- **Downside:** the hard 90% (payments, real fulfillment, manager accounts,
  order management) still has to be built and maintained. This demo is the easy 10%.
- **Effort:** high (weeks of dev + ongoing maintenance).

### Not a fit — OrderMyGear
- It's B2B software for the *promo companies/decorators* who sell merch, not a
  tool a league uses directly. We'd have to go through a print shop that uses it.

---

## 4. Recommendation

**Start with SquadLocker**, linked from kcmsbl.com.

- It already solved the hard part (self-serve stores + direct-to-player fulfillment).
- Zero inventory/shipping burden on us.
- We can turn on a fundraising markup later if we decide to profit.
- We keep this prototype as the **spec** if we ever decide to go custom for full
  brand ownership at store.kcmsbl.com.

**Trophies:** handle separately via an awards/trophy supplier — offer them as a
seasonal add-on, not core to the apparel store.

---

## 5. Suggested next steps

1. Show partner this prototype + doc.
2. Decide: build-vs-buy, and profit-vs-at-cost.
3. If SquadLocker: create a league account, set up one pilot team (e.g. Federal
   Blues) and the league store, test the full order flow.
4. Add a "Store" link in the HTO Sports nav on kcmsbl.com.
5. Roll out to remaining teams once the pilot works.

---

## 6. Rough cost sketch (to validate)

| Path | Upfront | Ongoing | Fulfillment |
|------|---------|---------|-------------|
| SquadLocker | ~$0 | markup-based / free | Handled by them |
| Shopify + Printful | low | ~$39/mo + item cost | Auto (apparel only) |
| Custom build | dev time | hosting + maintenance | We integrate/manage |

*Numbers to confirm during pilot — platforms change terms.*
