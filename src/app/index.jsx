import React from 'react';
import NavBar from '../components/nav-bar';
import SkillsSection from '../components/skill-tiles/component';
import styled from 'styled-components';

const Container = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

const SiteContainer = styled.div`
  margin-top: 95px;
  border: 3px solid green;
`;

const App = () => {
  const [toggle, toggleNav] = React.useState(false);

  return (
    <Container>
      <NavBar toggle={toggle} toggleNav={toggleNav} />
      {!toggle && (
        <SiteContainer>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            gravida quam et consequat molestie. Maecenas pulvinar volutpat arcu
            non rutrum. Proin finibus nibh velit, quis porttitor mauris tempor
            ut. Duis ultricies augue eget ante faucibus lacinia. Phasellus eget
            nulla vestibulum risus iaculis interdum. Duis in volutpat metus.
            Vivamus nec scelerisque felis. Ut maximus, ex non vestibulum
            finibus, orci nulla elementum enim, sit amet interdum enim turpis
            sed ipsum. Phasellus eget eros nec turpis molestie elementum at at
            enim. Nam vel auctor risus. Duis tristique nisi sit amet suscipit
            iaculis. Morbi vel tristique purus. Nam bibendum eros tempor ipsum
            pulvinar, id sagittis enim scelerisque. Cras tincidunt, urna quis
            congue sodales, dui dolor maximus nibh, non vulputate magna mi eget
            dui. Sed in ullamcorper tellus, et malesuada elit. Pellentesque ut
            risus est. Donec luctus nisi eget ligula auctor, vel vestibulum
            neque sagittis. Integer faucibus luctus elit, vel pellentesque
            dolor. Curabitur eget dolor mauris. Sed vehicula sollicitudin tellus
            quis volutpat. Pellentesque finibus dapibus feugiat. Cras maximus
            iaculis mattis. Cras dignissim, ligula sed maximus ultrices, urna
            mauris volutpat mauris, vitae rhoncus dolor lorem ut nisl. Maecenas
            pharetra bibendum est sit amet bibendum. Pellentesque felis libero,
            tincidunt id porttitor nec, tempor ut justo. Etiam erat lorem,
            molestie at rutrum sit amet, tempus vitae enim. Proin massa lacus,
            porta vel volutpat in, egestas id massa. Morbi pellentesque
            elementum porttitor. Curabitur malesuada lacus vitae est consequat
            mollis. Nulla eu neque a mauris eleifend rutrum. Vivamus sed eros
            lacinia felis feugiat finibus ac ac augue. Maecenas interdum
            volutpat semper. Sed fermentum non mi vitae pellentesque. Proin id
            leo suscipit, varius magna id, ultricies sem. Morbi placerat elit
            nec tempus auctor. Etiam mollis quis magna at aliquet. Aenean ipsum
            purus, semper vitae justo et, mattis malesuada erat. Donec ut lorem
            nec metus efficitur scelerisque quis eget sapien. Fusce blandit
            laoreet ultricies. Fusce at odio purus. Integer efficitur placerat
            erat et pretium. Praesent purus erat, lacinia quis tellus id,
            sodales placerat urna. Nam at scelerisque enim. Nullam semper mattis
            arcu ut auctor. Nam eu mattis justo. Pellentesque lacinia velit sit
            amet pretium consectetur. Aenean feugiat odio efficitur, feugiat
            nulla nec, euismod tellus. Nam ornare arcu mauris. Aliquam
            condimentum sem tellus. Proin molestie, nibh sed fermentum
            fermentum, erat ex pretium mi, vitae malesuada dolor eros nec mi.
            Proin suscipit metus eu ultrices fringilla. Duis sit amet mollis
            lorem, nec condimentum dui. Fusce viverra fermentum fringilla.
            Vivamus euismod fermentum nunc sed malesuada. Donec tempus nec
            libero nec fermentum. Vivamus aliquet posuere maximus.
          </p>
          <SkillsSection />
        </SiteContainer>
      )}
    </Container>
  );
};

export default App;
