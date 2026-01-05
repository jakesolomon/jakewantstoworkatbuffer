import {Container, Flex, Grid, ScrollArea, Stack} from "@mantine/core";
import JobAspectCard, {type JobAspect } from "./JobAspectCard";
import BarChart from "./assets/bar-chart-4.svg"
import Code from "./assets/code-1.svg"
import Database from "./assets/database-2.svg"
import Postman from "./assets/postman.svg"
import ReactLogo from "./assets/react.svg"
import VerticalJobAspectCard from "./VerticalJobAspectCard.tsx";

function JobDescriptionSection() {

  const jobAspects: Record<string, JobAspect> = {
    frontend: {
      title: "The Full Frontend Scope",
      color: "violet.2",
      image: Code,
      size: 5,
      description: "End-to-end ownership of production services — component architecture, performance, accessibility, and shipping. Shipped high-visibility enterprise features at aPriori."
    },
    react: {
      title: "Strong with React and Modern Web Development",
      color: "red.3",
      image: ReactLogo,
      size: 7,
      description: "5+ years in React and TypeScript. Design system components and maintainable UI using modular CSS and Storybook components."
    },
    backend: {
      title: "Diving into Backend Logic",
      color: "cyan.2",
      image: Database,
      size: 3,
      description: "Built all backend logic for The Growing Guide on AWS Lambda — handling scheduling logic, PDF generation workflows, email registration, and order fulfillment. Owned multiple Java + Spring Boot microservices and databases (Postgres and MongoDB) at aPriori and interfaced with 5+ backend teams to coordinate cross-team projects.",
      horizontal: true
    },
    api: {
      title: "Connecting Third Party APIs",
      color: "grape.2",
      image: Postman,
      size: 5,
      description: "AI APIs, email delivery (SES), storage for user assets (S3), external data sources, and user auth."
    },
    pipeline: {
      title: "Debugging Tracking Pipelines",
      color: "yellow.2",
      image: BarChart,
      size: 4,
      description: "Instrumented The Growing Guide funnel end-to-end to reach 300+ registered users, 34% visitor-to-signup conversion. Iterated based on where users actually dropped off using Google Analytics + GTM.",
      // horizontal: true
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
            <JobAspectCard aspect={jobAspects.backend} />
            <Grid>
              <Grid.Col span={{base: 12, md: 4}}>
                <JobAspectCard aspect={jobAspects.api} />
              </Grid.Col>
              <Grid.Col span={{base: 12, md: 8}}>
                <JobAspectCard aspect={jobAspects.pipeline} />
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
          <VerticalJobAspectCard aspect={jobAspects.api} width={400} />
          <VerticalJobAspectCard aspect={jobAspects.pipeline} width={400} />
        </Flex>
      </ScrollArea>

      <ScrollArea hiddenFrom="sm" w="100%">
        <Flex w={1500}>
          <VerticalJobAspectCard aspect={jobAspects.frontend} width={300} />
          <VerticalJobAspectCard aspect={jobAspects.react} width={300} />
          <VerticalJobAspectCard aspect={jobAspects.backend} width={300} />
          <VerticalJobAspectCard aspect={jobAspects.api} width={300} />
          <VerticalJobAspectCard aspect={jobAspects.pipeline} width={300} />
        </Flex>
      </ScrollArea>
    </Container>
  )
}

export default JobDescriptionSection;