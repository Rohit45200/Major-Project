// ✅ Toggle Navigation Menu
function showMenu() {
  document.getElementById("navLinks").style.right = "0";
}
function hideMenu() {
  document.getElementById("navLinks").style.right = "-200px";
}

// ✅ Read More Toggle for About Section
function toggleMore() {
  const moreText = document.getElementById("moreText");
  moreText.style.display = moreText.style.display === "none" ? "inline" : "none";
}

// ✅ Back to Top Button
const topBtn = document.getElementById("backToTopBtn");
window.addEventListener("scroll", () => {
  topBtn.style.display = window.scrollY > 200 ? "block" : "none";
});
topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ✅ Sticky Navbar
window.addEventListener("scroll", () => {
  document.querySelector("nav").classList.toggle("sticky", window.scrollY > 50);
});

// ✅ Smooth Anchor Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});

// ✅ Tabs Function
function openTab(tabId) {
  document.querySelectorAll(".tab-content").forEach(tab => tab.style.display = "none");
  document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
  document.getElementById(tabId).style.display = "block";
  event.target.classList.add("active");
}

// ✅ Stats Animation on Scroll
let statsShown = false;
window.addEventListener("scroll", () => {
  const statsSection = document.getElementById("stats");
  if (!statsSection) return;
  const rect = statsSection.getBoundingClientRect();
  if (rect.top < window.innerHeight && !statsShown) {
    animateGlobalCounters();
    statsShown = true;
  }
});
function animateGlobalCounters() {
  const counters = document.querySelectorAll(".counter");
  counters.forEach(counter => {
    counter.innerText = "0";
    const target = +counter.getAttribute("data-target");
    const increment = target / 200;
    function update() {
      const current = +counter.innerText;
      if (current < target) {
        counter.innerText = `${Math.ceil(current + increment)}`;
        setTimeout(update, 10);
      } else {
        counter.innerText = target;
      }
    }
    update();
  });
}

// ✅ Accordion (Departments)
function toggleAccordion(button) {
  const item = button.parentElement;
  const icon = button.querySelector(".icon");
  document.querySelectorAll(".accordion-item").forEach(el => {
    el.classList.remove("active");
    el.querySelector(".accordion-content").style.display = "none";
    el.querySelector(".icon").textContent = "+";
  });
  const content = item.querySelector(".accordion-content");
  item.classList.add("active");
  content.style.display = "block";
  icon.textContent = "−";
}

// ✅ FAQ Accordion
function toggleFAQ(button) {
  const item = button.parentElement;
  const icon = button.querySelector(".faq-icon");
  document.querySelectorAll(".faq-item").forEach(faq => {
    faq.classList.remove("active");
    faq.querySelector(".faq-icon").textContent = "+";
  });
  item.classList.add("active");
  icon.textContent = "×";
}

// ✅ Faculty Profiles
const facultyList = [
  {
    name: "Dr. A. Sharma",
    department: "Computer Science",
    image: "https://via.placeholder.com/100",
    qualification: "PhD in Artificial Intelligence",
    experience: "12+ years"
  },
  {
    name: "Prof. B. Verma",
    department: "Electronics",
    image: "https://via.placeholder.com/100",
    qualification: "M.Tech in VLSI Design",
    experience: "10+ years"
  },
  {
    name: "Dr. R. Mehta",
    department: "Mechanical Engineering",
    image: "https://via.placeholder.com/100",
    qualification: "PhD in Robotics",
    experience: "8+ years"
  }
];
function loadFacultyProfiles() {
  const container = document.getElementById("facultyContainer");
  container.innerHTML = "";
  facultyList.forEach(faculty => {
    const card = document.createElement("div");
    card.classList.add("faculty-card");
    card.innerHTML = `
      <img src="${faculty.image}" alt="${faculty.name}" />
      <h3>${faculty.name}</h3>
      <p><strong>Department:</strong> ${faculty.department}</p>
      <p><strong>Qualification:</strong> ${faculty.qualification}</p>
      <p><strong>Experience:</strong> ${faculty.experience}</p>
    `;
    container.appendChild(card);
  });
}

