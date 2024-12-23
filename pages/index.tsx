import Automatize from "@/components/Landing/Automatize";
import Credibility from "@/components/Landing/Credibility";
import Hero from "@/components/Landing/Hero";
import Perks from "@/components/Landing/Perks";
import Pricing from "@/components/Landing/Pricing";
import Solution from "@/components/Landing/Solution";
import Layout from "@/layout";
import Head from "next/head";

export default function StorePage() {
  return (
    <>
      <Head>
        <title>Easy Shop | Transforme Seu Negócio em uma Loja Virtual</title>
        <meta name="description" content="Simples, rápido e eficiente. Crie sua loja online e conquiste mais clientes!" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />

        <meta property="og:title" content="Easy Shop | Transforme Seu Negócio em uma Loja Virtual" />
        <meta property="og:description" content="Simples, rápido e eficiente. Crie sua loja online e conquiste mais clientes!" />
        <meta property="og:image" content="https://easyshopbrasil.vercel.app/assets/images/logo/apple-touch-icon.png" />
        <meta property="og:image:width" content="400" />
        <meta property="og:image:height" content="400" />
        <meta property="og:site_name" content="Easy Shop | Transforme Seu Negócio em uma Loja Virtual" />

        <meta property="twitter:title" content="Easy Shop | Transforme Seu Negócio em uma Loja Virtual" />
        <meta property="twitter:description" content="Simples, rápido e eficiente. Crie sua loja online e conquiste mais clientes!" />
        <meta property="twitter:image" content="https://easyshopbrasil.vercel.app/assets/images/logo/apple-touch-icon.png" />
      </Head>

      <Layout>
        <Hero />
        <Solution />
        <Automatize />
        <Perks />
        <Credibility />
        <Pricing />
      </Layout>
    </>
  );
}