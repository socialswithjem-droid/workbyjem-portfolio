"use client";

import { Fragment, useEffect, useRef, useState, type ReactNode } from "react";

const Arrow = () => <span aria-hidden="true">↗</span>;
type IconName = "marketing" | "crm" | "web" | "ai" | "email";
function Icon({ name }: { name: IconName }) {
  if (name === "marketing") return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m4 13 10-5v10L4 13Z"/><path d="M14 10h3a3 3 0 0 1 0 6h-3M6 14l1.5 5H11l-2-6"/></svg>;
  if (name === "crm") return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="9" cy="8" r="3"/><path d="M3.5 19c.4-4 2.2-6 5.5-6s5.1 2 5.5 6M16 8h5M18.5 5.5v5"/></svg>;
  if (name === "web") return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="15" rx="2"/><path d="M3 8h18M7 6h.01M10 6h.01"/></svg>;
  if (name === "email") return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"/><circle cx="12" cy="12" r="4"/></svg>;
}
const services = [
  ["01", "Digital marketing", "Campaign support, content coordination, research, tracking, and useful reporting."],
  ["02", "Email campaigns", "Newsletters, customer journeys, automation support, testing, and optimization."],
  ["03", "GHL CRM support", "Contacts, pipelines, forms, calendars, workflows, testing, and customization."],
  ["04", "Websites & landing pages", "WordPress, Elementor, responsive pages, forms, content updates, and website QA."],
  ["05", "AI-assisted building", "Practical prototypes and digital tools—with transparent methods and realistic scope."],
];
const marqueeItems = ["MARKETING", "EMAIL", "CRM SYSTEMS", "WEB SUPPORT", "WORDPRESS", "AI-ASSISTED"];
const toolGroups = [
  ["MARKETING", "Campaigns, content, and customer communication", ["Digital campaigns", "Email marketing", "Content support", "Research", "Analytics"]],
  ["CRM + WEB", "Connected journeys and useful web experiences", ["GoHighLevel", "WordPress", "Elementor", "Landing pages", "Website QA"]],
  ["AI + DELIVERY", "Tools I direct to prototype, test, and ship", ["Claude Code", "Codex", "ChatGPT", "GitHub", "Cloudflare", "Vercel"]],
];

function Laptop({ children, label, href }: { children: ReactNode; label: string; href?: string }) {
  const content = <div className="laptop" aria-label={label}><div className="laptopScreen">{children}</div><img src="/laptop-frame-mocha-v1.png" alt="" aria-hidden="true" /></div>;
  return href ? <a className="laptopLink" href={href} target="_blank" rel="noreferrer" aria-label={`${label} — open live website`}>{content}</a> : content;
}
function LiveSite({ src, title }: { src: string; title: string }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  useEffect(() => {
    const iframe = iframeRef.current;
    const screen = iframe?.parentElement;
    if (!iframe || !screen) return;
    const fitDesktopSite = () => {
      const scale = Math.min(screen.clientWidth / 1440, screen.clientHeight / 900);
      iframe.style.transform = `scale(${scale})`;
    };
    fitDesktopSite();
    const frame = requestAnimationFrame(fitDesktopSite);
    const observer = new ResizeObserver(fitDesktopSite);
    observer.observe(screen);
    window.addEventListener("resize", fitDesktopSite);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("resize", fitDesktopSite);
    };
  }, []);
  return <iframe ref={iframeRef} className="desktopSite" src={src} title={title} loading="lazy" scrolling="yes" />;
}

