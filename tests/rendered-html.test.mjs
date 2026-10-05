import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const projectFile = (path) => new URL(`../${path}`, import.meta.url);

test("portfolio includes its key identity and credited projects", async () => {
  const page = await readFile(projectFile("app/page.tsx"), "utf8");

  assert.match(page, /Jemarie/);
  assert.match(page, /BotikaPOS/);
  assert.match(page, /https:\/\/medipos-eight\.vercel\.app/);
  assert.match(page, /Prop Search/);
  assert.match(page, /https:\/\/propsearch\.com\.au\//);
  assert.match(page, /original website design and build were created by others/i);
  assert.match(page, /Built transparently with AI/);
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
