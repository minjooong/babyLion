import React from "react";
//import ReactDOM from 'react-dom/client';
import ReactDOM from "react-dom";
import "../index";
import App from "./App";
import About from "./About";
import Club from "./Club";
import Location from "./Location";
//import My from './My';
import New from "./New";
import Notice from "./Notice";
import Nav from "../nav";

// function My() {
//     return (
//         <div>
//             <Nav />
//             <header class="bg-gray-50">
//                 <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
//                     <div class="mt-8">
//                         <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl">My Page</h1>
//                     </div>
//                     <br />
//                     <button type="button" class="group flex shrink-0 items-center rounded-lg transition">
//                         <img
//                             alt="Man"
//                             src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
//                             class="h-20 w-20 rounded-full object-cover"
//                         />

//                         <p class="ms-2 hidden text-left text-xs sm:block">
//                             <strong class="block font-medium text-2xl">김 멋 사</strong>

//                             <span class="text-gray-500 text-xl"> 성균관대학교 </span>
//                         </p>
//                     </button>
//                     <br />

//                     <article class="flex items-end justify-between rounded-lg border border-gray-100 bg-white p-6">
//                         <div class="flex" dir="ltr">
//                             <p class="flex-auto text-2xl font-medium text-gray-900 me-24">내 동아리</p>

//                             <div class="flex-auto overflow-x-auto">
//                                 <table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
//                                     <thead class="ltr:text-left rtl:text-right">
//                                         <tr>
//                                             <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">동아리명</th>
//                                             <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">가입 일자</th>
//                                             <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">역할</th>
//                                             <th class="px-4 py-2"></th>
//                                         </tr>
//                                     </thead>

//                                     <tbody class="divide-y divide-gray-200">
//                                         <tr>
//                                             <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">멋쟁이 사자처럼</td>
//                                             <td class="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>
//                                             <td class="whitespace-nowrap px-4 py-2 text-gray-700">Web Developer</td>
//                                             <td class="whitespace-nowrap px-4 py-2">
//                                                 <a href="#" class="inline-block rounded bg-violet-500 px-4 py-2 text-xs font-medium text-white hover:bg-violet-700">
//                                                     자세히
//                                                 </a>
//                                             </td>
//                                         </tr>

//                                         <tr>
//                                             <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">배드민턴</td>
//                                             <td class="whitespace-nowrap px-4 py-2 text-gray-700">04/11/1980</td>
//                                             <td class="whitespace-nowrap px-4 py-2 text-gray-700">-</td>
//                                             <td class="whitespace-nowrap px-4 py-2">
//                                                 <a href="#" class="inline-block rounded bg-violet-500 px-4 py-2 text-xs font-medium text-white hover:bg-violet-700">
//                                                     자세히
//                                                 </a>
//                                             </td>
//                                         </tr>

//                                         <tr>
//                                             <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">밴드부</td>
//                                             <td class="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>
//                                             <td class="whitespace-nowrap px-4 py-2 text-gray-700">Singer</td>
//                                             <td class="whitespace-nowrap px-4 py-2">
//                                                 <a href="#" class="inline-block rounded bg-violet-500 px-4 py-2 text-xs font-medium text-white hover:bg-violet-700">
//                                                     자세히
//                                                 </a>
//                                             </td>
//                                         </tr>
//                                     </tbody>
//                                 </table>
//                             </div>
//                         </div>
//                     </article>
//                     <article class="flex items-end justify-between rounded-lg border border-gray-100 bg-white p-6">
//                         <div>
//                             <p class="text-2xl font-medium text-gray-900">지원 현황</p>
//                         </div>
//                     </article>
//                     <article class="flex items-end justify-between rounded-lg border border-gray-100 bg-white p-6">
//                         <div>
//                             <p class="text-2xl font-medium text-gray-900">스크랩</p>
//                         </div>
//                     </article>
//                     <article class="flex items-end justify-between rounded-lg border border-gray-100 bg-white p-6">
//                         <div>
//                             <p class="text-2xl font-medium text-gray-900">최근 본 동아리</p>
//                         </div>
//                     </article>
//                     <article class="flex items-end justify-between rounded-lg border border-gray-100 bg-white p-6">
//                         <div>
//                             <p class="text-2xl font-medium text-gray-900">학교 인증</p>
//                         </div>
//                     </article>
//                     <article class="flex items-end justify-between rounded-lg border border-gray-100 bg-white p-6">
//                         <div>
//                             <p class="text-2xl font-medium text-gray-900">비밀번호 변경</p>
//                         </div>
//                     </article>
//                 </div>
//             </header>
//         </div>
//     );
// }

