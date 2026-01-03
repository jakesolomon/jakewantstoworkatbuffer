import {
  AppShell,
  Container,
  Group,
  Anchor,
  Grid,
  Text,
  Mark,
  Box,
  Stack,
  Image,
  useMantineTheme,
} from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import Me from "./assets/me.png";
import SectionHeader from "./SectionHeader.tsx";
import WhyJakeSection from "./WhyJakeSection.tsx";
import "./App.css"
import JobDescriptionSection from "./JobDescriptionSection.tsx";

function App() {

  const theme = useMantineTheme();

  return (
    <AppShell header={{height: 60}}>
      <AppShell.Header>
        <Container size="lg" h="100%">
          <Group h="100%" justify="flex-end" gap="xl">
            <Anchor href="#why-buffer" c="dark">
              Why Buffer?
            </Anchor>
            <Anchor href="#experience" c="dark">
              Experience
            </Anchor>
            <Anchor href="#highlights" c="dark">
              Highlights
            </Anchor>
            <Anchor href="#application" c="dark">
              Application
            </Anchor>
          </Group>
        </Container>
      </AppShell.Header>

      <AppShell.Main>
        {/* Hero Section */}
        <Box bg={theme.colors.gray[1]}>
          <Container size="lg">
            <Grid gutter="xl">
              <Grid.Col span={{base: 12, md: 6}}>
                <Box pt="20vh">
                  <Text size="3.5rem" lh={1.15} fw={700} pb={0}>I'm Jake,</Text>
                  <Text size="3.5rem" lh={1.15} fw={300} pt={0}>
                    <Mark color="buffer-green.2">a product-minded <br/>FE Engineer</Mark>{' '}
                    focused on <em>growth.</em>
                  </Text>
                  <Group gap="sm" pt="lg">
                    <Anchor href="#" c="dark" fw="bold">
                      LinkedIn
                    </Anchor>
                    <Text size="2rem" fw={100} pb="6px">|</Text>
                    <Anchor href="#" c="dark" fw="bold">
                      Resume
                    </Anchor>
                  </Group>
                </Box>
              </Grid.Col>
              <Grid.Col span={{base: 12, md: 6}} mb={0} pb={0}>
                <Image src={Me} w="500px" h="650px" style={{position: "absolute", right: 0}}/>
                {/*Spacing for absolutely positioned image*/}
                <Box h="650px"/>
              </Grid.Col>
            </Grid>
          </Container>
        </Box>

        <Box h="70px"/>
        <SectionHeader title="Senior Engineer — Growth Marketing"/>

        <JobDescriptionSection />
        <Box h="50px"/>

        {/* Scrolling Banner */}
        <Box bg="buffer-green.2" py="md">
          <Container size="100%" px={0} style={{overflow: 'hidden'}}>
            <Box
              style={{
                display: 'flex',
                whiteSpace: 'nowrap',
                animation: 'scroll 15s linear infinite',
              }}
            >
              {Array.from({ length: 10 }).map((_, i) => (
                <Text
                  key={i}
                  size="1.6rem"
                  fw={600}
                  c="buffer-green.9"
                  style={{paddingRight: '0.4rem'}}
                >
                  5 years development experience — leadership responsibility in previous role — perfect match of tech
                  stack to experience — great attitude —
                </Text>
              ))}
            </Box>
          </Container>
        </Box>

        {/* Experience Section */}
        <Box id="experience" bg="buffer-green.9" pt="100" pb="60">
          <Container size="xl">
            <Carousel
              controlsOffset="sm"
              withIndicators
              emblaOptions={{
                loop: true
              }}
            >
              <Carousel.Slide>
                <Container size="md" mb="50">
                  <Grid>
                    <Grid.Col span={{base: 12, md: 4}}>
                      <Stack gap={0}>
                        <Text c="white" size="2.5rem" fw="900">
                          The Growing Guide
                        </Text>
                        <Text c="buffer-green.1" size="lg" fw={500}>
                          Founder
                        </Text>
                        <Text c="gray.1" size="md">
                          <em>2025–Present</em>
                        </Text>
                      </Stack>
                    </Grid.Col>
                    <Grid.Col span={{base: 12, md: 8}}>
                      <Stack gap="md">
                        <Text c="white" size="md" maw={800} lh="lg">
                          I built a personalized gardening planner that generates climate-specific, month-to-month tasks using a custom scheduling algorithm and AI integration. I designed and shipped the full experience—responsive frontend, backend, dynamic PDF generation pipeline, and digital fulfillment. Over 300 registered free-tier users with a 34% visitor-to-signup conversion rate.
                        </Text>
                      </Stack>
                    </Grid.Col>
                  </Grid>
                </Container>
              </Carousel.Slide>
              <Carousel.Slide>
                <Container size="md" mb="50">
                  <Grid>
                    <Grid.Col span={{base: 12, md: 4}}>
                      <Stack gap={0}>
                        <Text c="white" size="2.5rem" fw="900">
                          aPriori Technologies
                        </Text>
                        <Text c="buffer-green.1" size="lg" fw={500}>
                          Software Engineer
                        </Text>
                        <Text c="gray.1" size="md">
                          <em>2021-2024</em>
                        </Text>
                      </Stack>
                    </Grid.Col>
                    <Grid.Col span={{base: 12, md: 8}}>
                      <Stack gap="md">
                        <Text c="white" size="md" maw={800} lh="lg">
                          I worked on the company’s flagship cloud product, collaborating with five backend teams to deliver user-facing features with real product impact. I also stepped in for my scrum master to lead Agile ceremonies, and led my team's quarterly planning exercises to resolve cross-team dependency, report to leadership and department of 100+, and reduce project estimate inflation to 15% from over 100%.
                        </Text>
                      </Stack>
                    </Grid.Col>
                  </Grid>
                </Container>
              </Carousel.Slide>
            </Carousel>
          </Container>
        </Box>

        {/* Why Jake Section */}
        <Box id="highlights" bg="white" py={80}>
          <WhyJakeSection/>
        </Box>

        {/* Application Header */}
        <Container size="lg" >
          <Box py="xl" bg="buffer-green.9" w="50vw" style={{position: "absolute", left: 0, zIndex: -1}}>
            <Text size="5rem" c="buffer-green.2">
              {'\u200B'}
            </Text>
          </Box>
          <Stack bg="buffer-green.9" py="xl">
            <Text size="3rem" fw="900"  c="buffer-green.2">
              Application
            </Text>
            <Text size="1rem" fw="900" c="buffer-green.2">
              <em>Senior Engineer — Growth Marketing</em>
            </Text>
          </Stack>
        </Container>

        {/* Application Section */}
        <Box id="application" bg="white" py="md">
          <Container size="sm">
            <Stack gap="lg">

              <Text size="lg" fw="900" mt="lg" >
                Why would you like to work at buffer?
              </Text>
              <Text>
                For the last year I’ve been happily working at a <Anchor target="_blank" href="https://www.barrettsmillfarm.com/">small organic farm in my hometown</Anchor>—I’m not lying when I say this is the first application I’ve sent to a tech company in almost a year.
              </Text>
              <Text>
                Any trendy company can claim to be people-centric and progressive, but I’ve never seen a four day work week and transparent pay right on the website. I’ve heard the term “unlimited PTO” thrown around, but I’ve never seen a report on the amount of time off taken. And it shows: all the employees (ahem, buferroos) that I looked up have exciting digital footprints, showing off technical side projects, podcasts, blogs, and more.
              </Text>
              <Text>
                As a passionate creative in music and videography myself, I genuinely want to get to know everyone, and I’m excited about a company culture that fosters this kind of vibrant community.
              </Text>

              <Text size="lg" fw="900" mt="lg">
                Tell us about a time you had to align engineering priorities with product goals.
              </Text>
              <Text>
                TLDR: Product asked engineers for a massive lift, but instead we wrote a simple page redirect and everyone was happy.
              </Text>
              <Text>
                In an extremely common user workflow in aPriori's flagship product, our user would begin by uploading a CAD file and then have no indication when it finished processing in order to proceed. Users and product experts giving demos developed a habit of clicking “refresh” over and over after file upload—we even heard stories that some users expected the page to auto refresh when the file was done processing, and simply wasted away staring at a “processing” state, eventually assuming the product was broken.
              </Text>
              <Text>
                UX designers quietly sobbed in the background. Product asked repeatedly why engineers couldn't make the page auto-update when the file upload was complete—engineers insisted it required websockets, major refactors, or backend polling that no one wanted to own. (To be fair, this issue was one of many caused by the architectural complexity of being halfway through a migration from on-prem to cloud-based computing.)
              </Text>
              <Text>
                Instead of trying to push the “ideal” solution, <b>I partnered with my PM to step back and align on the actual goal: reduce user frustration and demo embarrassment.</b> Once we reframed the ask, we found a much simpler path. We agreed to redirect users after upload to a page that already auto-refreshed, and to add a timestamp to the old view so users understood it was static.
              </Text>
              <Text>
                It took a few hours to implement and immediately eliminated the biggest pain points. What I learned was that alignment isn’t always about the perfect technical answer. It’s about clarifying the real product need and finding the smallest viable solution everyone can agree on.
              </Text>

              <Text size="lg" fw="900" mt="lg">
                Tell us about a growth-focused feature or optimization you led and shipped recently.
              </Text>
              <Text>
                To improve conversion for my B2C SaaS product <Anchor target="_blank" href="https://thegrowingguide.com/">The Growing Guide</Anchor>, I ran a growth experiment focused on two key metrics: email opt-in rate and free-to-paid conversion. I noticed unusually high opt-ins but low conversion, and our working theory was that the free tier delivered too much value up front, removing the incentive to upgrade.
              </Text>
              <Text>
                Because the gardening season creates a short acquisition window (around February through May), I needed a rapid test. I spun up a /v2 version of the site, redirected ad traffic to it, and rebuilt the workflow so the sales page acted as a paywall before users could access the free planner. I also redesigned the landing page into a build-to-sell flow with more marketing content and multiple CTAs to warm users before asking for purchase.
              </Text>
              <Text>
                The experiment shipped in under a week, and the results came in fast: conversion didn’t improve. The insight was clear: <b>users won’t value the planner until they get to actually try it out.</b>
              </Text>
              <Text>
                This led to a new theory: the free product (a planting algorithm optimized for efficiency) and paid product (a dynamically generated gardening guide) create value on totally different timeframes and don’t belong in the same sales funnel. So I’ve paused the paid product and refocused on developing what users truly want: the planner. The long-term plan is to strengthen core value and later introduce a feature-limited free tier that still allows meaningful engagement.
              </Text>

              <Text size="lg" fw="900" mt="lg">
                Tell us about your personal experience with content creation and social media.
              </Text>
              <Text>
                I’m a gigging musician and aspiring videographer, but most of my content planning so far has been purely manual—spreadsheets of dates, group chats coordinating posts, and lots of late-night editing. It worked well enough (one band even landed a three-week tour last October), but the constant back-and-forth for edits and approvals wasn’t sustainable.
              </Text>
              <Text>
                I’m currently preparing a debut release for a new music project, and have so far edited about 20 short-form videos to promote three upcoming singles. I’m very interested in using Buffer to streamline scheduling and collaborating with my bandmates on content.
              </Text>
              <Text>
                I directed, shot, and edited all of the video content myself, which highlights the band’s eclectic style using practical effects and a lot of personality. I’m as proud of the visuals as the music.
              </Text>
              <Text>
                See our <Anchor target="_blank" href="https://crankedband.carrd.co/">website</Anchor> for an overview of the upcoming release, and a <Anchor target="_blank" href="dropbox.com/scl/fo/2iaznkm8q0g2e6jjm63j3/AHo6bmno3vkjeAwF1Pn35XI?rlkey=z0ly49nnoysz58w4l07le5ozg&st=mjpptn65&dl=0">Dropbox</Anchor> folder containing short-form video edits.
              </Text>

              <Text size="lg" fw="900" mt="lg">
                What makes a high-performing team?
              </Text>
              <Text>
                Of course, you need rockstar team members. But I think a key aspect that’s often missed is developing habits of emotional safety: a responsibility of every team member and manager.
              </Text>
              <Text>
                A team that can be honest with one another can learn and adapt to new situations better than a roster of high-performing ICs that are too afraid to ask questions they think might sound stupid, or think that they need to act like sharks in the workplace to get ahead before someone else does.
              </Text>
              <Text>
                From there, you need leadership with high expectations and the resources to empower the team to rise to the occasion—that’s the gasoline, but the team’s dynamic is what keeps the system healthy and resilient.
              </Text>
            </Stack>
          </Container>
        </Box>


      </AppShell.Main>
    </AppShell>
  );
}

export default App;
