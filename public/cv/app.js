document.addEventListener('DOMContentLoaded', function () {
  // ----------------------------------------------------
  // DATA DEFINITIONS (Rich structural CV details)
  // ----------------------------------------------------
  
  const skillsData = {
    backend: ['Spring Boot', 'Node.js', 'Express.js', 'Hono', 'PHP', 'Laravel'],
    frontend: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Angular', 'Vue.js'],
    devops: ['Docker', 'Kubernetes', 'Terraform', 'Ansible', 'Jenkins', 'Git', 'GitHub Actions', 'AWS', 'Azure'],
    db: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firebase', 'Supabase'],
    arch: ['Clean Architecture', 'Hexagonal (Ports & Adapters)', 'DDD – Light', 'Architecture Modulaire', 'Multi-Tenant SaaS'],
    api: ['REST API', 'GraphQL', 'JWT', 'OAuth 2.0', 'RBAC', 'Swagger / OpenAPI'],
    misc: ['Dart', 'Flutter', 'GetX', 'SonarQube', 'Prometheus', 'Grafana']
  };

  const experiences = [
    {
      id: "sonatel-mini-apps",
      role: "Développeur Frontend Mini Apps (Stage)",
      company: "Sonatel | Tencent Cloud",
      date: "2026 – Présent",
      tags: ["TypeScript", "JavaScript", "REST API"],
      desc: "Développement de mini applications intégrées à la plateforme <strong>Max it</strong> en utilisant l'écosystème <strong>Tencent Cloud Mini Program</strong>, avec intégration de services métiers via des API REST.",
      bullets: [
        "Développement et maintenance de mini applications destinées à la plateforme <strong>Max it</strong>.",
        "Conception d'interfaces utilisateurs responsives en respectant les standards de l'écosystème Tencent Cloud Mini Program.",
        "Intégration et consommation d'API REST pour l'accès aux services métiers.",
        "Collaboration avec les équipes backend, QA et métier pour le développement et la validation des fonctionnalités.",
        "Participation aux revues de code, aux corrections d'anomalies et aux évolutions des mini applications."
      ]
    },
    {
      id: "medibook-saas",
      role: "MediBook — Plateforme SaaS de Gestion de RDV",
      company: "Orange Digital Center",
      date: "2025",
      tags: ["Spring Boot", "PostgreSQL", "Docker", "React", "Flutter", "GetX", "Jenkins", "SonarQube", "Prometheus", "Grafana", "Terraform", "Azure", "Swagger / OpenAPI", "Multi-Tenant SaaS", "RBAC", "REST API", "Clean Architecture"],
      desc: "Plateforme SaaS multi-cabinets permettant la gestion automatisée des rendez-vous médicaux avec administration des disponibilités par les secrétaires médicaux.",
      bullets: [
        "Conception d’une architecture modulaire SaaS multi-tenant avec gestion de plusieurs cabinets médicaux indépendants.",
        "Gestion avancée des rôles : <strong>Super Admin, Admin Cabinet, Secrétaire, Médecin et Patient</strong>.",
        "Automatisation de la génération des créneaux médicaux réduisant la gestion manuelle des rendez-vous.",
        "Gestion des exceptions de planning : absences, vacances et indisponibilités partielles des médecins.",
        "Gestion dynamique du branding par cabinet : logo et thèmes personnalisés (couleurs primaires/secondaires).",
        "Gestion des médias (logos cabinets et photos médecins) via <strong>Cloudinary</strong>.",
        "Notifications automatiques et rappels de rendez-vous via <strong>Brevo</strong> et <strong>Firebase Cloud Messaging (FCM)</strong>.",
        "Gestion des migrations de base de données avec <strong>Flyway</strong>.",
        "Containerisation complète avec <strong>Docker</strong> et pipeline CI/CD avec <strong>Jenkins</strong>.",
        "Analyse qualité et sécurité du code avec <strong>SonarCloud</strong> (SonarQube) et <strong>Trivy</strong>.",
        "Monitoring et observabilité avec <strong>Prometheus</strong> et <strong>Grafana</strong>.",
        "Déploiement et infrastructure cloud avec <strong>Terraform</strong> et <strong>Microsoft Azure</strong>.",
        "Documentation complète des API avec <strong>Swagger / OpenAPI</strong>."
      ]
    },
    {
      id: "ompay-api",
      role: "OM-Pay — Solution de Paiement Mobile",
      company: "Orange Digital Center",
      date: "2025",
      tags: ["Laravel", "PHP", "Flutter", "Dart", "MongoDB", "Jenkins", "Docker", "AWS", "REST API", "OAuth 2.0", "Swagger / OpenAPI", "RBAC"],
      desc: "Solution de paiement mobile inspirée des services de Mobile Money, composée d'une API REST sécurisée et d'une application mobile Flutter.",
      bullets: [
        "Développement d'une API REST avec authentification multi-rôles (Client, Distributeur, Admin) via <strong>Laravel Passport</strong>.",
        "Conception du système de transactions : dépôts, retraits, transferts P2P et paiements marchands avec génération de codes uniques.",
        "Développement de l'application mobile <strong>Flutter</strong> avec intégration complète des API REST.",
        "Implémentation de l'authentification, consultation du solde, historique des transactions et opérations de paiement sur mobile.",
        "Génération et stockage de QR Codes sécurisés sur <strong>AWS S3</strong> pour identification rapide des comptes.",
        "Mise en place d'un pipeline CI/CD avec <strong>Jenkins</strong> : build automatisé, tests, containerisation Docker et déploiement sur Render.",
        "Documentation des API avec <strong>Swagger/OpenAPI</strong> et renforcement de la sécurité : Rate Limiting, Audit Trails."
      ]
    },
    {
      id: "fotoljay-marketplace",
      role: "Fotol Jay — Marketplace Photographique",
      company: "Orange Digital Center",
      date: "2025",
      tags: ["Node.js", "TypeScript", "Angular", "MySQL", "Docker", "Jenkins", "REST API", "JWT", "Swagger / OpenAPI", "RBAC"],
      desc: "Plateforme e-commerce innovante garantissant l'authenticité des produits via photos personnelles obligatoires du vendeur.",
      bullets: [
        "Architecture Full Stack TypeScript avec validation Zod et gestion d'état avancée.",
        "Système de modération manuelle pré-publication pour garantir la qualité et l'authenticité.",
        "Gestion complète des stocks, catégories, utilisateurs avec rôles différenciés (Admin, Modérateur, Vendeur).",
        "Intégration <strong>Cloudinary</strong> pour l'optimisation et la transformation d'images.",
        "Suppression automatique d'une publication après une semaine d'inactivité, avec possibilité de réactivation par le vendeur.",
        "Authentification sécurisée JWT avec access et refresh tokens.",
        "Déploiement du backend via pipeline CI/CD Jenkins avec tests automatisés et containerisation Docker.",
        "Documentation <strong>Swagger</strong> complète pour faciliter l'intégration API."
      ]
    },
    {
      id: "banking-api",
      role: "Système Bancaire Moderne — API",
      company: "Orange Digital Center",
      date: "2025",
      tags: ["Laravel", "PHP", "PostgreSQL", "MongoDB", "Docker", "Jenkins", "REST API", "Clean Architecture", "JWT", "Swagger / OpenAPI", "RBAC"],
      desc: "API RESTful robuste pour gestion complète d'un système bancaire avec architecture Clean Architecture et haute disponibilité.",
      bullets: [
        "Multi-types de comptes (épargne, chèque, courant) avec calcul automatique du solde en temps réel.",
        "Architecture hybride : <strong>PostgreSQL</strong> (données relationnelles) + <strong>MongoDB</strong> (transactions haute performance).",
        "Système d'archivage automatique entre deux bases PostgreSQL (Render & Neon) avec restauration planifiée à expiration.",
        "Authentification et autorisation multi-rôles (clients, administrateurs) via <strong>Laravel Passport</strong>.",
        "Jobs asynchrones, cache Redis, notifications SMS/Email (Twilio), logging middleware, rate limiting.",
        "Recherche, filtrage et pagination dynamique des comptes avec blocage planifié des comptes épargne.",
        "Déployé via pipeline CI/CD Jenkins avec tests automatisés et containerisation Docker.",
        "Documentation <strong>Swagger</strong> complète et respect strict des principes <strong>SOLID</strong>."
      ]
    },
    {
      id: "payroll-saas",
      role: "Gestion des Salaires Multi-Entreprises",
      company: "Orange Digital Center",
      date: "2025",
      tags: ["React", "TypeScript", "Node.js", "MySQL", "Prisma", "Multi-Tenant SaaS", "RBAC", "REST API"],
      desc: "Solution <strong>SaaS</strong> complète pour automatisation de la paie, réduction des erreurs administratives et suivi multi-entreprises.",
      bullets: [
        "Architecture multi-tenant avec isolation complète des données et personnalisation par entreprise.",
        "Système RBAC avancé (Super Admin, Admin, Caissier, Vigile) avec permissions granulaires.",
        "Gestion des employés avec différents types de contrats (journalier, fixe, honoraire) et calcul automatique des salaires.",
        "Création et gestion des cycles de paie (brouillon, approbation, clôture) avec génération automatique des bulletins PDF.",
        "Génération de bulletins de paie PDF détaillés (brut/net, déductions) via <strong>Puppeteer</strong>.",
        "Module de pointage pour vigiles : suivi entrées/sorties, calcul heures travaillées.",
        "Dashboards personnalisés par rôle avec statistiques, analytics temps réel et génération de rapports."
      ]
    },
    {
      id: "gp-logistics",
      role: "GPduMonde — Système Logistique",
      company: "Orange Digital Center",
      date: "2025",
      tags: ["TypeScript", "PostgreSQL", "REST API", "Architecture Modulaire"],
      desc: "Système logistique complet pour gestion multi-modale (maritime, aérien, routier) avec cartographie interactive et calcul automatique des tarifs.",
      bullets: [
        "Gestion complète des cargaisons : types de transport, contraintes (poids, distance), ouverture/fermeture, état d'avancement.",
        "Gestion des colis avec validation automatique des règles métier (produits chimiques, matériels fragiles).",
        "Calcul automatique des tarifs selon type produit, mode de transport et distance.",
        "Visualisation temps réel des trajets sur cartes interactives Leaflet avec géocodage inverse Nominatim.",
        "Génération de codes de suivi uniques avec interface client de consultation en temps réel.",
        "Dashboard administrateur avec statistiques, paramètres système et génération de rapports."
      ]
    },
    {
      id: "insersite-stage",
      role: "Stage Développeur Full Stack (Remote)",
      company: "INSERSITE (France)",
      date: "2024 (6 mois)",
      tags: ["Laravel", "PHP", "Angular", "MySQL", "JWT", "REST API", "Architecture en Couches"],
      desc: "Développement d'une plateforme web complète pour gérer et suivre les parcours de formation des jeunes, permettant l'administration, le suivi des actions et sessions, la gestion multi-rôles, et l'interaction entre utilisateurs et responsables de formation.",
      bullets: [
        "Conception API RESTful avec Laravel et authentification JWT.",
        "Gestion multi-rôles et contrôle d'accès via middlewares.",
        "Frontend Angular responsive avec composants réutilisables et tableaux de bord interactifs.",
        "Calendrier des sessions avec FullCalendar et éditeur de contenu Quill.",
        "Notifications automatiques et gestion optimisée des états et erreurs."
      ]
    }
  ];

  // State Management
  let activeFilter = null;
  let isCompact = false;

  // DOM Elements references
  const els = {
    themeToggle: document.getElementById('theme-toggle'),
    themeToggleDarkIcon: document.getElementById('theme-toggle-dark-icon'),
    themeToggleLightIcon: document.getElementById('theme-toggle-light-icon'),
    toggleViewBtn: document.getElementById('toggle-view'),
    viewText: document.getElementById('view-text'),
    filterIndicator: document.getElementById('filter-indicator'),
    clearFilterBtn: document.getElementById('clear-filter'),
    experiencesList: document.getElementById('experiences-list'),
    projectsCount: document.getElementById('projects-count')
  };

  // ----------------------------------------------------
  // THEME MANAGEMENT (Dark / Light mode toggle)
  // ----------------------------------------------------
  
  function initTheme() {
    const isDark = document.documentElement.classList.contains('dark');
    if (isDark) {
      els.themeToggleLightIcon.classList.remove('hidden');
      els.themeToggleDarkIcon.classList.add('hidden');
    } else {
      els.themeToggleDarkIcon.classList.remove('hidden');
      els.themeToggleLightIcon.classList.add('hidden');
    }
  }

  els.themeToggle.addEventListener('click', function () {
    const willBeDark = !document.documentElement.classList.contains('dark');
    document.documentElement.classList.toggle('dark', willBeDark);
    localStorage.theme = willBeDark ? 'dark' : 'light';
    
    els.themeToggleDarkIcon.classList.toggle('hidden');
    els.themeToggleLightIcon.classList.toggle('hidden');
  });

  // ----------------------------------------------------
  // RENDER METHOD FOR SKILLS (Clickable Chips)
  // ----------------------------------------------------
  
  function renderSkillsDashboard() {
    Object.keys(skillsData).forEach(category => {
      const container = document.getElementById(`${category}-skills`);
      if (!container) return;
      
      container.innerHTML = '';
      skillsData[category].forEach(skill => {
        const chip = document.createElement('button');
        chip.className = 'px-2.5 py-1 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 cursor-pointer transition-all duration-200 skill-chip-btn';
        chip.textContent = skill;
        chip.dataset.skill = skill;
        
        chip.addEventListener('click', () => toggleSkillFilter(skill));
        container.appendChild(chip);
      });
    });
  }

  // ----------------------------------------------------
  // RENDER METHOD FOR EXPERIENCES / PROJECTS
  // ----------------------------------------------------
  
  function renderExperiences() {
    els.experiencesList.innerHTML = '';
    
    // Counter for filtered view
    let visibleCount = 0;

    experiences.forEach(exp => {
      // Check if skill matches filter
      const matchesFilter = !activeFilter || exp.tags.some(tag => tag.toLowerCase() === activeFilter.toLowerCase() || (activeFilter.toLowerCase() === 'php' && tag.toLowerCase() === 'laravel') || (activeFilter.toLowerCase() === 'sonar_qube' && tag.toLowerCase() === 'sonarqube'));
      
      if (matchesFilter) visibleCount++;

      // Create card
      const card = document.createElement('article');
      card.className = `cv-card experience-card bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-sm relative overflow-hidden transition-all-300 print-border print-compact avoid-break ${
        activeFilter ? (matchesFilter ? 'project-highlight z-10' : 'project-dimmed') : ''
      }`;
      card.dataset.id = exp.id;

      // Header layout
      const headerHTML = `
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3.5 mb-4">
          <div>
            <h4 class="text-sm sm:text-base font-bold text-slate-950 dark:text-white">${exp.role}</h4>
            <div class="flex items-center gap-1.5 mt-1">
              <span class="text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded-md border border-emerald-100 dark:border-emerald-900/50">${exp.company}</span>
            </div>
          </div>
          <div class="sm:text-right shrink-0">
            <span class="text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-full">${exp.date}</span>
          </div>
        </div>
      `;

      // Description & Bullet Points
      const descHTML = `<p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">${exp.desc}</p>`;
      
      // Bullets (toggle list based on isCompact)
      let bulletsHTML = '';
      if (!isCompact) {
        bulletsHTML = `
          <ul class="space-y-2 mb-4 pl-4 list-disc text-slate-600 dark:text-slate-300 text-xs sm:text-sm">
            ${exp.bullets.map(bullet => `<li class="leading-relaxed pl-1">${bullet}</li>`).join('')}
          </ul>
        `;
      }

      // Skill Tags block
      const tagsHTML = `
        <div class="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-slate-800/80">
          ${exp.tags.map(tag => {
            const isActiveTag = activeFilter && tag.toLowerCase() === activeFilter.toLowerCase();
            return `<span class="cv-tag px-2 py-0.5 text-[10px] sm:text-xs font-medium rounded-md transition-all ${
              isActiveTag 
                ? 'bg-emerald-500 text-white font-bold' 
                : 'bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400 border border-slate-100 dark:border-slate-850'
            }">${tag}</span>`;
          }).join('')}
        </div>
      `;

      card.innerHTML = headerHTML + descHTML + bulletsHTML + tagsHTML;
      els.experiencesList.appendChild(card);
    });

    els.projectsCount.textContent = visibleCount;
  }

  // ----------------------------------------------------
  // INTERACTIVE FILTER LOGIC (Highlight matching projects)
  // ----------------------------------------------------
  
  function toggleSkillFilter(skillName) {
    if (activeFilter === skillName) {
      activeFilter = null; // Reset if clicked again
    } else {
      activeFilter = skillName;
    }
    
    updateFilterUI();
  }

  function updateFilterUI() {
    // 1. Update filter notification indicators
    if (activeFilter) {
      els.filterIndicator.classList.remove('hidden');
      els.filterIndicator.textContent = `Filtre : ${activeFilter}`;
      els.clearFilterBtn.classList.remove('hidden');
      els.clearFilterBtn.classList.add('flex');
    } else {
      els.filterIndicator.classList.add('hidden');
      els.clearFilterBtn.classList.remove('flex');
      els.clearFilterBtn.classList.add('hidden');
    }

    // 2. Highlight/Dim skill chips in the dashboard
    document.querySelectorAll('.skill-chip-btn').forEach(btn => {
      if (activeFilter && btn.dataset.skill.toLowerCase() === activeFilter.toLowerCase()) {
        btn.classList.add('skill-active');
        btn.classList.remove('bg-slate-100', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-300', 'border-slate-200', 'dark:border-slate-700');
      } else {
        btn.classList.remove('skill-active');
        btn.classList.add('bg-slate-100', 'dark:bg-slate-800', 'text-slate-700', 'dark:text-slate-300', 'border-slate-200', 'dark:border-slate-700');
      }
    });

    // 3. Render experiences with highlights/dimming
    renderExperiences();
  }

  // Clear Filter button listener
  els.clearFilterBtn.addEventListener('click', () => {
    activeFilter = null;
    updateFilterUI();
  });

  // ----------------------------------------------------
  // COMPACT / DETAILED VIEW LOGIC
  // ----------------------------------------------------
  
  els.toggleViewBtn.addEventListener('click', () => {
    isCompact = !isCompact;
    
    // Update button visual
    if (isCompact) {
      els.viewText.textContent = "Vue Détaillée";
      // Icon change to expand
      els.toggleViewBtn.querySelector('svg').innerHTML = `
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      `;
    } else {
      els.viewText.textContent = "Vue Compacte";
      // Icon change to collapse
      els.toggleViewBtn.querySelector('svg').innerHTML = `
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
      `;
    }
    
    renderExperiences();
  });

  // ----------------------------------------------------
  // INITIALIZE APP
  // ----------------------------------------------------
  initTheme();
  renderSkillsDashboard();
  renderExperiences();
});
