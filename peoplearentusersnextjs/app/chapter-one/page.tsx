import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Chapter One | People Aren't Users",
  description:
    "You Were Renamed — the opening chapter of People Aren't Users by Jeannette Michels.",
  alternates: { canonical: "/chapter-one" },
  robots: { index: false, follow: true },
};

export default function ChapterOne() {
  return (
    <main className="reader">
      <header className="reader-top">
        <Link className="reader-home" href="/">People Aren&apos;t <span className="crossed">Users</span></Link>
      </header>
      <article className="reader-body">
        <p className="reader-kicker">Chapter One</p>
        <h1>You Were Renamed</h1>
        <p className="reader-welcome">You asked, so here it is. No confirmation email, no hoops. Just read.</p>
        <blockquote className="reader-epigraph">
          <p>&ldquo;There are no ordinary people. You have never talked to a mere mortal.&rdquo;</p>
          <cite>C.S. Lewis, The Weight of Glory</cite>
        </blockquote>
        <p className="opening-line">Somewhere along the way, you were renamed. Nobody asked.</p>
        <p>It happened the last time you needed help with something ordinary. Changing a plan. Fixing a bill. Something that should have taken five minutes. You found the number and called it, and what followed was so familiar you have probably stopped being surprised by it. The menu. The options that did not fit your situation. The hold music, that genre engineered to tell you, without quite saying so, that your time is worth nothing. The voice breaking in every ninety seconds to say your call was very important.</p>
        <p>It was not. If it were, someone would have answered.</p>
        <p>You waited seventeen minutes. You explained yourself to someone who could not help you. You were transferred. You were disconnected. You called back and started over, from the top, with a new person who had no record that you had already done all of this once. And somewhere in there you stopped feeling angry and started feeling something smaller, like you did not quite exist to the system you were trying to reach.</p>
        <p>That feeling has a cause. This book names it.</p>
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
        <footer className="reader-end">
          <p>The rest is the book.</p>
          <p><Link href="/#chapter">Back to the site</Link> &middot; Representation and rights: <a href="mailto:jeannettemichels@gmail.com">jeannettemichels@gmail.com</a></p>
        </footer>
      </article>
    </main>
  );
}
