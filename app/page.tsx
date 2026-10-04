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
        <div className="heroScene" aria-hidden="true"><i /><i /><i /><b /><b /><span>✦</span><span>✦</span></div>
        <div className="eyebrow"><i /> Available for remote opportunities</div>
        <h1>Marketing ideas,<br /><em>made real.</em></h1>
        <div className="heroBottom"><div className="heroIntro"><span>DIGITAL + TECHNICAL</span><p>I&apos;m Jemarie—a digital and email marketer who uses <strong>AI-assisted development</strong> to turn business ideas into useful web experiences.</p><div className="introMeta"><i /> Strategy to working experience</div></div><a className="roundLink" href="#work" aria-label="See my work">↓</a></div>
      </section>
      <div className="marquee" aria-label="Services: Digital marketing, email marketing, GoHighLevel CRM support, WordPress websites, landing pages, AI-assisted web building, custom business systems, and website support">
        <div className="marqueeTrack">
          <span>DIGITAL MARKETING <b>✦</b> EMAIL MARKETING <b>✦</b> GHL CRM SUPPORT <b>✦</b> WORDPRESS WEBSITES <b>✦</b> LANDING PAGES <b>✦</b> AI-ASSISTED WEB BUILDING <b>✦</b> CUSTOM BUSINESS SYSTEMS <b>✦</b> WEBSITE SUPPORT <b>✦</b></span>
          <span aria-hidden="true">DIGITAL MARKETING <b>✦</b> EMAIL MARKETING <b>✦</b> GHL CRM SUPPORT <b>✦</b> WORDPRESS WEBSITES <b>✦</b> LANDING PAGES <b>✦</b> AI-ASSISTED WEB BUILDING <b>✦</b> CUSTOM BUSINESS SYSTEMS <b>✦</b> WEBSITE SUPPORT <b>✦</b></span>
        </div>
      </div>
      <section className="proof shell" aria-label="My focus areas">
        <div className="proofTitle"><p>WHAT I BRING</p><span>Five connected capabilities, one practical workflow.</span></div><div className="proofGrid"><article><small>01</small><b>Digital marketing</b><p>Campaign support, content, research, and performance tracking.</p></article><article><small>02</small><b>Email campaigns</b><p>Newsletters, customer journeys, automation, testing, and reporting.</p></article><article><small>03</small><b>Websites & landing pages</b><p>WordPress, conversion-focused pages, forms, content updates, QA, and web support.</p></article><article><small>04</small><b>AI-assisted building</b><p>Transparent prototyping and practical tools shaped around real needs.</p></article><article><small>05</small><b>GHL CRM support</b><p>Contacts, pipelines, forms, calendars, workflows, testing, and customization.</p></article></div>
      </section>
      <section className="work shell" id="work">
        <div className="sectionHead"><div><small>01 / SELECTED WORK</small><h2>Built around real<br />business needs.</h2></div><p>A mix of original projects and clearly credited client contributions—showing what I built, what I improved, and where I supported an existing website.</p></div>
        <article className="caseCard">
          <div className="caseVisual">
            <img className="dashboardShot" src="/botikapos-macbook-dashboard-v2.png" alt="BotikaPOS pharmacy dashboard displayed in a MacBook mockup, showing sales, transactions, customers, profit, inventory status, and analytics" />
            <img className="promoShot" src="/botikapos-promo.png" alt="SVN Tech BotikaPOS promotional graphic showing pharmacy checkout, inventory, and analytics features" />
            <div className="analyticsFloat">
              <div className="donut" aria-label="Customer type analytics illustration"><span>3</span></div>
              <div><small>ANALYTICS VIEW</small><strong>Sales by customer type</strong><p>Regular · Senior · PWD</p></div>
            </div>
          </div>
          <div className="caseCopy"><div className="status">COMPLETED PROJECT</div><h3>BotikaPOS</h3><p>A pharmacy-focused point-of-sale concept designed to make everyday sales and inventory workflows simpler.</p><div className="role"><small>MY ROLE</small><p>Requirements · Workflow planning · AI-assisted implementation · Testing & iteration</p></div><div className="honesty"><strong>Built transparently with AI</strong><br />I used Claude Code and Codex as development tools. I directed the build, reviewed the output, tested workflows, and refined the product.</div></div>
        </article>
        <article className="contributionCard">
          <div className="contributionIndex"><span>02</span><small>CLIENT WEBSITE CONTRIBUTION</small></div>
          <div className="contributionMain"><div className="statusLine"><i /> WEBSITE ENHANCEMENT SUPPORT</div><h3>Prop Search</h3><p>I supported an existing WordPress/Elementor website by polishing selected areas and improving practical details for visitors.</p><div className="contributionTags"><span>Header updates</span><span>Footer updates</span><span>Image changes</span><span>Contact links</span><span>Layout polishing</span></div><a className="visitSite" href="https://propsearch.com.au/" target="_blank" rel="noreferrer" aria-label="Visit the Prop Search website in a new tab">Visit the Prop Search website</a></div>
          <aside><strong>My contribution</strong><p>Website editing, content and image updates, footer/contact improvements, link setup, alignment fixes, and final presentation checks.</p><div className="creditNote"><b>Clear credit</b><br />The original website design and build were created by others. My role was focused on updates and refinement—not claiming the full project as my own.</div></aside>
          <div className="contributionGallery">
            <figure><img src="/propsearch-homepage.png" alt="Prop Search homepage showing the navigation, hero section, and property search messaging" /><figcaption><span>Homepage view</span><small>Navigation, imagery, and presentation refinement</small></figcaption></figure>
            <figure><img src="/propsearch-footer.png" alt="Prop Search website footer showing useful links, contact details, and social media links" /><figcaption><span>Footer and contact area</span><small>Contact links, alignment, and content updates</small></figcaption></figure>
          </div>
        </article>
      </section>
      <section className="roadmap shell">
        <div className="sectionHead compact"><div><small>02 / EXPLORING NEXT</small><h2>Ideas in the<br /><em>workshop.</em></h2></div><p>These are future concepts—not finished products yet. I&apos;m interested in learning how different businesses work, then building tools around their real needs.</p></div>
        <div className="ideaGrid">
          <article className="activeIdea"><span>01</span><div className="laptop" aria-label="Piggery management dashboard mockup"><div className="camera" /><div className="laptopScreen pigScreen"><div className="mockSide"><i /><i /><i /><i /></div><div className="mockMain"><b>Piggery overview</b><div className="mockStats"><i /><i /><i /></div><div className="pigRows"><i /><i /><i /></div></div><div className="buildBadge">BUILDING</div></div><div className="laptopBase" /></div><h3>Piggery Management</h3><p>A practical system for tracking animals, feed, health records, expenses, and farm performance.</p><small>CURRENTLY BEING BUILT</small></article>
          <article className="activeIdea"><span>02</span><div className="laptop" aria-label="Custom CRM dashboard mockup"><div className="camera" /><div className="laptopScreen crmScreen"><div className="mockSide"><i /><i /><i /><i /></div><div className="mockMain"><b>Sales pipeline</b><div className="pipeline"><i /><i /><i /></div><div className="crmChart"><i /><i /><i /><i /><i /></div></div><div className="buildBadge">CUSTOMIZING</div></div><div className="laptopBase" /></div><h3>Custom CRM</h3><p>A customizable customer hub for leads, follow-ups, notes, and a clearer sales pipeline.</p><small>ONGOING CUSTOMIZATION</small></article>
          <article className="openIdea customIdea"><span>03</span><div className="laptop customLaptop" aria-label="Custom business system dashboard mockup"><div className="camera" /><div className="laptopScreen customScreen"><div className="customTop"><b>Your system</b><i>Customized</i></div><div className="customModules"><i>Customers</i><i>Inventory</i><i>Reports</i><i>Workflow</i></div><div className="customFlow"><i /><b>→</b><i /><b>→</b><i /></div><div className="buildBadge">YOUR WORKFLOW</div></div><div className="laptopBase" /></div><h3>Your Workflow, Your System</h3><p>Have a repetitive process, spreadsheet, or manual workflow? I can help shape it into a focused AI-assisted business tool.</p><div className="customTags"><span>Tracking</span><span>Dashboards</span><span>Internal tools</span></div><a className="ideaCta" href="https://wa.me/639926348536?text=Hi%20Jemarie%2C%20I%20have%20an%20idea%20for%20a%20custom%20business%20system." target="_blank" rel="noreferrer">Discuss your idea ↗</a><small>OPEN FOR CUSTOM PROJECTS</small></article>
        </div>
      </section>
      <section className="services shell" id="services">
        <div className="sectionHead compact"><div><small>03 / HOW I CAN HELP</small><h2>Strategy meets<br />implementation.</h2></div></div>
        <div className="serviceRows">
          <article><b>01</b><h3>Digital marketing support</h3><p>Campaign coordination, content support, research, tracking, and clear performance reporting.</p></article>
          <article><b>02</b><h3>Email marketing</h3><p>Campaign setup, newsletters, audience journeys, automation support, testing, and optimization.</p></article>
          <article><b>03</b><h3>Websites, WordPress & landing pages</h3><p>WordPress support, conversion-focused pages, content updates, forms, QA, and practical website improvements.</p></article>
          <article><b>04</b><h3>Custom AI-assisted builds</h3><p>Small business tools and prototypes shaped collaboratively, with transparent methods and realistic scope.</p></article>
          <article><b>05</b><h3>GoHighLevel CRM support</h3><p>Practical GHL setup and customization for contacts, pipelines, forms, calendars, workflows, testing, and ongoing campaign support.</p></article>
        </div>
      </section>
      <section className="about shell" id="about"><figure className="aboutPortrait"><img src="/jemarie-portfolio-portrait.png" alt="Jemarie Adame in a forest-green jacket, photographed in a warm creative-professional style" /><figcaption><span>Jemarie Adame</span><small>DIGITAL MARKETING · EMAIL · AI-ASSISTED WEB</small></figcaption></figure><div className="aboutCopy"><small>04 / ABOUT ME</small><h2>Curious enough to learn.<br /><em>Practical enough to ship.</em></h2><div className="aboutStory"><p className="aboutLead">My foundation is <strong>digital and email marketing</strong>. Building BotikaPOS showed me how far I could take an operational idea—shaping the workflow, guiding AI tools, testing the experience, and turning it into something tangible.</p><p>I&apos;m transparent about how I work. AI supports my process, but thoughtful direction, careful testing, and clear communication remain my responsibility. I&apos;m continuing to strengthen my technical skills with every project I build.</p></div><div className="aboutAvailability"><i /><span>Open to remote roles, project support, and focused collaborations</span></div><div className="workLabel">HOW I WORK</div><div className="values"><article><span>01</span><b>Clear communication</b><p>Requirements, progress, and limitations explained without unnecessary complexity.</p></article><article><span>02</span><b>Honest capabilities</b><p>Transparent tools, realistic scope, and no pretending a work in progress is finished.</p></article><article><span>03</span><b>Curious problem-solving</b><p>A willingness to understand the workflow, test ideas, and keep improving the result.</p></article></div></div></section>
      <footer id="contact"><div className="shell footerInner"><small>HAVE A PROJECT OR ROLE IN MIND?</small><h2>Let&apos;s make something<br /><em>useful together.</em></h2><div className="contactLinks"><a className="contactButton" href="mailto:socialswithjem@gmail.com">Email me <Arrow /></a><a className="contactButton outline" href="https://wa.me/639926348536" target="_blank" rel="noreferrer">WhatsApp <Arrow /></a></div><div className="directContact"><a href="mailto:socialswithjem@gmail.com">socialswithjem@gmail.com</a><a href="https://wa.me/639926348536" target="_blank" rel="noreferrer">0992 634 8536</a></div><div className="footerBottom"><span>© 2026 Jemarie Adame</span><span>Digital marketing · Email · AI-assisted web</span><a href="#top">Back to top ↑</a></div></div></footer>
    </main>
  );
}
