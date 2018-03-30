import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

export default (props) => {
    return (
        <Button onClick={() => props.onClick()} icon fluid color={props.addingItem ? "red" : "green"}>
            <span> {props.addingItem ? "Cancel" : "Film toevoegen"} </span> <Icon fitted size="small" name={props.addingItem ? "delete" : "plus square"} />
        </Button>
    )
}

