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

function NewWrite() {
    return (
        <div>
            <Nav />
            <div class="bg-gray-100">
                <div class="mx-auto max-w-full px-4 py-16 sm:px-6 lg:px-8">
                    <div class="mx-auto w-9/12 text-center">
                        <h1 class="text-2xl font-bold sm:text-3xl text-violet-500">글쓰기</h1>

                    </div>

                    <form action="" class="mx-auto mb-0 mt-8 w-9/12 space-y-4">
                        <div>
                            <label for="title" class="sr-only">Title</label>

                            <div class="relative">
                                <input
                                    type="title"
                                    class="w-full border-2 rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                                    placeholder="제목"
                                />
                            </div>
                        </div>

                        <div>
                            <label for="content" class="sr-only">Content</label>

                            <div class="relative">
                                <textarea
                                    class="w-full border-2 rounded-lg border-gray-200 p-3 text-sm"
                                    placeholder="내용을 입력하세요."
                                    rows="20"
                                    id="message"
                                ></textarea>
                            </div>
                        </div>
                        <div class="flex justify-end">
                            <p class="p-1 mr-2">익명</p>
                            <label for="AcceptConditions" class="relative h-8 w-14 cursor-pointer">
                                <input type="checkbox" id="AcceptConditions" class="peer sr-only" />

                                <span
                                    class="absolute inset-0 rounded-full bg-gray-300 transition peer-checked:bg-violet-500"
                                ></span>

                                <span
                                    class="absolute inset-y-0 start-0 m-1 h-6 w-6 rounded-full bg-white transition-all peer-checked:start-6"
                                ></span>
                            </label>
                        </div>
                        <div class="flex justify-end">
                            <a
                                class="mt-3 mr-3 mb-3 inline-block rounded border border-violet-500 bg-violet-500 px-5 py-2 text-sm font-medium text-white hover:bg-transparent hover:text-violet-500 focus:outline-none focus:ring active:text-violet-500"
                                href="/Notice"
                            >
                                완료
                            </a>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
}

export default NewWrite;