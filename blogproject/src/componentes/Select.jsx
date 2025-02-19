import React, {useId} from 'react'

function Select({
    options, lable, classname = '', ...props
}, ref) {
    const id = useId()
    return (
        <div className='w-full'>
            {lable && <lable htmlFor={id} className=''></lable>}
            <select {...props}
                id = {id}
                ref = {ref}
                className={`px-3 py-2 rounded-lg bg-white text-black outline-non focus:bg-gray-50 duration-200 border border-gray-200 w-full ${classname}`} 
            >
                {options?.map((option) => (
                    <option key = {option} value = {option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default React.forwardRef(Select)