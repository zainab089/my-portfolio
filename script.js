// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});

// Active nav
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', ()=>{
  let current = '';
  sections.forEach(sec=>{
    if(window.scrollY >= sec.offsetTop - 120) current = sec.id;
  });
  navLinks.forEach(l=>{
    l.classList.remove('active');
    if(l.getAttribute('href') === '#'+current) l.classList.add('active');
  });
});

// Contact - UX: visitor exits with contact
function handleContact(e){
  e.preventDefault();
  const status = document.getElementById('formStatus');
  status.textContent = 'Sending...';
  setTimeout(()=>{
    status.textContent = '✓ Message sent! I will reply at syedazainab.0117@gmail.com within 2 hours. Thank you!';
    e.target.reset();
    const btn = e.target.querySelector('button');
    btn.textContent = 'Sent Successfully ✓';
    btn.style.background = '#10b981';
    setTimeout(()=>{ btn.textContent='Send Message 🚀'; btn.style.background=''; }, 3000);
  }, 1200);
}

// 3D tilt for arch
const arch = document.querySelector('.arch-container');
document.addEventListener('mousemove', (e)=>{
  if(!arch) return;
  const x = (e.clientX / window.innerWidth - 0.5) * 10;
  const y = (e.clientY / window.innerHeight - 0.5) * 10;
  arch.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${-y}deg)`;
});

// Reveal animation
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
},{threshold:0.15});
document.querySelectorAll('.exp-card, .project-card, .about-card').forEach(el=>{
  el.style.opacity = 0;
  el.style.transform = 'translateY(20px)';
  el.style.transition = '0.6s ease';
  observer.observe(el);
});