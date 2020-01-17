/**
 * @author Victor Andrade <victor.andrade@caixamagica.pt>,
 *
 * @description Higher Order Component Registry Retorna um componente com base ao inicial retornando o valores que sao necessarios ao compenente final
 * @see reactjs HOC docs: https://reactjs.org/docs/higher-order-components.html
 *
 * @version 20200116
 * @since 20200116 Initial release
 *
 */

import React, { Component } from 'react';

/**
 * @tutorial https://www.udemy.com/react-js-redux-es6-completo-de-0-a-experto-espanol/learn/lecture/9104208#overview
 *              || https://www.udemy.com/react-js-redux-es6-completo-de-0-a-experto-espanol/learn/lecture/9078314#overview
 *
 * @see redux-form docs: https://redux-form.com/8.2.2/docs/api/
 * @param WrappedComponent
 *
 */
export const setPropsAsInitial = WrappedComponent => (
    class extends Component {
        render() {
            return <WrappedComponent {...this.props}
                                     initialValues={this.props}
                                     enableReinitialize />;
        }
    }
);
