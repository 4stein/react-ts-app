import React, {useRef} from 'react'

interface TodoFormProps {
    onAdd(title: string): void
}

export const TodoForm: React.FC<TodoFormProps> = (props) => {

    const ref = useRef<HTMLInputElement>(null)

    const keyPressHandler = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            props.onAdd(ref.current!.value)
            ref.current!.value = ''
        }
    }

    return (
        <div className="input-field mt3">
            <input
                ref={ref}
                type="text" id="title"
                placeholder="Enter Name"
                onKeyPress={keyPressHandler}/>
            <label htmlFor="title" className="active">Write something and Enter</label>
        </div>
    )
}