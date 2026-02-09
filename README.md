# Mers — AI Agent for E-Commerce

Mers is an autonomous AI agent that connects to your Shopify, Meta Ads, TikTok Ads, Klaviyo, and fulfillment tools — then runs your e-commerce business.

**Live demo:** [aldiyarsemedyarov.github.io/mers](https://aldiyarsemedyarov.github.io/mers)

## What it does

1. **Ingests and reconciles creator knowledge.** The best e-commerce tactics live in YouTube videos and paid communities. Creators contradict each other constantly. Mers extracts specific tactics, scores them by source consensus, and flags contradictions for A/B testing.

2. **Generates executable playbooks.** Not advice — decision trees with kill rules. *"IF CPM > $30 on interest targeting → switch to Advantage+ broad. IF no purchase after $50 spend → kill ad set. IF ROAS > 2.5x for 72h → increase budget 20%."*

3. **Executes across your entire stack.** Pauses bad ads, adjusts budgets, updates product pages, triggers email flows, flags fulfillment problems. Every action logged, reversible, requires approval until you trust it enough to go autonomous.

## The Dashboard

| Feature | Description |
|---------|-------------|
| **Home** | Daily briefing, AI insights, performance snapshot, monthly goals |
| **Tasks** | Kanban board with agent-suggested actions and estimated margin impact |
| **Knowledge Base** | 30+ tactics with consensus scoring and conflict detection |
| **Playbooks** | Interactive decision trees with kill rules and scale triggers |
| **Cash Flow** | Sankey diagram showing where every dollar goes |
| **Analytics** | Revenue, ROAS, conversion funnel, traffic sources |
| **Integrations** | Connect Shopify, Meta, TikTok, Stripe, Klaviyo, and more |
| **Competitors** | Live monitoring of competitor pricing and ad creatives |
| **Product Research** | Trend detection with Mers Score and margin analysis |
| **P&L** | Per-product unit economics breakdown |

## Agent Chat

The floating chat panel supports natural language commands:

- *"Pause all ads with ROAS below 1.5"*
- *"Audit my store"*
- *"Find trending products"*
- *"Compare before and after"*
- *"Set a kill rule for CPP > $25"*

## Tech

Single-file HTML/CSS/JS. No frameworks, no build step, no dependencies. Just open `index.html`.

- **AI:** Claude (reasoning/planning) + GPT (fast tasks) + custom orchestration
- **Integrations:** Shopify, Meta Marketing, TikTok Ads, Stripe, Klaviyo, YouTube Data APIs
- **Knowledge pipeline:** Creator content → tactic extraction → consensus scoring → playbook generation

## About

Built by [Aldiyar Semedyarov](https://linkedin.com/in/semedyarov) — MSc Electrical Engineering, ETH Zurich.

Built this because I run an e-commerce store solo and was drowning in 10+ tools that don't talk to each other. Mers is the autonomous COO for the 4.6M Shopify stores that can't afford one.
