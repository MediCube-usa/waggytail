const colors={cream:'#fbf2df',navy:'#14253a',coral:'#ef7964',sage:'#b8d8c0',gold:'#d9a441'};
const dogs=[
  {name:'Luna',handle:'@luna.wags',tone:'golden',breed:'Golden Retriever',age:'3 years',place:'Austin, TX',bio:'Sunbeam captain, neighborhood greeter, and professional tennis-ball finder.',tags:['Profiles','Posts','Friends'],status:'Verified family dog',stat:['312 posts','18.4k friends','284 following']},
  {name:'Mochi',handle:'@mochi.mutt',tone:'coral',breed:'Corgi Mix',age:'2 years',place:'Portland, OR',bio:'Tiny legs, huge social calendar, excellent at cafe patios.',tags:['Dating','Groups','Events'],status:'Family dog',stat:['143 posts','9.7k friends','521 following']},
  {name:'Maple',handle:'@meet.maple',tone:'sage',breed:'Shepherd Mix',age:'Senior',place:'Denver, CO',bio:'Gentle shelter sweetheart ready for verified adopters and a quiet couch.',tags:['Shelter profile','Fresh source','Path home'],status:'Needs a home',stat:['51 posts','4.2k friends','86 following']},
  {name:'Biscuit',handle:'@biscuit.zoom',tone:'tan',breed:'Beagle',age:'10 months',place:'Nashville, TN',bio:'Puppy reporter covering sticks, socks, and suspicious squirrels.',tags:['Playdates','Puppy group','Zoomies'],status:'Family dog',stat:['78 posts','6.1k friends','240 following']}
];
const icons={Profiles:'◕',Posts:'✎',Friends:'♡',Dating:'✦',Groups:'●',Events:'☼'};
const nav=['Profiles','Posts','Friends','Dating','Groups','Events'];
const shelterActions=['Manage dogs','Present adoptable dogs','Maintain profiles','Message adopters','Adoption activity','Shelter information','Assistance tools'];
const $=s=>document.querySelector(s);
const dogFace=(dog,size='')=>`<div class="dogFace ${dog.tone} ${size}" aria-hidden="true"><span class="ear left"></span><span class="ear right"></span><span class="eye one"></span><span class="eye two"></span><span class="nose"></span><span class="muzzle"></span></div>`;
const logo=()=>`<a class="brand" href="#home" aria-label="Waggie Tail home">${dogFace({tone:'golden'},'logoDog')}<span><strong>Waggie Tail</strong><small>THE SOCIAL WORLD FOR DOGS</small></span></a>`;
const identity=d=>`<div class="identity">${dogFace(d)}<span><strong>${d.name}</strong><small>${d.handle} · ${d.breed}</small></span></div>`;
const pill=t=>`<span class="pill"><b>${icons[t]||'•'}</b>${t}</span>`;
const dogCard=d=>`<article class="dogCard ${d.tone}">${dogFace(d,'portrait')}<div><span class="badge">${d.status}</span><h3>${d.name}</h3><p>${d.bio}</p><div class="pills">${d.tags.map(pill).join('')}</div><button class="button small">Visit ${d.name}</button></div></article>`;
const post=(d,text)=>`<article class="postCard"><header>${identity(d)}<button class="button soft small">Follow</button></header><div class="postArt ${d.tone}">${dogFace(d,'feature')}<div class="bubble">${text}</div></div><footer><button>♡  Like</button><button>☁  Comment</button><button>↗  Share</button></footer></article>`;
const app=`
<header class="mobileTop">${logo()}<button class="round" aria-label="Open notifications">☼</button></header>
<div class="shell">
  <aside class="sideNav">${logo()}<nav aria-label="Primary">${nav.map(n=>`<a href="#${n.toLowerCase()}"><span>${icons[n]}</span>${n}</a>`).join('')}</nav><div class="managerCard"><small>Posting privately as manager of</small>${identity(dogs[0])}<button class="button soft">Switch dog</button></div></aside>
  <main>
    <section id="home" class="hero">
      <div class="heroCopy"><p class="eyebrow">Waggie Tail</p><h1>The Social World for Dogs</h1><p>Every dog gets a warm public identity, a friendly circle, social posts, events, groups, and a path home when they are waiting for family.</p><div class="heroActions"><a class="button" href="#profiles">Create my dog’s profile</a><a class="button soft" href="#shelters">Meet shelter dogs</a></div></div>
      <div class="heroLogo" aria-label="Waggie Tail dog illustration">${dogFace({tone:'golden'},'mascot')}<div class="tagline">THE SOCIAL WORLD FOR DOGS</div></div>
    </section>
    <section class="socialStrip" aria-label="Waggie Tail social areas">${nav.map(pill).join('')}</section>
    <section id="posts" class="phoneStage"><div class="phoneShell"><div class="storyRow">${dogs.map(d=>`<a href="#profiles">${dogFace(d)}<span>${d.name}</span></a>`).join('')}</div>${post(dogs[0],'Beach day with my fetch friends!')}<div class="compose"><b>Post as Luna</b><button class="button">+</button></div></div><div class="feedCopy"><h2>A polished mobile social app where dogs are the stars.</h2><p>Rounded cards, profile circles, warm backgrounds, bottom navigation, and simple social actions make the mobile shell feel like one cohesive Waggie Tail world.</p></div></section>
    <section id="profiles" class="panel"><h2>Dog-first profiles</h2><div class="cards">${dogs.map(dogCard).join('')}</div></section>
    <section id="friends" class="panel friendship"><h2>Friends, groups, events, and discovery</h2><div class="featureGrid">${nav.slice(2).map(n=>`<article><span>${icons[n]}</span><h3>${n}</h3><p>Friendly ${n.toLowerCase()} spaces designed around dog identities and trusted managers.</p></article>`).join('')}</div></section>
    <section id="shelters" class="panel shelter"><div><span class="badge">Shelter Voice stays Waggie Tail</span><h2>Shelter dogs belong in the same warm social world.</h2><p>Shelters manage adoptable dogs, provenance, freshness, adoption activity, and adopter communication while preserving the warm social product.</p></div><div class="shelterList">${shelterActions.map(a=>`<div><span>✓</span>${a}</div>`).join('')}</div></section>
    <section id="events" class="panel"><h2>Campaigns use the same playful visual system.</h2><div class="campaign"><div>${dogFace(dogs[1],'feature')}</div><div><h3>Summer Sploot-Off</h3><p>Warm community voting, dog profile entries, and shelter donation moments with approved campaign rules.</p><button class="button small">View entries</button></div></div></section>
  </main>
</div>
<nav class="bottomNav" aria-label="Mobile primary navigation">${['Posts','Search','Create','Groups','My Dog'].map((n,i)=>`<a class="${i===2?'create':''}" href="#${i===2?'posts':n.toLowerCase().replace(' ','-')}">${i===2?'+':Object.values(icons)[i]||'♡'}<span>${n}</span></a>`).join('')}</nav>
<footer>${logo()}<p>Dogs are the public identities. People and organizations manage them privately.</p></footer>`;
$('#root').innerHTML=app;
export {colors,dogs,nav,shelterActions};
