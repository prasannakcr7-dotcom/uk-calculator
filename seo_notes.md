# SEO Agent Configuration & Access Notes

## 🌐 Web Review Dashboard
- **Dashboard URL**: https://seo-agent.prasannakcr7.workers.dev
- **Access Token**: `e4b7891cf23056a908d172e345b6c890123456789abcdef0123456789abcdef`

---

## 🤖 MCP Connection Command
```bash
claude mcp add --transport http seo-agent https://seo-agent.prasannakcr7.workers.dev/mcp --header "Authorization: Bearer e4b7891cf23056a908d172e345b6c890123456789abcdef0123456789abcdef"
```

---

## 🛠 Deployed Infrastructure Summary
- **Target Site**: `https://uk-calculator.theweekenddev.com`
- **SEO Agent Worker**: `https://seo-agent.prasannakcr7.workers.dev`
- **SEO Injector Worker**: `https://seo-injector.prasannakcr7.workers.dev`
- **D1 Database ID**: `94ec315b-7258-465e-a669-44808a6648b3` (`seo-agent-db`)
- **KV Namespace ID**: `6c1c46cdac224dcf9c0198485ac61db6` (`SEO_OVERRIDES`)
- **Draft Queue**: `seo-agent-drafts`
