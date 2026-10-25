import { ChapterIndex } from "@/components/ChapterIndex";
import { IntentPath } from "@/components/IntentPath";
import { projects, profile, testimonials } from "@/content/portfolio";

export default function HomePage() {
  return (
    <div className="site-frame">
      <ChapterIndex />
      <main id="top" className="portfolio-main">
        <section id="work" className="chapter chapter--title" data-sc-act="flow" aria-labelledby="work-title">
          <div className="hero-backdrop" aria-hidden="true"><span /><span /><span /></div>
          <div className="hero-wrap">
            <div className="hero-copy" data-sc-in>
              <p className="eyebrow"><span className="availability-dot" /> Independent web developer · SEO experience</p>
              <h1 id="work-title">Websites that <span>get found</span> and grow with you.</h1>
              <p className="hero-lede">I build fast, scalable websites with SEO at their core, so the right people can find you, trust you, and take the next step.</p>
              <div className="hero-actions">
                <a className="button button--primary" href="#contact">Let’s talk about your website <span aria-hidden="true">↗</span></a>
                <a className="text-link" href="#projects">Explore my work <span aria-hidden="true">↓</span></a>
              </div>
              <div className="hero-proof" aria-label="Five years of SEO experience">
                <span className="hero-proof__number">05</span>
                <span><strong>Years in SEO</strong><small>Applied to every build</small></span>
                <span className="hero-proof__divider" />
                <span className="hero-proof__statement">From search intent<br />to enquiry</span>
              </div>
            </div>
            <div className="hero-visual">
              <div className="portrait-glow" />
              <div className="portrait-orbit portrait-orbit--one" />
              <div className="portrait-orbit portrait-orbit--two" />
              <div className="portrait-frame"><img src="/images/swayam-portrait-v2.png" alt="Swayam, web developer" width="1254" height="1254" /></div>
              <div className="floating-card floating-card--search"><span className="card-icon">⌕</span><span><small>SEARCH READY</small><strong>Built around intent</strong></span><span className="card-check">✓</span></div>
              <div className="floating-card floating-card--speed"><span className="speed-mark">↗</span><span><small>THE NEXT STEP</small><strong>Clear path to enquire</strong></span></div>
              <span className="visual-index">01 / 05</span>
            </div>
          </div>
          <div className="hero-bottom"><span>Web development, with SEO built in</span><span>Scroll to explore <i aria-hidden="true">↓</i></span></div>
        </section>

        <section id="seo" className="chapter chapter--seo" data-sc-act="flow" aria-labelledby="seo-title">
          <div className="chapter-inner seo-spread">
            <div className="section-intro" data-sc-in>
              <p className="eyebrow">The foundation</p>
              <h2 id="seo-title">Good SEO starts <span>before launch.</span></h2>
              <p>Five years working in SEO changed how I build. Search structure, useful content, speed, and clear calls to action belong in the first conversation, not on a fix-it list later.</p>
            </div>
            <div className="seo-cards" data-sc-in data-sc-stagger="90">
              <article className="seo-card"><span className="seo-card__number">01</span><div className="seo-card__symbol">⌘</div><h3>Strong foundations</h3><p>Scalable page structure, clean technical setup, and room for your content to grow.</p></article>
              <article className="seo-card"><span className="seo-card__number">02</span><div className="seo-card__symbol">◎</div><h3>Search-led content</h3><p>Pages shaped around what your future customers are actually looking for.</p></article>
              <article className="seo-card"><span className="seo-card__number">03</span><div className="seo-card__symbol">↗</div><h3>Built to convert</h3><p>A focused route from first visit to a clear and confident enquiry.</p></article>
            </div>
            <p className="section-footnote">Strategy · Design · Next.js development · Technical SEO</p>
          </div>
        </section>

        <section id="projects" className="chapter chapter--projects" data-sc-act="flow" aria-labelledby="projects-title">
          <div className="chapter-inner projects-spread">
            <div className="section-intro projects-intro" data-sc-in>
              <p className="eyebrow">Selected work / approach</p>
              <h2 id="projects-title">Every page earns <span>its place.</span></h2>
              <p>A strong website makes the offer easy to understand, answers the right questions, and gives each visitor a useful next step.</p>
            </div>
            {projects.length ? (
              <div className="project-grid">{projects.map((project) => <article className="project-card" key={project.title}>{project.image ? <img src={project.image} alt={project.imageAlt ?? ""} width="1200" height="800" /> : null}<div className="project-card__body"><p className="eyebrow">{project.role}</p><h3>{project.title}</h3><p>{project.summary}</p>{project.outcome ? <p className="project-outcome">{project.outcome}</p> : null}{project.href ? <a href={project.href}>View project ↗</a> : null}</div></article>)}</div>
            ) : (
              <div className="work-preview">
                <div className="work-preview__top"><span>THE BUILD BLUEPRINT</span><span>01 — 03</span></div>
                <div className="blueprint-art" aria-hidden="true"><div className="blueprint-window"><div className="blueprint-window__nav"><i /><i /><i /><b /></div><div className="blueprint-window__hero"><span /><span /><span /></div><div className="blueprint-window__blocks"><i /><i /><i /></div></div><div className="blueprint-stamp">SEARCH<br />TO GROW</div><div className="blueprint-path"><span>Discover</span><i /><span>Trust</span><i /><span>Enquire</span></div></div>
                <div className="work-preview__bottom"><div><h3>Built to be found.<br />Designed to move people.</h3><p>Case studies will appear here as completed work is ready to share.</p></div><span className="work-preview__arrow">↗</span></div>
              </div>
            )}
            <IntentPath />
          </div>
        </section>

        <section id="contact" className="chapter chapter--contact" data-sc-act="flow" aria-labelledby="contact-title">
          <div className="chapter-inner contact-spread">
            <div className="contact-orbit" aria-hidden="true"><span /><span /><span /></div>
            <div className="contact-copyblock" data-sc-in>
              <p className="eyebrow">Have a growth goal in mind?</p>
              <h2 id="contact-title">Let’s make your next website <span>work harder.</span></h2>
              <p className="contact-copy">Tell me what you’re building, who you need to reach, and where you want to go. We can start with a face-to-face conversation.</p>
              <a className="button button--light" href={profile.linkedin} target="_blank" rel="noreferrer">{profile.primaryAction}<span aria-hidden="true"> ↗</span></a>
              <p className="contact-note">LinkedIn · Replace with a calendar booking link when ready</p>
            </div>
            <div className="contact-visual" aria-label="A visitor journey from search to website to enquiry">
              <div className="contact-visual__top"><span>THE GROWTH PATH</span><span><i /> BUILT AROUND YOUR GOAL</span></div>
              <div className="contact-flow">
                <article className="contact-step"><span className="contact-step__icon">⌕</span><span className="contact-step__label">01 / DISCOVER</span><h3>Search</h3><p>Show up for the right intent.</p></article>
                <span className="contact-flow__connector" aria-hidden="true">→</span>
                <article className="contact-step contact-step--focus"><span className="contact-step__icon">▤</span><span className="contact-step__label">02 / EXPERIENCE</span><h3>Website</h3><p>Make your value easy to see.</p></article>
                <span className="contact-flow__connector" aria-hidden="true">→</span>
                <article className="contact-step"><span className="contact-step__icon">↗</span><span className="contact-step__label">03 / TAKE ACTION</span><h3>Enquiry</h3><p>Make the next step clear.</p></article>
              </div>
              <div className="contact-visual__footer"><span>SEO strategy</span><i /><span>Thoughtful design</span><i /><span>Lead generation</span></div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="chapter chapter--testimonials" data-sc-act="flow" aria-labelledby="testimonials-title">
          <div className="chapter-inner testimonials-spread">
            <div className="section-intro" data-sc-in><p className="eyebrow">Trust, in their words</p><h2 id="testimonials-title">Good work should <span>speak for itself.</span></h2><p>Real feedback matters. This section is ready for client testimonials and Google reviews when you have them.</p></div>
            {testimonials.length ? <div className="testimonial-list">{testimonials.map((testimonial, index) => <figure className="testimonial-item" key={`${testimonial.name}-${index}`}><blockquote>“{testimonial.quote}”</blockquote><figcaption>{testimonial.name}{testimonial.role ? `, ${testimonial.role}` : ""}{testimonial.company ? ` at ${testimonial.company}` : ""}{testimonial.source === "Google" ? " · Google review" : ""}{testimonial.href ? <a href={testimonial.href}> View source</a> : null}</figcaption></figure>)}</div> : <div className="review-ready"><span className="review-ready__quote">“</span><div><span className="eyebrow">Your future client story</span><p>No reviews are published yet. Add real, approved feedback here when it’s ready.</p></div><span className="review-ready__stars" aria-hidden="true">★★★★★</span></div>}
            <footer className="site-footer"><a className="wordmark" href="#work">S<span>.</span></a><p>Thoughtful websites for organic growth.</p><div className="footer-links"><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><a href={profile.youtube} target="_blank" rel="noreferrer">YouTube ↗</a><span>© {new Date().getFullYear()} Swayam</span></div></footer>
          </div>
        </section>
      </main>
    </div>
  );
}
