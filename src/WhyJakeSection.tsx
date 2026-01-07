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

function WhyJakeSection(props: {scrollToContent: () => void}) {

  const { scrollToContent } = props;

  const elements = [
    { tech: "React + Typescript", experience: "4 years building production React/TS apps, including high-visibility enterprise features."},
    { tech: "GTM", experience: "GTM-based tracking to support growth experiments, paid acquisition, and conversion analysis."},
    { tech: "Storybook-Based Design System", experience: "Extended aPriori's design-system components in Storybook using modular CSS."},
    { tech: "Node + TS backend", experience: "Signup, gating, fulfillment, email delivery, and third-party integrations using TypeScript-based serverless functions."},
    { tech: "AI", experience: "Integrating LLM APIs to generate personalized, user-facing content."},
    { tech: "Recharts", experience: "Built interactive production data visualizations using Recharts."},
    { tech: "GraphQL", experience: "Consume GraphQL APIs via AWS Amplify, using schema-driven contracts to connect React clients with Lambda-based backend logic."},
    { tech: "Jest + react-testing-library", experience: "Maintained and extended testing infrastructure at aPriori using React Testing Library and Jest."},
    { tech: "MongoDB", experience: "Production experience using MongoDB for non-relational data storage in backend workflows."},
    { tech: "AWS", experience: "Developed cloud-native microservices on AWS to support scalable, user-facing product features."},
  ]

  const rows = elements.map((element) => (
    <Table.Tr key={element.tech}>
      <Table.Td>{element.tech}</Table.Td>
      <Table.Td>{element.experience}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Container size="md">
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
          <Grid >
            <Grid.Col span={{base: 12, sm: 6}}>
              <Card shadow="sm" p={0} withBorder radius="lg">
                <Card h="100%" bg="cyan.2" m="xs" py="lg" radius="md" shadow="0" style={{transition: "all 200ms"}}>
                  <Text size="1.4rem" fw="550" c="buffer-dark.7" >
                    I bring clarity to complex planning.
                  </Text>
                  <Text mt="sm" c="buffer-dark.5">
                    Ran Big Room Planning for my team at aPriori—synthesizing 3- and 6-month engineering plans, resolving cross-team dependencies, and presenting daily to leadership during planning weeks. Helped reduce average project timeline inflation from over 100% to below 15% by improving estimation accuracy and surfacing blockers early.
                  </Text>
                </Card>
              </Card>
            </Grid.Col>
            <Grid.Col span={{base: 12, sm: 6}}>
              <Card shadow="sm" p={0} withBorder radius="lg">
                <Card h="100%" bg="red.2" m="xs" py="lg" radius="md" shadow="0" style={{transition: "all 200ms"}}>
                  <Text size="1.4rem" fw="550" c="buffer-dark.7" >
                    I step in when processes need help.
                  </Text>
                  <Text mt="sm" c="buffer-dark.5">
                    Took over Scrum Master duties when our SM was reassigned, introducing clearer meeting structure that reduced overruns and improved engagement. Mentored a college intern with weekly code reviews and project guidance.
                  </Text>
                </Card>
              </Card>
            </Grid.Col>
          </Grid>
        </Tabs.Panel>

        <Tabs.Panel value="creator">
          <Card shadow="sm" p={0} withBorder radius="md">
            <Grid gutter={0}>
              <Grid.Col span={{base: 12, xs: 5}}>
                <Image src={MeKick} h="100%"/>
              </Grid.Col>
              <Grid.Col span={{base: 12, xs: 7}}>
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
                  <Anchor href="#content" onClick={() => scrollToContent()}>
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