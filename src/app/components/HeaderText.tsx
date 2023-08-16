import Text, { Props } from './Text/Text'

const HeaderText: React.FC<Props> = (props) => {
    return <Text {...props} fontType="header" />
}

export default HeaderText
