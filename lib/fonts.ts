import localFont from "next/font/local";

export const hobostd = localFont({
    src: [
        {
            path: "../public/fonts/HoboStd.woff",
            weight: "400",
            style: "normal",
        },
    ],
    variable: "--font-hobostd",
    display: "swap",
});

// export const naskh = localFont({
//     src: [
//         {
//             path: "../public/fonts/NotoNaskhArabic-Regular.ttf",
//             weight: "400",
//             style: "normal",
//         },
//         {
//             path: "../public/fonts/NotoNaskhArabic-Medium.ttf",
//             weight: "500",
//             style: "normal",
//         },
//     ],
//     variable: "--font-naskh",
//     display: "swap",
// });