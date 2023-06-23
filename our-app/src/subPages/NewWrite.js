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
            <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div class="mx-auto max-w-lg text-center">
                    <h1 class="text-2xl font-bold sm:text-3xl text-violet-500">글쓰기</h1>

                </div>

                <form action="" class="mx-auto mb-0 mt-8 max-w-md space-y-4">
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
                                rows="8"
                                id="message"
                            ></textarea>
                        </div>
                    </div>

                    <div class="flex justify-end">
                        <button
                            type="submit"
                            class="inline-block rounded-lg bg-violet-500 px-5 py-3 text-sm font-medium text-white"
                        >
                            완료
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default NewWrite;