// ✅ Admission Counter Animation
function animateAdmissionCounters() {
  const counters = document.querySelectorAll("#admission-counter .counter");
  counters.forEach(counter => {
    counter.innerText = "0";
    const target = +counter.getAttribute("data-target");
    const increment = target / 100;
    const updateCounter = () => {
      const current = +counter.innerText;
      if (current < target) {
        counter.innerText = `${Math.ceil(current + increment)}`;
        setTimeout(updateCounter, 25);
      } else {
        counter.innerText = target;
      }
    };
    updateCounter();
  });
}

// ✅ Feedback Form Submit
document.getElementById("feedbackForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you! Your feedback has been submitted.");
  this.reset();
});

// ✅ News & Notice Board
function addNews() {
  const title = document.getElementById('newsTitle').value.trim();
  const desc = document.getElementById('newsDescription').value.trim();
  if (title && desc) {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${title}</strong><br><span>${desc}</span>`;
    document.getElementById('newsList').prepend(li);
    document.getElementById('newsTitle').value = '';
    document.getElementById('newsDescription').value = '';
  } else {
    alert("कृपया Title और Description भरें।");
  }
}

// ✅ Academic Calendar Load
const academicData = [
  { year: "2024‑2025 Odd Sem", details: "I, II, III & IV year odd semester schedule for UG/PG programs." },
  { year: "2025‑2026 Even Sem", details: "Tentative schedule including exams, holidays, events." },
  { year: "2028‑2029", details: "Latest schedule as per college website; includes semester dates, exams, holidays." }
];
function loadAcademicCalendar() {
  const ul = document.getElementById("academicList");
  ul.innerHTML = "";
  academicData.forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${item.year}:</strong> ${item.details}`;
    ul.appendChild(li);
  });
}

// ✅ Dynamic Feature Switching (final version)
function switchExtraSection(id) {
  document.querySelectorAll(".dynamic-extra").forEach(section => section.style.display = "none");
  const selected = document.getElementById(id);
  selected.style.display = "block";
  selected.scrollIntoView({ behavior: "smooth" });

  // Feature-specific loading
  if (id === "faculty-section") loadFacultyProfiles();
  if (id === "admission-counter") animateAdmissionCounters();
  if (id === "academic-calendar-section") loadAcademicCalendar();
}

// ✅ Footer Year
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("currentYear");
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
});

// ----------about section.............................................

function openAboutTab(tabId, clickedButton) {
  // Hide all content
  document.querySelectorAll(".about-tab-content").forEach(tab => tab.style.display = "none");

  // Deactivate all buttons
  document.querySelectorAll(".about-tab-btn").forEach(btn => btn.classList.remove("active"));

  // Show selected content
  document.getElementById(tabId).style.display = "block";
  clickedButton.classList.add("active");
}

// governing section -----------------
function toggleGovBox(id) {
  // sab boxes hide karo
  const boxes = document.querySelectorAll('.gov-content');
  boxes.forEach(box => box.style.display = 'none');

  // sirf clicked box show karo
  const activeBox = document.getElementById(id);
  if (activeBox) {
    activeBox.style.display = 'block';
  }
}



// ✅ Facilities Section Functionality

function showFacilityType(id) {
  // Sub-lists hide karo
  document.getElementById('facilities-list').style.display = 'none';
  document.getElementById('clubs-list').style.display = 'none';

  // Details boxes hide karo
  document.getElementById('facility-detail-box').style.display = 'none';
  document.getElementById('infrastructure-detail').style.display = 'none';
  document.getElementById('central-library').style.display = 'none';

  // Show sirf selected sub-list
  document.getElementById(id).style.display = 'block';
}

