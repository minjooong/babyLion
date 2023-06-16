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

function My() {
    return (
        <div>
            <header class="bg-gray-50">
                <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
                    <div class="mt-8">
                        <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl">My Page</h1>
                    </div>
                    <br />
                    <button type="button" class="group flex shrink-0 items-center rounded-lg transition">
                        <img
                            alt="Man"
                            src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                            class="h-20 w-20 rounded-full object-cover"
                        />

                        <p class="ms-2 hidden text-left text-xs sm:block">
                            <strong class="block font-medium text-2xl">김 멋 사</strong>

                            <span class="text-gray-500 text-xl"> 성균관대학교 </span>
                        </p>
                    </button>
                    <br />

                    <article class="flex items-end justify-between rounded-lg border border-gray-100 bg-white p-6">
                        <div class="flex" dir="ltr">
                            <p class="flex-auto text-2xl font-medium text-gray-900 me-24">내 동아리</p>

                            <div class="flex-auto overflow-x-auto">
                                <table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                                    <thead class="ltr:text-left rtl:text-right">
                                        <tr>
                                            <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">동아리명</th>
                                            <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">가입 일자</th>
                                            <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">역할</th>
                                            <th class="px-4 py-2"></th>
                                        </tr>
                                    </thead>

                                    <tbody class="divide-y divide-gray-200">
                                        <tr>
                                            <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">멋쟁이 사자처럼</td>
                                            <td class="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>
                                            <td class="whitespace-nowrap px-4 py-2 text-gray-700">Web Developer</td>
                                            <td class="whitespace-nowrap px-4 py-2">
                                                <a href="#" class="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700">
                                                    View
                                                </a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">배드민턴</td>
                                            <td class="whitespace-nowrap px-4 py-2 text-gray-700">04/11/1980</td>
                                            <td class="whitespace-nowrap px-4 py-2 text-gray-700">-</td>
                                            <td class="whitespace-nowrap px-4 py-2">
                                                <a href="#" class="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700">
                                                    View
                                                </a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">밴드부</td>
                                            <td class="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>
                                            <td class="whitespace-nowrap px-4 py-2 text-gray-700">Singer</td>
                                            <td class="whitespace-nowrap px-4 py-2">
                                                <a href="#" class="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700">
                                                    View
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </article>
                    <article class="flex items-end justify-between rounded-lg border border-gray-100 bg-white p-6">
                        <div>
                            <p class="text-2xl font-medium text-gray-900">지원 현황</p>
                        </div>
                    </article>
                    <article class="flex items-end justify-between rounded-lg border border-gray-100 bg-white p-6">
                        <div>
                            <p class="text-2xl font-medium text-gray-900">스크랩</p>
                        </div>
                    </article>
                    <article class="flex items-end justify-between rounded-lg border border-gray-100 bg-white p-6">
                        <div>
                            <p class="text-2xl font-medium text-gray-900">최근 본 동아리</p>
                        </div>
                    </article>
                    <article class="flex items-end justify-between rounded-lg border border-gray-100 bg-white p-6">
                        <div>
                            <p class="text-2xl font-medium text-gray-900">학교 인증</p>
                        </div>
                    </article>
                    <article class="flex items-end justify-between rounded-lg border border-gray-100 bg-white p-6">
                        <div>
                            <p class="text-2xl font-medium text-gray-900">비밀번호 변경</p>
                        </div>
                    </article>
                </div>
            </header>
        </div>
    );
}

export default My;
