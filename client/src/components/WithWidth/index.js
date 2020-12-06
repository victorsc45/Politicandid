import React from 'react';
import PropTypes from 'prop-types';
import withWidth from '@material-ui/core/withWidth';
import Typography from '@material-ui/core/Typography';

const components = {
    // sm: 'MuiCardContent-root',
    // md: 'MuiCardContent-root',
    lg: 'MuiCardContent-root',
};

function WithWidth(props) {
    const { width } = props;
    const Component = components[width] || 'span';

    return (
        <Typography>
            <Component width={{ width }}></Component>
        </Typography>
    );
}

WithWidth.propTypes = {
    width: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs']).isRequired,
};

export default withWidth()(WithWidth);