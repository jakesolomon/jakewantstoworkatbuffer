import {
  Box,
  Container,
  Flex,
  Text
} from '@mantine/core';

function SectionHeader({title}: {title: string}) {

  return (
    <Container size="lg" >
      <Box py="xl" bg="buffer-green.9" w="50vw" style={{position: "absolute", left: 0, zIndex: -1}}>
        <Text size="3rem" c="buffer-green.2">
          {'\u200B'}
        </Text>
      </Box>
      <Flex py="xl" w="100%" bg="buffer-green.9" direction="row" align="flex-end" gap="md" wrap="nowrap" pr="xl">
        <Text size="3rem" fw="800" c="buffer-green.2" style={{ whiteSpace: 'nowrap' }}>
          {title}
        </Text>
        {/*Add image here if using*/}
      </Flex>

    </Container>
  )
}

export default SectionHeader;