function My() {
    return (
        <div>
            <footer class="bg-white">
                <Nav />
                <div class="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
                    <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
                        <div class="bg-gray-100">
                            <div class="text-teal-600">
                                <div class="mt-8">
                                    <h1 class="pl-5 text-2xl font-bold text-gray-900 sm:text-3xl"> My Page</h1>
                                </div>
                                <br />
                                <button type="button" class="pl-5 group flex shrink-0 items-center rounded-lg transition">
                                    <img
                                        alt="Man"
                                        src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                        class="h-20 w-20 rounded-full object-cover"
                                    />

                                    <p class="ms-2 hidden text-left text-xs sm:block">
                                        <strong class="block font-medium text-2xl text-violet-600">김 멋 사</strong>

                                        <span class="text-gray-500 text-xl"> 성균관대학교 </span>
                                    </p>
                                </button>
                            </div>

                            <p class="pl-5 pb-5 mt-4 max-w-xs text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse non cupiditate quae nam molestias.</p>
                        </div>
                        {/* setting */}
                        <div class="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
                            <div>
                                <p class="font-medium text-gray-900">계정</p>
                                <br />

                                <ul class="space-y-1">
                                    <li>
                                        <a href="" class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                class="h-5 w-5 opacity-75"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                stroke-width="2"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                                />
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>

                                            <span class="text-sm font-medium"> 일반 </span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="" class="group flex items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                            <div class="flex items-center gap-2">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    class="h-5 w-5 opacity-75"
                                                >
                                                    <path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
                                                    <path d="M14 3v5h5M16 13H8M16 17H8M10 9H8" />
                                                </svg>

                                                <span class="text-sm font-medium"> 내 정보 </span>
                                            </div>

                                            <span class="shrink-0 rounded-full bg-gray-100 px-3 py-0.5 text-xs text-gray-600 group-hover:bg-gray-200 group-hover:text-gray-700">
                                                1
                                            </span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="" class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                class="h-5 w-5 opacity-75"
                                            >
                                                <path
                                                    d="M21 10L12 5L3 10L6 11.6667M21 10L18 11.6667M21 10V10C21.6129 10.3064 22 10.9328 22 11.618V16.9998M6 11.6667L12 15L18 11.6667M6 11.6667V17.6667L12 21L18 17.6667L18 11.6667"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>

                                            <span class="text-sm font-medium"> 학교 인증 </span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="" class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                class="h-5 w-5 opacity-75"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                stroke-width="2"
                                            >
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>

                                            <span class="text-sm font-medium"> 탈퇴 </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <p class="font-medium text-gray-900">내 활동</p>
                                <br />

                                <ul class="space-y-1">
                                    <li>
                                        <a href="" class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                class="h-5 w-5 opacity-75"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                stroke-width="2"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                                />
                                            </svg>

                                            <span class="text-sm font-medium"> 내 클럽 </span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="" class="group flex items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                            <div class="flex items-center gap-2">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    class="h-5 w-5 opacity-75"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                >
                                                    <g fill="none" fill-rule="evenodd" id="页面-1" stroke="none" stroke-linecap="round" stroke-width="1">
                                                        <g id="导航图标" stroke="#212121" stroke-width="1.5" transform="translate(-103.000000, -334.000000)">
                                                            <g id="申请" transform="translate(103.000000, 334.000000)">
                                                                <g id="路径" transform="translate(4.000000, 2.000000)">
                                                                    <path d="M16,14.5 L16,19 C16,19.5523 15.5523,20 15,20 L11.75,20" stroke-linejoin="round" />

                                                                    <path
                                                                        d="M16,6 L16,1 C16,0.447715 15.5523,0 15,0 L1,0 C0.447715,0 0,0.447715 0,1 L0,19 C0,19.5523 0.447715,20 1,20 L4,20"
                                                                        stroke-linejoin="round"
                                                                    />

                                                                    <line x1="4" x2="11" y1="6" y2="6" />

                                                                    <line x1="7.5" x2="16" y1="20" y2="9.5" />

                                                                    <line x1="4" x2="8" y1="10" y2="10" />
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>

                                                <span class="text-sm font-medium"> 지원 현황 </span>
                                            </div>

                                            <span class="shrink-0 rounded-full bg-gray-100 px-3 py-0.5 text-xs text-gray-600 group-hover:bg-gray-200 group-hover:text-gray-700">
                                                5
                                            </span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="" class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                class="h-5 w-5 opacity-75"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                stroke-width="2"
                                            >
                                                <path d="M22.719 12A10.719 10.719 0 0 1 1.28 12h.838a9.916 9.916 0 1 0 1.373-5H8v1H2V2h1v4.2A10.71 10.71 0 0 1 22.719 12zM16 13h-4V7h-1v7h5z" />
                                            </svg>
                                            <span class="text-sm font-medium"> 최근 본 클럽 </span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="" class="group flex items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                                            <div class="flex items-center gap-2">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    class="h-5 w-5 opacity-75"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                >
                                                    <g id="Communication / Chat_Conversation">
                                                        <path
                                                            id="Vector"
                                                            d="M16 8H20C20.5523 8 21 8.44772 21 9V20L17.667 17.231C17.4875 17.0818 17.2608 17 17.0273 17H9C8.44771 17 8 16.5523 8 16V13M16 8V5C16 4.44772 15.5523 4 15 4H4C3.44772 4 3 4.44772 3 5V16.0003L6.33301 13.2308C6.51255 13.0817 6.73924 13 6.97266 13H8M16 8V12C16 12.5523 15.5523 13 15 13H8"
                                                            stroke="currentColor"
                                                            stroke-width="2"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        />
                                                    </g>
                                                </svg>

                                                <span class="text-sm font-medium"> 채팅 </span>
                                            </div>

                                            <span class="shrink-0 rounded-full bg-gray-100 px-3 py-0.5 text-xs text-gray-600 group-hover:bg-gray-200 group-hover:text-gray-700">
                                                3
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <p class="font-medium text-gray-900">기타</p>

                                <ul class="mt-6 space-y-4 text-sm">
                                    <li>
                                        <a href="#" class="text-gray-700 transition hover:opacity-75">
                                            Contact
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#" class="text-gray-700 transition hover:opacity-75">
                                            FAQs
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#" class="text-gray-700 transition hover:opacity-75">
                                            Live Chat
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <h1 class="mx-20 px-20 text-2xl">최근 본 클럽</h1>

            <div class="px-20 mx-20 flex flex-row">
                <article class="m-8 overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                    <img
                        alt="Office"
                        src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                        class="h-30 w-50 object-cover"
                    />

                    <div class="bg-white p-4 sm:p-6">
                        <a href="#">
                            <h3 class="mt-0.5 text-lg text-gray-900">모두의 디자인</h3>
                        </a>

                        <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">여러 디자인 관련 활동을 하는 동아리입니다.</p>
                    </div>
                </article>
                <article class="m-8 overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                    <img
                        alt="Office"
                        src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                        class="h-30 w-50 object-cover"
                    />

                    <div class="bg-white p-4 sm:p-6">
                        <a href="#">
                            <h3 class="mt-0.5 text-lg text-gray-900">모두의 디자인</h3>
                        </a>

                        <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">여러 디자인 관련 활동을 하는 동아리입니다.</p>
                    </div>
                </article>
                <article class="m-8 overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                    <img
                        alt="Office"
                        src="https://images.unsplash.com/photo-1549834125-82d3c48159a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFuZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60"
                        class="h-30 w-full object-cover"
                    />

                    <div class="bg-white p-4 sm:p-6">
                        <a href="#">
                            <h3 class="mt-0.5 text-lg text-gray-900">헤비메탈 밴드</h3>
                        </a>

                        <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla
                            ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo
                            corporis voluptatem?
                        </p>
                    </div>
                </article>
                <article class="m-8 overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                    <img
                        alt="Office"
                        src="https://images.unsplash.com/photo-1549834125-82d3c48159a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFuZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60"
                        class="h-30 w-full object-cover"
                    />

                    <div class="bg-white p-4 sm:p-6">
                        <a href="#">
                            <h3 class="mt-0.5 text-lg text-gray-900">헤비메탈 밴드</h3>
                        </a>

                        <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla
                            ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo
                            corporis voluptatem?
                        </p>
                    </div>
                </article>
            </div>
        </div>
    );
}

export default My;
