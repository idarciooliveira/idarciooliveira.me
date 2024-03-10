import localFont from "next/font/local";

const fonts = localFont({
    src: [
        {
            path: './Biotif-Regular.ttf',
            weight: '400',
            style: 'normal'
        },
        {
            path: './Biotif-RegularItalic.ttf',
            weight: '400',
            style: 'italic'
        },
        {
            path: './Biotif-SemiBold.ttf',
            weight: '700',
            style: 'italic'
        }
    ],
    variable: '--font-sans'
})

export default fonts