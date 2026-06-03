/**
 * Royal Wheels Bike Showroom – app.js
 * Author: Royal Wheels Dev Team
 * Description: All interactive features including theme toggle,
 *   bike cards, EMI calculator, gallery, testimonials, booking form,
 *   search, scroll animations, and more.
 */

'use strict';

/* ══════════════════════════════════════
   DATA
══════════════════════════════════════ */
const bikes = [
  {
    id: 1, brand: 'Royal Enfield', category: 'royal-enfield',
    name: 'Classic 350',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop',
    engine: '349cc', mileage: '35 km/l', fuel: 'Petrol', price: '₹1,93,600',
    priceNum: 193600,
    colors: ['#1a1a1a','#c8a96e','#2c4a2e','#6b3f3f'],
    colorNames: ['Stealth Black','Bronze','Forest Green','Gunstock Brown'],
    features: ['Tripper Navigation','Dual-channel ABS','USB Charging','LED DRL'],
    warranty: '2 Years / Unlimited KM',
    torque: '27 Nm @ 4000 rpm', power: '20.2 bhp', weight: '195 kg',
    topSpeed: '114 km/h', transmission: '5-speed manual'
  },
  {
    id: 2, brand: 'KTM', category: 'ktm',
    name: 'Duke 390',
    img: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=600&auto=format&fit=crop',
    engine: '373cc', mileage: '28 km/l', fuel: 'Petrol', price: '₹2,99,900',
    priceNum: 299900,
    colors: ['#e85507','#1a1a1a','#ffffff'],
    colorNames: ['KTM Orange','Black','White'],
    features: ['TFT Display','Cornering ABS','Quickshifter+','Track Mode'],
    warranty: '2 Years / 30,000 km',
    torque: '37 Nm @ 7000 rpm', power: '43.5 bhp', weight: '163 kg',
    topSpeed: '167 km/h', transmission: '6-speed + Quickshifter'
  },
  {
    id: 3, brand: 'Yamaha', category: 'yamaha',
    name: 'MT-15 V2',
    img: 'https://images.unsplash.com/photo-1547549082-6bc09f2049ae?w=600&auto=format&fit=crop',
    engine: '155cc', mileage: '43 km/l', fuel: 'Petrol', price: '₹1,60,400',
    priceNum: 160400,
    colors: ['#1a1a1a','#0000cd','#8b0000'],
    colorNames: ['Metallic Black','Ice Fluo Cyan','Metallic Red'],
    features: ['VVA Technology','Assist & Slipper Clutch','TFT Display','LED Lights'],
    warranty: '2 Years / 30,000 km',
    torque: '14.1 Nm @ 6500 rpm', power: '18.3 bhp', weight: '139 kg',
    topSpeed: '135 km/h', transmission: '6-speed manual'
  },
  {
    id: 4, brand: 'Honda', category: 'honda',
    name: 'CB Hornet 2.0',
    img: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=600&auto=format&fit=crop',
    engine: '184.4cc', mileage: '45 km/l', fuel: 'Petrol', price: '₹1,27,900',
    priceNum: 127900,
    colors: ['#cc0000','#1a1a1a','#2f4f4f'],
    colorNames: ['Raging Red','Mat Axis Gray','Mat Marvel Blue'],
    features: ['Honda Smartphone Voice Control','LED Lighting','Digital-Analogue Console','Dual Disc'],
    warranty: '2 Years / Unlimited KM',
    torque: '16.1 Nm @ 5500 rpm', power: '17.03 bhp', weight: '142 kg',
    topSpeed: '125 km/h', transmission: '5-speed manual'
  },
  {
    id: 5, brand: 'TVS', category: 'tvs',
    name: 'Apache RTR 310',
    img: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&auto=format&fit=crop',
    engine: '312.2cc', mileage: '30 km/l', fuel: 'Petrol', price: '₹2,43,400',
    priceNum: 243400,
    colors: ['#1a1a1a','#c0c0c0','#cc0000'],
    colorNames: ['Black Panther','Titanium','Racing Red'],
    features: ['SmartXonnect Bluetooth','4 Ride Modes','Cornering ABS','GPS Navigation'],
    warranty: '3 Years / Unlimited KM',
    torque: '27.3 Nm @ 7700 rpm', power: '34 bhp', weight: '174 kg',
    topSpeed: '160 km/h', transmission: '6-speed manual'
  },
  {
    id: 6, brand: 'Bajaj', category: 'bajaj',
    name: 'Pulsar NS200',
    img: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&auto=format&fit=crop',
    engine: '199.5cc', mileage: '37 km/l', fuel: 'Petrol', price: '₹1,36,500',
    priceNum: 136500,
    colors: ['#cc0000','#1a1a1a','#006400'],
    colorNames: ['Fiery Orange','Pewter Grey','Racing Green'],
    features: ['Liquid Cooling','Triple Spark','ABS','Perimeter Frame'],
    warranty: '2 Years / 30,000 km',
    torque: '18.74 Nm @ 8000 rpm', power: '24.5 bhp', weight: '156 kg',
    topSpeed: '136 km/h', transmission: '6-speed manual'
  },
  {
    id: 7, brand: 'Royal Enfield', category: 'royal-enfield',
    name: 'Meteor 350',
    img: 'https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=600&auto=format&fit=crop',
    engine: '349cc', mileage: '36 km/l', fuel: 'Petrol', price: '₹2,11,500',
    priceNum: 211500,
    colors: ['#1a1a1a','#4169e1','#8b0000'],
    colorNames: ['Fireball Black','Supernova Blue','Stellar Red'],
    features: ['Tripper Navigation','Respot Bluetooth','USB Charging','ABS'],
    warranty: '2 Years / Unlimited KM',
    torque: '27 Nm @ 4000 rpm', power: '20.2 bhp', weight: '191 kg',
    topSpeed: '112 km/h', transmission: '5-speed manual'
  },
  {
    id: 8, brand: 'KTM', category: 'ktm',
    name: 'Adventure 390',
    img: 'https://images.unsplash.com/photo-1508704019882-f9cf40e475b4?w=600&auto=format&fit=crop',
    engine: '373cc', mileage: '25 km/l', fuel: 'Petrol', price: '₹3,48,500',
    priceNum: 348500,
    colors: ['#e85507','#1a1a1a'],
    colorNames: ['KTM Orange','Black'],
    features: ['WP Suspension','5" TFT Touchscreen','4 Ride Modes','Cornering ABS'],
    warranty: '2 Years / 30,000 km',
    torque: '37 Nm @ 7000 rpm', power: '43.5 bhp', weight: '199 kg',
    topSpeed: '180 km/h', transmission: '6-speed manual'
  }
];

