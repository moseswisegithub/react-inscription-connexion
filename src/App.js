 import React from "react";
 import * as Components from './Components';

 function App() {
     const [signIn, toggle] = React.useState(true);
      return(
          <Components.Container>
              <Components.SignUpContainer signinIn={signIn}>
                  <Components.Form>
                      <Components.Title>Inscription</Components.Title>
                      <Components.Input type='text' placeholder='Nom' />
                      <Components.Input type='text' placeholder='Prénom' />
                      <Components.Input type='email' placeholder='Email' />
                      <Components.Input type='password' placeholder='Mot de passe' />
                      <Components.Button>Inscription</Components.Button>
                  </Components.Form>
              </Components.SignUpContainer>

              <Components.SignInContainer signinIn={signIn}>
                   <Components.Form>
                       <Components.Title>Connexion</Components.Title>
                       <Components.Input type='email' placeholder='Email' />
                       <Components.Input type='password' placeholder='Mot de passe' />
                       <Components.Anchor href='#'>Mot de passe oublié</Components.Anchor>
                       <Components.Button>S'identifier</Components.Button>
                   </Components.Form>
              </Components.SignInContainer>

              <Components.OverlayContainer signinIn={signIn}>
                  <Components.Overlay signinIn={signIn}>

                  <Components.LeftOverlayPanel signinIn={signIn}>
                      <Components.Title>Bienvenue</Components.Title>
                      <Components.Paragraph>
                      Pour rester en contact avec nous, veuillez vous connecter avec vos informations personnelles
                      </Components.Paragraph>
                      <Components.GhostButton onClick={() => toggle(true)}>
                      S'identifier
                      </Components.GhostButton>
                      </Components.LeftOverlayPanel>

                      <Components.RightOverlayPanel signinIn={signIn}>
                        <Components.Title>Hello!</Components.Title>
                        <Components.Paragraph>
                        Entrez vos données personnelles et commencez votre voyage avec nous
                        </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(false)}>
                            S'identifier
                            </Components.GhostButton> 
                      </Components.RightOverlayPanel>
  
                  </Components.Overlay>
              </Components.OverlayContainer>

          </Components.Container>
      )
 }

 export default App;