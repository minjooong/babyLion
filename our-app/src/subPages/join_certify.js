

function Join_certify() {
    return (
        <div>
            <h1
                style={{
                    textAlign: "center",
                    fontSize: "24px",
                    fontWeight: "bold",
                    margin: "20px 0",
                    color: "#7C3AED",
                }}
            >
                합격증 및 학생증 사진 업로드
            </h1>

            <div
                style={{
                    border: '1px dotted grey',
                    backgroundColor: 'white',
                    margin: '60px 150px',
                    padding: '200px 100px',
                }}
            >

                <div style={{ textAlign: 'center' }}>

                    <img
                        src="https://img.icons8.com/pastel-glyph/2x/image-file.png"
                        alt="Selected Image"
                        style={{
                            display: "inline-block",
                            margin: "0 0 10px 0",
                            maxWidth: "35px",
                            maxHeight: "35px",
                        }}
                    />

                    <p>Drag file to upload</p>

                </div>
            </div>

            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "30px" }}>
                <div class="flex items-center gap-4">
                    <div class="sm:flex sm:gap-4">
                        <a class="rounded-md bg-violet-500 px-20 py-4 text-sm font-medium text-white shadow hover:bg-violet-800" href="/Join">
                            Upload
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Join_certify;
