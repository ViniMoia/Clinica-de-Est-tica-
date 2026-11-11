/**
 * JOSY CLAIR ESTÉTICA AVANÇADA - CORE INTERACTION ENGINE
 * Built on Design System V15 Architecture
 * Micro-interactions, reveals, parallax, flashlight dynamics, and interactive modules
 */

document.addEventListener('DOMContentLoaded', () => {

    // =========================================================================
    // 1. Initial Nav & Hero Entrance
    // =========================================================================
    setTimeout(() => {
        const header = document.querySelector('header');
        if (header) header.classList.add('loaded');

        const heroTitle = document.getElementById('hero-title');
        if (heroTitle) heroTitle.classList.add('reveal-active');
    }, 120);

    // =========================================================================
    // 2. Scroll Intersection Observer for '.reveal' & Text Reveals
    // =========================================================================
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.12
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // Activate nested text-reveal content
                const textWrappers = entry.target.querySelectorAll('.text-reveal-wrapper');
                if (textWrappers.length > 0) {
                    entry.target.classList.add('reveal-active');
                }
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // Observe standalone h2 / h3 that contain text-reveal-wrapper
    document.querySelectorAll('h2, h3').forEach(heading => {
        if (heading.querySelector('.text-reveal-wrapper') && !heading.classList.contains('reveal')) {
            heading.classList.add('reveal');
            revealObserver.observe(heading);
        }
    });

    // =========================================================================
    // 3. Amaterasu Smooth Multiplane Parallax Engine (Mouse & Scroll)
    // =========================================================================
    const heroSection = document.getElementById('hero');
    const heroWomanImg = document.getElementById('hero-woman-img');
    const heroHeadline = document.getElementById('hero-headline-wrap');
    const heroRings = document.getElementById('hero-rings');
    const siteHeader = document.getElementById('site-header');

    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;
    let isMouseOverHero = true;

    // Track mouse position normalized from -1 to 1
    window.addEventListener('mousemove', (e) => {
        targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
        targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    }, { passive: true });

    // Smooth Lerp Animation Loop (60-120fps GPU accelerated)
    function animateParallax() {
        // Linear interpolation damping factor
        currentMouseX += (targetMouseX - currentMouseX) * 0.06;
        currentMouseY += (targetMouseY - currentMouseY) * 0.06;

        const scrollY = window.scrollY;
        const windowH = window.innerHeight;

        // Only compute transforms when hero is within or near viewport
        if (scrollY < windowH * 1.5) {
            const scrollShift = scrollY * 0.22;

            if (heroWomanImg) {
                const imgX = currentMouseX * 18;
                const imgY = currentMouseY * 18 + scrollShift;
                heroWomanImg.style.transform = `translate3d(${imgX.toFixed(2)}px, ${imgY.toFixed(2)}px, 0) scale(1.05)`;
            }

            if (heroHeadline) {
                const textX = currentMouseX * -6;
                const textY = currentMouseY * -6 + (scrollY * -0.15);
                heroHeadline.style.transform = `translate3d(${textX.toFixed(2)}px, ${textY.toFixed(2)}px, 0)`;
            }

            if (heroRings) {
                const ringX = currentMouseX * 12;
                const ringY = currentMouseY * 12 + (scrollY * 0.1);
                heroRings.style.transform = `translate3d(${ringX.toFixed(2)}px, ${ringY.toFixed(2)}px, 0)`;
            }
        }

        requestAnimationFrame(animateParallax);
    }
    requestAnimationFrame(animateParallax);

    // =========================================================================
    // 4. Adaptive Navigation Bar (Scrolled Glass States)
    // =========================================================================
    function handleNavScroll() {
        const scrolled = window.scrollY;
        const heroHeight = heroSection ? heroSection.offsetHeight : window.innerHeight;

        // Switch to solid luxury glass when passing hero section
        if (siteHeader) {
            if (scrolled > heroHeight - 100) {
                siteHeader.classList.add('header-scrolled');
            } else {
                siteHeader.classList.remove('header-scrolled');
            }
        }
    }

    window.addEventListener('scroll', handleNavScroll, { passive: true });
    handleNavScroll(); // Run immediately on mount

    // =========================================================================
    // 5. Flashlight Dynamics (Global Mouse Tracker)
    // =========================================================================
    document.querySelectorAll('.flashlight-zone').forEach(zone => {
        zone.addEventListener('mousemove', (e) => {
            const rect = zone.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            zone.style.setProperty('--mouse-x', `${x}px`);
            zone.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // =========================================================================
    // 6. Services Category Filter (Typo-Rows Filter)
    // =========================================================================
    const filterButtons = document.querySelectorAll('.filter-btn');
    const serviceRows = document.querySelectorAll('.service-row');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filterValue = btn.dataset.filter;

            serviceRows.forEach(row => {
                const category = row.dataset.category;
                if (filterValue === 'todos' || category === filterValue) {
                    row.style.display = 'flex';
                    setTimeout(() => {
                        row.style.opacity = '1';
                        row.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    row.style.opacity = '0';
                    row.style.transform = 'translateY(15px)';
                    setTimeout(() => {
                        row.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // =========================================================================
    // 7. Interactive Protocol Simulator (Diagnóstico Pré-Consulta)
    // =========================================================================
    const protocolsData = {
        'rejuvenescimento': {
            title: 'Protocolo Rejuvenescimento & Firmeza 360°',
            category: 'Estética Facial Avançada',
            description: 'Associação sinérgica de bioestimulador de colágeno (Radiesse/Sculptra) com aplicação preventiva de toxina botulínica e revitalização com Skinbooster. Restaura a densidade dérmica, suaviza rugas estáticas e devolve a luminosidade natural.',
            affinity: '99%',
            sessions: '1 a 3 sessões anuais',
            downtime: 'Mínimo (retorno imediato)',
            tech: 'Bioestimulação + Microinfusão Dérmica',
            tag: 'Mais Indicado para Firmeza & Viço',
            waMessage: 'Olá, Dra. Josy! Fiz o simulador no site e meu objetivo é Rejuvenescimento Facial 360°. Gostaria de saber mais e agendar minha avaliação!'
        },
        'harmonizacao': {
            title: 'Harmonização Facial com Proporção Áurea',
            category: 'Harmonização & Definição',
            description: 'Mapeamento minucioso dos pontos de sustentação da face com ácido hialurônico de alta tecnologia: realce malar, definição de mandíbula, ângulo mentoniano e refinamento labial. Foco absoluto na elegância e naturalidade das proporções.',
            affinity: '97%',
            sessions: 'Protocolo sob medida (etapa única ou progressiva)',
            downtime: '24 a 48h para estabilização',
            tech: 'Ácido Hialurônico Reticulado Premium',
            tag: 'Alta Definição Natural',
            waMessage: 'Olá, Dra. Josy! Fiz o simulador e me interessei pela Harmonização Facial com Proporção Áurea. Gostaria de agendar uma avaliação!'
        },
        'manchas': {
            title: 'Clareamento Avançado & Tratamento de Melasma',
            category: 'Dermocosmética & Renovação',
            description: 'Protocolo multifásico que combina peeling fotoativado, inibidores de tirosinase e regeneração da barreira cutânea. Reduz pigmentações residuais, uniformiza o tom da pele e controla o rebote melânico com segurança.',
            affinity: '95%',
            sessions: '3 a 5 sessões quinzenais',
            downtime: 'Leve descamação controlada',
            tech: 'Peelings Químicos + Fototerapia LED',
            tag: 'Uniformidade & Viço',
            waMessage: 'Olá, Dra. Josy! Fiz o simulador no site e gostaria de agendar uma consulta para Tratamento de Manchas e Melasma.'
        },
        'silhueta': {
            title: 'Protocolo Silhueta Slim & Contorno Corporal',
            category: 'Tratamentos Corporais',
            description: 'Tratamento focado na redução de medidas localizadas, modelagem das curvas naturais e melhora expressiva do tônus tecidual. Associa tecnologias de alta performance para compactação de adipócitos e estímulo metabólico.',
            affinity: '98%',
            sessions: '6 a 10 sessões personalizadas',
            downtime: 'Zero (sem restrições)',
            tech: 'Ultrassom Focalizado + Eletroterapia Avançada',
            tag: 'Contorno & Definição',
            waMessage: 'Olá, Dra. Josy! No simulador selecionei o Protocolo Silhueta Slim e Contorno Corporal. Gostaria de agendar uma avaliação!'
        },
        'flacidez': {
            title: 'Protocolo Firmeza Corporal & Glúteo Up',
            category: 'Textura & Firmeza da Pele',
            description: 'Estimulação profunda de elastina e neocolagênese em regiões como abdômen, coxas, braços e glúteos. Melhora a elasticidade, suaviza irregularidades e atenua o aspecto de celulite.',
            affinity: '96%',
            sessions: '4 a 8 sessões',
            downtime: 'Mínimo',
            tech: 'Bioestimulador Corporal + Vacuoterapia Suave',
            tag: 'Firmeza & Tônus',
            waMessage: 'Olá, Dra. Josy! Gostaria de uma avaliação para o Protocolo de Firmeza Corporal e Textura da Pele que simulei no site.'
        },
        'relaxamento': {
            title: 'Spa Terapêutico & Drenagem Linfática Exclusiva',
            category: 'Bem-Estar & Descompressão',
            description: 'Experiência sensorial completa unindo manobras de drenagem manual para desobstrução linfática, alívio de edemas e relaxamento muscular profundo com aromaterapia e ambiente imersivo climatizado.',
            affinity: '100%',
            sessions: 'Avulso ou Plano Mensal',
            downtime: 'Imediato alívio e bem-estar',
            tech: 'Drenagem Especializada + Aromacologia',
            tag: 'Desintoxicação & Leveza',
            waMessage: 'Olá, Dra. Josy! Gostaria de agendar uma sessão do Spa Terapêutico e Drenagem Linfática Exclusiva.'
        }
    };

    const simButtons = document.querySelectorAll('.sim-trigger');
    const simResultTitle = document.getElementById('sim-result-title');
    const simResultCategory = document.getElementById('sim-result-category');
    const simResultDesc = document.getElementById('sim-result-desc');
    const simResultAffinity = document.getElementById('sim-result-affinity');
    const simResultSessions = document.getElementById('sim-result-sessions');
    const simResultDowntime = document.getElementById('sim-result-downtime');
    const simResultTech = document.getElementById('sim-result-tech');
    const simResultTag = document.getElementById('sim-result-tag');
    const simResultWa = document.getElementById('sim-result-wa');

    simButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            simButtons.forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');

            const key = btn.dataset.sim;
            const data = protocolsData[key];

            if (data && simResultTitle) {
                // Smooth transition
                const panel = document.getElementById('sim-result-panel');
                if (panel) {
                    panel.style.opacity = '0.5';
                    panel.style.transform = 'translateY(6px)';
                }

                setTimeout(() => {
                    simResultTitle.textContent = data.title;
                    simResultCategory.textContent = data.category;
                    simResultDesc.textContent = data.description;
                    simResultAffinity.textContent = data.affinity;
                    simResultSessions.textContent = data.sessions;
                    simResultDowntime.textContent = data.downtime;
                    simResultTech.textContent = data.tech;
                    simResultTag.textContent = data.tag;
                    
                    const encodedMsg = encodeURIComponent(data.waMessage);
                    simResultWa.href = `https://wa.me/5591993131314?text=${encodedMsg}`;

                    if (panel) {
                        panel.style.opacity = '1';
                        panel.style.transform = 'translateY(0)';
                    }
                }, 200);
            }
        });
    });

    // =========================================================================
    // 8. Copy Address to Clipboard with Visual Toast Feedback
    // =========================================================================
    const copyBtn = document.getElementById('copy-address-btn');
    const copyToast = document.getElementById('copy-toast');
    const addressToCopy = "Cidade nova 4 Arterial 18 n372, Ananindeua - PA, 67133-310";

    if (copyBtn) {
        copyBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(addressToCopy).then(() => {
                if (copyToast) {
                    copyToast.classList.remove('opacity-0', 'pointer-events-none', '-translate-y-2');
                    copyToast.classList.add('opacity-100', 'translate-y-0');
                    
                    setTimeout(() => {
                        copyToast.classList.remove('opacity-100', 'translate-y-0');
                        copyToast.classList.add('opacity-0', 'pointer-events-none', '-translate-y-2');
                    }, 3500);
                }
            }).catch(err => {
                console.error("Erro ao copiar endereço:", err);
            });
        });
    }

    // =========================================================================
    // 9. Appointment Pre-Booking Form
    // =========================================================================
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('form-name')?.value.trim() || '';
            const phone = document.getElementById('form-phone')?.value.trim() || '';
            const service = document.getElementById('form-service')?.value || 'Avaliação Personalizada';
            const period = document.getElementById('form-period')?.value || 'Qualquer Horário';
            const message = document.getElementById('form-message')?.value.trim() || 'Sem observações';

            if (!name) {
                alert('Por favor, informe seu nome.');
                return;
            }

            const formattedMessage = `Olá, Dra. Josy! Gostaria de solicitar um agendamento na Josy Clair Estética:\n\n` +
                `👤 *Nome:* ${name}\n` +
                `📱 *Telefone:* ${phone}\n` +
                `✨ *Tratamento de Interesse:* ${service}\n` +
                `⏰ *Período Preferido:* ${period}\n` +
                `💬 *Mensagem/Objetivo:* ${message}\n\n` +
                `Aguardo o retorno para confirmação de disponibilidade. Obrigado!`;

            const encoded = encodeURIComponent(formattedMessage);
            const waUrl = `https://wa.me/5591993131314?text=${encoded}`;

            window.open(waUrl, '_blank');
        });
    }

    // =========================================================================
    // 10. Mobile Navigation Menu Drawer
    // =========================================================================
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileDrawer = document.getElementById('mobile-drawer');
    const closeDrawerBtn = document.getElementById('close-drawer-btn');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    function openMobileMenu() {
        if (mobileDrawer) {
            mobileDrawer.classList.remove('hidden');
            setTimeout(() => {
                mobileDrawer.classList.remove('opacity-0');
                mobileDrawer.querySelector('.drawer-content')?.classList.remove('-translate-x-full');
            }, 10);
            document.body.style.overflow = 'hidden';
        }
    }

    function closeMobileMenu() {
        if (mobileDrawer) {
            mobileDrawer.classList.add('opacity-0');
            mobileDrawer.querySelector('.drawer-content')?.classList.add('-translate-x-full');
            setTimeout(() => {
                mobileDrawer.classList.add('hidden');
                document.body.style.overflow = '';
            }, 300);
        }
    }

    if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openMobileMenu);
    if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeMobileMenu);
    mobileLinks.forEach(link => link.addEventListener('click', closeMobileMenu));

    // =========================================================================
    // 11. Interactive Service Detail Modal / Quick View
    // =========================================================================
    const serviceCards = document.querySelectorAll('.typo-row');
    serviceCards.forEach(card => {
        card.addEventListener('click', () => {
            const serviceName = card.querySelector('.typo-demo')?.textContent.trim();
            if (serviceName) {
                const waText = encodeURIComponent(`Olá, Dra. Josy! Gostaria de mais informações sobre o procedimento: ${serviceName}.`);
                window.open(`https://wa.me/5591993131314?text=${waText}`, '_blank');
            }
        });
    });

});

