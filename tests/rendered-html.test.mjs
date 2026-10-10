import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const projectFile = (path) => new URL(`../${path}`, import.meta.url);

test("portfolio includes its key identity and credited projects", async () => {
  const page = await readFile(projectFile("app/page.tsx"), "utf8");

  assert.match(page, /Jemarie/);
  assert.match(page, /BotikaPOS/);
  assert.match(page, /https:\/\/medipos-eight\.vercel\.app/);
  assert.match(page, /PROPSEARCH/);
  assert.match(page, /https:\/\/propsearch\.com\.au\//);
  assert.match(page, /original design and build belong to others/i);
  assert.match(page, /Built transparently with AI/);
  assert.match(page, /SEO & AI search foundations/);
  assert.match(page, /SEO \+ AI SEARCH/);
});

test("portfolio is configured for Cloudflare Workers", async () => {
  const [wrangler, packageJson, viteConfig] = await Promise.all([
    readFile(projectFile("wrangler.jsonc"), "utf8"),
    readFile(projectFile("package.json"), "utf8"),
    readFile(projectFile("vite.config.ts"), "utf8"),
  ]);

  assert.match(wrangler, /"name": "worksbyjem"/);
  assert.match(wrangler, /"nodejs_compat"/);
  assert.match(packageJson, /"build:vinext"/);
  assert.match(packageJson, /"deploy:vinext"/);
  assert.match(viteConfig, /@cloudflare\/vite-plugin/);
  assert.match(viteConfig, /@vinext\/cloudflare/);
});

test("portfolio publishes crawl instructions and a sitemap", async () => {
  const [robots, sitemap] = await Promise.all([
    readFile(projectFile("public/robots.txt"), "utf8"),
    readFile(projectFile("public/sitemap.xml"), "utf8"),
  ]);

  assert.match(robots, /User-agent: \*/);
  assert.match(robots, /Allow: \//);
  assert.match(robots, /Sitemap: https:\/\/socialswithjem\.site\/sitemap\.xml/);
  assert.match(sitemap, /<loc>https:\/\/socialswithjem\.site\/<\/loc>/);
});

test("portfolio declares one canonical domain without a host redirect loop", async () => {
  const [layout, worker] = await Promise.all([
    readFile(projectFile("app/layout.tsx"), "utf8"),
    readFile(projectFile("worker/index.ts"), "utf8"),
  ]);

  assert.match(layout, /metadataBase: new URL\(siteUrl\)/);
  assert.match(layout, /canonical: "\/"/);
  assert.match(layout, /"@type": "Person"/);
  assert.match(layout, /"@type": "WebSite"/);
  assert.match(layout, /Search engine optimization/);
  assert.match(layout, /Answer engine optimization/);
  assert.doesNotMatch(worker, /url\.hostname === "www\.socialswithjem\.site"/);
  assert.doesNotMatch(worker, /Response\.redirect\(url\.toString\(\), 301\)/);
});
