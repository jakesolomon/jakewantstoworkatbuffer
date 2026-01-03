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
      <>For the last year I've been happily working at a <Anchor target="_blank" href="https://www.barrettsmillfarm.com/">small organic farm in my hometown</Anchor>—I'm not lying when I say this is the first application I've sent to a tech company in almost a year.</>,
      "Any trendy company can claim to be people-centric and progressive, but I've never seen a four day work week and transparent pay right on the website. I've heard the term \"unlimited PTO\" thrown around, but I've never seen a report on the amount of time off taken. And it shows: all the employees (ahem, buferroos) that I looked up have exciting digital footprints, showing off technical side projects, podcasts, blogs, and more.",
      "As a passionate creative in music and videography myself, I genuinely want to get to know everyone, and I'm excited about a company culture that fosters this kind of vibrant community."
    ]
  },
  {
    question: "Tell us about a time you had to align engineering priorities with product goals.",
    answer: [
      "TLDR: Product asked engineers for a massive lift, but instead we wrote a simple page redirect and everyone was happy.",
      "In an extremely common user workflow in aPriori's flagship product, our user would begin by uploading a CAD file and then have no indication when it finished processing in order to proceed. Users and product experts giving demos developed a habit of clicking \"refresh\" over and over after file upload—we even heard stories that some users expected the page to auto refresh when the file was done processing, and simply wasted away staring at a \"processing\" state, eventually assuming the product was broken.",
      "UX designers quietly sobbed in the background. Product asked repeatedly why engineers couldn't make the page auto-update when the file upload was complete—engineers insisted it required websockets, major refactors, or backend polling that no one wanted to own. (To be fair, this issue was one of many caused by the architectural complexity of being halfway through a migration from on-prem to cloud-based computing.)",
      <>Instead of trying to push the "ideal" solution, <b>I partnered with my PM to step back and align on the actual goal: reduce user frustration and demo embarrassment.</b> Once we reframed the ask, we found a much simpler path. We agreed to redirect users after upload to a page that already auto-refreshed, and to add a timestamp to the old view so users understood it was static.</>,
      "It took a few hours to implement and immediately eliminated the biggest pain points. What I learned was that alignment isn't always about the perfect technical answer. It's about clarifying the real product need and finding the smallest viable solution everyone can agree on."
    ]
  },
  {
    question: "Tell us about a growth-focused feature or optimization you led and shipped recently.",
    answer: [
      <>To improve conversion for my B2C SaaS product <Anchor target="_blank" href="https://thegrowingguide.com/">The Growing Guide</Anchor>, I ran a growth experiment focused on two key metrics: email opt-in rate and free-to-paid conversion. I noticed unusually high opt-ins but low conversion, and our working theory was that the free tier delivered too much value up front, removing the incentive to upgrade.</>,
      "Because the gardening season creates a short acquisition window (around February through May), I needed a rapid test. I spun up a /v2 version of the site, redirected ad traffic to it, and rebuilt the workflow so the sales page acted as a paywall before users could access the free planner. I also redesigned the landing page into a build-to-sell flow with more marketing content and multiple CTAs to warm users before asking for purchase.",
      <>The experiment shipped in under a week, and the results came in fast: conversion didn't improve. The insight was clear: <b>users won't value the planner until they get to actually try it out.</b></>,
      "This led to a new theory: the free product (a planting algorithm optimized for efficiency) and paid product (a dynamically generated gardening guide) create value on totally different timeframes and don't belong in the same sales funnel. So I've paused the paid product and refocused on developing what users truly want: the planner. The long-term plan is to strengthen core value and later introduce a feature-limited free tier that still allows meaningful engagement."
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
  },
  {
    question: "What makes a high-performing team?",
    answer: [
      "Of course, you need rockstar team members. But I think a key aspect that's often missed is developing habits of emotional safety: a responsibility of every team member and manager.",
      "A team that can be honest with one another can learn and adapt to new situations better than a roster of high-performing ICs that are too afraid to ask questions they think might sound stupid, or think that they need to act like sharks in the workplace to get ahead before someone else does.",
      "From there, you need leadership with high expectations and the resources to empower the team to rise to the occasion—that's the gasoline, but the team's dynamic is what keeps the system healthy and resilient."
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
          {qa.answer.map((paragraph, j) => (
            <Text key={j} mt="sm">{paragraph}</Text>
          ))}
        </div>
      ))}
    </>
  );
}
