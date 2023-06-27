import React, { useState } from 'react';
//import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
import '../index';
import App from './App';
import About from './About';
//import Club from './Club';
import Location from './Location';
import My from './My';
import New from './New';
import Notice from './Notice';
import Nav from '../nav';
import { BrowserRouter as Router, Link, Route, Routes, useLocation } from 'react-router-dom';

function Finding() {
    return (
        <div><br />
            <br />
            <h1 class="text-center text-6xl font-sans font-extrabold text-violet-500">CLUB</h1>
            <br />
            <br />
            <br />
            <div class="grid grid-cols-1 gap-0 text-center sm:grid-cols-10 font-medium border-t ">
                <p class="text-violet-900 block text-m font-bold w-full rounded-lg border-gray-200 p-3">소속</p>

                <div>
                    <input
                        class="peer sr-only"
                        id="totalBelongTo"
                        type="radio"
                        tabindex="-1"
                        name="belong to"
                    />

                    <label
                        for="totalBelongTo"
                        class="block w-full border-r border-gray-200 p-3 peer-checked:bg-violet-900 peer-checked:font-extrabold peer-checked:text-white hover:font-extrabold"
                        tabindex="0"
                    >
                        <span class="text-sm"> 전체 </span>
                    </label>
                </div>

                <div>
                    <input
                        class="peer sr-only"
                        id="clubBelongTo"
                        type="radio"
                        tabindex="-1"
                        name="belong to"
                    />

                    <label
                        for="clubBelongTo"
                        class="block w-full border-r border-gray-200 p-3 peer-checked:bg-violet-900 peer-checked:font-extrabold peer-checked:text-white hover:font-extrabold"
                        tabindex="0"
                    >
                        <span class="text-sm"> 동아리 </span>
                    </label>
                </div>

                <div>
                    <input
                        class="peer sr-only"
                        id="conferenceBelongTo"
                        type="radio"
                        tabindex="-1"
                        name="belong to"
                    />

                    <label
                        for="conferenceBelongTo"
                        class="block w-full border-r border-gray-200 p-3 peer-checked:bg-violet-900 peer-checked:font-extrabold peer-checked:text-white hover:font-extrabold"
                        tabindex="0"
                    >
                        <span class="text-sm"> 학회 </span>
                    </label>
                </div>

                <div>
                    <input
                        class="peer sr-only"
                        id="smallBelongTo"
                        type="radio"
                        tabindex="-1"
                        name="belong to"
                    />

                    <label
                        for="smallBelongTo"
                        class="block w-full border-r border-gray-200 p-3 peer-checked:bg-violet-900 peer-checked:font-extrabold peer-checked:text-white hover:font-extrabold"
                        tabindex="0"
                    >
                        <span class="text-sm"> 소모임 </span>
                    </label>
                </div>

            </div>

            <div class="grid grid-cols-1 gap-0 text-center sm:grid-cols-10 font-medium">
                <p class="text-violet-900 block text-m font-bold w-full rounded-lg border-gray-200 p-3">구분</p>

                <div>
                    <input
                        class="peer sr-only"
                        id="totalClass"
                        type="radio"
                        tabindex="-1"
                        name="class"
                    />

                    <label
                        for="totalClass"
                        class="block w-full border-r border-gray-200 p-3 peer-checked:bg-violet-900 peer-checked:font-extrabold peer-checked:text-white hover:font-extrabold"
                        tabindex="0"
                    >
                        <span class="text-sm"> 전체 </span>
                    </label>
                </div>

                <div>
                    <input
                        class="peer sr-only"
                        id="inClass"
                        type="radio"
                        tabindex="-1"
                        name="class"
                    />

                    <label
                        for="inClass"
                        class="block w-full border-r border-gray-200 p-3 peer-checked:bg-violet-900 peer-checked:font-extrabold peer-checked:text-white hover:font-extrabold"
                        tabindex="0"
                    >
                        <span class="text-sm"> 교내 </span>
                    </label>
                </div>

                <div>
                    <input
                        class="peer sr-only"
                        id="outClass"
                        type="radio"
                        tabindex="-1"
                        name="class"
                    />

                    <label
                        for="outClass"
                        class="block w-full border-r border-gray-200 p-3 peer-checked:bg-violet-900 peer-checked:font-extrabold peer-checked:text-white hover:font-extrabold"
                        tabindex="0"
                    >
                        <span class="text-sm"> 연합 </span>
                    </label>
                </div>
            </div>

            <div class="grid grid-cols-1 gap-0 text-center sm:grid-cols-10 font-medium">
                <p class="text-violet-900 block text-m font-bold w-full rounded-lg border-gray-200 p-3">현황</p>

                <div>
                    <input
                        class="peer sr-only"
                        id="totalStatus"
                        type="radio"
                        tabindex="-1"
                        name="status"
                    />

                    <label
                        for="totalStatus"
                        class="block w-full border-r border-gray-200 p-3 peer-checked:bg-violet-900 peer-checked:font-extrabold peer-checked:text-white hover:font-extrabold"
                        tabindex="0"
                    >
                        <span class="text-sm"> 전체 </span>
                    </label>
                </div>

                <div>
                    <input
                        class="peer sr-only"
                        id="ing"
                        type="radio"
                        tabindex="-1"
                        name="status"
                    />

                    <label
                        for="ing"
                        class="block w-full border-r border-gray-200 p-3 peer-checked:bg-violet-900 peer-checked:font-extrabold peer-checked:text-white hover:font-extrabold"
                        tabindex="0"
                    >
                        <span class="text-sm"> 모집중 </span>
                    </label>
                </div>

                <div>
                    <input
                        class="peer sr-only"
                        id="finished"
                        type="radio"
                        tabindex="-1"
                        name="status"
                    />

                    <label
                        for="finished"
                        class="block w-full border-r border-gray-200 p-3 peer-checked:bg-violet-900 peer-checked:font-extrabold peer-checked:text-white hover:font-extrabold"
                        tabindex="0"
                    >
                        <span class="text-sm"> 모집완료 </span>
                    </label>
                </div>

            </div>

            <div class="grid grid-cols-1 gap-0 text-center sm:grid-cols-10 font-medium">
                <p class="text-violet-900 block text-m font-bold w-full rounded-lg border-gray-200 p-3">분야</p>

                <div>
                    <input
                        class="peer sr-only"
                        id="totalPart"
                        type="radio"
                        tabindex="-1"
                        name="part"
                    />

                    <label
                        for="totalPart"
                        class="block w-full border-r border-gray-200 p-3 peer-checked:bg-violet-900 peer-checked:font-extrabold peer-checked:text-white hover:font-extrabold"
                        tabindex="0"
                    >
                        <span class="text-sm"> 전체 </span>
                    </label>
                </div>

                <div>
                    <input
                        class="peer sr-only"
                        id="studyPart"
                        type="radio"
                        tabindex="-1"
                        name="part"
                    />

                    <label
                        for="studyPart"
                        class="block w-full border-r border-gray-200 p-3 peer-checked:bg-violet-900 peer-checked:font-extrabold peer-checked:text-white hover:font-extrabold"
                        tabindex="0"
                    >
                        <span class="text-sm"> 학업 </span>
                    </label>
                </div>

                <div>
                    <input
                        class="peer sr-only"
                        id="hobbyPart"
                        type="radio"
                        tabindex="-1"
                        name="part"
                    />

                    <label
                        for="hobbyPart"
                        class="block w-full border-r border-gray-200 p-3 peer-checked:bg-violet-900 peer-checked:font-extrabold peer-checked:text-white hover:font-extrabold"
                        tabindex="0"
                    >
                        <span class="text-sm"> 취미 </span>
                    </label>
                </div>

                <div>
                    <input
                        class="peer sr-only"
                        id="bandPart"
                        type="radio"
                        tabindex="-1"
                        name="part"
                    />

                    <label
                        for="bandPart"
                        class="block w-full border-r border-gray-200 p-3 peer-checked:bg-violet-900 peer-checked:font-extrabold peer-checked:text-white hover:font-extrabold"
                        tabindex="0"
                    >
                        <span class="text-sm"> 밴드 </span>
                    </label>
                </div>

                <div>
                    <input
                        class="peer sr-only"
                        id="drinkPart"
                        type="radio"
                        tabindex="-1"
                        name="part"
                    />

                    <label
                        for="drinkPart"
                        class="block w-full border-r border-gray-200 p-3 peer-checked:bg-violet-900 peer-checked:font-extrabold peer-checked:text-white hover:font-extrabold"
                        tabindex="0"
                    >
                        <span class="text-sm"> 친목 </span>
                    </label>
                </div>

            </div>

            <div class="grid grid-cols-1 gap-0 text-center sm:grid-cols-10 font-medium border-b">
                <p class="text-violet-900 block text-m font-bold w-full rounded-lg border-gray-200 p-3">모집대상</p>

                <div>
                    <input
                        class="peer sr-only"
                        id="totalGrade"
                        type="radio"
                        tabindex="-1"
                        name="grade"
                    />

                    <label
                        for="totalGrade"
                        class="block w-full border-r border-gray-200 p-3 peer-checked:bg-violet-900 peer-checked:font-extrabold peer-checked:text-white hover:font-extrabold"
                        tabindex="0"
                    >
                        <span class="text-sm"> 전체 </span>
                    </label>
                </div>

                <div>
                    <input
                        class="peer sr-only"
                        id="smallGrade"
                        type="radio"
                        tabindex="-1"
                        name="grade"
                    />

                    <label
                        for="smallGrade"
                        class="block w-full border-r border-gray-200 p-3 peer-checked:bg-violet-900 peer-checked:font-extrabold peer-checked:text-white hover:font-extrabold"
                        tabindex="0"
                    >
                        <span class="text-sm"> 저학년(1~2) </span>
                    </label>
                </div>

                <div>
                    <input
                        class="peer sr-only"
                        id="largeGrade"
                        type="radio"
                        tabindex="-1"
                        name="grade"
                    />

                    <label
                        for="largeGrade"
                        class="block w-full border-r border-gray-200 p-3 peer-checked:bg-violet-900 peer-checked:font-extrabold peer-checked:text-white hover:font-extrabold"
                        tabindex="0"
                    >
                        <span class="text-sm"> 고학년(3~4) </span>
                    </label>
                </div>

                <div>
                    <input
                        class="peer sr-only"
                        id="etc"
                        type="radio"
                        tabindex="-1"
                        name="grade"
                    />

                    <label
                        for="etc"
                        class="block w-full border-r border-gray-200 p-3 peer-checked:bg-violet-900 peer-checked:font-extrabold peer-checked:text-white hover:font-extrabold"
                        tabindex="0"
                    >
                        <span class="text-sm"> 기타 </span>
                    </label>
                </div>
            </div>
            <br />
            <br />
            <div class="flex justify-center">
                <a class="text-center rounded-md bg-violet-500 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-violet-800" href="/Login">
                    Search
                </a>
            </div>
        </div>
    )
}