const galleryData = {
  bikes: [
    { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop', label: 'Royal Enfield Classic' },
    { src: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=600&auto=format&fit=crop', label: 'KTM Duke 390' },
    { src: 'https://images.unsplash.com/photo-1547549082-6bc09f2049ae?w=600&auto=format&fit=crop', label: 'Yamaha MT-15' },
    { src: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&auto=format&fit=crop', label: 'TVS Apache RTR' },
    { src: 'https://images.unsplash.com/photo-1508704019882-f9cf40e475b4?w=600&auto=format&fit=crop', label: 'KTM Adventure' },
    { src: 'https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=600&auto=format&fit=crop', label: 'Royal Enfield Meteor' },
  ],
  showroom: [
    { src: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=600&auto=format&fit=crop', label: 'Showroom Floor' },
    { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop', label: 'Display Area' },
    { src: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=600&auto=format&fit=crop', label: 'Service Bay' },
    { src: 'https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=600&auto=format&fit=crop', label: 'Accessories Corner' },
    { src: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=600&auto=format&fit=crop', label: 'Finance Desk' },
    { src: 'https://images.unsplash.com/photo-1508704019882-f9cf40e475b4?w=600&auto=format&fit=crop', label: 'Waiting Lounge' },
  ],
  delivery: [
    { src: 'https://images.unsplash.com/photo-1547549082-6bc09f2049ae?w=600&auto=format&fit=crop', label: 'Happy Customer' },
    { src: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=600&auto=format&fit=crop', label: 'Bike Delivery Ceremony' },
    { src: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&auto=format&fit=crop', label: 'First Ride' },
    { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop', label: 'Group Delivery' },
    { src: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=600&auto=format&fit=crop', label: 'Celebration Moment' },
    { src: 'https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=600&auto=format&fit=crop', label: 'Riding Away' },
  ]
};

const testimonials = [
  {
    name: 'Arjun Sharma', bike: 'KTM Duke 390', rating: 5,
    text: 'Absolutely world-class experience! The team at Royal Wheels helped me choose the perfect bike and sorted my finance in under an hour. The Duke 390 is everything they promised.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80'
  },
  {
    name: 'Priya Venkatesh', bike: 'Yamaha MT-15 V2', rating: 5,
    text: 'As a first-time buyer, I was nervous. The staff were incredibly patient and knowledgeable. Test ride was arranged immediately and the delivery was flawless with a full ceremony!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80'
  },
  {
    name: 'Karthik Rajan', bike: 'Royal Enfield Classic 350', rating: 5,
    text: 'Bought my third bike from Royal Wheels. The service team is exceptional and spare parts are always available. Their after-sales support is genuinely the best in Chennai.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80'
  },
  {
    name: 'Divya Lakshmi', bike: 'TVS Apache RTR 310', rating: 5,
    text: 'Got the Apache RTR 310 at an unbeatable price with zero down payment. The entire process from selection to delivery took just 2 days. Highly recommended!',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=80'
  },
  {
    name: 'Suresh Babu', bike: 'Bajaj Pulsar NS200', rating: 4,
    text: 'Great range of bikes and very transparent pricing. No hidden charges whatsoever. The EMI calculator on their website helped me plan perfectly before I even walked in.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=80'
  },
  {
    name: 'Meena Kumari', bike: 'Honda CB Hornet 2.0', rating: 5,
    text: 'The showroom is huge with over 200 bikes on display. I spent 3 hours just browsing! Staff was never pushy. Great ambiance and excellent coffee while you wait.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80'
  }
];

/* ══════════════════════════════════════
   INIT
══════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavbar();
  initSearch();
  renderBikes(bikes);
  initBikeFilters();
  initEmiCalculator();
  renderGallery('bikes');
  initGalleryTabs();
  initLightbox();
  renderTestimonials();
  initBookingForm();
  initScrollAnimations();
  initBackToTop();
  initCounters();
  initParticles();
  setMinBookingDate();
  updateNavActiveLink();
});

/* ══════════════════════════════════════
   THEME
══════════════════════════════════════ */
function initTheme() {
  const saved = localStorage.getItem('rw-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
  updateThemeIcon(saved);

  document.querySelectorAll('.theme-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const cur = document.documentElement.getAttribute('data-theme');
      const next = cur === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('rw-theme', next);
      updateThemeIcon(next);
    });
  });
}

function updateThemeIcon(theme) {
  document.querySelectorAll('.theme-toggle i').forEach(i => {
    i.className = theme === 'dark' ? 'bi bi-sun-fill' : 'bi bi-moon-stars-fill';
  });
}

/* ══════════════════════════════════════
   NAVBAR
══════════════════════════════════════ */
function initNavbar() {
  const nav = document.getElementById('mainNav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });
}

function updateNavActiveLink() {
  const sections = document.querySelectorAll('section[id], div[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + entry.target.id) {
            link.classList.add('active');
          }
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(s => observer.observe(s));
}

/* ══════════════════════════════════════
   SEARCH
══════════════════════════════════════ */
function initSearch() {
  const overlay = document.getElementById('searchOverlay');
  const input = document.getElementById('searchInput');
  const results = document.getElementById('searchResults');
  const allItems = [
    ...bikes.map(b => ({ type: 'Bike', name: `${b.brand} ${b.name}`, href: '#bikes' })),
    { type: 'Service', name: 'Test Ride Booking', href: '#booking' },
    { type: 'Service', name: 'Insurance Renewal', href: '#services' },
    { type: 'Service', name: 'Bike Servicing', href: '#services' },
    { type: 'Finance', name: 'EMI Calculator', href: '#finance' },
    { type: 'Page', name: 'About Royal Wheels', href: '#about' },
    { type: 'Page', name: 'Gallery', href: '#gallery' },
    { type: 'Page', name: 'Contact Us', href: '#contact' },
  ];

  function openSearch() {
    overlay.classList.add('active');
    setTimeout(() => input.focus(), 100);
  }

  function closeSearch() {
    overlay.classList.remove('active');
    input.value = '';
    results.innerHTML = '';
  }

  document.getElementById('searchToggle')?.addEventListener('click', openSearch);
  document.getElementById('searchToggleMobile')?.addEventListener('click', openSearch);
  document.getElementById('searchClose')?.addEventListener('click', closeSearch);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeSearch();
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); openSearch(); }
  });

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (!q) { results.innerHTML = ''; return; }
    const filtered = allItems.filter(item =>
      item.name.toLowerCase().includes(q) || item.type.toLowerCase().includes(q)
    );
    results.innerHTML = filtered.length
      ? filtered.map(item => `
          <div class="search-result-item" onclick="window.location.href='${item.href}'; closeSearch();">
            <i class="bi bi-${item.type === 'Bike' ? 'bicycle' : item.type === 'Finance' ? 'calculator' : 'link-45deg'}"></i>
            <div>
              <div style="font-size:0.9rem;font-weight:600;">${item.name}</div>
              <div style="font-size:0.75rem;color:var(--text2);">${item.type}</div>
            </div>
          </div>`).join('')
      : '<div class="search-result-item" style="color:var(--text2)">No results found</div>';
  });

  // Make closeSearch global for onclick
  window.closeSearch = closeSearch;
}

/* ══════════════════════════════════════
   BIKES
══════════════════════════════════════ */
function renderBikes(list) {
  const grid = document.getElementById('bikeGrid');
  if (!grid) return;
  grid.innerHTML = list.map(bike => `
    <div class="col-sm-6 col-lg-3" data-aos data-category="${bike.category}">
      <div class="bike-card" onclick="openBikeModal(${bike.id})">
        <div class="bike-img-wrap">
          <img src="${bike.img}" alt="${bike.brand} ${bike.name}" loading="lazy" />
          <span class="bike-brand-badge">${bike.brand}</span>
          <span class="bike-fuel-badge"><i class="bi bi-fuel-pump-fill"></i> ${bike.fuel}</span>
        </div>
        <div class="bike-card-body">
          <h3 class="bike-name">${bike.name}</h3>
          <div class="bike-specs">
            <div class="bike-spec"><i class="bi bi-gear-fill"></i>${bike.engine}</div>
            <div class="bike-spec"><i class="bi bi-speedometer2"></i>${bike.mileage}</div>
            <div class="bike-spec"><i class="bi bi-lightning-charge-fill"></i>${bike.power || '–'}</div>
            <div class="bike-spec"><i class="bi bi-arrow-up-circle"></i>${bike.topSpeed || '–'}</div>
          </div>
          <div class="bike-price">${bike.price} <span>onwards</span></div>
          <button class="btn btn-primary-custom w-100" style="font-size:0.85rem;padding:0.55rem;">
            <i class="bi bi-eye-fill me-2"></i>View Details
          </button>
        </div>
      </div>
    </div>
  `).join('');
  // Re-trigger AOS
  setTimeout(() => observeAOS(), 50);
}

function initBikeFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      const filtered = filter === 'all' ? bikes : bikes.filter(b => b.category === filter);
      renderBikes(filtered);
    });
  });
}

