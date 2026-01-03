import {
  Card,
  Container,
  Image,
  Grid,
  Mark,
  Table,
  Tabs,
  Text,
  Stack,
  Box,
  Anchor
} from '@mantine/core';
import MeKick from "./assets/me-kick.png"

function WhyJakeSection() {

  const elements = [
    { tech: "React + TypeScript", experience: "5 years building production React/TS apps, including high-visibility enterprise features." },
    { tech: "Internal Design System", experience: "Extended aPriori's design-system components in Storybook using modular CSS." },
    { tech: "Automated Tests", experience: "Wrote unit tests in React Testing Library and Jest for all aPriori FE components, as well as JUnit tests for Java backend." },
    { tech: "Node.js + TypeScript Backend", experience: "l backend functions for The Growing Guide were built on AWS Amplify, a typescript-based backend system that deploys to AWS Lambda functions." },
    { tech: "MongoDB", experience: "Interfaced with MongoDB in aPriori backend workflows to manage non-relational data." },
    { tech: "LLM Integrations", experience: "ilt multiple LLM integrations into The Growing Guide backend, rigorously tested prompts, leveraged structured outputs to parse responses into reusable data structures." },
    { tech: "Feature Flags", experience: "ed feature flags to manage rollouts, testing, and staged releases in production environments." },
    { tech: "AWS", experience: "used The Growing Guide on AWS (Lambda, S3, Amplify, SNS, SES), used core services to manage and deploy aPriori repos (EC2, SQS)." }
  ]

  const rows = elements.map((element) => (
    <Table.Tr key={element.tech}>
      <Table.Td>{element.tech}</Table.Td>
      <Table.Td>{element.experience}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Container size="lg">
      <Text size="3.5rem" ta="center" mb="lg">
        Why <b>Jake</b> is a <Mark color="buffer-green.2"><em>Great...</em></Mark>
      </Text>
      <Tabs defaultValue="engineer">
        <Tabs.List mb="md">
          <Tabs.Tab value="engineer">
            Engineer
          </Tabs.Tab>
          <Tabs.Tab value="collaborator">
            Collaborator
          </Tabs.Tab>
          <Tabs.Tab value="creator">
            Creator
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="engineer">
          <Card shadow="sm" p="md" withBorder radius="md">
            <Table>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Buffer Tech Stack</Table.Th>
                  <Table.Th>Experience</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>{rows}</Table.Tbody>
            </Table>
          </Card>
        </Tabs.Panel>

        <Tabs.Panel value="collaborator">
          <Grid>
            <Grid.Col span={{base: 12, md: 4}}>
              <Card shadow="sm" p={0} withBorder radius="lg">
                <Card h="100%" bg="cyan.2" m="xs" py="lg" radius="md" shadow="0" style={{transition: "all 200ms"}}>
                  <Text size="1.4rem" fw="550" c="buffer-dark.7" >
                    Scrum Duty
                  </Text>
                  <Text mt="sm" c="buffer-dark.5">
                    When our Scrum Master at aPriori was reassigned, I took over meeting schedule and facilitation. I introduced clearer meeting expectations and structure, which reduced overruns and improved engagement.
                  </Text>
                </Card>
              </Card>
            </Grid.Col>
            <Grid.Col span={{base: 12, md: 4}}>
              <Card shadow="sm" p={0} withBorder radius="lg">
                <Card h="100%" bg="red.2" m="xs" py="lg" radius="md" shadow="0" style={{transition: "all 200ms"}}>
                  <Text size="1.4rem" fw="550" c="buffer-dark.7" >
                    Big Room Planning
                  </Text>
                  <Text mt="sm" c="buffer-dark.5">
                    I led quarterly Big Room Planning for my team at aPriori, producing clear engineering plans and resolving cross-team dependencies. Synthesized 3- and 6-month plans with sign-off from the full team, and presented daily to leadership during planning weeks. Helped reduce an average project timeline inflation from over 100% to below 15%.
                  </Text>
                </Card>
              </Card>
            </Grid.Col>
            <Grid.Col span={{base: 12, md: 4}}>
              <Card shadow="sm" p={0} withBorder radius="lg">
                <Card h="100%" bg="yellow.2" m="xs" py="lg" radius="md" shadow="0" style={{transition: "all 200ms"}}>
                  <Text size="1.4rem" fw="550" c="buffer-dark.7" >
                    Mentorship
                  </Text>
                  <Text mt="sm" c="buffer-dark.5">
                    I was selected to mentor a college intern at aPriori, overseeing his experience and providing weekly code reviews.
                  </Text>
                </Card>
              </Card>
            </Grid.Col>
          </Grid>
        </Tabs.Panel>

        <Tabs.Panel value="creator">
          <Card shadow="sm" p={0} withBorder radius="md">
            <Grid gutter={0}>
              <Grid.Col span={{base: 12, md: 5}}>
                <Image src={MeKick} h="100%"/>
              </Grid.Col>
              <Grid.Col span={{base: 12, md: 7}}>
                <Box bg="buffer-green.9" w="100%">
                  <Text size="3rem" fw="800" c="buffer-green.1" p="lg" w="100%">
                    Modern Music Promotion
                  </Text>
                </Box>
                <Stack p="lg">
                  <Text>
                    Over the last two years I've organized social media campaigns for my band to promote our first two label-backed music drops, reaching 24k views with <Anchor target="_blank" href="https://www.instagram.com/p/C1Q3w8JNEdZ/?hl=en">one Instagram reel.</Anchor>
                  </Text>
                  <Text>
                    I've also directed, shot, edited, and scheduled nearly two dozen short-form promotional videos for the upcoming debut release and social media campaign for an upcoming music project.
                  </Text>
                  <Anchor href="#content">
                    Read More
                  </Anchor>
                </Stack>
              </Grid.Col>
            </Grid>
          </Card>
        </Tabs.Panel>
      </Tabs>
    </Container>
  )
}

export default WhyJakeSection;