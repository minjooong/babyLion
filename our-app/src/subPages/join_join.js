import pandaImage from "./panda_image.gif";

function join_join() {
    return (
        <div>
            <h1
                style={{
                    textAlign: "center",
                    fontSize: "30px",
                    fontWeight: "bold",
                    margin: "20px 0",
                    color: "#7C3AED",
                }}
            >
                올클 가입을 환영합니다!
            </h1>

            <div style={{ textAlign: "center", marginTop: "30px", padding: "30px" }}>
                <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                    <img
                        src={pandaImage}
                        alt="Selected Image"
                        style={{
                            display: "inline-block",
                            margin: "0 0 100px 0",
                            maxWidth: "20%",
                            maxHeight: "20%",
                        }}
                    />
                </div>
                <p>로그인 후 올클의 서비스를 즐겨보세요!</p>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "30px" }}>
                    <div class="flex items-center gap-4">
                        <div class="sm:flex sm:gap-4">
                            <a class="rounded-md bg-violet-500 px-20 py-4 text-sm font-medium text-white shadow hover:bg-violet-800" href="/Login">
                                Log in
                            </a>

                            <div class="hidden sm:flex">
                                <a class="rounded-md bg-gray-100 px-20 py-4 text-sm font-medium text-violet-500 hover:font-bold" href="/main">
                                    home
                                </a>
                            </div>
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default join_join;