/* ─── Bike Modal ─── */
function openBikeModal(id) {
  const bike = bikes.find(b => b.id === id);
  if (!bike) return;

  const emi = Math.round((bike.priceNum * 0.095 / 12) / (1 - Math.pow(1 + 0.095/12, -36)));

  document.getElementById('bikeModalBody').innerHTML = `
    <div class="row g-0">
      <div class="col-lg-5">
        <img src="${bike.img}" alt="${bike.name}" class="modal-bike-img" />
      </div>
      <div class="col-lg-7">
        <div class="modal-body-inner">
          <div class="modal-bike-brand">${bike.brand}</div>
          <h2 class="modal-bike-name">${bike.name}</h2>
          <div class="bike-price mb-3">${bike.price} <span>ex-showroom</span></div>

          <div class="spec-grid">
            <div class="spec-item"><label>Engine</label><strong>${bike.engine}</strong></div>
            <div class="spec-item"><label>Mileage</label><strong>${bike.mileage}</strong></div>
            <div class="spec-item"><label>Power</label><strong>${bike.power}</strong></div>
            <div class="spec-item"><label>Torque</label><strong>${bike.torque}</strong></div>
            <div class="spec-item"><label>Top Speed</label><strong>${bike.topSpeed}</strong></div>
            <div class="spec-item"><label>Weight</label><strong>${bike.weight}</strong></div>
            <div class="spec-item"><label>Fuel Type</label><strong>${bike.fuel}</strong></div>
            <div class="spec-item"><label>Transmission</label><strong>${bike.transmission}</strong></div>
          </div>

          <h6 class="mb-2" style="font-size:0.8rem;letter-spacing:1px;text-transform:uppercase;color:var(--text2)">Key Features</h6>
          <div class="about-features mb-3">
            ${bike.features.map(f => `<span><i class="bi bi-check-circle-fill"></i>${f}</span>`).join('')}
          </div>

          <h6 class="mb-2" style="font-size:0.8rem;letter-spacing:1px;text-transform:uppercase;color:var(--text2)">Available Colors</h6>
          <div class="color-dots mb-3">
            ${bike.colors.map((c, i) => `
              <div class="color-dot ${i === 0 ? 'active' : ''}" 
                   style="background:${c}" 
                   title="${bike.colorNames[i]}"
                   onclick="document.querySelectorAll('.color-dot').forEach(d=>d.classList.remove('active'));this.classList.add('active');document.getElementById('colorName').textContent=this.title">
              </div>`).join('')}
            <span class="color-name" id="colorName">${bike.colorNames[0]}</span>
          </div>

          <div class="emi-highlight">
            <p>EMI starts from <strong>₹${emi.toLocaleString('en-IN')}/month</strong> for 36 months</p>
            <p style="font-size:0.78rem;margin-top:4px">0% down payment available | Instant approval</p>
          </div>

          <p style="font-size:0.82rem;color:var(--text2);margin-bottom:1.25rem">
            <i class="bi bi-patch-check-fill text-accent" style="color:var(--accent)"></i>
            Warranty: ${bike.warranty}
          </p>

          <div class="d-flex gap-2 flex-wrap">
            <a href="#booking" class="btn btn-primary-custom" data-bs-dismiss="modal">
              <i class="bi bi-calendar-check me-2"></i>Book Test Ride
            </a>
            <a href="https://wa.me/919876543210?text=I'm interested in ${bike.brand} ${bike.name}" 
               target="_blank" class="btn btn-outline-custom">
              <i class="bi bi-whatsapp me-2"></i>Enquire on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>`;

  new bootstrap.Modal(document.getElementById('bikeModal')).show();
}

