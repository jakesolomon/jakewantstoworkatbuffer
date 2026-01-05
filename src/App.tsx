import {
  AppShell,
  Avatar,
  Container,
  Group,
  Anchor,
  Grid,
  Text,
  Mark,
  Box,
  Stack,
  Image,
  Flex,
  Center,
  useMantineTheme,
} from '@mantine/core';
import { useScrollIntoView } from '@mantine/hooks';
import { Carousel } from '@mantine/carousel';
import '@mantine/carousel/styles.css';
import Me from "./assets/me.png";
import SectionHeader from "./SectionHeader.tsx";
import WhyJakeSection from "./WhyJakeSection.tsx";
import "./App.css"
import JobDescriptionSection from "./JobDescriptionSection.tsx";
import LoomVideo from "./LoomVideo.tsx";
import ApplicationQA from "./ApplicationQA.tsx";

function App() {

  const theme = useMantineTheme();

  const { scrollIntoView: scrollToSkills, targetRef: skillsRef } = useScrollIntoView<HTMLDivElement>({
    offset: 40,
  });
  const { scrollIntoView: scrollToExperience, targetRef: experienceRef } = useScrollIntoView<HTMLDivElement>({
    offset: 60,
  });
  const { scrollIntoView: scrollToHighlights, targetRef: highlightsRef } = useScrollIntoView<HTMLDivElement>({
    offset: 60,
  });
  const { scrollIntoView: scrollToApplication, targetRef: applicationRef } = useScrollIntoView<HTMLDivElement>({
    offset: 60,
  });

  return (
    <AppShell header={{height: 60}}>
      <AppShell.Header>
        <Container size="lg" h="100%">
          <Group h="100%" justify="flex-end" gap="xl">
            <Anchor href="#skills" c="dark" onClick={() => scrollToSkills()}>
              Skills
            </Anchor>
            <Anchor href="#experience" c="dark" onClick={() => scrollToExperience()}>
              Experience
            </Anchor>
            <Anchor href="#highlights" c="dark" onClick={() => scrollToHighlights()}>
              Highlights
            </Anchor>
            <Anchor href="#application" c="dark" onClick={() => scrollToApplication()}>
              Application
            </Anchor>
          </Group>
        </Container>
      </AppShell.Header>

      <AppShell.Main>

        {/* Hero Section */}
        <Box bg={theme.colors.gray[1]}>
          <Container size="lg">

            <Grid gutter="xl" visibleFrom="md">
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

            <Center hiddenFrom="md" >
              <Flex direction="column" maw="700px" mx="md" py='xl'>
                <Box h="10vh" />
                <Avatar src={Me} alt="it's me" size="xl" mb="xl" />
                <Text size="2.5rem" lh={1.15} pt={0}>
                  <b>I'm Jake, </b>
                  <Mark color="buffer-green.2">a product-minded FE Engineer</Mark>{' '}
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
                <Box h="10vh" />
              </Flex>
            </Center>

          </Container>
        </Box>

        <Box h="70px" id="skills" ref={skillsRef}/>
        <SectionHeader title="Senior Engineer — Growth Marketing"/>

        <JobDescriptionSection />

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
        <Box bg="buffer-green.9" pt="100" pb="60" id="experience" ref={experienceRef}>
          <Container size="xl">
            <Carousel
              controlsOffset="sm"
              withIndicators
              emblaOptions={{
                loop: true
              }}
            >
              <Carousel.Slide>
                <Container size="md">
                  <Box mx={35} mb={40}>
                    <Grid>
                      <Grid.Col span={{base: 12, sm: 4}}>
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
                      <Grid.Col span={{base: 12, sm: 8}}>
                        <Stack gap="md">
                          <Text c="white" size="md" maw={800} lh="lg">
                            I built a personalized gardening planner that generates climate-specific, month-to-month tasks using a custom scheduling algorithm and AI integration. I designed and shipped the full experience—responsive frontend, backend, dynamic PDF generation pipeline, and digital fulfillment. Over 300 registered free-tier users with a 34% visitor-to-signup conversion rate.
                          </Text>
                        </Stack>
                      </Grid.Col>
                    </Grid>
                  </Box>
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
        <Box bg="white" py="xl" id="highlights" ref={highlightsRef}>
          <WhyJakeSection/>
        </Box>

        {/* Application Header */}
        <Container size="lg" id="application" ref={applicationRef}>
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
        <Box bg="white" py="md">
          <Container size="sm">
            <Stack gap="lg">
              <ApplicationQA />
              <Text size="lg" fw="900" mt="lg">
                Please record a 2-4 minute video sharing something you've learned recently.
              </Text>
              <LoomVideo />
            </Stack>
          </Container>
        </Box>

        {/* Footer */}
        <Box w="100vw" bg="buffer-green.9" ta="center">
          <Container size="md" py="lg">
            <Text size="xl" fw="800" c="buffer-green.2">
              Thanks for your time, and I hope to hear from you soon.
            </Text>
            <Text c="buffer-green.2">
              Thoughts? Feedback? I'd love to hear from you. Message me on <Anchor target="_blank" href="https://www.linkedin.com/in/jacobcsolomon/" underline="always" c="buffer-green.6">Linkedin</Anchor>.
            </Text>
          </Container>
        </Box>

      </AppShell.Main>
    </AppShell>
  );
}

export default App;
