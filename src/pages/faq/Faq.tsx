import React from "react"
import './faqStyles.css'
import { useForm } from "react-hook-form"
import {
  Background,
  ButtonGroup,
  Error,
  Form,
  Img,
  ImgContainer,
  FaqGrid,
  GridItem,
  GridLastItem,
  HelpContainer,
  AltHelpContainer,
  HelperContainer,
  FaqPage,
  TitleContainer,
  InputDiv,
  PopUp,
  PopDiv,
  PopUpContainer,
  ButtonsSection,
} from "./Faq.styles"
import {Container} from 'src/styles/styles'
import { Title } from "@components/Text"
import { Input, Label } from "@components/form/Input"
import { Button } from "@components/form/Button"
import { RegisterPic, FaqPrincipal } from "@assets/index"
import { zodResolver } from "@hookform/resolvers/zod"
import { registerUserSchema } from "@schemas/registerUser.schema"
import { z } from "zod"
import { SwitchInput, SwitchRoot } from "@components/form/Switch"
import { useMutation } from "react-query"
import { instance } from "src/API/calls"
import useUserStore from "@stores/UseUserStore"
import { useNavigate } from "react-router"
import { AxiosError } from "axios"
import { faqCadastro, faqTrocas, faqPerfil } from "./FaqScript"
type fieldValues = z.infer<typeof registerUserSchema>

const Faq = () => {
  const { setUserData, setIsLoggedIn } = useUserStore()
  const nav = useNavigate()
  const [isStudent, setIsStudent] = React.useState(false)
  const [on, setOn] = React.useState(false)
  const [isAnimating, setIsAnimating] = React.useState(true)
  const [popText, setPopText] = React.useState('')
  const [popTitle, setPopTitle] = React.useState('')
  const [bIndex, setBIndex] = React.useState(10)

  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    const target = event.target as HTMLAnchorElement;
    if (target) {
      if(bIndex === 10) {
        const text = faqTrocas[Number(target.classList[0])]
        if(text) {
          setPopTitle(text.q)
          setPopText(text.a)
          setOn(!on)
        } 
      } else if(bIndex === 11) {
        const text = faqCadastro[Number(target.classList[0])]
        if(text) {
          setPopTitle(text.q)
          setPopText(text.a)
          setOn(!on)
        } 
      } else if(bIndex === 12) {
        const text = faqPerfil[Number(target.classList[0])]
        if(text) {
          setPopTitle(text.q)
          setPopText(text.a)
          setOn(!on)
        } 
      }
        
        
    }
  }

  function handleFaqClick(event: React.MouseEvent<HTMLButtonElement>) {
    const target = event.target as HTMLButtonElement
    if(target) {
      const bNumber = Number(target.classList[0]) 

      setBIndex(bNumber)

    }
  }

