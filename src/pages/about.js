import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Seo from "../components/seo"
import SocialLinks from "../components/SocialLinks"

import { MainContent } from "../components/Post/styled"

const AboutPage = () => (
  <Layout>
    <Seo
      title="About"
      description="Página de about, falando um pouco sobre mim"
    />

    <MainContent>
      <h1>Hey everyone!</h1>

      <p>
        Meu nome é Breno Felipe tenho 24 anos e atualmente trabalho como
        Software Developer na{" "}
        <Link target="_blank" to="https://www.cognyte.com/">
          Cognyte
        </Link>
        , gosto de contribuir em projetos open source e resolver problemas
        usando programação.
      </p>

      <p>
        Sou natural de Florianópolis mas fui criado em São Miguel do Oeste no
        oeste de Santa Catarina, então sim, já puxei o "R" 😅. Em 2010 voltei a
        morar em Florianópolis onde moro até o momento.
      </p>

      <p>
        Em 2018 me formei em "Automação Industrial" e atualmente estou cursando
        o último semestre de "Análise e Desenvolvimento de Sistemas."
      </p>

      <p>
        Meus hobbys são além de programar, compor, tocar guitarra, produzir, ver
        filmes (em especial de terror) e jogar video game.
      </p>

      <h4>Sinta-se a vontade para entrar em contato.</h4>
    </MainContent>
    <SocialLinks />
  </Layout>
)

export default AboutPage
