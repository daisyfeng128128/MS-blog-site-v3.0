import React from 'react';
import CommonHeaderLeft   from '../components/common_header_left';
import CommonHeaderCenter from '../components/common_header_center';
import CommonHeaderRight  from '../components/common_header_right';

class CommonHeader extends React.Component {
    render() {
        return (
            <nav className = "nav-container">
                <div className = "nav-content">
                    <CommonHeaderLeft />
                    <div className = "nav-body">
                        <CommonHeaderCenter changeDirectoryFilter = { this.props.changeDirectoryFilter } />
                        <CommonHeaderRight />
                    </div>
                </div>
            </nav>
        );
    };
};

export default CommonHeader;