window.openBikeModal = openBikeModal;

/* ══════════════════════════════════════
   EMI CALCULATOR
══════════════════════════════════════ */
function initEmiCalculator() {
  const loanAmt = document.getElementById('loanAmt');
  const downPay = document.getElementById('downPay');
  const interestRate = document.getElementById('interestRate');
  let tenure = 12;

  function calc() {
    const price = parseInt(loanAmt.value);
    const down = parseInt(downPay.value);
    const r = parseFloat(interestRate.value) / 100 / 12;
    const n = tenure;
    const principal = price - down;

    const emi = principal > 0 && r > 0
      ? Math.round(principal * r * Math.pow(1+r, n) / (Math.pow(1+r, n) - 1))
      : Math.round(principal / n);

    const totalPayable = emi * n;
    const totalInterest = totalPayable - principal;

    document.getElementById('loanAmtVal').textContent = price.toLocaleString('en-IN');
    document.getElementById('downPayVal').textContent = down.toLocaleString('en-IN');
    document.getElementById('rateVal').textContent = interestRate.value;
    document.getElementById('emiResult').textContent = '₹' + emi.toLocaleString('en-IN');
    document.getElementById('totalInterest').textContent = '₹' + Math.max(0, totalInterest).toLocaleString('en-IN');
    document.getElementById('totalAmt').textContent = '₹' + totalPayable.toLocaleString('en-IN');
  }

  [loanAmt, downPay, interestRate].forEach(el => el?.addEventListener('input', calc));

  document.querySelectorAll('.tenure-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tenure-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      tenure = parseInt(btn.dataset.months);
      calc();
    });
  });

  calc();
}

