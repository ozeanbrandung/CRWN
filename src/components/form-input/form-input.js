import React from 'react';
//CSS
import './form-input.scss';

const FormInput = ({handleTyping, label, ...props}) => (
    <div className='group'>

        {/* ...props это все те html атрибуты для input-а которые были указаны в FormInput */}
        <input className='form-input' onChange={handleTyping} {...props}/>

        {   //мы не уверены нужен ли нам вообще какой-либо лейбл и получим ли мы его
            label ? 
            //проверим есть ли вообще какой-то value и если да то установим класс
            (<label className={`${props.value.length ? 'shrink' : '' } form-input-label`}>
                {label}
            </label>)
            : null
        }

    </div>
)

export default FormInput;