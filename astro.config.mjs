// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
	site: "https://uk-calculator.theweekenddev.com",
	redirects: {
		"/sitemap.xml": "/sitemap-index.xml",
	},
	integrations: [
		mdx(),
		sitemap({
			serialize(item) {
				if (item.url === "https://uk-calculator.theweekenddev.com/") {
					item.changefreq = "daily";
					item.priority = 1.0;
				} else {
					item.changefreq = "weekly";
					item.priority = 0.8;
				}
				item.lastmod = new Date().toISOString();
				return item;
			},
		}),
	],
	adapter: cloudflare({
		platformProxy: {
			enabled: true,
		},
	}),
});
