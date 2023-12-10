import { Container, SectionImage, SectionText } from "./components/atoms"
import { Header, Section } from "./components/molecules/"
function App() {
  const AboutImage = 'https://placehold.co/1240x1080?text=Foto+da+equipe+vale+viagens'

  return (
    <Container> 
      <Header />
      <Section id='sobre' title="Sobre a vale viagens" position="start" delay={0.5}>
        <SectionText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam omnis velit suscipit culpa dignissimos, eius temporibus animi soluta nisi cumque eligendi at reiciendis atque odit nulla consequuntur molestias porro necessitatibus.
          Vel excepturi quaerat itaque sit quo similique minus non deleniti necessitatibus deserunt ipsum earum laudantium animi quod repellat quidem ducimus at alias, omnis dicta! Maxime consectetur eligendi officiis dignissimos cupiditate.
          Quod iusto animi laborum magni sapiente id inventore impedit quidem ex tempora quas illo voluptatibus dolor quisquam iste repellendus est ducimus dolore recusandae, eos atque cum! Sit temporibus maxime esse!
          Maiores a mollitia quisquam laboriosam, enim quasi id, molestias modi voluptas officiis nostrum consequatur perferendis sunt quibusdam eveniet ipsa odit aut. Distinctio nisi magnam labore, aut enim est quod ipsum?
          Qui quis commodi quae ab sapiente odit dolores saepe nobis officia, quod deserunt quas laborum aliquid sed exercitationem, quia quidem porro suscipit neque delectus consequatur et obcaecati voluptatibus nulla. Eaque.
          Esse repellendus sint corrupti delectus eius minima harum debitis, dolorem assumenda sed asperiores numquam eligendi quasi, corporis ex laborum unde! Neque, rerum. Esse saepe magnam ea voluptas porro distinctio adipisci!
          Labore, repellat qui nobis officia sapiente necessitatibus suscipit amet tenetur voluptas odio dolorem deleniti autem iure laborum. Hic officia consectetur quibusdam consequuntur quam, dicta nemo unde, incidunt magni, reiciendis mollitia?
          Unde eos dolor enim voluptatibus, dicta modi amet laboriosam voluptatem recusandae ex! Dolore debitis necessitatibus nam tempore magni rem harum voluptatum non impedit, consequuntur laboriosam enim laudantium tenetur rerum quis!
          Placeat praesentium iure at, excepturi libero assumenda sequi nisi laudantium totam mollitia, ut fugiat sapiente? Numquam velit nobis praesentium nisi quia, aut necessitatibus vero tenetur sit in amet odit fugit.
          Nobis animi nulla odio eum totam dolorem asperiores aperiam quidem! Explicabo dicta cupiditate, possimus harum hic ut? Iusto, ex dolor! Provident cupiditate earum numquam quis, iste deleniti. Numquam, doloremque accusamus?
        </SectionText>
        <SectionImage image={AboutImage} />
      </Section>
    </Container>
  )
}

export default App
