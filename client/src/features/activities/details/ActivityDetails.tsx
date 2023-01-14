import React from "react";
import { Image, Card, Icon, Button } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface Props {
    activity: Activity
    cancelSelectedActivity: () => void;
}

export default function ActivityDetails({activity, cancelSelectedActivity}: Props) {
  return (
    <Card fluid>
      <Image src={`/assets/categoryImages/${activity.category}.jpg`} />
      <Card.Content>
        <Card.Header>{activity.title}</Card.Header>
        <Card.Meta>
          <span>{activity.date}</span>
        </Card.Meta>
        <Card.Description>{activity.description}</Card.Description>
        <Card.Content extra>
            <Button.Group widths={'2'}>
                <Button basic color={'blue'} content={'Edit'}/>
                <Button onClick={cancelSelectedActivity} basic color={'grey'} content={'Cancel'} />
            </Button.Group>
        </Card.Content>
      </Card.Content>
    </Card>
  );
}
