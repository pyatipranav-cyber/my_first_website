(function(){
var $=function(s){return document.querySelector(s)},cart=JSON.parse(localStorage.getItem('nc')||'{}');
function sv(){try{localStorage.setItem('nc',JSON.stringify(cart))}catch(e){}}
var cats=[].concat(['All'],MENU.map(function(m){return m.c}).filter(function(v,i,a){return a.indexOf(v)===i})),cur='All';
function menu(){$('#tabs').innerHTML=cats.map(function(c){return '<button class="'+(c===cur?'on':'')+'" data-c="'+c+'">'+c+'</button>'}).join('');
$('#grid').innerHTML=MENU.map(function(m,i){return m.c===cur||cur==='All'?'<div class="card"><small>'+m.c+'</small><h4>'+m.n+'</h4><div class="p">₹'+m.p+'</div><button data-i="'+i+'">Add</button></div>':''}).join('');tilt()}
$('#tabs').onclick=function(e){if(e.target.dataset.c){cur=e.target.dataset.c;menu()}};
$('#grid').onclick=function(e){var i=e.target.dataset.i;if(i!=null){cart[i]=(cart[i]||0)+1;sv();draw();$('#cart').classList.add('open')}};
function draw(){var t=0,n=0,h='';for(var i in cart){var m=MENU[i];if(!m)continue;t+=m.p*cart[i];n+=cart[i];h+='<div class="row"><span>'+m.n+' × '+cart[i]+'</span><span>₹'+m.p*cart[i]+' <a href="#" data-r="'+i+'">✕</a></span></div>'}
$('#ci').innerHTML=h||'<p>Cart is empty.</p>';$('#ct').textContent='Total ₹'+t;$('#cartN').textContent=n;
var tx='Hi Niyaaz, I would like to order:%0A'+Object.keys(cart).map(function(i){return MENU[i].n+' x'+cart[i]}).join('%0A')+'%0ATotal: Rs '+t;$('#wa').dataset.u='https://wa.me/'+WA+'?text='+tx}
$('#ci').onclick=function(e){if(e.target.dataset.r){e.preventDefault();delete cart[e.target.dataset.r];sv();draw()}};
$('#wa').onclick=function(){if(!Object.keys(cart).length)return;try{var o=JSON.parse(localStorage.getItem('no')||'[]');o.push({t:Date.now(),c:cart,v:Object.keys(cart).reduce(function(s,i){return s+MENU[i].p*cart[i]},0)});localStorage.setItem('no',JSON.stringify(o))}catch(e){}window.open($('#wa').dataset.u,'_blank','noopener')};
$('#cartBtn').onclick=function(){$('#cart').classList.toggle('open')};$('#cc').onclick=function(){$('#cart').classList.remove('open')};
$('#out').innerHTML=OUTLETS.map(function(o){return '<div class="card"><span class="badge">✔ Verified Niyaaz</span><h4>'+o.n+'</h4><p>'+o.a+'</p><a class="ghost" style="margin:0" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query='+encodeURIComponent('Niyaaz '+o.a)+'">Directions</a></div>'}).join('');
$('#lf').onsubmit=function(e){e.preventDefault();var f=new FormData(e.target);try{var l=JSON.parse(localStorage.getItem('nl')||'[]');l.push({n:f.get('n'),p:f.get('p'),c:f.get('c'),t:Date.now()});localStorage.setItem('nl',JSON.stringify(l))}catch(x){}$('#lm').textContent='Welcome to Niyaaz Rewards, '+f.get('n')+'. (Demo: saved on this device only.)';e.target.reset()};
function tilt(){document.querySelectorAll('.card').forEach(function(c){c.onmousemove=function(e){var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform='perspective(600px) rotateY('+x*14+'deg) rotateX('+-y*14+'deg) translateZ(8px)'};c.onmouseleave=function(){c.style.transform=''}})}
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');e.target.querySelectorAll('[data-n]').forEach(function(b){var T=+b.dataset.n,s=performance.now();(function f(t){var k=Math.min(1,(t-s)/1400);b.textContent=Math.round(T*k);if(k<1)requestAnimationFrame(f)})(s)})}})},{threshold:.15});
document.querySelectorAll('.reveal').forEach(function(s){io.observe(s)});
menu();draw();
/* 3D saffron-grain swirl */
try{var cv=$('#gl'),R=new THREE.WebGLRenderer({canvas:cv,alpha:true,antialias:true}),S=new THREE.Scene(),C=new THREE.PerspectiveCamera(60,1,.1,100);C.position.z=7;
var N=matchMedia('(max-width:700px)').matches?1800:4500,g=new THREE.BufferGeometry(),p=new Float32Array(N*3),a=[];
for(var i=0;i<N;i++){var r=1+Math.random()*5,t=Math.random()*6.283;a.push([r,t,(Math.random()-.5)*4,.2+Math.random()*.6])}
g.setAttribute('position',new THREE.BufferAttribute(p,3));
var P=new THREE.Points(g,new THREE.PointsMaterial({color:0xe8b04a,size:.045,transparent:true,opacity:.8}));S.add(P);
var mx=0,my=0,sy=0;addEventListener('pointermove',function(e){mx=e.clientX/innerWidth-.5;my=e.clientY/innerHeight-.5});addEventListener('scroll',function(){sy=scrollY/innerHeight});
function rs(){R.setSize(innerWidth,innerHeight,false);R.setPixelRatio(Math.min(devicePixelRatio,2));C.aspect=innerWidth/innerHeight;C.updateProjectionMatrix()}rs();addEventListener('resize',rs);
var rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
(function L(tm){tm*=.0003;for(var i=0;i<N;i++){var q=a[i],an=q[1]+(rm?0:tm*q[3]/Math.sqrt(q[0])*3);p[i*3]=Math.cos(an)*q[0];p[i*3+1]=q[2]*.4+Math.sin(an*2+q[0])*.3;p[i*3+2]=Math.sin(an)*q[0]-2}
g.attributes.position.needsUpdate=true;P.rotation.x=.9+my*.4+sy*.3;P.rotation.y=mx*.5;C.position.z=7-sy*1.5;R.render(S,C);requestAnimationFrame(L)})(0)}catch(e){cv.style.display='none'}
})();
