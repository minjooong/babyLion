import React, { useEffect, useRef } from 'react';
//import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
import './index.css';
import App from './subPages/App';
import About from './subPages/About';
import Club from './subPages/Club';
import Location from './subPages/Location';
import My from './subPages/My';
import New from './subPages/New';
import Notice from './subPages/Notice';
import Login from './subPages/Login';
import Join from './subPages/Join';
import { Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

//import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Link, Route, Routes, useLocation } from 'react-router-dom';

function AiRecommend() {
    const location = useLocation();
    const shouldHideNavbar = location.pathname !== '/';
    if (shouldHideNavbar) {
        return null; // 네비게이션 바를 숨깁니다.
    }

    return (
        <section class="bg-gray-100">
            <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8" style={{ height: "1000px" }}>
                <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                    <div class="lg:col-span-2 lg:py-12">

                        <h2 class="text-4xl font-bold text-violet-600">
                            <span class="text-5xl font-extrabold text-violet-600">! </span>
                            Help Me, ㅇㅋㅇㅋ<span> </span>
                            <span class="text-5xl font-extrabold text-violet-600">! </span>
                        </h2>
                        <br />

                        <p class="max-w-xl text-lg mt-1.5 text-gray-500">
                            아직 어떤 동아리에 가입해야할지 결정하지 못하셨나요?
                            걱정하지 마세요, 저희의 AI 친구 <span class="text-violet-600 font-bold"><a href="/" class="hover:text-violet-900">'ㅇㅋㅇㅋ'</a></span>가 당신에게 가장 알맞는 동아리를 추천해줄게요!
                        </p>

                        <div class="mt-8">
                            <a href="" class="text-3xl font-bold text-violet-500 hover:text-violet-800">
                                ㅇㅋㅇㅋ
                            </a>
                            <span class="text-3xl font-bold text-violet-500"> :</span>
                            <p class="mt-2 max-w-xl text-ml mt-1.5">
                                안녕! 나는 '올클'에서 개발한 AI 챗봇 <span class="text-violet-600 font-bold"><a href="/" class="hover:text-violet-900">'ㅇㅋㅇㅋ'</a></span>야. <br />
                                오른쪽 문항에 너에 대한 정보를 작성을 한 후, 나에게 메세지를 전송해줘.
                                내가 너에게 가장 잘 어울리는 동아리를 하나 추천해줄게! <br />
                                <span class="text-sm text-gray-500">* 나에 대한 정보가 궁금하면 내 이름을 눌러봐 *</span>
                            </p>
                        </div>
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
                            <br />

                            <div class="grid grid-cols-1 gap-4 text-center sm:grid-cols-4">

                                <label for="HeadlineAct1" class="block text-sm font-bold w-full rounded-lg border-gray-200 p-3">
                                    학년 (소속)
                                </label>

                                <select
                                    name="HeadlineAct1"
                                    id="HeadlineAct1"
                                    class="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
                                >
                                    <option value="">Please select</option>
                                    <option value="JM">1학년</option>
                                    <option value="SRV">2학년</option>
                                    <option value="JH">3학년</option>
                                    <option value="BBK">4학년</option>
                                    <option value="AK">대학원생</option>
                                    <option value="BG">직장인</option>
                                </select>


                                <label for="HeadlineAct2" class="block text-sm font-bold w-full rounded-lg border-gray-200 p-3">
                                    동아리 구분
                                </label>

                                <select
                                    name="HeadlineAct2"
                                    id="HeadlineAct2"
                                    class="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
                                >
                                    <option value="">Please select</option>
                                    <option value="JM">전체</option>
                                    <option value="SRV">교내</option>
                                    <option value="JH">연합</option>

                                </select>

                            </div>

                            <br />


                            <div class="grid grid-cols-1 gap-4 text-center sm:grid-cols-6 font-medium">
                                <p class="block text-sm font-bold w-full rounded-lg border-gray-200 p-3">분야</p>
                                <div>
                                    <input
                                        class="peer sr-only"
                                        id="option1"
                                        type="radio"
                                        tabindex="-1"
                                        name="option"
                                    />

                                    <label
                                        for="option1"
                                        class="block w-full rounded-lg border border-gray-200 p-3 hover:border-black peer-checked:border-black peer-checked:font-extrabold"
                                        tabindex="0"
                                    >
                                        <span class="text-sm font-medium"> 학업 </span>
                                    </label>
                                </div>

                                <div>
                                    <input
                                        class="peer sr-only"
                                        id="option2"
                                        type="radio"
                                        tabindex="-1"
                                        name="option"
                                    />

                                    <label
                                        for="option2"
                                        class="block w-full rounded-lg border border-gray-200 p-3 hover:border-black peer-checked:border-black peer-checked:font-extrabold"
                                        tabindex="0"
                                    >
                                        <span class="text-sm font-medium"> 취미 </span>
                                    </label>
                                </div>

                                <div>
                                    <input
                                        class="peer sr-only"
                                        id="option3"
                                        type="radio"
                                        tabindex="-1"
                                        name="option"
                                    />

                                    <label
                                        for="option3"
                                        class="block w-full rounded-lg border border-gray-200 p-3 hover:border-black peer-checked:border-black peer-checked:font-extrabold"
                                        tabindex="0"
                                    >
                                        <span class="text-sm font-medium"> 밴드 </span>
                                    </label>
                                </div>
                                <div>
                                    <input
                                        class="peer sr-only"
                                        id="option4"
                                        type="radio"
                                        tabindex="-1"
                                        name="option"
                                    />

                                    <label
                                        for="option4"
                                        class="block w-full rounded-lg border border-gray-200 p-3 hover:border-black peer-checked:border-black peer-checked:font-extrabold"
                                        tabindex="0"
                                    >
                                        <span class="text-sm font-medium"> 파티 </span>
                                    </label>
                                </div>
                                <div>
                                    <input
                                        class="peer sr-only"
                                        id="option5"
                                        type="radio"
                                        tabindex="-1"
                                        name="option"
                                    />

                                    <label
                                        for="option5"
                                        class="block w-full rounded-lg border border-gray-200 p-3 hover:border-black peer-checked:border-black peer-checked:font-extrabold"
                                        tabindex="0"
                                    >
                                        <span class="text-sm font-medium"> 전체 </span>
                                    </label>
                                </div>
                            </div>



                            <div class="grid grid-cols-1 gap-4 text-center sm:grid-cols-4 font-medium">
                                <p class="block text-sm font-bold w-full rounded-lg border-gray-200 p-3">동아리 회비</p>

                                <div>
                                    <input
                                        class="peer sr-only"
                                        id="yes"
                                        type="radio"
                                        tabindex="-1"
                                        name="money"
                                    />

                                    <label
                                        for="yes"
                                        class="block w-full rounded-lg border border-gray-200 p-3 hover:border-black peer-checked:border-black peer-checked:font-extrabold"
                                        tabindex="0"
                                    >
                                        <span class="text-sm"> 있음 </span>
                                    </label>
                                </div>

                                <div>
                                    <input
                                        class="peer sr-only"
                                        id="no"
                                        type="radio"
                                        tabindex="-1"
                                        name="money"
                                    />

                                    <label
                                        for="no"
                                        class="block w-full rounded-lg border border-gray-200 p-3 hover:border-black peer-checked:border-black peer-checked:font-extrabold"
                                        tabindex="0"
                                    >
                                        <span class="text-sm"> 없음 </span>
                                    </label>
                                </div>

                                <div>
                                    <input
                                        class="peer sr-only"
                                        id="nothing"
                                        type="radio"
                                        tabindex="-1"
                                        name="money"
                                    />

                                    <label
                                        for="nothing"
                                        class="block w-full rounded-lg border border-gray-200 p-3 hover:border-black peer-checked:border-black peer-checked:font-extrabold"
                                        tabindex="0"
                                    >
                                        <span class="text-sm"> 상관없음 </span>
                                    </label>
                                </div>


                            </div>

                            <div class="grid grid-cols-1 gap-4 text-center sm:grid-cols-5 font-medium">
                                <p class="block text-sm font-bold w-full rounded-lg border-gray-200 p-3">동아리 규모</p>

                                <div>
                                    <input
                                        class="peer sr-only"
                                        id="large"
                                        type="radio"
                                        tabindex="-1"
                                        name="scale"
                                    />

                                    <label
                                        for="large"
                                        class="block w-full rounded-lg border border-gray-200 p-3 hover:border-black peer-checked:border-black peer-checked:font-extrabold"
                                        tabindex="0"
                                    >
                                        <span class="text-sm"> 대 (50~) </span>
                                    </label>
                                </div>

                                <div>
                                    <input
                                        class="peer sr-only"
                                        id="medium"
                                        type="radio"
                                        tabindex="-1"
                                        name="scale"
                                    />

                                    <label
                                        for="medium"
                                        class="block w-full rounded-lg border border-gray-200 p-3 hover:border-black peer-checked:border-black peer-checked:font-extrabold"
                                        tabindex="0"
                                    >
                                        <span class="text-sm"> 중 (30~50) </span>
                                    </label>
                                </div>

                                <div>
                                    <input
                                        class="peer sr-only"
                                        id="small"
                                        type="radio"
                                        tabindex="-1"
                                        name="scale"
                                    />

                                    <label
                                        for="small"
                                        class="block w-full rounded-lg border border-gray-200 p-3 hover:border-black peer-checked:border-black peer-checked:font-extrabold"
                                        tabindex="0"
                                    >
                                        <span class="text-sm"> 소 (10~30) </span>
                                    </label>
                                </div>
                                <div>
                                    <input
                                        class="peer sr-only"
                                        id="total"
                                        type="radio"
                                        tabindex="-1"
                                        name="scale"
                                    />

                                    <label
                                        for="total"
                                        class="block w-full rounded-lg border border-gray-200 p-3 hover:border-black peer-checked:border-black peer-checked:font-extrabold"
                                        tabindex="0"
                                    >
                                        <span class="text-sm"> 상관없음 </span>
                                    </label>
                                </div>
                            </div>

                            <div class="grid grid-cols-1 gap-4 text-center sm:grid-cols-5 font-medium">
                                <p class="block text-sm font-bold w-full rounded-lg border-gray-200 p-3">활동</p>

                                <div>
                                    <input
                                        class="peer sr-only"
                                        id="more"
                                        type="radio"
                                        tabindex="-1"
                                        name="activity"
                                    />

                                    <label
                                        for="more"
                                        class="block w-full rounded-lg border border-gray-200 p-3 hover:border-black peer-checked:border-black peer-checked:font-extrabold"
                                        tabindex="0"
                                    >
                                        <span class="text-sm"> 활발 </span>
                                    </label>
                                </div>

                                <div>
                                    <input
                                        class="peer sr-only"
                                        id="mediumActivity"
                                        type="radio"
                                        tabindex="-1"
                                        name="activity"
                                    />

                                    <label
                                        for="mediumActivity"
                                        class="block w-full rounded-lg border border-gray-200 p-3 hover:border-black peer-checked:border-black peer-checked:font-extrabold"
                                        tabindex="0"
                                    >
                                        <span class="text-sm"> 보통 </span>
                                    </label>
                                </div>

                                <div>
                                    <input
                                        class="peer sr-only"
                                        id="less"
                                        type="radio"
                                        tabindex="-1"
                                        name="activity"
                                    />

                                    <label
                                        for="less"
                                        class="block w-full rounded-lg border border-gray-200 p-3 hover:border-black peer-checked:border-black peer-checked:font-extrabold"
                                        tabindex="0"
                                    >
                                        <span class="text-sm"> 적음 </span>
                                    </label>
                                </div>
                                <div>
                                    <input
                                        class="peer sr-only"
                                        id="nothingActivity"
                                        type="radio"
                                        tabindex="-1"
                                        name="activity"
                                    />

                                    <label
                                        for="nothingActivity"
                                        class="block w-full rounded-lg border border-gray-200 p-3 hover:border-black peer-checked:border-black peer-checked:font-extrabold "
                                        tabindex="0"
                                    >
                                        <span class="text-sm"> 상관없음 </span>
                                    </label>
                                </div>
                            </div>

                            <br />
                            <br />
                            <br />

                            <div class="mt-4">
                                <button
                                    type="submit"
                                    class="inline-block w-full rounded-lg bg-violet-500 px-5 py-3 font-medium text-xl text-white sm:w-auto hover:bg-violet-800"
                                >
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

function Mainheader() {
    return (
        <header class="bg-gray-50">
            <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                <div class="flex items-center justify-end gap-4">
                    <div class="flex items-center gap-4">
                        <div class="relative">
                            <div class="sm:flex sm:gap-4">
                                <a class="rounded-md bg-violet-500 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-violet-800" href="/Login">
                                    Login
                                </a>

                                <div class="hidden sm:flex">
                                    <a class="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-violet-500 hover:text-violet-900 hover:font-bold" href="/Join">
                                        Join
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <span
                        aria-hidden="true"
                        class="block h-6 w-px rounded-full bg-gray-200"
                    ></span>

                    <a href="#" class="block shrink-0">
                        <span class="sr-only">Profile</span>
                        <img
                            alt="Man"
                            src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                            class="h-10 w-10 rounded-full object-cover"
                        />
                    </a>
                </div>


                <div class="text-center mt-8">
                    <h1 class="text-6xl font-sans font-extrabold text-violet-500">
                        올클 : All Of The Clubs
                    </h1>

                    <p class="mt-1.5 text-sm text-gray-500">
                        교내 모든 동아리들을 소개해주는 올클입니다
                    </p>
                </div>
            </div>
        </header>
    )
}

function Footer() {
    return (<div>
        <footer class="bg-white-100">
            <div class="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
                <div class="flex justify-center text-violet-600">
                    <h3 class="text-4xl font-extrabold">ㅇㅋ</h3>
                </div>

                <p class="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500">
                    from 성균관대학교 멋쟁이사자처럼 11기 팀 멋쟁이 4자처럼
                </p>

                <ul class="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
                    <li>
                        <a class="text-gray-700 transition hover:text-gray-700/75" href="/">
                            About
                        </a>
                    </li>

                    <li>
                        <a class="text-gray-700 transition hover:text-gray-700/75" href="/">
                            Careers
                        </a>
                    </li>

                    <li>
                        <a class="text-gray-700 transition hover:text-gray-700/75" href="/">
                            History
                        </a>
                    </li>

                    <li>
                        <a class="text-gray-700 transition hover:text-gray-700/75" href="/">
                            Services
                        </a>
                    </li>

                    <li>
                        <a class="text-gray-700 transition hover:text-gray-700/75" href="/">
                            Projects
                        </a>
                    </li>

                    <li>
                        <a class="text-gray-700 transition hover:text-gray-700/75" href="/">
                            Blog
                        </a>
                    </li>
                </ul>

                <ul class="mt-12 flex justify-center gap-6 md:gap-8">
                    <li>
                        <a
                            href="/"
                            rel="noreferrer"
                            target="_blank"
                            class="text-gray-700 transition hover:text-gray-700/75"
                        >
                            <span class="sr-only">Facebook</span>
                            <svg
                                class="h-6 w-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </a>
                    </li>

                    <li>
                        <a
                            href="/"
                            rel="noreferrer"
                            target="_blank"
                            class="text-gray-700 transition hover:text-gray-700/75"
                        >
                            <span class="sr-only">Instagram</span>
                            <svg
                                class="h-6 w-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </a>
                    </li>

                    <li>
                        <a
                            href="/"
                            rel="noreferrer"
                            target="_blank"
                            class="text-gray-700 transition hover:text-gray-700/75"
                        >
                            <span class="sr-only">Twitter</span>
                            <svg
                                class="h-6 w-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                                />
                            </svg>
                        </a>
                    </li>

                    <li>
                        <a
                            href="/"
                            rel="noreferrer"
                            target="_blank"
                            class="text-gray-700 transition hover:text-gray-700/75"
                        >
                            <span class="sr-only">GitHub</span>
                            <svg
                                class="h-6 w-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </a>
                    </li>

                    <li>
                        <a
                            href="/"
                            rel="noreferrer"
                            target="_blank"
                            class="text-gray-700 transition hover:text-gray-700/75"
                        >
                            <span class="sr-only">Dribbble</span>
                            <svg
                                class="h-6 w-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
        </footer >
    </div >)
}

function NavigationLocation() {
    const location = useLocation();
    const shouldHideNavbar = location.pathname !== '/';
    if (shouldHideNavbar) {
        return null; // 네비게이션 바를 숨깁니다.
    }

    return (
        <nav class="flex items-center grid gap-4 mt-8 sm:grid-cols-1 lg:grid-cols-6">

            <Link class="relative font-bold text-2xl text-violet-500 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-100 pb-6 hover:text-violet-900"
                to="/About"><span class="relative flex items-center justify-center">ABOUT</span></Link>
            <Link class="relative font-bold text-2xl text-violet-500 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-100 pb-6 hover:text-violet-900"
                to="/Club"><span class="relative flex items-center justify-center">CLUB</span></Link>
            <Link class="relative font-bold text-2xl text-violet-500 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-100 pb-6 hover:text-violet-900"
                to="/Location"><span class="relative flex items-center justify-center">LOCATION</span></Link>
            <Link class="relative font-bold text-2xl text-violet-500 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-100 pb-6 hover:text-violet-900"
                to="/Notice"><span class="relative flex items-center justify-center">NOTICE</span></Link>
            <Link class="relative font-bold text-2xl text-violet-500 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-100 pb-6 hover:text-violet-900"
                to="/New"><span class="relative flex items-center justify-center">NEW</span></Link>
            <Link class="relative font-bold text-2xl text-violet-500 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-100 pb-6 hover:text-violet-900"
                to="/My"><span class="relative flex items-center justify-center">MY</span></Link>
        </nav>
    );
};

function ShowClub() {
    useEffect(() => {
        const handleDOMContentLoaded = () => {
            new Swiper('.swiper-container', {
                loop: true,
                slidesPerView: 1,
                spaceBetween: 32,
                autoplay: {
                    delay: 8000,
                },
                breakpoints: {
                    640: {
                        centeredSlides: true,
                        slidesPerView: 1.25,
                    },
                    1024: {
                        centeredSlides: false,
                        slidesPerView: 1.5,
                    },
                },
                navigation: {
                    nextEl: '.next-button',
                    prevEl: '.prev-button',
                },
            });
        };

        document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);

        return () => {
            document.removeEventListener('DOMContentLoaded', handleDOMContentLoaded);
        };
    }, []);

    const location = useLocation();
    const shouldHideNavbar = location.pathname !== '/';
    if (shouldHideNavbar) {
        return null; // 네비게이션 바를 숨깁니다.
    }

    return (<div>
        <section class="bg-gray-100">
            <div
                class="mx-auto max-w-[1340px] px-4 py-16 sm:px-6 sm:py-24 lg:me-0 lg:pe-0 lg:ps-8" style={{ height: "700px" }}
            >
                <div
                    class="grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:items-center lg:gap-x-16"
                >
                    <div class="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                        <h2 class="text-3xl font-bold tracking-tight sm:text-5xl text-violet-800">
                            Recruiting  CLUBS
                            <br class="hidden sm:block lg:hidden" />

                        </h2>

                        <p class="mt-4 text-gray-500">
                            현재 모집 중인 동아리입니다. 어서 빨리 지원하세요!
                        </p>

                        <div class="hidden lg:mt-8 lg:flex lg:gap-4">
                            <button
                                class="prev-button rounded-full border border-violet-600 p-3 text-violet-600 hover:bg-violet-600 hover:text-white"
                            >
                                <span class="sr-only">Previous Slide</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="h-5 w-5 rtl:rotate-180"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M15.75 19.5L8.25 12l7.5-7.5"
                                    />
                                </svg>
                            </button>

                            <button
                                class="next-button rounded-full border border-violet-600 p-3 text-violet-600 hover:bg-violet-600 hover:text-white"
                            >
                                <span class="sr-only">Next Slide</span>
                                <svg
                                    class="h-5 w-5 rtl:rotate-180"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M9 5l7 7-7 7"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div class="-mx-6 lg:col-span-2 lg:mx-0">
                        <div class="swiper-container !overflow-hidden">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide">
                                    <blockquote
                                        class="flex h-full flex-col justify-between bg-white p-12"
                                    >
                                        <div>
                                            <div class="flex gap-0.5 text-green-500">
                                                <svg
                                                    class="h-5 w-5"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                    />
                                                </svg>

                                                <svg
                                                    class="h-5 w-5"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                    />
                                                </svg>

                                                <svg
                                                    class="h-5 w-5"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                    />
                                                </svg>

                                                <svg
                                                    class="h-5 w-5"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                    />
                                                </svg>

                                                <svg
                                                    class="h-5 w-5"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                    />
                                                </svg>
                                            </div>

                                            <div class="mt-4">
                                                <p class="text-2xl font-bold text-violet-900 sm:text-3xl">
                                                    멋쟁이 사자처럼
                                                </p>

                                                <p class="mt-4 leading-relaxed text-gray-500">
                                                    웹개발 프로그래밍 동아리입니다.
                                                </p>

                                                <br />
                                                <br />
                                                <div className="sm:flex sm:gap-4">
                                                    <div className="flex-grow"></div>
                                                    <div className="rounded-md bg-violet-500 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-violet-900 hover:text-white">
                                                        <a href="/Login">More</a>
                                                    </div>
                                                </div>



                                            </div>

                                        </div>


                                        <footer class="mt-8 text-sm text-gray-500">
                                            &mdash; 성균관대학교 중앙 동아리
                                        </footer>
                                    </blockquote>
                                </div>

                                <div class="swiper-slide">
                                    <blockquote
                                        class="flex h-full flex-col justify-between bg-white p-12"
                                    >
                                        <div>
                                            <div class="flex gap-0.5 text-green-500">
                                                <svg
                                                    class="h-5 w-5"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                    />
                                                </svg>

                                                <svg
                                                    class="h-5 w-5"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                    />
                                                </svg>

                                                <svg
                                                    class="h-5 w-5"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                    />
                                                </svg>

                                                <svg
                                                    class="h-5 w-5"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                    />
                                                </svg>

                                                <svg
                                                    class="h-5 w-5"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                    />
                                                </svg>
                                            </div>

                                            <div class="mt-4">
                                                <p class="text-2xl font-bold text-pink-600 sm:text-3xl">
                                                    hahaha
                                                </p>

                                                <p class="mt-4 leading-relaxed text-gray-500">
                                                    No, Rose, they are not breathing. And they have no arms or
                                                    legs … Where are they? You know what? If we come across
                                                    somebody with no arms or legs, do we bother resuscitating
                                                    them? I mean, what quality of life do we have there?
                                                </p>
                                            </div>
                                        </div>

                                        <footer class="mt-8 text-sm text-gray-500">
                                            &mdash; Michael Scott
                                        </footer>
                                    </blockquote>
                                </div>

                                <div class="swiper-slide">
                                    <blockquote
                                        class="flex h-full flex-col justify-between bg-white p-12"
                                    >
                                        <div>
                                            <div class="flex gap-0.5 text-green-500">
                                                <svg
                                                    class="h-5 w-5"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                    />
                                                </svg>

                                                <svg
                                                    class="h-5 w-5"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                    />
                                                </svg>

                                                <svg
                                                    class="h-5 w-5"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                    />
                                                </svg>

                                                <svg
                                                    class="h-5 w-5"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                    />
                                                </svg>

                                                <svg
                                                    class="h-5 w-5"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                    />
                                                </svg>
                                            </div>

                                            <div class="mt-4">
                                                <p class="text-2xl font-bold text-pink-600 sm:text-3xl">
                                                    Stayin' Alive
                                                </p>

                                                <p class="mt-4 leading-relaxed text-gray-500">
                                                    No, Rose, they are not breathing. And they have no arms or
                                                    legs … Where are they? You know what? If we come across
                                                    somebody with no arms or legs, do we bother resuscitating
                                                    them? I mean, what quality of life do we have there?
                                                </p>
                                            </div>
                                        </div>

                                        <footer class="mt-8 text-sm text-gray-500">
                                            &mdash; Michael Scott
                                        </footer>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mt-8 flex justify-center gap-4 lg:hidden">
                    <button
                        aria-label="Previous slide"
                        class="prev-button rounded-full border border-pink-600 p-4 text-pink-600 hover:bg-pink-600 hover:text-white"
                    >
                        <svg
                            class="h-5 w-5 -rotate-180 transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M9 5l7 7-7 7"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                            />
                        </svg>
                    </button>

                    <button
                        aria-label="Next slide"
                        class="next-button rounded-full border border-pink-600 p-4 text-pink-600 hover:bg-pink-600 hover:text-white"
                    >
                        <svg
                            class="h-5 w-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M9 5l7 7-7 7"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    </div>
    )
}

function NewClub() {
    const location = useLocation();
    const shouldHideNavbar = location.pathname !== '/';
    if (shouldHideNavbar) {
        return null; // 네비게이션 바를 숨깁니다.
    }
    return (
        <div class="bg-gray-100" style={{ height: "900px" }}>
            <h1 class="bg-gray-100 font-extrabold text-6xl underline text-violet-800 text-center pb-5">
                New Clubs
            </h1>
            <div class="bg-gray-100 flex items-center grid gap-4 mt-8 sm:grid-cols-1 lg:grid-cols-3">

                <div>
                    <article
                        class="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm"
                    >
                        <img
                            alt="Office"
                            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                            class="h-56 w-full object-cover"
                        />

                        <div class="p-4 sm:p-6">
                            <a href="#">
                                <h3 class="text-lg font-medium text-gray-900">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </h3>
                            </a>

                            <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                                dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
                                sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
                                voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                                Molestias explicabo corporis voluptatem?
                            </p>

                            <a
                                href="#"
                                class="group mt-4 inline-flex items-center gap-1 text-sm font-bold text-xl text-violet-800"
                            >
                                more

                                <span
                                    aria-hidden="true"
                                    class="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                                >
                                    &rarr;
                                </span>
                            </a>
                        </div>
                    </article>
                </div>
                <div>
                    <article
                        class="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm"
                    >
                        <img
                            alt="Office"
                            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                            class="h-56 w-full object-cover"
                        />

                        <div class="p-4 sm:p-6">
                            <a href="#">
                                <h3 class="text-lg font-medium text-gray-900">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </h3>
                            </a>

                            <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                                dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
                                sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
                                voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                                Molestias explicabo corporis voluptatem?
                            </p>

                            <a
                                href="#"
                                class="group mt-4 inline-flex items-center gap-1 text-sm font-bold text-xl text-violet-800"
                            >
                                more

                                <span
                                    aria-hidden="true"
                                    class="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                                >
                                    &rarr;
                                </span>
                            </a>
                        </div>
                    </article>
                </div>
                <div>
                    <article
                        class="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm"
                    >
                        <img
                            alt="Office"
                            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                            class="h-56 w-full object-cover"
                        />

                        <div class="p-4 sm:p-6">
                            <a href="#">
                                <h3 class="text-lg font-medium text-gray-900">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </h3>
                            </a>

                            <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                                dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
                                sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
                                voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                                Molestias explicabo corporis voluptatem?
                            </p>

                            <a
                                href="#"
                                class="group mt-4 inline-flex items-center gap-1 text-sm font-bold text-xl text-violet-800"
                            >
                                more

                                <span
                                    aria-hidden="true"
                                    class="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                                >
                                    &rarr;
                                </span>
                            </a>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    )
}

function PopularClub() {
    const location = useLocation();
    const shouldHideNavbar = location.pathname !== '/';
    if (shouldHideNavbar) {
        return null; // 네비게이션 바를 숨깁니다.
    }
    return (
        <div class="bg-gray-100" style={{ height: "900px" }}>
            <h1 class="bg-gray-100 font-extrabold text-6xl underline text-violet-800 text-center pb-5">
                Popular Clubs
            </h1>

            <div class="bg-gray-100 flex items-center grid gap-4 mt-8 sm:grid-cols-1 lg:grid-cols-3">
                <div>
                    <article
                        class="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm"
                    >
                        <img
                            alt="Office"
                            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                            class="h-56 w-full object-cover"
                        />

                        <div class="p-4 sm:p-6">
                            <a href="#">
                                <h3 class="text-lg font-medium text-gray-900">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </h3>
                            </a>

                            <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                                dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
                                sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
                                voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                                Molestias explicabo corporis voluptatem?
                            </p>

                            <a
                                href="#"
                                class="group mt-4 inline-flex items-center gap-1 text-sm font-bold text-xl text-violet-800"
                            >
                                more

                                <span
                                    aria-hidden="true"
                                    class="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                                >
                                    &rarr;
                                </span>
                            </a>
                        </div>
                    </article>
                </div>
                <div>
                    <article
                        class="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm"
                    >
                        <img
                            alt="Office"
                            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                            class="h-56 w-full object-cover"
                        />

                        <div class="p-4 sm:p-6">
                            <a href="#">
                                <h3 class="text-lg font-medium text-gray-900">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </h3>
                            </a>

                            <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                                dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
                                sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
                                voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                                Molestias explicabo corporis voluptatem?
                            </p>

                            <a
                                href="#"
                                class="group mt-4 inline-flex items-center gap-1 text-sm font-bold text-xl text-violet-800"
                            >
                                more

                                <span
                                    aria-hidden="true"
                                    class="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                                >
                                    &rarr;
                                </span>
                            </a>
                        </div>
                    </article>
                </div>
                <div>
                    <article
                        class="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm"
                    >
                        <img
                            alt="Office"
                            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                            class="h-56 w-full object-cover"
                        />

                        <div class="p-4 sm:p-6">
                            <a href="#">
                                <h3 class="text-lg font-medium text-gray-900">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </h3>
                            </a>

                            <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
                                dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
                                sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
                                voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                                Molestias explicabo corporis voluptatem?
                            </p>

                            <a
                                href="#"
                                class="group mt-4 inline-flex items-center gap-1 text-sm font-bold text-xl text-violet-800"
                            >
                                more

                                <span
                                    aria-hidden="true"
                                    class="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                                >
                                    &rarr;
                                </span>
                            </a>
                        </div>
                    </article>
                </div>

            </div>
        </div>
    )
}

function Main() {
    return (
        <div>
            <div>
                <Router>
                    <Routes>
                        <Route path="/" element={<Mainheader />} />
                        <Route path="Login" element={<Login />} />
                        <Route path="Join" element={<Join />} />
                        <Route path="/About" element={<About />} />
                        <Route path="/Club" element={<Club />} />
                        <Route path="/Location" element={<Location />} />
                        <Route path="/Notice" element={<Notice />} />
                        <Route path="/New" element={<New />} />
                        <Route path="/My" element={<My />} />
                    </Routes>
                    < NavigationLocation />
                    <ShowClub />
                    <AiRecommend />
                    <NewClub />
                    <PopularClub />
                    <Footer />
                </Router>
            </div>
        </div>
    )
}


export default Main;