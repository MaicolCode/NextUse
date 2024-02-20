import AboutMe from '@/components/Home/AboutMe';
import Layout from '@/components/Layout';
import Hero from '@/components/Home/Hero';
import Services from '@/components/Home/Services';
import Head from "next/head";

export default function Home() {
  return (
    <Layout title='Home' description={'Descripción home'}>
      <main>
        <Hero />        
        <AboutMe />
        <Services />
      </main>
    </Layout>
  );
}
