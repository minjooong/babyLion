import "../index.css"
import join_panda_image from "./join_panda.jpg";

function Join() {
    return (
        <div>
            <section class="bg-white">
                <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
                    <section
                        class="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6"
                    >
                        <img
                            alt="Image"
                            src={join_panda_image}
                            class="absolute inset-0 h-full w-full object-cover opacity-80"
                        />

                        <div class="hidden lg:relative lg:block lg:p-12">
                            <a class="block text-white" href="/">
                                <div class="flex-1 md:flex md:items-center md:gap-12">
                                    <a class="block text-teal-600" href="/">
                                        <span class="sr-only">Home</span>
                                        <h1 class="text-4xl font-sans font-extrabold text-violet-500 hover:text-violet-800">ㅇㅋ</h1>
                                    </a>
                                </div>
                                <path
                                    d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                                    fill="currentColor"
                                />
                            </a>

                            <h2 class="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                                Welcome to All Of the Clubs
                            </h2>

                            <p class="mt-4 leading-relaxed text-white/90">
                                교내 모든 동아리를 소개해주는 'ㅇㅋ'에 오신 걸 환영합니다.
                            </p>
                        </div>
                    </section>

                    <main
                        class="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
                    >
                        <div class="max-w-xl lg:max-w-3xl">
                            <div class="relative -mt-16 block lg:hidden">
                                <a
                                    class="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20"
                                    href="/"
                                >
                                    <span class="sr-only">Home</span>
                                    <div class="flex-1 md:flex md:items-center md:gap-12">
                                        <a class="block text-teal-600" href="/">
                                            <span class="sr-only">Home</span>
                                            <h1 class="text-4xl font-sans font-extrabold text-violet-500 hover:text-violet-800">ㅇㅋ</h1>
                                        </a>
                                    </div>
                                    <path
                                        d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                                        fill="currentColor"
                                    />
                                </a>

                                <h1
                                    class="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl"
                                >
                                    Welcome to All Of the Clubs
                                </h1>

                                <p class="mt-4 leading-relaxed text-gray-500">
                                    교내 모든 동아리를 소개해주는 'ㅇㅋ'에 오신 걸 환영합니다.
                                </p>
                            </div>

                            <form action="#" class="mt-8 grid grid-cols-6 gap-6">
                                <div class="col-span-6">
                                    <label for="name" class="block text-sm font-medium text-violet-500">
                                        이름
                                    </label>

                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                    />
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                    <label
                                        for="school"
                                        class="block text-sm font-medium text-violet-500"
                                    >
                                        소속 대학
                                    </label>

                                    <input
                                        type="school"
                                        id="school"
                                        name="school"
                                        class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                    />
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                    <label
                                        for="studentnumber"
                                        class="block text-sm font-medium text-violet-500"
                                    >
                                        학번
                                    </label>

                                    <input
                                        type="text"
                                        id="studentnumber"
                                        name="student_number"
                                        class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                    />
                                </div>



                                <div class="col-span-6 sm:col-span-3">
                                    <label
                                        for="ID"
                                        class="block text-sm font-medium text-violet-500"
                                    >
                                        아이디
                                    </label>

                                    <input
                                        type="text"
                                        id="ID"
                                        name="ID"
                                        class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                    />
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                    <label
                                        for="Password"
                                        class="block text-sm font-medium text-violet-500"
                                    >
                                        비밀번호
                                    </label>

                                    <input
                                        type="password"
                                        id="Password"
                                        name="password"
                                        class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                    />
                                </div>

                                <div class="col-span-6">
                                    <label for="MarketingAccept" class="flex gap-4">
                                        <input
                                            type="checkbox"
                                            id="MarketingAccept"
                                            name="marketing_accept"
                                            class="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                                        />

                                        <span class="text-sm text-gray-700">
                                            새로운 동아리 공지, 동아리 모집 공고 등에 대한 알람 수신에 동의합니다.(선택)
                                        </span>
                                    </label>
                                </div>

                                <div class="col-span-6">
                                    <label for="MarketingAccept" class="flex gap-4">
                                        <input
                                            type="checkbox"
                                            id="MarketingAccept"
                                            name="marketing_accept"
                                            class="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                                        />

                                        <span class="text-sm text-gray-700">
                                            소속 대학 확인을 위한 개인정보 수집에 동의합니다.(필수)
                                        </span>
                                    </label>
                                </div>

                                <div class="col-span-6">
                                    <p class="text-sm text-gray-500">
                                        소속 대학 인증 후 올클 사용이 가능하며, 등록 이후 인증까지 2~3일의 시간이 소요됩니다.
                                    </p>
                                </div>


                                <div class="flex items-center gap-4">
                                    <div class="sm:flex sm:gap-4">
                                        <a class="rounded-md bg-violet-500 px-20 py-4 text-sm font-medium text-white shadow hover:bg-violet-800" href="/join_certify">
                                            certify
                                        </a>

                                        <div class="hidden sm:flex">
                                            <a class="rounded-md bg-gray-100 px-20 py-4 text-sm font-medium text-violet-500 hover:font-bold" href="/join_join">
                                                join
                                            </a>
                                        </div>
                                    </div>


                                    <p class="mt-4 text-sm text-gray-500 sm:mt-0">
                                        <a href="/Login" class="text-gray-700 underline">Log in</a>.
                                    </p>

                                </div>
                            </form>
                        </div>
                    </main>
                </div>
            </section>
            <br />
            <br />
            <br />
            <br />
            <br />

        </div>
    );

};

export default Join;
