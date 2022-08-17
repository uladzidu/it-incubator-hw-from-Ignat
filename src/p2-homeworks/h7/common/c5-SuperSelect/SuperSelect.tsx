import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import './superSelect.css'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: any[] = options ? options.map((elem, index) =>

        <option key={index}>{elem}</option>

    ) : []

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        // onChange, onChangeOption
        if (onChange) {
            onChange(e)
        }
        if (onChangeOption) {
            onChangeOption(e.currentTarget.value)
        }
    }
    return (
        <select className={'selectClass'} onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
