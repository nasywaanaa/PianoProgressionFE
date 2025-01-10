const ABRSMCurriculumPage = () => {

    return (
        <div style={{ fontFamily: "'Poppins', sans-serif", color: "#fff" }}>
        {/* Navbar */}
        <nav
            style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px 50px",
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            position: "fixed",
            width: "100%",
            zIndex: 1000,
            }}
        >
            <img
            src={assets.LogoPianoProgressionRemoved}
            alt="Piano Progression Logo"
            style={{ width: "120px" }}
            />
            <ul
            style={{
                display: "flex",
                listStyle: "none",
                margin: 0,
                padding: 0,
                gap: "20px",
            }}
            >
            {["ABRSM Navigator", "Practice Pathway", "Progress Visionary", "Interactive Essentials"].map(
                (item) => (
                <li key={item}>
                    <a
                    href="#"
                    style={{
                        color: "#808191",
                        textDecoration: "none",
                        fontSize: "16px",
                    }}
                    >
                    {item}
                    </a>
                </li>
                )
            )}
            </ul>
            <div style={{ display: "flex", gap: "15px" }}>
            <button
                style={{
                backgroundColor: "transparent",
                color: "#FFF",
                border: "2px solid #23D693",
                borderRadius: "6px",
                padding: "10px 20px",
                cursor: "pointer",
                fontSize: "16px",
                }}
            >
                Login
            </button>
            <button
                style={{
                backgroundColor: "transparent",
                color: "#FFF",
                border: "2px solid #279EFF",
                borderRadius: "6px",
                padding: "10px 20px",
                cursor: "pointer",
                fontSize: "16px",
                }}
            >
                Registration
            </button>
            </div>
        </nav>
    
        <div
    
            style={{
            backgroundColor: "#000",
            padding: "50px 10%",
            }}
        > 
            {/* The Advantages Section */}
            <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
                padding: "200px 10%",
            }}
            >
            <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
                padding: "0px 0%",
            }}
            >
            <div style={{ flex: 1, textAlign: "center" }}>
                <img
                src={assets.TheoryExam}
                alt="The Advantages"
                style={{
                    width: "340px",
                }}
                />
            </div>
    
            <div
                style={{
                flex: 10,
                display: "flex",
                flexDirection: "column",
                gap: "30px",
                maxWidth: "500px",
                }}
            >
                {[
                {
                    title: "Music Theory Grades 1 to 5",
                    description:
                    "Music Theory at Grades 1 to 5 through an online exam. Exams are available on-demand. There are no booking periods or set dates so you can choose when to book and when and where to take your exam.  From the date of booking you have 28 days to log in to your ABRSM account and take your exam.",
                },
                {
                    description:
                    "There are a small number of dates when you will not be able to take exams. You can check these on our dates and fees page. You can take your exam in any suitable location where you have access to a laptop or desktop computer with a webcam and an internet connection.",
                },
                {
                    description:
                    "The exam platform, proctoring and test delivery are provided by PSI who deliver over 15 million assessments every year.",
                },
                {
                    title: "Music Theory Grades 6 to 8",
                    description:
                    "At Grades 6 to 8 we assess Music Theory through a paper-based exam. These exams take place on set dates as listed on our dates and fees page.",
                },
                ].map((item, index) => (
                <div key={index}>
                    <h4
                    style={{
                        color: "#FFF",
                        marginBottom: "10px",
                        fontSize: "18px",
                        fontWeight: "500",
                    }}
                    >
                    {item.title}
                    </h4>
                    <p
                    style={{
                        fontSize: "14px",
                        lineHeight: "1.6",
                        color: "#FFF",
                        textAlign: "justify", 
                    }}
                    >
                    {item.description}
                    </p>
                </div>
                ))}
            </div>
            </div>
            </div>
        </div>
        </div>
    );
    };
    
    export default ABRSMCurriculumPage;