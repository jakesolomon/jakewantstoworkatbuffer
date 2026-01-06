import {Box, Card, Grid, Image, lighten, parseThemeColor, Text, useMantineTheme} from "@mantine/core";
import {useHover} from "@mantine/hooks";

export interface JobAspect {title: string, color: string, image: string, description: string, horizontal?: boolean}

function JobAspectCard(props: { aspect: JobAspect })  {
  const { hovered, ref } = useHover()
  const theme = useMantineTheme();

  const aspect = props.aspect;
  const { color, title, image, description, horizontal} = aspect;
  const parsedColor = parseThemeColor({color, theme}).value

  return (
    <Card h="100%" shadow="sm" p={0} withBorder radius="lg" key={title}>
      <Card h="100%" bg={hovered ? lighten(parsedColor, 0.3) : color} m="xs" py="lg" radius="md" shadow="0" ref={ref} style={{transition: "all 200ms", position: "relative"}}>
        <Grid gutter={0}>
          <Grid.Col span={horizontal ? {base: 8} : {base: 12}}>
            <Text size="1.4rem" fw="550" c="buffer-dark.7" >
              {title}
            </Text>
            <Text mt="sm" c="buffer-dark.6">
              {description}
            </Text>
          </Grid.Col>
          <Grid.Col span={horizontal ? {base: 4} : {base: 12}}>
            <Box h="100">
              <Image
                src={image}
                h={hovered ? 150 : 130}
                w={hovered ? 180 : 170}
                fit="contain"
                opacity="0.85"
                style={
                  horizontal
                  ? {
                      position: "absolute",
                      bottom: 0,
                      right: 0,
                      transition: "all 400ms",
                      transform: "scale(1.4)"
                    }
                  : {
                      position: "absolute",
                      bottom: 0,
                      right: 0,
                      transition: "all 400ms",
                    }
                }
              />
            </Box>
          </Grid.Col>
        </Grid>
      </Card>
    </Card>
  )
}

export default JobAspectCard;