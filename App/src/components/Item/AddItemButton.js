import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

export default (props) => {
    return (
        <Button onClick={() => props.onClick()} icon fluid color="green">
            <span>Film toevoegen </span> <Icon fitted size="small" name='plus square' />
        </Button>
    )
}