/* ══════════════════════════════════════
   GALLERY
══════════════════════════════════════ */
let currentGalleryTab = 'bikes';
let currentGalleryImages = [];

function renderGallery(tab) {
  currentGalleryTab = tab;
  const grid = document.getElementById('galleryGrid');
  const items = galleryData[tab];
  currentGalleryImages = items;

  const layouts = ['', 'tall', 'wide', '', '', ''];

  grid.innerHTML = items.map((item, i) => `
    <div class="gallery-item ${layouts[i] || ''}" data-index="${i}" onclick="openLightbox(${i})">
      <img src="${item.src}" alt="${item.label}" loading="lazy" />
      <div class="gallery-overlay">
        <i class="bi bi-zoom-in"></i>
        <span>${item.label}</span>
      </div>
    </div>`).join('');
}

function initGalleryTabs() {
  document.querySelectorAll('.gallery-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.gallery-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderGallery(tab.dataset.tab);
    });
  });
}

/* ─── Lightbox ─── */
let lbIndex = 0;

function openLightbox(idx) {
  lbIndex = idx;
  const lb = document.getElementById('lightbox');
  document.getElementById('lbImg').src = currentGalleryImages[idx].src;
  lb.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
  document.body.style.overflow = '';
}

function initLightbox() {
  document.getElementById('lbClose')?.addEventListener('click', closeLightbox);
  document.getElementById('lbPrev')?.addEventListener('click', () => {
    lbIndex = (lbIndex - 1 + currentGalleryImages.length) % currentGalleryImages.length;
    document.getElementById('lbImg').src = currentGalleryImages[lbIndex].src;
  });
  document.getElementById('lbNext')?.addEventListener('click', () => {
    lbIndex = (lbIndex + 1) % currentGalleryImages.length;
    document.getElementById('lbImg').src = currentGalleryImages[lbIndex].src;
  });
  document.getElementById('lightbox')?.addEventListener('click', e => {
    if (e.target.id === 'lightbox') closeLightbox();
  });
  document.addEventListener('keydown', e => {
    const lb = document.getElementById('lightbox');
    if (!lb.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') document.getElementById('lbPrev').click();
    if (e.key === 'ArrowRight') document.getElementById('lbNext').click();
  });
}

window.openLightbox = openLightbox;

/* ══════════════════════════════════════
   TESTIMONIALS
══════════════════════════════════════ */
let currentPage = 0;
const perPage = window.innerWidth < 768 ? 1 : window.innerWidth < 992 ? 2 : 3;

function renderTestimonials() {
  const track = document.getElementById('testimonialsTrack');
  const dotsEl = document.getElementById('testiDots');
  const pages = Math.ceil(testimonials.length / 3);

  function showPage(page) {
    currentPage = page;
    const start = page * 3;
    const slice = testimonials.slice(start, start + 3);
    track.innerHTML = slice.map(t => `
      <div class="testi-card">
        <div class="testi-stars">${'★'.repeat(t.rating)}${'☆'.repeat(5 - t.rating)}</div>
        <p class="testi-text">"${t.text}"</p>
        <div class="testi-user">
          <img src="${t.avatar}" alt="${t.name}" class="testi-avatar" loading="lazy" />
          <div>
            <div class="testi-name">${t.name}</div>
            <div class="testi-bike"><i class="bi bi-bicycle"></i> ${t.bike}</div>
          </div>
        </div>
      </div>`).join('');

    dotsEl.innerHTML = Array.from({length: pages}, (_, i) =>
      `<div class="testi-dot ${i === page ? 'active' : ''}" onclick="showTestiPage(${i})"></div>`
    ).join('');
  }

  showPage(0);
  window.showTestiPage = showPage;

  // Auto-rotate
  setInterval(() => showPage((currentPage + 1) % pages), 5000);
}

/* ══════════════════════════════════════
   BOOKING FORM
══════════════════════════════════════ */
function initBookingForm() {
  const form = document.getElementById('bookingForm');
  form?.addEventListener('submit', e => {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      return;
    }
    form.style.display = 'none';
    document.getElementById('bookingSuccess').classList.remove('d-none');
    showToast('🎉 Test ride booked successfully! We\'ll call you soon.');
  });
}