function Alert() {
    return (<div>
        <div
            role="alert"
            class="rounded-xl border border-gray-100 bg-white p-4 shadow-xl"
        >
            <div class="flex items-start gap-4">
                <span class="text-green-600">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-6 w-6"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </span>

                <div class="flex-1">
                    <strong class="block font-medium text-gray-900"> Changes saved </strong>

                    <p class="mt-1 text-sm text-gray-700">
                        Your product changes have been saved.
                    </p>
                </div>

                <button class="text-gray-500 transition hover:text-gray-600">
                    <span class="sr-only">Dismiss popup</span>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-6 w-6"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>
        </div>
    </div>)
}


function Sorting() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (<div>
        <br />
        <br />
        <div class="grid grid-cols-1 gap-0 font-medium">
            <p class="text-white block text-2xl font-bold w-full p-3 bg-violet-900">Club Information</p>
            <br />
            <div>
                <article class="rounded-xl border-2 border-gray-200 bg-white p-4">
                    <div class="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
                        <a href="#" class="block shrink-0">
                            <img
                                alt="Speaker"
                                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
                                class="h-14 w-14 rounded-lg object-cover"
                            />
                        </a>

                        <div>
                            <h3 class="font-medium sm:text-lg">
                                <p class="font-bold">
                                    <span class="text-violet-900 text-sm p-4">
                                        동아리
                                    </span>
                                    멋쟁이 사자처럼
                                    <span>  </span>
                                    <span
                                        class="inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="-ms-1 me-1.5 h-4 w-4"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>

                                        <p class="whitespace-nowrap text-sm">교내</p>
                                    </span>

                                    <span>  </span>
                                    <span
                                        class="inline-flex items-center justify-center rounded-full bg-amber-100 px-2.5 py-0.5 text-amber-700"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="-ms-1 me-1.5 h-4 w-4"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>


                                        <p class="whitespace-nowrap text-sm">학업</p>
                                    </span>

                                    <span>  </span>
                                    <span
                                        class="inline-flex items-center justify-center rounded-full bg-blue-100 px-2.5 py-0.5 text-blue-700 p-3"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="-ms-1 me-1.5 h-4 w-4"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>


                                        <p class="whitespace-nowrap text-sm">전 학년</p>
                                    </span>
                                </p>
                            </h3>

                            <h5>

                            </h5>

                            <p class="line-clamp-2 text-m text-gray-700 p-3">
                                저희는 "내 아이디어를 내 손으로 실현한다" 라는 모토 아래, 다양한 아이디어를 실제 IT서비스로 구현하도록 돕는 전국 연합 프로그래밍 동아리이자 성균관대학교 중앙 동아리입니다.
                            </p>

                            <br />
                            <br />

                            <button
                                onClick={() => setIsModalOpen(true)}
                                class="float-left rounded-md bg-violet-500 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-violet-800 hover:font-bold" href="/Apply">
                                Apply
                            </button>

                            <div class="float-left mt-2 sm:flex sm:items-center sm:gap-2 pl-4 pb-3">
                                <div class="flex items-center gap-1 text-gray-500">
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

                                    <p class="text-xs">0 / 20</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="flex justify-end">
                        <strong
                            class="-mb-[2px] -me-[2px] inline-flex items-center gap-1 rounded-ee-xl rounded-ss-xl bg-violet-900 px-3 py-1.5 text-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                                />
                            </svg>

                            <span class="text-[10px] text-white font-medium sm:text-xs">모집중</span>
                        </strong>
                    </div>
                </article>

                <article class="rounded-xl border-2 border-gray-200 bg-white p-4">
                    <div class="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
                        <a href="#" class="block shrink-0">
                            <img
                                alt="Speaker"
                                src="https://images.unsplash.com/photo-1534294228306-bd54eb9a7ba8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGVhcnRofGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
                                class="h-14 w-14 rounded-lg object-cover"
                            />
                        </a>

                        <div>
                            <h3 class="font-medium sm:text-lg">
                                <p class="font-bold">
                                    <span class="text-violet-900 text-sm p-4">
                                        동아리
                                    </span>
                                    AIESEC
                                    <span>  </span>
                                    <span
                                        class="inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="-ms-1 me-1.5 h-4 w-4"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>

                                        <p class="whitespace-nowrap text-sm">연합</p>
                                    </span>

                                    <span>  </span>
                                    <span
                                        class="inline-flex items-center justify-center rounded-full bg-amber-100 px-2.5 py-0.5 text-amber-700"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="-ms-1 me-1.5 h-4 w-4"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>


                                        <p class="whitespace-nowrap text-sm">학업</p>
                                    </span>

                                    <span>  </span>
                                    <span
                                        class="inline-flex items-center justify-center rounded-full bg-blue-100 px-2.5 py-0.5 text-blue-700 p-3"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="-ms-1 me-1.5 h-4 w-4"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>


                                        <p class="whitespace-nowrap text-sm">전 학년</p>
                                    </span>
                                </p>
                            </h3>

                            <h5>

                            </h5>

                            <p class="line-clamp-2 text-m text-gray-700 p-3">
                                성균관대학교 중앙동아리, 국제리더십학생협회[AIESEC in SKKU] 입니다. 국제리더십협회 AISEC은 '인간 잠재력 실현'과 '세계 평화 실현'이라는 목표를 가지고 UN과 협력하여 청년들의 리더십 계발을 돕는 세계 최대 규모의 비영리 학생 자치 단체입니다.
                            </p>

                            <br />
                            <br />

                            <button
                                onClick={() => setIsModalOpen(true)}
                                class="float-left rounded-md bg-violet-500 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-violet-800 hover:font-bold" href="/Apply">
                                Apply
                            </button>

                            <div class="mt-2 sm:flex sm:items-center sm:gap-2 pl-4 pb-3 float-left">
                                <div class="flex items-center gap-1 text-gray-500">
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

                                    <p class="text-xs">   0 / 40</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="flex justify-end">
                        <strong
                            class="-mb-[2px] -me-[2px] inline-flex items-center gap-1 rounded-ee-xl rounded-ss-xl bg-violet-900 px-3 py-1.5 text-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                                />
                            </svg>

                            <span class="text-[10px] text-white font-medium sm:text-xs">모집중</span>
                        </strong>
                    </div>
                </article>
                <article class="rounded-xl border-2 border-gray-200 bg-white p-4">
                    <div class="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
                        <a href="#" class="block shrink-0">
                            <img
                                alt="Speaker"
                                src="https://media.istockphoto.com/id/1367660200/ko/%EC%82%AC%EC%A7%84/%EB%B3%B4%EC%BC%80-%EC%A1%B0%EB%AA%85-%EC%9C%A0%EC%A0%84-%EC%9D%98%ED%95%99-%EB%B0%8F-%ED%98%81%EC%8B%A0%EA%B3%BC-%EB%B8%94%EB%A3%A8-dna-%EA%B7%B8%EB%A6%BC.webp?b=1&s=170667a&w=0&k=20&c=dGDsOa6drZyD2xWbCfp6HA9z-eNSSJf_XHx8p_sanQc="
                                class="h-14 w-14 rounded-lg object-cover"
                            />
                        </a>

                        <div>
                            <h3 class="font-medium sm:text-lg">
                                <p class="font-bold">
                                    <span class="text-violet-900 text-sm p-4">
                                        학회
                                    </span>
                                    Biomics
                                    <span>  </span>
                                    <span
                                        class="inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="-ms-1 me-1.5 h-4 w-4"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>

                                        <p class="whitespace-nowrap text-sm">교내</p>
                                    </span>

                                    <span>  </span>
                                    <span
                                        class="inline-flex items-center justify-center rounded-full bg-amber-100 px-2.5 py-0.5 text-amber-700"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="-ms-1 me-1.5 h-4 w-4"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>


                                        <p class="whitespace-nowrap text-sm">학업</p>
                                    </span>

                                    <span>  </span>
                                    <span
                                        class="inline-flex items-center justify-center rounded-full bg-blue-100 px-2.5 py-0.5 text-blue-700 p-3"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="-ms-1 me-1.5 h-4 w-4"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>


                                        <p class="whitespace-nowrap text-sm">저학년(1~2)</p>
                                    </span>
                                </p>
                            </h3>

                            <h5>

                            </h5>

                            <p class="line-clamp-2 text-m text-gray-700 p-3">
                                저희는 2023년 1월에 결성되어 함께 학회를 꾸려나갈 신입 부원을 찾고 있습니다. 수준별 세미나 운영 및 다른 여러 활동을 진행할 예정입니다.
                            </p>

                            <br />
                            <br />

                            <button
                                onClick={() => setIsModalOpen(true)}
                                class="float-left rounded-md bg-violet-500 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-violet-800 hover:font-bold" href="/Apply">
                                Apply
                            </button>

                            <div class="mt-2 sm:flex sm:items-center sm:gap-2 pl-4 pb-3 float-left">
                                <div class="flex items-center gap-1 text-gray-500">
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

                                    <p class="text-xs">   0 / 8</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="flex justify-end">
                        <strong
                            class="-mb-[2px] -me-[2px] inline-flex items-center gap-1 rounded-ee-xl rounded-ss-xl bg-violet-900 px-3 py-1.5 text-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                                />
                            </svg>

                            <span class="text-[10px] text-white font-medium sm:text-xs">모집중</span>
                        </strong>
                    </div>
                </article>
                <article class="rounded-xl border-2 border-gray-200 bg-white p-4">
                    <div class="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
                        <a href="#" class="block shrink-0">
                            <img
                                alt="Speaker"
                                src="https://images.unsplash.com/photo-1504150558240-0b4fd8946624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
                                class="h-14 w-14 rounded-lg object-cover"
                            />
                        </a>

                        <div>
                            <h3 class="font-medium sm:text-lg">
                                <p class="font-bold">
                                    <span class="text-violet-900 text-sm p-4">
                                        동아리
                                    </span>
                                    TOT
                                    <span>  </span>
                                    <span
                                        class="inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="-ms-1 me-1.5 h-4 w-4"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>

                                        <p class="whitespace-nowrap text-sm">연합</p>
                                    </span>

                                    <span>  </span>
                                    <span
                                        class="inline-flex items-center justify-center rounded-full bg-amber-100 px-2.5 py-0.5 text-amber-700"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="-ms-1 me-1.5 h-4 w-4"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>


                                        <p class="whitespace-nowrap text-sm">친목</p>
                                    </span>

                                    <span>  </span>
                                    <span
                                        class="inline-flex items-center justify-center rounded-full bg-blue-100 px-2.5 py-0.5 text-blue-700 p-3"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="-ms-1 me-1.5 h-4 w-4"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>


                                        <p class="whitespace-nowrap text-sm">전 학년</p>
                                    </span>
                                </p>
                            </h3>

                            <h5>

                            </h5>

                            <p class="line-clamp-2 text-m text-gray-700 p-3">
                                대학생 연합 여행동아리 TOT에서 21.5기 멤버를 모집합니다. 여행을 좋아하고 여행에 대한 열정이 많으며, 새로운 사람들을 만나 추억을 쌓고 싶다면 누구나 환영합니다.
                            </p>

                            <br />
                            <br />

                            <button
                                onClick={() => setIsModalOpen(true)}
                                class="float-left rounded-md bg-violet-500 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-violet-800 hover:font-bold" href="/Apply">
                                Apply
                            </button>

                            <div class="mt-2 sm:flex sm:items-center sm:gap-2 pl-4 pb-3 float-left">
                                <div class="flex items-center gap-1 text-gray-500">
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

                                    <p class="text-xs">   0 / 30</p>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="flex justify-end">
                        <strong
                            class="-mb-[2px] -me-[2px] inline-flex items-center gap-1 rounded-ee-xl rounded-ss-xl bg-violet-900 px-3 py-1.5 text-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                                />
                            </svg>

                            <span class="text-[10px] text-white font-medium sm:text-xs">모집중</span>
                        </strong>
                    </div>
                </article>
                <article class="rounded-xl border-2 border-gray-200 bg-white p-4">
                    <div class="flex items-start gap-4 p-4 sm:p-6 lg:p-8">
                        <a href="#" class="block shrink-0">
                            <img
                                alt="Speaker"
                                src="https://images.unsplash.com/photo-1580745294621-4e8479b5d7ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJhbmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
                                class="h-14 w-14 rounded-lg object-cover"
                            />
                        </a>

                        <div>
                            <h3 class="font-medium sm:text-lg">
                                <p class="font-bold">
                                    <span class="text-violet-900 text-sm p-4">
                                        소모임
                                    </span>
                                    두드려 : Come To Knock Rock
                                    <span>  </span>
                                    <span
                                        class="inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="-ms-1 me-1.5 h-4 w-4"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>

                                        <p class="whitespace-nowrap text-sm">교내</p>
                                    </span>

                                    <span>  </span>
                                    <span
                                        class="inline-flex items-center justify-center rounded-full bg-amber-100 px-2.5 py-0.5 text-amber-700"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="-ms-1 me-1.5 h-4 w-4"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>


                                        <p class="whitespace-nowrap text-sm">밴드</p>
                                    </span>

                                    <span>  </span>
                                    <span
                                        class="inline-flex items-center justify-center rounded-full bg-blue-100 px-2.5 py-0.5 text-blue-700 p-3"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor"
                                            class="-ms-1 me-1.5 h-4 w-4"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>


                                        <p class="whitespace-nowrap text-sm">저학년(1~2)</p>
                                    </span>
                                </p>
                            </h3>

                            <h5>

                            </h5>

                            <p class="line-clamp-2 text-m text-gray-700 p-3">
                                경제대학 소속 유일 밴드 두드려가 29기 추가 모집을 진행합니다. 보컬과 기타 세션만을 대상으로 모집한다는 점 양해 부탁드립니다.
                            </p>

                            <br />
                            <br />

                            <button
                                onClick={() => setIsModalOpen(true)}
                                class="float-left rounded-md bg-violet-500 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-violet-800 hover:font-bold" href="/Apply">
                                Apply
                            </button>

                            <div class="mt-2 sm:flex sm:items-center sm:gap-2 pl-4 pb-3 float-left">
                                <div class="flex items-center gap-1 text-gray-500">
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

                                    <p class="text-xs">   5 / 5</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="flex justify-end">
                        <strong
                            class="-mb-[2px] -me-[2px] inline-flex items-center gap-1 rounded-ee-xl rounded-ss-xl bg-violet-900 px-3 py-1.5 text-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                stroke-width="2"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                                />
                            </svg>

                            <span class="text-[10px] text-white font-medium sm:text-xs">모집완료</span>
                        </strong>
                    </div>
                </article>

                {isModalOpen && (
                    <div>
                        <section class="bg-gray-100 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-screen">

                            <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">

                                <div class="grid grid-cols-1 gap-x-16 gap-y-8 sm:grid-cols-1 lg:grid-cols-5">
                                    <div class="lg:col-span-2 lg:py-12">
                                        <h1 class="text-center text-3xl text-violet-700 font-extrabold">멋쟁이 사자처럼</h1>
                                        <br />
                                        <h3 class="font-extrabold text-violet-900 text-ml">활동 내용</h3>
                                        <ul class="max-w-xl text-sm text-gray-500 list-disc p-2">
                                            <li>1학기: 정규 스터디 및 팀 프로젝트</li>
                                            <li>여름방학: 방학 스터디, 중앙 연합 아이디어톤, 중앙 연합 해커톤</li>
                                            <li>2학기: 팀별 실전 프로젝트 제작 및 배포</li>
                                        </ul>
                                        <br />
                                        <h3 class="font-extrabold text-violet-900 text-ml">지원 자격</h3>
                                        <ul class="max-w-xl text-sm text-gray-500 list-disc p-2">
                                            <li>정기 교육 세션, 교내외 해커톤 등 최소 1년 동안 동아리 활동이 가능한 분</li>
                                            <li>프로그래밍에 대한 열정이 넘치시는 분</li>
                                            <li>생활 코딩 관련 사전과제를 수행 완료하신 분</li>
                                        </ul>


                                    </div>

                                    <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                                        <form action="" class="space-y-4">
                                            <div>
                                                <label class="sr-only" for="name">Name</label>
                                                <input
                                                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                                    placeholder="Name"
                                                    type="text"
                                                    id="name"
                                                />
                                            </div>

                                            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                                <div>
                                                    <label class="sr-only" for="email">Email</label>
                                                    <input
                                                        class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                                        placeholder="Email address"
                                                        type="email"
                                                        id="email"
                                                    />
                                                </div>

                                                <div>
                                                    <label class="sr-only" for="phone">Phone</label>
                                                    <input
                                                        class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                                        placeholder="Phone Number"
                                                        type="tel"
                                                        id="phone"
                                                    />
                                                </div>
                                            </div>

                                            <div class="grid grid-cols-1 gap-4 text-center sm:grid-cols-1">
                                                <div>
                                                    <label class="sr-only" for="univ">University</label>
                                                    <input
                                                        class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                                        placeholder="University"
                                                        type="text"
                                                        id="univ"
                                                    />
                                                </div>

                                                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                                    <div>
                                                        <label class="sr-only" for="major">Major</label>
                                                        <input
                                                            class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                                            placeholder="Major"
                                                            type="text"
                                                            id="major"
                                                        />
                                                    </div>

                                                    <div>
                                                        <label class="sr-only" for="StudentID">StudentID</label>
                                                        <input
                                                            class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                                            placeholder="StudentID"
                                                            type="text"
                                                            id="studentID"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div>
                                                <label class="sr-only" for="message">Message</label>

                                                <textarea
                                                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                                                    placeholder="Intoroduce to yourself."
                                                    rows="8"
                                                    id="message"
                                                ></textarea>
                                            </div>


                                        </form>
                                    </div>

                                    <div>
                                        <br />
                                        <button
                                            onClick={() => {
                                                setIsModalOpen(false);
                                                return <Alert />;
                                            }}
                                            class="rounded-md bg-violet-500 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-violet-800 hover:font-bold" href="/Apply">
                                            Submit
                                        </button>
                                        <br />

                                    </div>

                                </div>
                            </div>
                        </section>


                    </div>

                )}
            </div>
        </div>
    </div>)
}


function Move() {
    return (<div>
        <br />
        <br />

        <ol class="flex justify-center gap-1 text-xs font-medium">
            <li>
                <a
                    href="#"
                    class="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
                >
                    <span class="sr-only">Prev Page</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-3 w-3"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </a>
            </li>



            <li
                class="block h-8 w-8 rounded border-violet-700 bg-violet-700 text-center leading-8 text-white"
            >
                1
            </li>

            <li>
                <a
                    href="#"
                    class="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                >
                    2
                </a>
            </li>

            <li>
                <a
                    href="#"
                    class="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                >
                    3
                </a>
            </li>

            <li>
                <a
                    href="#"
                    class="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                >
                    4
                </a>
            </li>

            <li>
                <a
                    href="#"
                    class="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
                >
                    <span class="sr-only">Next Page</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-3 w-3"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </a>
            </li>
        </ol>
    </div>)
}
function Club() {
    return (
        <div>
            <Nav />
            <Finding />
            <Sorting />
            <Move />
        </div>
    )
}

export default Club;