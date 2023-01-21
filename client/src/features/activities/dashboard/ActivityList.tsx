import { observer } from "mobx-react-lite";
import { SyntheticEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Item, Label, List, Segment } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";

export default observer(function ActivityList() {
  const { activityStore } = useStore();
  const { deleteActivity, activitiesByDate, loading } = activityStore;

  const [target, setTarget] = useState("");

  const handleActivityDelete = (
    e: SyntheticEvent<HTMLButtonElement>,
    id: string
  ) => {
    setTarget(e.currentTarget.name);
    deleteActivity(id);
  };

  return (
    <Segment>
      <Item.Group divided>
        <List>
          {activitiesByDate.map((activity) => (
            <Item key={activity.id}>
              <Item.Content>
                <Item.Header as={"a"}>{activity.title}</Item.Header>
                <Item.Meta>{activity.date}</Item.Meta>
                <Item.Description>
                  <div>{activity.description}</div>
                  <div>
                    {activity.city}, {activity.venue}
                  </div>
                </Item.Description>
                <Item.Extra>
                  <Button
                    as={Link}
                    to={`/activities/${activity.id}`}
                    floated={"right"}
                    content={"View"}
                    color={"blue"}
                  />
                  <Button
                    name={activity.id}
                    loading={loading && target === activity.id}
                    onClick={(e) => handleActivityDelete(e, activity.id)}
                    floated={"right"}
                    content={"Delete"}
                    color={"red"}
                  />
                  <Label
                    basic
                    content={activity.category}
                    style={{ marginTop: "6px" }}
                  />
                </Item.Extra>
              </Item.Content>
            </Item>
          ))}
        </List>
      </Item.Group>
    </Segment>
  );
});
