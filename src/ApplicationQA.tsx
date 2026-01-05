import { Text, Anchor } from "@mantine/core";
import type {ReactNode} from "react";

interface QAItem {
  question: string;
  answer: (string | ReactNode)[];
}

const qaData: QAItem[] = [
  {
    question: "Why would you like to work at buffer?",
    answer: [
      <>For the last year I've been happily working at a <Anchor target="_blank" href="https://www.barrettsmillfarm.com/" >small organic farm in my hometown</Anchor>—I'm not lying when I say this is the first application I've sent to a tech company in almost a year.</>,
      "Any trendy company can claim to be people-centric and progressive, but I've never seen a four day work week and transparent pay right on the website. I've heard the term \"unlimited PTO\" thrown around, but I've never seen a report on the amount of time off taken. And it shows: all the employees (ahem, buferroos) that I looked up have exciting digital footprints, showing off technical side projects, podcasts, blogs, and more.",
      "As a passionate creative in music and videography myself, I genuinely want to get to know everyone, and I'm excited about a company culture that fosters this kind of vibrant community."
    ]
  },
  {
    question: "Tell us about a technical project you shipped recently.",
    answer: [
      "I designed and implemented a parallel v2 site architecture for my SaaS product, The Growing Guide, to test a monetization hypothesis. Analytics showed strong user engagement but low conversion, so the goal was to validate whether giving too much value up front was preventing upgrades.",
      "With a very short sales window (early spring) for selling garden plans, I had one week to ship. The redesign had to rearrange the user flow, isolate the v2 traffic from existing users, and decouple checkout and fulfillment logic.",
      "To build the v2 architecture, I stood up a new landing page to receive ad traffic, implemented context-aware routing to keep navigation inside the v2 namespace, and rebuilt the checkout, planner, and purchase routing. On the backend, modular Lambda functions handled payments (Stripe), content generation (LLM + React PDF layout), and fulfillment (S3 + SES).",
      "I shipped in 6 days with GTM instrumentation tracking user drop-off and conversion. The result of the test: withholding value actually decreased user engagement without improving conversion, invalidating the original hypothesis.",
      "Getting these results as fast as we did marked a massive step forward. Early in the product’s life I tended to over-engineer solutions before learning how users would interact with them. Now, I approach growth-oriented systems with a foucus on shortening the loop between building and learning."
    ]
  },
  {
    question: "Which improvements or opportunities would you propose for buffer.com?",
    answer: [
      "Buffer’s referral system is in beta, a critical window to test how incentive structures affect partner behavior and new user quality. Buffer’s users are motivated by maintaining positive relationships with their audiences, so nailing a partner strategy that leverages this could unlock a self-growing program.",
      "I propose testing 1-2 incentive structures against the current 25% flat commission, measuring partner engagement, user signup, conversion, and lifetime value (LTV). Alternate structures could include:",
      <ol>
        <li>Dual-sided rewards (e.g., free first month for new user): Decreasing friction could lead to higher intake volume, although potentially lower quality.</li>
        <li>Scaling commissions (e.g., 10%–20%–30% tiered referrals): Incentivizing creators to think long-term may encourage higher-quality sales funnels like educational content and pre-qualify leads for Buffer.</li>
      </ol>,
      "Buffer’s referral tool, Dub, allows for segmenting into partner groups with different incentives and provides group-level analytics, making implementation straightforward.",
      "A successful referral group would achieve a LTV 3x the customer acquisition cost, or a >1 viral coefficient (where users generate more than one referral on average, creating compounding growth rather than a one-time bump). A 90-day timeline would limit risk exposure (e.g., if dual-sided rewards cannibalize organic sales) while providing enough time to reach a statistically sound volume of data."
    ]
  },
  {
    question: "Tell us about a time you were wrong at work.",
    answer: [
      "When I took over scrum facilitation for my team at aPriori, I felt my primary responsibility was to remedy a longstanding issue: our meetings were long, unfocused, and exhausting. I believed the root cause was unclear expectations and weak facilitation, so I put together a detailed plan to introduce clearer agendas, defined roles, and tighter structure.",
      "But in my very first meeting, things went sideways — our scrum master and PM unexpectedly joined, redirected the session, and I froze instead of resetting expectations. I realized afterward that I’d made a big mistake: thinking I was flying solo, I hadn’t aligned with my scrum master before trying to roll out changes.",
      <>I felt embarrassed and frustrated, so after taking some time to cool off, I talked through my plans with my scrum master and he showed support. But the experience also gave me a powerful insight: <em>I had been planning for the best case scenario, and forgotten to prepare myself for the churn that comes with a shift in mindset.</em> I let go of some ego I’d attached to my project, and proceeded with a bit more flexility and patience.</>,
      "Over the next few weeks I rolled out changes, got buy-in from team members, and eventually saw shorter meetings, fewer overruns, and stronger participation."
    ]
  },
  {
    question: "Tell us about your personal experience with content creation and social media.",
    answer: [
      "I'm a gigging musician and aspiring videographer, but most of my content planning so far has been purely manual—spreadsheets of dates, group chats coordinating posts, and lots of late-night editing. It worked well enough (one band even landed a three-week tour last October), but the constant back-and-forth for edits and approvals wasn't sustainable.",
      "I'm currently preparing a debut release for a new music project, and have so far edited about 20 short-form videos to promote three upcoming singles. I'm very interested in using Buffer to streamline scheduling and collaborating with my bandmates on content.",
      "I directed, shot, and edited all of the video content myself, which highlights the band's eclectic style using practical effects and a lot of personality. I'm as proud of the visuals as the music.",
      <>See our <Anchor target="_blank" href="https://crankedband.carrd.co/">website</Anchor> for an overview of the upcoming release, and a <Anchor target="_blank" href="dropbox.com/scl/fo/2iaznkm8q0g2e6jjm63j3/AHo6bmno3vkjeAwF1Pn35XI?rlkey=z0ly49nnoysz58w4l07le5ozg&st=mjpptn65&dl=0">Dropbox</Anchor> folder containing short-form video edits.</>
    ]
  }
];

export default function ApplicationQA() {
  return (
    <>
      {qaData.map((qa, i) => (
        <div key={i}>
          <Text size="lg" fw="900" mt="lg">
            {qa.question}
          </Text>
          {qa.answer.map((paragraph, j) => {
            if (typeof paragraph === "string") {
              return (<Text key={j} mt="sm">{paragraph}</Text>)
            } else {
              return (paragraph)
            }
          })}
        </div>
      ))}
    </>
  );
}
