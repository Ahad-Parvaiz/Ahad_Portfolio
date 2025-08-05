
import type { Certification, Project, Skill, EducationItem, ExperienceItem } from './types';

export const AVATAR_URL = 'https://i.ibb.co/Gq6nMP3/profile-modified.png';

export const CERTIFICATIONS: Certification[] = [
    { name: 'Fundamentals of Dark Web Training', url: 'https://credsverse.com/credentials/1674f5f5-39a7-4005-b5a5-a55805df2960?preview=1' },
    { name: 'Ethical Hacking', url: 'https://www.coursera.org/account/accomplishments/verify/L1XXT33UY7SK' },
    { name: 'Kali Linux', url: 'https://coursera.org/share/b41c0a63639513cc31fb58c790138dee' },
    { name: 'Network Mastery for Ethical Hackers', url: 'https://www.udemy.com/certificate/UC-a9064671-5249-423a-b32a-9254fcba1b76/' },
    { name: 'Network+: Networking Fundamentals', url: 'https://app.cybrary.it/courses/api/certificate/CC-7fe12512-7f1f-4b6c-8152-7e5f26aa89c2/view' },
    { name: 'PowerShell Basics: Your First Steps to Command Line Power', url: 'https://www.udemy.com/certificate/UC-9cd09ead-e4bd-41dd-9653-909820a620ce/' },
    { name: 'Project Manager', url: 'https://drive.google.com/file/d/1UVo5lzz-iI0qohO-BcXBZSOh5Qpnx_1h/view?usp=sharing' },
    { name: 'Web Hacking For Beginners', url: 'https://www.udemy.com/certificate/UC-d8313a0d-2bdb-4e74-bf68-ad411fcd1321/' },
    { name: 'Basics of Cyber Law', url: 'https://docs.uniathena.com/prod/course/certificate/543_1750104094_certificate.jpg' },
    { name: 'Basics of Python', url: 'https://docs.uniathena.com/prod/course/certificate/323_1750102433_certificate.jpg' },
    { name: 'WordPress Development', url: 'https://www.coursera.org/account/accomplishments/verify/QTMQXHQF8PLI' },
    { name: 'Learning Python', url: 'https://www.linkedin.com/learning/certificates/dc0ae22014f14143ff257ea869a407da2f5053affa1fdf866349b8c02f178ce8' },
    { name: 'Penetration Testing and Ethical Hacking', url: 'https://www.linkedin.com/learning/certificates/f9cfb47d65c44574eb9106aeab505b4fbf87cbb354ad20c59476e6294aca3689' },
    { name: 'CSS Basics for Beginners', url: 'https://www.mindluster.com/student/certificate/85d6812e' },
    { name: 'HTML5', url: 'https://www.mindluster.com/student/certificate/5234bbca' },
    { name: 'Cybrary Orientation', url: 'https://app.cybrary.it/courses/api/certificate/CC-a6ed1725-5141-4b7c-b1ed-72d8f2d39606/view' },
    { name: 'Create and Design Digital Products using Canva', url: '#' },
    { name: 'Foundation of Business and Enterpreneurship', url: '#' },
    { name: 'Designing and Formatting a Presentation in PowerPoint', url: '#' }
];

export const PROJECTS: Project[] = [
    { name: 'Phishing Awareness Training - Cybersecurity Presentation', description: 'Developed a professional educational PowerPoint to train individuals to identify, avoid, and report phishing attacks, covering various types, red flags (spoofed emails, suspicious links), and defense strategies like MFA.', github: 'https://github.com/Ahad-Parvaiz/Code-Alpha-Phishing-Awareness-Training' },
    { name: 'Secure Coding Review - Flask Login App', description: 'Performed a complete secure code audit on a Python Flask login system. Identified and remediated critical flaws like SQL Injection and plaintext passwords by implementing parameterized queries, bcrypt hashing, and input sanitization.', github: 'https://github.com/Ahad-Parvaiz/CodeAlpha-Secure-Coding-Review' },
    { name: 'Python Network Sniffer - Real-Time Packet Analyzer', description: 'Built a real-time network sniffer using Python and Scapy to capture and log TCP/IP packets. It extracts details like IP/ports, protocol, and raw payload in hex, ideal for cybersecurity learning and diagnostics.', github: 'https://github.com/Ahad-Parvaiz/CodeAlpha_Basic-Network-Sniffer' },
    { name: 'Age Calculator Pro - Precise & Responsive UI', description: 'Developed a responsive web app to calculate age precisely. Features real-time input validation, animated results, and a clean, intuitive, mobile-friendly UI.', github: 'https://github.com/Ahad-Parvaiz/codealpha_tasks', live: 'https://age-calculator-sable-six.vercel.app' },
    { name: 'Orhanix Website - AI-Powered Digital Solutions', description: 'Designed and developed a fully responsive and modern website for Orhanix, a tech company. The site showcases AI solutions and app development, emphasizing clean design, mobile optimization, and fast performance.', github: 'https://github.com/Ahad-Parvaiz/Orhanix.techt', live: 'https://orhanix.tech' },
    { name: 'CyberShield Awareness - Cybersecurity Education Platform', description: 'A responsive web platform to educate users about online threats. Includes real-time alerts, interactive quizzes, and tips for digital protection against ransomware and phishing.', github: 'https://github.com/Ahad-Parvaiz/Cyber-Aware', live: 'https://cyberaware-nu.vercel.app' },
    { name: 'Hacking With Ahad - Ethical Hacking Hub', description: 'Created an educational platform dedicated to ethical hacking fundamentals. Features structured tutorials, hands-on guides, and practical tools like Kali Linux resources with a clear, accessible UI.', github: 'https://github.com/Ahad-Parvaiz/Ethical-Hacking', live: 'https://hacking-with-ahad.vercel.app' }
];

