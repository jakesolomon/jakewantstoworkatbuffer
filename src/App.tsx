import {
  AppShell,
  Container,
  Group,
  Anchor,
  Grid,
  Title,
  Text,
  Mark,
  Box,
  Stack,
  Pill,
  Divider,
} from '@mantine/core';

function App() {
  return (
    <AppShell header={{ height: 60 }}>
      <AppShell.Header>
        <Container size="lg" h="100%">
          <Group h="100%" justify="flex-end" gap="xl">
            <Anchor href="#why-buffer" c="dark" underline="never" fw={500}>
              Why Buffer?
            </Anchor>
            <Anchor href="#experience" c="dark" underline="never" fw={500}>
              Experience
            </Anchor>
            <Anchor href="#highlights" c="dark" underline="never" fw={500}>
              Highlights
            </Anchor>
            <Anchor href="#application" c="dark" underline="never" fw={500}>
              Application
            </Anchor>
          </Group>
        </Container>
      </AppShell.Header>

      <AppShell.Main>
        {/* Hero Section */}
        <Box bg="white" py={80}>
          <Container size="lg">
            <Grid gutter="xl">
              <Grid.Col span={{ base: 12, md: 6 }}>
                <Stack gap="lg">
                  <Title order={1} size="3.5rem" lh={1.1}>
                    I'm Jake,
                    <br />
                    <Mark color="buffer-green.2">a product-minded</Mark>
                    <br />
                    FE Engineer with <Mark color="buffer-green.2">EM goals.</Mark>
                  </Title>
                  <Group gap="sm">
                    <Anchor href="#" c="dark" underline="always">
                      LinkedIn
                    </Anchor>
                    <Text>|</Text>
                    <Anchor href="#" c="dark" underline="always">
                      Resume
                    </Anchor>
                  </Group>
                </Stack>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 6 }}>
                <Box
                  h={400}
                  bg="blue.1"
                  style={{
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Text c="dimmed">Photo placeholder</Text>
                </Box>
              </Grid.Col>
            </Grid>
          </Container>
        </Box>

        {/* Buffer Section */}
        <Box id="why-buffer" bg="buffer-dark.8" py={60}>
          <Container size="lg">
            <Stack gap="md">
              <Title order={2} c="buffer-green.3" size="3rem">
                Let's talk about <span style={{ fontSize: '4rem', color: '#4ade80' }}>Buffer</span>
              </Title>
              <Text c="white" size="md" maw={800}>
                What attracts me about Buffer isn't just the product, it's the people. Every team member I've looked up has
                side projects, creative outlet backgrounds, and blogs.
              </Text>
              <Text c="white" size="md" maw={800}>
                Buffer doesn't just allow people to be human, it's built the conditions for a vibrant community right into the
                foundation of the organization. (It's one thing to talk about four-day work weeks and unlimited PTO, but I
                also love many companies publishing transparent reports right on their website.)
              </Text>
              <Text c="white" size="md" maw={800}>
                In 2026 I plan on sharpening my leadership skills and product instincts, and Buffer is where I'd like to do it — in
                an environment that values experimentation, and surrounded by people with diverse backgrounds.
              </Text>
            </Stack>
          </Container>
        </Box>

        {/* Scrolling Banner */}
        <Box bg="buffer-dark.9" py={40}>
          <Container size="100%" px={0} style={{ overflow: 'hidden' }}>
            <Box
              style={{
                display: 'flex',
                whiteSpace: 'nowrap',
                animation: 'scroll 20s linear infinite',
              }}
            >
              <Text
                size="2rem"
                fw={600}
                c="buffer-green.4"
                style={{ paddingRight: '4rem' }}
              >
                years development experience — leadership responsibility in previous role — perfect
              </Text>
              <Text
                size="2rem"
                fw={600}
                c="buffer-green.4"
                style={{ paddingRight: '4rem' }}
              >
                years development experience — leadership responsibility in previous role — perfect
              </Text>
            </Box>
          </Container>
        </Box>

        {/* Experience Section */}
        <Box id="experience" bg="buffer-dark.8" py={80}>
          <Container size="lg">
            <Grid>
              <Grid.Col span={12}>
                <Stack gap="md">
                  <Title order={2} c="white" size="2.5rem">
                    aPriori Technologies
                  </Title>
                  <Text c="buffer-green.4" size="lg" fw={500}>
                    Software Engineer
                  </Text>
                  <Text c="gray.5" size="md">
                    2021-2024
                  </Text>
                  <Text c="white" size="md" maw={800}>
                    I worked on the company's flagship cloud product, collaborating with five backend teams to deliver user-
                    facing features with measurable impact. I was tapped in for my scrum master to lead Agile ceremonies, and led my
                    team's quarterly planning sessions with autonomy in stakeholder interactions, scoped in dependency, reports to leadership and department of 100+,
                    and reduced project estimate slips to 15% from over 160%.
                  </Text>
                  <Group gap="xs" mt="md">
                    <Box
                      w={8}
                      h={8}
                      bg="buffer-green.5"
                      style={{ borderRadius: '50%' }}
                    />
                    <Box
                      w={8}
                      h={8}
                      bg="gray.6"
                      style={{ borderRadius: '50%' }}
                    />
                    <Box
                      w={8}
                      h={8}
                      bg="gray.6"
                      style={{ borderRadius: '50%' }}
                    />
                  </Group>
                </Stack>
              </Grid.Col>
            </Grid>
          </Container>
        </Box>

        {/* Why Jake Section */}
        <Box id="highlights" bg="white" py={80}>
          <Container size="lg">
            <Stack gap="xl" align="center">
              <Title order={2} size="2.5rem" ta="center">
                Why <Mark color="buffer-green.2">Jake</Mark> is a <Mark color="buffer-green.2">Great...</Mark>
              </Title>
              <Group gap="md">
                <Pill size="lg" bg="white" c="dark" style={{ border: '2px solid #000' }}>
                  Engineer
                </Pill>
                <Pill size="lg" bg="white" c="dark" style={{ border: '2px solid #000' }}>
                  Leader
                </Pill>
                <Pill size="lg" bg="white" c="dark" style={{ border: '2px solid #000' }}>
                  Creator
                </Pill>
              </Group>
            </Stack>
          </Container>
        </Box>

        {/* Tech Stack Table */}
        <Box bg="white" py={60}>
          <Container size="lg">
            <Grid>
              <Grid.Col span={{ base: 12, md: 6 }}>
                <Stack gap="lg">
                  <Title order={3} size="1.25rem" fw={600}>
                    Buffer Tech Stack
                  </Title>
                  <Stack gap="md">
                    <Text fw={500}>React + TypeScript</Text>
                    <Text fw={500}>Internal Design System</Text>
                    <Text fw={500}>Automated Tests</Text>
                    <Text fw={500}>NodeJS + TypeScript Backend</Text>
                    <Text fw={500}>MongoDB</Text>
                    <Text fw={500}>LLM Integrations</Text>
                    <Text fw={500}>Feature Flags</Text>
                    <Text fw={500}>AWS</Text>
                  </Stack>
                </Stack>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 6 }}>
                <Stack gap="lg">
                  <Title order={3} size="1.25rem" fw={600}>
                    Experience
                  </Title>
                  <Stack gap="md">
                    <Text>5 years building production React/TS apps, including high-visibility enterprise features.</Text>
                    <Text>Extended aPriori's design system components in Storybook using advanced CSS.</Text>
                    <Text>Wrote end-to-end tests in React Testing Library and Jest for all aPriori FE components, as well as JUnit tests for Java backend.</Text>
                    <Text>All backend functions for The Growing Guide were built on AWS Amplify, a TypeScript-based backend system that deploys with AWS Lambda functions.</Text>
                    <Text>Interfaced with MongoDB in aPriori backend workflows to manage non-relational data.</Text>
                    <Text>Built multiple LLM integrations in The Growing Guide, rigorously tested prompts, leveraged structured outputs to parse responses into reusable data structures.</Text>
                    <Text>Used feature flags to manage rollouts, testing, and staged releases in production environments.</Text>
                    <Text>Housed The Growing Guide on AWS (Lambda, SQS, SNS, used other services to manage our deploy workflows (S3, SQS).</Text>
                  </Stack>
                </Stack>
              </Grid.Col>
            </Grid>
          </Container>
        </Box>

        <Divider my={0} />

        {/* Application Section */}
        <Box id="application" bg="white" py={80}>
          <Container size="lg">
            <Stack gap="xl">
              <Title order={1} size="4rem" fw={700}>
                Application
              </Title>
              <Text size="lg">
                Great! I've been actively working at <Anchor href="#">jakewl.dev/buffer</Anchor> for the first application I've sent to any
                company in almost a year.
              </Text>
              <Text size="lg">
                I realize a company can claim to be people-centric and progressive, but more often than not it's
                a compliance token, befuddled from I looked up bare-covered digital footprints, showing and technical
                solo projects, podcasts, creative outlets, and professional accomplishments.
              </Text>
              <Text size="lg">
                As a passionate creative in music and videography myself, I genuinely want to get to know everyone, and I'm very
                interested in buffer because it's full of vibrant community.
              </Text>
              <Text size="lg" fw={600} mt="xl">
                Tell me about a time you had to align engineering priorities with product goals.
              </Text>
              <Text size="lg">
                I'd like product-skilled engineers for a massive ER, but instead we wrote a custom query builder (kind of like Mongo aggregates) with a user-friendly UI. This let us get to market in about a year.
              </Text>
            </Stack>
          </Container>
        </Box>

        <style>
          {`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
          `}
        </style>
      </AppShell.Main>
    </AppShell>
  );
}

export default App;