function showFacilityDetail(key) {
  // Sab detail boxes ko hide karo pehle
  document.getElementById('facility-detail-box').style.display = 'none';
  document.getElementById('infrastructure-detail').style.display = 'none';
  document.getElementById('central-library').style.display = 'none';

  // Data object
  const data = {
    library: {
      img: 'Images/library.jpg',
      text: '<h3>Library</h3><p>Access thousands of books, journals, and digital resources in our world-class library.</p>'
    },
    sports: {
      img: 'Images/sports.jpg',
      text: `<h3>Sports Complex</h3><p>State-of-the-art sports complex supporting multiple indoor and outdoor games.</p>

      <ul class="sports-list">
          <li><i class="fas fa-futbol"></i> Our College has well-trained teams in Football, Basketball, Cricket, Kabaddi, Badminton, Table Tennis, Boxing, Hockey, Volleyball, Taekwondo, Judo, and Athletics.</li>
          <li><i class="fas fa-award"></i> Both Boys and Girls have shown excellence at Zonal, Interzonal, and University levels in various sports.</li>
          <li><i class="fas fa-medal"></i> Girls Boxing Team won 3 Gold, 4 Silver, and 2 Bronze medals at the Interzonal level and became overall champions.</li>
          <li><i class="fas fa-medal"></i> Boys Boxing Team secured 2 Gold, 1 Silver, and 1 Bronze medals at the Interzonal level, winning the championship.</li>
          <li><i class="fas fa-table-tennis"></i> Girls Ball Badminton team won Silver, and also secured Bronze in Basketball & Volleyball at Zonal level.</li>
          <li><i class="fas fa-cricket"></i> Boys Cricket & Volleyball teams earned Bronze Medals in Zonal tournaments.</li>
          <li><i class="fas fa-star"></i> <strong>Guinness Kumar</strong> won Bronze in Judo (Interzonal level, Jai Mathagi College).</li>
          <li><i class="fas fa-star"></i> <strong>S. Chandrapandiyan</strong> (II MEE) secured Silver in Taekwondo (Interzonal match at Kumaraguru College).</li>
          <li><i class="fas fa-trophy"></i> Girls Basketball Team were runner-up in Zonal competition held at Sengunthar College of Engineering among 10 colleges.</li>
          <li><i class="fas fa-trophy"></i> Boys Basketball Team won Bronze in the same tournament among 10 colleges.</li>
      </ul>`
    },
    cafeteria: {
      img: 'Images/cafeteria.png',
      text: '<h3>Cafeteria</h3><p>Nutritious and hygienic food served in a friendly atmosphere.</p>'
    },
    nss: {
      img: 'Images/nss.png',
      text: '<h3>NSS Unit</h3><p>Our active NSS Unit fosters social responsibility and service among students.</p>'
    },
    yrc: {
      img: 'Images/yrc.jpg',
      text: '<h3>YRC</h3><p>Youth Red Cross promotes humanitarian values and health awareness.</p>'
    },
    rotaract: {
      img: 'Images/rotaract.jpg',
      text: '<h3>Rotaract Club</h3><p>Develop leadership skills while serving the community through our Rotaract Club.</p>'
    },
    infrastructure: {
      showDivId: 'infrastructure-detail'
    },
    centralLibrary: {
      showDivId: 'central-library'
    },
    professional: {
    showDivId: 'professional'
    },
    mou: {
    showDivId: 'mou'
   },
    transport: {
    showDivId: 'transport'
    },
    hostel: {
    img: 'Images/hostel.jpg', // ✅ अपना image path यहीं बदल सकते हैं
    text: `<h3>🏥 Hostel Medical Facility</h3>
    <p><i class="fa fa-check" aria-hidden="true"></i>The College has a full-fledged dispensary functioning from 11:00 a.m. to 1:00 p.m. in the morning and from 4:30 p.m. to 6:00 p.m. in the evening. This dispensary is headed by Dr. Ms. M. Hemavathy, M.B.B.S. More than 500 students and 50 staff members benefit from this facility every month.</p>
    <p><i class="fa fa-check" aria-hidden="true"></i>All students and staff enjoy free medical service at the dispensary. All medicines needed for general issues are available at no cost.</p>
    <p><i class="fa fa-check" aria-hidden="true"></i>A staff nurse is available 24 hours to provide support for major problems like surgeries, trauma care, etc. Referrals are made to Shanmuga Hospital under a tie-up with Shanmuga Medical and Research Institute, Salem.</p>
    <p><i class="fa fa-check" aria-hidden="true"></i>The college bears the expenses for staff members injured during work hours.</p>
    <p><i class="fa fa-check" aria-hidden="true"></i>Future plans include a 500 sq.ft. Medical Centre with 24x7 physician availability and a proposal for an Investigation Laboratory.</p>`
    }
 
};

const item = data[key];

  // Agar image + text format hai
  if (item && item.img && item.text) {
    document.getElementById('facility-img').style.display = 'block';
    document.getElementById('facility-img').src = item.img;
    document.getElementById('facility-text').innerHTML = item.text;
    document.getElementById('facility-detail-box').style.display = 'flex';
  }

  // Agar full custom div dikhana hai (infra ya central library)
  else if (item && item.showDivId) {
    document.getElementById(item.showDivId).style.display = 'block';
  }
};


