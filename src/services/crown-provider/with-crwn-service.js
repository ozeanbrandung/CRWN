import React from 'react';
//Context
import {CrwnServiceConsumer} from './crwn-service-context';

//ЭТО САМОПИСНЫЙ HOC
//функция, которая возвращает функцию, которая принимает компонент 
export const withCrwnService = () => (WrappedComponent) => {
    return (props) => (
        <CrwnServiceConsumer>
            {
                (crwnService) => {
                    //просто возвращаем компонент с теми пропсами что были и + сервисом
                    return <WrappedComponent {...props} crwnService={crwnService} />
                }
            }
        </CrwnServiceConsumer>
    )
}