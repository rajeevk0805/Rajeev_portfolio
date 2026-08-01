import taskManagerImg from "../assets/task_manager.png";
import nexEventImg from "../assets/nexevent.png";
import massWindoorImg from "../assets/masswindoor.png";
import kiranaBazaarImg from "../assets/kirana_bazaar.png";

export const resumeData = {
  personalInfo: {
    name: "Rajeev Kumar",
    title: "Full Stack Developer",
    subTitle:
      "Eager to contribute as an entry-level Software Developer by building scalable, high-quality web applications.",
    phone: "+91 7004791631",
    email: "rkrajeev0805@gmail.com",
    location: "Bangalore, Karnataka 560048",
    linkedin: "https://linkedin.com/in/rajeev-kumarrk",
    github: "https://github.com/rajeevk0805",
    summary:
      "MCA graduate with a strong foundation in software development and full stack web development. Proficient in Java, Spring Boot, React.js, Next.js, Node.js, JavaScript, HTML, CSS, SQL, and MongoDB, with solid understanding of data structures, algorithms, REST APIs, and database management. Eager to contribute as an entry-level Software Developer by building scalable, high-quality applications and continuously learning new technologies.",
  },
  skills: {
    languages: [
      { name: "Java", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "Python", level: 75 },
      { name: "SQL", level: 80 },
    ],
    frameworks: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 80 },
      { name: "Spring Boot", level: 75 },
      { name: "Spring", level: 70 },
      { name: "REST APIs", level: 85 },
      { name: "Git & GitHub", level: 85 },
      { name: "Postman", level: 80 },
    ],
    databases: [
      { name: "MongoDB", level: 85 },
      { name: "MySQL", level: 80 },
    ],
    domain: [
      "Data Structures & Algorithms",
      "Problem-Solving",
      "Responsive Web Design",
      "Full Stack Development",
    ],
  },
  experience: [
    {
      company: "Destiny IT Services Pvt. Ltd.",
      role: "Web Developer Intern",
      period: "Jan 2025 – Jul 2025",
      location: "Remote/Bangalore",
      description: [
        "Developed and maintained responsive web applications using Next.js, React.js, Node.js, and MongoDB.",
        "Assisted in building RESTful APIs and integrating them with front-end applications.",
        "Implemented reusable UI components following best practices for scalable, maintainable code.",
        "Collaborated with senior developers using Git to deliver features on time.",
      ],
    },
  ],
  projects: [
    {
      title: "Task Manager",
      image: taskManagerImg,
      tags: ["React", "Node.js", "Express.js", "MongoDB", "Full Stack"],
      technologies: "MongoDB, Express.js, React, Node.js",
      liveUrl: "https://task-manager-smoky-rho.vercel.app/",
      githubUrl: "https://github.com/rajeevk0805/Task-Manager",
      highlights: [
        "Developed a role-based task management web app with JWT authentication for Admin and Member access.",
        "Built task creation, assignment, progress tracking, checklists, file uploads (Cloudinary), and user management.",
        "Designed analytics dashboards with Recharts to visualize task status, priority, and team performance.",
        "Implemented Excel report generation using ExcelJS with RESTful APIs via Express.js and MongoDB.",
      ],
    },
    {
      title: "NexEvent",
      image: nexEventImg,
      tags: ["React", "Node.js", "Express.js", "MongoDB", "Full Stack"],
      technologies: "React, Node.js, Express.js, MongoDB",
      liveUrl: "https://nexevent-pi.vercel.app/",
      githubUrl: "https://github.com/rajeevk0805/NexEvent",
      highlights: [
        "Built a full-stack event management system with JWT authentication, OTP-based email verification, and role-based access.",
        "Implemented event booking, admin event/booking management, payment status tracking, analytics dashboard, and automated email notifications.",
      ],
    },
    {
      title: "MassWindoor",
      image: massWindoorImg,
      tags: ["Next.js", "React", "shadcn", "MongoDB", "Full Stack"],
      technologies: "Next.js, React, shadcn, MongoDB",
      liveUrl: "https://masswindoor.vercel.app",
      githubUrl: "https://github.com/rajeevk0805/masswindoor",
      highlights: [
        "Developed a full-stack web app with an interactive Window & Door Customizer and online booking system.",
        "Built a JWT-based admin dashboard enabling secure authentication, CRUD operations, and booking management.",
        "Created a responsive UI using Next.js, React, Tailwind CSS, and shadcn/ui.",
      ],
    },
    {
      title: "Kirana Bazaar",
      image: kiranaBazaarImg,
      tags: ["React", "Node.js", "Express.js", "MongoDB", "Full Stack"],
      technologies: "React, Node.js, Express.js, MongoDB",
      liveUrl: "https://kirana-bazaar.vercel.app",
      githubUrl: "https://github.com/rajeevk0805/Grocery-MERN",
      highlights: [
        "Built a full-stack grocery e-commerce application with authentication, cart, wishlist, and order management.",
        "Developed an admin dashboard for product, category, and order management with Cloudinary image uploads.",
        "Integrated RESTful APIs using Node.js, Express.js, MongoDB, and Mongoose with a responsive React UI.",
      ],
    },
  ],
  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      school: "L. N. Mishra Institute of Economic Development & Social Change",
      location: "Patna, Bihar",
      period: "2023 – 2025",
      grade: "CGPA: 8.35",
    },
    {
      degree: "Master of Science",
      school: "Anugrah Narayan College",
      location: "Patna, Bihar",
      period: "2019 – 2022",
      grade: "CGPA: 7.5",
    },
    {
      degree: "Bachelor of Science in Physics",
      school: "P.N.K. College",
      location: "Patna, Bihar",
      period: "2015 – 2019",
      grade: "Percentage: 65.86%",
    },
  ],
  certifications: [
    {
      title: "Full Stack Development",
      provider: "Kodnest",
      date: "Jul 2026",
      details:
        "Completed a six-month training program in Java & Python Full Stack Development, covering Competitive Programming, Web Development, SQL, and Testing.",
    },
    {
      title: "The Complete JavaScript Course",
      provider: "Udemy",
      date: "Jan 2025",
      details:
        "Comprehensive certification covering advanced JavaScript concepts, ES6+, async/await, APIs, and modern development workflows.",
    },
  ],
};