React.useEffect(() => {
  
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
    }, 800);
  

}, [])

  return (

    <>
    <FaqPage>
      {
        on ? 
        <PopUpContainer>
        <PopUp>
          
          <PopDiv>
            <h1>{popTitle}</h1>
            <p>{popText}</p>
          </PopDiv>
        
          <button onClick={() => setOn(!on)}>Fechar</button>
          
        </PopUp>
        </PopUpContainer>
        : ''
      }
    <ImgContainer>
     <Img src={FaqPrincipal} />
     </ImgContainer>
      <TitleContainer>
      <Title>Perguntas Frequentes</Title>
      </TitleContainer>
      <ButtonsSection>
        <button style={bIndex === 10 ? {backgroundColor: '#c17359'} : {} } className="10" onClick={handleFaqClick}>trocas</button>
        <button style={bIndex === 11 ? {backgroundColor: '#c17359'} : {} } className="11" onClick={handleFaqClick}>cadastro</button>
        <button style={bIndex === 12 ? {backgroundColor: '#c17359'} : {} } className="12" onClick={handleFaqClick}>perfil</button>
      </ButtonsSection>
        <div>
          {bIndex === 10 &&
           <FaqGrid className={bIndex === 10  ? 'animeRight' : 'animeLeft' }>
          <GridItem>
              <h3>Dúvidas sobre as trocas</h3>
              <p>Existe algum custo para listar um livro para troca?</p>
              <a className="0" onClick={handleClick}>Mais informações</a>
          </GridItem>
          <GridItem>
              <h3>Dúvidas sobre as trocas</h3>
              <p>Existem restrições quanto ao tipo de livro que posso trocar?</p>
              <a className="1" onClick={handleClick}>Mais informações</a>
          </GridItem>
          <GridItem>
              <h3>Dúvidas sobre as trocas</h3>
              <p>O que acontece se eu não receber o livro após uma troca confirmada?</p>
              <a className="2" onClick={handleClick}>Mais informações</a>
          </GridItem>
          <GridItem>
              <h3>Dúvidas sobre garantias</h3>
              <p>O que devo fazer se o livro que recebi estiver danificado?</p>
              <a className="3" onClick={handleClick}>Mais informações</a>
          </GridItem>
          <GridItem>
              <h3>Dúvidas sobre garantias</h3>
              <p> O site oferece algum tipo de garantia para as trocas?</p>
              <a className="4" onClick={handleClick}>Mais informações</a>
          </GridItem>
          <GridItem>
              <h3>Dúvidas sobre as trocas</h3>
              <p>Como funciona o processo de troca de livros?</p>
              <a className="5" onClick={handleClick}>Mais informações</a>
          </GridItem>
          <GridItem>
              <h3>Dúvidas sobre trocas</h3>
              <p>Como posso entrar em contato com outro usuário para propor uma troca?</p>
              <a className="6" onClick={handleClick}>Mais informações</a>
          </GridItem>
          <GridLastItem>
              <h3>Não encontrou sua dúvida?</h3>
              <p>Entre em contato com nossa equipe</p>
              <a className="7" onClick={handleClick}>Entrar em contato</a>
          </GridLastItem>
        
    </FaqGrid> }
    
    {bIndex === 11 &&
           <FaqGrid className={bIndex === 11  ? 'animeRight' : 'animeLeft' }>
          <GridItem>
              <h3>Dúvidas sobre cadastro</h3>
              <p>Como faço para me cadastrar no site?</p>
              <a className="0" onClick={handleClick}>Mais informações</a>
          </GridItem>
          <GridItem>
              <h3>Dúvidas sobre cadastro</h3>
              <p> Como faço para fazer login na minha conta?</p>
              <a className="1" onClick={handleClick}>Mais informações</a>
          </GridItem>
          <GridItem>
              <h3>Dúvidas sobre cadastro</h3>
              <p>Quais informações são necessárias para criar um perfil de usuário?</p>
              <a className="2" onClick={handleClick}>Mais informações</a>
          </GridItem>
          <GridItem>
              <h3>Dúvidas sobre cadastro</h3>
              <p>Posso me cadastrar usando minha conta de mídia social?</p>
              <a className="3" onClick={handleClick}>Mais informações</a>
          </GridItem>
          <GridItem>
              <h3>Dúvidas sobre cadastro</h3>
              <p> Como adicionar a imagem da capa?</p>
              <a className="4" onClick={handleClick}>Mais informações</a>
          </GridItem>
          <GridItem>
              <h3>Dúvidas sobre cadastro</h3>
              <p> A capa do livro não aparece, o que fazer?</p>
              <a className="5" onClick={handleClick}>Mais informações</a>
          </GridItem>
          <GridItem>
              <h3>Dúvidas sobre cadastro</h3>
              <p> Esqueci minha senha. O que devo fazer?</p>
              <a className="6" onClick={handleClick}>Mais informações</a>
          </GridItem>
          <GridLastItem>
              <h3>Não encontrou sua dúvida?</h3>
              <p>Entre em contato com nossa equipe</p>
              <a className="7" onClick={handleClick}>Entrar em contato</a>
          </GridLastItem>
        
    </FaqGrid> }

    {bIndex === 12 &&
           <FaqGrid className={bIndex === 12  ? 'animeRight' : 'animeLeft' }>
          <GridItem>
              <h3>Dúvidas sobre meu perfil</h3>
              <p>É possível alterar minhas informações de perfil depois de cadastrado?</p>
              <a className="0" onClick={handleClick}>Mais informações</a>
          </GridItem>
          <GridItem>
              <h3>Dúvidas sobre meu perfil</h3>
              <p>Preciso ter um perfil de usuário para trocar livros?</p>
              <a className="1" onClick={handleClick}>Mais informações</a>
          </GridItem>
          <GridItem>
              <h3>Dúvidas sobre meu perfil</h3>
              <p>Como faço para adicionar um livro à minha lista de trocas?</p>
              <a className="2" onClick={handleClick}>Mais informações</a>
          </GridItem>
          <GridItem>
              <h3>Dúvidas sobre meu perfil</h3>
              <p>Como favoritar um livro?</p>
              <a className="3" onClick={handleClick}>Mais informações</a>
          </GridItem>
          <GridItem>
              <h3>Dúvidas sobre meu perfil</h3>
              <p>Posso navegar pelos livros disponíveis sem fazer login?</p>
              <a className="4" onClick={handleClick}>Mais informações</a>
          </GridItem>
          <GridItem>
              <h3>Dúvidas sobre meu perfil</h3>
              <p>Como encontro outros usuários interessados em trocar livros?</p>
              <a className="5" onClick={handleClick}>Mais informações</a>
          </GridItem>
          <GridItem>
              <h3>Dúvidas sobre meu perfil</h3>
              <p>O site possui um sistema de classificação de usuários?</p>
              <a className="6" onClick={handleClick}>Mais informações</a>
          </GridItem>
          <GridLastItem>
              <h3>Não encontrou sua dúvida?</h3>
              <p>Entre em contato com nossa equipe</p>
              <a className="7" onClick={handleClick}>Entrar em contato</a>
          </GridLastItem>
        
    </FaqGrid> }
        </div>


    </FaqPage>

 
    </>
  )
}

export default Faq