// admission section -----------------------------------
function showAdmissionDetail(id) {
  const detailBox = document.getElementById("admission-detail-box");
  const content = document.getElementById("admission-detail-content");
  detailBox.style.display = "block";

  if (id === "procedure") {
    content.innerHTML = `
      <h2><i class="fas fa-graduation-cap"></i> Under Graduate Programmes (UGP)</h2>

      <div class="ug-table-container">
        <table class="ug-programme-table">
          <thead>
            <tr>
              <th>Programme</th>
              <th>Specialization / Minor / Honours Degree</th>
              <th>Intake</th>
              <th>Permanent Affiliation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>B.E. Civil Engineering</td>
              <td>Construction Technology</td>
              <td>60</td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="2">B.E. Computer Science and Engineering</td>
              <td>Cyber Security</td>
              <td>90</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>AI & Machine Learning</td>
              <td colspan="2"></td>
            </tr>
            <tr>
              <td>B.E. CSE – Cyber Security</td>
              <td>–</td>
              <td>60</td>
              <td></td>
            </tr>
            <tr>
              <td rowspan="2">B.E. ECE</td>
              <td>IoT</td>
              <td>60</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Robotics</td>
              <td colspan="2"></td>
            </tr>
            <tr>
              <td rowspan="2">B.E. EEE</td>
              <td>Electric Vehicles</td>
              <td>60</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Sensors Technology</td>
              <td colspan="2"></td>
            </tr>
            <tr>
              <td rowspan="2">B.E. Mechanical Engg</td>
              <td>3D Printing</td>
              <td>60</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Industrial Safety Engineering</td>
              <td colspan="2"></td>
            </tr>
            <tr>
              <td>B.E. Medical Electronics</td>
              <td>Advanced Healthcare Management</td>
              <td>120</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>B.E. Robotics and Automation</td>
              <td>–</td>
              <td>60</td>
              <td></td>
            </tr>
            <tr>
              <td>B.Tech. AI & Data Science</td>
              <td>Virtual and Augmented Reality</td>
              <td>60</td>
              <td></td>
            </tr>
            <tr>
              <td>B.Tech. Information Technology</td>
              <td>Multimedia, Cloud Computing</td>
              <td>60</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>B.Tech. Pharmaceutical Tech.</td>
              <td>–</td>
              <td>30</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="ug-description">
        <h3><i class="fas fa-lightbulb"></i> Minor / Honours Courses</h3>
        <p>Students can pursue <strong>Minor Degree or Honours Degree</strong> in emerging or multidisciplinary areas through their parent or other departments by earning an additional 18–20 credits.</p>

        <p>📘 <strong>Example:</strong> A Mechanical student completing extra credits in Robotics will earn a B.E. (Hons.) in Mechanical Engineering with specialization in Robotics.</p>

        <p>🎯 Students from other departments can earn <strong>Minor Degree</strong> by completing extra credits in another department. For example, a CSE student can earn a Minor Degree in Robotics from Mechanical Engineering.</p>

        <h3><i class="fas fa-check-circle"></i> Eligibility for Minor / Honours Registration</h3>
        <ul>
          <li>Minimum 7.5 CGPA till 2nd or 4th semester for 3rd/5th sem registration.</li>
          <li>Lateral entry students must have 60% in Diploma.</li>
          <li>Total 18–20 additional credits required for Minor/Honours degree.</li>
        </ul>
      </div>
    `;
  }else if (id === "documents") {
  content.innerHTML = `
    <h2><i class="fas fa-university"></i> Post Graduate Programmes (PGP)</h2>

    <div class="pg-table-container">
      <table class="pg-programme-table">
        <thead>
          <tr>
            <th>Programme</th>
            <th>Intake</th>
            <th>Permanent Affiliation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>M.E. (Computer Science and Engineering)</td>
            <td>18</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>M.E. (Medical Electronics)</td>
            <td>18</td>
            <td></td>
          </tr>
          <tr>
            <td>M.E. (Structural Engineering)</td>
            <td>18</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>M.E. (VLSI Designs)</td>
            <td>18</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Master of Business Administration (MBA)</td>
            <td>60</td>
            <td>Yes</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="pg-description">
      <h3><i class="fas fa-info-circle"></i> About PGP</h3>
      <p>
        Our Post Graduate programmes aim to foster advanced knowledge and research-driven skills in specialized fields such as <strong>Engineering, Electronics, VLSI Design</strong> and <strong>Management Studies</strong>.
      </p>
      <p>
        📘 Programmes are structured to meet industry requirements and academic excellence, backed with experienced faculty and modern infrastructure.
      </p>
      <p>
        🎓 MBA course is designed to develop managerial skills with real-world business applications.
      </p>
    </div>
  `;
}else if (id === "fees") {
  content.innerHTML = `
    <h2><i class="fas fa-flask"></i> Research Programmes (Ph.D)</h2>

    <div class="pg-table-container">
      <table class="pg-programme-table">
        <thead>
          <tr>
            <th>Programme</th>
            <th>Intake</th>
            <th>Permanent Affiliation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ph.D in Electrical and Electronics Engineering</td>
            <td>--</td>
            <td>Yes</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="pg-description">
      <h3><i class="fas fa-info-circle"></i> About Research Programmes</h3>
      <p>
        Our research programme in <strong>Electrical and Electronics Engineering</strong> is designed for scholars who wish to pursue in-depth study, innovation, and development in this ever-evolving field.
      </p>
      <p>
        🔬 The Ph.D programme provides an environment of academic excellence, advanced lab infrastructure, and expert research guidance to help students achieve breakthroughs in technology.
      </p>
      <p>
        🎯 Focus areas include Power Systems, Embedded Systems, Control Engineering, and Renewable Energy Systems, among others.
      </p>
      <p>
        📖 Candidates are encouraged to publish high-quality research papers, participate in conferences, and collaborate with industry and academia.
      </p>
    </div>
  `;
}else if (id === "eligibility") {
  content.innerHTML = `
    <h2><i class="fas fa-check-circle"></i> Eligibility Criteria</h2>

    <div class="pg-table-container">
      <table class="pg-programme-table">
        <thead>
          <tr>
            <th>Programme</th>
            <th>Eligibility Criteria</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Undergraduate (B.E. / B.Tech)</td>
            <td>10+2 pass with Physics, Chemistry & Mathematics from recognized board with minimum 50% marks (45% for reserved categories).</td>
          </tr>
          <tr>
            <td>Postgraduate (M.E. / MBA)</td>
            <td>Bachelor's degree in relevant stream with minimum 50% marks. MBA aspirants may require valid TANCET / CMAT score.</td>
          </tr>
          <tr>
            <td>Research (Ph.D)</td>
            <td>Master's degree in relevant field with strong academic record. GATE / NET / University entrance may be required.</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="pg-description">
      <h3><i class="fas fa-info-circle"></i>Important Note </h3>
      <p>Eligibility norms follow guidelines from AICTE, Anna University & Government of Tamil Nadu. Admission is based on merit and counseling procedures.</p>
      <p>📥 Download the detailed eligibility brochure below:</p>

      <a href="https://www.sect.edu.in/images/SECFees.png" target="_blank" class="download-btn">
        <i class="fas fa-file-download"></i> Download Eligibility PDF
      </a>
    </div>
  `;
}else if (id === "strategy") {
  content.innerHTML =`
 <div class="admission-content-section">
   <h2>🎯 Admission Strategy</h2>
   <ul class="strategy-list">
    <li>📍 <strong>Educational stalls</strong> displayed across Tamil Nadu promote admissions from different districts.</li>
    <li>🌍 Stalls are also set up in other states like <strong>Bihar, West Bengal, Kerala, and Andhra Pradesh</strong> every academic year.</li>
    <li>📢 Promotional methods include <strong>public drives, emails, newspapers, magazines, TV, radio, and billboards</strong>.</li>
    <li>🎓 <strong>Scholarship tests</strong> conducted annually to provide <strong>financial assistance</strong> to meritorious and economically weaker students.</li>
    <li>🏅 <strong>Sports scholarships</strong> for students with achievements at national and state level competitions.</li>
    <li>🏫 <strong>Faculty outreach:</strong> Teachers visit government and private schools to give motivational speeches and promote admissions.</li>
    <li>🌐 <strong>Digital marketing:</strong> A creative website, <strong>Google Ads</strong>, and platforms like Instagram, Facebook, and Twitter are used to reach potential students.</li>
    <li>🎁 <strong>Reward referrals:</strong> Students are rewarded for referring friends or family members to the institution.</li>
    <li>🔬 Annual <strong>Science Exhibitions</strong> are conducted for school students to develop scientific interest and spread awareness about the college.</li>
    <li>🧭 <strong>Collaboration with local educational counselors</strong> to elaborate the college's facilities and attract students.</li>
   </ul>
 </div>
 `;
}else if (id === "scholarship") {
  content.innerHTML = `
    <h2><i class="fas fa-hand-holding-usd"></i> Scholarship Details</h2>

    <div class="scholarship-table-container">
      <h3>🎓 Scholarship Details for the Academic Year 2022-2023</h3>
      <table class="scholarship-table">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Scholarship</th>
            <th>Beneficiary</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>1</td><td>Central Sector Scholarship</td><td>134</td></tr>
          <tr><td>2</td><td>First Graduate Scholarship</td><td>514</td></tr>
          <tr><td>3</td><td>SC/ST Scholarship</td><td>176</td></tr>
          <tr><td>4</td><td>BC/MBC Scholarship</td><td>595</td></tr>
          <tr><td>5</td><td>Minority Scholarship</td><td>5</td></tr>
          <tr><td>6</td><td>AICTE Pragati Scholarship</td><td>11</td></tr>
          <tr><td>7</td><td>AICTE Swanath Scholarship</td><td>1</td></tr>
          <tr><td>8</td><td>DISH Scholarship</td><td>1</td></tr>
          <tr><td>9</td><td>Pudhumai Penn Scholarship</td><td>79</td></tr>
          <tr><td>10</td><td>Sengunthar Charitable Trust Scholarship</td><td>270</td></tr>
        </tbody>
      </table>
    </div>

    <div class="scholarship-section">
      <h3>🏅 Scholarships - Sengunthar Charitable Trust</h3>
      <table class="scholarship-table">
        <thead>
          <tr><th>Scholarships</th><th>Norms</th><th>Eligibility</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>Merit Scholarship<br>(Rs 10,000 to Rs 40,000 p.a)</td>
            <td>First year students based on cut-off / TANCET / MAT score. Continued based on 95% attendance, no arrears, and top 10% in branch.</td>
            <td>First Year BE, BTech, ME, MBA</td>
          </tr>
          <tr>
            <td>Merit-cum-Means<br>(Rs 5,000 to Rs 10,000 p.a)</td>
            <td>Parental income < ₹1L, 95% attendance, no arrears, contribute 8 hrs/month in college duties.</td>
            <td>All Students of BE, BTech, ME, MBA</td>
          </tr>
          <tr>
            <td>Sports Scholarship<br>(Rs 10,000 to Rs 40,000 p.a)</td>
            <td>Based on Zonal, State, National or International achievements.</td>
            <td>All Students of BE, BTech, ME, MBA</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="scholarship-section">
      <h3>🏛️ Scholarships - Government Scholarships</h3>
      <table class="scholarship-table">
        <thead>
          <tr><th>Scholarship</th><th>Department</th><th>Eligibility</th><th>Details</th></tr>
        </thead>
        <tbody>
          <tr><td>BC/MBC Welfare</td><td>District Welfare Officer</td><td>BC/MBC, income < ₹1L</td><td>www.edistrict.tn.gov.in</td></tr>
          <tr><td>SC/ST Welfare</td><td>District Welfare Officer</td><td>SC/ST, income < ₹2L</td><td>www.edistrict.tn.gov.in</td></tr>
          <tr><td>SC/ST Fee Waiver</td><td>District Welfare Officer</td><td>SC/ST, income < ₹2L</td><td>100% Free</td></tr>
          <tr><td>Special Hostel Scholarship</td><td>Adi Dravidar Welfare</td><td>SC/ST in hostel, income < ₹1L</td><td>Apply through college</td></tr>
          <tr><td>Central Sector Scheme</td><td>DGE, Chennai</td><td>80%+ in HSC</td><td>www.tn.gov.in/dge</td></tr>
          <tr><td>Municipal Merit</td><td>Municipal Commissioner</td><td>Highest HSC in Municipal school</td><td>Apply through college</td></tr>
          <tr><td>Farmers Scheme</td><td>Tech Edu Commissioner</td><td>Wards of Farmers</td><td>Apply through college</td></tr>
          <tr><td>Teachers Welfare Fund</td><td>NFTW</td><td>Wards of Teachers</td><td>Apply through college</td></tr>
          <tr><td>Minority Scholarship</td><td>Minority Welfare Dept</td><td>50% marks, Christian/Muslim/Sikh/Buddhist</td><td>www.minorityaffairs.gov.in</td></tr>
          <tr><td>Physically Challenged</td><td>NHFDC</td><td>Disability</td><td>www.nhfdc.nic.in</td></tr>
        </tbody>
      </table>
    </div>
  `;
}else if (id === "inquiry") {
  content.innerHTML = `
    <h2><i class="fas fa-envelope-open-text"></i> Admission Inquiry Form</h2>
    <div class="inquiry-form-box">
      <form action="#" method="POST" class="admission-inquiry-form">
        <div class="form-group">
          <label for="name"><i class="fas fa-user"></i> Full Name:</label>
          <input type="text" id="name" name="name" placeholder="Enter your full name" required>
        </div>
        <div class="form-group">
          <label for="email"><i class="fas fa-envelope"></i> Email ID:</label>
          <input type="email" id="email" name="email" placeholder="Enter your email address" required>
        </div>
        <div class="form-group">
          <label for="phone"><i class="fas fa-phone"></i> Mobile No:</label>
          <input type="tel" id="phone" name="phone" placeholder="Enter your mobile number" required>
        </div>
        <div class="form-group">
          <label for="course"><i class="fas fa-graduation-cap"></i> Interested Course:</label>
          <select id="course" name="course">
            <option value="">-- Select a Course --</option>
            <option value="B.E. CSE">B.E. Computer Science and Engineering</option>
            <option value="B.E. ECE">B.E. Electronics and Communication Engineering</option>
            <option value="B.E. Mechanical">B.E. Mechanical Engineering</option>
            <option value="MBA">MBA</option>
            <option value="Ph.D">Ph.D</option>
          </select>
        </div>
        <div class="form-group">
          <label for="message"><i class="fas fa-comment"></i> Message:</label>
          <textarea id="message" name="message" rows="4" placeholder="Enter your message (optional)"></textarea>
        </div>
        <div class="form-submit">
          <button type="submit"><i class="fas fa-paper-plane"></i> Submit Inquiry</button>
        </div>
      </form>
    </div>
  `;
}
}



