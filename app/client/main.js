import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
;import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Menu, Icon, Dropdown, Image, Segment, Grid } from 'semantic-ui-react';

const src1 = '//cdn.shopify.com/s/files/1/1035/5187/files/logoshort_800x.png?v=1543956749';

class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
        <Container>
        <Menu.Item fitted><Icon name="facebook f" /></Menu.Item>
        <Menu.Item fitted><Icon name="twitter" /></Menu.Item>
        <Menu.Item fitted><Icon name="pinterest" /></Menu.Item>
        <Menu.Item fitted><Icon name="instagram" /></Menu.Item>
        <Menu.Item fitted position="right"><Icon name="home" /></Menu.Item>
        <Menu.Item fitted><Icon name="search" /></Menu.Item>
        <Menu.Item fitted><Icon name="user" /></Menu.Item>
        <Dropdown item text="MY CART 0" icon="shop">
        <Dropdown.Menu>
        <Dropdown.Item>My cart is currently empty.</Dropdown.Item>
    </Dropdown.Menu>
    </Dropdown>
    </Container>
    </Menu>
  );
  }
}

class IslandSnowLogo extends React.Component {
  render() {
    return (
        <Segment>
        <Image src={src1} size='medium' centered />
    </Segment>

  );
  }
}

class MiddleMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="middlemenu">
        <Container>
        <Grid columns = {5}>
        <Grid.Row>
        <Grid.Column>
        <Menu.Item className='header'>MEN</Menu.Item>
        </Grid.Column>
        <Grid.Column textAlign='center'>
        <Menu.Item className='header'>WOMEN</Menu.Item>
        </Grid.Column>
        <Grid.Column>
        <Menu.Item className='header'>KIDS</Menu.Item>
        </Grid.Column>
        <Grid.Column>
        <Menu.Item className='header'>BRANDS</Menu.Item>
        </Grid.Column>
        <Grid.Column>
        <Menu.Item className='header'>SALE</Menu.Item>
        </Grid.Column>
        </Grid.Row>
        </Grid>
        </Container>
        </Menu>
  )
  }
}

class FullWidthImage extends React.Component {
  render() {
    return (
        <Image src='http://courses.ics.hawaii.edu/ics314s20/morea/ui-frameworks/experience-islandsnow-video-snapshot.png' fluid />
  )
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
    <Header as="h1">FooterMenu</Header>
  )
  }
}

class IslandSnow extends React.Component {

  render() {
    return (
        <div>
        <TopMenu/>
        <IslandSnowLogo/>
        <MiddleMenu/>
        <FullWidthImage/>
        <FooterMenu/>
        </div>
  );
  }
}

ReactDOM.render(<IslandSnow/>, document.getElementById('root'));
