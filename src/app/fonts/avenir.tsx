import localFont from 'next/font/local'

const avenir = localFont({
    src: [
        {
            path: './avenir_light.ttf',
            weight: '300',
            style: 'normal',
        },
        {
            path: './avenir_regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: './avenir_medium.ttf',
            weight: '500',
            style: 'normal',
        },
        {
            path: './avenir_bold.ttf',
            weight: '700',
            style: 'normal',
        },
    ],
    variable: '--font-avenir',
})

export default avenir
