import React from 'react';
//import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
import '../index';
import App from './App';
import About from './About';
import Club from './Club';
import Location from './Location';
import My from './My';
import New from './New';
//import Notice from './Notice';
import Nav from "../nav";

function Notice() {
    return (
        <div>
            <Nav />
            <header class="bg-gray-50 text-center">
                <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 text-center">
                    <h1 class="text-4xl font-bold text-violet-500 sm:text-5xl ">
                        Notice
                    </h1>
                </div>
            </header>
            <div class="overflow-x-auto rounded-lg border border-gray-200">
                <table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
                    <thead class="ltr:text-left rtl:text-right bg-gray-100">
                        <tr>
                            <th class="pwhitesace-nowrap px-4 py-2 font-medium text-gray-900">
                                No
                            </th>
                            <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                제목
                            </th>
                            <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                작성자
                            </th>
                            <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                작성일
                            </th>
                        </tr>
                    </thead>

                    <tbody class="divide-y divide-gray-200 text-center">
                        <tr>
                            <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                10
                            </td>
                            <td class="whitespace-nowrap px-4 py-2 text-gray-700"><a href="#" class="no-underline hover:underline ...">동아리 지원금 관련 안내사항</a></td>
                            <td class="whitespace-nowrap px-4 py-2 text-gray-700">동아리연합회</td>
                            <td class="whitespace-nowrap px-4 py-2 text-gray-700">2023.06.12</td>
                        </tr>

                        <tr>
                            <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                9
                            </td>
                            <td class="whitespace-nowrap px-4 py-2 text-gray-700"><a href="#" class="no-underline hover:underline ...">제6회 농성배 농구대회 동아리 모집 공고</a></td>
                            <td class="whitespace-nowrap px-4 py-2 text-gray-700">농성회</td>
                            <td class="whitespace-nowrap px-4 py-2 text-gray-700">2023.05.29</td>
                        </tr>

                        <tr>
                            <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                8
                            </td>
                            <td class="whitespace-nowrap px-4 py-2 text-gray-700"><a href="#" class="no-underline hover:underline ...">제7회 성축배 축구대회 동아리 모집 공고</a></td>
                            <td class="whitespace-nowrap px-4 py-2 text-gray-700">성축단</td>
                            <td class="whitespace-nowrap px-4 py-2 text-gray-700">2023.05.22</td>
                        </tr>

                        <tr>
                            <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                7
                            </td>
                            <td class="whitespace-nowrap px-4 py-2 text-gray-700"><a href="#" class="no-underline hover:underline ...">2023 금잔디 축제 공연 동아리 선발 결과</a></td>
                            <td class="whitespace-nowrap px-4 py-2 text-gray-700">동아리연합회</td>
                            <td class="whitespace-nowrap px-4 py-2 text-gray-700">2023.05.21</td>
                        </tr>

                        <tr>
                            <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                6
                            </td>
                            <td class="whitespace-nowrap px-4 py-2 text-gray-700"><a href="#" class="no-underline hover:underline ...">2023 어글리 정기공연 안내</a></td>
                            <td class="whitespace-nowrap px-4 py-2 text-gray-700">어글리</td>
                            <td class="whitespace-nowrap px-4 py-2 text-gray-700">2023.05.17</td>
                        </tr>

                        <tr>
                            <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                5
                            </td>
                            <td class="whitespace-nowrap px-4 py-2 text-gray-700"><a href="#" class="no-underline hover:underline ...">멋사 추가부원 모집 공고</a></td>
                            <td class="whitespace-nowrap px-4 py-2 text-gray-700">멋쟁이사자처럼</td>
                            <td class="whitespace-nowrap px-4 py-2 text-gray-700">2023.05.11</td>
                        </tr>

                        <tr>
                            <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                4
                            </td>
                            <td class="whitespace-nowrap px-4 py-2 text-gray-700"><a href="#" class="no-underline hover:underline ...">신규 동아리 등록 안내</a></td>
                            <td class="whitespace-nowrap px-4 py-2 text-gray-700">동아리연합회</td>
                            <td class="whitespace-nowrap px-4 py-2 text-gray-700">2023.04.21</td>
                        </tr>

                        <tr>
                            <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                3
                            </td>
                            <td class="whitespace-nowrap px-4 py-2 text-gray-700"><a href="#" class="no-underline hover:underline ...">2023 금잔디 축제 공연 동아리 모집 공고</a></td>
                            <td class="whitespace-nowrap px-4 py-2 text-gray-700">동아리연합회</td>
                            <td class="whitespace-nowrap px-4 py-2 text-gray-700">2023.04.19</td>
                        </tr>

                        <tr>
                            <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                2
                            </td>
                            <td class="whitespace-nowrap px-4 py-2 text-gray-700"><a href="#" class="no-underline hover:underline ...">2023 동아리 모집 기간 연장</a></td>
                            <td class="whitespace-nowrap px-4 py-2 text-gray-700">동아리연합회</td>
                            <td class="whitespace-nowrap px-4 py-2 text-gray-700">2023.04.12</td>
                        </tr>

                        <tr>
                            <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                1
                            </td>
                            <td class="whitespace-nowrap px-4 py-2 text-gray-700"><a href="#" class="no-underline hover:underline ...">2023 동아리 모집 공고</a></td>
                            <td class="whitespace-nowrap px-4 py-2 text-gray-700">동아리연합회</td>
                            <td class="whitespace-nowrap px-4 py-2 text-gray-700">2023.04.03</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="bg-gray-50">
                <div class="flex justify-end">
                    <a
                        class="mt-3 mr-3 mb-3 inline-block rounded border border-violet-500 bg-violet-500 px-5 py-2 text-sm font-medium text-white hover:bg-transparent hover:text-violet-500 focus:outline-none focus:ring active:text-violet-500"
                        href="/NewWrite"
                    >
                        글쓰기
                    </a>
                </div>


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
                        class="mb-10 block h-8 w-8 rounded border-violet-600 bg-violet-500 text-center leading-8 text-white"
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

            </div>

        </div>
    )
}

export default Notice;