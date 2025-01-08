import { useState } from "react";

import assets from "../../assets";
const LandingPage = () => {
    const [isBlurred, setIsBlurred] = useState(true);
    const [activeFAQ, setActiveFAQ] = useState(null);

    const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
    };

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
        backgroundImage: `url(${assets.BackgroundPianoBlack})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "0 10%",
        backgroundColor: "rgba(15, 15, 15, 0.5)", 
        }}
    >
        <div style={{ maxWidth: "600px" }}>
        <img
            src={assets.LogoPianoProgressionRemoved}
            alt="Piano Progression Logo"
            style={{ width: "300px", marginBottom: "20px" }}
        />
        <h3
            style={{
            fontSize: "20px",
            fontWeight: "300",
            fontStyle: "italic",
            color: "#FFF",
            marginBottom: "5px",
            borderBottom: "2px solid #23D693",
            display: "inline-block",
            paddingBottom: "5px",
            }}
        >
            Piano Tracker for ABRSM
        </h3>
        <p
            style={{
            marginTop: "20px",
            color: "#FFF",
            fontSize: "16px",
            lineHeight: "1.8",
            }}
        >
            <strong>Piano Progression</strong> is a platform designed to support
            piano learning, particularly for users aiming to achieve ABRSM
            (Associated Board of the Royal Schools of Music) certification,
            assisting them on their journey to mastering the piano from Grade 1
            to Grade 8.
        </p>
        <button
            style={{
            marginTop: "20px",
            backgroundColor: "#23D693",
            color: "#FFF",
            border: "none",
            borderRadius: "6px",
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            }}
        >
            Learn More
        </button>
        </div>
    </div>
    {/* Features Section */}
    <div
        style={{
        backgroundColor: "#000",
        padding: "50px 10%",
        }}
    >
        <div
        style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
        }}
        >
        {[
            {
            title: "ABRSM Navigator",
            description:
                "Provides a guide for tracking progress based on the ABRSM curriculum and learning music theory through interactive quizzes and flashcards.",
            icon: assets.Icon1LandingPage, 
            },
            {
            title: "Practice Pathway",
            description:
                "Combines the ABRSM curriculum tracker with a daily practice planner to create a focused and structured practice schedule.",
            icon: assets.Icon2LandingPage, 
            },
            {
            title: "Progress Visionary",
            description:
                "Offers graphical progress visualization and in-depth evaluations through feedback from a virtual tutor.",
            icon: assets.Icon3LandingPage, 
            },
            {
            title: "Interactive Essentials",
            description:
                "Focuses on enhancing sight-reading and aural skills with the addition of quizzes and flashcards to master music theory.",
            icon: assets.Icon4LandingPage, 
            },
        ].map((feature, index) => (
            <div
            key={index}
            style={{
                backgroundColor: "rgba(20, 20, 20, 0.9)",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                textAlign: "center",
            }}
            >
            <div
                style={{
                display: "flex",
                alignItems: "center",
                gap: "10px", 
                marginBottom: "10px",
                }}
            >
                <img
                src={feature.icon}
                alt={`${feature.title} Icon`}
                style={{
                    width: "30px",
                    height: "auto",
                }}
                />
                <h4
                style={{
                    color: "#FFF",
                    fontSize: "14px",
                    alignContent: "center",
                    fontWeight: "bold",
                    margin: 0,
                }}
                >
                {feature.title}
                </h4>
            </div>
            <p
                style={{
                fontSize: "14px",
                lineHeight: "1.6",
                color: "#FFF",
                }}
            >
                {feature.description}
            </p>
            </div>
        ))}
        </div>
    </div>


    {/* Features Section */}
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
            padding: "0px 10%",
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
            src={assets.TheAdvantages}
            alt="The Advantages"
            style={{
                width: "440px",
            }}
            />
        </div>

        <div
            style={{
            flex: 0.5,
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            maxWidth: "500px",
            }}
        >
            {[
            {
                title: "24/7 Learning Access",
                description:
                "Learn anytime and anywhere at your convenience. With full-time online access, you can manage your piano learning journey without time constraints.",
            },
            {
                title: "Professional Guidance",
                description:
                "Receive guidance from experienced virtual tutors. We are here to ensure you get in-depth feedback and continuous support at every step of your learning journey.",
            },
            {
                title: "Community Support",
                description:
                "Connect with a community of fellow piano learners. Share experiences and motivation as you grow together in your musical journey.",
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

    {/* Testimonials Section */}
    <div
        style={{
        backgroundColor: "#000",
        padding: "190px 10%",
        }}
    >
        
        <div
        style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "50px",
        }}
        >
        
        <div style={{ flex: 0.3 }}>
            <h2
            style={{
                textAlign: "right",
                fontSize: "36px",
                fontWeight: "bold",
                margin: "0",
            }}
            >
            <img
                src={assets.TheirThoughts}
                alt="Their Thoughts"
                style={{ 
                    width: "380px" 
                }}
            />
            </h2>
        </div>
        </div>

        {/* Testimonials Cards */}
        <div
        style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "30px",
            alignItems: "center",
        }}
        >
        {[
            {
            name: "Kevin Sebastian",
            role: "Student Grade 6",
            avatar: assets.ProfilePicture,
            testimonial:
                "Piano Progression has completely transformed the way I learn piano. The ABRSM curriculum tracker keeps me on track and the virtual tutor's feedback is incredibly helpful.",
            },
            {
            name: "Auvarifqi",
            role: "Student Grade 6",
            avatar: assets.ProfilePicture,
            testimonial:
                "As a teacher, I recommend Piano Progression to all of my students. The platform complements my lessons perfectly, providing students with the tools they need to practice.",
            },
            {
            name: "Ahmad Rizki",
            role: "Student Grade 6",
            avatar: assets.ProfilePicture,
            testimonial:
                "I started learning piano and Piano Progression has been my go-to resource. The step-by-step approach and supportive community make it easy to stay motivated.",
            },
        ].map((item, index) => (
            <div
            key={index}
            onClick={() => index === 2 && setIsBlurred(false)}
            style={{
                backgroundColor: "rgba(20, 20, 20, 0.9)",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                textAlign: "justify",
                cursor: index === 2 ? "pointer" : "default",
                filter: index === 2 && isBlurred ? "blur(5px)" : "none",
                transition: "filter 0.3s ease, transform 0.3s ease",
                transform:
                index === 2 && !isBlurred ? "translateX(-10px)" : "none",
            }}
            >
            {/* Header */}
            <div
                style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "15px",
                }}
            >
                <img
                src={item.avatar}
                alt={`${item.name} Avatar`}
                style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    marginRight: "10px",
                }}
                />
                <div>
                <h4
                    style={{
                    color: "#FFF",
                    marginBottom: "5px",
                    fontSize: "14px",
                    }}
                >
                    {item.name}
                </h4>
                <span
                    style={{
                    display: "inline-block",
                    backgroundColor: "#23D693",
                    color: "#FFF",
                    fontSize: "14px",
                    padding: "5px 10px",
                    borderRadius: "4px",
                    }}
                >
                    {item.role}
                </span>
                </div>
            </div>

            <p
                style={{
                fontSize: "14px",
                lineHeight: "1.6",
                color: "#FFF",
                }}
            >
                {item.testimonial}
            </p>
            </div>
        ))}
        </div>
    </div>

    <div style={{ fontFamily: "'Poppins', sans-serif", color: "#fff" }}>

        {/* FAQ Section */}
        <div
        style={{
            backgroundColor: "#000",
            padding: "120px 10%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
        }}
        >
        {/* FAQ Title */}
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
            <img
            src={assets.CommonQuestions}
            alt="Common Questions"
            style={{ width: "380px", marginBottom: "20px" }}
            />
        </div>

        {/* FAQ Content */}
        <div style={{ maxWidth: "800px", width: "100%" }}>
            {[
            {
                question: "What is Piano Progression?",
                answer:
                "Piano Progression is a comprehensive platform designed to assist learners in mastering the piano, focusing on ABRSM certification preparation and structured progress tracking.",
            },
            {
                question: "Can I use Piano Progression as a beginner?",
                answer:
                "Yes! Piano Progression is designed for all skill levels, including beginners. It provides step-by-step guidance to help you get started with piano learning.",
            },
            {
                question: "How does virtual tutor work?",
                answer:
                "The virtual tutor provides personalized feedback based on your performance, progress tracking, and practice suggestions to help you improve efficiently.",
            },
            {
                question: "Can I track my progress?",
                answer:
                "Absolutely! Piano Progression includes detailed progress tracking tools to monitor your improvements over time and keep you motivated.",
            },
            {
                question: "How much does it cost?",
                answer:
                "Piano Progression offers flexible pricing plans. Visit our pricing page for detailed information about subscription options.",
            },
            ].map((faq, index) => (
            <div
                key={index}
                onClick={() => toggleFAQ(index)}
                style={{
                backgroundColor: "rgba(20, 20, 20, 0.9)",
                padding: "15px 20px",
                borderRadius: "10px",
                marginBottom: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                cursor: "pointer",
                transition: "all 0.3s ease",
                }}
            >
                {/* FAQ Question */}
                <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
                >
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <img
                    src={assets.Icon1LandingPage}
                    alt="FAQ Icon"
                    style={{ width: "24px", height: "24px" }}
                    />
                    <h4
                    style={{
                        color: "#FFF",
                        fontSize: "16px",
                        fontWeight: "500",
                        margin: 0,
                    }}
                    >
                    {faq.question}
                    </h4>
                </div>
                <span
                    style={{
                    color: "#FFF",
                    fontSize: "20px",
                    transform: activeFAQ === index ? "rotate(180deg)" : "rotate(0)",
                    transition: "transform 0.3s ease",
                    }}
                >
                    ...
                </span>
                </div>

                {/* FAQ Answer */}
                {activeFAQ === index && (
                <div
                    style={{
                    marginTop: "10px",
                    color: "#FFF",
                    fontSize: "14px",
                    lineHeight: "1.6",
                    }}
                >
                    {faq.answer}
                </div>
                )}
            </div>
            ))}
        </div>
        </div>
    </div>
    </div>
);
};

export default LandingPage;