// ✅ Counter Animation
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
  counter.innerText = '0';
  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const current = +counter.innerText;
    const increment = target / 100;

    if (current < target) {
      counter.innerText = `${Math.ceil(current + increment)}`;
      setTimeout(updateCounter, 30);
    } else {
      counter.innerText = target;
    }
  };
  updateCounter();
});

// ✅ Chart.js Bar Graph
const ctx = document.getElementById('placementChart').getContext('2d');
const placementChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['CSE', 'ECE', 'MECH', 'EEE', 'CIVIL', 'IT', 'MBA'],
    datasets: [{
      label: 'Students Placed',
      data: [70, 55, 40, 35, 20, 45, 60],
      backgroundColor: '#2b4eff'
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of Students'
        }
      }
    }
  }
});


// 📢 Show Popup on First Page Load
window.addEventListener("load", () => {
  const popup = document.getElementById("popupNotice");
  if (popup) {
    popup.style.display = "flex";
  }
});

function closePopupNotice() {
  const popup = document.getElementById("popupNotice");
  if (popup) {
    popup.style.display = "none";
  }
}


function openAdmissionEnquiry() {
  // 1. Scroll to Admission section
  const admissionSection = document.getElementById("admission-section");
  if (admissionSection) {
    admissionSection.scrollIntoView({ behavior: "smooth" });
  }

  // 2. Trigger the admission box that opens inquiry form
  showAdmissionDetail("inquiry");

  // 3. Close popup
  closePopupNotice();
}


// chat section ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
function toggleChatBox() {
  const chatBox = document.getElementById("chatBox");
  if (chatBox.style.display === "block") {
    chatBox.style.display = "none";
  } else {
    chatBox.style.display = "block";
  }
}

function sendChatMessage() {
  const input = document.getElementById("chatInput");
  const message = input.value.trim();
  if (message !== "") {
    const chatBody = document.querySelector(".chat-body");
    const userMessage = document.createElement("p");
    userMessage.innerHTML = `<strong>You:</strong> ${message}`;
    chatBody.appendChild(userMessage);
    input.value = "";

    // Dummy bot reply
    setTimeout(() => {
      const botReply = document.createElement("p");
      botReply.innerHTML = `<strong>Bot:</strong> Thank you for your message! We'll get back to you soon.`;
      chatBody.appendChild(botReply);
      chatBody.scrollTop = chatBody.scrollHeight;
    }, 1000);
  }
}

function handleChat(event) {
  if (event.key === "Enter") {
    sendChatMessage();
  }
}

// dark mode section --------------------------------
document.getElementById('themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Change icon
  const icon = document.getElementById('themeIcon');
  if (document.body.classList.contains('dark-mode')) {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
});