export const SKILLS: Skill[] = [
    { axis: 'Pen Testing', value: 0.9 },
    { axis: 'Web Security', value: 0.85 },
    { axis: 'Kali Linux', value: 0.9 },
    { axis: 'Networking', value: 0.99 },
    { axis: 'Python', value: 0.8 },
    { axis: 'Project Mgmt', value: 0.75 },
    { axis: 'Scripting', value: 0.85 }
];

export const ABOUT_ME_PARAGRAPHS: string[] = [
    "I'm a passionate Computer Science student at the University of the Punjab (BSCS 2024-2028), specializing in Web Development and Cybersecurity. I build fast, responsive, and secure websites while advancing my expertise in ethical hacking, penetration testing, and cyber law.",
    "As a Freelance WordPress Developer on Fiverr, I work with global clients to deliver SEO-optimized websites using tools like Elementor, WooCommerce, and custom code. My internship at Orhanix allowed me to lead full-stack web projects and manage an internal AI Hackathon, showcasing both my development and project management skills.",
    "I'm actively pursuing hands-on experience in Kali Linux, Burp Suite, Wireshark, and more, through TryHackMe, Coursera, and LinkedIn Learning. My certifications prepare me for roles like Cybersecurity Analyst or Ethical Hacker."
];

export const ABOUT_ME_GOALS: string[] = [
    "Earn CEH and CompTIA Security+",
    "Transition into a professional cybersecurity role",
    "Lead secure, scalable web projects"
];

export const EDUCATION: EducationItem[] = [
    {
        institution: 'University of the Punjab',
        degree: 'Bachelor of Science in Computer Science (BSCS)',
        period: '2024 – 2028',
        description: 'Focusing on core computer science principles with a special interest in cybersecurity, network defense, and ethical hacking methodologies.'
    },
    {
        institution: 'Aspire Group of Colleges Zafarwal',
        degree: 'FSC (Pre-Engineering)',
        period: '2022 – 2024',
        description: 'Completed intermediate education with a focus on mathematics, physics, and chemistry, building a strong analytical and problem-solving foundation.'
    },
    {
        institution: 'Govt High School Zafarwal',
        degree: 'Matric (Sciences)',
        period: '2020 – 2022',
        description: 'Established a solid foundation in sciences, which sparked the initial interest in technology and logical systems.'
    }
];

export const EXPERIENCE: ExperienceItem[] = [
    {
        role: 'Cyber Security Intern',
        company: 'CodeAlpha · Internship',
        period: 'Aug 2025 - Sep 2025',
        description: 'Selected for a competitive cybersecurity internship program designed to provide real-world exposure and hands-on experience in threat analysis, vulnerability assessment, and security operations.'
    },
    {
        role: 'Summer Intern',
        company: 'Pakistan Career Fair · Internship',
        period: 'Jun 2025 - Aug 2025',
        description: 'Selected for the prestigious Online Internship Program by Skills4U. An intensive program focusing on professional communication, LinkedIn optimization, and other career-enhancing skills.'
    },
    {
        role: 'Wordpress Developer',
        company: 'Fiverr · Freelance',
        period: 'Jun 2025 - Aug 2025',
        description: 'Deliver custom, responsive, and SEO-optimized websites using WordPress, Elementor, and WooCommerce, tailored to meet individual client goals and needs.'
    },
    {
        role: 'Web Developer',
        company: 'Orhanix',
        period: 'Feb 2025 - Jun 2025',
        description: 'As a Web Developer at Orhanix, I was responsible for building clean, responsive, and fully customized websites. Specialized in Search Engine Optimization (SEO), Web Development, and modern front-end frameworks.'
    },
    {
        role: 'Project Manager - AI Hackathon',
        company: 'Orhanix',
        period: 'Mar 2025 - Apr 2025',
        description: "Served as the Project Manager for Orhanix's internal participation in an AI Hackathon, overseeing the complete project lifecycle, team coordination, and ensuring successful, on-time delivery."
    }
];


export const SOCIALS = {
    linkedin: 'https://www.linkedin.com/in/ahadparvaiz/',
    github: 'https://github.com/Ahad-Parvaiz',
    email: 'ahadparvaiz92@gmail.com',
    phone: '+92-3197601579'
};