function setMinBookingDate() {
  const dateInput = document.getElementById('fdate');
  if (!dateInput) return;
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  dateInput.min = tomorrow.toISOString().split('T')[0];
}

/* ══════════════════════════════════════
   SCROLL ANIMATIONS (AOS-like)
══════════════════════════════════════ */
function observeAOS() {
  const elements = document.querySelectorAll('[data-aos]:not(.aos-animate)');
  const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('aos-animate');
        }, i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(el => observer.observe(el));
}

function initScrollAnimations() {
  observeAOS();
  // Re-observe when new content is added
  const mutationObserver = new MutationObserver(() => observeAOS());
  mutationObserver.observe(document.body, { childList: true, subtree: true });
}

/* ══════════════════════════════════════
   BACK TO TOP
══════════════════════════════════════ */
function initBackToTop() {
  const btn = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 500);
  });
  btn?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ══════════════════════════════════════
   COUNTER ANIMATION
══════════════════════════════════════ */
function initCounters() {
  const counters = document.querySelectorAll('.stat-num');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.target);
        animateCounter(el, target);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

function animateCounter(el, target) {
  const duration = 2000;
  const start = performance.now();
  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target).toLocaleString('en-IN');
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

/* ══════════════════════════════════════
   HERO PARTICLES
══════════════════════════════════════ */
function initParticles() {
  const container = document.getElementById('heroParticles');
  if (!container) return;
  const count = 30;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.style.cssText = `
      position:absolute;
      width:${Math.random() * 3 + 1}px;
      height:${Math.random() * 3 + 1}px;
      background:rgba(232,54,10,${Math.random() * 0.4 + 0.1});
      border-radius:50%;
      left:${Math.random() * 100}%;
      top:${Math.random() * 100}%;
      animation:floatParticle ${Math.random() * 10 + 8}s ${Math.random() * 5}s ease-in-out infinite alternate;
    `;
    container.appendChild(p);
  }

  if (!document.getElementById('particleStyle')) {
    const style = document.createElement('style');
    style.id = 'particleStyle';
    style.textContent = `
      @keyframes floatParticle {
        from { transform: translate(0,0) rotate(0deg); opacity: 0.2; }
        to { transform: translate(${Math.random()*60-30}px, ${Math.random()*60-30}px) rotate(180deg); opacity: 0.8; }
      }`;
    document.head.appendChild(style);
  }
}

/* ══════════════════════════════════════
   TOAST
══════════════════════════════════════ */
function showToast(msg) {
  const toastEl = document.getElementById('liveToast');
  const toastMsg = document.getElementById('toastMsg');
  if (!toastEl || !toastMsg) return;
  toastMsg.textContent = msg;
  new bootstrap.Toast(toastEl, { delay: 4000 }).show();
}

/* ══════════════════════════════════════
   SMOOTH SCROLL for anchor links
══════════════════════════════════════ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = document.getElementById('mainNav').offsetHeight + 20;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
      // Close mobile nav if open
      const navCollapse = document.getElementById('navbarNav');
      if (navCollapse.classList.contains('show')) {
        bootstrap.Collapse.getInstance(navCollapse)?.hide();
      }
    }
  });
});