export default function Home() {
  const [openTool, setOpenTool] = useState("MARKETING");
  return (
    <main id="top">
      <header className="topbar"><a className="wordmark" href="#top" aria-label="Jemarie Adame home">JEMARIE<span>.</span></a><nav aria-label="Main navigation"><a href="#about">About</a><a href="#work">Work</a><a href="#skills">Skills</a><a href="#contact">Contact</a></nav><a className="talk" href="#contact">Let&apos;s talk <Arrow /></a></header>

      <section className="cinemaHero" aria-labelledby="hero-title">
        <div className="filmGrain" aria-hidden="true" /><div className="heroGlow" aria-hidden="true" />
        <div className="heroContent">
          <div className="heroCopy"><p className="kicker"><span /> DIGITAL MARKETING · CRM · WEB SUPPORT</p><h1 id="hero-title"><span>I TURN</span><strong>IDEAS</strong><em>INTO IMPACT.</em></h1><p className="heroText">Digital and email marketing shaped into clear campaigns, useful websites, organized CRM workflows, and practical AI-assisted experiences.</p><div className="heroActions"><a className="primaryBtn" href="#work">Explore my work <Arrow /></a><a className="ghostBtn" href="#about">Meet Jemarie</a></div></div>
          <div className="heroEditorial" aria-label="Jemarie's digital marketing and web services"><div className="editorialOrb" aria-hidden="true" /><div className="orbit orbitOne" aria-hidden="true" /><div className="orbit orbitTwo" aria-hidden="true" /><div className="orbitalWords" aria-hidden="true"><b className="orbitLabel orbitLabelDigital">DIGITAL</b><b className="orbitLabel orbitLabelEmail">EMAIL</b><b className="orbitLabel orbitLabelWeb">WEB</b></div><p>Clear ideas.<br />Useful systems.<br />Thoughtful execution.</p></div>
        </div>
        <div className="heroFooter"><span>BASED IN THE PHILIPPINES · AVAILABLE REMOTELY</span><a href="#about">SCROLL TO DISCOVER ↓</a></div>
      </section>
      <div className="cinemaMarquee" aria-label="Areas of work"><div>{Array.from({ length: 4 }, (_, set) => marqueeItems.map((item) => <Fragment key={`${set}-${item}`}><span>{item}</span><i aria-hidden="true" /></Fragment>))}</div></div>

      <section className="aboutSection reveal" id="about">
        <div className="sectionLabel"><span>01</span> / ABOUT ME</div>
          <div className="aboutGrid"><div className="aboutCopy"><h2>STRATEGY<br /><em>MEETS</em><br />EXECUTION.</h2><p className="lead">I&apos;m Jemarie—a digital and email marketer who uses WordPress, CRM tools, and AI-assisted development to turn business ideas into useful digital experiences.</p><p>My strength is connecting the message, the workflow, and the customer experience. I&apos;m transparent about the tools I use, careful about what I claim, and committed to learning through real projects.</p></div><div className="aboutCard"><div className="cardLight" aria-hidden="true" /><img src="/jemarie-portfolio-portrait-transparent-v5.png" alt="Jemarie Adame, digital and email marketer" /><div className="aboutCardMeta"><span>OPEN TO REMOTE OPPORTUNITIES</span></div></div></div>
        <div className="capabilityStrip"><article><b><Icon name="marketing" /></b><div><strong>MARKETING</strong><span>Strategy, content, and campaigns</span></div></article><article><b><Icon name="crm" /></b><div><strong>CRM</strong><span>Organized customer journeys</span></div></article><article><b><Icon name="web" /></b><div><strong>WEB</strong><span>Useful visitor experiences</span></div></article><article><b><Icon name="ai" /></b><div><strong>AI-ASSISTED</strong><span>Directed with transparency</span></div></article></div>
      </section>

      <section className="workSection" id="work">
        <div className="workIntro reveal"><div className="sectionLabel"><span>02</span> / SELECTED WORK</div><h2>WORK THAT<br /><em>SOLVES REAL NEEDS.</em></h2><p>Original builds and client contributions—each shared with clear credit, practical decisions, and the result I helped deliver.</p></div>
        <div className="projectStack">
          <article className="projectCard botikaCard"><div className="projectCopy"><small>01 · ORIGINAL PROJECT</small><h3>BOTIKA<span className="inlineAccent">POS</span></h3><p>A pharmacy-focused point-of-sale and inventory concept shaped around day-to-day operational needs.</p><ul><li>Workflow planning</li><li>AI-assisted implementation</li><li>Testing and iteration</li></ul><a href="https://medipos-eight.vercel.app" target="_blank" rel="noreferrer">View live system <Arrow /></a><div className="honestyNote"><b>Built transparently with AI.</b> Claude Code and Codex supported implementation; I directed, reviewed, tested, and refined the result.</div></div><div className="projectMedia compactMedia"><span className="frameLabel">CLICK THE LAPTOP TO VIEW LIVE</span><a className="botikaLaptop" href="https://medipos-eight.vercel.app" target="_blank" rel="noreferrer"><img src="/botikapos-laptop-transparent-v3.png" alt="BotikaPOS dashboard in a clickable laptop mockup" /></a></div></article>

          <article className="projectCard propCard"><div className="projectCopy"><small>02 · CLIENT WEBSITE CONTRIBUTION</small><h3>PROPSEARCH</h3><p>Enhancement support for an existing WordPress and Elementor website, focused on practical visitor-facing improvements.</p><ul><li>Header and footer updates</li><li>Image and content changes</li><li>Links, alignment, and presentation QA</li></ul><a href="https://propsearch.com.au/" target="_blank" rel="noreferrer">Visit client website <Arrow /></a><div className="honestyNote"><b>Clear project credit.</b> The original design and build belong to others. My contribution focused on updates and refinement.</div></div><div className="projectMedia liveMedia"><span className="frameLabel">SCROLL INSIDE THE SCREEN</span><Laptop label="Scrollable PropSearch client website"><LiveSite src="https://propsearch.com.au/" title="Scrollable preview of the PropSearch website" /></Laptop></div></article>

          <article className="projectCard altaCard"><div className="projectCopy"><small>03 · CONCEPT WEBSITE BUILD</small><h3>ALTAVENTO<br /><span className="inlineAccent">TEMPESTA</span></h3><p>A cinematic, scroll-led campaign website for a fictional twenty-car series—built as a polished creative web concept.</p><ul><li>Immersive page structure</li><li>Responsive experience</li><li>Visual and interaction refinement</li></ul><a href="https://altavento-tempesta.pages.dev" target="_blank" rel="noreferrer">Visit live website <Arrow /></a><div className="honestyNote"><b>Original concept work.</b> Designed and built as a portfolio project using an AI-assisted process, with creative direction, review, and testing by Jemarie.</div></div><div className="projectMedia liveMedia altaLive"><span className="frameLabel">SCROLL INSIDE THE SCREEN</span><Laptop label="Scrollable Altavento Tempesta website"><LiveSite src="https://altavento-tempesta.pages.dev" title="Scrollable preview of Altavento Tempesta" /></Laptop></div></article>

          <article className="projectCard pigCard"><div className="projectCopy"><small>04 · CURRENTLY BUILDING</small><h3>PIGGERY<br /><span className="inlineAccent">SYSTEM</span></h3><p>A piggery management concept for bringing animal records, feed, health, expenses, and farm performance into one focused workflow.</p><ul><li>Workflow discovery</li><li>System planning</li><li>Prototype in progress</li></ul><a href="mailto:socialswithjem@gmail.com?subject=Piggery%20workflow%20idea">Discuss a workflow idea <Arrow /></a><div className="honestyNote"><b>In progress.</b> This is an active concept—not a finished client system. The screen is an early interface direction.</div></div><div className="projectMedia liveMedia pigMedia"><span className="frameLabel">EARLY DASHBOARD DIRECTION</span><Laptop label="Piggery management system prototype"><div className="piggeryScreen"><header><b>Piggery System</b><span>Overview</span></header><div className="pigMetrics"><i><small>Active animals</small><strong>128</strong></i><i><small>Feed status</small><strong>82%</strong></i><i><small>Health tasks</small><strong>06</strong></i></div><div className="pigChart"><b>Weekly activity</b><div><i/><i/><i/><i/><i/><i/><i/></div></div></div></Laptop></div></article>
        </div>
      </section>

      <section className="skillsSection reveal" id="skills">
        <div className="sectionLabel"><span>03</span> / CAPABILITIES</div><div className="skillsHead"><h2>TOOLS FOR<br /><em>SMARTER WORK.</em></h2><p>Marketing, CRM, WordPress, and AI-assisted tools—chosen to support the workflow and get useful work done.</p></div>
        <div className="toolAccordion"><div className="toolTabs" role="tablist" aria-label="Capability groups">{toolGroups.map(([title]) => <button key={title as string} className={openTool === title ? "active" : ""} onClick={() => setOpenTool(title as string)} aria-expanded={openTool === title}><span>{title}</span><b>{openTool === title ? "−" : "+"}</b></button>)}</div>{toolGroups.map(([title, description, items]) => openTool === title && <article className="toolPanel" key={title as string}><div><small>{title}</small><h3>{description}</h3></div><div>{(items as string[]).map((item, i) => <span key={item}><b>{String(i + 1).padStart(2, "0")}</b>{item}</span>)}</div></article>)}</div>
        <div className="serviceList">{services.map(([n, title, copy], index) => <article key={n}><b>{n}</b><div className="serviceIcon">{<Icon name={(["marketing", "email", "crm", "web", "ai"] as IconName[])[index]} />}</div><h3>{title}</h3><p>{copy}</p></article>)}</div>
      </section>

      <section className="processSection reveal"><div className="sectionLabel"><span>04</span> / HOW I WORK</div><div className="processHead"><h2>CLEAR PROCESS.<br /><em>USEFUL OUTCOMES.</em></h2><p>Four focused steps keep the goal visible—from understanding the need to testing the final experience.</p></div><div className="processRail"><article><span>01</span><h3>Understand</h3><p>Clarify the goal, audience, workflow, and current problem.</p></article><article><span>02</span><h3>Shape</h3><p>Turn ideas into a focused plan with realistic scope.</p></article><article><span>03</span><h3>Build</h3><p>Use the right marketing, CRM, web, and AI tools.</p></article><article><span>04</span><h3>Test</h3><p>Review the experience, refine details, and communicate clearly.</p></article></div></section>

      <footer id="contact"><div className="contactGlow" aria-hidden="true" /><div className="contactLines" aria-hidden="true" /><div className="sectionLabel"><span>05</span> / LET&apos;S CONNECT</div><h2>HAVE A ROLE<br />OR <em>IDEA?</em></h2><p>Let&apos;s turn it into something clear, useful, and ready to move forward.</p><div className="contactActions"><a href="mailto:socialswithjem@gmail.com">Email Jemarie <Arrow /></a><a href="https://wa.me/639926348536" target="_blank" rel="noreferrer">WhatsApp <Arrow /></a></div><div className="footerLine"><span>© 2026 JEMARIE ADAME</span><span>DIGITAL MARKETING · EMAIL · CRM · WEB</span><a href="#top">BACK TO TOP ↑</a></div></footer>
    </main>
  );
}
