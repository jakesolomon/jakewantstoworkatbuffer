import {
  Box,
  Container,
  Flex,
  Text
} from '@mantine/core';

function SectionHeader({title}: {title: string}) {

  return (
    <>
      <Box visibleFrom="md" size="lg" style={{position: 'relative', overflowY: 'hidden'}}>
        <Box py="xl" bg="buffer-green.9" w="50vw" style={{position: "absolute", left: 0, zIndex: -1}}>
          <Text size="3rem" c="buffer-green.2">
            {'\u200B'}
          </Text>
        </Box>
        <Container size="lg">
          <Flex py="xl" w="100%" bg="buffer-green.9" direction="row" align="flex-end" gap="md" wrap="nowrap" pr="xl">
            <Text size="3rem" fw="800" c="buffer-green.2" style={{ whiteSpace: 'nowrap' }}>
              {title}
            </Text>
            {/*Add image here if using*/}
          </Flex>
        </Container>
      </Box>

      <Box hiddenFrom="md" style={{position: 'relative', overflowY: 'hidden'}} >
        <Box py="lg" bg="buffer-green.9" w="100vw" style={{position: "absolute", left: 0, zIndex: -1}}>
          <Text size="2rem" c="buffer-green.2">
            {'\u200B'}<br/>{'\u200B'}
          </Text>
        </Box>
        <Container size="md">
          <Text size="2rem" fw="800" py="lg" px='sm' c="buffer-green.2" bg="buffer-green.9">
            {title}
          </Text>
        </Container>
      </Box>
    </>
  )
}

export default SectionHeader;