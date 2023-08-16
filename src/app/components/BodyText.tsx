import Text, { Props } from './Text/Text'

const BodyText: React.FC<Props> = (props) => {
    return <Text {...props} fontType="body" />
}

export default BodyText
