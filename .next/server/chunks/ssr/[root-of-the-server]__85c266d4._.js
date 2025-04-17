module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/src/app/proyects.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("{\"projects\":[{\"name\":\"GetaPro\",\"imagePath\":\"/images/getapro.png\",\"content\":\"GetaPro es una aplicación profesional para gestionar proyectos de investigación. Surgió como un proyecto escolar, pero evolucionó en un remake elegante de una versión previa... menos funcional, digamos. Permite colaboración en tiempo real, almacenamiento con Supabase, y cuenta con una IA integrada que asiste durante todo el proceso. Usé Next.js y Tailwind para construir una plataforma sólida y moderna.\",\"technologies\":[\"Next.js\",\"Tailwind\",\"Supabase\",\"IA\"]},{\"name\":\"BeeGreat\",\"imagePath\":\"/images/beegreat.png\",\"content\":\"BeeGreat es una app diseñada para ayudar a estudiantes a prepararse para una competencia local de deletreo en inglés. Fue desarrollada usando Next.js con la intención de probar el tan mencionado 'vibe coding'… pero, como suele pasar, terminé haciendo absolutamente todo yo. Un proyecto educativo con una pizca de resignación y bastante café.\",\"technologies\":[\"Next.js\",\"Tailwind\",\"Framer Motion\",\"Speech API\"]},{\"name\":\"WTranscriber\",\"imagePath\":\"/images/wtranscriber.png\",\"content\":\"WTranscriber es un pequeño SaaS gratuito que permite transcribir audio y video usando la magia de Whisper, la API de OpenAI. Hecho con React, es útil, funcional y está esperando una futura mejora... como el sueño de todo programador que vive en modo 'beta perpetua'.\",\"technologies\":[\"React\",\"Tailwind\",\"Flask\",\"Whisper API\"]},{\"name\":\"Conia\",\"imagePath\":\"/images/conia.png\",\"content\":\"Conia es una app web para gestionar proyectos escolares, desarrollada en React y Vite. Permite crear equipos, asignar tareas, y consultar una IA que parece saber más del proyecto que los propios miembros. Es como tener un Jarvis en modo académico, pero sin sarcasmo. O al menos, no tanto como yo.\",\"technologies\":[\"React\",\"Vite\",\"Tailwind\",\"Firebase\",\"IA\"]}]}"));}}),
"[project]/src/app/card.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Card)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.0_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/image.js [app-ssr] (ecmascript)");
;
;
function Card({ project, setModal, setShowModal }) {
    const { name, imagePath } = project;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        role: "button",
        tabIndex: 0,
        className: "bg-gray-700 rounded-xl relative w-full h-full min-h-48 flex flex-col justify-center items-center",
        onClick: ()=>{
            setModal(project);
            setShowModal(true);
        },
        onKeyDown: (e)=>{
            if (e.key === "Enter") {
                setModal(project);
                setShowModal(true);
            }
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute h-full w-full rounded-xl bg-gray-600 hover:-translate-y-16 transition-transform duration-300 ease-in-out overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    src: imagePath,
                    alt: name,
                    fill: true,
                    sizes: "(max-width: 768px) 100vw, 50vw",
                    className: "object-cover rounded-xl"
                }, void 0, false, {
                    fileName: "[project]/src/app/card.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/card.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$0_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center items-end p-4 text-2xl font-bold w-full h-full",
                children: name
            }, void 0, false, {
                fileName: "[project]/src/app/card.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/page.tsx [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const e = new Error(`Could not parse module '[project]/src/app/page.tsx'

Unexpected token `div`. Expected jsx identifier`);
e.code = 'MODULE_UNPARSEABLE';
throw e;}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__85c266d4._.js.map