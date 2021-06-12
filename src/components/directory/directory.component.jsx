import React from 'react';
import MenuItem from '../menut-item/menu-item.component';
import './directory.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selector';

const Directory = ({ sections }) => (
    <div className="directory-menu">
        {
            sections.map(({ id, ...parameters }) =>
                <MenuItem key={id} {...parameters} />
            )
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);