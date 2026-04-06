from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import ListFlowable, ListItem, Paragraph, SimpleDocTemplate, Spacer


OUTPUT = Path("/Users/krishtyagi/Desktop/magic website/Krish_Tyagi_Resume_Final.pdf")


def build_pdf() -> None:
    doc = SimpleDocTemplate(
        str(OUTPUT),
        pagesize=A4,
        rightMargin=16 * mm,
        leftMargin=16 * mm,
        topMargin=14 * mm,
        bottomMargin=14 * mm,
    )

    styles = getSampleStyleSheet()
    title = ParagraphStyle(
        "Title",
        parent=styles["Title"],
        fontName="Helvetica-Bold",
        fontSize=20,
        leading=24,
        alignment=TA_CENTER,
        textColor=colors.HexColor("#0f172a"),
        spaceAfter=4,
    )
    contact = ParagraphStyle(
        "Contact",
        parent=styles["BodyText"],
        fontName="Helvetica",
        fontSize=10,
        leading=13,
        alignment=TA_CENTER,
        textColor=colors.HexColor("#334155"),
        spaceAfter=10,
    )
    heading = ParagraphStyle(
        "Heading",
        parent=styles["Heading2"],
        fontName="Helvetica-Bold",
        fontSize=11,
        leading=13,
        textColor=colors.HexColor("#0f172a"),
        spaceBefore=8,
        spaceAfter=5,
    )
    body = ParagraphStyle(
        "Body",
        parent=styles["BodyText"],
        fontName="Helvetica",
        fontSize=9.2,
        leading=12.2,
        textColor=colors.HexColor("#1e293b"),
        alignment=TA_LEFT,
        spaceAfter=4,
    )
    bullet_style = ParagraphStyle(
        "Bullet",
        parent=body,
        leftIndent=0,
        firstLineIndent=0,
        spaceAfter=2,
    )
    role = ParagraphStyle(
        "Role",
        parent=body,
        fontName="Helvetica-Bold",
        textColor=colors.HexColor("#111827"),
        spaceBefore=3,
        spaceAfter=1,
    )
    date_style = ParagraphStyle(
        "Date",
        parent=body,
        fontSize=8.8,
        textColor=colors.HexColor("#475569"),
        spaceAfter=3,
    )

    story = [
        Paragraph("KRISH TYAGI", title),
        Paragraph(
            "Noida, India | +91 9315060525 | krishtyagi726@gmail.com | GitHub | Portfolio",
            contact,
        ),
        Paragraph("PROFESSIONAL SUMMARY", heading),
        Paragraph(
            "Full-Stack Developer with hands-on experience building production-ready web applications, FastAPI backends, AI-assisted systems, and Dockerized deployments. Skilled in Python, FastAPI, frontend development, authentication systems, and cloud deployment workflows. Currently building the <b>Magic ecosystem</b>, an AI-native platform focused on agentic workflows, real-time SaaS experiences, and intelligent business automation.",
            body,
        ),
        Paragraph("CORE SKILLS", heading),
        Paragraph("<b>Backend:</b> Python, FastAPI, REST APIs, Swagger/OpenAPI, JWT Authentication, RBAC", body),
        Paragraph("<b>Frontend:</b> HTML, CSS, JavaScript, responsive UI development, e-commerce interfaces", body),
        Paragraph("<b>Databases:</b> MySQL, MongoDB, vector databases", body),
        Paragraph("<b>AI & Automation:</b> NLP, Generative AI fundamentals, AI chatbot systems, retrieval-ready workflows", body),
        Paragraph("<b>DevOps & Tools:</b> Docker, GitHub, Render, CI/CD basics", body),
        Paragraph("<b>Enterprise Systems:</b> SAP, ManageEngine, system monitoring", body),
        Paragraph("PROJECTS", heading),
        Paragraph("Magic Ecosystem | Agentic AI and Full-Stack Delivery Platform", role),
        ListFlowable(
            [
                ListItem(Paragraph("Building a premium AI and full-stack services platform centered on agentic workflows, SaaS product engineering, Excel automation, and intelligent lead-generation systems.", bullet_style)),
                ListItem(Paragraph("Designed a motion-first platform using Next.js, React, Tailwind CSS, Framer Motion, GSAP, and Three.js for a cinematic product experience.", bullet_style)),
                ListItem(Paragraph("Structured backend architecture around FastAPI, LangGraph, and LlamaIndex-ready retrieval patterns for future multi-agent orchestration.", bullet_style)),
            ],
            bulletType="bullet",
            leftIndent=12,
        ),
        Spacer(1, 4),
        Paragraph("TilesKart | Full-Stack E-Commerce Marketplace", role),
        Paragraph("Link: https://tileskart.onrender.com/index.html", date_style),
        ListFlowable(
            [
                ListItem(Paragraph("Built a live e-commerce marketplace with category navigation, product listings, cart, wishlist, and brand-focused browsing.", bullet_style)),
                ListItem(Paragraph("Developed a FastAPI backend with secure signup/login, JWT authentication, and protected product CRUD routes.", bullet_style)),
                ListItem(Paragraph("<b>Tech:</b> HTML, CSS, JavaScript, FastAPI, Python, JWT, Render", bullet_style)),
            ],
            bulletType="bullet",
            leftIndent=12,
        ),
        Spacer(1, 4),
        Paragraph("Astrology Consultation Portal | SaaS Platform", role),
        Paragraph("Link: https://abhishek-astrologer.onrender.com/", date_style),
        ListFlowable(
            [
                ListItem(Paragraph("Built a business platform with appointment booking, customer portal, payment tracking, admin dashboard, and utility tools.", bullet_style)),
                ListItem(Paragraph("Implemented secure backend APIs with authentication, role-based access control, and Swagger/OpenAPI documentation.", bullet_style)),
                ListItem(Paragraph("Dockerized and deployed the application on Render.", bullet_style)),
                ListItem(Paragraph("<b>Tech:</b> FastAPI, Python, Docker, HTML, CSS, JavaScript, Swagger/OpenAPI, Render", bullet_style)),
            ],
            bulletType="bullet",
            leftIndent=12,
        ),
        Spacer(1, 4),
        Paragraph("FastAPI E-Commerce Backend | Baking Platform", role),
        ListFlowable(
            [
                ListItem(Paragraph("Built backend services for an e-commerce platform using FastAPI and MongoDB with async workflows.", bullet_style)),
                ListItem(Paragraph("Implemented JWT authentication, bcrypt password hashing, role-based access control, and APIs for products, cart, orders, uploads, and reviews.", bullet_style)),
                ListItem(Paragraph("<b>Tech:</b> FastAPI, MongoDB, JWT, bcrypt, Swagger/OpenAPI", bullet_style)),
            ],
            bulletType="bullet",
            leftIndent=12,
        ),
        Spacer(1, 4),
        Paragraph("AI Healthcare Chatbot", role),
        ListFlowable(
            [
                ListItem(Paragraph("Built a Python-based chatbot for automated medical query handling and symptom guidance using NLP concepts.", bullet_style)),
            ],
            bulletType="bullet",
            leftIndent=12,
        ),
        Paragraph("EXPERIENCE", heading),
        Paragraph("Python & FastAPI Backend Trainee | TechChefz Digital (TCZ Digital Pvt Ltd), Noida", role),
        Paragraph("Jan 2025 - Present", date_style),
        ListFlowable(
            [
                ListItem(Paragraph("Developed and deployed scalable REST APIs using FastAPI with Swagger/OpenAPI documentation.", bullet_style)),
                ListItem(Paragraph("Contributed to AI-powered backend pipelines integrating Python with vector databases.", bullet_style)),
                ListItem(Paragraph("Worked with Dockerized environments to improve deployment consistency and reliability.", bullet_style)),
            ],
            bulletType="bullet",
            leftIndent=12,
        ),
        Spacer(1, 4),
        Paragraph("Developing and Project Testing Intern | Honda Cars India Limited, Greater Noida", role),
        Paragraph("Aug 2025 - Oct 2025", date_style),
        ListFlowable(
            [
                ListItem(Paragraph("Tested AI-based chatbot systems designed to record and analyze staff and customer conversations.", bullet_style)),
                ListItem(Paragraph("Reviewed conversation data to support customer experience improvements through AI and automation.", bullet_style)),
            ],
            bulletType="bullet",
            leftIndent=12,
        ),
        Spacer(1, 4),
        Paragraph("Testing Trainee | Apple Tree Infotech", role),
        Paragraph("Jul 2025 - Nov 2025", date_style),
        ListFlowable(
            [
                ListItem(Paragraph("Built Python-based solutions integrated with MySQL for structured data handling.", bullet_style)),
                ListItem(Paragraph("Performed functional and basic system testing to validate performance and data accuracy.", bullet_style)),
            ],
            bulletType="bullet",
            leftIndent=12,
        ),
        Spacer(1, 4),
        Paragraph("IT Department Intern | Somany Ceramics Ltd., Noida", role),
        Paragraph("May 2024 - Jul 2024", date_style),
        ListFlowable(
            [
                ListItem(Paragraph("Supported IT operations using ManageEngine for monitoring and interface control.", bullet_style)),
                ListItem(Paragraph("Used SAP for inventory, payroll support, purchase orders, and invoicing workflows.", bullet_style)),
            ],
            bulletType="bullet",
            leftIndent=12,
        ),
        Paragraph("EDUCATION", heading),
        Paragraph("<b>Bachelor of Technology in Computer Science & Engineering</b> | SRM University", body),
        Paragraph("<b>CBSE Class 12:</b> 70% | 2022", body),
        Paragraph("<b>CBSE Class 10:</b> 87% | 2020 | J.K.G International School", body),
    ]

    doc.build(story)


if __name__ == "__main__":
    build_pdf()
