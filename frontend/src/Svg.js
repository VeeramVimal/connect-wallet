import { FaAngleDoubleRight } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';
import $ from "jquery"

import './App.css';
import { useEffect } from 'react';

function App() {

    useEffect(() => {
        $(document).ready(function () {
            $("#wireframe path").hover(function () {
                $(this).hide();
            });

            $("#baloon path:first-child").hover(function () {

                $(this).attr("fill", "none").attr("stroke", "none");
                $(this).parent().addClass("show-div")
                setTimeout(() => {
                    $(this).parent().hide()
                }, 3000);
            });


        });
    });
    return (
        <div className="App">


            <section className='banner-svg-section fixed-'>
                <div className='container'>
                    <div className='row text-center'>
                        <div className='col'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="477.247" height="578.815" viewBox="0 0 477.247 578.815">
                                <g id="hover" transform="translate(-617.014 -295.23)">
                                    <path id="Path_211" data-name="Path 211" d="M2824.22,440.623l47.032-4.971-18.991-41.169Z" transform="translate(-1990)" fill="#1f55bf" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_212" data-name="Path 212" d="M2871.89,435.525l7.01-35.816-26.384-5.481Z" transform="translate(-1990.254 0.255)" fill="#1d53b9" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_213" data-name="Path 213" d="M2879.28,400.219l51.88,62.581,25.747-42.953Z" transform="translate(-1990)" fill="#318cf4" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_214" data-name="Path 214" d="M2886.17,395.121l-7.01,5.1-26.894-5.991Z" transform="translate(-1990)" fill="#19459b" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_215" data-name="Path 215" d="M2936.39,395.248l20.9,24.854-77.877-20.138,7.775-4.716Z" transform="translate(-1990)" fill="#266bdd" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_216" data-name="Path 216" d="M2965.83,401.494l-8.54,18.991-21.158-25.364Z" transform="translate(-1990)" fill="#2771ed" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_217" data-name="Path 217" d="M2966.39,401.155s25.341,9.654,29.489,12.972c-.075-.151-38.841,6.335-38.539,6.335S2966.39,401.155,2966.39,401.155Z" transform="translate(-1990)" fill="#3492fb" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_218" data-name="Path 218" d="M2956.91,420.485l46.015,19.933,8.922-16.374s-15.785-10-16.079-10S2956.91,420.485,2956.91,420.485Z" transform="translate(-1990)" fill="#40b2fe" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_219" data-name="Path 219" d="M3011.84,424.535" transform="translate(-1990)" fill="none" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_220" data-name="Path 220" d="M2956.91,421.888v60.8l14.992,10.029,8.314-24.291Z" transform="translate(-1990)" fill="#3fb2fe" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_221" data-name="Path 221" d="M3011.84,424.045l15.1,13.04-2.353,17.256-21.864-13.824Z" transform="translate(-1990)" fill="#40bcfe" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_222" data-name="Path 222" d="M2994.96,452.516l29.588,1.856-21.7-14.04Z" transform="translate(-1990)" fill="#56d2fd" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_223" data-name="Path 223" d="M2980.21,468.558l14.674-16.57-37.943-31.571Z" transform="translate(-1990)" fill="#3fb2fe" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_224" data-name="Path 224" d="M3002.73,440.333l-7.943,12.067-37.594-32.14Z" transform="translate(-1990)" fill="#54c8fe" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_225" data-name="Path 225" d="M3024.55,453.753l8.588,35.561L2979.86,469.3l14.785-16.7Z" transform="translate(-1990)" fill="#3caefd" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_227" data-name="Path 227" d="M2972.1,492.714l16.073,19.122L3033.9,488.97l-54.017-19.718Z" transform="translate(-1990)" fill="#3aa9fe" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_228" data-name="Path 228" d="M2930.95,463.679l-59.05-28.433,7.316-35.221Z" transform="translate(-1990)" fill="#2872e7" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_229" data-name="Path 229" d="M2871.25,436.33l-6.173,32.327,6.863.588,7.647-13.334Z" transform="translate(-1990)" fill="#2c7efb" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_230" data-name="Path 230" d="M2929.59,463.679l-50-7.572-8.236-20.688Z" transform="translate(-1990)" fill="#3087fc" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_231" data-name="Path 231" d="M2930.95,472.186V463.46l26-42.061v61.18s-12.354-6.667-13.824-7.255a64.765,64.765,0,0,0-7.647-2.451A28.685,28.685,0,0,0,2930.95,472.186Z" transform="translate(-1990)" fill="#3dacfe" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_232" data-name="Path 232" d="M3026.95,436.852s5.628,5.177,6.431,6.2,3.793,4.909,4.061,5.355-12.362,5.266-12.362,5.266Z" transform="translate(-1990)" fill="#3fbbfd" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_233" data-name="Path 233" d="M3049.01,463.605s5.928,7.164,7.178,9.663,7.765,14.772,8.7,17.672,1.473,4.82,1.473,4.82l-63.427,52.705s-2.451-11.079-4.412-15.589,1.177.49-6.569-13.824c-3.432-6.961-2.549-5.392-2.549-5.392l-1.275-1.765,45.3-23.139Z" transform="translate(-1990)" fill="#359cfe" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_234" data-name="Path 234" d="M3066.36,496.294V597.966l17.171-9.478s.426-23.972,0-30.6-7.946-41.042-9.858-47.8S3066.36,496.294,3066.36,496.294Z" transform="translate(-1990)" fill="#3594fe" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_235" data-name="Path 235" d="M3003,549.45l1.91,15.741,61.308,32.974V494.936Z" transform="translate(-1990)" fill="#2c87fe" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_236" data-name="Path 236" d="M3005.24,581.1l61.473,16.9-62.136-32.974Z" transform="translate(-1990)" fill="#2a7cfe" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_237" data-name="Path 237" d="M3005.41,597.966V581.1l61.308,16.868-21.872,75.923Z" transform="translate(-1990)" fill="#2263e1" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_238" data-name="Path 238" d="M3066.71,598.165l15.907,10.6s-2.983,26.346-3.977,29.494C3078.65,638.761,3066.71,598.165,3066.71,598.165Z" transform="translate(-1990)" fill="#2163e4" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_239" data-name="Path 239" d="M3083.72,588.469l-.977,20.786L3066.49,597.83Z" transform="translate(-1990)" fill="#2b80fb" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_240" data-name="Path 240" d="M3078.33,637.589s-2.255,10.785-2.549,11.863-30.982,25-30.982,25l21.864-76.377Z" transform="translate(-1990)" fill="#205fd9" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_241" data-name="Path 241" d="M3044.8,674.454l-19.418-.58s-2.112-16.743-8.975-28.131a108.381,108.381,0,0,0-13.953-18.553l2.112-29.565Z" transform="translate(-1990)" fill="#1c57c8" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_242" data-name="Path 242" d="M3054.5,700.875c.047-.186,7.41-10.137,10-16.7s9.059-24.1,10.264-28.74,1.384-5.712,1.384-5.712l-31.819,25.125S3054.45,701.06,3054.5,700.875Z" transform="translate(-1990)" fill="#1848a8" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_243" data-name="Path 243" d="M3043.94,675.3l-17.12,54.234,8.07.754s9.2-10.257,12.143-15.31,7.617-14.179,7.617-14.179Z" transform="translate(-1990)" fill="#164097" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_244" data-name="Path 244" d="M3034.22,730.289s-10.491,12.6-14.511,16.721a198.151,198.151,0,0,1-20.786,18.138c-7.746,5.687-10.785,7.55-10.785,7.55l29.12-34.022,9.412-9.02Z" transform="translate(-1990)" fill="#133785" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_245" data-name="Path 245" d="M2994.41,722.7l20.492,18.04,12.354-11.177Z" transform="translate(-1990)" fill="#113884" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_246" data-name="Path 246" d="M3015.1,702.795,2994.32,722.4l32.453,7.059,3.628-12.354-5.981-10.295Z" transform="translate(-1990)" fill="#153f94" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_247" data-name="Path 247" d="M3025.61,674.454s1.207,16.617.679,22.047a53.781,53.781,0,0,1-2.187,10.408l6.562,10.559,14.179-43.014Z" transform="translate(-1990)" fill="#1644a3" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_248" data-name="Path 248" d="M3015.05,702.838s-17.107-11.027-24.656-14.949-9.707-7.353-15-5.393-5.785,2.647-6.275,2.941,25.688,37.257,25.688,37.257Z" transform="translate(-1990)" fill="#1745a4" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_249" data-name="Path 249" d="M2993.76,722.348l-48.327-15.954,23.728-21.234Z" transform="translate(-1990)" fill="#15439c" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_250" data-name="Path 250" d="M2940.02,710.681c-1.207.226,37.71,35.146,37.71,35.146s16.818-23.456,16.592-23.38-49.249-15.914-49.249-15.914S2941.22,710.455,2940.02,710.681Z" transform="translate(-1990)" fill="#15439c" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_251" data-name="Path 251" d="M2927.24,717.215c0-2.422-1.657,26.512-1.657,26.512l52.386,2.039L2940.11,710.46S2927.24,719.637,2927.24,717.215Z" transform="translate(-1990)" fill="#1b56bf" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_252" data-name="Path 252" d="M3015.05,740.735l-37.415,5.109,17-23.67Z" transform="translate(-1990)" fill="#113884" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_253" data-name="Path 253" d="M2988.66,772.416l-11.2-26.687,37.942-4.815Z" transform="translate(-1990)" fill="#144199" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_254" data-name="Path 254" d="M2930.68,771l46.905-25.237,10.834,26.512-3.187,1.784Z" transform="translate(-1990)" fill="#11347c" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_255" data-name="Path 255" d="M2930.68,771.621l-8.459,30.771s18.026-4.9,21.344-6.184,26.85-11.69,31.148-14.179,12.143-8.447,12.143-8.447Z" transform="translate(-1990)" fill="#11387d" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_256" data-name="Path 256" d="M2872.74,808.792l58.113-37.635-8.916,31.428s-17.056,3.771-23.9,4.641-14.272,1.45-18.043,1.566S2872.74,808.792,2872.74,808.792Z" transform="translate(-1990)" fill="#11337a" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_257" data-name="Path 257" d="M2891.52,728.113s11.615-.688,17.2-2.95,14.1-5.2,16.291-6.411a11.175,11.175,0,0,0,2.489-1.584L2925.46,745Z" transform="translate(-1990)" fill="#17449d" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_258" data-name="Path 258" d="M2837.38,731.083h19.884l5.863,77.776h-7.393l-43.334-39.9Z" transform="translate(-1990)" fill="#1845a1" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_259" data-name="Path 259" d="M2863.13,808.843h8.744l53.521-63.535-34.134-17.564s-14.382,2.426-17.4,2.8-11.74.412-12.7.412h-4.085Z" transform="translate(-1990)" fill="#16449f" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_260" data-name="Path 260" d="M2812.64,769.167l-8.586-11.081s7.542-15.026,11.661-21,5.1-5.8,6.9-6.092,9.573-.29,10.559-.29,5.28.29,5.28.29Z" transform="translate(-1990)" fill="#1b4fb7" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_261" data-name="Path 261" d="M2812.4,769.338l.765,40.413,16.442-.765Z" transform="translate(-1990)" fill="#133d8b" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_262" data-name="Path 262" d="M2785.89,808.859l26.767-40.277v41.424l-27.4.637Z" transform="translate(-1990)" fill="#1a50b2" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_263" data-name="Path 263" d="M2786.43,807.964l.172-1.793.91-2.934c.847-2.624,10.215-31.2,12.525-36.184,2.422-5.226,4.333-9.177,4.333-9.177l8.285,11.344Z" transform="translate(-1990)" fill="#1648a5" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_264" data-name="Path 264" d="M2978.03,629.3s14.707,14.782,18.78,23.833,9.05,23.833,9.05,23.833-23.3-10.71-31.375-13.123-9.654-2.413-9.654-2.413" transform="translate(-1990)" fill="#1b56c7" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_265" data-name="Path 265" d="M2948.69,610.373l9.05,49.551,7.768,1.584,12.52-32.2-8.522-7.014-9.654-6.034-7.542-4.073Z" transform="translate(-1990)" fill="#2f8bf2" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_266" data-name="Path 266" d="M2948.27,610.679l-21.45-7.4-45.108,31.3,47.174,23.479h16.94l11.916,1.555Z" transform="translate(-1990)" fill="#2e87ed" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_267" data-name="Path 267" d="M2928.85,658.415l-12.822.3-6.788.679-9.352,2.715-18.855-27.679Z" transform="translate(-1990)" fill="#318dd9" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_268" data-name="Path 268" d="M2899.66,661.606l-14.87,4.752-14.275,5.863-16.952,9.814-5.736,3.314-1.4-4.206,35.561-46.013Z" transform="translate(-1990)" fill="#308ce2" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_269" data-name="Path 269" d="M2881.71,635.729,2885,603.08h42.062C2928.04,603.08,2881.71,635.729,2881.71,635.729Z" transform="translate(-1990)" fill="#3ba5fe" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_270" data-name="Path 270" d="M2848.03,616.006l34.287,19.377,2.785-32.547s-13.169,3.307-15.548,4.525S2848.03,616.006,2848.03,616.006Z" transform="translate(-1990)" fill="#379ffe" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_271" data-name="Path 271" d="M2881.04,635.383l-66.731,24.269-3.824-17.942,8.628-7.451,10.589-7.942,8.922-5.393,5.294-3.235,4.118-1.863Z" transform="translate(-1990)" fill="#3494fe" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_272" data-name="Path 272" d="M2814.45,659.7l31.676,22.1,35.824-47.062Z" transform="translate(-1990)" fill="#2977f7" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_273" data-name="Path 273" d="M2844.61,681.193l-26.925,29.942s18.1-16.969,21.5-19.307,8.824-6.26,8.824-6.26l-1.659-4Z" transform="translate(-1990)" fill="#3094ec" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_274" data-name="Path 274" d="M2813.92,659.652l3.614,51.482,27.227-30.093Z" transform="translate(-1990)" fill="#2978f9" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_275" data-name="Path 275" d="M2810.48,641.748l3.584,17.875-27.981,10.71s12.067-15.763,15.612-19.685S2810.48,641.748,2810.48,641.748Z" transform="translate(-1990)" fill="#2e82fd" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_276" data-name="Path 276" d="M2785.29,671.124a266.789,266.789,0,0,0-14.217,25.982c-6.275,13.432-6.863,16.178-6.863,16.178l50-53.925Z" transform="translate(-1990)" fill="#2978fe" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_277" data-name="Path 277" d="M2751.92,756.764s3.7-17.8,5.506-24.285,6.562-19.157,6.562-19.157l-3.318,45.931Z" transform="translate(-1990)" fill="#246cf6" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_278" data-name="Path 278" d="M2816.86,712.108l-52.749.784,49.709-53.239Z" transform="translate(-1990)" fill="#2978fe" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_279" data-name="Path 279" d="M2816.1,712.19s-5.581,7.844-6.034,8.522-46.232-7.165-46.232-7.165Z" transform="translate(-1990)" fill="#246bf3" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_280" data-name="Path 280" d="M2809.51,721.324s-7.451,9.8-9.9,13.334-6.961,10.883-6.961,10.883l-28.924-32.061Z" transform="translate(-1990)" fill="#2973f4" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_281" data-name="Path 281" d="M2792.35,745.541s-6.569,11.765-7.157,12.942-24.413.784-24.413.784l2.941-45.1Z" transform="translate(-1990)" fill="#2062dd" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_282" data-name="Path 282" d="M2760.78,759.781l20.713,5.581,4-7.089Z" transform="translate(-1990)" fill="#16449c" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_283" data-name="Path 283" d="M2760.83,759.932l.718,71.488s11.123-44.035,14.743-53.463,5.279-12.746,5.279-12.746Z" transform="translate(-1990)" fill="#194db0" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_284" data-name="Path 284" d="M2760.83,838.37c0,.83-13.349-15.159-13.349-15.159s.453-34.844.83-42.914,3.017-23.606,3.017-23.606l9.8,3.318.453,71.046S2760.83,837.54,2760.83,838.37Z" transform="translate(-1990)" fill="#1d5bbb" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_285" data-name="Path 285" d="M2750.16,843.37c.29.232,10.385-4.873,10.385-4.873l-13.17-15.664S2749.87,843.138,2750.16,843.37Z" transform="translate(-1990)" fill="#13388a" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_286" data-name="Path 286" d="M2757.06,873.516c-.075.905-7.014-30.47-7.014-30.47l10.408-4.978S2757.13,872.61,2757.06,873.516Z" transform="translate(-1990)" fill="#133b8b" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_287" data-name="Path 287" d="M2763.25,454.859l1.056-11.087,19.911,22.928Z" transform="translate(-1990)" fill="#19489f" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_288" data-name="Path 288" d="M2784.21,466.7s12.067,11.162,15.612,13.349,13.048,6.863,13.048,6.863l-29.565,33.411s-10.71-11.992-14.632-24.134-5.506-19.534-5.883-25.869a158.57,158.57,0,0,1,.3-16.065Z" transform="translate(-1990)" fill="#225dd0" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_289" data-name="Path 289" d="M2812.33,486.8s3.224,1.861,3.258,1.874-4.448,50.105-4.448,50.105a105.3,105.3,0,0,1-14.778-8.344c-5.807-4.224-13.123-10.333-13.123-10.333Z" transform="translate(-1990)" fill="#2c78fa" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_290" data-name="Path 290" d="M2815.99,488.8l7.747,3.683,27.747,35.1-33.728,12.844s-5.392-1.471-6.471-1.667S2815.99,488.8,2815.99,488.8Z" transform="translate(-1990)" fill="#3088fc" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_291" data-name="Path 291" d="M2857.51,501.511l-5.859,26.258-28.08-35.738s18.8,7.252,21.93,7.89S2857.51,501.511,2857.51,501.511Z" transform="translate(-1990)" fill="#3697fe" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_292" data-name="Path 292" d="M2874.74,504.563s-10.037-1.8-12.473-2.379a41.771,41.771,0,0,0-5.453-.812l-5.465,26.722,24.964-12.143Z" transform="translate(-1990)" fill="#3798fe" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_293" data-name="Path 293" d="M2912.44,512.181s-10.785-3.092-16.14-4.224-12.143-2.187-15.084-2.715-7.014-.83-7.014-.83l2.489,12.067,40.878,2.866Z" transform="translate(-1990)" fill="#3a9dfe" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_294" data-name="Path 294" d="M2959.88,553.436l-42.462-33.487-5.053-7.768s15.838,4.6,17.875,5.506,20.062,12.6,22.475,15.989,8.673,13.576,8.673,13.576Z" transform="translate(-1990)" fill="#3cacfe" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_295" data-name="Path 295" d="M2961.39,546.866s4.871,9.907,4.647,14.549a54.692,54.692,0,0,1-.4,5.534l-14.549,14.058-3.3-4.507,11.871-22.894Z" transform="translate(-1990)" fill="#3499fc" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_296" data-name="Path 296" d="M2953.85,586.613l-2.647-5.687L2965.84,567c-.008.008-.837,12.98-1.516,16.073s-.83,3.537-.83,3.537Z" transform="translate(-1990)" fill="#3498fe" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_297" data-name="Path 297" d="M2958.36,598.249l-4.566-12.049s9.99.618,9.852.618S2958.36,598.249,2958.36,598.249Z" transform="translate(-1990)" fill="#3192f8" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_298" data-name="Path 298" d="M2875.78,516.48l12.369,31.45,29.49-28.358Z" transform="translate(-1990)" fill="#39a4fe" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_299" data-name="Path 299" d="M2850.97,528.094l37.182,20.213-12.143-32.2Z" transform="translate(-1990)" fill="#3b9ffe" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_300" data-name="Path 300" d="M2835.13,544.913l16.291-17.347L2888,548.006Z" transform="translate(-1990)" fill="#3697fe" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_301" data-name="Path 301" d="M2817.71,540.433s15.009,4.405,17.2,4.707c.075,0,16.291-17.2,16.291-17.2Z" transform="translate(-1990)" fill="#328ffd" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_302" data-name="Path 302" d="M2958.95,553.436l-70.4-5.747,28.924-27.943Z" transform="translate(-1990)" fill="#3eb0fe" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_303" data-name="Path 303" d="M2947.78,576.808s-7.661-8.665-14.3-13.266-18.252-9.352-20.816-10.182-16.064-4.751-16.064-4.751l62.9,4.751Z" transform="translate(-1990)" fill="#3aa4fe" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_304" data-name="Path 304" d="M2852.52,394.484h-17.409l-65.424,27.676,54.242,19.014Z" transform="translate(-1990)" fill="#19469c" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_305" data-name="Path 305" d="M2823.57,441.173l-5,26.056h32.012Z" transform="translate(-1990)" fill="#286ded" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_306" data-name="Path 306" d="M2865.08,468.215l-14.332-.573-27.145-26.8,47.761-5.269Z" transform="translate(-1990)" fill="#2568e2" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_307" data-name="Path 307" d="M2779.97,442.1l44.554-1.26-5.841,26.228h-11.339s-6.987-2.176-9.163-4.123a119.118,119.118,0,0,1-11.8-12.026C2782.83,446.453,2779.97,442.1,2779.97,442.1Z" transform="translate(-1990)" fill="#2158c5" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_308" data-name="Path 308" d="M2769.09,422.745s3.322,7.559,5.04,11.11a78.948,78.948,0,0,0,5.612,8.934l44.439-2.176Z" transform="translate(-1990)" fill="#184293" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_309" data-name="Path 309" d="M2769.09,422.425s-2.077-5.682-2.338-7.246,5.646-19.731,5.646-19.731l62.714-1.161Z" transform="translate(-1990)" fill="#14367a" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_310" data-name="Path 310" d="M2765.65,415.186s-5.1,5.76-5.584,7a11.355,11.355,0,0,0-.562,1.684l-26.284-26.7s3.084-3,6.872-2.819,32.6.881,32.6.881Z" transform="translate(-1990)" fill="#112f67" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_311" data-name="Path 311" d="M2751.68,443.773l-20.38-11.521v-8.017h28.175s-3.779,6.987-4.81,10.881a85.485,85.485,0,0,1-2.985,8.657Z" transform="translate(-1990)" fill="#133678" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_312" data-name="Path 312" d="M2731.3,424.235l1.869-27.228,26.024,26.9Z" transform="translate(-1990)" fill="#12316c" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_313" data-name="Path 313" d="M2750.49,443.773l-22.026,8.549,2.555-20.7Z" transform="translate(-1990)" fill="#163d86" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_314" data-name="Path 314" d="M2751.8,443.566s-1.965,12.877-1.965,13.825v1.288l-23.788,19.179,2.169-25.55Z" transform="translate(-1990)" fill="#163d86" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_315" data-name="Path 315" d="M2749.61,458.577s.265,23.964,2.379,31.277,3,10.749,3,10.749l-28.9-22.554Z" transform="translate(-1990)" fill="#2352aa" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_316" data-name="Path 316" d="M2726.05,477.858l3.96,58.7,41.422-7.162s-7.742-10.259-9.872-15.872a84.767,84.767,0,0,0-6.581-12.582Z" transform="translate(-1990)" fill="#1c50b2" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_317" data-name="Path 317" d="M2720.41,525.941l9.277,11.11-3.665-59.329Z" transform="translate(-1990)" fill="#1b4aa6" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_318" data-name="Path 318" d="M2720.41,526.315l-1.549,17.756,10.979-6.981Z" transform="translate(-1990)" fill="#1f5fce" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_319" data-name="Path 319" d="M2817.28,550.645c.088,0-21.5,5.991-33.039,10.749s-35.153,15.506-35.153,15.506l11.63-11.718,41.937-19.03S2817.19,550.645,2817.28,550.645Z" transform="translate(-1990)" fill="#2e83fe" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_320" data-name="Path 320" d="M2803.09,546.152c-.264-.088-17.18-4.317-23-4.317H2767.85l-7.577,23.083Z" transform="translate(-1990)" fill="#2d79fe" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_321" data-name="Path 321" d="M2768.03,541.835s-16.387,1.674-24.669,4.229-10.4,3.436-10.4,3.436l3.612,32.51,13.392-5.815,10.573-11.453Z" transform="translate(-1990)" fill="#2668e6" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_322" data-name="Path 322" d="M2733.7,549.306s-14.317,5.154-19.356,8.017-6.987,3.78-6.987,3.78l28.519,22.1Z" transform="translate(-1990)" fill="#225ecf" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_323" data-name="Path 323" d="M2707.24,561.13s-14.746,7.688-20.822,11.707-6.434,4.8-6.434,4.8L2669.44,627.35s26.095-23.064,44.415-32.761,23.324-12.056,23.324-12.056Z" transform="translate(-1990.957)" fill="#225fd5" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_324" data-name="Path 324" d="M2679.99,577.711s-20.043,13.859-25.656,20.043-6.758,7.216-6.758,7.216l22.1,20.616Z" transform="translate(-1990)" fill="#1d4dab" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_325" data-name="Path 325" d="M2647.57,604.829a56.967,56.967,0,0,0-4.741,5.815l-1.322,2.379,28.1,12.951Z" transform="translate(-1990)" fill="#1e55bc" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_326" data-name="Path 326" d="M2669.62,625.974s-26.607,22.114-35.77,34.272S2607.5,692.4,2607.5,692.4l14.978-37.444Z" transform="translate(-1990)" fill="#2465de" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_327" data-name="Path 327" d="M2669.08,625.974l-41.3,4.063s8.141-11.028,10.467-13.835a22.929,22.929,0,0,1,3.168-3.409Z" transform="translate(-1990)" fill="#1d54ba" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_328" data-name="Path 328" d="M2669.05,625.872l-46.83,29.006-5.083-5.083s9.827-18.3,10.708-19.451S2669.05,625.872,2669.05,625.872Z" transform="translate(-1990)" fill="#205bcb" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_329" data-name="Path 329" d="M2607.5,691.7s3.614-14.8,5.552-24.4,4.053-17.621,4.053-17.621l5.022,5.2Z" transform="translate(-1990)" fill="#2060d5" stroke="#cbcbcb" stroke-width="1" />
                                    <g id="Ellipse_5" data-name="Ellipse 5" transform="translate(925 575)" fill="#2d85ec" stroke="#cbcbcb" stroke-width="1">
                                        <circle cx="9.5" cy="9.5" r="9.5" stroke="none" />
                                        <circle cx="9.5" cy="9.5" r="9" fill="none" />
                                    </g>
                                    <path id="Path_330" data-name="Path 330" d="M2636.6,820.748s11.907-88.454,39.124-126.3,33.193-42.719,51.581-50.849a164.959,164.959,0,0,1,33.1-10.84s-51.294,49.552-68.521,78.974S2636.6,820.748,2636.6,820.748Z" transform="translate(-1990)" fill="#2977fd" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_331" data-name="Path 331" d="M2929.98,471.884s-13.127-1.938-18.59-1.938-22.907-.881-28.9-.881h-10.308l7.048-13.3,51.541,7.665v8.987Z" transform="translate(-1990)" fill="#359bfe" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_332" data-name="Path 332" d="M2977.97,745l-105.913,64.184,54.747-65.17Z" transform="translate(-1990)" fill="#113379" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_333" data-name="Path 333" d="M2856.21,808.843h-26.7l-16.916-39.7,29.322,26.694Z" transform="translate(-1990)" fill="#143d8f" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_336" data-name="Path 336" d="M1043.138,489.314l-8.267-35.489,12.618-5.481s10.707,14.02,11.216,15.04C1058.451,463,1043.138,489.314,1043.138,489.314Z" fill="#3caefd" stroke="#cbcbcb" stroke-width="1" />
                                </g>
                                <g id="baloon" transform="translate(-1375.468 -501)">
                                    <g id="balloon" transform="translate(1594.09 960.29)">
                                        <path id="Path_258-2" data-name="Path 258" d="M2837.38,731.083h19.884l5.863,77.776h-7.393l-43.334-39.9Z" transform="translate(-2825.636 -753.825)" fill="inherit" stroke="#cbcbcb" stroke-width="1" />
                                        <path id="Path_337" data-name="Path 337" d="M32.783,54.249a.4.4,0,0,1-.22-.067c-2.579-1.719-1.787-5.229-1.752-5.378a.4.4,0,1,1,.772.181c-.007.031-.7,3.125,1.42,4.537a.4.4,0,0,1-.22.727Z" transform="translate(-10.059 -27.455)" fill="#444" />
                                        <path id="Path_338" data-name="Path 338" d="M21.138,3A7.148,7.148,0,0,0,14,10.158c0,6.456,7.138,9.5,7.138,9.5s7.138-3.041,7.138-9.5A7.148,7.148,0,0,0,21.138,3Z" fill="#f03849" />
                                        <path id="Path_339" data-name="Path 339" d="M32,3c3.285,0,5.948,3.2,5.948,7.158,0,6.456-5.948,9.5-5.948,9.5s7.138-3.041,7.138-9.5A7.148,7.148,0,0,0,32,3Z" transform="translate(-10.862)" fill="#dc303e" />
                                        <path id="Path_340" data-name="Path 340" d="M29.285,45,27.5,46.785h3.569Z" transform="translate(-8.146 -25.344)" fill="#f03849" />
                                        <ellipse id="Ellipse_6" data-name="Ellipse 6" cx="2" cy="1.5" rx="2" ry="1.5" transform="translate(16 5.794)" fill="#ff848e" />
                                        <rect id="Rectangle_3" data-name="Rectangle 3" width="2" height="1" rx="0.5" transform="translate(20 18.794)" fill="#ffd342" />
                                    </g>
                                    <g id="balloon-2" data-name="balloon" transform="translate(1628.09 950.29)">
                                        <path id="Path_259-2" data-name="Path 259" d="M2863.13,808.843h8.744l53.521-63.535-34.134-17.564s-14.382,2.426-17.4,2.8-11.74.412-12.7.412h-4.085Z" transform="translate(-2859.636 -743.825)" fill="inherit" stroke="#cbcbcb" stroke-width="1" />
                                        <path id="Path_337-2" data-name="Path 337" d="M32.783,54.249a.4.4,0,0,1-.22-.067c-2.579-1.719-1.787-5.229-1.752-5.378a.4.4,0,1,1,.772.181c-.007.031-.7,3.125,1.42,4.537a.4.4,0,0,1-.22.727Z" transform="translate(-10.059 -27.455)" fill="#444" />
                                        <path id="Path_338-2" data-name="Path 338" d="M21.138,3A7.148,7.148,0,0,0,14,10.158c0,6.456,7.138,9.5,7.138,9.5s7.138-3.041,7.138-9.5A7.148,7.148,0,0,0,21.138,3Z" fill="#f03849" />
                                        <path id="Path_339-2" data-name="Path 339" d="M32,3c3.285,0,5.948,3.2,5.948,7.158,0,6.456-5.948,9.5-5.948,9.5s7.138-3.041,7.138-9.5A7.148,7.148,0,0,0,32,3Z" transform="translate(-10.862)" fill="#dc303e" />
                                        <path id="Path_340-2" data-name="Path 340" d="M29.285,45,27.5,46.785h3.569Z" transform="translate(-8.146 -25.344)" fill="#f03849" />
                                        <ellipse id="Ellipse_6-2" data-name="Ellipse 6" cx="2" cy="1.5" rx="2" ry="1.5" transform="translate(16 5.794)" fill="#ff848e" />
                                        <rect id="Rectangle_3-2" data-name="Rectangle 3" width="2" height="1" rx="0.5" transform="translate(20 18.794)" fill="#ffd342" />
                                    </g>
                                    <g id="balloon-3" data-name="balloon" transform="matrix(0.914, 0.407, -0.407, 0.914, 1687.977, 942.98)">
                                        <path id="Path_332-2" data-name="Path 332" d="M2977.97,745l-105.913,64.184,54.747-65.17Z" transform="translate(-2966.684 514.637) rotate(-24)" fill="inherit" stroke="#cbcbcb" stroke-width="1" />
                                        <path id="Path_337-3" data-name="Path 337" d="M32.783,54.249a.4.4,0,0,1-.22-.067c-2.579-1.719-1.787-5.229-1.752-5.378a.4.4,0,1,1,.772.181c-.007.031-.7,3.125,1.42,4.537a.4.4,0,0,1-.22.727Z" transform="translate(-10.059 -27.455)" fill="#444" />
                                        <path id="Path_338-3" data-name="Path 338" d="M21.138,3A7.148,7.148,0,0,0,14,10.158c0,6.456,7.138,9.5,7.138,9.5s7.138-3.041,7.138-9.5A7.148,7.148,0,0,0,21.138,3Z" fill="#f03849" />
                                        <path id="Path_339-3" data-name="Path 339" d="M32,3c3.285,0,5.948,3.2,5.948,7.158,0,6.456-5.948,9.5-5.948,9.5s7.138-3.041,7.138-9.5A7.148,7.148,0,0,0,32,3Z" transform="translate(-10.862)" fill="#dc303e" />
                                        <path id="Path_340-3" data-name="Path 340" d="M29.285,45,27.5,46.785h3.569Z" transform="translate(-8.146 -25.344)" fill="#f03849" />
                                        <ellipse id="Ellipse_6-3" data-name="Ellipse 6" cx="2" cy="1.5" rx="2" ry="1.5" transform="translate(16 5.794)" fill="#ff848e" />
                                        <rect id="Rectangle_3-3" data-name="Rectangle 3" width="2" height="1" rx="0.5" transform="translate(20 18.794)" fill="#ffd342" />
                                    </g>
                                    <g id="balloon-4" data-name="balloon" transform="matrix(0.719, -0.695, 0.695, 0.719, 1716.856, 936.278)">
                                        <path id="Path_250-2" data-name="Path 250" d="M2940.02,710.681c-1.207.226,37.71,35.146,37.71,35.146s16.818-23.456,16.592-23.38-49.249-15.914-49.249-15.914S2941.22,710.455,2940.02,710.681Z" transform="matrix(0.719, 0.695, -0.695, 0.719, -1613.932, -2573.116)" fill="inherit" stroke="#cbcbcb" stroke-width="1" />
                                        <path id="Path_337-4" data-name="Path 337" d="M32.254,52.809a.3.3,0,0,1-.165-.05c-1.933-1.289-1.34-3.92-1.314-4.031a.3.3,0,1,1,.579.136c-.005.023-.523,2.343,1.064,3.4a.3.3,0,0,1-.165.545Z" transform="translate(-11.715 -31.974)" fill="#444" />
                                        <path id="Path_338-4" data-name="Path 338" d="M19.35,3A5.358,5.358,0,0,0,14,8.366c0,4.839,5.35,7.119,5.35,7.119s5.35-2.279,5.35-7.119A5.358,5.358,0,0,0,19.35,3Z" transform="translate(0)" fill="#f03849" />
                                        <path id="Path_339-4" data-name="Path 339" d="M32,3c2.463,0,4.459,2.4,4.459,5.366,0,4.839-4.459,7.119-4.459,7.119s5.35-2.279,5.35-7.119A5.358,5.358,0,0,0,32,3Z" transform="translate(-12.65)" fill="#dc303e" />
                                        <path id="Path_340-4" data-name="Path 340" d="M28.838,45,27.5,46.338h2.675Z" transform="translate(-9.487 -29.516)" fill="#f03849" />
                                        <ellipse id="Ellipse_6-4" data-name="Ellipse 6" cx="1.499" cy="1.124" rx="1.499" ry="1.124" transform="translate(15.499 5.094)" fill="#ff848e" />
                                        <rect id="Rectangle_3-4" data-name="Rectangle 3" width="1.499" height="0.75" rx="0.375" transform="translate(18.497 14.839)" fill="#ffd342" />
                                    </g>
                                    <g id="balloon-5" data-name="balloon" transform="matrix(0.719, -0.695, 0.695, 0.719, 1716.855, 914.278)">
                                        <path id="Path_249-2" data-name="Path 249" d="M2993.76,722.348l-48.327-15.954,23.728-21.234Z" transform="matrix(0.719, 0.695, -0.695, 0.719, -1629.214, -2557.29)" fill="inherit" stroke="#cbcbcb" stroke-width="1" />
                                        <path id="Path_337-5" data-name="Path 337" d="M32.254,52.809a.3.3,0,0,1-.165-.05c-1.933-1.289-1.34-3.92-1.314-4.031a.3.3,0,1,1,.579.136c-.005.023-.523,2.343,1.064,3.4a.3.3,0,0,1-.165.545Z" transform="translate(-11.715 -31.974)" fill="#444" />
                                        <path id="Path_338-5" data-name="Path 338" d="M19.35,3A5.358,5.358,0,0,0,14,8.366c0,4.839,5.35,7.119,5.35,7.119s5.35-2.279,5.35-7.119A5.358,5.358,0,0,0,19.35,3Z" transform="translate(0)" fill="#f03849" />
                                        <path id="Path_339-5" data-name="Path 339" d="M32,3c2.463,0,4.459,2.4,4.459,5.366,0,4.839-4.459,7.119-4.459,7.119s5.35-2.279,5.35-7.119A5.358,5.358,0,0,0,32,3Z" transform="translate(-12.65)" fill="#dc303e" />
                                        <path id="Path_340-5" data-name="Path 340" d="M28.838,45,27.5,46.338h2.675Z" transform="translate(-9.487 -29.516)" fill="#f03849" />
                                        <ellipse id="Ellipse_6-5" data-name="Ellipse 6" cx="1.499" cy="1.124" rx="1.499" ry="1.124" transform="translate(15.499 5.094)" fill="#ff848e" />
                                        <rect id="Rectangle_3-5" data-name="Rectangle 3" width="1.499" height="0.75" rx="0.375" transform="translate(18.497 14.839)" fill="#ffd342" />
                                    </g>
                                    <g id="balloon-6" data-name="balloon" transform="matrix(0.719, -0.695, 0.695, 0.719, 1737.856, 911.278)">
                                        <path id="Path_248-2" data-name="Path 248" d="M3015.05,702.838s-17.107-11.027-24.656-14.949-9.707-7.353-15-5.393-5.785,2.647-6.275,2.941,25.688,37.257,25.688,37.257Z" transform="matrix(0.719, 0.695, -0.695, 0.719, -1646.405, -2569.72)" fill="inherit" stroke="#cbcbcb" stroke-width="1" />
                                        <path id="Path_337-6" data-name="Path 337" d="M32.254,52.809a.3.3,0,0,1-.165-.05c-1.933-1.289-1.34-3.92-1.314-4.031a.3.3,0,1,1,.579.136c-.005.023-.523,2.343,1.064,3.4a.3.3,0,0,1-.165.545Z" transform="translate(-11.715 -31.974)" fill="#444" />
                                        <path id="Path_338-6" data-name="Path 338" d="M19.35,3A5.358,5.358,0,0,0,14,8.366c0,4.839,5.35,7.119,5.35,7.119s5.35-2.279,5.35-7.119A5.358,5.358,0,0,0,19.35,3Z" transform="translate(0)" fill="#f03849" />
                                        <path id="Path_339-6" data-name="Path 339" d="M32,3c2.463,0,4.459,2.4,4.459,5.366,0,4.839-4.459,7.119-4.459,7.119s5.35-2.279,5.35-7.119A5.358,5.358,0,0,0,32,3Z" transform="translate(-12.65)" fill="#dc303e" />
                                        <path id="Path_340-6" data-name="Path 340" d="M28.838,45,27.5,46.338h2.675Z" transform="translate(-9.487 -29.516)" fill="#f03849" />
                                        <ellipse id="Ellipse_6-6" data-name="Ellipse 6" cx="1.499" cy="1.124" rx="1.499" ry="1.124" transform="translate(15.499 5.094)" fill="#ff848e" />
                                        <rect id="Rectangle_3-6" data-name="Rectangle 3" width="1.499" height="0.75" rx="0.375" transform="translate(18.497 14.839)" fill="#ffd342" />
                                    </g>
                                    <g id="balloon-7" data-name="balloon" transform="matrix(0.719, -0.695, 0.695, 0.719, 1766.116, 928.085)">
                                        <path id="Path_246-2" data-name="Path 246" d="M3015.1,702.795,2994.32,722.4l32.453,7.059,3.628-12.354-5.981-10.295Z" transform="matrix(0.719, 0.695, -0.695, 0.719, -1655.058, -2601.441)" fill="inherit" stroke="#cbcbcb" stroke-width="1" />
                                        <path id="Path_337-7" data-name="Path 337" d="M32.254,52.809a.3.3,0,0,1-.165-.05c-1.933-1.289-1.34-3.92-1.314-4.031a.3.3,0,1,1,.579.136c-.005.023-.523,2.343,1.064,3.4a.3.3,0,0,1-.165.545Z" transform="translate(-11.715 -31.974)" fill="#444" />
                                        <path id="Path_338-7" data-name="Path 338" d="M19.35,3A5.358,5.358,0,0,0,14,8.366c0,4.839,5.35,7.119,5.35,7.119s5.35-2.279,5.35-7.119A5.358,5.358,0,0,0,19.35,3Z" transform="translate(0)" fill="#f03849" />
                                        <path id="Path_339-7" data-name="Path 339" d="M32,3c2.463,0,4.459,2.4,4.459,5.366,0,4.839-4.459,7.119-4.459,7.119s5.35-2.279,5.35-7.119A5.358,5.358,0,0,0,32,3Z" transform="translate(-12.65)" fill="#dc303e" />
                                        <path id="Path_340-7" data-name="Path 340" d="M28.838,45,27.5,46.338h2.675Z" transform="translate(-9.487 -29.516)" fill="#f03849" />
                                        <ellipse id="Ellipse_6-7" data-name="Ellipse 6" cx="1.499" cy="1.124" rx="1.499" ry="1.124" transform="translate(15.499 5.094)" fill="#ff848e" />
                                        <rect id="Rectangle_3-7" data-name="Rectangle 3" width="1.499" height="0.75" rx="0.375" transform="translate(18.497 14.839)" fill="#ffd342" />
                                    </g>
                                    <g id="balloon-8" data-name="balloon" transform="matrix(0.719, -0.695, 0.695, 0.719, 1766.161, 942.416)">
                                        <path id="Path_245-2" data-name="Path 245" d="M2994.41,722.7l20.492,18.04,12.354-11.177Z" transform="matrix(0.719, 0.695, -0.695, 0.719, -1645.135, -2611.781)" fill="inherit" stroke="#cbcbcb" stroke-width="1" />
                                        <path id="Path_337-8" data-name="Path 337" d="M31.226,50.01a.1.1,0,0,1-.058-.018,1.389,1.389,0,0,1-.461-1.413.1.1,0,0,1,.2.048,1.2,1.2,0,0,0,.373,1.192.1.1,0,0,1-.058.191Z" transform="translate(-14.933 -40.757)" fill="#444" />
                                        <path id="Path_338-8" data-name="Path 338" d="M15.876,3A1.879,1.879,0,0,0,14,4.881a3.083,3.083,0,0,0,1.876,2.5,3.083,3.083,0,0,0,1.876-2.5A1.879,1.879,0,0,0,15.876,3Z" transform="translate(0)" fill="#f03849" />
                                        <path id="Path_339-8" data-name="Path 339" d="M32,3a1.745,1.745,0,0,1,1.563,1.881A3,3,0,0,1,32,7.377a3.083,3.083,0,0,0,1.876-2.5A1.879,1.879,0,0,0,32,3Z" transform="translate(-16.124)" fill="#dc303e" />
                                        <path id="Path_340-8" data-name="Path 340" d="M27.969,45l-.469.469h.938Z" transform="translate(-12.093 -37.623)" fill="#f03849" />
                                        <ellipse id="Ellipse_6-8" data-name="Ellipse 6" cx="0.526" cy="0.394" rx="0.526" ry="0.394" transform="translate(14.526 3.734)" fill="#ff848e" />
                                        <rect id="Rectangle_3-8" data-name="Rectangle 3" width="0.526" height="0.263" rx="0.131" transform="translate(15.577 7.151)" fill="#ffd342" />
                                    </g>
                                    <g id="balloon-9" data-name="balloon" transform="matrix(0.719, -0.695, 0.695, 0.719, 1750.9, 946.416)">
                                        <path id="Path_252-2" data-name="Path 252" d="M3015.05,740.735l-37.415,5.109,17-23.67Z" transform="matrix(0.719, 0.695, -0.695, 0.719, -1631.379, -2604.058)" fill="inherit" stroke="#cbcbcb" stroke-width="1" />
                                        <path id="Path_337-9" data-name="Path 337" d="M31.226,50.01a.1.1,0,0,1-.058-.018,1.389,1.389,0,0,1-.461-1.413.1.1,0,0,1,.2.048,1.2,1.2,0,0,0,.373,1.192.1.1,0,0,1-.058.191Z" transform="translate(-14.933 -40.757)" fill="#444" />
                                        <path id="Path_338-9" data-name="Path 338" d="M15.876,3A1.879,1.879,0,0,0,14,4.881a3.083,3.083,0,0,0,1.876,2.5,3.083,3.083,0,0,0,1.876-2.5A1.879,1.879,0,0,0,15.876,3Z" transform="translate(0)" fill="#f03849" />
                                        <path id="Path_339-9" data-name="Path 339" d="M32,3a1.745,1.745,0,0,1,1.563,1.881A3,3,0,0,1,32,7.377a3.083,3.083,0,0,0,1.876-2.5A1.879,1.879,0,0,0,32,3Z" transform="translate(-16.124)" fill="#dc303e" />
                                        <path id="Path_340-9" data-name="Path 340" d="M27.969,45l-.469.469h.938Z" transform="translate(-12.093 -37.623)" fill="#f03849" />
                                        <ellipse id="Ellipse_6-9" data-name="Ellipse 6" cx="0.526" cy="0.394" rx="0.526" ry="0.394" transform="translate(14.526 3.734)" fill="#ff848e" />
                                        <rect id="Rectangle_3-9" data-name="Rectangle 3" width="0.526" height="0.263" rx="0.131" transform="translate(15.577 7.151)" fill="#ffd342" />
                                    </g>
                                    <g id="balloon-10" data-name="balloon" transform="matrix(0.777, 0.629, -0.629, 0.777, 1779.354, 934.042)">
                                        <path id="Path_244-2" data-name="Path 244" d="M3034.22,730.289s-10.491,12.6-14.511,16.721a198.151,198.151,0,0,1-20.786,18.138c-7.746,5.687-10.785,7.55-10.785,7.55l29.12-34.022,9.412-9.02Z" transform="translate(-2797.789 1329.387) rotate(-39)" fill="inherit" stroke="#cbcbcb" stroke-width="1" />
                                        <path id="Path_337-10" data-name="Path 337" d="M31.226,50.01a.1.1,0,0,1-.058-.018,1.389,1.389,0,0,1-.461-1.413.1.1,0,0,1,.2.048,1.2,1.2,0,0,0,.373,1.192.1.1,0,0,1-.058.191Z" transform="translate(-14.933 -40.757)" fill="#444" />
                                        <path id="Path_338-10" data-name="Path 338" d="M15.876,3A1.879,1.879,0,0,0,14,4.881a3.083,3.083,0,0,0,1.876,2.5,3.083,3.083,0,0,0,1.876-2.5A1.879,1.879,0,0,0,15.876,3Z" transform="translate(0)" fill="#f03849" />
                                        <path id="Path_339-10" data-name="Path 339" d="M32,3a1.745,1.745,0,0,1,1.563,1.881A3,3,0,0,1,32,7.377a3.083,3.083,0,0,0,1.876-2.5A1.879,1.879,0,0,0,32,3Z" transform="translate(-16.124)" fill="#dc303e" />
                                        <path id="Path_340-10" data-name="Path 340" d="M27.969,45l-.469.469h.938Z" transform="translate(-12.093 -37.623)" fill="#f03849" />
                                        <ellipse id="Ellipse_6-10" data-name="Ellipse 6" cx="0.526" cy="0.394" rx="0.526" ry="0.394" transform="translate(14.526 3.734)" fill="#ff848e" />
                                        <rect id="Rectangle_3-10" data-name="Rectangle 3" width="0.526" height="0.263" rx="0.131" transform="translate(15.577 7.151)" fill="#ffd342" />
                                    </g>
                                    <g id="balloon-11" data-name="balloon" transform="translate(1791.964 811.889)">
                                        <path id="Path_237-2" data-name="Path 237" d="M3005.41,597.966V581.1l61.308,16.868-21.872,75.923Z" transform="translate(-3023.51 -605.424)" fill="inherit" stroke="#cbcbcb" stroke-width="1" />
                                        <path id="Path_337-11" data-name="Path 337" d="M33.09,55.083a.453.453,0,0,1-.251-.076c-2.953-1.968-2.046-5.987-2.006-6.158a.454.454,0,1,1,.884.207c-.008.036-.8,3.578,1.626,5.195a.454.454,0,0,1-.252.832Z" transform="translate(-9.101 -24.84)" fill="#444" />
                                        <path id="Path_338-11" data-name="Path 338" d="M22.173,3A8.185,8.185,0,0,0,14,11.2c0,7.392,8.173,10.874,8.173,10.874s8.173-3.482,8.173-10.874A8.185,8.185,0,0,0,22.173,3Z" transform="translate(0)" fill="#f03849" />
                                        <path id="Path_339-11" data-name="Path 339" d="M32,3c3.762,0,6.811,3.669,6.811,8.2C38.811,18.589,32,22.071,32,22.071s8.173-3.482,8.173-10.874A8.185,8.185,0,0,0,32,3Z" transform="translate(-9.827)" fill="#dc303e" />
                                        <path id="Path_340-11" data-name="Path 340" d="M29.543,45,27.5,47.043h4.087Z" transform="translate(-7.37 -22.929)" fill="#f03849" />
                                        <ellipse id="Ellipse_6-11" data-name="Ellipse 6" cx="2.29" cy="1.717" rx="2.29" ry="1.717" transform="translate(16.29 6.199)" fill="#ff848e" />
                                        <rect id="Rectangle_3-11" data-name="Rectangle 3" width="2.29" height="1.145" rx="0.572" transform="translate(20.87 21.084)" fill="#ffd342" />
                                    </g>
                                    <g id="balloon-12" data-name="balloon" transform="translate(1816.964 830.458)">
                                        <path id="Path_240-2" data-name="Path 240" d="M3078.33,637.589s-2.255,10.785-2.549,11.863-30.982,25-30.982,25l21.864-76.377Z" transform="translate(-3048.51 -623.993)" fill="inherit" stroke="#cbcbcb" stroke-width="1" />
                                        <path id="Path_337-12" data-name="Path 337" d="M32.329,53.012a.311.311,0,0,1-.172-.052c-2.024-1.349-1.4-4.1-1.375-4.221a.311.311,0,1,1,.606.142c-.006.024-.547,2.453,1.115,3.561a.311.311,0,0,1-.173.57Z" transform="translate(-11.482 -31.337)" fill="#444" />
                                        <path id="Path_338-12" data-name="Path 338" d="M19.6,3A5.61,5.61,0,0,0,14,8.618c0,5.067,5.6,7.454,5.6,7.454s5.6-2.387,5.6-7.454A5.61,5.61,0,0,0,19.6,3Z" transform="translate(0)" fill="#f03849" />
                                        <path id="Path_339-12" data-name="Path 339" d="M32,3c2.578,0,4.669,2.515,4.669,5.618,0,5.067-4.669,7.454-4.669,7.454s5.6-2.387,5.6-7.454A5.61,5.61,0,0,0,32,3Z" transform="translate(-12.398)" fill="#dc303e" />
                                        <path id="Path_340-12" data-name="Path 340" d="M28.9,45l-1.4,1.4h2.8Z" transform="translate(-9.298 -28.928)" fill="#f03849" />
                                        <ellipse id="Ellipse_6-12" data-name="Ellipse 6" cx="1.57" cy="1.177" rx="1.57" ry="1.177" transform="translate(15.57 5.193)" fill="#ff848e" />
                                        <rect id="Rectangle_3-12" data-name="Rectangle 3" width="1.57" height="0.785" rx="0.392" transform="translate(18.709 15.396)" fill="#ffd342" />
                                    </g>
                                    <g id="balloon-13" data-name="balloon" transform="translate(1829.515 798.051)">
                                        <path id="Path_239-2" data-name="Path 239" d="M3083.72,588.469l-.977,20.786L3066.49,597.83Z" transform="translate(-3061.061 -591.586)" fill="inherit" stroke="#cbcbcb" stroke-width="1" />
                                        <path id="Path_337-13" data-name="Path 337" d="M31.21,49.968a.1.1,0,0,1-.056-.017,1.35,1.35,0,0,1-.448-1.374.1.1,0,1,1,.2.046,1.171,1.171,0,0,0,.363,1.159.1.1,0,0,1-.056.186Z" transform="translate(-14.982 -40.89)" fill="#444" />
                                        <path id="Path_338-13" data-name="Path 338" d="M15.823,3A1.826,1.826,0,0,0,14,4.828a3,3,0,0,0,1.823,2.426,3,3,0,0,0,1.823-2.426A1.826,1.826,0,0,0,15.823,3Z" transform="translate(0)" fill="#f03849" />
                                        <path id="Path_339-13" data-name="Path 339" d="M32,3a1.7,1.7,0,0,1,1.519,1.828A2.913,2.913,0,0,1,32,7.254a3,3,0,0,0,1.823-2.426A1.826,1.826,0,0,0,32,3Z" transform="translate(-16.177)" fill="#dc303e" />
                                        <path id="Path_340-13" data-name="Path 340" d="M27.956,45l-.456.456h.912Z" transform="translate(-12.133 -37.746)" fill="#f03849" />
                                        <ellipse id="Ellipse_6-13" data-name="Ellipse 6" cx="0.511" cy="0.383" rx="0.511" ry="0.383" transform="translate(14.511 3.714)" fill="#ff848e" />
                                        <rect id="Rectangle_3-13" data-name="Rectangle 3" width="0.511" height="0.255" rx="0.128" transform="translate(15.533 7.034)" fill="#ffd342" />
                                    </g>
                                    <g id="balloon-14" data-name="balloon" transform="translate(1827.866 812.571)">
                                        <path id="Path_238-2" data-name="Path 238" d="M3066.71,598.165l15.907,10.6s-2.983,26.346-3.977,29.494C3078.65,638.761,3066.71,598.165,3066.71,598.165Z" transform="translate(-3059.412 -606.107)" fill="inherit" stroke="#cbcbcb" stroke-width="1" />
                                        <path id="Path_337-14" data-name="Path 337" d="M31.519,50.81a.159.159,0,0,1-.088-.027,2.123,2.123,0,0,1-.7-2.161.159.159,0,1,1,.31.073,1.842,1.842,0,0,0,.571,1.823.159.159,0,0,1-.089.292Z" transform="translate(-14.014 -38.248)" fill="#444" />
                                        <path id="Path_338-14" data-name="Path 338" d="M16.868,3A2.872,2.872,0,0,0,14,5.876c0,2.594,2.868,3.816,2.868,3.816s2.868-1.222,2.868-3.816A2.872,2.872,0,0,0,16.868,3Z" transform="translate(0)" fill="#f03849" />
                                        <path id="Path_339-14" data-name="Path 339" d="M32,3a2.667,2.667,0,0,1,2.39,2.876A4.583,4.583,0,0,1,32,9.693s2.868-1.222,2.868-3.816A2.872,2.872,0,0,0,32,3Z" transform="translate(-15.132)" fill="#dc303e" />
                                        <path id="Path_340-14" data-name="Path 340" d="M28.217,45l-.717.717h1.434Z" transform="translate(-11.349 -35.307)" fill="#f03849" />
                                        <ellipse id="Ellipse_6-14" data-name="Ellipse 6" cx="0.804" cy="0.603" rx="0.804" ry="0.603" transform="translate(14.804 4.123)" fill="#ff848e" />
                                        <rect id="Rectangle_3-14" data-name="Rectangle 3" width="0.804" height="0.402" rx="0.201" transform="translate(16.411 9.347)" fill="#ffd342" />
                                    </g>
                                    <g id="balloon-15" data-name="balloon" transform="translate(1806.964 869.458)">
                                        <path id="Path_242-2" data-name="Path 242" d="M3054.5,700.875c.047-.186,7.41-10.137,10-16.7s9.059-24.1,10.264-28.74,1.384-5.712,1.384-5.712l-31.819,25.125S3054.45,701.06,3054.5,700.875Z" transform="translate(-3038.51 -662.993)" fill="inherit" stroke="#cbcbcb" stroke-width="1" />
                                        <path id="Path_337-15" data-name="Path 337" d="M32.329,53.012a.311.311,0,0,1-.172-.052c-2.024-1.349-1.4-4.1-1.375-4.221a.311.311,0,1,1,.606.142c-.006.024-.547,2.453,1.115,3.561a.311.311,0,0,1-.173.57Z" transform="translate(-11.482 -31.337)" fill="#444" />
                                        <path id="Path_338-15" data-name="Path 338" d="M19.6,3A5.61,5.61,0,0,0,14,8.618c0,5.067,5.6,7.454,5.6,7.454s5.6-2.387,5.6-7.454A5.61,5.61,0,0,0,19.6,3Z" transform="translate(0)" fill="#f03849" />
                                        <path id="Path_339-15" data-name="Path 339" d="M32,3c2.578,0,4.669,2.515,4.669,5.618,0,5.067-4.669,7.454-4.669,7.454s5.6-2.387,5.6-7.454A5.61,5.61,0,0,0,32,3Z" transform="translate(-12.398)" fill="#dc303e" />
                                        <path id="Path_340-15" data-name="Path 340" d="M28.9,45l-1.4,1.4h2.8Z" transform="translate(-9.298 -28.928)" fill="#f03849" />
                                        <ellipse id="Ellipse_6-15" data-name="Ellipse 6" cx="1.57" cy="1.177" rx="1.57" ry="1.177" transform="translate(15.57 5.193)" fill="#ff848e" />
                                        <rect id="Rectangle_3-15" data-name="Rectangle 3" width="1.57" height="0.785" rx="0.392" transform="translate(18.709 15.396)" fill="#ffd342" />
                                    </g>
                                    <g id="balloon-16" data-name="balloon" transform="translate(1780.346 856.084)">
                                        <path id="Path_241-2" data-name="Path 241" d="M3044.8,674.454l-19.418-.58s-2.112-16.743-8.975-28.131a108.381,108.381,0,0,0-13.953-18.553l2.112-29.565Z" transform="translate(-3011.892 -649.62)" fill="inherit" stroke="#cbcbcb" stroke-width="1" />
                                        <path id="Path_337-16" data-name="Path 337" d="M31.858,51.731a.222.222,0,0,1-.123-.037,2.97,2.97,0,0,1-.985-3.023.223.223,0,1,1,.434.1,2.576,2.576,0,0,0,.8,2.55.223.223,0,0,1-.124.408Z" transform="translate(-12.955 -35.358)" fill="#444" />
                                        <path id="Path_338-16" data-name="Path 338" d="M18.012,3A4.018,4.018,0,0,0,14,7.023c0,3.629,4.012,5.338,4.012,5.338s4.012-1.709,4.012-5.338A4.018,4.018,0,0,0,18.012,3Z" transform="translate(0 0)" fill="#f03849" />
                                        <path id="Path_339-16" data-name="Path 339" d="M32,3c1.846,0,3.343,1.8,3.343,4.023A6.411,6.411,0,0,1,32,12.361s4.012-1.709,4.012-5.338A4.018,4.018,0,0,0,32,3Z" transform="translate(-13.988 0)" fill="#dc303e" />
                                        <path id="Path_340-16" data-name="Path 340" d="M28.5,45l-1,1h2.006Z" transform="translate(-10.491 -32.639)" fill="#f03849" />
                                        <ellipse id="Ellipse_6-16" data-name="Ellipse 6" cx="1.124" cy="0.843" rx="1.124" ry="0.843" transform="translate(15.124 4.57)" fill="#ff848e" />
                                        <rect id="Rectangle_3-16" data-name="Rectangle 3" width="1.124" height="0.562" rx="0.281" transform="translate(17.372 11.877)" fill="#ffd342" />
                                    </g>
                                    <g id="balloon-17" data-name="balloon" transform="translate(1764.346 775.464)">
                                        <path id="Path_236-2" data-name="Path 236" d="M3005.24,581.1l61.473,16.9-62.136-32.974Z" transform="translate(-2995.892 -568.999)" fill="inherit" stroke="#cbcbcb" stroke-width="1" />
                                        <path id="Path_337-17" data-name="Path 337" d="M31.558,50.914a.166.166,0,0,1-.092-.028,2.219,2.219,0,0,1-.736-2.259.167.167,0,1,1,.324.076,1.925,1.925,0,0,0,.6,1.906.167.167,0,0,1-.093.305Z" transform="translate(-13.894 -37.921)" fill="#444" />
                                        <path id="Path_338-17" data-name="Path 338" d="M17,3a3,3,0,0,0-3,3.006C14,8.718,17,10,17,10s3-1.277,3-3.989A3,3,0,0,0,17,3Z" transform="translate(0 0)" fill="#f03849" />
                                        <path id="Path_339-17" data-name="Path 339" d="M32,3a2.788,2.788,0,0,1,2.5,3.006A4.79,4.79,0,0,1,32,10s3-1.277,3-3.989A3,3,0,0,0,32,3Z" transform="translate(-15.002 0)" fill="#dc303e" />
                                        <path id="Path_340-17" data-name="Path 340" d="M28.25,45l-.75.75H29Z" transform="translate(-11.251 -35.005)" fill="#f03849" />
                                        <ellipse id="Ellipse_6-17" data-name="Ellipse 6" cx="0.84" cy="0.63" rx="0.84" ry="0.63" transform="translate(14.84 4.173)" fill="#ff848e" />
                                        <rect id="Rectangle_3-17" data-name="Rectangle 3" width="0.84" height="0.42" rx="0.21" transform="translate(16.52 9.633)" fill="#ffd342" />
                                    </g>
                                    <g id="balloon-18" data-name="balloon" transform="translate(1788.369 740.672)">
                                        <path id="Path_235-2" data-name="Path 235" d="M3003,549.45l1.91,15.741,61.308,32.974V494.936Z" transform="translate(-3019.915 -534.207)" fill="inherit" stroke="#cbcbcb" stroke-width="1" />
                                        <path id="Path_337-18" data-name="Path 337" d="M33.848,57.148a.6.6,0,0,1-.33-.1c-3.878-2.585-2.688-7.865-2.636-8.088a.6.6,0,1,1,1.161.273c-.011.047-1.049,4.7,2.136,6.823a.6.6,0,0,1-.331,1.093Z" transform="translate(-6.728 -18.362)" fill="#444" />
                                        <path id="Path_338-18" data-name="Path 338" d="M24.736,3A10.751,10.751,0,0,0,14,13.766c0,9.71,10.736,14.284,10.736,14.284s10.736-4.574,10.736-14.284A10.751,10.751,0,0,0,24.736,3Z" fill="#f03849" />
                                        <path id="Path_339-18" data-name="Path 339" d="M32,3c4.941,0,8.946,4.82,8.946,10.766C40.946,23.476,32,28.05,32,28.05s10.736-4.574,10.736-14.284A10.751,10.751,0,0,0,32,3Z" transform="translate(-7.264)" fill="#dc303e" />
                                        <path id="Path_340-18" data-name="Path 340" d="M30.184,45,27.5,47.684h5.368Z" transform="translate(-5.448 -16.95)" fill="#f03849" />
                                        <ellipse id="Ellipse_6-18" data-name="Ellipse 6" cx="3.008" cy="2.256" rx="3.008" ry="2.256" transform="translate(17.008 7.202)" fill="#ff848e" />
                                        <rect id="Rectangle_3-18" data-name="Rectangle 3" width="3.008" height="1.504" rx="0.752" transform="translate(23.024 26.754)" fill="#ffd342" />
                                    </g>
                                    <g id="balloon-19" data-name="balloon" transform="translate(1825.831 756.794)">
                                        <path id="Path_234-2" data-name="Path 234" d="M3066.36,496.294V597.966l17.171-9.478s.426-23.972,0-30.6-7.946-41.042-9.858-47.8S3066.36,496.294,3066.36,496.294Z" transform="translate(-3057.377 -550.329)" fill="inherit" stroke="#cbcbcb" stroke-width="1" />
                                        <path id="Path_337-19" data-name="Path 337" d="M32.239,52.769a.294.294,0,0,1-.163-.049c-1.915-1.276-1.327-3.883-1.3-3.993a.294.294,0,1,1,.573.135c-.005.023-.518,2.321,1.054,3.369a.294.294,0,0,1-.164.539Z" transform="translate(-11.762 -32.102)" fill="#444" />
                                        <path id="Path_338-19" data-name="Path 338" d="M19.3,3A5.308,5.308,0,0,0,14,8.315c0,4.794,5.3,7.052,5.3,7.052s5.3-2.258,5.3-7.052A5.308,5.308,0,0,0,19.3,3Z" transform="translate(0)" fill="#f03849" />
                                        <path id="Path_339-19" data-name="Path 339" d="M32,3c2.439,0,4.417,2.38,4.417,5.315,0,4.794-4.417,7.052-4.417,7.052s5.3-2.258,5.3-7.052A5.308,5.308,0,0,0,32,3Z" transform="translate(-12.7)" fill="#dc303e" />
                                        <path id="Path_340-19" data-name="Path 340" d="M28.825,45,27.5,46.325h2.65Z" transform="translate(-9.525 -29.633)" fill="#f03849" />
                                        <ellipse id="Ellipse_6-19" data-name="Ellipse 6" cx="1.485" cy="1.114" rx="1.485" ry="1.114" transform="translate(15.485 5.075)" fill="#ff848e" />
                                        <rect id="Rectangle_3-19" data-name="Rectangle 3" width="1.485" height="0.743" rx="0.371" transform="translate(18.455 14.727)" fill="#ffd342" />
                                    </g>
                                    <g id="balloon-20" data-name="balloon" transform="translate(1770.745 706.26)">
                                        <path id="Path_233-2" data-name="Path 233" d="M3049.01,463.605s5.928,7.164,7.178,9.663,7.765,14.772,8.7,17.672,1.473,4.82,1.473,4.82l-63.427,52.705s-2.451-11.079-4.412-15.589,1.177.49-6.569-13.824c-3.432-6.961-2.549-5.392-2.549-5.392l-1.275-1.765,45.3-23.139Z" transform="translate(-3002.291 -499.795)" fill="inherit" stroke="#cbcbcb" stroke-width="1" />
                                        <path id="Path_337-20" data-name="Path 337" d="M32.642,53.864a.369.369,0,0,1-.2-.062c-2.406-1.6-1.668-4.879-1.635-5.018a.37.37,0,1,1,.72.169c-.007.029-.651,2.916,1.325,4.233a.37.37,0,0,1-.206.678Z" transform="translate(-10.502 -28.663)" fill="#444" />
                                        <path id="Path_338-20" data-name="Path 338" d="M20.66,3A6.67,6.67,0,0,0,14,9.679c0,6.024,6.66,8.862,6.66,8.862s6.66-2.838,6.66-8.862A6.67,6.67,0,0,0,20.66,3Z" transform="translate(0)" fill="#f03849" />
                                        <path id="Path_339-20" data-name="Path 339" d="M32,3c3.065,0,5.55,2.99,5.55,6.679,0,6.024-5.55,8.862-5.55,8.862s6.66-2.838,6.66-8.862A6.67,6.67,0,0,0,32,3Z" transform="translate(-11.34)" fill="#dc303e" />
                                        <path id="Path_340-20" data-name="Path 340" d="M29.165,45,27.5,46.665h3.33Z" transform="translate(-8.505 -26.459)" fill="#f03849" />
                                        <ellipse id="Ellipse_6-20" data-name="Ellipse 6" cx="1.866" cy="1.4" rx="1.866" ry="1.4" transform="translate(15.866 5.607)" fill="#ff848e" />
                                        <rect id="Rectangle_3-20" data-name="Rectangle 3" width="1.866" height="0.933" rx="0.467" transform="translate(19.598 17.737)" fill="#ffd342" />
                                    </g>
                                    <g id="balloon-21" data-name="balloon" transform="translate(1644.745 663.467)">
                                        <path id="Path_331-2" data-name="Path 331" d="M2929.98,471.884s-13.127-1.938-18.59-1.938-22.907-.881-28.9-.881h-10.308l7.048-13.3,51.541,7.665v8.987Z" transform="translate(-2876.291 -457.003)" fill="#2b2a2f" stroke="#cbcbcb" stroke-width="1" />
                                        <path id="Path_337-21" data-name="Path 337" d="M31.323,50.276a.122.122,0,0,1-.068-.021,1.633,1.633,0,0,1-.542-1.662.123.123,0,1,1,.239.056,1.416,1.416,0,0,0,.439,1.4.123.123,0,0,1-.068.225Z" transform="translate(-14.627 -39.923)" fill="#444" />
                                        <path id="Path_338-21" data-name="Path 338" d="M16.206,3A2.209,2.209,0,0,0,14,5.212c0,2,2.206,2.935,2.206,2.935s2.206-.94,2.206-2.935A2.209,2.209,0,0,0,16.206,3Z" transform="translate(0)" fill="#f03849" />
                                        <path id="Path_339-21" data-name="Path 339" d="M32,3a2.051,2.051,0,0,1,1.838,2.212A3.525,3.525,0,0,1,32,8.147s2.206-.94,2.206-2.935A2.209,2.209,0,0,0,32,3Z" transform="translate(-15.794)" fill="#dc303e" />
                                        <path id="Path_340-21" data-name="Path 340" d="M28.051,45l-.551.551h1.1Z" transform="translate(-11.846 -36.853)" fill="#f03849" />
                                        <ellipse id="Ellipse_6-21" data-name="Ellipse 6" cx="0.618" cy="0.464" rx="0.618" ry="0.464" transform="translate(14.618 3.863)" fill="#ff848e" />
                                        <rect id="Rectangle_3-21" data-name="Rectangle 3" width="0.618" height="0.309" rx="0.155" transform="translate(15.854 7.881)" fill="#ffd342" />
                                    </g>
                                    <g id="balloon-22" data-name="balloon" transform="translate(1713.624 657.837)">
                                        <path id="Path_220-2" data-name="Path 220" d="M2956.91,421.888v60.8l14.992,10.029,8.314-24.291Z" transform="translate(-2945.17 -451.372)" fill="inherit" stroke="#cbcbcb" stroke-width="1" />
                                        <path id="Path_337-22" data-name="Path 337" d="M32.642,53.864a.369.369,0,0,1-.2-.062c-2.406-1.6-1.668-4.879-1.635-5.018a.37.37,0,1,1,.72.169c-.007.029-.651,2.916,1.325,4.233a.37.37,0,0,1-.206.678Z" transform="translate(-10.502 -28.663)" fill="#444" />
                                        <path id="Path_338-22" data-name="Path 338" d="M20.66,3A6.67,6.67,0,0,0,14,9.679c0,6.024,6.66,8.862,6.66,8.862s6.66-2.838,6.66-8.862A6.67,6.67,0,0,0,20.66,3Z" transform="translate(0)" fill="#f03849" />
                                        <path id="Path_339-22" data-name="Path 339" d="M32,3c3.065,0,5.55,2.99,5.55,6.679,0,6.024-5.55,8.862-5.55,8.862s6.66-2.838,6.66-8.862A6.67,6.67,0,0,0,32,3Z" transform="translate(-11.34)" fill="#dc303e" />
                                        <path id="Path_340-22" data-name="Path 340" d="M29.165,45,27.5,46.665h3.33Z" transform="translate(-8.505 -26.459)" fill="#f03849" />
                                        <ellipse id="Ellipse_6-22" data-name="Ellipse 6" cx="1.866" cy="1.4" rx="1.866" ry="1.4" transform="translate(15.866 5.607)" fill="#ff848e" />
                                        <rect id="Rectangle_3-22" data-name="Rectangle 3" width="1.866" height="0.933" rx="0.467" transform="translate(19.598 17.737)" fill="#ffd342" />
                                    </g>
                                    <g id="balloon-23" data-name="balloon" transform="translate(1738.832 682.908)">
                                        <path id="Path_227-2" data-name="Path 227" d="M2972.1,492.714l16.073,19.122L3033.9,488.97l-54.017-19.718Z" transform="translate(-2970.378 -476.444)" fill="inherit" stroke="#cbcbcb" stroke-width="1" />
                                        <path id="Path_337-23" data-name="Path 337" d="M32.642,53.864a.369.369,0,0,1-.2-.062c-2.406-1.6-1.668-4.879-1.635-5.018a.37.37,0,1,1,.72.169c-.007.029-.651,2.916,1.325,4.233a.37.37,0,0,1-.206.678Z" transform="translate(-10.502 -28.663)" fill="#444" />
                                        <path id="Path_338-23" data-name="Path 338" d="M20.66,3A6.67,6.67,0,0,0,14,9.679c0,6.024,6.66,8.862,6.66,8.862s6.66-2.838,6.66-8.862A6.67,6.67,0,0,0,20.66,3Z" transform="translate(0)" fill="#f03849" />
                                        <path id="Path_339-23" data-name="Path 339" d="M32,3c3.065,0,5.55,2.99,5.55,6.679,0,6.024-5.55,8.862-5.55,8.862s6.66-2.838,6.66-8.862A6.67,6.67,0,0,0,32,3Z" transform="translate(-11.34)" fill="#dc303e" />
                                        <path id="Path_340-23" data-name="Path 340" d="M29.165,45,27.5,46.665h3.33Z" transform="translate(-8.505 -26.459)" fill="#f03849" />
                                        <ellipse id="Ellipse_6-23" data-name="Ellipse 6" cx="1.866" cy="1.4" rx="1.866" ry="1.4" transform="translate(15.866 5.607)" fill="#ff848e" />
                                        <rect id="Rectangle_3-23" data-name="Rectangle 3" width="1.866" height="0.933" rx="0.467" transform="translate(19.598 17.737)" fill="#ffd342" />
                                    </g>
                                    <g id="balloon-24" data-name="balloon" transform="translate(1761.745 658.26)">
                                        <path id="Path_225-2" data-name="Path 225" d="M3024.55,453.753l8.588,35.561L2979.86,469.3l14.785-16.7Z" transform="translate(-2993.291 -451.795)" fill="inherit" stroke="#cbcbcb" stroke-width="1" />
                                        <path id="Path_337-24" data-name="Path 337" d="M32.642,53.864a.369.369,0,0,1-.2-.062c-2.406-1.6-1.668-4.879-1.635-5.018a.37.37,0,1,1,.72.169c-.007.029-.651,2.916,1.325,4.233a.37.37,0,0,1-.206.678Z" transform="translate(-10.502 -28.663)" fill="#444" />
                                        <path id="Path_338-24" data-name="Path 338" d="M20.66,3A6.67,6.67,0,0,0,14,9.679c0,6.024,6.66,8.862,6.66,8.862s6.66-2.838,6.66-8.862A6.67,6.67,0,0,0,20.66,3Z" transform="translate(0)" fill="#f03849" />
                                        <path id="Path_339-24" data-name="Path 339" d="M32,3c3.065,0,5.55,2.99,5.55,6.679,0,6.024-5.55,8.862-5.55,8.862s6.66-2.838,6.66-8.862A6.67,6.67,0,0,0,32,3Z" transform="translate(-11.34)" fill="#dc303e" />
                                        <path id="Path_340-24" data-name="Path 340" d="M29.165,45,27.5,46.665h3.33Z" transform="translate(-8.505 -26.459)" fill="#f03849" />
                                        <ellipse id="Ellipse_6-24" data-name="Ellipse 6" cx="1.866" cy="1.4" rx="1.866" ry="1.4" transform="translate(15.866 5.607)" fill="#ff848e" />
                                        <rect id="Rectangle_3-24" data-name="Rectangle 3" width="1.866" height="0.933" rx="0.467" transform="translate(19.598 17.737)" fill="#ffd342" />
                                    </g>
                                    <g id="balloon-25" data-name="balloon" transform="translate(1784.745 657.429)">
                                        <path id="Path_336-2" data-name="Path 336" d="M1043.138,489.314l-8.267-35.489,12.618-5.481s10.707,14.02,11.216,15.04C1058.451,463,1043.138,489.314,1043.138,489.314Z" transform="translate(-1026.291 -450.964)" fill="inherit" stroke="#cbcbcb" stroke-width="1" />
                                        <path id="Path_337-25" data-name="Path 337" d="M32.183,52.615a.283.283,0,0,1-.157-.048c-1.846-1.231-1.279-3.743-1.254-3.85a.284.284,0,1,1,.553.13c-.005.022-.5,2.237,1.017,3.248a.284.284,0,0,1-.158.52Z" transform="translate(-11.938 -32.583)" fill="#444" />
                                        <path id="Path_338-25" data-name="Path 338" d="M19.11,3A5.117,5.117,0,0,0,14,8.124c0,4.622,5.11,6.8,5.11,6.8s5.11-2.177,5.11-6.8A5.117,5.117,0,0,0,19.11,3Z" transform="translate(0)" fill="#f03849" />
                                        <path id="Path_339-25" data-name="Path 339" d="M32,3c2.352,0,4.258,2.294,4.258,5.124,0,4.622-4.258,6.8-4.258,6.8s5.11-2.177,5.11-6.8A5.117,5.117,0,0,0,32,3Z" transform="translate(-12.89)" fill="#dc303e" />
                                        <path id="Path_340-25" data-name="Path 340" d="M28.777,45,27.5,46.277h2.555Z" transform="translate(-9.668 -30.078)" fill="#f03849" />
                                        <ellipse id="Ellipse_6-25" data-name="Ellipse 6" cx="1.432" cy="1.074" rx="1.432" ry="1.074" transform="translate(15.432 5)" fill="#ff848e" />
                                        <rect id="Rectangle_3-25" data-name="Rectangle 3" width="1.432" height="0.716" rx="0.358" transform="translate(18.295 14.305)" fill="#ffd342" />
                                    </g>
                                    <g id="balloon-26" data-name="balloon" transform="translate(1765.745 632.037)">
                                        <path id="Path_221-2" data-name="Path 221" d="M3011.84,424.045l15.1,13.04-2.353,17.256-21.864-13.824Z" transform="translate(-2997.291 -425.572)" fill="inherit" stroke="#cbcbcb" stroke-width="1" />
                                        <path id="Path_337-26" data-name="Path 337" d="M31.685,51.26a.19.19,0,0,1-.105-.032,2.537,2.537,0,0,1-.841-2.582.19.19,0,1,1,.371.087,2.2,2.2,0,0,0,.682,2.178.19.19,0,0,1-.106.349Z" transform="translate(-13.496 -36.836)" fill="#444" />
                                        <path id="Path_338-26" data-name="Path 338" d="M17.427,3A3.432,3.432,0,0,0,14,6.437c0,3.1,3.427,4.56,3.427,4.56s3.427-1.46,3.427-4.56A3.432,3.432,0,0,0,17.427,3Z" fill="#f03849" />
                                        <path id="Path_339-26" data-name="Path 339" d="M32,3a3.187,3.187,0,0,1,2.856,3.437A5.476,5.476,0,0,1,32,11s3.427-1.46,3.427-4.56A3.432,3.432,0,0,0,32,3Z" transform="translate(-14.573)" fill="#dc303e" />
                                        <path id="Path_340-26" data-name="Path 340" d="M28.357,45l-.857.857h1.714Z" transform="translate(-10.93 -34.003)" fill="#f03849" />
                                        <ellipse id="Ellipse_6-26" data-name="Ellipse 6" cx="0.96" cy="0.72" rx="0.96" ry="0.72" transform="translate(14.96 4.341)" fill="#ff848e" />
                                        <rect id="Rectangle_3-26" data-name="Rectangle 3" width="0.96" height="0.48" rx="0.24" transform="translate(16.881 10.583)" fill="#ffd342" />
                                    </g>
                                    <g id="balloon-27" data-name="balloon" transform="translate(1757.507 646.397)">
                                        <path id="Path_222-2" data-name="Path 222" d="M2994.96,452.516l29.588,1.856-21.7-14.04Z" transform="translate(-2989.053 -439.932)" fill="inherit" stroke="#cbcbcb" stroke-width="1" />
                                        <path id="Path_337-27" data-name="Path 337" d="M31.3,50.206a.118.118,0,0,1-.065-.02,1.569,1.569,0,0,1-.52-1.6.118.118,0,1,1,.229.054,1.361,1.361,0,0,0,.422,1.347.118.118,0,0,1-.065.216Z" transform="translate(-14.708 -40.142)" fill="#444" />
                                        <path id="Path_338-27" data-name="Path 338" d="M16.119,3A2.122,2.122,0,0,0,14,5.125c0,1.917,2.119,2.82,2.119,2.82s2.119-.9,2.119-2.82A2.122,2.122,0,0,0,16.119,3Z" transform="translate(0)" fill="#f03849" />
                                        <path id="Path_339-27" data-name="Path 339" d="M32,3a1.971,1.971,0,0,1,1.766,2.125A3.386,3.386,0,0,1,32,7.945s2.119-.9,2.119-2.82A2.122,2.122,0,0,0,32,3Z" transform="translate(-15.881)" fill="#dc303e" />
                                        <path id="Path_340-27" data-name="Path 340" d="M28.03,45l-.53.53h1.06Z" transform="translate(-11.911 -37.055)" fill="#f03849" />
                                        <ellipse id="Ellipse_6-27" data-name="Ellipse 6" cx="0.594" cy="0.445" rx="0.594" ry="0.445" transform="translate(14.594 3.829)" fill="#ff848e" />
                                        <rect id="Rectangle_3-27" data-name="Rectangle 3" width="0.594" height="0.297" rx="0.148" transform="translate(15.781 7.689)" fill="#ffd342" />
                                    </g>
                                    <g id="balloon-28" data-name="balloon" transform="translate(1744.507 620.987)">
                                        <path id="Path_218-2" data-name="Path 218" d="M2956.91,420.485l46.015,19.933,8.922-16.374s-15.785-10-16.079-10S2956.91,420.485,2956.91,420.485Z" transform="translate(-2976.053 -414.522)" fill="inherit" stroke="#cbcbcb" stroke-width="1" />
                                        <path id="Path_337-28" data-name="Path 337" d="M31.778,51.514a.208.208,0,0,1-.115-.035,2.77,2.77,0,0,1-.919-2.82.208.208,0,1,1,.4.1,2.4,2.4,0,0,0,.745,2.379.208.208,0,0,1-.116.381Z" transform="translate(-13.204 -36.039)" fill="#444" />
                                        <path id="Path_338-28" data-name="Path 338" d="M17.742,3A3.748,3.748,0,0,0,14,6.753c0,3.385,3.742,4.979,3.742,4.979s3.742-1.594,3.742-4.979A3.748,3.748,0,0,0,17.742,3Z" transform="translate(0)" fill="#f03849" />
                                        <path id="Path_339-28" data-name="Path 339" d="M32,3c1.722,0,3.119,1.68,3.119,3.753A5.98,5.98,0,0,1,32,11.732s3.742-1.594,3.742-4.979A3.748,3.748,0,0,0,32,3Z" transform="translate(-14.258)" fill="#dc303e" />
                                        <path id="Path_340-28" data-name="Path 340" d="M28.436,45l-.936.936h1.871Z" transform="translate(-10.693 -33.268)" fill="#f03849" />
                                        <ellipse id="Ellipse_6-28" data-name="Ellipse 6" cx="1.049" cy="0.786" rx="1.049" ry="0.786" transform="translate(15.049 4.465)" fill="#ff848e" />
                                        <rect id="Rectangle_3-28" data-name="Rectangle 3" width="1.049" height="0.524" rx="0.262" transform="translate(17.146 11.28)" fill="#ffd342" />
                                    </g>
                                    <g id="balloon-29" data-name="balloon" transform="translate(1739.646 647.25) rotate(-30)">
                                        <path id="Path_224-2" data-name="Path 224" d="M3002.73,440.333l-7.943,12.067-37.594-32.14Z" transform="translate(-2352.736 -1867.327) rotate(30)" fill="inherit" stroke="#cbcbcb" stroke-width="1" />
                                        <path id="Path_337-29" data-name="Path 337" d="M31.533,50.846a.162.162,0,0,1-.09-.027,2.157,2.157,0,0,1-.715-2.2.162.162,0,1,1,.315.074,1.871,1.871,0,0,0,.58,1.852.162.162,0,0,1-.09.3Z" transform="translate(-13.972 -38.134)" fill="#444" />
                                        <path id="Path_338-29" data-name="Path 338" d="M16.914,3A2.918,2.918,0,0,0,14,5.922C14,8.557,16.914,9.8,16.914,9.8s2.914-1.241,2.914-3.877A2.918,2.918,0,0,0,16.914,3Z" transform="translate(0)" fill="#f03849" />
                                        <path id="Path_339-29" data-name="Path 339" d="M32,3a2.709,2.709,0,0,1,2.428,2.922A4.655,4.655,0,0,1,32,9.8s2.914-1.241,2.914-3.877A2.918,2.918,0,0,0,32,3Z" transform="translate(-15.086)" fill="#dc303e" />
                                        <path id="Path_340-29" data-name="Path 340" d="M28.228,45l-.728.728h1.457Z" transform="translate(-11.315 -35.202)" fill="#f03849" />
                                        <ellipse id="Ellipse_6-29" data-name="Ellipse 6" cx="0.816" cy="0.612" rx="0.816" ry="0.612" transform="translate(14.816 4.14)" fill="#ff848e" />
                                        <rect id="Rectangle_3-29" data-name="Rectangle 3" width="0.816" height="0.408" rx="0.204" transform="translate(16.449 9.447)" fill="#ffd342" />
                                    </g>
                                    <g id="balloon-30" data-name="balloon" transform="translate(1730.86 651.387) rotate(-11)">
                                        <path id="Path_223-2" data-name="Path 223" d="M2980.21,468.558l14.674-16.57-37.943-31.571Z" transform="matrix(0.982, 0.191, -0.191, 0.982, -2823.083, -1002.001)" fill="inherit" stroke="#cbcbcb" stroke-width="1" />
                                        <path id="Path_337-30" data-name="Path 337" d="M31.654,51.175a.184.184,0,0,1-.1-.031,2.459,2.459,0,0,1-.815-2.5.185.185,0,1,1,.359.084,2.133,2.133,0,0,0,.661,2.111.185.185,0,0,1-.1.338Z" transform="translate(-13.594 -37.102)" fill="#444" />
                                        <path id="Path_338-30" data-name="Path 338" d="M17.322,3A3.326,3.326,0,0,0,14,6.331c0,3,3.322,4.42,3.322,4.42s3.322-1.415,3.322-4.42A3.326,3.326,0,0,0,17.322,3Z" transform="translate(0)" fill="#f03849" />
                                        <path id="Path_339-30" data-name="Path 339" d="M32,3a3.089,3.089,0,0,1,2.768,3.331A5.308,5.308,0,0,1,32,10.751s3.322-1.415,3.322-4.42A3.326,3.326,0,0,0,32,3Z" transform="translate(-14.678)" fill="#dc303e" />
                                        <path id="Path_340-30" data-name="Path 340" d="M28.33,45l-.83.83h1.661Z" transform="translate(-11.009 -34.249)" fill="#f03849" />
                                        <ellipse id="Ellipse_6-30" data-name="Ellipse 6" cx="0.931" cy="0.698" rx="0.931" ry="0.698" transform="translate(14.931 4.3)" fill="#ff848e" />
                                        <rect id="Rectangle_3-30" data-name="Rectangle 3" width="0.931" height="0.465" rx="0.233" transform="translate(16.792 10.35)" fill="#ffd342" />
                                    </g>
                                    <g id="balloon-31" data-name="balloon" transform="matrix(0.946, 0.326, -0.326, 0.946, 1703.822, 647.563)">
                                        <path id="Path_231-2" data-name="Path 231" d="M2930.95,472.186V463.46l26-42.061v61.18s-12.354-6.667-13.824-7.255a64.765,64.765,0,0,0-7.647-2.451A28.685,28.685,0,0,0,2930.95,472.186Z" transform="matrix(0.946, -0.326, 0.326, 0.946, -2919.053, 538.596)" fill="inherit" stroke="#cbcbcb" stroke-width="1" />
                                        <path id="Path_337-31" data-name="Path 337" d="M31.831,51.657a.217.217,0,0,1-.121-.037,2.9,2.9,0,0,1-.962-2.953.218.218,0,1,1,.424.1,2.517,2.517,0,0,0,.78,2.491.218.218,0,0,1-.121.4Z" transform="translate(-13.04 -35.59)" fill="#444" />
                                        <path id="Path_338-31" data-name="Path 338" d="M17.92,3A3.925,3.925,0,0,0,14,6.931c0,3.545,3.92,5.215,3.92,5.215s3.92-1.67,3.92-5.215A3.925,3.925,0,0,0,17.92,3Z" transform="translate(0)" fill="#f03849" />
                                        <path id="Path_339-31" data-name="Path 339" d="M32,3c1.8,0,3.267,1.76,3.267,3.931A6.263,6.263,0,0,1,32,12.146s3.92-1.67,3.92-5.215A3.925,3.925,0,0,0,32,3Z" transform="translate(-14.08)" fill="#dc303e" />
                                        <path id="Path_340-31" data-name="Path 340" d="M28.48,45l-.98.98h1.96Z" transform="translate(-10.56 -32.854)" fill="#f03849" />
                                        <ellipse id="Ellipse_6-31" data-name="Ellipse 6" cx="1.098" cy="0.824" rx="1.098" ry="0.824" transform="translate(15.098 4.534)" fill="#ff848e" />
                                        <rect id="Rectangle_3-31" data-name="Rectangle 3" width="1.098" height="0.549" rx="0.275" transform="translate(17.295 11.673)" fill="#ffd342" />
                                    </g>
                                    <g id="balloon-32" data-name="balloon" transform="translate(1577.946 656.93) rotate(-12)">
                                        <path id="Path_305-2" data-name="Path 305" d="M2823.57,441.173l-5,26.056h32.012Z" transform="matrix(0.978, 0.208, -0.208, 0.978, -2654.441, -1024.748)" fill="inherit" stroke="#cbcbcb" stroke-width="1" />
                                        <path id="Path_337-32" data-name="Path 337" d="M31.831,51.657a.217.217,0,0,1-.121-.037,2.9,2.9,0,0,1-.962-2.953.218.218,0,1,1,.424.1,2.517,2.517,0,0,0,.78,2.491.218.218,0,0,1-.121.4Z" transform="translate(-13.04 -35.59)" fill="#444" />
                                        <path id="Path_338-32" data-name="Path 338" d="M17.92,3A3.925,3.925,0,0,0,14,6.931c0,3.545,3.92,5.215,3.92,5.215s3.92-1.67,3.92-5.215A3.925,3.925,0,0,0,17.92,3Z" transform="translate(0)" fill="#f03849" />
                                        <path id="Path_339-32" data-name="Path 339" d="M32,3c1.8,0,3.267,1.76,3.267,3.931A6.263,6.263,0,0,1,32,12.146s3.92-1.67,3.92-5.215A3.925,3.925,0,0,0,32,3Z" transform="translate(-14.08)" fill="#dc303e" />
                                        <path id="Path_340-32" data-name="Path 340" d="M28.48,45l-.98.98h1.96Z" transform="translate(-10.56 -32.854)" fill="#f03849" />
                                        <ellipse id="Ellipse_6-32" data-name="Ellipse 6" cx="1.098" cy="0.824" rx="1.098" ry="0.824" transform="translate(15.098 4.534)" fill="#ff848e" />
                                        <rect id="Rectangle_3-32" data-name="Rectangle 3" width="1.098" height="0.549" rx="0.275" transform="translate(17.295 11.673)" fill="#ffd342" />
                                    </g>
                                    <g id="balloon-33" data-name="balloon" transform="translate(1678.684 617.967) rotate(17)">
                                        <path id="Path_213-2" data-name="Path 213" d="M2879.28,400.219l51.88,62.581,25.747-42.953Z" transform="translate(-2903.378 457.347) rotate(-17)" fill="inherit" stroke="#cbcbcb" stroke-width="1" />
                                        <path id="Path_337-33" data-name="Path 337" d="M32.036,52.216a.256.256,0,0,1-.142-.043c-1.667-1.111-1.155-3.381-1.133-3.477a.256.256,0,1,1,.5.117c0,.02-.451,2.02.918,2.933a.256.256,0,0,1-.142.47Z" transform="translate(-12.396 -33.834)" fill="#444" />
                                        <path id="Path_338-33" data-name="Path 338" d="M18.615,3A4.621,4.621,0,0,0,14,7.628c0,4.174,4.615,6.14,4.615,6.14s4.615-1.966,4.615-6.14A4.621,4.621,0,0,0,18.615,3Z" transform="translate(0)" fill="#f03849" />
                                        <path id="Path_339-33" data-name="Path 339" d="M32,3c2.124,0,3.846,2.072,3.846,4.628,0,4.174-3.846,6.14-3.846,6.14s4.615-1.966,4.615-6.14A4.621,4.621,0,0,0,32,3Z" transform="translate(-13.385)" fill="#dc303e" />
                                        <path id="Path_340-33" data-name="Path 340" d="M28.654,45,27.5,46.154h2.307Z" transform="translate(-10.039 -31.233)" fill="#f03849" />
                                        <ellipse id="Ellipse_6-33" data-name="Ellipse 6" cx="1.293" cy="0.97" rx="1.293" ry="0.97" transform="translate(15.293 4.806)" fill="#ff848e" />
                                        <rect id="Rectangle_3-33" data-name="Rectangle 3" width="1.293" height="0.646" rx="0.323" transform="translate(17.879 13.21)" fill="#ffd342" />
                                    </g>
                                    <g id="balloon-34" data-name="balloon" transform="translate(1678.676 608.299) rotate(-21)">
                                        <path id="Path_215-2" data-name="Path 215" d="M2936.39,395.248l20.9,24.854-77.877-20.138,7.775-4.716Z" transform="matrix(0.934, 0.358, -0.358, 0.934, -2572.922, -1418.074)" fill="inherit" stroke="#cbcbcb" stroke-width="1" />
                                        <path id="Path_337-34" data-name="Path 337" d="M31.658,51.187a.185.185,0,0,1-.1-.031,2.47,2.47,0,0,1-.819-2.514.185.185,0,1,1,.361.085,2.143,2.143,0,0,0,.664,2.121.185.185,0,0,1-.1.34Z" transform="translate(-13.58 -37.063)" fill="#444" />
                                        <path id="Path_338-34" data-name="Path 338" d="M17.337,3A3.342,3.342,0,0,0,14,6.347c0,3.018,3.337,4.44,3.337,4.44s3.337-1.422,3.337-4.44A3.342,3.342,0,0,0,17.337,3Z" transform="translate(0)" fill="#f03849" />
                                        <path id="Path_339-34" data-name="Path 339" d="M32,3a3.1,3.1,0,0,1,2.781,3.347A5.332,5.332,0,0,1,32,10.787s3.337-1.422,3.337-4.44A3.342,3.342,0,0,0,32,3Z" transform="translate(-14.663)" fill="#dc303e" />
                                        <path id="Path_340-34" data-name="Path 340" d="M28.334,45l-.834.834h1.669Z" transform="translate(-10.997 -34.213)" fill="#f03849" />
                                        <ellipse id="Ellipse_6-34" data-name="Ellipse 6" cx="0.935" cy="0.701" rx="0.935" ry="0.701" transform="translate(14.935 4.306)" fill="#ff848e" />
                                        <rect id="Rectangle_3-34" data-name="Rectangle 3" width="0.935" height="0.468" rx="0.234" transform="translate(16.805 10.384)" fill="#ffd342" />
                                    </g>
                                    <g id="balloon-35" data-name="balloon" transform="translate(1702.676 610.299) rotate(-21)">
                                        <path id="Path_216-2" data-name="Path 216" d="M2965.83,401.494l-8.54,18.991-21.158-25.364Z" transform="matrix(0.934, 0.358, -0.358, 0.934, -2594.611, -1428.542)" fill="inherit" stroke="#cbcbcb" stroke-width="1" />
                                        <path id="Path_337-35" data-name="Path 337" d="M31.658,51.187a.185.185,0,0,1-.1-.031,2.47,2.47,0,0,1-.819-2.514.185.185,0,1,1,.361.085,2.143,2.143,0,0,0,.664,2.121.185.185,0,0,1-.1.34Z" transform="translate(-13.58 -37.063)" fill="#444" />
                                        <path id="Path_338-35" data-name="Path 338" d="M17.337,3A3.342,3.342,0,0,0,14,6.347c0,3.018,3.337,4.44,3.337,4.44s3.337-1.422,3.337-4.44A3.342,3.342,0,0,0,17.337,3Z" transform="translate(0)" fill="#f03849" />
                                        <path id="Path_339-35" data-name="Path 339" d="M32,3a3.1,3.1,0,0,1,2.781,3.347A5.332,5.332,0,0,1,32,10.787s3.337-1.422,3.337-4.44A3.342,3.342,0,0,0,32,3Z" transform="translate(-14.663)" fill="#dc303e" />
                                        <path id="Path_340-35" data-name="Path 340" d="M28.334,45l-.834.834h1.669Z" transform="translate(-10.997 -34.213)" fill="#f03849" />
                                        <ellipse id="Ellipse_6-35" data-name="Ellipse 6" cx="0.935" cy="0.701" rx="0.935" ry="0.701" transform="translate(14.935 4.306)" fill="#ff848e" />
                                        <rect id="Rectangle_3-35" data-name="Rectangle 3" width="0.935" height="0.468" rx="0.234" transform="translate(16.805 10.384)" fill="#ffd342" />
                                    </g>
                                    <g id="balloon-36" data-name="balloon" transform="translate(1638.676 631.766) rotate(-21)">
                                        <path id="Path_228-2" data-name="Path 228" d="M2930.95,463.679l-59.05-28.433,7.316-35.221Z" transform="matrix(0.934, 0.358, -0.358, 0.934, -2527.169, -1425.648)" fill="inherit" stroke="#cbcbcb" stroke-width="1" />
                                        <path id="Path_337-36" data-name="Path 337" d="M31.658,51.187a.185.185,0,0,1-.1-.031,2.47,2.47,0,0,1-.819-2.514.185.185,0,1,1,.361.085,2.143,2.143,0,0,0,.664,2.121.185.185,0,0,1-.1.34Z" transform="translate(-13.58 -37.063)" fill="#444" />
                                        <path id="Path_338-36" data-name="Path 338" d="M17.337,3A3.342,3.342,0,0,0,14,6.347c0,3.018,3.337,4.44,3.337,4.44s3.337-1.422,3.337-4.44A3.342,3.342,0,0,0,17.337,3Z" transform="translate(0)" fill="#f03849" />
                                        <path id="Path_339-36" data-name="Path 339" d="M32,3a3.1,3.1,0,0,1,2.781,3.347A5.332,5.332,0,0,1,32,10.787s3.337-1.422,3.337-4.44A3.342,3.342,0,0,0,32,3Z" transform="translate(-14.663)" fill="#dc303e" />
                                        <path id="Path_340-36" data-name="Path 340" d="M28.334,45l-.834.834h1.669Z" transform="translate(-10.997 -34.213)" fill="#f03849" />
                                        <ellipse id="Ellipse_6-36" data-name="Ellipse 6" cx="0.935" cy="0.701" rx="0.935" ry="0.701" transform="translate(14.935 4.306)" fill="#ff848e" />
                                        <rect id="Rectangle_3-36" data-name="Rectangle 3" width="0.935" height="0.468" rx="0.234" transform="translate(16.805 10.384)" fill="#ffd342" />
                                    </g>
                                    <g id="balloon-37" data-name="balloon" transform="translate(1633.567 650.766) rotate(-21)">
                                        <path id="Path_230-2" data-name="Path 230" d="M2929.59,463.679l-50-7.572-8.236-20.688Z" transform="matrix(0.934, 0.358, -0.358, 0.934, -2515.591, -1441.556)" fill="inherit" stroke="#cbcbcb" stroke-width="1" />
                                        <path id="Path_337-37" data-name="Path 337" d="M31.658,51.187a.185.185,0,0,1-.1-.031,2.47,2.47,0,0,1-.819-2.514.185.185,0,1,1,.361.085,2.143,2.143,0,0,0,.664,2.121.185.185,0,0,1-.1.34Z" transform="translate(-13.58 -37.063)" fill="#444" />
                                        <path id="Path_338-37" data-name="Path 338" d="M17.337,3A3.342,3.342,0,0,0,14,6.347c0,3.018,3.337,4.44,3.337,4.44s3.337-1.422,3.337-4.44A3.342,3.342,0,0,0,17.337,3Z" transform="translate(0)" fill="#f03849" />
                                        <path id="Path_339-37" data-name="Path 339" d="M32,3a3.1,3.1,0,0,1,2.781,3.347A5.332,5.332,0,0,1,32,10.787s3.337-1.422,3.337-4.44A3.342,3.342,0,0,0,32,3Z" transform="translate(-14.663)" fill="#dc303e" />
                                        <path id="Path_340-37" data-name="Path 340" d="M28.334,45l-.834.834h1.669Z" transform="translate(-10.997 -34.213)" fill="#f03849" />
                                        <ellipse id="Ellipse_6-37" data-name="Ellipse 6" cx="0.935" cy="0.701" rx="0.935" ry="0.701" transform="translate(14.935 4.306)" fill="#ff848e" />
                                        <rect id="Rectangle_3-37" data-name="Rectangle 3" width="0.935" height="0.468" rx="0.234" transform="translate(16.805 10.384)" fill="#ffd342" />
                                    </g>
                                    <g id="balloon-38" data-name="balloon" transform="translate(1623.569 658.784) rotate(-21)">
                                        <path id="Path_229-2" data-name="Path 229" d="M2871.25,436.33l-6.173,32.327,6.863.588,7.647-13.334Z" transform="matrix(0.934, 0.358, -0.358, 0.934, -2503.383, -1445.459)" fill="inherit" stroke="#cbcbcb" stroke-width="1" />
                                        <path id="Path_337-38" data-name="Path 337" d="M31.561,50.924a.167.167,0,0,1-.093-.028,2.228,2.228,0,0,1-.739-2.268.167.167,0,1,1,.326.076,1.933,1.933,0,0,0,.6,1.913.167.167,0,0,1-.093.306Z" transform="translate(-13.883 -37.891)" fill="#444" />
                                        <path id="Path_338-38" data-name="Path 338" d="M17.01,3A3.014,3.014,0,0,0,14,6.018c0,2.722,3.01,4,3.01,4s3.01-1.282,3.01-4A3.014,3.014,0,0,0,17.01,3Z" transform="translate(0)" fill="#f03849" />
                                        <path id="Path_339-38" data-name="Path 339" d="M32,3a2.8,2.8,0,0,1,2.508,3.018,4.809,4.809,0,0,1-2.508,4s3.01-1.282,3.01-4A3.014,3.014,0,0,0,32,3Z" transform="translate(-14.99)" fill="#dc303e" />
                                        <path id="Path_340-38" data-name="Path 340" d="M28.252,45l-.752.752H29Z" transform="translate(-11.243 -34.977)" fill="#f03849" />
                                        <ellipse id="Ellipse_6-38" data-name="Ellipse 6" cx="0.843" cy="0.632" rx="0.843" ry="0.632" transform="translate(14.843 4.178)" fill="#ff848e" />
                                        <rect id="Rectangle_3-38" data-name="Rectangle 3" width="0.843" height="0.422" rx="0.211" transform="translate(16.53 9.66)" fill="#ffd342" />
                                    </g>
                                    <g id="balloon-39" data-name="balloon" transform="translate(1600.314 654.152) rotate(-21)">
                                        <path id="Path_306-2" data-name="Path 306" d="M2865.08,468.215l-14.332-.573-27.145-26.8,47.761-5.269Z" transform="matrix(0.934, 0.358, -0.358, 0.934, -2483.333, -1432.8)" fill="inherit" stroke="#cbcbcb" stroke-width="1" />
                                        <path id="Path_337-39" data-name="Path 337" d="M32.12,52.444a.272.272,0,0,1-.151-.046c-1.769-1.179-1.226-3.588-1.2-3.69a.272.272,0,1,1,.53.124c0,.021-.478,2.144.974,3.113a.272.272,0,0,1-.151.5Z" transform="translate(-12.135 -33.119)" fill="#444" />
                                        <path id="Path_338-39" data-name="Path 338" d="M18.9,3A4.9,4.9,0,0,0,14,7.911c0,4.43,4.9,6.516,4.9,6.516s4.9-2.087,4.9-6.516A4.9,4.9,0,0,0,18.9,3Z" transform="translate(0)" fill="#f03849" />
                                        <path id="Path_339-39" data-name="Path 339" d="M32,3c2.254,0,4.081,2.2,4.081,4.911,0,4.43-4.081,6.516-4.081,6.516s4.9-2.087,4.9-6.516A4.9,4.9,0,0,0,32,3Z" transform="translate(-13.103)" fill="#dc303e" />
                                        <path id="Path_340-39" data-name="Path 340" d="M28.724,45,27.5,46.224h2.449Z" transform="translate(-9.827 -30.572)" fill="#f03849" />
                                        <ellipse id="Ellipse_6-39" data-name="Ellipse 6" cx="1.372" cy="1.029" rx="1.372" ry="1.029" transform="translate(15.372 4.917)" fill="#ff848e" />
                                        <rect id="Rectangle_3-39" data-name="Rectangle 3" width="1.372" height="0.686" rx="0.343" transform="translate(18.117 13.836)" fill="#ffd342" />
                                    </g>
                                    <g id="balloon-40" data-name="balloon" transform="translate(1598.095 624.575) rotate(-21)">
                                        <path id="Path_211-2" data-name="Path 211" d="M2824.22,440.623l47.032-4.971-18.991-41.169Z" transform="matrix(0.934, 0.358, -0.358, 0.934, -2491.86, -1404.392)" fill="inherit" stroke="#cbcbcb" stroke-width="1" />
                                        <path id="Path_337-40" data-name="Path 337" d="M32.175,52.593a.282.282,0,0,1-.156-.047c-1.836-1.224-1.272-3.723-1.248-3.829a.282.282,0,1,1,.55.129c-.005.022-.5,2.225,1.011,3.23a.282.282,0,0,1-.157.517Z" transform="translate(-11.964 -32.654)" fill="#444" />
                                        <path id="Path_338-40" data-name="Path 338" d="M19.082,3A5.089,5.089,0,0,0,14,8.1c0,4.6,5.082,6.761,5.082,6.761s5.082-2.165,5.082-6.761A5.089,5.089,0,0,0,19.082,3Z" transform="translate(0)" fill="#f03849" />
                                        <path id="Path_339-40" data-name="Path 339" d="M32,3c2.339,0,4.235,2.282,4.235,5.1,0,4.6-4.235,6.761-4.235,6.761s5.082-2.165,5.082-6.761A5.089,5.089,0,0,0,32,3Z" transform="translate(-12.918)" fill="#dc303e" />
                                        <path id="Path_340-40" data-name="Path 340" d="M28.77,45,27.5,46.27h2.541Z" transform="translate(-9.689 -30.143)" fill="#f03849" />
                                        <ellipse id="Ellipse_6-40" data-name="Ellipse 6" cx="1.424" cy="1.068" rx="1.424" ry="1.068" transform="translate(15.424 4.989)" fill="#ff848e" />
                                        <rect id="Rectangle_3-40" data-name="Rectangle 3" width="1.424" height="0.712" rx="0.356" transform="translate(18.271 14.244)" fill="#ffd342" />
                                    </g>
                                    <g id="balloon-41" data-name="balloon" transform="translate(1613.653 609.549) rotate(-21)">
                                        <path id="Path_212-2" data-name="Path 212" d="M2871.89,435.525l7.01-35.816-26.384-5.481Z" transform="matrix(0.934, 0.358, -0.358, 0.934, -2512.098, -1395.793)" fill="inherit" stroke="#cbcbcb" stroke-width="1" />
                                        <path id="Path_337-41" data-name="Path 337" d="M32.175,52.593a.282.282,0,0,1-.156-.047c-1.836-1.224-1.272-3.723-1.248-3.829a.282.282,0,1,1,.55.129c-.005.022-.5,2.225,1.011,3.23a.282.282,0,0,1-.157.517Z" transform="translate(-11.964 -32.654)" fill="#444" />
                                        <path id="Path_338-41" data-name="Path 338" d="M19.082,3A5.089,5.089,0,0,0,14,8.1c0,4.6,5.082,6.761,5.082,6.761s5.082-2.165,5.082-6.761A5.089,5.089,0,0,0,19.082,3Z" transform="translate(0)" fill="#f03849" />
                                        <path id="Path_339-41" data-name="Path 339" d="M32,3c2.339,0,4.235,2.282,4.235,5.1,0,4.6-4.235,6.761-4.235,6.761s5.082-2.165,5.082-6.761A5.089,5.089,0,0,0,32,3Z" transform="translate(-12.918)" fill="#dc303e" />
                                        <path id="Path_340-41" data-name="Path 340" d="M28.77,45,27.5,46.27h2.541Z" transform="translate(-9.689 -30.143)" fill="#f03849" />
                                        <ellipse id="Ellipse_6-41" data-name="Ellipse 6" cx="1.424" cy="1.068" rx="1.424" ry="1.068" transform="translate(15.424 4.989)" fill="#ff848e" />
                                        <rect id="Rectangle_3-41" data-name="Rectangle 3" width="1.424" height="0.712" rx="0.356" transform="translate(18.271 14.244)" fill="#ffd342" />
                                    </g>
                                    <g id="balloon-42" data-name="balloon" transform="translate(1565.653 618.549) rotate(-21)">
                                        <path id="Path_304-2" data-name="Path 304" d="M2852.52,394.484h-17.409l-65.424,27.676,54.242,19.014Z" transform="matrix(0.934, 0.358, -0.358, 0.934, -2463.733, -1387.14)" fill="inherit" stroke="#cbcbcb" stroke-width="1" />
                                        <path id="Path_337-42" data-name="Path 337" d="M32.175,52.593a.282.282,0,0,1-.156-.047c-1.836-1.224-1.272-3.723-1.248-3.829a.282.282,0,1,1,.55.129c-.005.022-.5,2.225,1.011,3.23a.282.282,0,0,1-.157.517Z" transform="translate(-11.964 -32.654)" fill="#444" />
                                        <path id="Path_338-42" data-name="Path 338" d="M19.082,3A5.089,5.089,0,0,0,14,8.1c0,4.6,5.082,6.761,5.082,6.761s5.082-2.165,5.082-6.761A5.089,5.089,0,0,0,19.082,3Z" transform="translate(0)" fill="#f03849" />
                                        <path id="Path_339-42" data-name="Path 339" d="M32,3c2.339,0,4.235,2.282,4.235,5.1,0,4.6-4.235,6.761-4.235,6.761s5.082-2.165,5.082-6.761A5.089,5.089,0,0,0,32,3Z" transform="translate(-12.918)" fill="#dc303e" />
                                        <path id="Path_340-42" data-name="Path 340" d="M28.77,45,27.5,46.27h2.541Z" transform="translate(-9.689 -30.143)" fill="#f03849" />
                                        <ellipse id="Ellipse_6-42" data-name="Ellipse 6" cx="1.424" cy="1.068" rx="1.424" ry="1.068" transform="translate(15.424 4.989)" fill="#ff848e" />
                                        <rect id="Rectangle_3-42" data-name="Rectangle 3" width="1.424" height="0.712" rx="0.356" transform="translate(18.271 14.244)" fill="#ffd342" />
                                    </g>
                                    <g id="balloon-43" data-name="balloon" transform="translate(1537.809 639.235) rotate(-21)">
                                        <path id="Path_308-2" data-name="Path 308" d="M2769.09,422.745s3.322,7.559,5.04,11.11a78.948,78.948,0,0,0,5.612,8.934l44.439-2.176Z" transform="matrix(0.934, 0.358, -0.358, 0.934, -2430.324, -1396.474)" fill="inherit" stroke="#cbcbcb" stroke-width="1" />
                                        <path id="Path_337-43" data-name="Path 337" d="M31.393,50.465a.135.135,0,0,1-.075-.023,1.807,1.807,0,0,1-.6-1.839.136.136,0,0,1,.264.062,1.567,1.567,0,0,0,.486,1.551.136.136,0,0,1-.075.248Z" transform="translate(-14.41 -39.329)" fill="#444" />
                                        <path id="Path_338-43" data-name="Path 338" d="M16.441,3A2.444,2.444,0,0,0,14,5.448c0,2.208,2.441,3.247,2.441,3.247s2.441-1.04,2.441-3.247A2.444,2.444,0,0,0,16.441,3Z" transform="translate(0)" fill="#f03849" />
                                        <path id="Path_339-43" data-name="Path 339" d="M32,3a2.27,2.27,0,0,1,2.034,2.448A3.9,3.9,0,0,1,32,8.695s2.441-1.04,2.441-3.247A2.444,2.444,0,0,0,32,3Z" transform="translate(-15.559)" fill="#dc303e" />
                                        <path id="Path_340-43" data-name="Path 340" d="M28.11,45l-.61.61h1.22Z" transform="translate(-11.67 -36.305)" fill="#f03849" />
                                        <ellipse id="Ellipse_6-43" data-name="Ellipse 6" cx="0.684" cy="0.513" rx="0.684" ry="0.513" transform="translate(14.684 3.955)" fill="#ff848e" />
                                        <rect id="Rectangle_3-43" data-name="Rectangle 3" width="0.684" height="0.342" rx="0.171" transform="translate(16.051 8.4)" fill="#ffd342" />
                                    </g>
                                    <g id="balloon-44" data-name="balloon" transform="translate(1533.609 609.112) rotate(-21)">
                                        <path id="Path_309-2" data-name="Path 309" d="M2769.09,422.425s-2.077-5.682-2.338-7.246,5.646-19.731,5.646-19.731l62.714-1.161Z" transform="matrix(0.934, 0.358, -0.358, 0.934, -2437.199, -1366.847)" fill="inherit" stroke="#cbcbcb" stroke-width="1" />
                                        <path id="Path_337-44" data-name="Path 337" d="M31.69,51.273a.191.191,0,0,1-.106-.032,2.55,2.55,0,0,1-.846-2.595.191.191,0,0,1,.373.087,2.212,2.212,0,0,0,.685,2.189.191.191,0,0,1-.106.351Z" transform="translate(-13.48 -36.793)" fill="#444" />
                                        <path id="Path_338-44" data-name="Path 338" d="M17.444,3A3.449,3.449,0,0,0,14,6.454c0,3.115,3.444,4.583,3.444,4.583s3.444-1.467,3.444-4.583A3.449,3.449,0,0,0,17.444,3Z" fill="#f03849" />
                                        <path id="Path_339-44" data-name="Path 339" d="M32,3a3.2,3.2,0,0,1,2.87,3.454A5.5,5.5,0,0,1,32,11.036s3.444-1.467,3.444-4.583A3.449,3.449,0,0,0,32,3Z" transform="translate(-14.556)" fill="#dc303e" />
                                        <path id="Path_340-44" data-name="Path 340" d="M28.361,45l-.861.861h1.722Z" transform="translate(-10.917 -33.964)" fill="#f03849" />
                                        <ellipse id="Ellipse_6-44" data-name="Ellipse 6" cx="0.965" cy="0.724" rx="0.965" ry="0.724" transform="translate(14.965 4.348)" fill="#ff848e" />
                                        <rect id="Rectangle_3-44" data-name="Rectangle 3" width="0.965" height="0.483" rx="0.241" transform="translate(16.895 10.621)" fill="#ffd342" />
                                    </g>
                                    <g id="balloon-45" data-name="balloon" transform="translate(1489.609 618.112) rotate(-21)">
                                        <path id="Path_312-2" data-name="Path 312" d="M2731.3,424.235l1.869-27.228,26.024,26.9Z" transform="matrix(0.934, 0.358, -0.358, 0.934, -2392.896, -1359.481)" fill="inherit" stroke="#cbcbcb" stroke-width="1" />
                                        <path id="Path_337-45" data-name="Path 337" d="M31.69,51.273a.191.191,0,0,1-.106-.032,2.55,2.55,0,0,1-.846-2.595.191.191,0,0,1,.373.087,2.212,2.212,0,0,0,.685,2.189.191.191,0,0,1-.106.351Z" transform="translate(-13.48 -36.793)" fill="#444" />
                                        <path id="Path_338-45" data-name="Path 338" d="M17.444,3A3.449,3.449,0,0,0,14,6.454c0,3.115,3.444,4.583,3.444,4.583s3.444-1.467,3.444-4.583A3.449,3.449,0,0,0,17.444,3Z" fill="#f03849" />
                                        <path id="Path_339-45" data-name="Path 339" d="M32,3a3.2,3.2,0,0,1,2.87,3.454A5.5,5.5,0,0,1,32,11.036s3.444-1.467,3.444-4.583A3.449,3.449,0,0,0,32,3Z" transform="translate(-14.556)" fill="#dc303e" />
                                        <path id="Path_340-45" data-name="Path 340" d="M28.361,45l-.861.861h1.722Z" transform="translate(-10.917 -33.964)" fill="#f03849" />
                                        <ellipse id="Ellipse_6-45" data-name="Ellipse 6" cx="0.965" cy="0.724" rx="0.965" ry="0.724" transform="translate(14.965 4.348)" fill="#ff848e" />
                                        <rect id="Rectangle_3-45" data-name="Rectangle 3" width="0.965" height="0.483" rx="0.241" transform="translate(16.895 10.621)" fill="#ffd342" />
                                    </g>
                                    <g id="balloon-46" data-name="balloon" transform="translate(1496.609 635.112) rotate(-21)">
                                        <path id="Path_311-2" data-name="Path 311" d="M2751.68,443.773l-20.38-11.521v-8.017h28.175s-3.779,6.987-4.81,10.881a85.485,85.485,0,0,1-2.985,8.657Z" transform="matrix(0.934, 0.358, -0.358, 0.934, -2393.339, -1377.86)" fill="inherit" stroke="#cbcbcb" stroke-width="1" />
                                        <path id="Path_337-46" data-name="Path 337" d="M31.69,51.273a.191.191,0,0,1-.106-.032,2.55,2.55,0,0,1-.846-2.595.191.191,0,0,1,.373.087,2.212,2.212,0,0,0,.685,2.189.191.191,0,0,1-.106.351Z" transform="translate(-13.48 -36.793)" fill="#444" />
                                        <path id="Path_338-46" data-name="Path 338" d="M17.444,3A3.449,3.449,0,0,0,14,6.454c0,3.115,3.444,4.583,3.444,4.583s3.444-1.467,3.444-4.583A3.449,3.449,0,0,0,17.444,3Z" fill="#f03849" />
                                        <path id="Path_339-46" data-name="Path 339" d="M32,3a3.2,3.2,0,0,1,2.87,3.454A5.5,5.5,0,0,1,32,11.036s3.444-1.467,3.444-4.583A3.449,3.449,0,0,0,32,3Z" transform="translate(-14.556)" fill="#dc303e" />
                                        <path id="Path_340-46" data-name="Path 340" d="M28.361,45l-.861.861h1.722Z" transform="translate(-10.917 -33.964)" fill="#f03849" />
                                        <ellipse id="Ellipse_6-46" data-name="Ellipse 6" cx="0.965" cy="0.724" rx="0.965" ry="0.724" transform="translate(14.965 4.348)" fill="#ff848e" />
                                        <rect id="Rectangle_3-46" data-name="Rectangle 3" width="0.965" height="0.483" rx="0.241" transform="translate(16.895 10.621)" fill="#ffd342" />
                                    </g>
                                    <g id="balloon-47" data-name="balloon" transform="translate(1485.102 663.112) rotate(-21)">
                                        <path id="Path_314-2" data-name="Path 314" d="M2751.8,443.566s-1.965,12.877-1.965,13.825v1.288l-23.788,19.179,2.169-25.55Z" transform="matrix(0.934, 0.358, -0.358, 0.934, -2372.561, -1399.876)" fill="inherit" stroke="#cbcbcb" stroke-width="1" />
                                        <path id="Path_337-47" data-name="Path 337" d="M31.69,51.273a.191.191,0,0,1-.106-.032,2.55,2.55,0,0,1-.846-2.595.191.191,0,0,1,.373.087,2.212,2.212,0,0,0,.685,2.189.191.191,0,0,1-.106.351Z" transform="translate(-13.48 -36.793)" fill="#444" />
                                        <path id="Path_338-47" data-name="Path 338" d="M17.444,3A3.449,3.449,0,0,0,14,6.454c0,3.115,3.444,4.583,3.444,4.583s3.444-1.467,3.444-4.583A3.449,3.449,0,0,0,17.444,3Z" fill="#f03849" />
                                        <path id="Path_339-47" data-name="Path 339" d="M32,3a3.2,3.2,0,0,1,2.87,3.454A5.5,5.5,0,0,1,32,11.036s3.444-1.467,3.444-4.583A3.449,3.449,0,0,0,32,3Z" transform="translate(-14.556)" fill="#dc303e" />
                                        <path id="Path_340-47" data-name="Path 340" d="M28.361,45l-.861.861h1.722Z" transform="translate(-10.917 -33.964)" fill="#f03849" />
                                        <ellipse id="Ellipse_6-47" data-name="Ellipse 6" cx="0.965" cy="0.724" rx="0.965" ry="0.724" transform="translate(14.965 4.348)" fill="#ff848e" />
                                        <rect id="Rectangle_3-47" data-name="Rectangle 3" width="0.965" height="0.483" rx="0.241" transform="translate(16.895 10.621)" fill="#ffd342" />
                                    </g>
                                    <g id="balloon-48" data-name="balloon" transform="translate(1494.102 683.112) rotate(-21)">
                                        <path id="Path_315-2" data-name="Path 315" d="M2749.61,458.577s.265,23.964,2.379,31.277,3,10.749,3,10.749l-28.9-22.554Z" transform="matrix(0.934, 0.358, -0.358, 0.934, -2373.796, -1421.773)" fill="inherit" stroke="#cbcbcb" stroke-width="1" />
                                        <path id="Path_337-48" data-name="Path 337" d="M31.69,51.273a.191.191,0,0,1-.106-.032,2.55,2.55,0,0,1-.846-2.595.191.191,0,0,1,.373.087,2.212,2.212,0,0,0,.685,2.189.191.191,0,0,1-.106.351Z" transform="translate(-13.48 -36.793)" fill="#444" />
                                        <path id="Path_338-48" data-name="Path 338" d="M17.444,3A3.449,3.449,0,0,0,14,6.454c0,3.115,3.444,4.583,3.444,4.583s3.444-1.467,3.444-4.583A3.449,3.449,0,0,0,17.444,3Z" fill="#f03849" />
                                        <path id="Path_339-48" data-name="Path 339" d="M32,3a3.2,3.2,0,0,1,2.87,3.454A5.5,5.5,0,0,1,32,11.036s3.444-1.467,3.444-4.583A3.449,3.449,0,0,0,32,3Z" transform="translate(-14.556)" fill="#dc303e" />
                                        <path id="Path_340-48" data-name="Path 340" d="M28.361,45l-.861.861h1.722Z" transform="translate(-10.917 -33.964)" fill="#f03849" />
                                        <ellipse id="Ellipse_6-48" data-name="Ellipse 6" cx="0.965" cy="0.724" rx="0.965" ry="0.724" transform="translate(14.965 4.348)" fill="#ff848e" />
                                        <rect id="Rectangle_3-48" data-name="Rectangle 3" width="0.965" height="0.483" rx="0.241" transform="translate(16.895 10.621)" fill="#ffd342" />
                                    </g>
                                    <g id="balloon-49" data-name="balloon" transform="translate(1480.186 710.182) rotate(18)">
                                        <path id="Path_317-2" data-name="Path 317" d="M2720.41,525.941l9.277,11.11-3.665-59.329Z" transform="translate(-2734.667 358.907) rotate(-18)" fill="inherit" stroke="#cbcbcb" stroke-width="1" />
                                        <path id="Path_337-49" data-name="Path 337" d="M31.389,50.456a.135.135,0,0,1-.075-.023,1.8,1.8,0,0,1-.6-1.83.135.135,0,0,1,.263.062,1.56,1.56,0,0,0,.483,1.544.135.135,0,0,1-.075.247Z" transform="translate(-14.42 -39.358)" fill="#444" />
                                        <path id="Path_338-49" data-name="Path 338" d="M16.429,3A2.433,2.433,0,0,0,14,5.436c0,2.2,2.429,3.232,2.429,3.232s2.429-1.035,2.429-3.232A2.433,2.433,0,0,0,16.429,3Z" transform="translate(0 0)" fill="#f03849" />
                                        <path id="Path_339-49" data-name="Path 339" d="M32,3a2.259,2.259,0,0,1,2.024,2.436A3.882,3.882,0,0,1,32,8.669s2.429-1.035,2.429-3.232A2.433,2.433,0,0,0,32,3Z" transform="translate(-15.571 0)" fill="#dc303e" />
                                        <path id="Path_340-49" data-name="Path 340" d="M28.107,45l-.607.607h1.215Z" transform="translate(-11.678 -36.331)" fill="#f03849" />
                                        <ellipse id="Ellipse_6-49" data-name="Ellipse 6" cx="0.681" cy="0.511" rx="0.681" ry="0.511" transform="translate(14.681 3.951)" fill="#ff848e" />
                                        <rect id="Rectangle_3-49" data-name="Rectangle 3" width="0.681" height="0.34" rx="0.17" transform="translate(16.042 8.375)" fill="#ffd342" />
                                    </g>
                                    <g id="balloon-50" data-name="balloon" transform="matrix(0.999, -0.052, 0.052, 0.999, 1475.934, 735.61)">
                                        <path id="Path_318-2" data-name="Path 318" d="M2720.41,526.315l-1.549,17.756,10.979-6.981Z" transform="translate(-2676.076 -670.118) rotate(3)" fill="inherit" stroke="#cbcbcb" stroke-width="1" />
                                        <path id="Path_337-50" data-name="Path 337" d="M31.177,49.877a.1.1,0,0,1-.053-.016,1.267,1.267,0,0,1-.42-1.289.1.1,0,0,1,.185.043,1.1,1.1,0,0,0,.34,1.088.1.1,0,0,1-.053.174Z" transform="translate(-15.086 -41.174)" fill="#444" />
                                        <path id="Path_338-50" data-name="Path 338" d="M15.711,3A1.713,1.713,0,0,0,14,4.716a2.812,2.812,0,0,0,1.711,2.277,2.812,2.812,0,0,0,1.711-2.277A1.713,1.713,0,0,0,15.711,3Z" fill="#f03849" />
                                        <path id="Path_339-50" data-name="Path 339" d="M32,3a1.591,1.591,0,0,1,1.426,1.716A2.734,2.734,0,0,1,32,6.992a2.812,2.812,0,0,0,1.711-2.277A1.713,1.713,0,0,0,32,3Z" transform="translate(-16.289)" fill="#dc303e" />
                                        <path id="Path_340-50" data-name="Path 340" d="M27.928,45l-.428.428h.856Z" transform="translate(-12.217 -38.008)" fill="#f03849" />
                                        <ellipse id="Ellipse_6-50" data-name="Ellipse 6" cx="0.479" cy="0.36" rx="0.479" ry="0.36" transform="translate(14.479 3.67)" fill="#ff848e" />
                                        <rect id="Rectangle_3-50" data-name="Rectangle 3" width="0.479" height="0.24" rx="0.12" transform="translate(15.438 6.786)" fill="#ffd342" />
                                    </g>
                                    <g id="balloon-51" data-name="balloon" transform="translate(1510.01 606.516) rotate(-2)">
                                        <path id="Path_310-2" data-name="Path 310" d="M2765.65,415.186s-5.1,5.76-5.584,7a11.355,11.355,0,0,0-.562,1.684l-26.284-26.7s3.084-3,6.872-2.819,32.6.881,32.6.881Z" transform="translate(-2725.996 -496.615) rotate(2)" fill="inherit" stroke="#cbcbcb" stroke-width="1" />
                                        <path id="Path_337-51" data-name="Path 337" d="M31.034,49.488A.068.068,0,0,1,31,49.476a.909.909,0,0,1-.3-.925.068.068,0,0,1,.133.031.788.788,0,0,0,.244.78.068.068,0,0,1-.038.125Z" transform="translate(-15.533 -42.396)" fill="#444" />
                                        <path id="Path_338-51" data-name="Path 338" d="M15.228,3A1.229,1.229,0,0,0,14,4.231a2.017,2.017,0,0,0,1.228,1.633,2.017,2.017,0,0,0,1.228-1.633A1.229,1.229,0,0,0,15.228,3Z" transform="translate(0 0)" fill="#f03849" />
                                        <path id="Path_339-51" data-name="Path 339" d="M32,3a1.142,1.142,0,0,1,1.023,1.231A1.962,1.962,0,0,1,32,5.865a2.017,2.017,0,0,0,1.228-1.633A1.229,1.229,0,0,0,32,3Z" transform="translate(-16.772 0)" fill="#dc303e" />
                                        <path id="Path_340-51" data-name="Path 340" d="M27.807,45l-.307.307h.614Z" transform="translate(-12.579 -39.135)" fill="#f03849" />
                                        <ellipse id="Ellipse_6-51" data-name="Ellipse 6" cx="0.344" cy="0.258" rx="0.344" ry="0.258" transform="translate(14.344 3.481)" fill="#ff848e" />
                                        <rect id="Rectangle_3-51" data-name="Rectangle 3" width="0.344" height="0.172" rx="0.086" transform="translate(15.032 5.716)" fill="#ffd342" />
                                    </g>
                                    <g id="balloon-52" data-name="balloon" transform="translate(1554.93 992.748) rotate(-1)">
                                        <path id="Path_262-2" data-name="Path 262" d="M2785.89,808.859l26.767-40.277v41.424l-27.4.637Z" transform="matrix(1, 0.017, -0.017, 1, -2772.329, -834.794)" fill="inherit" stroke="#cbcbcb" stroke-width="1" />
                                        <path id="Path_337-52" data-name="Path 337" d="M31.639,51.135a.181.181,0,0,1-.1-.031,2.423,2.423,0,0,1-.8-2.466.182.182,0,0,1,.354.083,2.1,2.1,0,0,0,.651,2.08.182.182,0,0,1-.1.333Z" transform="translate(-13.639 -37.227)" fill="#444" />
                                        <path id="Path_338-52" data-name="Path 338" d="M17.273,3A3.277,3.277,0,0,0,14,6.282c0,2.96,3.273,4.354,3.273,4.354s3.273-1.394,3.273-4.354A3.277,3.277,0,0,0,17.273,3Z" transform="translate(0 0)" fill="#f03849" />
                                        <path id="Path_339-52" data-name="Path 339" d="M32,3a3.043,3.043,0,0,1,2.727,3.282A5.229,5.229,0,0,1,32,10.636s3.273-1.394,3.273-4.354A3.277,3.277,0,0,0,32,3Z" transform="translate(-14.727 0)" fill="#dc303e" />
                                        <path id="Path_340-52" data-name="Path 340" d="M28.318,45l-.818.818h1.636Z" transform="translate(-11.046 -34.364)" fill="#f03849" />
                                        <ellipse id="Ellipse_6-52" data-name="Ellipse 6" cx="0.917" cy="0.688" rx="0.917" ry="0.688" transform="translate(14.917 4.281)" fill="#ff848e" />
                                        <rect id="Rectangle_3-52" data-name="Rectangle 3" width="0.917" height="0.458" rx="0.229" transform="translate(16.751 10.241)" fill="#ffd342" />
                                    </g>
                                    <g id="balloon-53" data-name="balloon" transform="translate(1569.93 945.755) rotate(-1)">
                                        <path id="Path_260-2" data-name="Path 260" d="M2812.64,769.167l-8.586-11.081s7.542-15.026,11.661-21,5.1-5.8,6.9-6.092,9.573-.29,10.559-.29,5.28.29,5.28.29Z" transform="matrix(1, 0.017, -0.017, 1, -2788.147, -788.07)" fill="inherit" stroke="#cbcbcb" stroke-width="1" />
                                        <path id="Path_337-53" data-name="Path 337" d="M31.639,51.135a.181.181,0,0,1-.1-.031,2.423,2.423,0,0,1-.8-2.466.182.182,0,0,1,.354.083,2.1,2.1,0,0,0,.651,2.08.182.182,0,0,1-.1.333Z" transform="translate(-13.639 -37.227)" fill="#444" />
                                        <path id="Path_338-53" data-name="Path 338" d="M17.273,3A3.277,3.277,0,0,0,14,6.282c0,2.96,3.273,4.354,3.273,4.354s3.273-1.394,3.273-4.354A3.277,3.277,0,0,0,17.273,3Z" transform="translate(0 0)" fill="#f03849" />
                                        <path id="Path_339-53" data-name="Path 339" d="M32,3a3.043,3.043,0,0,1,2.727,3.282A5.229,5.229,0,0,1,32,10.636s3.273-1.394,3.273-4.354A3.277,3.277,0,0,0,32,3Z" transform="translate(-14.727 0)" fill="#dc303e" />
                                        <path id="Path_340-53" data-name="Path 340" d="M28.318,45l-.818.818h1.636Z" transform="translate(-11.046 -34.364)" fill="#f03849" />
                                        <ellipse id="Ellipse_6-53" data-name="Ellipse 6" cx="0.917" cy="0.688" rx="0.917" ry="0.688" transform="translate(14.917 4.281)" fill="#ff848e" />
                                        <rect id="Rectangle_3-53" data-name="Rectangle 3" width="0.917" height="0.458" rx="0.229" transform="translate(16.751 10.241)" fill="#ffd342" />
                                    </g>
                                    <g id="balloon-54" data-name="balloon" transform="translate(1568.93 996.755) rotate(-1)">
                                        <path id="Path_261-2" data-name="Path 261" d="M2812.4,769.338l.765,40.413,16.442-.765Z" transform="matrix(1, 0.017, -0.017, 1, -2786.257, -839.044)" fill="inherit" stroke="#cbcbcb" stroke-width="1" />
                                        <path id="Path_337-54" data-name="Path 337" d="M31.639,51.135a.181.181,0,0,1-.1-.031,2.423,2.423,0,0,1-.8-2.466.182.182,0,0,1,.354.083,2.1,2.1,0,0,0,.651,2.08.182.182,0,0,1-.1.333Z" transform="translate(-13.639 -37.227)" fill="#444" />
                                        <path id="Path_338-54" data-name="Path 338" d="M17.273,3A3.277,3.277,0,0,0,14,6.282c0,2.96,3.273,4.354,3.273,4.354s3.273-1.394,3.273-4.354A3.277,3.277,0,0,0,17.273,3Z" transform="translate(0 0)" fill="#f03849" />
                                        <path id="Path_339-54" data-name="Path 339" d="M32,3a3.043,3.043,0,0,1,2.727,3.282A5.229,5.229,0,0,1,32,10.636s3.273-1.394,3.273-4.354A3.277,3.277,0,0,0,32,3Z" transform="translate(-14.727 0)" fill="#dc303e" />
                                        <path id="Path_340-54" data-name="Path 340" d="M28.318,45l-.818.818h1.636Z" transform="translate(-11.046 -34.364)" fill="#f03849" />
                                        <ellipse id="Ellipse_6-54" data-name="Ellipse 6" cx="0.917" cy="0.688" rx="0.917" ry="0.688" transform="translate(14.917 4.281)" fill="#ff848e" />
                                        <rect id="Rectangle_3-54" data-name="Rectangle 3" width="0.917" height="0.458" rx="0.229" transform="translate(16.751 10.241)" fill="#ffd342" />
                                    </g>
                                    <g id="balloon-55" data-name="balloon" transform="translate(1583.93 996.755) rotate(-1)">
                                        <path id="Path_333-2" data-name="Path 333" d="M2856.21,808.843h-26.7l-16.916-39.7,29.322,26.694Z" transform="matrix(1, 0.017, -0.017, 1, -2801.255, -839.306)" fill="inherit" stroke="#cbcbcb" stroke-width="1" />
                                        <path id="Path_337-55" data-name="Path 337" d="M31.639,51.135a.181.181,0,0,1-.1-.031,2.423,2.423,0,0,1-.8-2.466.182.182,0,0,1,.354.083,2.1,2.1,0,0,0,.651,2.08.182.182,0,0,1-.1.333Z" transform="translate(-13.639 -37.227)" fill="#444" />
                                        <path id="Path_338-55" data-name="Path 338" d="M17.273,3A3.277,3.277,0,0,0,14,6.282c0,2.96,3.273,4.354,3.273,4.354s3.273-1.394,3.273-4.354A3.277,3.277,0,0,0,17.273,3Z" transform="translate(0 0)" fill="#f03849" />
                                        <path id="Path_339-55" data-name="Path 339" d="M32,3a3.043,3.043,0,0,1,2.727,3.282A5.229,5.229,0,0,1,32,10.636s3.273-1.394,3.273-4.354A3.277,3.277,0,0,0,32,3Z" transform="translate(-14.727 0)" fill="#dc303e" />
                                        <path id="Path_340-55" data-name="Path 340" d="M28.318,45l-.818.818h1.636Z" transform="translate(-11.046 -34.364)" fill="#f03849" />
                                        <ellipse id="Ellipse_6-55" data-name="Ellipse 6" cx="0.917" cy="0.688" rx="0.917" ry="0.688" transform="translate(14.917 4.281)" fill="#ff848e" />
                                        <rect id="Rectangle_3-55" data-name="Rectangle 3" width="0.917" height="0.458" rx="0.229" transform="translate(16.751 10.241)" fill="#ffd342" />
                                    </g>
                                    <g id="balloon-56" data-name="balloon" transform="translate(1560.032 965.158) rotate(28)">
                                        <path id="Path_263-2" data-name="Path 263" d="M2786.43,807.964l.172-1.793.91-2.934c.847-2.624,10.215-31.2,12.525-36.184,2.422-5.226,4.333-9.177,4.333-9.177l8.285,11.344Z" transform="matrix(0.883, -0.469, 0.469, 0.883, -2821.002, 640.68)" fill="inherit" stroke="#cbcbcb" stroke-width="1" />
                                        <path id="Path_337-56" data-name="Path 337" d="M31.639,51.135a.181.181,0,0,1-.1-.031,2.423,2.423,0,0,1-.8-2.466.182.182,0,0,1,.354.083,2.1,2.1,0,0,0,.651,2.08.182.182,0,0,1-.1.333Z" transform="translate(-13.639 -37.227)" fill="#444" />
                                        <path id="Path_338-56" data-name="Path 338" d="M17.273,3A3.277,3.277,0,0,0,14,6.282c0,2.96,3.273,4.354,3.273,4.354s3.273-1.394,3.273-4.354A3.277,3.277,0,0,0,17.273,3Z" transform="translate(0 0)" fill="#f03849" />
                                        <path id="Path_339-56" data-name="Path 339" d="M32,3a3.043,3.043,0,0,1,2.727,3.282A5.229,5.229,0,0,1,32,10.636s3.273-1.394,3.273-4.354A3.277,3.277,0,0,0,32,3Z" transform="translate(-14.727 0)" fill="#dc303e" />
                                        <path id="Path_340-56" data-name="Path 340" d="M28.318,45l-.818.818h1.636Z" transform="translate(-11.046 -34.364)" fill="#f03849" />
                                        <ellipse id="Ellipse_6-56" data-name="Ellipse 6" cx="0.917" cy="0.688" rx="0.917" ry="0.688" transform="translate(14.917 4.281)" fill="#ff848e" />
                                        <rect id="Rectangle_3-56" data-name="Rectangle 3" width="0.917" height="0.458" rx="0.229" transform="translate(16.751 10.241)" fill="#ffd342" />
                                    </g>
                                    <g id="balloon-57" data-name="balloon" transform="translate(1487.596 709.978) rotate(-21)">
                                        <path id="Path_316-2" data-name="Path 316" d="M2726.05,477.858l3.96,58.7,41.422-7.162s-7.742-10.259-9.872-15.872a84.767,84.767,0,0,0-6.581-12.582Z" transform="matrix(0.934, 0.358, -0.358, 0.934, -2358.094, -1444.523)" fill="inherit" stroke="#cbcbcb" stroke-width="1" />
                                        <path id="Path_337-57" data-name="Path 337" d="M32.559,53.638a.354.354,0,0,1-.2-.06c-2.3-1.536-1.6-4.673-1.566-4.806a.354.354,0,0,1,.69.162c-.006.028-.623,2.793,1.269,4.055a.354.354,0,0,1-.2.649Z" transform="translate(-10.762 -29.373)" fill="#444" />
                                        <path id="Path_338-57" data-name="Path 338" d="M20.379,3A6.388,6.388,0,0,0,14,9.4c0,5.77,6.379,8.488,6.379,8.488s6.379-2.718,6.379-8.488A6.388,6.388,0,0,0,20.379,3Z" transform="translate(0 0)" fill="#f03849" />
                                        <path id="Path_339-57" data-name="Path 339" d="M32,3c2.936,0,5.316,2.864,5.316,6.4,0,5.77-5.316,8.488-5.316,8.488s6.379-2.718,6.379-8.488A6.388,6.388,0,0,0,32,3Z" transform="translate(-11.621 0)" fill="#dc303e" />
                                        <path id="Path_340-57" data-name="Path 340" d="M29.095,45,27.5,46.595h3.19Z" transform="translate(-8.715 -27.115)" fill="#f03849" />
                                        <ellipse id="Ellipse_6-57" data-name="Ellipse 6" cx="1.787" cy="1.341" rx="1.787" ry="1.341" transform="translate(15.787 5.497)" fill="#ff848e" />
                                        <rect id="Rectangle_3-57" data-name="Rectangle 3" width="1.787" height="0.894" rx="0.447" transform="translate(19.362 17.115)" fill="#ffd342" />
                                    </g>
                                    <g id="balloon-58" data-name="balloon" transform="translate(1486.064 646.068) rotate(-21)">
                                        <path id="Path_313-2" data-name="Path 313" d="M2750.49,443.773l-22.026,8.549,2.555-20.7Z" transform="matrix(0.934, 0.358, -0.358, 0.934, -2379.568, -1384.31)" fill="inherit" stroke="#cbcbcb" stroke-width="1" />
                                        <path id="Path_337-58" data-name="Path 337" d="M31.5,50.767a.156.156,0,0,1-.087-.026,2.084,2.084,0,0,1-.691-2.121.156.156,0,0,1,.3.072,1.808,1.808,0,0,0,.56,1.79.156.156,0,0,1-.087.287Z" transform="translate(-14.063 -38.382)" fill="#444" />
                                        <path id="Path_338-58" data-name="Path 338" d="M16.816,3A2.82,2.82,0,0,0,14,5.824C14,8.37,16.816,9.57,16.816,9.57s2.816-1.2,2.816-3.746A2.82,2.82,0,0,0,16.816,3Z" fill="#f03849" />
                                        <path id="Path_339-58" data-name="Path 339" d="M32,3a2.618,2.618,0,0,1,2.346,2.824A4.5,4.5,0,0,1,32,9.57s2.816-1.2,2.816-3.746A2.82,2.82,0,0,0,32,3Z" transform="translate(-15.184)" fill="#dc303e" />
                                        <path id="Path_340-58" data-name="Path 340" d="M28.2,45l-.7.7h1.408Z" transform="translate(-11.388 -35.43)" fill="#f03849" />
                                        <ellipse id="Ellipse_6-58" data-name="Ellipse 6" cx="0.789" cy="0.592" rx="0.789" ry="0.592" transform="translate(14.789 4.102)" fill="#ff848e" />
                                        <rect id="Rectangle_3-58" data-name="Rectangle 3" width="0.789" height="0.394" rx="0.197" transform="translate(16.367 9.23)" fill="#ffd342" />
                                    </g>
                                    <g id="balloon-59" data-name="balloon" transform="translate(1558.809 652.235) rotate(-21)">
                                        <path id="Path_307-2" data-name="Path 307" d="M2779.97,442.1l44.554-1.26-5.841,26.228h-11.339s-6.987-2.176-9.163-4.123a119.118,119.118,0,0,1-11.8-12.026C2782.83,446.453,2779.97,442.1,2779.97,442.1Z" transform="matrix(0.934, 0.358, -0.358, 0.934, -2445.328, -1415.986)" fill="inherit" stroke="#cbcbcb" stroke-width="1" />
                                        <path id="Path_337-59" data-name="Path 337" d="M31.393,50.465a.135.135,0,0,1-.075-.023,1.807,1.807,0,0,1-.6-1.839.136.136,0,0,1,.264.062,1.567,1.567,0,0,0,.486,1.551.136.136,0,0,1-.075.248Z" transform="translate(-14.41 -39.329)" fill="#444" />
                                        <path id="Path_338-59" data-name="Path 338" d="M16.441,3A2.444,2.444,0,0,0,14,5.448c0,2.208,2.441,3.247,2.441,3.247s2.441-1.04,2.441-3.247A2.444,2.444,0,0,0,16.441,3Z" transform="translate(0)" fill="#f03849" />
                                        <path id="Path_339-59" data-name="Path 339" d="M32,3a2.27,2.27,0,0,1,2.034,2.448A3.9,3.9,0,0,1,32,8.695s2.441-1.04,2.441-3.247A2.444,2.444,0,0,0,32,3Z" transform="translate(-15.559)" fill="#dc303e" />
                                        <path id="Path_340-59" data-name="Path 340" d="M28.11,45l-.61.61h1.22Z" transform="translate(-11.67 -36.305)" fill="#f03849" />
                                        <ellipse id="Ellipse_6-59" data-name="Ellipse 6" cx="0.684" cy="0.513" rx="0.684" ry="0.513" transform="translate(14.684 3.955)" fill="#ff848e" />
                                        <rect id="Rectangle_3-59" data-name="Rectangle 3" width="0.684" height="0.342" rx="0.171" transform="translate(16.051 8.4)" fill="#ffd342" />
                                    </g>
                                    <g id="balloon-60" data-name="balloon" transform="translate(1784.357 881.446)">
                                        <path id="Path_247-2" data-name="Path 247" d="M3025.61,674.454s1.207,16.617.679,22.047a53.781,53.781,0,0,1-2.187,10.408l6.562,10.559,14.179-43.014Z" transform="translate(-3015.904 -674.981)" fill="inherit" stroke="#cbcbcb" stroke-width="1" />
                                        <path id="Path_337-60" data-name="Path 337" d="M31.858,51.731a.222.222,0,0,1-.123-.037,2.97,2.97,0,0,1-.985-3.023.223.223,0,1,1,.434.1,2.576,2.576,0,0,0,.8,2.55.223.223,0,0,1-.124.408Z" transform="translate(-12.955 -35.358)" fill="#444" />
                                        <path id="Path_338-60" data-name="Path 338" d="M18.012,3A4.018,4.018,0,0,0,14,7.023c0,3.629,4.012,5.338,4.012,5.338s4.012-1.709,4.012-5.338A4.018,4.018,0,0,0,18.012,3Z" transform="translate(0 0)" fill="#f03849" />
                                        <path id="Path_339-60" data-name="Path 339" d="M32,3c1.846,0,3.343,1.8,3.343,4.023A6.411,6.411,0,0,1,32,12.361s4.012-1.709,4.012-5.338A4.018,4.018,0,0,0,32,3Z" transform="translate(-13.988 0)" fill="#dc303e" />
                                        <path id="Path_340-60" data-name="Path 340" d="M28.5,45l-1,1h2.006Z" transform="translate(-10.491 -32.639)" fill="#f03849" />
                                        <ellipse id="Ellipse_6-60" data-name="Ellipse 6" cx="1.124" cy="0.843" rx="1.124" ry="0.843" transform="translate(15.124 4.57)" fill="#ff848e" />
                                        <rect id="Rectangle_3-60" data-name="Rectangle 3" width="1.124" height="0.562" rx="0.281" transform="translate(17.372 11.877)" fill="#ffd342" />
                                    </g>
                                    <g id="balloon-61" data-name="balloon" transform="translate(1794.357 899.446)">
                                        <path id="Path_243-2" data-name="Path 243" d="M3043.94,675.3l-17.12,54.234,8.07.754s9.2-10.257,12.143-15.31,7.617-14.179,7.617-14.179Z" transform="translate(-3025.904 -692.981)" fill="inherit" stroke="#cbcbcb" stroke-width="1" />
                                        <path id="Path_337-61" data-name="Path 337" d="M31.858,51.731a.222.222,0,0,1-.123-.037,2.97,2.97,0,0,1-.985-3.023.223.223,0,1,1,.434.1,2.576,2.576,0,0,0,.8,2.55.223.223,0,0,1-.124.408Z" transform="translate(-12.955 -35.358)" fill="#444" />
                                        <path id="Path_338-61" data-name="Path 338" d="M18.012,3A4.018,4.018,0,0,0,14,7.023c0,3.629,4.012,5.338,4.012,5.338s4.012-1.709,4.012-5.338A4.018,4.018,0,0,0,18.012,3Z" transform="translate(0 0)" fill="#f03849" />
                                        <path id="Path_339-61" data-name="Path 339" d="M32,3c1.846,0,3.343,1.8,3.343,4.023A6.411,6.411,0,0,1,32,12.361s4.012-1.709,4.012-5.338A4.018,4.018,0,0,0,32,3Z" transform="translate(-13.988 0)" fill="#dc303e" />
                                        <path id="Path_340-61" data-name="Path 340" d="M28.5,45l-1,1h2.006Z" transform="translate(-10.491 -32.639)" fill="#f03849" />
                                        <ellipse id="Ellipse_6-61" data-name="Ellipse 6" cx="1.124" cy="0.843" rx="1.124" ry="0.843" transform="translate(15.124 4.57)" fill="#ff848e" />
                                        <rect id="Rectangle_3-61" data-name="Rectangle 3" width="1.124" height="0.562" rx="0.281" transform="translate(17.372 11.877)" fill="#ffd342" />
                                    </g>
                                    <g id="balloon-62" data-name="balloon" transform="translate(1687.053 920.257) rotate(-4)">
                                        <path id="Path_251-2" data-name="Path 251" d="M2927.24,717.215c0-2.422-1.657,26.512-1.657,26.512l52.386,2.039L2940.11,710.46S2927.24,719.637,2927.24,717.215Z" transform="matrix(0.998, 0.07, -0.07, 0.998, -2861.698, -915.645)" fill="inherit" stroke="#cbcbcb" stroke-width="1" />
                                        <path id="Path_337-62" data-name="Path 337" d="M32.783,54.249a.4.4,0,0,1-.22-.067c-2.579-1.719-1.787-5.229-1.752-5.378a.4.4,0,1,1,.772.181c-.007.031-.7,3.125,1.42,4.537a.4.4,0,0,1-.22.727Z" transform="translate(-10.059 -27.455)" fill="#444" />
                                        <path id="Path_338-62" data-name="Path 338" d="M21.138,3A7.148,7.148,0,0,0,14,10.158c0,6.456,7.138,9.5,7.138,9.5s7.138-3.041,7.138-9.5A7.148,7.148,0,0,0,21.138,3Z" fill="#f03849" />
                                        <path id="Path_339-62" data-name="Path 339" d="M32,3c3.285,0,5.948,3.2,5.948,7.158,0,6.456-5.948,9.5-5.948,9.5s7.138-3.041,7.138-9.5A7.148,7.148,0,0,0,32,3Z" transform="translate(-10.862)" fill="#dc303e" />
                                        <path id="Path_340-62" data-name="Path 340" d="M29.285,45,27.5,46.785h3.569Z" transform="translate(-8.146 -25.344)" fill="#f03849" />
                                        <ellipse id="Ellipse_6-62" data-name="Ellipse 6" cx="2" cy="1.5" rx="2" ry="1.5" transform="translate(16 5.794)" fill="#ff848e" />
                                        <rect id="Rectangle_3-62" data-name="Rectangle 3" width="2" height="1" rx="0.5" transform="translate(20 18.794)" fill="#ffd342" />
                                    </g>
                                    <g id="balloon-63" data-name="balloon" transform="translate(1670.878 929.048) rotate(-4)">
                                        <path id="Path_257-2" data-name="Path 257" d="M2891.52,728.113s11.615-.688,17.2-2.95,14.1-5.2,16.291-6.411a11.175,11.175,0,0,0,2.489-1.584L2925.46,745Z" transform="matrix(0.998, 0.07, -0.07, 0.998, -2844.949, -923.286)" fill="inherit" stroke="#cbcbcb" stroke-width="1" />
                                        <path id="Path_337-63" data-name="Path 337" d="M31.734,51.393a.2.2,0,0,1-.111-.034,2.659,2.659,0,0,1-.882-2.707.2.2,0,1,1,.389.091,2.307,2.307,0,0,0,.715,2.283.2.2,0,0,1-.111.366Z" transform="translate(-13.343 -36.418)" fill="#444" />
                                        <path id="Path_338-63" data-name="Path 338" d="M17.592,3A3.6,3.6,0,0,0,14,6.6c0,3.249,3.592,4.78,3.592,4.78s3.592-1.53,3.592-4.78A3.6,3.6,0,0,0,17.592,3Z" fill="#f03849" />
                                        <path id="Path_339-63" data-name="Path 339" d="M32,3c1.653,0,2.994,1.613,2.994,3.6A5.74,5.74,0,0,1,32,11.382s3.592-1.53,3.592-4.78A3.6,3.6,0,0,0,32,3Z" transform="translate(-14.408)" fill="#dc303e" />
                                        <path id="Path_340-63" data-name="Path 340" d="M28.4,45l-.9.9h1.8Z" transform="translate(-10.806 -33.618)" fill="#f03849" />
                                        <ellipse id="Ellipse_6-63" data-name="Ellipse 6" cx="1.007" cy="0.755" rx="1.007" ry="0.755" transform="translate(15.007 4.406)" fill="#ff848e" />
                                        <rect id="Rectangle_3-63" data-name="Rectangle 3" width="1.007" height="0.503" rx="0.252" transform="translate(17.02 10.948)" fill="#ffd342" />
                                    </g>
                                    <g id="balloon-64" data-name="balloon" transform="translate(1691.878 982.048) rotate(-4)">
                                        <path id="Path_255-2" data-name="Path 255" d="M2930.68,771.621l-8.459,30.771s18.026-4.9,21.344-6.184,26.85-11.69,31.148-14.179,12.143-8.447,12.143-8.447Z" transform="matrix(0.998, 0.07, -0.07, 0.998, -2862.201, -977.621)" fill="inherit" stroke="#cbcbcb" stroke-width="1" />
                                        <path id="Path_337-64" data-name="Path 337" d="M31.734,51.393a.2.2,0,0,1-.111-.034,2.659,2.659,0,0,1-.882-2.707.2.2,0,1,1,.389.091,2.307,2.307,0,0,0,.715,2.283.2.2,0,0,1-.111.366Z" transform="translate(-13.343 -36.418)" fill="#444" />
                                        <path id="Path_338-64" data-name="Path 338" d="M17.592,3A3.6,3.6,0,0,0,14,6.6c0,3.249,3.592,4.78,3.592,4.78s3.592-1.53,3.592-4.78A3.6,3.6,0,0,0,17.592,3Z" fill="#f03849" />
                                        <path id="Path_339-64" data-name="Path 339" d="M32,3c1.653,0,2.994,1.613,2.994,3.6A5.74,5.74,0,0,1,32,11.382s3.592-1.53,3.592-4.78A3.6,3.6,0,0,0,32,3Z" transform="translate(-14.408)" fill="#dc303e" />
                                        <path id="Path_340-64" data-name="Path 340" d="M28.4,45l-.9.9h1.8Z" transform="translate(-10.806 -33.618)" fill="#f03849" />
                                        <ellipse id="Ellipse_6-64" data-name="Ellipse 6" cx="1.007" cy="0.755" rx="1.007" ry="0.755" transform="translate(15.007 4.406)" fill="#ff848e" />
                                        <rect id="Rectangle_3-64" data-name="Rectangle 3" width="1.007" height="0.503" rx="0.252" transform="translate(17.02 10.948)" fill="#ffd342" />
                                    </g>
                                    <g id="balloon-65" data-name="balloon" transform="translate(1720.878 961.225) rotate(-4)">
                                        <path id="Path_254-2" data-name="Path 254" d="M2930.68,771l46.905-25.237,10.834,26.512-3.187,1.784Z" transform="matrix(0.998, 0.07, -0.07, 0.998, -2892.583, -958.873)" fill="inherit" stroke="#cbcbcb" stroke-width="1" />
                                        <path id="Path_337-65" data-name="Path 337" d="M31.734,51.393a.2.2,0,0,1-.111-.034,2.659,2.659,0,0,1-.882-2.707.2.2,0,1,1,.389.091,2.307,2.307,0,0,0,.715,2.283.2.2,0,0,1-.111.366Z" transform="translate(-13.343 -36.418)" fill="#444" />
                                        <path id="Path_338-65" data-name="Path 338" d="M17.592,3A3.6,3.6,0,0,0,14,6.6c0,3.249,3.592,4.78,3.592,4.78s3.592-1.53,3.592-4.78A3.6,3.6,0,0,0,17.592,3Z" fill="#f03849" />
                                        <path id="Path_339-65" data-name="Path 339" d="M32,3c1.653,0,2.994,1.613,2.994,3.6A5.74,5.74,0,0,1,32,11.382s3.592-1.53,3.592-4.78A3.6,3.6,0,0,0,32,3Z" transform="translate(-14.408)" fill="#dc303e" />
                                        <path id="Path_340-65" data-name="Path 340" d="M28.4,45l-.9.9h1.8Z" transform="translate(-10.806 -33.618)" fill="#f03849" />
                                        <ellipse id="Ellipse_6-65" data-name="Ellipse 6" cx="1.007" cy="0.755" rx="1.007" ry="0.755" transform="translate(15.007 4.406)" fill="#ff848e" />
                                        <rect id="Rectangle_3-65" data-name="Rectangle 3" width="1.007" height="0.503" rx="0.252" transform="translate(17.02 10.948)" fill="#ffd342" />
                                    </g>
                                    <g id="balloon-66" data-name="balloon" transform="translate(1741.878 951.775) rotate(-4)">
                                        <path id="Path_253-2" data-name="Path 253" d="M2988.66,772.416l-11.2-26.687,37.942-4.815Z" transform="matrix(0.998, 0.07, -0.07, 0.998, -2914.191, -950.91)" fill="inherit" stroke="#cbcbcb" stroke-width="1" />
                                        <path id="Path_337-66" data-name="Path 337" d="M31.734,51.393a.2.2,0,0,1-.111-.034,2.659,2.659,0,0,1-.882-2.707.2.2,0,1,1,.389.091,2.307,2.307,0,0,0,.715,2.283.2.2,0,0,1-.111.366Z" transform="translate(-13.343 -36.418)" fill="#444" />
                                        <path id="Path_338-66" data-name="Path 338" d="M17.592,3A3.6,3.6,0,0,0,14,6.6c0,3.249,3.592,4.78,3.592,4.78s3.592-1.53,3.592-4.78A3.6,3.6,0,0,0,17.592,3Z" fill="#f03849" />
                                        <path id="Path_339-66" data-name="Path 339" d="M32,3c1.653,0,2.994,1.613,2.994,3.6A5.74,5.74,0,0,1,32,11.382s3.592-1.53,3.592-4.78A3.6,3.6,0,0,0,32,3Z" transform="translate(-14.408)" fill="#dc303e" />
                                        <path id="Path_340-66" data-name="Path 340" d="M28.4,45l-.9.9h1.8Z" transform="translate(-10.806 -33.618)" fill="#f03849" />
                                        <ellipse id="Ellipse_6-66" data-name="Ellipse 6" cx="1.007" cy="0.755" rx="1.007" ry="0.755" transform="translate(15.007 4.406)" fill="#ff848e" />
                                        <rect id="Rectangle_3-66" data-name="Rectangle 3" width="1.007" height="0.503" rx="0.252" transform="translate(17.02 10.948)" fill="#ffd342" />
                                    </g>
                                    <g id="balloon-67" data-name="balloon" transform="translate(1665.878 991.225) rotate(-4)">
                                        <path id="Path_256-2" data-name="Path 256" d="M2872.74,808.792l58.113-37.635-8.916,31.428s-17.056,3.771-23.9,4.641-14.272,1.45-18.043,1.566S2872.74,808.792,2872.74,808.792Z" transform="matrix(0.998, 0.07, -0.07, 0.998, -2835.624, -984.963)" fill="inherit" stroke="#cbcbcb" stroke-width="1" />
                                        <path id="Path_337-67" data-name="Path 337" d="M31.734,51.393a.2.2,0,0,1-.111-.034,2.659,2.659,0,0,1-.882-2.707.2.2,0,1,1,.389.091,2.307,2.307,0,0,0,.715,2.283.2.2,0,0,1-.111.366Z" transform="translate(-13.343 -36.418)" fill="#444" />
                                        <path id="Path_338-67" data-name="Path 338" d="M17.592,3A3.6,3.6,0,0,0,14,6.6c0,3.249,3.592,4.78,3.592,4.78s3.592-1.53,3.592-4.78A3.6,3.6,0,0,0,17.592,3Z" fill="#f03849" />
                                        <path id="Path_339-67" data-name="Path 339" d="M32,3c1.653,0,2.994,1.613,2.994,3.6A5.74,5.74,0,0,1,32,11.382s3.592-1.53,3.592-4.78A3.6,3.6,0,0,0,32,3Z" transform="translate(-14.408)" fill="#dc303e" />
                                        <path id="Path_340-67" data-name="Path 340" d="M28.4,45l-.9.9h1.8Z" transform="translate(-10.806 -33.618)" fill="#f03849" />
                                        <ellipse id="Ellipse_6-67" data-name="Ellipse 6" cx="1.007" cy="0.755" rx="1.007" ry="0.755" transform="translate(15.007 4.406)" fill="#ff848e" />
                                        <rect id="Rectangle_3-67" data-name="Rectangle 3" width="1.007" height="0.503" rx="0.252" transform="translate(17.02 10.948)" fill="#ffd342" />
                                    </g>
                                    <g id="balloon-68" data-name="balloon" transform="translate(1721.361 610.261)">
                                        <path id="Path_217-2" data-name="Path 217" d="M2966.39,401.155s25.341,9.654,29.489,12.972c-.075-.151-38.841,6.335-38.539,6.335S2966.39,401.155,2966.39,401.155Z" transform="translate(-2952.907 -403.796)" fill="inherit" stroke="#cbcbcb" stroke-width="1" />
                                        <path id="Path_337-68" data-name="Path 337" d="M31.559,50.919a.167.167,0,0,1-.092-.028,2.224,2.224,0,0,1-.737-2.263.167.167,0,1,1,.325.076,1.929,1.929,0,0,0,.6,1.909.167.167,0,0,1-.093.306Z" transform="translate(-13.888 -37.906)" fill="#444" />
                                        <path id="Path_338-68" data-name="Path 338" d="M17,3a3.008,3.008,0,0,0-3,3.012c0,2.717,3,4,3,4s3-1.28,3-4A3.008,3.008,0,0,0,17,3Z" transform="translate(0)" fill="#f03849" />
                                        <path id="Path_339-68" data-name="Path 339" d="M32,3a2.793,2.793,0,0,1,2.5,3.012,4.8,4.8,0,0,1-2.5,4s3-1.28,3-4A3.008,3.008,0,0,0,32,3Z" transform="translate(-14.996)" fill="#dc303e" />
                                        <path id="Path_340-68" data-name="Path 340" d="M28.251,45l-.751.751H29Z" transform="translate(-11.247 -34.991)" fill="#f03849" />
                                        <ellipse id="Ellipse_6-68" data-name="Ellipse 6" cx="0.842" cy="0.631" rx="0.842" ry="0.631" transform="translate(14.842 4.176)" fill="#ff848e" />
                                        <rect id="Rectangle_3-68" data-name="Rectangle 3" width="0.842" height="0.421" rx="0.21" transform="translate(16.525 9.646)" fill="#ffd342" />
                                    </g>
                                    <g id="balloon-69" data-name="balloon" transform="translate(1782.265 646.862)">
                                        <path id="Path_232-2" data-name="Path 232" d="M3026.95,436.852s5.628,5.177,6.431,6.2,3.793,4.909,4.061,5.355-12.362,5.266-12.362,5.266Z" transform="translate(-3013.811 -440.397)" fill="inherit" stroke="#cbcbcb" stroke-width="1" />
                                        <path id="Path_337-69" data-name="Path 337" d="M31.2,49.949a.1.1,0,0,1-.055-.017,1.332,1.332,0,0,1-.442-1.356.1.1,0,1,1,.195.046,1.156,1.156,0,0,0,.358,1.144.1.1,0,0,1-.056.183Z" transform="translate(-15.004 -40.95)" fill="#444" />
                                        <path id="Path_338-69" data-name="Path 338" d="M15.8,3A1.8,1.8,0,0,0,14,4.8,2.957,2.957,0,0,0,15.8,7.2,2.957,2.957,0,0,0,17.6,4.8,1.8,1.8,0,0,0,15.8,3Z" transform="translate(0 0)" fill="#f03849" />
                                        <path id="Path_339-69" data-name="Path 339" d="M32,3a1.673,1.673,0,0,1,1.5,1.8A2.875,2.875,0,0,1,32,7.2,2.957,2.957,0,0,0,33.8,4.8,1.8,1.8,0,0,0,32,3Z" transform="translate(-16.2 0)" fill="#dc303e" />
                                        <path id="Path_340-69" data-name="Path 340" d="M27.95,45l-.45.45h.9Z" transform="translate(-12.15 -37.801)" fill="#f03849" />
                                        <ellipse id="Ellipse_6-69" data-name="Ellipse 6" cx="0.504" cy="0.378" rx="0.504" ry="0.378" transform="translate(14.504 3.704)" fill="#ff848e" />
                                        <rect id="Rectangle_3-69" data-name="Rectangle 3" width="0.504" height="0.252" rx="0.126" transform="translate(15.513 6.982)" fill="#ffd342" />
                                    </g>
                                    <g id="balloon-70" data-name="balloon" transform="translate(1631.301 599.191)">
                                        <path id="Path_214-2" data-name="Path 214" d="M2886.17,395.121l-7.01,5.1-26.894-5.991Z" transform="translate(-2862.847 -392.726)" fill="inherit" stroke="#cbcbcb" stroke-width="1" />
                                        <path id="Path_337-70" data-name="Path 337" d="M30.936,49.223a.05.05,0,0,1-.028-.008.666.666,0,0,1-.221-.678.05.05,0,1,1,.1.023.578.578,0,0,0,.179.572.05.05,0,0,1-.028.092Z" transform="translate(-15.837 -43.225)" fill="#444" />
                                        <path id="Path_338-70" data-name="Path 338" d="M14.9,3a.9.9,0,0,0-.9.9,1.478,1.478,0,0,0,.9,1.2,1.478,1.478,0,0,0,.9-1.2A.9.9,0,0,0,14.9,3Z" transform="translate(0 0)" fill="#f03849" />
                                        <path id="Path_339-70" data-name="Path 339" d="M32,3a.836.836,0,0,1,.75.9A1.437,1.437,0,0,1,32,5.1a1.478,1.478,0,0,0,.9-1.2A.9.9,0,0,0,32,3Z" transform="translate(-17.101 0)" fill="#dc303e" />
                                        <path id="Path_340-70" data-name="Path 340" d="M27.725,45l-.225.225h.45Z" transform="translate(-12.825 -39.901)" fill="#f03849" />
                                        <ellipse id="Ellipse_6-70" data-name="Ellipse 6" cx="0.252" cy="0.189" rx="0.252" ry="0.189" transform="translate(14.252 3.352)" fill="#ff848e" />
                                        <rect id="Rectangle_3-70" data-name="Rectangle 3" width="0.252" height="0.126" rx="0.063" transform="translate(14.756 4.99)" fill="#ffd342" />
                                    </g>
                                </g>
                                <rect id="Rectangle_5" data-name="Rectangle 5" width="53" height="34" transform="translate(206.311)" fill="none" />
                                <g id="wireframe" transform="translate(-780.164 -169.182)">
                                    <path id="Path_211-3" data-name="Path 211" d="M2824.22,440.623l47.032-4.971-18.991-41.169Z" transform="translate(-1826.851 -126.048)" fill="#000210" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_212-3" data-name="Path 212" d="M2871.89,435.525l7.01-35.816-26.384-5.481Z" transform="translate(-1827.104 -125.793)" fill="#000210" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_213-3" data-name="Path 213" d="M2879.28,400.219l51.88,62.581,25.747-42.953Z" transform="translate(-1826.851 -126.048)" fill="#000210" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_214-3" data-name="Path 214" d="M2886.17,395.121l-7.01,5.1-26.894-5.991Z" transform="translate(-1826.851 -126.048)" fill="#000210" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_215-3" data-name="Path 215" d="M2936.39,395.248l20.9,24.854-77.877-20.138,7.775-4.716Z" transform="translate(-1826.851 -126.048)" fill="#000210" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_216-3" data-name="Path 216" d="M2965.83,401.494l-8.54,18.991-21.158-25.364Z" transform="translate(-1826.851 -126.048)" fill="#000210" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_217-3" data-name="Path 217" d="M2966.39,401.155s25.341,9.654,29.489,12.972c-.075-.151-38.841,6.335-38.539,6.335S2966.39,401.155,2966.39,401.155Z" transform="translate(-1826.851 -126.048)" fill="#000210" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_218-3" data-name="Path 218" d="M2956.91,420.485l46.015,19.933,8.922-16.374s-15.785-10-16.079-10S2956.91,420.485,2956.91,420.485Z" transform="translate(-1826.851 -126.048)" fill="#000210" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_219-2" data-name="Path 219" d="M3011.84,424.535" transform="translate(-1826.851 -126.048)" fill="none" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_220-3" data-name="Path 220" d="M2956.91,421.888v60.8l14.992,10.029,8.314-24.291Z" transform="translate(-1826.851 -126.048)" fill="#000210" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_221-3" data-name="Path 221" d="M3011.84,424.045l15.1,13.04-2.353,17.256-21.864-13.824Z" transform="translate(-1826.851 -126.048)" fill="#000210" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_222-3" data-name="Path 222" d="M2994.96,452.516l29.588,1.856-21.7-14.04Z" transform="translate(-1826.851 -126.048)" fill="#000210" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_223-3" data-name="Path 223" d="M2980.21,468.558l14.674-16.57-37.943-31.571Z" transform="translate(-1826.851 -126.048)" fill="#000210" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_224-3" data-name="Path 224" d="M3002.73,440.333l-7.943,12.067-37.594-32.14Z" transform="translate(-1826.851 -126.048)" fill="#000210" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_225-3" data-name="Path 225" d="M3024.55,453.753l8.588,35.561L2979.86,469.3l14.785-16.7Z" transform="translate(-1826.851 -126.048)" fill="#000210" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_227-3" data-name="Path 227" d="M2972.1,492.714l16.073,19.122L3033.9,488.97l-54.017-19.718Z" transform="translate(-1826.851 -126.048)" fill="#000210" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_228-3" data-name="Path 228" d="M2930.95,463.679l-59.05-28.433,7.316-35.221Z" transform="translate(-1826.851 -126.048)" fill="#000210" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_229-3" data-name="Path 229" d="M2871.25,436.33l-6.173,32.327,6.863.588,7.647-13.334Z" transform="translate(-1826.851 -126.048)" fill="#000210" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_230-3" data-name="Path 230" d="M2929.59,463.679l-50-7.572-8.236-20.688Z" transform="translate(-1826.851 -126.048)" fill="#000210" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_231-3" data-name="Path 231" d="M2930.95,472.186V463.46l26-42.061v61.18s-12.354-6.667-13.824-7.255a64.765,64.765,0,0,0-7.647-2.451A28.685,28.685,0,0,0,2930.95,472.186Z" transform="translate(-1826.851 -126.048)" fill="#000210" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_232-3" data-name="Path 232" d="M3026.95,436.852s5.628,5.177,6.431,6.2,3.793,4.909,4.061,5.355-12.362,5.266-12.362,5.266Z" transform="translate(-1826.851 -126.048)" fill="#000210" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_233-3" data-name="Path 233" d="M3049.01,463.605s5.928,7.164,7.178,9.663,7.765,14.772,8.7,17.672,1.473,4.82,1.473,4.82l-63.427,52.705s-2.451-11.079-4.412-15.589,1.177.49-6.569-13.824c-3.432-6.961-2.549-5.392-2.549-5.392l-1.275-1.765,45.3-23.139Z" transform="translate(-1826.851 -126.048)" fill="#000210" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_234-3" data-name="Path 234" d="M3066.36,496.294V597.966l17.171-9.478s.426-23.972,0-30.6-7.946-41.042-9.858-47.8S3066.36,496.294,3066.36,496.294Z" transform="translate(-1826.851 -126.048)" fill="#000210" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_235-3" data-name="Path 235" d="M3003,549.45l1.91,15.741,61.308,32.974V494.936Z" transform="translate(-1826.851 -126.048)" fill="#000210" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_236-3" data-name="Path 236" d="M3005.24,581.1l61.473,16.9-62.136-32.974Z" transform="translate(-1826.851 -126.048)" fill="#000210" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_237-3" data-name="Path 237" d="M3005.41,597.966V581.1l61.308,16.868-21.872,75.923Z" transform="translate(-1826.851 -126.048)" fill="#000210" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_238-3" data-name="Path 238" d="M3066.71,598.165l15.907,10.6s-2.983,26.346-3.977,29.494C3078.65,638.761,3066.71,598.165,3066.71,598.165Z" transform="translate(-1826.851 -126.048)" fill="#000210" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_239-3" data-name="Path 239" d="M3083.72,588.469l-.977,20.786L3066.49,597.83Z" transform="translate(-1826.851 -126.048)" fill="#000210" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_240-3" data-name="Path 240" d="M3078.33,637.589s-2.255,10.785-2.549,11.863-30.982,25-30.982,25l21.864-76.377Z" transform="translate(-1826.851 -126.048)" fill="#000210" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_241-3" data-name="Path 241" d="M3044.8,674.454l-19.418-.58s-2.112-16.743-8.975-28.131a108.381,108.381,0,0,0-13.953-18.553l2.112-29.565Z" transform="translate(-1826.851 -126.048)" fill="#000210" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_242-3" data-name="Path 242" d="M3054.5,700.875c.047-.186,7.41-10.137,10-16.7s9.059-24.1,10.264-28.74,1.384-5.712,1.384-5.712l-31.819,25.125S3054.45,701.06,3054.5,700.875Z" transform="translate(-1826.851 -126.048)" fill="#000210" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_243-3" data-name="Path 243" d="M3043.94,675.3l-17.12,54.234,8.07.754s9.2-10.257,12.143-15.31,7.617-14.179,7.617-14.179Z" transform="translate(-1826.851 -126.048)" fill="#000210" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_244-3" data-name="Path 244" d="M3034.22,730.289s-10.491,12.6-14.511,16.721a198.151,198.151,0,0,1-20.786,18.138c-7.746,5.687-10.785,7.55-10.785,7.55l29.12-34.022,9.412-9.02Z" transform="translate(-1826.851 -126.048)" fill="#000210" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_245-3" data-name="Path 245" d="M2994.41,722.7l20.492,18.04,12.354-11.177Z" transform="translate(-1826.851 -126.048)" fill="#000210" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_246-3" data-name="Path 246" d="M3015.1,702.795,2994.32,722.4l32.453,7.059,3.628-12.354-5.981-10.295Z" transform="translate(-1826.851 -126.048)" fill="#000210" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_247-3" data-name="Path 247" d="M3025.61,674.454s1.207,16.617.679,22.047a53.781,53.781,0,0,1-2.187,10.408l6.562,10.559,14.179-43.014Z" transform="translate(-1826.851 -126.048)" fill="#000210" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_248-3" data-name="Path 248" d="M3015.05,702.838s-17.107-11.027-24.656-14.949-9.707-7.353-15-5.393-5.785,2.647-6.275,2.941,25.688,37.257,25.688,37.257Z" transform="translate(-1826.851 -126.048)" fill="#000210" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_249-3" data-name="Path 249" d="M2993.76,722.348l-48.327-15.954,23.728-21.234Z" transform="translate(-1826.851 -126.048)" fill="#000210" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_250-3" data-name="Path 250" d="M2940.02,710.681c-1.207.226,37.71,35.146,37.71,35.146s16.818-23.456,16.592-23.38-49.249-15.914-49.249-15.914S2941.22,710.455,2940.02,710.681Z" transform="translate(-1826.851 -126.048)" fill="#000210" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_251-3" data-name="Path 251" d="M2927.24,717.215c0-2.422-1.657,26.512-1.657,26.512l52.386,2.039L2940.11,710.46S2927.24,719.637,2927.24,717.215Z" transform="translate(-1826.851 -126.048)" fill="#000210" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_252-3" data-name="Path 252" d="M3015.05,740.735l-37.415,5.109,17-23.67Z" transform="translate(-1826.851 -126.048)" fill="#000210" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_253-3" data-name="Path 253" d="M2988.66,772.416l-11.2-26.687,37.942-4.815Z" transform="translate(-1826.851 -126.048)" fill="#000210" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_254-3" data-name="Path 254" d="M2930.68,771l46.905-25.237,10.834,26.512-3.187,1.784Z" transform="translate(-1826.851 -126.048)" fill="#000210" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_255-3" data-name="Path 255" d="M2930.68,771.621l-8.459,30.771s18.026-4.9,21.344-6.184,26.85-11.69,31.148-14.179,12.143-8.447,12.143-8.447Z" transform="translate(-1826.851 -126.048)" fill="#000210" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_256-3" data-name="Path 256" d="M2872.74,808.792l58.113-37.635-8.916,31.428s-17.056,3.771-23.9,4.641-14.272,1.45-18.043,1.566S2872.74,808.792,2872.74,808.792Z" transform="translate(-1826.851 -126.048)" fill="#000210" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_257-3" data-name="Path 257" d="M2891.52,728.113s11.615-.688,17.2-2.95,14.1-5.2,16.291-6.411a11.175,11.175,0,0,0,2.489-1.584L2925.46,745Z" transform="translate(-1826.851 -126.048)" fill="#000210" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_258-3" data-name="Path 258" d="M2837.38,731.083h19.884l5.863,77.776h-7.393l-43.334-39.9Z" transform="translate(-1826.851 -126.048)" fill="#000210" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_259-3" data-name="Path 259" d="M2863.13,808.843h8.744l53.521-63.535-34.134-17.564s-14.382,2.426-17.4,2.8-11.74.412-12.7.412h-4.085Z" transform="translate(-1826.851 -126.048)" fill="#000210" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_260-3" data-name="Path 260" d="M2812.64,769.167l-8.586-11.081s7.542-15.026,11.661-21,5.1-5.8,6.9-6.092,9.573-.29,10.559-.29,5.28.29,5.28.29Z" transform="translate(-1826.851 -126.048)" fill="#000210" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_261-3" data-name="Path 261" d="M2812.4,769.338l.765,40.413,16.442-.765Z" transform="translate(-1826.851 -126.048)" fill="#000210" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_262-3" data-name="Path 262" d="M2785.89,808.859l26.767-40.277v41.424l-27.4.637Z" transform="translate(-1826.851 -126.048)" fill="#000210" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_263-3" data-name="Path 263" d="M2786.43,807.964l.172-1.793.91-2.934c.847-2.624,10.215-31.2,12.525-36.184,2.422-5.226,4.333-9.177,4.333-9.177l8.285,11.344Z" transform="translate(-1826.851 -126.048)" fill="#000210" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_264-2" data-name="Path 264" d="M2978.03,629.3s14.707,14.782,18.78,23.833,9.05,23.833,9.05,23.833-23.3-10.71-31.375-13.123-9.654-2.413-9.654-2.413" transform="translate(-1826.851 -126.048)" fill="#1b56c7" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_265-2" data-name="Path 265" d="M2948.69,610.373l9.05,49.551,7.768,1.584,12.52-32.2-8.522-7.014-9.654-6.034-7.542-4.073Z" transform="translate(-1826.851 -126.048)" fill="#2f8bf2" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_266-2" data-name="Path 266" d="M2948.27,610.679l-21.45-7.4-45.108,31.3,47.174,23.479h16.94l11.916,1.555Z" transform="translate(-1826.851 -126.048)" fill="#2e87ed" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_267-2" data-name="Path 267" d="M2928.85,658.415l-12.822.3-6.788.679-9.352,2.715-18.855-27.679Z" transform="translate(-1826.851 -126.048)" fill="#318dd9" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_268-2" data-name="Path 268" d="M2899.66,661.606l-14.87,4.752-14.275,5.863-16.952,9.814-5.736,3.314-1.4-4.206,35.561-46.013Z" transform="translate(-1826.851 -126.048)" fill="#308ce2" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_269-2" data-name="Path 269" d="M2881.71,635.729,2885,603.08h42.062C2928.04,603.08,2881.71,635.729,2881.71,635.729Z" transform="translate(-1826.851 -126.048)" fill="#3ba5fe" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_270-2" data-name="Path 270" d="M2848.03,616.006l34.287,19.377,2.785-32.547s-13.169,3.307-15.548,4.525S2848.03,616.006,2848.03,616.006Z" transform="translate(-1826.851 -126.048)" fill="#379ffe" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_271-2" data-name="Path 271" d="M2881.04,635.383l-66.731,24.269-3.824-17.942,8.628-7.451,10.589-7.942,8.922-5.393,5.294-3.235,4.118-1.863Z" transform="translate(-1826.851 -126.048)" fill="#3494fe" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_272-2" data-name="Path 272" d="M2814.45,659.7l31.676,22.1,35.824-47.062Z" transform="translate(-1826.851 -126.048)" fill="#2977f7" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_273-2" data-name="Path 273" d="M2844.61,681.193l-26.925,29.942s18.1-16.969,21.5-19.307,8.824-6.26,8.824-6.26l-1.659-4Z" transform="translate(-1826.851 -126.048)" fill="#3094ec" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_274-2" data-name="Path 274" d="M2813.92,659.652l3.614,51.482,27.227-30.093Z" transform="translate(-1826.851 -126.048)" fill="#2978f9" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_275-2" data-name="Path 275" d="M2810.48,641.748l3.584,17.875-27.981,10.71s12.067-15.763,15.612-19.685S2810.48,641.748,2810.48,641.748Z" transform="translate(-1826.851 -126.048)" fill="#2e82fd" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_276-2" data-name="Path 276" d="M2785.29,671.124a266.789,266.789,0,0,0-14.217,25.982c-6.275,13.432-6.863,16.178-6.863,16.178l50-53.925Z" transform="translate(-1826.851 -126.048)" fill="#2978fe" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_277-2" data-name="Path 277" d="M2751.92,756.764s3.7-17.8,5.506-24.285,6.562-19.157,6.562-19.157l-3.318,45.931Z" transform="translate(-1826.851 -126.048)" fill="#246cf6" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_278-2" data-name="Path 278" d="M2816.86,712.108l-52.749.784,49.709-53.239Z" transform="translate(-1826.851 -126.048)" fill="#2978fe" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_279-2" data-name="Path 279" d="M2816.1,712.19s-5.581,7.844-6.034,8.522-46.232-7.165-46.232-7.165Z" transform="translate(-1826.851 -126.048)" fill="#246bf3" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_280-2" data-name="Path 280" d="M2809.51,721.324s-7.451,9.8-9.9,13.334-6.961,10.883-6.961,10.883l-28.924-32.061Z" transform="translate(-1826.851 -126.048)" fill="#2973f4" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_281-2" data-name="Path 281" d="M2792.35,745.541s-6.569,11.765-7.157,12.942-24.413.784-24.413.784l2.941-45.1Z" transform="translate(-1826.851 -126.048)" fill="#2062dd" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_282-2" data-name="Path 282" d="M2760.78,759.781l20.713,5.581,4-7.089Z" transform="translate(-1826.851 -126.048)" fill="#16449c" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_283-2" data-name="Path 283" d="M2760.83,759.932l.718,71.488s11.123-44.035,14.743-53.463,5.279-12.746,5.279-12.746Z" transform="translate(-1826.851 -126.048)" fill="#194db0" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_284-2" data-name="Path 284" d="M2760.83,838.37c0,.83-13.349-15.159-13.349-15.159s.453-34.844.83-42.914,3.017-23.606,3.017-23.606l9.8,3.318.453,71.046S2760.83,837.54,2760.83,838.37Z" transform="translate(-1826.851 -126.048)" fill="#1d5bbb" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_285-2" data-name="Path 285" d="M2750.16,843.37c.29.232,10.385-4.873,10.385-4.873l-13.17-15.664S2749.87,843.138,2750.16,843.37Z" transform="translate(-1826.851 -126.048)" fill="#13388a" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_286-2" data-name="Path 286" d="M2757.06,873.516c-.075.905-7.014-30.47-7.014-30.47l10.408-4.978S2757.13,872.61,2757.06,873.516Z" transform="translate(-1826.851 -126.048)" fill="#133b8b" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_287-2" data-name="Path 287" d="M2763.25,454.859l1.056-11.087,19.911,22.928Z" transform="translate(-1826.851 -126.048)" fill="#19489f" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_288-2" data-name="Path 288" d="M2784.21,466.7s12.067,11.162,15.612,13.349,13.048,6.863,13.048,6.863l-29.565,33.411s-10.71-11.992-14.632-24.134-5.506-19.534-5.883-25.869a158.57,158.57,0,0,1,.3-16.065Z" transform="translate(-1826.851 -126.048)" fill="#225dd0" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_289-2" data-name="Path 289" d="M2812.33,486.8s3.224,1.861,3.258,1.874-4.448,50.105-4.448,50.105a105.3,105.3,0,0,1-14.778-8.344c-5.807-4.224-13.123-10.333-13.123-10.333Z" transform="translate(-1826.851 -126.048)" fill="#2c78fa" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_290-2" data-name="Path 290" d="M2815.99,488.8l7.747,3.683,27.747,35.1-33.728,12.844s-5.392-1.471-6.471-1.667S2815.99,488.8,2815.99,488.8Z" transform="translate(-1826.851 -126.048)" fill="#3088fc" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_291-2" data-name="Path 291" d="M2857.51,501.511l-5.859,26.258-28.08-35.738s18.8,7.252,21.93,7.89S2857.51,501.511,2857.51,501.511Z" transform="translate(-1826.851 -126.048)" fill="#3697fe" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_292-2" data-name="Path 292" d="M2874.74,504.563s-10.037-1.8-12.473-2.379a41.771,41.771,0,0,0-5.453-.812l-5.465,26.722,24.964-12.143Z" transform="translate(-1826.851 -126.048)" fill="#3798fe" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_293-2" data-name="Path 293" d="M2912.44,512.181s-10.785-3.092-16.14-4.224-12.143-2.187-15.084-2.715-7.014-.83-7.014-.83l2.489,12.067,40.878,2.866Z" transform="translate(-1826.851 -126.048)" fill="#3a9dfe" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_294-2" data-name="Path 294" d="M2959.88,553.436l-42.462-33.487-5.053-7.768s15.838,4.6,17.875,5.506,20.062,12.6,22.475,15.989,8.673,13.576,8.673,13.576Z" transform="translate(-1826.851 -126.048)" fill="#3cacfe" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_295-2" data-name="Path 295" d="M2961.39,546.866s4.871,9.907,4.647,14.549a54.692,54.692,0,0,1-.4,5.534l-14.549,14.058-3.3-4.507,11.871-22.894Z" transform="translate(-1826.851 -126.048)" fill="#3499fc" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_296-2" data-name="Path 296" d="M2953.85,586.613l-2.647-5.687L2965.84,567c-.008.008-.837,12.98-1.516,16.073s-.83,3.537-.83,3.537Z" transform="translate(-1826.851 -126.048)" fill="#3498fe" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_297-2" data-name="Path 297" d="M2958.36,598.249l-4.566-12.049s9.99.618,9.852.618S2958.36,598.249,2958.36,598.249Z" transform="translate(-1826.851 -126.048)" fill="#3192f8" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_298-2" data-name="Path 298" d="M2875.78,516.48l12.369,31.45,29.49-28.358Z" transform="translate(-1826.851 -126.048)" fill="#39a4fe" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_299-2" data-name="Path 299" d="M2850.97,528.094l37.182,20.213-12.143-32.2Z" transform="translate(-1826.851 -126.048)" fill="#3b9ffe" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_300-2" data-name="Path 300" d="M2835.13,544.913l16.291-17.347L2888,548.006Z" transform="translate(-1826.851 -126.048)" fill="#3697fe" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_301-2" data-name="Path 301" d="M2817.71,540.433s15.009,4.405,17.2,4.707c.075,0,16.291-17.2,16.291-17.2Z" transform="translate(-1826.851 -126.048)" fill="#328ffd" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_302-2" data-name="Path 302" d="M2958.95,553.436l-70.4-5.747,28.924-27.943Z" transform="translate(-1826.851 -126.048)" fill="#3eb0fe" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_303-2" data-name="Path 303" d="M2947.78,576.808s-7.661-8.665-14.3-13.266-18.252-9.352-20.816-10.182-16.064-4.751-16.064-4.751l62.9,4.751Z" transform="translate(-1826.851 -126.048)" fill="#3aa4fe" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_304-3" data-name="Path 304" d="M2852.52,394.484h-17.409l-65.424,27.676,54.242,19.014Z" transform="translate(-1826.851 -126.048)" fill="#000210" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_305-3" data-name="Path 305" d="M2823.57,441.173l-5,26.056h32.012Z" transform="translate(-1826.851 -126.048)" fill="#000210" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_306-3" data-name="Path 306" d="M2865.08,468.215l-14.332-.573-27.145-26.8,47.761-5.269Z" transform="translate(-1826.851 -126.048)" fill="#000210" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_307-3" data-name="Path 307" d="M2779.97,442.1l44.554-1.26-5.841,26.228h-11.339s-6.987-2.176-9.163-4.123a119.118,119.118,0,0,1-11.8-12.026C2782.83,446.453,2779.97,442.1,2779.97,442.1Z" transform="translate(-1826.851 -126.048)" fill="#000210" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_308-3" data-name="Path 308" d="M2769.09,422.745s3.322,7.559,5.04,11.11a78.948,78.948,0,0,0,5.612,8.934l44.439-2.176Z" transform="translate(-1826.851 -126.048)" fill="#000210" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_309-3" data-name="Path 309" d="M2769.09,422.425s-2.077-5.682-2.338-7.246,5.646-19.731,5.646-19.731l62.714-1.161Z" transform="translate(-1826.851 -126.048)" fill="#000210" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_310-3" data-name="Path 310" d="M2765.65,415.186s-5.1,5.76-5.584,7a11.355,11.355,0,0,0-.562,1.684l-26.284-26.7s3.084-3,6.872-2.819,32.6.881,32.6.881Z" transform="translate(-1826.851 -126.048)" fill="#000210" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_311-3" data-name="Path 311" d="M2751.68,443.773l-20.38-11.521v-8.017h28.175s-3.779,6.987-4.81,10.881a85.485,85.485,0,0,1-2.985,8.657Z" transform="translate(-1826.851 -126.048)" fill="#000210" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_312-3" data-name="Path 312" d="M2731.3,424.235l1.869-27.228,26.024,26.9Z" transform="translate(-1826.851 -126.048)" fill="#000210" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_313-3" data-name="Path 313" d="M2750.49,443.773l-22.026,8.549,2.555-20.7Z" transform="translate(-1826.851 -126.048)" fill="#000210" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_314-3" data-name="Path 314" d="M2751.8,443.566s-1.965,12.877-1.965,13.825v1.288l-23.788,19.179,2.169-25.55Z" transform="translate(-1826.851 -126.048)" fill="#000210" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_315-3" data-name="Path 315" d="M2749.61,458.577s.265,23.964,2.379,31.277,3,10.749,3,10.749l-28.9-22.554Z" transform="translate(-1826.851 -126.048)" fill="#000210" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_316-3" data-name="Path 316" d="M2726.05,477.858l3.96,58.7,41.422-7.162s-7.742-10.259-9.872-15.872a84.767,84.767,0,0,0-6.581-12.582Z" transform="translate(-1826.851 -126.048)" fill="#000210" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_317-3" data-name="Path 317" d="M2720.41,525.941l9.277,11.11-3.665-59.329Z" transform="translate(-1826.851 -126.048)" fill="#000210" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_318-3" data-name="Path 318" d="M2720.41,526.315l-1.549,17.756,10.979-6.981Z" transform="translate(-1826.851 -126.048)" fill="#000210" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_319-2" data-name="Path 319" d="M2817.28,550.645c.088,0-21.5,5.991-33.039,10.749s-35.153,15.506-35.153,15.506l11.63-11.718,41.937-19.03S2817.19,550.645,2817.28,550.645Z" transform="translate(-1826.851 -126.048)" fill="#2e83fe" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_320-2" data-name="Path 320" d="M2803.09,546.152c-.264-.088-17.18-4.317-23-4.317H2767.85l-7.577,23.083Z" transform="translate(-1826.851 -126.048)" fill="#2d79fe" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_321-2" data-name="Path 321" d="M2768.03,541.835s-16.387,1.674-24.669,4.229-10.4,3.436-10.4,3.436l3.612,32.51,13.392-5.815,10.573-11.453Z" transform="translate(-1826.851 -126.048)" fill="#2668e6" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_322-2" data-name="Path 322" d="M2733.7,549.306s-14.317,5.154-19.356,8.017-6.987,3.78-6.987,3.78l28.519,22.1Z" transform="translate(-1826.851 -126.048)" fill="#225ecf" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_323-2" data-name="Path 323" d="M2707.24,561.13s-14.746,7.688-20.822,11.707-6.434,4.8-6.434,4.8L2669.44,627.35s26.095-23.064,44.415-32.761,23.324-12.056,23.324-12.056Z" transform="translate(-1827.808 -126.048)" fill="#225fd5" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_324-2" data-name="Path 324" d="M2679.99,577.711s-20.043,13.859-25.656,20.043-6.758,7.216-6.758,7.216l22.1,20.616Z" transform="translate(-1826.851 -126.048)" fill="#1d4dab" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_325-2" data-name="Path 325" d="M2647.57,604.829a56.967,56.967,0,0,0-4.741,5.815l-1.322,2.379,28.1,12.951Z" transform="translate(-1826.851 -126.048)" fill="#1e55bc" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_326-2" data-name="Path 326" d="M2669.62,625.974s-26.607,22.114-35.77,34.272S2607.5,692.4,2607.5,692.4l14.978-37.444Z" transform="translate(-1826.851 -126.048)" fill="#2465de" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_327-2" data-name="Path 327" d="M2669.08,625.974l-41.3,4.063s8.141-11.028,10.467-13.835a22.929,22.929,0,0,1,3.168-3.409Z" transform="translate(-1826.851 -126.048)" fill="#1d54ba" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_328-2" data-name="Path 328" d="M2669.05,625.872l-46.83,29.006-5.083-5.083s9.827-18.3,10.708-19.451S2669.05,625.872,2669.05,625.872Z" transform="translate(-1826.851 -126.048)" fill="#205bcb" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_329-2" data-name="Path 329" d="M2607.5,691.7s3.614-14.8,5.552-24.4,4.053-17.621,4.053-17.621l5.022,5.2Z" transform="translate(-1826.851 -126.048)" fill="#2060d5" stroke="#cbcbcb" stroke-width="1" />
                                    <g id="Ellipse_5-2" data-name="Ellipse 5" transform="translate(1088.149 448.952)" fill="#2d85ec" stroke="#cbcbcb" stroke-width="1">
                                        <circle cx="9.5" cy="9.5" r="9.5" stroke="none" />
                                        <circle cx="9.5" cy="9.5" r="9" fill="none" />
                                    </g>
                                    <path id="Path_330-2" data-name="Path 330" d="M2636.6,820.748s11.907-88.454,39.124-126.3,33.193-42.719,51.581-50.849a164.959,164.959,0,0,1,33.1-10.84s-51.294,49.552-68.521,78.974S2636.6,820.748,2636.6,820.748Z" transform="translate(-1826.851 -126.048)" fill="#2977fd" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_331-3" data-name="Path 331" d="M2929.98,471.884s-13.127-1.938-18.59-1.938-22.907-.881-28.9-.881h-10.308l7.048-13.3,51.541,7.665v8.987Z" transform="translate(-1826.851 -126.048)" fill="#000210" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_332-3" data-name="Path 332" d="M2977.97,745l-105.913,64.184,54.747-65.17Z" transform="translate(-1826.851 -126.048)" fill="#000210" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_333-3" data-name="Path 333" d="M2856.21,808.843h-26.7l-16.916-39.7,29.322,26.694Z" transform="translate(-1826.851 -126.048)" fill="#000210" stroke="#cbcbcb" stroke-width="1" />
                                    <path id="Path_336-3" data-name="Path 336" d="M1043.138,489.314l-8.267-35.489,12.618-5.481s10.707,14.02,11.216,15.04C1058.451,463,1043.138,489.314,1043.138,489.314Z" transform="translate(163.149 -126.048)" fill="#000210" stroke="#cbcbcb" stroke-width="1" />
                                </g>
                            </svg>


                        </div>
                    </div>
                </div>
            </section>



        </div>
    );
}

export default App;
