const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <main>
      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Jemarie home">JA<span>.</span></a>
        <div className="navLinks"><a href="#work">Work</a><a href="#services">Services</a><a href="#about">About</a></div>
        <a className="navCta" href="#contact">Let&apos;s talk <Arrow /></a>
      </nav>
      <section className="hero shell" id="top">
        <div className="eyebrow"><i /> Available for remote opportunities</div>
        <h1>Marketing ideas,<br /><em>made real.</em></h1>
        <div className="heroBottom"><p>I&apos;m Jemarie—a digital and email marketer who also uses AI-assisted development to turn business ideas into useful web experiences.</p><a className="roundLink" href="#work" aria-label="See my work">↓</a></div>
      </section>
      <section className="proof shell" aria-label="My focus areas">
        <p>WHAT I BRING</p><div className="proofGrid"><span>Digital<br />marketing</span><span>Email<br />campaigns</span><span>Landing pages<br />& web support</span><span>AI-assisted<br />building</span></div>
      </section>
      <section className="work shell" id="work">
        <div className="sectionHead"><div><small>01 / SELECTED WORK</small><h2>Built from a real<br />business need.</h2></div><p>I&apos;m growing through hands-on projects: defining the problem, shaping the workflow, guiding AI tools, and testing what gets built.</p></div>
        <article className="caseCard">
          <div className="caseVisual">
            <img className="dashboardShot" src="/botikapos-dashboard.png" alt="BotikaPOS pharmacy dashboard showing sales, transactions, customers, profit, stock, expiry alerts, and a seven-day sales graph" />
            <img className="promoShot" src="/botikapos-promo.png" alt="SVN Tech BotikaPOS promotional graphic showing pharmacy checkout, inventory, and analytics features" />
            <div className="analyticsFloat">
              <div className="donut" aria-label="Customer type analytics illustration"><span>3</span></div>
              <div><small>ANALYTICS VIEW</small><strong>Sales by customer type</strong><p>Regular · Senior · PWD</p></div>
            </div>
          </div>
          <div className="caseCopy"><div className="status">COMPLETED PROJECT</div><h3>BotikaPOS</h3><p>A pharmacy-focused point-of-sale concept designed to make everyday sales and inventory workflows simpler.</p><div className="role"><small>MY ROLE</small><p>Requirements · Workflow planning · AI-assisted implementation · Testing & iteration</p></div><div className="honesty"><strong>Built transparently with AI</strong><br />I used Claude Code and Codex as development tools. I directed the build, reviewed the output, tested workflows, and refined the product.</div></div>
        </article>
      </section>
      <section className="roadmap shell">
        <div className="sectionHead compact"><div><small>02 / EXPLORING NEXT</small><h2>Ideas in the<br /><em>workshop.</em></h2></div><p>These are future concepts—not finished products yet. I&apos;m interested in learning how different businesses work, then building tools around their real needs.</p></div>
        <div className="ideaGrid">
          <article className="activeIdea"><span>01</span><div className="laptop" aria-label="Piggery management dashboard mockup"><div className="camera" /><div className="laptopScreen pigScreen"><div className="mockSide"><i /><i /><i /><i /></div><div className="mockMain"><b>Piggery overview</b><div className="mockStats"><i /><i /><i /></div><div className="pigRows"><i /><i /><i /></div></div><div className="buildBadge">BUILDING</div></div><div className="laptopBase" /></div><h3>Piggery Management</h3><p>A practical system for tracking animals, feed, health records, expenses, and farm performance.</p><small>CURRENTLY BEING BUILT</small></article>
          <article className="activeIdea"><span>02</span><div className="laptop" aria-label="Custom CRM dashboard mockup"><div className="camera" /><div className="laptopScreen crmScreen"><div className="mockSide"><i /><i /><i /><i /></div><div className="mockMain"><b>Sales pipeline</b><div className="pipeline"><i /><i /><i /></div><div className="crmChart"><i /><i /><i /><i /><i /></div></div><div className="buildBadge">CUSTOMIZING</div></div><div className="laptopBase" /></div><h3>Custom CRM</h3><p>A customizable customer hub for leads, follow-ups, notes, and a clearer sales pipeline.</p><small>ONGOING CUSTOMIZATION</small></article>
          <article className="openIdea"><span>03</span><div className="ideaIcon">+</div><h3>Your business need</h3><p>I&apos;m open to shaping a focused tool around a clear workflow—with honest scope, feedback, and testing.</p><small>OPEN FOR COLLABORATION</small></article>
        </div>
      </section>
      <section className="services shell" id="services">
        <div className="sectionHead compact"><div><small>03 / HOW I CAN HELP</small><h2>Strategy meets<br />implementation.</h2></div></div>
        <div className="serviceRows">
          <article><b>01</b><h3>Digital marketing support</h3><p>Campaign coordination, content support, research, tracking, and clear performance reporting.</p></article>
          <article><b>02</b><h3>Email marketing</h3><p>Campaign setup, newsletters, audience journeys, automation support, testing, and optimization.</p></article>
          <article><b>03</b><h3>Landing pages & web support</h3><p>Conversion-focused pages, content updates, forms, QA, and practical website improvements.</p></article>
          <article><b>04</b><h3>Custom AI-assisted builds</h3><p>Small business tools and prototypes shaped collaboratively, with transparent methods and realistic scope.</p></article>
        </div>
      </section>
      <section className="about shell" id="about"><div className="aboutMark">J<span>A</span></div><div className="aboutCopy"><small>04 / ABOUT ME</small><h2>Curious enough to learn.<br /><em>Practical enough to ship.</em></h2><p>My foundation is digital and email marketing. Building BotikaPOS showed me that I can go further—using AI tools to explore, prototype, test, and turn an operational idea into something tangible.</p><p>I don&apos;t pretend AI had no part in my process. I see it as a tool I&apos;m learning to direct responsibly while I continue strengthening my technical skills.</p><div className="values"><span><b>Clear</b> communication</span><span><b>Honest</b> capabilities</span><span><b>Curious</b> problem-solving</span></div></div></section>
      <footer id="contact"><div className="shell footerInner"><small>HAVE A PROJECT OR ROLE IN MIND?</small><h2>Let&apos;s make something<br /><em>useful together.</em></h2><div className="contactLinks"><a className="contactButton" href="mailto:socialswithjem@gmail.com">Email me <Arrow /></a><a className="contactButton outline" href="https://wa.me/639926348536" target="_blank" rel="noreferrer">WhatsApp <Arrow /></a></div><div className="directContact"><a href="mailto:socialswithjem@gmail.com">socialswithjem@gmail.com</a><a href="https://wa.me/639926348536" target="_blank" rel="noreferrer">0992 634 8536</a></div><div className="footerBottom"><span>© 2026 Jemarie Adame</span><span>Digital marketing · Email · AI-assisted web</span><a href="#top">Back to top ↑</a></div></div></footer>
    </main>
  );
}
