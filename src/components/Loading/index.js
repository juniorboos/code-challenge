/**
 * @author Miguel Cervera <miguel.cervera@caixamagica.pt>
 *
 * @description Component Context - Individual Module Component
 * @article about ContainerComponent https://medium.com/@learnreact/container-components-c0e67432e005#.1a9j3w1jl
 *
 * @version 20191119
 * @since 20191119 Adding Modules
 *
 */

import React from 'react';
import CircularProgress from "@material-ui/core/CircularProgress";

//Component
const Loading = ({props}) => {
    let _size = !!props && !!props.size ? props.size : 30;
    return (
    <div style={{textAlign: "center", verticalAlign: 'middle', display: 'tableCell', marginTop: '7%'}}>
        <CircularProgress size={_size}/>
    </div>)
};

export default Loading;