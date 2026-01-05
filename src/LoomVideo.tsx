import {Anchor, Box, Flex, Text, Paper} from '@mantine/core';
import { useState, useEffect } from 'react';
import LoomPlayer from 'react-loom-player';

const LoomVideo = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile devices
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const loomUrl = "https://www.loom.com/share/3fddecaeb9db4367bc2782235d961415?t=0";

  // Show fallback on mobile or if player errors
  if (isMobile) {
    return (
      <Paper p="xl" radius="md" withBorder>
        <Flex justify="center" align="center" direction="column" gap="md">
          <Text size="lg" fw={500} ta="center">
            Video Player
          </Text>
          <Text size="sm" c="dimmed" ta="center">
            The embedded player may not work on mobile devices.
          </Text>
          <Anchor
            target="_blank"
            href={loomUrl}
            underline="always"
            size="lg"
            fw={600}
          >
            Watch on Loom →
          </Anchor>
        </Flex>
      </Paper>
    );
  }

  return (
    <Box style={{position: "relative"}}>
      <LoomPlayer
        src={loomUrl}
        style={{width: "100%"}}
      />
    </Box>
  );
};

export default LoomVideo;
