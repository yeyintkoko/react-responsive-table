import { data } from 'autoprefixer'
import './Text.css'

/**
 * This is the base component of all text used in the table component.
 * This component contains radio/checkbox for selection as an option.
 */

export interface Props {
    children?: React.ReactNode
    selectable?: boolean
    type?: 'checkbox' | 'radio'
    selected?: boolean
    fontType?: 'body' | 'header'
    display?: 'section' | 'table'
    data?: string[]
}

const Text: React.FC<Props> = ({
    children,
    selectable = false,
    selected = false,
    type = 'radio',
    fontType = 'body',
    display = 'table',
    data = [],
}) => {
    const RadioUnchecked = (
        <img src="/radio_unchecked.png" className="select-icon" />
    )
    const RadioChecked = (
        <img src="/radio_checked.png" className="select-icon" />
    )
    const CheckBoxChecked = (
        <img src="/checkbox_checked.png" className="select-icon" />
    )
    const CheckBoxUnchecked = (
        <img src="/checkbox_unchecked.png" className="select-icon" />
    )
    const selectedInput = { radio: RadioChecked, checkbox: CheckBoxChecked }
    const unselectedInput = {
        radio: RadioUnchecked,
        checkbox: CheckBoxUnchecked,
    }
    const Image = selected ? selectedInput[type] : unselectedInput[type]
    const fonts = {
        body: 'body-font',
        header: 'header-font',
    }

    const renderText = (text: string, index: number) => {
        return <div key={index}>{text}</div>
    }

    if (display === 'table') {
        return (
            <div
                className={fonts[fontType]}
                style={{ display: 'flex', alignItems: 'center' }}
            >
                {selectable && Image}

                {children}
            </div>
        )
    }

    return (
        <div
            className={fonts[fontType]}
            style={{ display: 'flex', alignItems: 'flex-start' }}
        >
            {selectable && Image}

            <div className="section-content">{data.map(renderText)}</div>
        </div>
    )
}

export default Text
