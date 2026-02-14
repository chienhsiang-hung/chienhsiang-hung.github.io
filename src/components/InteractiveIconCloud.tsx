import { Cloud, renderSimpleIcon, type ICloud } from 'react-icon-cloud';
import {
  siJavascript,
  siTypescript,
  siReact,
  siHtml5,
  siNodedotjs,
  siNextdotjs,
  siTailwindcss,
  siPostgresql,
  siMongodb,
  siDocker,
  siGit,
  siGithub,
  siPython,
  siPytorch,
  siTensorflow,
  siLinux,
  siKubernetes,
  siSpringboot,
  siMariadb,
  siMinio,
  siArgo,
  siPrometheus,
  siElastic,
  siGrafana,
  siUbuntu,
} from 'simple-icons/icons';

const icons = [
  siJavascript,
  siTypescript,
  siReact,
  siHtml5,
  siNodedotjs,
  siNextdotjs,
  siTailwindcss,
  siPostgresql,
  siMongodb,
  siDocker,
  siGit,
  siGithub,
  siPython,
  siPytorch,
  siTensorflow,
  siLinux,
  siKubernetes,
  siSpringboot,
  siMariadb,
  siMinio,
  siArgo,
  siPrometheus,
  siElastic,
  siGrafana,
  siUbuntu,
];

const renderCustomIcon = (icon: any, theme: string) => {  
  return renderSimpleIcon({
    icon,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e: any) => e.preventDefault(),
    },
    minContrastRatio: theme === 'dark' ? 2 : 1.2,
  });
};

const cloudProps: Omit<ICloud, 'children'> = {
  containerProps: {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: 'default',
    tooltip: 'native',
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: '#0000',
    maxSpeed: 0.04,
    minSpeed: 0.02,
  },
};

const InteractiveIconCloud = () => {
  return (
    <Cloud {...cloudProps}>
      {icons.map((icon) => renderCustomIcon(icon, 'dark'))}
    </Cloud>
  );
};

export default InteractiveIconCloud;