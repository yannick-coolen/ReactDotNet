import { NavLink } from "react-router-dom";
import { Menu, Container, Button } from "semantic-ui-react";

export default function NavBar() {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item as={NavLink} to={"/"} header>
          <img src="/assets/logo.png" alt="logo" style={{ marginRight: 10 }} />
          Reactivities
        </Menu.Item>
        <Menu.Item as={NavLink} to={"/activities"} name="Activities" />
        <Menu.Item as={NavLink} to={"/errors"} name="Errors" />
        <Menu.Item>
          <Button
            as={NavLink}
            to={"/createactivity"}
            positive
            content="Create Activity"
          />
        </Menu.Item>
      </Container>
    </Menu>
  );
}
