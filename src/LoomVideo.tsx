import LoomPlayer from 'react-loom-player';

const LoomVideo = () => {
  return (
    <LoomPlayer
      src="https://www.loom.com/share/3fddecaeb9db4367bc2782235d961415?t=0"
      autoplay={false}
      style={{width: "100%"}}
    />
  );
};

export default LoomVideo;
