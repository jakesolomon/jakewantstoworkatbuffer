import {Container, Flex, Grid, ScrollArea, Stack} from "@mantine/core";
import JobAspectCard, {type JobAspect } from "./JobAspectCard";
import BarChart from "./assets/bar-chart-4.svg"
import ChatBubble from "./assets/chat-bubble-2.svg"
import Code from "./assets/code-1.svg"
import Database from "./assets/database-2.svg"
import ReactLogo from "./assets/react.svg"
import VerticalJobAspectCard from "./VerticalJobAspectCard.tsx";

function JobDescriptionSection() {

  const jobAspects: Record<string, JobAspect> = {
    frontend: {
      title: "The Full Frontend Scope",
      color: "violet.2",
      image: Code,
      description: "Shipped and maintained production features across aPriori's React frontend serving enterprise customers. Extended localization framework to support new unit systems and real-time currency conversion. Resolved CI/CD pipeline failures, increased test coverage in legacy code, and reviewed team code daily."
    },
    react: {
      title: "Strong with React and Modern Web Development",
      color: "red.3",
      image: ReactLogo,
      description: "4 years building production UIs in React and TypeScript. Regularly extended shared component libraries using modular CSS and Storybook."
    },
    backend: {
      title: "Diving into Backend Logic",
      color: "yellow.2",
      image: Database,
      description: "Built The Growing Guide's backend to generate AI-powered gardening schedules. Designed the data schema, integrated LLM responses, and rendered dynamic PDFs via AWS Lambda. At aPriori, owned Java + Spring Boot microservices with Postgres and MongoDB, coordinating across 5+ backend teams.",
      // horizontal: true
    },
    // api: {
    //   title: "Connecting Third Party APIs",
    //   color: "grape.2",
    //   image: Postman,
    //   description: "AI APIs, payment processing (Stripe), email delivery (SES), storage for user assets (S3), external data sources, and user auth."
    // },
    communication: {
      title: "Communicating Across Teams",
      color: "grape.2",
      image: ChatBubble,
      description: "Coordinated with backend teams across worldwide time zones at aPriori and presented technical plans to non-technical leadership. Facilitated stakeholder demos and refinement sessions between engineers, product managers, and designers."
    },
    pipeline: {
      title: "Conversion Optimization",
      color: "cyan.2",
      image: BarChart,
      description: "Drove 34% visitor-to-signup conversion for The Growing Guide by designing a low-friction onboarding questionnaire and optimizing Google Ads with marketing. Instrumented the full funnel with Google Analytics + GTM to measure performance and iterate on campaigns.",
      horizontal: true
    },
  }

  return (
    <Container size="xl" my="xl">

      <Grid visibleFrom='md'>
        <Grid.Col span={{base: 12, md: 4}}>
          <Stack>
            <JobAspectCard aspect={jobAspects.frontend} />
            <JobAspectCard aspect={jobAspects.react} />
          </Stack>
        </Grid.Col>
        <Grid.Col span={{base: 12, md: 8}}>
          <Stack h="100%">
            <JobAspectCard aspect={jobAspects.pipeline} />
            <Grid>
              <Grid.Col span={{base: 12, md: 4}}>
                <JobAspectCard aspect={jobAspects.communication} />
              </Grid.Col>
              <Grid.Col span={{base: 12, md: 8}}>
                <JobAspectCard aspect={jobAspects.backend} />
              </Grid.Col>
            </Grid>
          </Stack>
        </Grid.Col>
      </Grid>

      <ScrollArea visibleFrom="sm" hiddenFrom="md" w="100%">
        <Flex w={2000}>
          <VerticalJobAspectCard aspect={jobAspects.frontend} width={400} />
          <VerticalJobAspectCard aspect={jobAspects.react} width={400} />
          <VerticalJobAspectCard aspect={jobAspects.backend} width={400} />
          <VerticalJobAspectCard aspect={jobAspects.communication} width={400} />
          <VerticalJobAspectCard aspect={jobAspects.pipeline} width={400} />
        </Flex>
      </ScrollArea>

      <ScrollArea hiddenFrom="sm" w="100%">
        <Flex w={1500}>
          <VerticalJobAspectCard aspect={jobAspects.frontend} width={300} />
          <VerticalJobAspectCard aspect={jobAspects.react} width={300} />
          <VerticalJobAspectCard aspect={jobAspects.backend} width={300} />
          <VerticalJobAspectCard aspect={jobAspects.communication} width={300} />
          <VerticalJobAspectCard aspect={jobAspects.pipeline} width={300} />
        </Flex>
      </ScrollArea>
    </Container>
  )
}

export default JobDescriptionSection;