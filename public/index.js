//https://shriya-personal-website.my.canva.site/
//Click to view my designs

document.addEventListener('DOMContentLoaded', () => {
    // Particles.js configuration
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: '#ffffff' },
            shape: { type: 'circle' },
            opacity: { value: 0.5, random: false },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
            move: { enable: true, speed: 6, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false }
        },
        interactivity: {
            detect_on: 'canvas',
            events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
            modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
        },
        retina_detect: true
    });

    // Typed.js configuration
    const typed = new Typed('#typed-text', {
        strings: ['Computer Science Student', 'Data Science Enthusiast', 'Problem Solver', 'Innovator'],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1500,
        startDelay: 500,
        loop: true
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animate skill bars on scroll
    const animateSkills = () => {
        const skillLevels = document.querySelectorAll('.skill-level');
        skillLevels.forEach(skill => {
            const skillTop = skill.getBoundingClientRect().top;
            if (skillTop < window.innerHeight - 100) {
                skill.style.width = skill.getAttribute('data-level');
            }
        });
    };

    window.addEventListener('scroll', animateSkills);

    // Code animation
    const codeElement = document.getElementById('animated-code');
    const codeSnippet = `
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));
    `.trim();

    let i = 0;
    const typeCode = () => {
        if (i < codeSnippet.length) {
            codeElement.innerHTML += codeSnippet.charAt(i);
            i++;
            setTimeout(typeCode, 50);
        } else {
            setTimeout(() => {
                codeElement.innerHTML = '';
                i = 0;
                typeCode();
            }, 3000);
        }
    };

    typeCode();

    // Add fade-in animation to sections
    const sections = document.querySelectorAll('section');
    const fadeInSection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    };

    const sectionObserver = new IntersectionObserver(fadeInSection, { threshold: 0.1 });
    sections.forEach(section => sectionObserver.observe(section));

    // Interactive Terminal
    const terminalInput = document.getElementById('terminal-input');
    const terminalOutput = document.getElementById('terminal-output');

    const commands = {
        help: 'Available commands: help, about, skills, projects, resume, clear, cd [section]',
        about: 'Hi, I\'m Shriya Rasale, a Computer Science student passionate about technology!',
        skills: 'My skills include: Python, Java, JavaScript, and Machine Learning',
        internships: 'Check out my internships section to see what I\'ve been working on!',
        projects: 'Check out my projects section to see what I\'ve been working on!',
        resume: 'View my resume to learn more about my experience and qualifications.',
        clear: () => {
            terminalOutput.innerHTML = '';
            return '';
        },
        cd: (section) => {
            const validSections = ['home', 'about', 'internships', 'projects', 'resume'];
            if (validSections.includes(section)) {
                document.querySelector(`#${section}`).scrollIntoView({ behavior: 'smooth' });
                return `Navigating to ${section} section...`;
            } else {
                return `Invalid section. Available sections: ${validSections.join(', ')}`;
            }
        }
    };

    terminalInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const input = terminalInput.value.trim().toLowerCase();
            const [command, ...args] = input.split(' ');
            let output = '';

            if (command in commands) {
                if (typeof commands[command] === 'function') {
                    output = commands[command](...args);
                } else {
                    output = commands[command];
                }
            } else if (command) {
                output = `Command not found: ${command}. Type 'help' for available commands.`;
            }

            if (output) {
                const outputLine = document.createElement('div');
                outputLine.classList.add('output-line');
                outputLine.textContent = `$ ${input}`;
                terminalOutput.appendChild(outputLine);

                const responseLine = document.createElement('div');
                responseLine.classList.add('output-line');
                responseLine.textContent = output;
                terminalOutput.appendChild(responseLine);
            }

            terminalInput.value = '';
            terminalOutput.scrollTop = terminalOutput.scrollHeight;
        }
    });

    // Animate project cards on hover
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.05)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Easter egg: Konami code
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;
    
    document.addEventListener('keydown', (e) => {
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                activateEasterEgg();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });

    function activateEasterEgg() {
        alert('Congratulations! You found the Easter egg. Here\'s a fun fact: The first computer programmer was a woman named Ada Lovelace!');
        document.body.style.animation = 'rainbow 5s linear infinite';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
    }

    document.addEventListener('DOMContentLoaded', () => {
        const terminalContent = document.querySelector('.contact-terminal .terminal-content');
        const lines = terminalContent.innerHTML.split('\n');
        terminalContent.innerHTML = '';
    
        let lineIndex = 0;
        function typeLine() {
            if (lineIndex < lines.length) {
                const line = document.createElement('div');
                line.className = lines[lineIndex].trim().startsWith('<div') ? '' : 'terminal-line';
                line.innerHTML = lines[lineIndex];
                terminalContent.appendChild(line);
                lineIndex++;
                setTimeout(typeLine, Math.random() * 100 + 50);
            }
        }
    
        typeLine();
    });
});
