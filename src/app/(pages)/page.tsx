import { lazy, Suspense } from 'react';
import Loading from '@/components/common/Loading';
import Canvas3D from '@/components/3d/Canvas3D';

const Hero = lazy(() => import('@/components/sections/Hero'));
const Projects = lazy(() => import('@/components/sections/Projects'));
const About = lazy(() => import('@/components/sections/About'));
const Skills = lazy(() => import('@/components/sections/Skills'));
const Contact = lazy(() => import('@/components/sections/Contact'));

export default function Home() {
  return (
    <>
      <Canvas3D />
      <Suspense fallback={<Loading />}>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </Suspense>
    </>
  );
}
