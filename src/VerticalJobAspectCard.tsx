import {Box, Card, Center, Image, lighten, parseThemeColor, Text, useMantineTheme} from "@mantine/core";
import {useHover} from "@mantine/hooks";
import { type JobAspect } from "./JobAspectCard"

function VerticalJobAspectCard(props: { aspect: JobAspect, width: number })  {
  const { hovered, ref } = useHover()
  const theme = useMantineTheme();

  const { aspect, width } = props;
  const { color, title, image, description } = aspect;
  const parsedColor = parseThemeColor({color, theme}).value

  return (
    <Card w={width} shadow="sm" mx="xs" p={0} withBorder radius="lg" key={title} style={{position: "relative"}}>
      <Card h="100%" bg={hovered ? lighten(parsedColor, 0.3) : color} m="xs" py="lg" radius="md" shadow="0" ref={ref} style={{transition: "all 200ms", position: "relative"}}>
        <Text size="1.4rem" fw="550" c="buffer-dark.7" >
          {title}
        </Text>
        <Text mt="sm" c="buffer-dark.6">
          {description}
        </Text>
        <Box h={200} >
          <Center>
            <Image
              src={image}
              h={hovered ? 180 : 170}
              w={hovered ? 180 : 170}
              fit="contain"
              opacity="0.85"
              style={{
                position: "absolute",
                bottom: 0,
                transition: "all 400ms",
              }}
            />
          </Center>
        </Box>
      </Card>
    </Card>
  )
}

export default VerticalJobAspectCard;