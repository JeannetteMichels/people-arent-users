"use client";

import type { FormEvent } from "react";
import { useEffect, useState } from "react";

const peopleWords = [
  "patients",
  "students",
  "parents",
  "nurses",
  "teachers",
  "neighbors",
  "voters",
  "people",
];

export default function Home() {
  const [showMore, setShowMore] = useState(false);
  const [rotor, setRotor] = useState(0);
  const [formNote, setFormNote] = useState("");

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setRotor(peopleWords.length - 1);
      return;
    }
    const timer = window.setInterval(
      () => setRotor((current) => (current + 1) % peopleWords.length),
      1500,
    );
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const updateProgress = () => {
      const root = document.documentElement;
      const max = root.scrollHeight - root.clientHeight;
      root.style.setProperty("--reading-progress", `${max ? root.scrollTop / max : 0}`);
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  // When an email-list provider is connected (Kit, Buttondown, Mailchimp),
  // set its endpoint here and submissions will be recorded before the redirect.
  const FORM_ENDPOINT = "https://app.kit.com/forms/9873593/subscriptions";

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = String(data.get("email") ?? "").trim();
    if (!email || !email.includes("@")) {
      setFormNote("That does not look like an email address. Try again.");
      return;
    }
    if (FORM_ENDPOINT) {
      try {
        void fetch(FORM_ENDPOINT, {
          method: "POST",
          body: new URLSearchParams({ email_address: email }),
          keepalive: true,
          mode: "no-cors",
        });
      } catch {
        /* the chapter opens either way */
      }
    }
    setFormNote("It\u2019s yours. One second.");
    window.location.href = "/chapter-one";
  }

  return (
    <>
      <div className="progress" aria-hidden="true" />
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="People Aren't Users, home">
          People Aren&apos;t <span className="crossed">Users</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#book">The book</a>
          <a href="#opening">The opening</a>
          <a href="#author">The author</a>
          <a href="#rights">Book &amp; rights</a>
        </nav>
        <a className="header-cta" href="#chapter">Get the chapter</a>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">A book by Jeannette Michels</p>
            <h1 id="hero-title">
              People aren&apos;t <span className="hero-crossed">users</span>.
            </h1>
            <p className="tagline">Five letters where a person used to be</p>
            <p className="hero-rotor">
              They are <span key={rotor}>{peopleWords[rotor]}.</span>
            </p>
            <p className="hero-intro">
              There is a word at the center of almost every system built to serve people in the last fifty years. It decides why the hold music plays, why there is no number to call, and what the AI deciding your loan sees when it looks at you. The word is <em>user</em>. This book is about getting your name back.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#opening">Read the opening</a>
              <a className="button button-line" href="#author">Meet the author</a>
            </div>
          </div>

          <div className="hero-art" aria-label="Editorial artwork for People Aren't Users">
            <img
              src="/images/people-arent-users-editorial.png"
              alt="A torn-paper portrait revealing a person's eye beneath the label user"
            />
          </div>
        </section>

        <div className="role-ribbon" aria-label="People are more than a system label">
          <span>patient</span><i>not</i><s>user</s>
          <span>student</span><i>not</i><s>user</s>
          <span>parent</span><i>not</i><s>user</s>
          <span>person</span>
        </div>

        <section id="book" className="section argument-section">
          <div className="section-number" aria-hidden="true">01</div>
          <div className="section-inner argument-grid">
            <div className="section-heading">
              <p className="section-label">01 / The argument</p>
              <h2>A word, not a conspiracy</h2>
              <blockquote>
                “Only two industries call their customers users: illegal drugs and software.”
                <cite>Edward Tufte</cite>
              </blockquote>
            </div>
            <div className="prose">
              <p className="dropcap">In November 1961, at MIT, four trained specialists shared time on a single mainframe, and the system needed a word for them. It called them users. The word was exactly right for what it described. Then computing left the lab, and the word rode along in the documentation, from personal computers to the internet to the phone in your pocket, gaining reach at every step. Nobody debated it. It was already in the manual.</p>
              <p>A user is not a person. A user is a behavior inside a system. Call someone a user and you have already decided what you owe them: not their history, not their context, only their conduct inside your walls. That is why your call is very important and nobody answers it. That is why the most sophisticated machines in history say your name to your face and call you a user behind your back.</p>
              <p>The book follows the word from that lab into the care facility, the quarterly review, the vendor room, the exam room, the school portal, and the AI systems now deciding who gets the loan, the job, and the surgery. It is not a tech takedown. I work in tech. I have said the word without flinching. It is an argument that the frame is a choice, and a fifty-year-old choice can be changed by anyone who notices it.</p>
            </div>
          </div>
          <div className="pull-quote">
            <span>Roslyn&apos;s room.</span>
            <span>The quarterly review.</span>
            <span>My kitchen table.</span>
            <strong>The same architecture every time, just different walls.</strong>
          </div>
        </section>

        <section id="opening" className="section opening-section">
          <div className="section-number" aria-hidden="true">02</div>
          <div className="section-inner opening-grid">
            <div className="opening-aside">
              <p className="section-label">02 / Read the opening</p>
              <h2>You Were Renamed</h2>
              <blockquote>“There are no ordinary people. You have never talked to a mere mortal.”<cite>C.S. Lewis, The Weight of Glory</cite></blockquote>
            </div>
            <article className="book-page">
              <p className="opening-line">Somewhere along the way, you were renamed. Nobody asked.</p>
              <p>It happened the last time you needed help with something ordinary. Changing a plan. Fixing a bill. Something that should have taken five minutes. You found the number and called it, and what followed was so familiar you have probably stopped being surprised by it. The menu. The options that did not fit your situation. The hold music, that genre engineered to tell you, without quite saying so, that your time is worth nothing. The voice breaking in every ninety seconds to say your call was very important.</p>
              <p>It was not. If it were, someone would have answered.</p>
              <p>You waited seventeen minutes. You explained yourself to someone who could not help you. You were transferred. You were disconnected. You called back and started over, from the top, with a new person who had no record that you had already done all of this once. And somewhere in there you stopped feeling angry and started feeling something smaller, like you did not quite exist to the system you were trying to reach.</p>
              <p>That feeling has a cause. This book names it.</p>

              {showMore && (
                <div className="more-copy" id="more-copy">
                  <p>You know what I am talking about, because it has happened to you more times than you can count. On the phone, yes. At the pharmacy, told the thing you need is not covered by a clerk who agrees it makes no sense and is as powerless as you are. At your kid&apos;s school, in the portal that has no field for what is actually wrong. This is not one bad afternoon. It is the texture of modern life, the daily sensation of being handled by systems built for someone who is almost, but not quite, you.</p>
                  <p>And here is the strangest part, the part that took me the longest to see. Almost nobody built those systems to hurt you. Most were built by decent people who would be sick to learn how it feels on your end. That is not a comfort. It is the mystery this whole book is trying to solve. How do so many good people, trying so hard, spending so much intelligence and money and technology, keep building machines that make a person feel like they do not exist? Not a conspiracy. Not stupidity. A word.</p>
                  <span className="section-break" aria-hidden="true">• • •</span>
                  <p>Her name was Roslyn. I met her my first year of graduate school, in a care facility in Reno. My job was to keep her sitting still longer using a machine that dispensed candy. She stood back up every single time. I had a clipboard. I never asked where she was going.</p>
                  <p>It took thirty years to understand why that mattered.</p>
                  <p>The second time I saw it, I was in a quarterly review.</p>
                  <p>Good numbers on the slide. Someone said users dropped off at step three of the onboarding flow, and everyone moved on. I did not. Underneath that sentence was the thing the sentence had been built to hide. People dropped off. People who had sat down at a phone or a laptop, tried to work out what we had made, failed, and left. They had names. They had an exact moment of frustration inside a thing we built, and our word for the moment was drop-off, and our word for them was users, and the word let the room take in the loss and feel nothing.</p>
                  <span className="section-break" aria-hidden="true">• • •</span>
                  <p>The third time was at my kitchen table. Maclaine was thirteen.</p>
                  <p>Someone hacked her Facebook and posted something I will not repeat. She came to me holding her phone, her face doing that thing a face does when a kid is trying very hard not to come apart. I went looking for a number to call. There was none. There was a form. A case number. An automated email confirming my issue had been received and would be reviewed in accordance with community guidelines.</p>
                  <p>She was not an issue. She was my daughter. And the system that had just humiliated her wanted to know her account recovery preferences.</p>
                  <p>Roslyn&apos;s room. The quarterly review. My kitchen table. The same architecture every time, just different walls.</p>
                  <span className="section-break" aria-hidden="true">• • •</span>
                  <p>There is a word at the center of almost every system built to serve people in the last fifty years. It is in the product spec, the engineering standup, the customer service protocol, the instruction manual in your kitchen drawer. It is the word companies use for you in the rooms you are not in. The word is user, and it is not a neutral description. It is a frame, and a frame decides which questions get asked and which ones become unthinkable. What this frame made unthinkable, for fifty years running, is the only question that ever mattered: who is this person, and what do they need?</p>
                  <p>A user is not a person. A user is a function, a behavior, an input, a body inside a system. Call someone a user and you have already answered, before you noticed you were answering, the question of what you owe them. Not their history. Not their context. Not what is breaking in their life the day they come to you. Only their behavior inside your walls, for as long as they stay. That is why the hold music plays. That is why there is no number to call. That is why Roslyn had a machine instead of a person who asked where she was going.</p>
                  <p>That is what the word does.</p>
                  <p>Nobody chose this on purpose. The word showed up in engineering culture as handy shorthand, got inherited by a whole industry without a single debate, and became the lens through which billions of people are not seen by the systems built to serve them. And here is why it is urgent now, not later. The same frame that turned Roslyn into a duration-seated metric in a care facility in Reno is being handed, intact and unexamined, to machines that will decide who gets the loan, the job, the surgery, the spot in the school, and they will decide it in a hundred milliseconds, a million times a day, faster than any clerk who ever lived.</p>
                  <span className="section-break" aria-hidden="true">• • •</span>
                  <p>This is not a tech takedown. I work in tech. I have built things, sat in those rooms, said the word without flinching. I am not going to pretend otherwise.</p>
                  <p>There is a feeling almost everyone knows and nobody has quite pinned down. Being routed instead of helped. Processed instead of seen. Hanging up smaller than you were when you dialed.</p>
                  <p>You will finish this book and never stop hearing the word. In meetings. In your kid&apos;s school emails. In the AI assistant somebody just pointed at your healthcare questions. That sounds small. It is not. Once you can see the frame you can see the choice underneath it, and once you can see the choice you are no longer trapped inside it, because a thing you can see is a thing you can decide about. The people who feel most helpless in front of these systems are the ones who take them for weather, for the way things simply are. They are not weather. They were built, by people, out of a word, and anything people built out of a word, other people can rebuild out of a better one. That is not optimism. It is just how frames work, and it is the most practical hope I have to give you.</p>
                  <p>And whoever you are, you are closer to the levers than you think. You do not have to run the company or write the code or hold any title at all. You only have to be in a room, now and then, where a decision gets made about people, and say the real word instead of the abstraction, and refuse to look away from who you are actually talking about. The real word is never a friendlier abstraction. Institutions trade one label for another all the time and change nothing, because a category with better manners is still a category. The real word is the person in front of you. That is available to a CEO and a nurse and a teacher and a parent and a person on hold who has decided their time is not worth nothing. It is available to you.</p>
                  <p>Somewhere along the way, you were renamed.</p>
                  <p>Nobody asked.</p>
                  <p>This book is about getting your name back.</p>
                </div>
              )}
              <button
                className="button excerpt-button"
                type="button"
                aria-expanded={showMore}
                aria-controls="more-copy"
                onClick={() => setShowMore((current) => !current)}
              >
                {showMore ? "Close the excerpt" : "Keep reading"}
              </button>
            </article>
          </div>
        </section>

        <section id="author" className="section author-section">
          <div className="section-number" aria-hidden="true">03</div>
          <div className="section-inner">
            <p className="section-label light">03 / The author</p>
            <h2>Thirty years of seeing what systems miss</h2>
            <div className="author-lead">
              <figure className="author-portrait">
                <img src="/images/jeannette-headshot.jpg" alt="Jeannette Michels" />
                <figcaption>Jeannette Michels<br />Bend, Oregon</figcaption>
              </figure>
              <div className="author-prose">
                <p>I trained in clinical psychology and behavior analysis. The training handed me a clipboard in a care facility in Reno, where I measured how long a woman named Roslyn stayed seated. I recorded the behavior the system asked me to record and never asked where she was trying to go.</p>
                <p className="author-thesis">I was doing the job correctly and still missing the person.</p>
                <p>From there I became a school counselor in Culver City and a family support specialist in Seattle. I founded IntegriTeach, which built online professional development for teachers and counselors, and watched a mission I believed in become a set of completion rates. Then I co-founded PackIt and helped turn a kitchen-table idea into a patented consumer category.</p>
                <p>By every conventional measure, PackIt was a success. I still remember sitting in a Target vendor room and hearing the families we had built the product for discussed in the language of repeat purchase and retention. The language was ordinary, efficient, and so familiar that no one had reason to question what it left out.</p>
              </div>
            </div>

            <div className="credibility-strip" aria-label="Author credentials">
              <div className="credential">
                <span>Built</span>
                <strong>PackIt</strong>
                <p>Co-founder of a patented consumer category carried in more than 7,000 retail locations across more than 40 countries. Three-time Inc. 5000 company, No. 1 on Inc.&apos;s list of the 50 fastest-growing women-led private companies in America, and recipient of more than 100 industry awards.</p>
              </div>
              <div className="credential credential-research">
                <span>Created</span>
                <strong>CX20 + EX20 + X20</strong>
                <p>Creator of three global research platforms that expose the distance between organizational confidence and lived experience. X20 brings the 20-gap framework to AI through a new study of approximately 1,000 business leaders and 2,000 customers and employees worldwide.</p>
              </div>
              <div className="credential">
                <span>Led</span>
                <strong>Global strategy</strong>
                <p>Advised HP, New Balance, Citi, Disney, Nike, and ASICS before leading global marketing strategy, insights, and analytics for experience design and digital engineering across more than 50 countries.</p>
              </div>
              <div className="credential">
                <span>Spoken</span>
                <strong>TEDx + universities</strong>
                <p>TEDx Constitution Drive, UCLA Anderson School of Management, USC Marshall School of Business, and stages across the industry. Published and featured in Inc., CX Scoop, and C-Suite Quarterly.</p>
              </div>
            </div>

            <div className="author-story">
              <div className="author-prose">
                <p>Corporate work gave me a more sophisticated vocabulary for the same disappearance. A person became a user, subscriber, account holder, policyholder, patient, passenger, member, case, claim, conversion, or churn risk. Some labels described a role. Others reduced the person to a record, a transaction, or a probability. Each could be accurate and still incomplete. The problem began when the system forgot the difference.</p>
                <p>Today I lead global marketing strategy, insights, and analytics for Amdocs&apos; Experience Design and Digital Engineering business. The latest CX20 study included nearly 3,000 business leaders and consumers across 14 countries. Eighty percent of business leaders said their companies were meeting customer expectations. Only 24 percent of customers agreed. That 56-point gap measures how far an organization&apos;s story can drift from the experience of the people it serves.</p>
                <p>X20 extends that work to AI. It asks what happens when technology enters the same organizational gaps people were already living inside.</p>
                <p>I gave a TEDx talk called <em>It&apos;s My Neighbor&apos;s Fault</em>, and I have spoken about this work at UCLA&apos;s Anderson School of Management, USC&apos;s Marshall School of Business, and on stages across the industry. Afterward, people find me and say some version of the same thing: I have felt this my whole life. I never heard anyone say it out loud.</p>
                <p><em>People Aren&apos;t Users</em> grew from the question I failed to ask Roslyn, and from every version of that omission I have met since. It is about what organizations stop seeing when the role becomes the whole person, and what changes when someone finally looks up from the clipboard.</p>
              </div>
              <aside id="rights" className="author-facts" aria-label="Book and rights">
                <p className="stamp">Book &amp; rights</p>
                <dl>
                  <dt>The book</dt>
                  <dd><em>People Aren&apos;t Users: Five Letters Where a Person Used to Be.</em></dd>
                  <dt>Status</dt>
                  <dd>Complete nonfiction manuscript, eighteen chapters. Seeking literary representation.</dd>
                  <dt>Representation &amp; rights</dt>
                  <dd><a href="mailto:jeannettemichels@gmail.com">jeannettemichels@gmail.com</a></dd>
                  <dt>Elsewhere</dt>
                  <dd><a href="https://www.linkedin.com/in/jeannettemichels/" rel="me">LinkedIn</a></dd>
                </dl>
              </aside>
            </div>

            <div className="photo-strip">
              <figure className="photo-card card-one">
                <img src="/images/packit-martha.jpg" alt="Jeannette Michels and PackIt co-founder Melissa with Martha Stewart holding a PackIt lunch bag" />
                <figcaption><span>01</span>The PackIt years, with Martha Stewart.</figcaption>
              </figure>
              <figure className="photo-card card-two">
                <img src="/images/speaking-nfte.jpg" alt="Jeannette Michels teaching a market research session for NFTE" />
                <figcaption><span>02</span>Teaching market research with NFTE.</figcaption>
              </figure>
              <figure className="photo-card card-three">
                <img src="/images/speaking-stage.jpg" alt="Jeannette Michels speaking on stage with a microphone" />
                <figcaption><span>03</span>Speaking at a Stellar Elements event.</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section id="chapter" className="chapter-section">
          <div className="chapter-mark" aria-hidden="true">USER</div>
          <div className="chapter-inner">
            <p className="section-label">04 / Before the book</p>
            <h2>Read Chapter One</h2>
            <p>Leave your email and I&apos;ll send you the full opening chapter, and one message when the book has a date. That is the whole arrangement. No drip sequence. No re-engagement campaign built to hit you hard in the first seven days. You are not a cohort.</p>
            <form onSubmit={submitForm} noValidate>
              <label htmlFor="email">Your email</label>
              <div className="form-row">
                <input id="email" name="email" type="email" placeholder="you@example.com" required autoComplete="email" />
                <button type="submit">Read Chapter One</button>
              </div>
              <p className="form-note" aria-live="polite">{formNote}</p>
            </form>
          </div>
        </section>
      </main>

      <footer>
        <p>This site has no <span className="crossed">users</span>. It has visitors, and they were people the whole time.</p>
        <div>
          <span>No cookies. No trackers. No banner asking you to agree to either.</span>
          <span>© 2026 Jeannette Michels · Bend, Oregon</span>
          <span><a href="mailto:jeannettemichels@gmail.com">Write to me</a> · <a href="https://www.linkedin.com/in/jeannettemichels/">LinkedIn</a></span>
        </div>
      </footer>
    </>
  );
}
