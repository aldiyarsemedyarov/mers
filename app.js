/* ===== HELPERS ===== */
/* ===== SVG ICONS ===== */
const ic=(d,s=16)=>`<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
const icons={
  target:ic('<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>'),
  trendDown:ic('<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/>'),
  package:ic('<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>'),
  brain:ic('<path d="M9.5 2a2.5 2.5 0 012.5 2.5V4a2.5 2.5 0 015 0v.5A2.5 2.5 0 0119.5 7h.5a2.5 2.5 0 010 5h-.5a2.5 2.5 0 00-2.5 2.5v.5a2.5 2.5 0 01-5 0v-.5A2.5 2.5 0 009.5 12H9a2.5 2.5 0 010-5h.5A2.5 2.5 0 0012 4.5V4a2.5 2.5 0 00-2.5-2z"/>'),
  mail:ic('<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22 6 12 13 2 6"/>'),
  fire:ic('<path d="M12 12c2-2.96 0-7-1-8 0 3.038-1.773 4.741-3 6-1.226 1.26-2 3.24-2 5a6 6 0 1012 0c0-1.532-1.056-3.94-2-5-1.786 3-2 2-4 2z"/>'),
  check:ic('<polyline points="20 6 9 17 4 12"/>'),
  chart:ic('<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>'),
  zap:ic('<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>'),
  dollar:ic('<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>'),
  user:ic('<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>'),
  bot:ic('<rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="9" cy="16" r="1"/><circle cx="15" cy="16" r="1"/><path d="M8 11V7a4 4 0 018 0v4"/><line x1="12" y1="3" x2="12" y2="1"/>'),
  shop:ic('<path d="M3 9l1.5-5h15L21 9"/><path d="M3 9v11a1 1 0 001 1h16a1 1 0 001-1V9"/>'),
  phone:ic('<rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>'),
  store:ic('<path d="M3 9l1.5-5h15L21 9M3 9v11a1 1 0 001 1h16a1 1 0 001-1V9"/><path d="M9 21V12h6v9"/>'),
  truck:ic('<rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>'),
  link:ic('<path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>'),
  eye:ic('<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>'),
  flask:ic('<path d="M9 3v11"/><path d="M15 3v5"/><path d="M5 7h4"/><path d="M5 11h4"/><path d="M11 7h4"/><circle cx="12" cy="19" r="2"/><path d="M12 15v2"/>'),
  trophy:ic('<path d="M6 9H4a2 2 0 01-2-2V5a2 2 0 012-2h1"/><path d="M18 9h2a2 2 0 002-2V5a2 2 0 00-2-2h-1"/><path d="M4 22h16"/><path d="M10 22V10.82a2 2 0 01.4-1.2L12 7l1.6 2.62a2 2 0 01.4 1.2V22"/>'),
  chat:ic('<path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>'),
  search:ic('<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>'),
  credit:ic('<rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/>'),
  music:ic('<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>'),
  alert:ic('<path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>'),
  clipboard:ic('<path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/>'),
  calc:ic('<rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="16" y1="14" x2="16" y2="18"/><line x1="8" y1="10" x2="10" y2="10"/><line x1="14" y1="10" x2="16" y2="10"/>'),
  home:ic('<path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>'),
  gear:ic('<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9c.26.604.852.997 1.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/>'),
};

/* Emoji → SVG icon mapper for UI icons */
const emojiToSvg={
  '🎯':icons.target,'📉':icons.trendDown,'📦':icons.package,'🧠':icons.brain,
  '📧':icons.mail,'🔥':icons.fire,'✅':icons.check,'📊':icons.chart,
  '⚡':icons.zap,'💰':icons.dollar,'👤':icons.user,'⚙️':icons.gear,
  '🏠':icons.home,'📋':icons.clipboard,'🔌':icons.link,'🕵️':icons.eye,
  '🔬':icons.flask,'🧮':icons.calc,'🔔':icons.alert,'💬':icons.chat,
  '📱':icons.phone,'🏪':icons.store,'📈':icons.chart,'🔍':icons.search,
  '🤖':icons.bot,'🛍':icons.shop,'📘':icons.credit,'🎵':icons.music,
  '💳':icons.credit,'🏆':icons.trophy,'🚚':icons.truck,'➕':icons.zap,
  '📝':icons.clipboard,'⏸️':icons.alert,'📥':icons.package,
};
function svgIcon(emoji,size){
  if(emojiToSvg[emoji]){
    return size?emojiToSvg[emoji].replace(/width="\d+"/,`width="${size}"`).replace(/height="\d+"/,`height="${size}"`):emojiToSvg[emoji];
  }
  return emoji;
}

const $=s=>document.querySelector(s);
const $$=s=>document.querySelectorAll(s);
const fmt=n=>'$'+Math.round(n).toLocaleString('en-US');
const pct=(n,t)=>(n/t*100).toFixed(1)+'%';
function timeAgo(ts){
  const s=Math.floor((Date.now()-ts)/1000);
  if(s<10)return 'just now';
  if(s<60)return s+'s ago';
  const m=Math.floor(s/60);
  if(m<60)return m+' min ago';
  const h=Math.floor(m/60);
  if(h<24)return h+'h ago';
  const d=Math.floor(h/24);
  if(d===1)return 'yesterday';
  return d+'d ago';
}

/* ===== PAGE NAV ===== */
const pageMap={dashboard:'home',tasks:'task',knowledge:'knowledge',playbooks:'play',cashflow:'cash',analytics:'analy',integrations:'integ',competitors:'compet',research:'research',pnl:'pnl',account:'account',settings:'settings'};
function showPage(name){
  $$('.page').forEach(p=>p.classList.remove('active'));
  $('#page-'+name).classList.add('active');
  $$('.sidebar-item').forEach(t=>{
    t.classList.toggle('active',t.dataset.page===name);
  });
  const sb=$('#global-stats');if(sb)sb.style.display=name==='tasks'?'flex':'none';
  if(name==='analytics')renderAnalytics();
  if(name==='cashflow')renderCashFlow();
  if(name==='account')renderAccount();
  if(name==='settings')renderSettings();
  // Stagger animation on tab switch
  requestAnimationFrame(()=>{
    const page=$('#page-'+name);
    if(page){
      const items=page.querySelectorAll('.dash-card,.card,.playbook-card,.pnl-card,.settings-section,.insight-item,.activity-item,.kb-table tbody tr,#cf-summary > div,#kpi-grid > div,#trending-grid > div,#comp-grid > div,#comp-ads > div,#integrations-list > div > div');
      items.forEach((el,i)=>{
        el.style.opacity='0';
        el.style.animation='none';
        el.offsetHeight;
        el.style.animation='staggerFade .4s ease '+(i*50)+'ms both';
      });
    }
  });
}

/* ===== DRAG & DROP ===== */
let _dragTaskId=null;
window._wasDragged=false;

function onDragStart(e,taskId){
  _dragTaskId=taskId;
  window._wasDragged=false;
  e.dataTransfer.effectAllowed='move';
  e.dataTransfer.setData('text/plain',taskId);
  e.target.style.opacity='.4';
  e.target.style.transform='rotate(2deg)';
  // Highlight all drop zones
  $$('.kanban-drop').forEach(d=>d.classList.add('drag-active'));
}

function onDragEnd(e){
  e.target.style.opacity='1';
  e.target.style.transform='';
  $$('.kanban-drop').forEach(d=>{d.classList.remove('drag-active');d.classList.remove('drag-over');});
  _dragTaskId=null;
}

function onDragOver(e){
  e.preventDefault();
  e.dataTransfer.dropEffect='move';
  e.currentTarget.classList.add('drag-over');
}

function onDragLeave(e){
  e.currentTarget.classList.remove('drag-over');
}

function onDrop(e,colId){
  e.preventDefault();
  e.currentTarget.classList.remove('drag-over');
  const taskId=parseInt(e.dataTransfer.getData('text/plain'));
  const t=tasks.find(x=>x.id===taskId);
  if(t&&t.col!==colId){
    const oldCol=t.col;
    t.col=colId;
    window._wasDragged=true;
    renderTasks();
    addActivity('human',`<strong>Aldiyar</strong> moved <strong>${t.title}</strong> to ${cols.find(c=>c.id===colId)?.label||colId}`);
  }
  $$('.kanban-drop').forEach(d=>{d.classList.remove('drag-active');d.classList.remove('drag-over');});
}

/* ===== MODAL ===== */
function openModal(html){$('#modal-content').innerHTML=html;$('#modal-overlay').classList.add('open')}
function closeModal(){$('#modal-overlay').classList.remove('open')}

/* ===== TASKS DATA ===== */
let tasks=[
  {id:1,col:'suggested',title:'Add urgency timer to product page',desc:'CR below 1.2%. Countdown + low-stock badge could lift CR 15-30% (4 creator consensus).',priority:'high',owner:'mers',time:'2 min ago',impact:'↑ Est. +22% CR'},
  {id:2,col:'suggested',title:'Switch to broad targeting on Meta',desc:'Interest-stack CPM at $38. Broad + Advantage+ drops CPM to $18-24.',priority:'high',owner:'mers',time:'18 min ago',impact:'↓ Est. -35% CPM'},
  {id:3,col:'suggested',title:'Add Klarna / Afterpay',desc:'AOV $39 = BNPL sweet spot. 3 sources confirm 12-18% AOV lift for sub-$50.',priority:'med',owner:'mers',time:'1h ago',impact:'↑ Est. +15% AOV'},
  {id:4,col:'suggested',title:'Launch TikTok Ads — organic-style hooks',desc:'TikTok CPMs 40-60% lower than Meta for fitness/beauty. Test 3 native-feel creatives.',priority:'high',owner:'mers',time:'30 min ago',impact:'↓ Est. -45% CPM'},
  {id:5,col:'backlog',title:'Build email welcome flow',desc:'No post-purchase sequence. Klaviyo 3-email flow recovers 8-12% of abandoners.',priority:'high',owner:'mers',time:'3h ago',impact:'↑ Est. +$4.2K/mo recovered'},
  {id:6,col:'backlog',title:'Test UGC-style creatives',desc:'Studio-shot ads underperforming. UGC hooks convert 2-3x on fitness/beauty (5/5 consensus).',priority:'med',owner:'aldiyar',time:'5h ago',impact:'↑ Est. +2.5x CTR'},
  {id:7,col:'backlog',title:'Evaluate CJ Dropshipping vs Teemdrop',desc:'Compare shipping times, costs, reliability for EU fulfillment.',priority:'low',owner:'mers',time:'1d ago',impact:'↓ Est. -$1.80/order shipping'},
  {id:8,col:'backlog',title:'Set up Google Merchant Center',desc:'Free Shopping listings + Performance Max for discovery traffic.',priority:'low',owner:'mers',time:'1d ago',impact:'↑ Est. +8% organic traffic'},
  {id:9,col:'progress',title:'Scale TikTok Ads to $500/day',desc:'Current spend $120/day with 2.8x ROAS. Scaling plan: increase 20% every 48h if ROAS holds above 2.0x.',priority:'high',owner:'mers',time:'now',impact:'↑ Est. +$8K/mo revenue'},
  {id:10,col:'progress',title:'Meta Ads campaign restructure',desc:'Splitting into CBO broad + 3 ASC creatives. Kill: pause if CPP > $25 after 72h.',priority:'high',owner:'mers',time:'2h ago',impact:'↓ Est. -$8K/mo wasted spend'},
  {id:11,col:'progress',title:'Competitor price monitoring',desc:'Tracking 12 products on AliExpress, Amazon, competitor stores. Alert on >10% changes.',priority:'med',owner:'mers',time:'6h ago'},
  {id:12,col:'progress',title:'Creator content ingestion',desc:'Processing 47 YouTube videos from top ecom creators. Extracting tactics & decision rules.',priority:'med',owner:'mers',time:'4h ago',impact:'↑ 89 new tactics extracted'},
  {id:13,col:'done',title:'Store audit — slimnfit.store',desc:'Full conversion audit complete. 14 issues found, 8 critical.',priority:'high',owner:'mers',time:'yesterday'},
  {id:14,col:'done',title:'Market research synthesis',desc:'AI-retail TAM $55B by 2030. Dropshipping $1.25T GMV. Landscape mapped.',priority:'med',owner:'mers',time:'yesterday'},
  {id:15,col:'done',title:'Set up Winning Hunter tracking',desc:'Product tracker for top 5 niches. Daily alerts configured.',priority:'low',owner:'aldiyar',time:'2d ago'},
  {id:16,col:'done',title:'Deploy demo UI prototype',desc:'6-tab dashboard: Tasks, Knowledge, Playbooks, Cash Flow, Analytics, Integrations.',priority:'high',owner:'mers',time:'yesterday'},
  {id:17,col:'done',title:'Analyze top 20 Meta Ad Library creatives',desc:'Deconstructed hooks, CTAs, formats for fitness/slimming niche.',priority:'med',owner:'mers',time:'2d ago'},
  {id:18,col:'done',title:'Configure Shopify analytics tracking',desc:'UTM parameters, FB pixel, conversion API setup verified.',priority:'low',owner:'aldiyar',time:'3d ago'},
];

const cols=[
  {id:'suggested',label:'Suggested',color:'var(--purple)'},
  {id:'backlog',label:'Backlog',color:'var(--orange)'},
  {id:'progress',label:'In Progress',color:'var(--accent)'},
  {id:'done',label:'Done',color:'var(--green)'}
];

let ownerFilter='all';
function filterOwner(f,el){
  ownerFilter=f;
  $$('.filter-owner').forEach(b=>b.classList.remove('active-period'));
  el.classList.add('active-period');
  renderTasks();
}

function renderTasks(){
  const board=$('#kanban-board');
  const filtered=ownerFilter==='all'?tasks:tasks.filter(t=>t.owner===ownerFilter);
  board.innerHTML=cols.map(c=>{
    const colTasks=filtered.filter(t=>t.col===c.id);
    return `<div class="kanban-col">
      <div class="col-header">
        <div class="col-title"><div class="col-dot" style="background:${c.color}"></div>${c.label}</div>
        <div style="display:flex;gap:4px;align-items:center">
          <div class="col-count">${colTasks.length}</div>
          <button class="col-add" onclick="openNewTaskModal('${c.id}')">+</button>
        </div>
      </div>
      <div class="kanban-drop" data-col="${c.id}" ondragover="onDragOver(event)" ondragleave="onDragLeave(event)" ondrop="onDrop(event,'${c.id}')">
      ${colTasks.map(t=>`<div class="card${t.id===9?' highlighted':''}" draggable="true" ondragstart="onDragStart(event,${t.id})" ondragend="onDragEnd(event)" onclick="if(!window._wasDragged)openTaskDetail(${t.id})" data-task-id="${t.id}">
        <div class="card-title"><span class="card-priority ${t.priority}"></span>${t.title}</div>
        <div class="card-desc">${t.desc}</div>
        <div class="card-meta">
          <span class="card-tag ${t.owner==='mers'?'tag-agent':'tag-human'}">${t.owner==='mers'?'🤖 Mers':'👤 Aldiyar'}</span>
          <span class="card-time">${t.time}</span>
        </div>
        ${t.impact?`<div class="card-impact">${t.impact}</div>`:''}
      </div>`).join('')}
      </div>
    </div>`;
  }).join('');
  // Update global stats
  const done=tasks.filter(t=>t.col==='done').length;
  const prog=tasks.filter(t=>t.col==='progress').length;
  const total=tasks.length;
  const thisWeek=3;
  const completion=Math.round(done/total*100);
  $('#global-stats').innerHTML=`
    <div><div class="stat-val">${thisWeek}</div><div class="stat-label">This week</div></div>
    <div><div class="stat-val">${prog}</div><div class="stat-label">In progress</div></div>
    <div><div class="stat-val">${total}</div><div class="stat-label">Total</div></div>
    <div><div class="stat-val accent">${completion}%</div><div class="stat-label">Completion</div></div>`;
}

function openNewTaskModal(col){
  openModal(`<h3>+ New Task</h3>
    <label>Title</label><input id="nt-title" placeholder="What needs to be done?">
    <label>Description</label><textarea id="nt-desc" placeholder="Details, context, expected impact..."></textarea>
    <label>Priority</label><select id="nt-pri"><option value="high">🔴 High</option><option value="med" selected>🟡 Medium</option><option value="low">🔵 Low</option></select>
    <label>Assign to</label><select id="nt-owner"><option value="mers">🤖 Mers</option><option value="aldiyar">👤 Aldiyar</option></select>
    <label>Column</label><select id="nt-col">${cols.map(c=>`<option value="${c.id}"${c.id===(col||'backlog')?' selected':''}>${c.label}</option>`).join('')}</select>
    <div class="modal-actions"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-primary" onclick="addTask()">Add task</button></div>`);
}

function addTask(){
  const t={id:Date.now(),title:$('#nt-title').value||'New task',desc:$('#nt-desc').value||'',priority:$('#nt-pri').value,owner:$('#nt-owner').value,col:$('#nt-col').value,time:'just now'};
  tasks.unshift(t);closeModal();renderTasks();
  addActivity(t.owner==='mers'?'agent':'human',`<strong>${t.owner==='mers'?'Mers':'Aldiyar'}</strong> created <strong>${t.title}</strong>`);
}

function openTaskDetail(id){
  const t=tasks.find(x=>x.id===id);if(!t)return;
  const colOpts=cols.map(c=>`<option value="${c.id}"${c.id===t.col?' selected':''}>${c.label}</option>`).join('');
  openModal(`<h3>${t.title}</h3>
    <p style="font-size:12.5px;color:var(--text-dim);line-height:1.5;margin-bottom:12px">${t.desc}</p>
    <div style="display:flex;gap:8px;align-items:center;margin-bottom:12px">
      <span class="card-tag ${t.owner==='mers'?'tag-agent':'tag-human'}">${t.owner==='mers'?'🤖 Mers':'👤 Aldiyar'}</span>
      <span class="card-priority ${t.priority}" style="width:8px;height:8px"></span>
      <span style="font-size:11px;color:var(--text-muted)">${t.priority} priority · ${t.time}</span>
    </div>
    ${t.impact?`<div class="card-impact" style="margin-bottom:12px">${t.impact}</div>`:''}
    <div id="brief-container"></div>
    <label>Move to</label><select id="td-col" onchange="moveTask(${t.id},this.value)">${colOpts}</select>
    <div class="modal-actions"><button class="btn btn-danger" onclick="deleteTask(${t.id})">Delete</button><button class="btn btn-ghost" onclick="generateBrief(${t.id})">📝 Generate brief</button><button class="btn btn-ghost" onclick="closeModal()">Close</button></div>`);
}

function generateBrief(id){
  const t=tasks.find(x=>x.id===id);if(!t)return;
  const bc=$('#brief-container');if(!bc)return;
  bc.innerHTML=`<div style="margin:12px 0;padding:4px 0;font-size:11px;color:var(--text-muted)">Generating brief...</div>`;
  setTimeout(()=>{
    const briefs={
      'Add urgency timer':`<strong>🎯 Creative Brief: Urgency Elements</strong><br><br>
<strong>Objective:</strong> Increase CR from 1.2% to 2%+ by adding scarcity signals.<br><br>
<strong>Elements to add:</strong><br>
1. Countdown timer: "Sale ends in 2:34:17" — above Add to Cart button<br>
2. Stock counter: "Only 4 left in stock!" — red text below price<br>
3. Social proof popup: "Sarah from LA just purchased" — bottom-left, every 30s<br>
4. Sticky cart bar on mobile with timer<br><br>
<strong>Apps:</strong> Vitals ($29/mo) or PageFly (free tier)<br>
<strong>A/B test:</strong> Run 7 days. Kill IF: CR doesn't improve 10%+`,
      'Switch to broad':`<strong>🎯 Creative Brief: Broad Targeting Migration</strong><br><br>
<strong>Current:</strong> Interest-stack targeting, CPM $38<br>
<strong>Target:</strong> Advantage+ broad, CPM $18-24<br><br>
<strong>Steps:</strong><br>
1. Create new CBO campaign, $100/day budget<br>
2. 3 ad sets: Broad US Women 25-54, Broad US 18+, Advantage+ Shopping<br>
3. Use top 3 performing creatives from current campaign<br>
4. Let run 72h before judging<br><br>
<strong>Kill rule:</strong> Pause if no purchase after $75 spend per ad set<br>
<strong>Scale rule:</strong> If ROAS > 2.5x at 72h, increase budget 20%`,
      'UGC':`<strong>🎨 Creative Brief: UGC Test Campaign</strong><br><br>
<strong>Format:</strong> 3 UGC-style videos, phone-shot, vertical 9:16<br><br>
<strong>Hook Options (first 3 sec):</strong><br>
A. "I wore these compression leggings for 30 days and..."<br>
B. "POV: you find the leggings that actually work"<br>
C. "Gym girls are obsessed with these $39 leggings"<br><br>
<strong>Script structure:</strong> Hook → Problem (nothing fits right) → Solution (show product) → Transformation (before/after) → CTA ("Link in bio, 40% off today only")<br><br>
<strong>Budget:</strong> $50-150 per creator or film yourself<br>
<strong>Platform:</strong> Meta + TikTok simultaneously<br>
<strong>Test budget:</strong> $30/day per creative, 5 days`,
    };
    const key=Object.keys(briefs).find(k=>t.title.toLowerCase().includes(k.toLowerCase()));
    const briefContent=key?briefs[key]:`<strong>📝 Auto-Generated Brief for: ${t.title}</strong><br><br>
<strong>Objective:</strong> ${t.desc}<br><br>
<strong>Steps:</strong><br>
1. Research best practices from Knowledge Base (${Math.floor(Math.random()*5+3)} relevant tactics found)<br>
2. Create implementation plan with 3-day timeline<br>
3. Set success metrics and kill rules<br>
4. Execute and monitor for 7 days<br><br>
<strong>Expected impact:</strong> ${t.impact||'TBD — will measure after implementation'}<br>
<strong>Kill rule:</strong> Revert if no measurable improvement after 7 days`;
    
    bc.innerHTML=`<div style="margin:12px 0;padding:14px;background:var(--card);border:1px solid var(--border);border-radius:var(--radius-sm);font-size:12px;line-height:1.7;color:var(--text-dim)">${briefContent}</div>`;
  },800);
}

function moveTask(id,col){
  const t=tasks.find(x=>x.id===id);if(t){t.col=col;renderTasks();addActivity('agent',`<strong>Mers</strong> moved <strong>${t.title}</strong> to ${col}`);}closeModal();
}

function deleteTask(id){
  tasks=tasks.filter(x=>x.id!==id);renderTasks();closeModal();
}

/* ACTIVITY */
let activities=[
  {type:'agent',text:'<strong>Mers</strong> suggested <strong>Add urgency timer</strong>',ts:Date.now()-2*60000},
  {type:'agent',text:'<strong>Mers</strong> detected conflict: <strong>kill ads at 48h vs 96h</strong>',ts:Date.now()-15*60000},
  {type:'agent',text:'<strong>Mers</strong> suggested <strong>Launch TikTok Ads</strong>',ts:Date.now()-30*60000},
  {type:'agent',text:'<strong>Mers</strong> ingested 12 videos from <strong>Jordan Welsh</strong>',ts:Date.now()-60*60000},
  {type:'human',text:'<strong>Aldiyar</strong> approved <strong>Meta Ads restructure</strong>',ts:Date.now()-2*3600000},
  {type:'agent',text:'<strong>Mers</strong> completed <strong>Store audit</strong> — 14 issues',ts:Date.now()-24*3600000},
  {type:'system',text:'<strong>System</strong> auto-paused ad set #3 — CPP exceeded $25',ts:Date.now()-26*3600000},
  {type:'agent',text:'<strong>Mers</strong> created playbook <strong>Meta Ads Scale</strong>',ts:Date.now()-28*3600000},
  {type:'agent',text:'<strong>Mers</strong> extracted 89 tactics from <strong>47 videos</strong>',ts:Date.now()-2*86400000},
].sort((a,b)=>b.ts-a.ts);

function addActivity(type,text){
  activities.unshift({type,text,ts:Date.now()});renderActivity();renderDashboard();
}

function renderActivity(){
  activities.sort((a,b)=>b.ts-a.ts);
  $('#activity-feed').innerHTML=activities.map(a=>`<div class="activity-item">
    <div class="activity-dot ${a.type}"></div>
    <div><div class="activity-text">${a.text}</div><div class="activity-time">${timeAgo(a.ts)}</div></div>
  </div>`).join('');
}

/* ===== KNOWLEDGE BASE ===== */
const kbData=[
  {tactic:'Use broad targeting + Advantage+',detail:'Let Meta\'s algorithm find buyers. Interest stacking is dead for most niches.',cat:'ads',rule:'IF CPM > $30 on interest → switch to broad\nKILL IF: no purchase after $50 spend',sources:['Biaheza','Jordan Welsh','Foundr','AC Hampton','Davie Fogarty'],conf:92,status:'verified'},
  {tactic:'⚠️ When to kill underperforming ad sets',detail:'CONFLICT: Sources disagree on kill timeline.',cat:'ads',rule:'A: Kill after 48h (Biaheza, Sara Finance)\nB: Wait 96h for learning (Davie Fogarty)',sources:['Biaheza','Sara Finance','Davie Fogarty'],conf:-1,status:'conflict',isConflict:true},
  {tactic:'UGC hooks outperform studio ads 2-3x',detail:'Phone-recorded, authentic feel. First 3 sec = make or break.',cat:'creative',rule:'Test 3 UGC hooks per product\nSCALE IF: hook rate > 30% + CTR > 2%',sources:['Biaheza','Sara Finance','Arie Scherson','Sebastian Ghiorghiu','Wholesale Ted'],conf:96,status:'verified'},
  {tactic:'Urgency elements lift CR 15-30%',detail:'Countdown timers, low-stock badges, "X people viewing" popups.',cat:'store',rule:'IF CR < 2% → add urgency\nA/B test 7 days before committing',sources:['Jordan Welsh','Wholesale Ted','Foundr','Verum Ecom'],conf:88,status:'verified'},
  {tactic:'Order samples before committing to supplier',detail:'Always test 2-3 suppliers. Check shipping, packaging, quality.',cat:'sourcing',rule:'Order 3 samples minimum\nKILL supplier IF: shipping > 15 days',sources:['Wholesale Ted','Verum Ecom'],conf:95,status:'verified'},
  {tactic:'3-email abandoned cart sequence',detail:'Email 1: 1h (reminder). Email 2: 24h (social proof). Email 3: 48h (discount).',cat:'email',rule:'Set up in Klaviyo\nSCALE IF: recovery rate > 5%',sources:['Chase Dimond','Foundr','Ezra Firestone'],conf:90,status:'verified'},
  {tactic:'⚠️ Optimal daily ad budget for testing',detail:'CONFLICT: Wide range of recommended test budgets.',cat:'ads',rule:'A: $20-30/day per ad set (Biaheza)\nB: $50-100/day (Davie Fogarty)\nC: 2x target CPA/day (AC Hampton)',sources:['Biaheza','Davie Fogarty','AC Hampton','Jordan Welsh'],conf:-1,status:'conflict',isConflict:true},
  {tactic:'Use 3PL once hitting 30+ orders/day',detail:'Switch from agent fulfillment to 3PL for consistency and speed.',cat:'fulfillment',rule:'IF orders > 30/day for 7 days → evaluate 3PL\nTarget: < 5-day delivery',sources:['Verum Ecom','AutoDS'],conf:85,status:'verified'},
  {tactic:'TikTok Ads: use native-feel content only',detail:'Polished ads get scrolled past. Film on phone, use trending sounds, first-person POV.',cat:'creative',rule:'Shoot on iPhone, vertical 9:16\nHook in first 1.5 sec\nKILL IF: <1% CTR after 500 impressions',sources:['Sara Finance','Sebastian Ghiorghiu','Nas Academy'],conf:91,status:'verified'},
  {tactic:'Bundle offers increase AOV 20-35%',detail:'Offer "Buy 2 Get 1 Free" or bundle complementary products. Works especially well for compression wear.',cat:'store',rule:'IF AOV < $50 → test bundle offers\nSCALE IF: bundle take rate > 15%',sources:['Davie Fogarty','Foundr','Ezra Firestone'],conf:87,status:'verified'},
  {tactic:'Retarget with social proof creative',detail:'Show UGC reviews, unboxing, before/after in retargeting. Don\'t repeat prospecting creative.',cat:'ads',rule:'Separate creative for retarget audience\nSCALE IF: ROAS > 4x on retarget',sources:['AC Hampton','Jordan Welsh','Arie Scherson'],conf:89,status:'verified'},
  {tactic:'SMS welcome flow converts 3x email',detail:'First SMS within 5 min of signup. Keep it personal, include discount code.',cat:'email',rule:'Use Postscript or Klaviyo SMS\nOpt-in required\nSCALE IF: SMS revenue > 5% of total',sources:['Chase Dimond','Postscript blog'],conf:82,status:'suggested'},
  {tactic:'⚠️ CBO vs ABO for testing',detail:'CONFLICT: Creators split on campaign structure for initial tests.',cat:'ads',rule:'A: ABO for testing, CBO for scaling (Biaheza)\nB: CBO from day 1, let Meta optimize (AC Hampton)',sources:['Biaheza','AC Hampton','Davie Fogarty'],conf:-1,status:'conflict',isConflict:true},
  {tactic:'Product page: benefits > features',detail:'Lead with outcomes, not specs. "Flatten your tummy in 30 days" > "High-compression nylon blend".',cat:'store',rule:'Rewrite all product copy\nUse before/after framing\nA/B test headline variants',sources:['Ezra Firestone','Foundr','Wholesale Ted','Jordan Welsh'],conf:93,status:'verified'},
  {tactic:'Free shipping threshold lifts AOV 10-15%',detail:'Set free shipping at 1.3x current AOV. Forces multi-item carts.',cat:'store',rule:'IF AOV=$39 → set free shipping at $49\nMonitor cart abandonment rate',sources:['Davie Fogarty','Wholesale Ted','Foundr'],conf:86,status:'verified'},
  {tactic:'Winning product criteria checklist',detail:'Wow factor, solves a problem, <$30 COGS, 3x markup possible, lightweight for shipping.',cat:'sourcing',rule:'Must pass 4/5 criteria to proceed\nKILL product IF: margins < 2.5x after all costs',sources:['Biaheza','Sara Finance','Sebastian Ghiorghiu','Verum Ecom'],conf:94,status:'verified'},
  {tactic:'Advantage+ Shopping campaigns (ASC)',detail:'Meta\'s AI-driven campaign type. Less manual control but often better performance at scale.',cat:'ads',rule:'IF scaling past $500/day → test ASC\nAllocate 30% of budget to ASC\nSCALE IF: ASC ROAS > manual campaigns',sources:['AC Hampton','Davie Fogarty','Jordan Welsh'],conf:88,status:'verified'},
  {tactic:'Hook rate is the #1 metric for video ads',detail:'First 3 seconds determine everything. Track thumb-stop ratio (hook rate) not just CTR.',cat:'creative',rule:'Target hook rate > 25%\nKILL creative IF: hook rate < 15%\nTest 5 hooks per winning body',sources:['Biaheza','Sara Finance','Sebastian Ghiorghiu'],conf:94,status:'verified'},
  {tactic:'Use post-purchase upsell for +15% AOV',detail:'Show complementary product on thank-you page. "Add X for $19 — one click, no re-entering payment."',cat:'store',rule:'Set up via ReConvert or AfterSell\nSCALE IF: upsell take rate > 8%',sources:['Ezra Firestone','Foundr'],conf:84,status:'suggested'},
  {tactic:'Review request email at Day 7',detail:'Ask for product review 7 days after delivery. Offer 10% off next purchase as incentive.',cat:'email',rule:'Automate in Klaviyo\nGoal: 5-10% review rate\nUse reviews in ad creative',sources:['Chase Dimond','Foundr'],conf:86,status:'verified'},
  {tactic:'⚠️ Broad vs interest targeting for new products',detail:'CONFLICT: When to use each approach for product launch.',cat:'ads',rule:'A: Always start broad (Davie Fogarty, AC Hampton)\nB: Start interest-based, graduate to broad (Biaheza)',sources:['Davie Fogarty','AC Hampton','Biaheza'],conf:-1,status:'conflict',isConflict:true},
  {tactic:'Dynamic creative testing (DCT)',detail:'Upload 5 images, 5 headlines, 5 body texts. Meta tests all combinations automatically.',cat:'creative',rule:'Use for initial testing phase\nSwitch to manual ad sets for scaling\nMinimum 3-day test',sources:['AC Hampton','Jordan Welsh'],conf:82,status:'verified'},
  {tactic:'Offer free shipping over threshold',detail:'Calculate 1.3x current AOV. Set that as free shipping minimum. Watch AOV climb.',cat:'store',rule:'IF AOV=$42 → free shipping at $55\nMonitor cart abandonment\nKILL IF: abandonment rises >10%',sources:['Davie Fogarty','Wholesale Ted','Foundr'],conf:86,status:'verified'},
  {tactic:'Exit-intent popup with 10% discount',detail:'Show popup when cursor moves to close tab. Mobile: show after 30 seconds. Collect email + offer discount.',cat:'store',rule:'Use Privy or Klaviyo popup\nTarget 3-5% opt-in rate\nDon\'t show to returning visitors who already opted in',sources:['Foundr','Wholesale Ted'],conf:83,status:'suggested'},
  {tactic:'Test video vs static on TikTok',detail:'TikTok prioritizes video but carousel ads are gaining traction. Test both formats.',cat:'creative',rule:'Run 50/50 budget split\n3-day test minimum\nSCALE winner by 2x',sources:['Nas Academy','Sebastian Ghiorghiu'],conf:78,status:'suggested'},
  {tactic:'Use branded tracking page',detail:'Replace default carrier tracking with branded page. Cross-sell products while customer waits for delivery.',cat:'fulfillment',rule:'Use Aftership or Track123\nAdd 3-4 recommended products\nGoal: 2-3% click-through on tracking page',sources:['Verum Ecom','AutoDS'],conf:79,status:'suggested'},
  {tactic:'Retarget cart abandoners within 1 hour',detail:'Fastest follow-up wins. Retarget with the exact product they left behind + social proof.',cat:'ads',rule:'Create custom audience: ATC but no purchase, last 3 days\nBudget: 15-20% of total ad spend\nSCALE IF: ROAS > 5x',sources:['AC Hampton','Jordan Welsh','Arie Scherson'],conf:91,status:'verified'},
  {tactic:'Optimize product images for mobile',detail:'67% of ecommerce traffic is mobile. First image must show product clearly at small size. Use lifestyle shots 2-4.',cat:'store',rule:'Test square vs portrait images\nFirst image: product on white background\nImages 2-5: lifestyle, scale, packaging',sources:['Foundr','Wholesale Ted','Ezra Firestone'],conf:88,status:'verified'},
  {tactic:'Use Shopify Checkout Extensibility',detail:'Customize checkout page: add trust badges, timer, upsell. Only on Shopify Plus or newer checkout.',cat:'store',rule:'Add: trust badges, delivery estimate, express checkout\nSCALE IF: checkout CR improves >5%',sources:['Foundr','Ezra Firestone'],conf:80,status:'suggested'},
  {tactic:'⚠️ When to switch from dropshipping to 3PL',detail:'CONFLICT: Different thresholds recommended for when to make the switch.',cat:'fulfillment',rule:'A: At 30+ orders/day (Verum Ecom)\nB: At 100+ orders/day (Sebastian Ghiorghiu)\nC: When shipping complaints > 5% (AutoDS)',sources:['Verum Ecom','Sebastian Ghiorghiu','AutoDS'],conf:-1,status:'conflict',isConflict:true},
  {tactic:'Lookalike audience from purchasers',detail:'Create 1% lookalike from purchase pixel events. Most valuable custom audience for scaling.',cat:'ads',rule:'Need minimum 100 purchases for good data\nTest 1%, 2%, 5% lookalikes\nKILL IF: LLA CPM > 2x broad targeting',sources:['Biaheza','AC Hampton','Jordan Welsh'],conf:90,status:'verified'},
];

const kbCategories=['all','ads','creative','store','sourcing','fulfillment','email','conflict'];
let kbCatFilter='all';

function renderKBFilters(){
  const labels={all:'All',ads:'Meta Ads',creative:'Creatives',store:'Store CRO',sourcing:'Sourcing',fulfillment:'Fulfillment',email:'Email/SMS',conflict:'⚠️ Conflicts'};
  const counts={};kbCategories.forEach(c=>{
    counts[c]=c==='all'?kbData.length:c==='conflict'?kbData.filter(t=>t.isConflict).length:kbData.filter(t=>t.cat===c).length;
  });
  $('#kb-filters').innerHTML=kbCategories.map(c=>`<button class="filter-chip${kbCatFilter===c?' active':''}" onclick="kbCatFilter='${c}';renderKBFilters();renderKB()">${labels[c]} <span style="opacity:.6">${counts[c]}</span></button>`).join('');
}

function renderKB(){
  const q=($('#kb-search').value||'').toLowerCase();
  let filtered=kbData;
  if(kbCatFilter==='conflict')filtered=filtered.filter(t=>t.isConflict);
  else if(kbCatFilter!=='all')filtered=filtered.filter(t=>t.cat===kbCatFilter);
  if(q)filtered=filtered.filter(t=>(t.tactic+t.detail+t.sources.join('')+t.rule).toLowerCase().includes(q));
  const conflicts=filtered.filter(t=>t.isConflict).length;
  $('#kb-count').textContent=`${filtered.length} tactics · ${kbData.length-kbData.filter(t=>t.isConflict).length} sources · ${kbData.filter(t=>t.isConflict).length} conflicts`;
  $('#kb-tbody').innerHTML=filtered.map(t=>{
    const confHtml=t.conf<0?`<span class="confidence med">● Split</span>`:`<span class="confidence ${t.conf>=85?'high':t.conf>=60?'med':'low'}">● ${t.conf}%</span>`;
    const statusMap={verified:`<span class="card-tag tag-agent" style="font-size:10.5px">Verified</span>`,conflict:`<span class="conflict-badge">⚠ Test</span>`,suggested:`<span class="card-tag tag-source" style="font-size:10.5px">Suggested</span>`};
    return `<tr data-cat="${t.cat}${t.isConflict?' conflict':''}">
      <td><strong style="font-size:12.5px">${t.tactic}</strong><br><span style="color:var(--text-dim);font-size:11px">${t.detail}</span></td>
      <td style="font-size:12px;text-transform:capitalize">${t.cat}</td>
      <td style="font-size:11.5px;color:var(--text-dim);white-space:pre-line;max-width:220px">${t.rule}</td>
      <td>${t.sources.map(s=>`<span class="source-badge">${s}</span>`).join(' ')}</td>
      <td>${confHtml}<br><span style="font-size:10px;color:var(--text-muted)">${t.sources.length} sources</span></td>
      <td>${statusMap[t.status]||''}</td>
    </tr>`;
  }).join('');
}

function openAddTacticModal(){
  openModal(`<h3>+ Add Tactic</h3>
    <label>Tactic name</label><input id="at-name" placeholder="e.g., Use broad targeting on Meta">
    <label>Detail</label><textarea id="at-detail" placeholder="Context, nuance, when to use..."></textarea>
    <label>Category</label><select id="at-cat"><option value="ads">Meta Ads</option><option value="creative">Creatives</option><option value="store">Store CRO</option><option value="sourcing">Sourcing</option><option value="fulfillment">Fulfillment</option><option value="email">Email/SMS</option></select>
    <label>Decision rule</label><textarea id="at-rule" placeholder="IF ... → THEN ...\nKILL IF: ...\nSCALE IF: ..."></textarea>
    <label>Sources (comma-separated)</label><input id="at-src" placeholder="e.g., Biaheza, Jordan Welsh">
    <label>Confidence (0-100)</label><input id="at-conf" type="number" value="80" min="0" max="100">
    <div class="modal-actions"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-primary" onclick="addTactic()">Add</button></div>`);
}

function addTactic(){
  kbData.unshift({tactic:$('#at-name').value||'New tactic',detail:$('#at-detail').value||'',cat:$('#at-cat').value,rule:$('#at-rule').value||'',sources:($('#at-src').value||'Manual').split(',').map(s=>s.trim()),conf:parseInt($('#at-conf').value)||80,status:'suggested'});
  closeModal();renderKBFilters();renderKB();
}

/* ===== PLAYBOOKS ===== */
const playbooks=[
  {icon:'🎯',title:'Meta Ads: Testing → Scaling',desc:'Full framework from $0 → first profitable campaign. Creative testing, audience structure, budget rules, kill criteria.',sources:8,decisions:12,kills:5,conflicts:2,
    nodes:['Creative testing','Audience test','CBO scale','Horizontal scale','Retention loop'],active:2,
    tree:{id:'start',q:'Do you have winning creatives?',yes:{id:'has_creative',q:'CPM below $25?',
      yes:{id:'good_cpm',q:'Getting purchases?',
        yes:{id:'profitable',q:'ROAS > 2.5x for 72h?',
          yes:{id:'scale',action:'🚀 SCALE: Increase budget 20% every 48h. Duplicate to new ad sets.',color:'var(--green)',kill:'KILL IF: ROAS drops below 1.8x after scale'},
          no:{id:'wait',action:'⏳ WAIT: Let it run 48-96h more. Algorithm needs 50 conversions to optimize.',color:'var(--orange)',kill:'KILL IF: No improvement after 5 days'}},
        no:{id:'no_purchase',q:'Spent more than 2x target CPA?',
          yes:{id:'kill_ad',action:'🔴 KILL: Pause this ad set. Test new creative or audience.',color:'var(--red)',kill:'Move budget to next test'},
          no:{id:'keep_testing',action:'⏳ WAIT: Not enough data yet. Need at least $50-75 spend per ad set.',color:'var(--orange)'}}},
      no:{id:'high_cpm',action:'🔄 SWITCH: Move from interest targeting to Advantage+ Broad. CPM should drop 30-50%.',color:'var(--blue)',kill:'KILL IF: CPM still > $30 after 48h on broad'}},
    no:{id:'no_creative',q:'Budget for UGC creators?',
      yes:{id:'ugc',action:'📹 CREATE: Hire 3 UGC creators ($50-150 each). Brief: 3-sec hook + problem/solution + CTA. Film on phone.',color:'var(--accent)'},
      no:{id:'diy',action:'📱 DIY: Film 5 variations yourself. iPhone + natural light. Test hooks: before/after, unboxing, POV wearing.',color:'var(--accent)'}}}},
  {icon:'📱',title:'TikTok Ads: Launch Playbook',desc:'Native content strategy, Spark Ads setup, audience targeting, scaling triggers specific to TikTok\'s algorithm.',sources:5,decisions:8,kills:4,conflicts:1,
    nodes:['Content creation','Spark Ads','Audience test','Scale','Cross-platform'],active:1,
    tree:{id:'tt_start',q:'Have native-feel video content?',
      yes:{id:'tt_content',q:'Using Spark Ads?',
        yes:{id:'tt_spark',q:'CTR above 1%?',
          yes:{id:'tt_good',q:'CPA below target?',
            yes:{id:'tt_scale',action:'🚀 SCALE: Increase budget 30% daily. TikTok scales faster than Meta.',color:'var(--green)',kill:'KILL IF: CPA rises 50% after scale'},
            no:{id:'tt_optimize',action:'🔄 OPTIMIZE: Test different audiences. Try broad, then interest-based. Change thumbnail.',color:'var(--blue)'}},
          no:{id:'tt_low_ctr',action:'🔴 NEW HOOK: First 1.5 sec isn\'t working. Film 5 new hooks. Use trending sounds.',color:'var(--red)',kill:'KILL IF: CTR < 0.8% after 3 hook tests'}},
        no:{id:'tt_no_spark',action:'⚡ SETUP SPARK: Post content organically first. Let it get some engagement. Then boost via Spark Ads for authenticity signal.',color:'var(--accent)'}},
      no:{id:'tt_no_content',action:'📱 FILM NOW: TikTok = phone-shot only. Use trending sounds. POV format. Show transformation. 15-30 sec max.',color:'var(--accent)'}}},
  {icon:'🏪',title:'Store CRO Checklist',desc:'Every conversion lever for Shopify. Mobile-first, trust signals, urgency, checkout optimization.',sources:6,decisions:18,kills:3,conflicts:1,
    nodes:['Hero section','Trust signals','Urgency','Checkout','Post-purchase'],active:3,
    tree:{id:'cro_start',q:'Mobile conversion rate > 2%?',
      yes:{id:'cro_ok',q:'AOV above $45?',
        yes:{id:'cro_good',q:'Cart abandonment < 70%?',
          yes:{id:'cro_optimize',action:'✅ OPTIMIZE: A/B test headlines, images, CTAs. Small gains compound. Target 3.5%+ CR.',color:'var(--green)'},
          no:{id:'cro_cart',action:'🛒 FIX CART: Add trust badges at checkout. Show shipping cost early. Add express checkout (Shop Pay, Apple Pay).',color:'var(--orange)',kill:'KILL layout IF: abandonment doesn\'t drop 10% in 7 days'}},
        no:{id:'cro_aov',action:'💰 BOOST AOV: Add bundle offers ("Buy 2 Get 1"). Set free shipping at 1.3x current AOV. Add post-purchase upsell.',color:'var(--blue)'}},
      no:{id:'cro_low',q:'Using urgency elements?',
        yes:{id:'cro_trust',action:'🛡️ ADD TRUST: Money-back guarantee badge, reviews above fold, "X people viewing" social proof, secure payment icons.',color:'var(--accent)'},
        no:{id:'cro_urgency',action:'⏰ ADD URGENCY: Countdown timer, low-stock badge ("Only 3 left!"), recent purchase notifications. Est. +15-30% CR lift.',color:'var(--accent)',kill:'A/B test for 7 days before committing'}}}},
  {icon:'📦',title:'Product Sourcing Pipeline',desc:'Trend detection → supplier lock-in. Winning Hunter workflow, sample protocol, margin calculator.',sources:5,decisions:8,kills:4,conflicts:0,
    nodes:['Trend scan','Validate demand','Sample & test','Supplier lock','Launch'],active:1,
    tree:{id:'src_start',q:'Found a trending product?',
      yes:{id:'src_trend',q:'Passes 4/5 criteria? (Wow factor, solves problem, <$30 COGS, 3x markup, lightweight)',
        yes:{id:'src_valid',q:'Ordered samples?',
          yes:{id:'src_sample',q:'Sample quality acceptable?',
            yes:{id:'src_lock',action:'🔒 LOCK SUPPLIER: Negotiate MOQ, agree on packaging, set up auto-ordering. Launch test campaign at $30/day.',color:'var(--green)'},
            no:{id:'src_new',action:'🔄 NEW SUPPLIER: Try 2 more suppliers from CJ/Teemdrop. Compare shipping times, quality, packaging.',color:'var(--orange)'}},
          no:{id:'src_order',action:'📦 ORDER SAMPLES: 3 different suppliers. Budget $30-50 total. Check: shipping time, packaging, product quality, weight.',color:'var(--accent)'}},
        no:{id:'src_fail',action:'🔴 SKIP: Product doesn\'t meet criteria. Go back to trend scanning. Don\'t force it.',color:'var(--red)',kill:'Move on immediately'}},
      no:{id:'src_scan',action:'🔍 SCAN: Check Winning Hunter daily, browse TikTok trending, monitor Meta Ad Library. Look for products with <6 months of ad history.',color:'var(--accent)'}}},
  {icon:'📧',title:'Email/SMS Revenue Engine',desc:'Klaviyo flows: welcome, abandoned cart, post-purchase, winback. SMS for flash sales. Target 25-30% from owned channels.',sources:4,decisions:6,kills:2,conflicts:0,
    nodes:['Welcome flow','Cart abandon','Post-purchase','Winback','VIP segment'],active:1,
    tree:{id:'em_start',q:'Have email collection set up?',
      yes:{id:'em_collect',q:'Abandoned cart flow active?',
        yes:{id:'em_cart',q:'Recovery rate above 5%?',
          yes:{id:'em_expand',action:'📧 EXPAND: Add post-purchase flow (review request day 7, cross-sell day 14, VIP offer day 30). Then build winback for 60-day inactive.',color:'var(--green)'},
          no:{id:'em_fix',action:'🔧 FIX FLOW: Email 1 (1h): simple reminder. Email 2 (24h): add social proof/reviews. Email 3 (48h): 10% discount. Test subject lines.',color:'var(--orange)'}},
        no:{id:'em_setup',action:'⚡ SETUP NOW: This is free money. 3-email abandoned cart flow in Klaviyo. Takes 30 min. Recovers 5-15% of abandonments.',color:'var(--accent)',kill:'Must be live before scaling ad spend'}},
      no:{id:'em_none',action:'📋 COLLECT: Add popup (show after 5 sec, offer 10% off). Add footer signup. Add checkout opt-in. Goal: 3-5% of visitors join list.',color:'var(--accent)'}}},
  {icon:'💰',title:'Unit Economics Dashboard',desc:'Real-time P&L per product. COGS, shipping, ads, fees, returns. Auto-alert when margin drops below threshold.',sources:3,decisions:4,kills:2,conflicts:0,
    nodes:['Revenue','COGS','Ad spend','Fees','Net margin'],active:3,
    tree:{id:'ue_start',q:'Contribution margin > 20%?',
      yes:{id:'ue_healthy',q:'ROAS > 2.5x?',
        yes:{id:'ue_scale',action:'🚀 HEALTHY: Scale confidently. Monitor weekly. Set alert if margin drops below 15%.',color:'var(--green)'},
        no:{id:'ue_roas',action:'📢 FIX ADS: Margin is fine but ad efficiency is low. Test new creatives, audiences, or platforms (TikTok if not tried).',color:'var(--orange)'}},
      no:{id:'ue_low',q:'Can reduce COGS?',
        yes:{id:'ue_cogs',action:'💰 NEGOTIATE: Ask supplier for volume discount. Try alternative suppliers. Consider private label for 20-40% COGS reduction.',color:'var(--blue)',kill:'KILL product IF: margin stays < 15% after negotiation'},
        no:{id:'ue_price',action:'💲 RAISE PRICE: Test $5-10 price increase. If CR drops < 10%, the higher price wins. Also test bundles for AOV lift.',color:'var(--orange)',kill:'KILL product IF: contribution margin < 10% after all optimizations'}}}},
];

function renderPlaybooks(){
  $('#playbook-grid').innerHTML=playbooks.map(p=>`<div class="playbook-card" onclick="openPlaybookDetail('${p.title}')">
    <div class="playbook-icon">${svgIcon(p.icon,26)}</div>
    <div class="playbook-title">${p.title}</div>
    <div class="playbook-desc">${p.desc}</div>
    <div class="playbook-meta">
      <div class="playbook-stat">Sources: <span>${p.sources}</span></div>
      <div class="playbook-stat">Decisions: <span>${p.decisions}</span></div>
      <div class="playbook-stat">Kill rules: <span>${p.kills}</span></div>
      ${p.conflicts?`<div class="playbook-stat">Conflicts: <span style="color:var(--orange)">${p.conflicts}</span></div>`:''}
    </div>
    <div class="node-flow">${p.nodes.map((n,i)=>`<div class="node${i<p.active?' active':''}">${n}</div>${i<p.nodes.length-1?'<div class="node-arrow">→</div>':''}`).join('')}</div>
  </div>`).join('');
}

function openPlaybookDetail(title){
  const p=playbooks.find(x=>x.title===title);if(!p)return;
  openModal(`<div style="max-width:600px">
    <h3>${svgIcon(p.icon,20)} ${p.title}</h3>
    <p style="font-size:12.5px;color:var(--text-dim);line-height:1.5;margin-bottom:14px">${p.desc}</p>
    <div style="display:flex;gap:16px;margin-bottom:14px;flex-wrap:wrap">
      <div><span style="font-size:10.5px;color:var(--text-muted)">Sources</span><div style="font-size:18px;font-weight:700">${p.sources}</div></div>
      <div><span style="font-size:10.5px;color:var(--text-muted)">Decisions</span><div style="font-size:18px;font-weight:700">${p.decisions}</div></div>
      <div><span style="font-size:10.5px;color:var(--text-muted)">Kill rules</span><div style="font-size:18px;font-weight:700">${p.kills}</div></div>
    </div>
    <div style="font-size:12px;font-weight:600;margin-bottom:10px;color:var(--accent)">▶ Interactive Decision Tree — click to navigate</div>
    <div id="tree-container"></div>
    <div class="modal-actions" style="margin-top:16px"><button class="btn btn-ghost" onclick="closeModal()">Close</button><button class="btn btn-primary" onclick="alert('Executing playbook on your store...');closeModal()">▶ Execute playbook</button></div>
  </div>`);
  _treeRoot=p.tree.id;renderTreeNode(p.tree.id);
}

// Store tree nodes by id for safe lookup
const _treeNodes={};
function indexTreeNodes(node){if(!node)return;_treeNodes[node.id]=node;if(node.yes)indexTreeNodes(node.yes);if(node.no)indexTreeNodes(node.no)}
playbooks.forEach(p=>{if(p.tree)indexTreeNodes(p.tree)});

let _treeRoot=null;
function renderTreeNode(nodeOrId){
  const node=typeof nodeOrId==='string'?_treeNodes[nodeOrId]:nodeOrId;
  if(!node)return;
  const container=$('#tree-container');if(!container)return;
  if(node.action){
    container.innerHTML=`<div style="background:${node.color}15;border:1px solid ${node.color}30;border-radius:var(--radius);padding:16px;margin-bottom:8px;animation:fadeIn .2s ease">
      <div style="font-size:13px;font-weight:600;margin-bottom:6px;color:${node.color}">${node.action}</div>
      ${node.kill?`<div style="font-size:11px;color:var(--red);margin-top:8px;padding:6px 10px;background:rgba(255,77,77,.08);border-radius:var(--radius-xs);border:1px solid rgba(255,77,77,.12)">🔴 ${node.kill}</div>`:''}
    </div>
    <button class="btn btn-ghost btn-sm" onclick="renderTreeNode(_treeRoot)" style="margin-top:8px">↩ Start over</button>`;
    return;
  }
  container.innerHTML=`<div style="background:var(--card);border:1px solid var(--border);border-radius:var(--radius);padding:16px;margin-bottom:8px;animation:fadeIn .2s ease">
    <div style="font-size:13px;font-weight:600;margin-bottom:12px">${node.q}</div>
    <div style="display:flex;gap:8px">
      <button class="btn btn-primary" style="flex:1" onclick="renderTreeNode('${node.yes?.id}')">✅ Yes</button>
      <button class="btn btn-ghost" style="flex:1" onclick="renderTreeNode('${node.no?.id}')">❌ No</button>
    </div>
  </div>`;
}

/* ===== CASH FLOW ===== */
const cfData={
  7:{revenue:125000,channels:{meta:75000,tiktok:31250,google:12500,organic:6250},
    adSpend:48750,adBreak:{prospecting:29250,retargeting:14625,lookalike:4875},
    cogs:35000,cogsBreak:{product:28000,packaging:4200,samples:2800},
    shipping:10625,shipBreak:{standard:7438,express:3187},
    fees:4375,apps:2188,returns:3750,tax:6250,
  },
  30:{revenue:500000,channels:{meta:300000,tiktok:125000,google:50000,organic:25000},
    adSpend:195000,adBreak:{prospecting:117000,retargeting:58500,lookalike:19500},
    cogs:140000,cogsBreak:{product:112000,packaging:16800,samples:11200},
    shipping:42500,shipBreak:{standard:29750,express:12750},
    fees:17500,apps:8750,returns:15000,tax:25000,
  },
  90:{revenue:1400000,channels:{meta:840000,tiktok:350000,google:140000,organic:70000},
    adSpend:546000,adBreak:{prospecting:327600,retargeting:163800,lookalike:54600},
    cogs:392000,cogsBreak:{product:313600,packaging:47040,samples:31360},
    shipping:119000,shipBreak:{standard:83300,express:35700},
    fees:49000,apps:24500,returns:42000,tax:70000,
  }
};

let cfPeriod=30;
function setCfPeriod(d,el){cfPeriod=d;$$('.period-btn').forEach(b=>b.classList.remove('active-period'));el.classList.add('active-period');renderCashFlow()}

function renderCashFlow(){
  let d=JSON.parse(JSON.stringify(cfData[cfPeriod]));
  // Before/After projection
  if(showBeforeAfter){
    d.revenue=Math.round(d.revenue*1.22);
    d.channels.meta=Math.round(d.channels.meta*1.2);
    d.channels.tiktok=Math.round(d.channels.tiktok*1.3);
    d.channels.google=Math.round(d.channels.google*1.15);
    d.channels.organic=Math.round(d.channels.organic*1.25);
    d.adSpend=Math.round(d.adSpend*0.85); // better CPMs
    d.adBreak.prospecting=Math.round(d.adBreak.prospecting*0.85);
    d.adBreak.retargeting=Math.round(d.adBreak.retargeting*0.85);
    d.adBreak.lookalike=Math.round(d.adBreak.lookalike*0.85);
    d.returns=Math.round(d.returns*0.7);
  }
  const totalExp=d.adSpend+d.cogs+d.shipping+d.fees+d.apps+d.returns;
  const profit=d.revenue-totalExp;
  const pat=profit-d.tax;
  const reinvest=Math.round(pat*.6);
  const takeHome=pat-reinvest;
  const margin=(pat/d.revenue*100).toFixed(1);
  const roas=(d.revenue/d.adSpend).toFixed(2);
  const orders=Math.round(d.revenue/42);
  const cpa=(d.adSpend/orders).toFixed(2);

  // Summary cards
  const cards=[
    {l:'Revenue',v:fmt(d.revenue),c:'var(--green)'},
    {l:'Ad Spend',v:fmt(d.adSpend),c:'var(--red)'},
    {l:'COGS',v:fmt(d.cogs),c:'var(--orange)'},
    {l:'Net Profit',v:fmt(pat),c:pat>0?'var(--accent)':'var(--red)'},
    {l:'Net Margin',v:margin+'%',c:margin>10?'var(--accent)':'var(--orange)'},
    {l:'ROAS',v:roas+'x',c:roas>2?'var(--green)':'var(--red)'},
    {l:'CPA',v:'$'+cpa,c:'var(--blue)'},
  ];
  $('#cf-summary').innerHTML=cards.map(c=>`<div style="background:var(--card);border:1px solid var(--border);border-radius:var(--radius);padding:14px 16px;flex:1;min-width:130px">
    <div style="font-size:10.5px;color:var(--text-dim)">${c.l}</div>
    <div style="font-size:20px;font-weight:700;color:${c.c};margin-top:4px">${c.v}</div>
  </div>`).join('');

  // Table
  const rows=[
    {cat:'💰 Revenue',item:'Meta Ads Sales',amt:d.channels.meta,trend:'↑',src:'Shopify'},
    {cat:'',item:'TikTok Ads Sales',amt:d.channels.tiktok,trend:'↑',src:'Shopify'},
    {cat:'',item:'Google Ads Sales',amt:d.channels.google,trend:'↑',src:'Shopify'},
    {cat:'',item:'Organic / Direct',amt:d.channels.organic,trend:'→',src:'Shopify'},
    {cat:'📢 Ad Spend',item:'Prospecting',amt:-d.adBreak.prospecting,trend:'↑',src:'Meta + TikTok'},
    {cat:'',item:'Retargeting',amt:-d.adBreak.retargeting,trend:'→',src:'Meta + TikTok'},
    {cat:'',item:'Lookalike',amt:-d.adBreak.lookalike,trend:'↓',src:'Meta'},
    {cat:'📦 COGS',item:'Product Cost',amt:-d.cogsBreak.product,trend:'→',src:'Teemdrop'},
    {cat:'',item:'Packaging',amt:-d.cogsBreak.packaging,trend:'→',src:'Teemdrop'},
    {cat:'🚚 Shipping',item:'Standard',amt:-d.shipBreak.standard,trend:'→',src:'Teemdrop'},
    {cat:'',item:'Express',amt:-d.shipBreak.express,trend:'↑',src:'Teemdrop'},
    {cat:'💳 Fees',item:'Payment Processing',amt:-d.fees,trend:'→',src:'Stripe'},
    {cat:'',item:'Apps & Tools',amt:-d.apps,trend:'→',src:'Shopify'},
    {cat:'↩️ Returns',item:'Refunds & Chargebacks',amt:-d.returns,trend:'↓',src:'Shopify'},
    {cat:'🏛️ Tax',item:'Tax Reserve',amt:-d.tax,trend:'→',src:'Calculated'},
    {cat:'✅ Net',item:'Net Profit After Tax',amt:pat,trend:pat>0?'↑':'↓',src:'Calculated',bold:true},
  ];
  $('#cf-tbody').innerHTML=rows.map(r=>{
    const color=r.amt>0?'var(--green)':'var(--red)';
    const amtStr=r.amt>0?'+'+fmt(r.amt):'-'+fmt(Math.abs(r.amt));
    const tc=r.trend==='↑'?'var(--green)':r.trend==='↓'?'var(--red)':'var(--text-dim)';
    return `<tr${r.bold?' style="font-weight:700;border-top:2px solid var(--border)"':''}>
      <td>${r.cat}</td><td>${r.item}</td>
      <td style="text-align:right;color:${color};font-weight:600;font-family:'SF Mono',monospace;font-size:12px">${amtStr}</td>
      <td style="text-align:right;color:var(--text-dim);font-size:11.5px">${r.amt!==0?pct(Math.abs(r.amt),d.revenue):''}</td>
      <td style="color:${tc};font-size:15px;text-align:center">${r.trend}</td>
      <td><span class="source-badge">${r.src}</span></td>
    </tr>`;
  }).join('');

  drawSankey(d,totalExp,profit,pat,reinvest,takeHome);
}

function drawSankey(d,totalExp,profit,pat,reinvest,takeHome){
  const svg=$('#sankey-svg');
  const W=1160,H=520;
  svg.setAttribute('viewBox',`0 0 ${W} ${H}`);
  svg.innerHTML='';
  const ns='http://www.w3.org/2000/svg';
  const el=(tag,attrs)=>{const e=document.createElementNS(ns,tag);Object.entries(attrs||{}).forEach(([k,v])=>e.setAttribute(k,v));return e};

  const defs=el('defs');svg.appendChild(defs);

  const nodeData=[
    {id:'Meta Ads',col:0,val:d.channels.meta,color:'#4da6ff'},
    {id:'TikTok Ads',col:0,val:d.channels.tiktok,color:'#ff6b9d'},
    {id:'Google Ads',col:0,val:d.channels.google,color:'#ffd93d'},
    {id:'Organic',col:0,val:d.channels.organic,color:'#2ed573'},
    {id:'Revenue',col:1,val:d.revenue,color:'#2ed573'},
    {id:'Expenses',col:2,val:totalExp,color:'#ff6b6b'},
    {id:'Profit',col:2,val:profit,color:'#c8ff00'},
    {id:'COGS',col:3,val:d.cogs,color:'#ff9f43'},
    {id:'Marketing',col:3,val:d.adSpend,color:'#ff4d4d'},
    {id:'Subscriptions',col:3,val:d.apps,color:'#a855f7'},
    {id:'Payment Fees',col:3,val:d.fees,color:'#4da6ff'},
    {id:'Tax / Legal',col:3,val:d.tax+d.returns,color:'#888'},
    {id:'Shipping',col:3,val:d.shipping,color:'#ffd93d'},
    {id:'Profit After Tax',col:4,val:pat,color:'#c8ff00'},
    {id:'Reinvest',col:5,val:reinvest,color:'#4da6ff'},
    {id:'Take Home',col:5,val:takeHome,color:'#2ed573'},
  ];

  const links=[
    {s:'Meta Ads',t:'Revenue',v:d.channels.meta},
    {s:'TikTok Ads',t:'Revenue',v:d.channels.tiktok},
    {s:'Google Ads',t:'Revenue',v:d.channels.google},
    {s:'Organic',t:'Revenue',v:d.channels.organic},
    {s:'Revenue',t:'Expenses',v:totalExp},
    {s:'Revenue',t:'Profit',v:profit},
    {s:'Expenses',t:'COGS',v:d.cogs},
    {s:'Expenses',t:'Marketing',v:d.adSpend},
    {s:'Expenses',t:'Subscriptions',v:d.apps},
    {s:'Expenses',t:'Payment Fees',v:d.fees},
    {s:'Expenses',t:'Tax / Legal',v:d.tax+d.returns},
    {s:'Expenses',t:'Shipping',v:d.shipping},
    {s:'Profit',t:'Profit After Tax',v:pat},
    {s:'Profit After Tax',t:'Reinvest',v:reinvest},
    {s:'Profit After Tax',t:'Take Home',v:takeHome},
  ];

  // Layout
  const pad={l:40,r:40,t:30,b:20};
  const colCount=6;
  const colW=(W-pad.l-pad.r)/colCount;
  const nW=26;
  const usableH=H-pad.t-pad.b;
  const nodePad=10;

  const byCols={};
  nodeData.forEach(n=>(byCols[n.col]=byCols[n.col]||[]).push(n));

  Object.values(byCols).forEach(group=>{
    const totalVal=group.reduce((s,n)=>s+n.val,0);
    const totalPadding=(group.length-1)*nodePad;
    const availH=usableH-totalPadding;
    let cy=pad.t;
    group.forEach(n=>{
      n.h=Math.max(10,n.val/totalVal*availH);
      n.x=pad.l+n.col*colW+(colW-nW)/2;
      n.y=cy;n.w=nW;
      cy+=n.h+nodePad;
    });
    const totalH=cy-nodePad-pad.t;
    const off=(usableH-totalH)/2;
    group.forEach(n=>n.y+=off);
  });

  const nodeMap={};nodeData.forEach(n=>nodeMap[n.id]=n);

  // Draw links
  const srcOff={},tgtOff={};
  nodeData.forEach(n=>{srcOff[n.id]=0;tgtOff[n.id]=0});

  links.forEach((l,i)=>{
    const sn=nodeMap[l.s],tn=nodeMap[l.t];
    const sTotal=links.filter(x=>x.s===l.s).reduce((a,x)=>a+x.v,0);
    const tTotal=links.filter(x=>x.t===l.t).reduce((a,x)=>a+x.v,0);
    const sH=l.v/sTotal*sn.h;
    const tH=l.v/tTotal*tn.h;
    const sy=sn.y+srcOff[l.s];
    const ty=tn.y+tgtOff[l.t];
    srcOff[l.s]+=sH;tgtOff[l.t]+=tH;
    const x0=sn.x+sn.w,x1=tn.x;
    const mx=(x0+x1)/2;

    const gid='lg'+i;
    const grad=el('linearGradient',{id:gid,x1:'0%',x2:'100%'});
    grad.appendChild(el('stop',{offset:'0%','stop-color':sn.color,'stop-opacity':'0.3'}));
    grad.appendChild(el('stop',{offset:'100%','stop-color':tn.color,'stop-opacity':'0.3'}));
    defs.appendChild(grad);

    const path=el('path',{d:`M${x0},${sy}C${mx},${sy} ${mx},${ty} ${x1},${ty}L${x1},${ty+tH}C${mx},${ty+tH} ${mx},${sy+sH} ${x0},${sy+sH}Z`,fill:`url(#${gid})`});
    path.style.transition='opacity .2s';
    path.addEventListener('mouseenter',()=>path.setAttribute('fill-opacity','1.5'));
    path.addEventListener('mouseleave',()=>path.setAttribute('fill-opacity','1'));
    svg.appendChild(path);
  });

  // Draw nodes
  nodeData.forEach(n=>{
    const rect=el('rect',{x:n.x,y:n.y,width:n.w,height:n.h,rx:5,ry:5,fill:n.color,opacity:'0.85'});
    svg.appendChild(rect);

    const pctVal=(n.val/d.revenue*100).toFixed(0);
    const isRight=n.col>=3;
    const lx=isRight?n.x+n.w+8:n.x-8;
    const anchor=isRight?'start':'end';

    if(n.h>24){
      const t1=el('text',{x:lx,y:n.y+n.h/2-6,fill:'#e5e5e5','font-size':'11','font-weight':'600','font-family':'-apple-system,sans-serif','text-anchor':anchor});
      t1.textContent=`${n.id} ${pctVal}%`;svg.appendChild(t1);
      const t2=el('text',{x:lx,y:n.y+n.h/2+8,fill:n.color,'font-size':'11','font-weight':'500','font-family':'-apple-system,sans-serif','text-anchor':anchor});
      t2.textContent=fmt(n.val);svg.appendChild(t2);
    } else if(n.h>12){
      const t1=el('text',{x:lx,y:n.y+n.h/2+3.5,fill:'#ccc','font-size':'10','font-weight':'500','font-family':'-apple-system,sans-serif','text-anchor':anchor});
      t1.textContent=`${n.id} ${pctVal}% (${fmt(n.val)})`;svg.appendChild(t1);
    }
  });
}

function exportCSV(){
  const rows=[['Category','Item','Amount','% of Revenue','Source']];
  $$('#cf-tbody tr').forEach(tr=>{
    const cells=[...tr.querySelectorAll('td')];
    rows.push(cells.map(c=>c.textContent.trim()));
  });
  const csv=rows.map(r=>r.join(',')).join('\n');
  const blob=new Blob([csv],{type:'text/csv'});
  const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=`mers-cashflow-${cfPeriod}d.csv`;a.click();
}

/* ===== ANALYTICS ===== */
const anData={
  '7d':{visitors:38400,orders:980,revenue:125000,adSpend:48750,cr:2.55,aov:127.5,cpa:49.7,roas:2.56,
    revDays:[15800,16200,17100,17900,18800,19200,20000],adsDays:[6200,6400,6800,6900,7100,7300,8050],
    traffic:[{n:'Meta Ads',v:52,c:'#4da6ff'},{n:'TikTok Ads',v:22,c:'#ff6b9d'},{n:'Google',v:14,c:'#ffd93d'},{n:'Direct',v:8,c:'#2ed573'},{n:'Email',v:4,c:'#ff6b6b'}],
    products:[{n:'Compression Leggings — Black',v:32,c:'#c8ff00'},{n:'Waist Trainer Pro',v:24,c:'#4da6ff'},{n:'Compression Leggings — Navy',v:18,c:'#ff9f43'},{n:'Arm Shaper Set',v:14,c:'#a855f7'},{n:'Thigh Trimmer',v:12,c:'#2ed573'}],
    funnel:[{n:'Sessions',v:38400},{n:'Add to Cart',v:4120},{n:'Checkout',v:1980},{n:'Purchase',v:980}]},
  '30d':{visitors:152000,orders:3900,revenue:500000,adSpend:195000,cr:2.57,aov:128.2,cpa:50.0,roas:2.56,
    revDays:[14000,14500,15200,16000,15800,16500,17200,17800,16200,16800,17500,17000,16200,16800,17200,17800,18500,18200,17500,16800,16200,15800,16500,17200,18000,17800,17200,16800,16400,16000],
    adsDays:[5400,5600,5900,6200,6100,6400,6700,6900,6300,6500,6800,6600,6300,6500,6700,6900,7200,7100,6800,6500,6300,6100,6400,6700,7000,6900,6700,6500,6400,6200],
    traffic:[{n:'Meta Ads',v:50,c:'#4da6ff'},{n:'TikTok Ads',v:23,c:'#ff6b9d'},{n:'Google',v:15,c:'#ffd93d'},{n:'Direct',v:8,c:'#2ed573'},{n:'Email',v:4,c:'#ff6b6b'}],
    products:[{n:'Compression Leggings — Black',v:30,c:'#c8ff00'},{n:'Waist Trainer Pro',v:25,c:'#4da6ff'},{n:'Compression Leggings — Navy',v:19,c:'#ff9f43'},{n:'Arm Shaper Set',v:15,c:'#a855f7'},{n:'Thigh Trimmer',v:11,c:'#2ed573'}],
    funnel:[{n:'Sessions',v:152000},{n:'Add to Cart',v:16400},{n:'Checkout',v:7900},{n:'Purchase',v:3900}]},
  '90d':{visitors:445000,orders:11200,revenue:1400000,adSpend:546000,cr:2.52,aov:125.0,cpa:48.8,roas:2.56,
    revDays:[],adsDays:[],
    traffic:[{n:'Meta Ads',v:48,c:'#4da6ff'},{n:'TikTok Ads',v:25,c:'#ff6b9d'},{n:'Google',v:15,c:'#ffd93d'},{n:'Direct',v:8,c:'#2ed573'},{n:'Email',v:4,c:'#ff6b6b'}],
    products:[{n:'Compression Leggings — Black',v:29,c:'#c8ff00'},{n:'Waist Trainer Pro',v:26,c:'#4da6ff'},{n:'Compression Leggings — Navy',v:19,c:'#ff9f43'},{n:'Arm Shaper Set',v:15,c:'#a855f7'},{n:'Thigh Trimmer',v:11,c:'#2ed573'}],
    funnel:[{n:'Sessions',v:445000},{n:'Add to Cart',v:48000},{n:'Checkout',v:23000},{n:'Purchase',v:11200}]}
};
for(let i=0;i<90;i++){anData['90d'].revDays.push(13000+Math.round(Math.random()*6000));anData['90d'].adsDays.push(5000+Math.round(Math.random()*2500))}

let anPeriod='30d';
function setAnPeriod(p,el){anPeriod=p;$$('.an-period').forEach(b=>b.classList.remove('active-period'));el.classList.add('active-period');renderAnalytics()}

function renderAnalytics(){
  const d=anData[anPeriod];
  const kpis=[
    {l:'Visitors',v:d.visitors.toLocaleString(),ch:'+12%',up:true,c:'var(--blue)'},
    {l:'Orders',v:d.orders.toLocaleString(),ch:'+8%',up:true,c:'var(--green)'},
    {l:'Revenue',v:fmt(d.revenue),ch:'+15%',up:true,c:'var(--green)'},
    {l:'Ad Spend',v:fmt(d.adSpend),ch:'+5%',up:false,c:'var(--red)'},
    {l:'Conversion Rate',v:d.cr+'%',ch:'+0.1%',up:true,c:'var(--accent)'},
    {l:'AOV',v:'$'+d.aov,ch:'+$3.2',up:true,c:'var(--accent)'},
    {l:'CPA',v:'$'+d.cpa,ch:'-$1.2',up:true,c:'var(--green)'},
    {l:'ROAS',v:d.roas+'x',ch:'+0.05',up:true,c:'var(--accent)'},
  ];
  $('#kpi-grid').innerHTML=kpis.map(k=>{
    const bars=Array.from({length:14},()=>10+Math.random()*90);
    return `<div style="background:var(--card);border:1px solid var(--border);border-radius:var(--radius);padding:14px 16px">
      <div style="font-size:10.5px;color:var(--text-dim);text-transform:uppercase;letter-spacing:.3px">${k.l}</div>
      <div style="font-size:26px;font-weight:700;color:${k.c};margin:5px 0 3px">${k.v}</div>
      <div style="font-size:11.5px;font-weight:600;color:${k.up?'var(--green)':'var(--red)'}">${k.up?'↑':'↓'} ${k.ch} vs prev</div>
      <div style="height:36px;display:flex;align-items:end;gap:2px;margin-top:8px">${bars.map(b=>`<div style="flex:1;height:${b}%;background:${k.c}30;border-top:2px solid ${k.c};border-radius:2px 2px 0 0"></div>`).join('')}</div>
    </div>`;
  }).join('');

  const maxR=Math.max(...d.revDays);
  $('#rev-chart').innerHTML=d.revDays.map((v,i)=>`<div style="flex:1;height:${v/maxR*100}%;background:var(--green);border-radius:2px 2px 0 0;opacity:${.5+.5*v/maxR}" title="Day ${i+1}: ${fmt(v)}"></div>`).join('');

  const maxA=Math.max(...d.revDays);
  $('#ads-chart').innerHTML=d.revDays.map((v,i)=>{
    const s=d.adsDays[i]||0;
    return `<div style="flex:1;display:flex;flex-direction:column;justify-content:end;height:100%"><div style="height:${(v-s)/maxA*100}%;background:var(--green);border-radius:2px 2px 0 0;opacity:.7"></div><div style="height:${s/maxA*100}%;background:var(--red);opacity:.7"></div></div>`;
  }).join('');

  $('#traffic-bars').innerHTML=d.traffic.map(t=>`<div style="display:flex;align-items:center;gap:10px;margin-bottom:7px"><div style="font-size:11.5px;color:var(--text-dim);width:90px;flex-shrink:0">${t.n}</div><div style="flex:1;height:18px;background:var(--surface);border-radius:4px;overflow:hidden"><div style="height:100%;width:${t.v}%;background:${t.c};border-radius:4px;display:flex;align-items:center;padding:0 7px"><span style="font-size:9.5px;font-weight:600;color:#000">${t.v}%</span></div></div></div>`).join('');

  $('#product-bars').innerHTML=d.products.map(p=>`<div style="display:flex;align-items:center;gap:10px;margin-bottom:7px"><div style="font-size:11.5px;color:var(--text-dim);width:170px;flex-shrink:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${p.n}</div><div style="flex:1;height:18px;background:var(--surface);border-radius:4px;overflow:hidden"><div style="height:100%;width:${p.v}%;background:${p.c};border-radius:4px;display:flex;align-items:center;padding:0 7px"><span style="font-size:9.5px;font-weight:600;color:#000">${p.v}%</span></div></div></div>`).join('');

  const maxF=d.funnel[0].v;
  $('#funnel-chart').innerHTML=d.funnel.map((f,i)=>{
    const w=30+70*(f.v/maxF);const drop=i>0?((1-f.v/d.funnel[i-1].v)*100).toFixed(0):0;
    return `<div style="display:flex;flex-direction:column;align-items:center;flex:1;max-width:200px">
      <div style="font-size:11px;color:var(--text-dim);margin-bottom:4px">${f.n}</div>
      <div style="width:${w}%;height:44px;background:var(--accent);border-radius:6px;display:flex;align-items:center;justify-content:center;font-weight:700;color:#000;font-size:13px;opacity:${.4+.6*f.v/maxF}">${f.v.toLocaleString()}</div>
      ${i>0?`<div style="font-size:10px;color:var(--red);margin-top:3px">↓ ${drop}% drop</div>`:'<div style="height:16px"></div>'}
    </div>${i<d.funnel.length-1?'<div style="color:var(--text-muted);font-size:16px;margin:0 -2px">→</div>':''}`;
  }).join('');
}

/* ===== INTEGRATIONS ===== */
const integrations=[
  {name:'Shopify',desc:'Store data, orders, products, inventory. Real-time webhook sync.',icon:'🛍',bg:'#96bf48',status:'connected',detail:'slimnfit.myshopify.com',actions:['Settings','View logs','Disconnect']},
  {name:'Meta Ads',desc:'Campaign data, ad performance, audience insights. Auto-pause & scale rules.',icon:'📘',bg:'#1877f2',status:'connected',detail:'Business ID: 4819***',actions:['Settings','View logs','Disconnect']},
  {name:'TikTok Ads',desc:'Campaign management, creative performance, Spark Ads. Auto-optimization.',icon:'🎵',bg:'#000',status:'connected',detail:'Advertiser ID: 739***',actions:['Settings','View logs','Disconnect']},
  {name:'Stripe',desc:'Payment processing, refunds, disputes. Cash flow data feed.',icon:'💳',bg:'#635bff',status:'connected',detail:'acct_1N***',actions:['Settings','Disconnect']},
  {name:'Klaviyo',desc:'Email & SMS flows, abandoned cart recovery, segmentation.',icon:'📧',bg:'#2d2d2d',status:'pending',detail:'API key added — awaiting first sync',actions:['Complete setup','Remove']},
  {name:'Google Analytics',desc:'Traffic sources, user behavior, conversion attribution.',icon:'📊',bg:'#2d2d2d',status:'pending',detail:'OAuth started — needs permission grant',actions:['Authorize','Remove']},
  {name:'Teemdrop',desc:'Sourcing agent — order tracking, supplier management, COGS sync.',icon:'📦',bg:'#2d2d2d',status:'available',actions:['Connect']},
  {name:'Google Ads',desc:'Search & Shopping campaigns, Performance Max, bid management.',icon:'🔍',bg:'#2d2d2d',status:'available',actions:['Connect']},
  {name:'Winning Hunter',desc:'Product research, trend detection, competitor spy.',icon:'🏆',bg:'#2d2d2d',status:'available',actions:['Connect']},
  {name:'Gorgias',desc:'Customer support helpdesk — auto-respond, ticket triage, CSAT.',icon:'💬',bg:'#2d2d2d',status:'available',actions:['Connect']},
  {name:'Postscript',desc:'SMS marketing, segmentation, revenue attribution.',icon:'📱',bg:'#2d2d2d',status:'available',actions:['Connect']},
  {name:'Aftership',desc:'Shipment tracking, delivery notifications, returns management.',icon:'🚚',bg:'#2d2d2d',status:'available',actions:['Connect']},
];

function renderIntegrations(){
  const groups={connected:'🟢 Connected',pending:'🟡 Pending Setup',available:'⚪ Available'};
  const statusColors={connected:'var(--green)',pending:'var(--orange)',available:'var(--text-muted)'};
  let html='';
  Object.entries(groups).forEach(([key,label])=>{
    const items=integrations.filter(i=>i.status===key);
    if(!items.length)return;
    html+=`<h3 style="font-size:12px;color:var(--text-dim);margin-bottom:10px;margin-top:${key==='connected'?0:20}px;text-transform:uppercase;letter-spacing:.5px">${label}</h3>
    <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:10px;margin-bottom:8px">`;
    items.forEach(item=>{
      const primary=key!=='connected';
      html+=`<div style="background:var(--card);border:1px solid var(--border);border-radius:var(--radius);padding:16px;display:flex;gap:12px;transition:var(--transition);cursor:pointer" onmouseenter="this.style.borderColor='var(--border-hover)'" onmouseleave="this.style.borderColor='var(--border)'">
        <div style="width:40px;height:40px;border-radius:10px;background:${item.bg};display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0;color:#fff">${svgIcon(item.icon,20)}</div>
        <div style="flex:1;min-width:0">
          <div style="font-size:13px;font-weight:600">${item.name}</div>
          <div style="font-size:11.5px;color:var(--text-dim);margin:2px 0 6px;line-height:1.4">${item.desc}</div>
          ${item.detail?`<div style="font-size:10.5px;font-weight:600;color:${statusColors[key]};display:flex;align-items:center;gap:5px;margin-bottom:6px"><span style="width:5px;height:5px;border-radius:50%;background:${statusColors[key]};display:inline-block"></span>${item.detail}</div>`:''}
          <div style="display:flex;gap:5px;flex-wrap:wrap">${item.actions.map(a=>`<button class="btn ${primary&&a!=='Remove'?'btn-primary':'btn-ghost'} btn-sm" onclick="handleIntAction('${item.name}','${a}')">${a}</button>`).join('')}</div>
        </div>
      </div>`;
    });
    html+=`</div>`;
  });
  $('#integrations-list').innerHTML=html;
}

function handleIntAction(name,action){
  if(action==='Connect'){
    const item=integrations.find(i=>i.name===name);
    if(item){item.status='pending';item.detail='Connecting...';renderIntegrations();
      setTimeout(()=>{item.status='connected';item.detail='Connected — syncing data...';renderIntegrations()},1500);
    }
  } else if(action==='Disconnect'){
    if(confirm(`Disconnect ${name}?`)){
      const item=integrations.find(i=>i.name===name);
      if(item){item.status='available';delete item.detail;renderIntegrations();}
    }
  } else if(action==='Complete setup'||action==='Authorize'){
    const item=integrations.find(i=>i.name===name);
    if(item){item.status='connected';item.detail='Connected — syncing...';renderIntegrations();}
  } else if(action==='Settings'||action==='View logs'){
    openModal(`<h3>${name} — ${action}</h3><p style="font-size:12.5px;color:var(--text-dim);margin-bottom:16px">${action==='Settings'?'Configure sync frequency, permissions, and webhook endpoints.':'Recent sync logs and API call history.'}</p><div style="background:var(--bg);border-radius:var(--radius-xs);padding:12px;font-family:monospace;font-size:11px;color:var(--text-dim);max-height:200px;overflow-y:auto">[${new Date().toISOString()}] Sync completed — 247 records<br>[${new Date(Date.now()-60000).toISOString()}] Webhook received — order #4891<br>[${new Date(Date.now()-120000).toISOString()}] API call — GET /products (200 OK)<br>[${new Date(Date.now()-300000).toISOString()}] Sync started</div><div class="modal-actions"><button class="btn btn-ghost" onclick="closeModal()">Close</button></div>`);
  } else if(action==='Remove'){
    const item=integrations.find(i=>i.name===name);
    if(item){item.status='available';delete item.detail;renderIntegrations();}
  }
}

/* ===== CHAT SYSTEM ===== */
function toggleChat(){
  const p=$('#chat-panel');p.classList.toggle('open');
  $('#chat-toggle').classList.remove('has-badge');
  if(p.classList.contains('open'))$('#chat-input').focus();
}

const chatCommands=[
  {match:/pause.*(ads?|campaign|ad set).*roas.*(below|under|<)\s*([\d.]+)/i,
   action:(m)=>{const roas=m[4];addChatMsg('system',`⚡ Executing: Pause all ad sets with ROAS < ${roas}x`);
    setTimeout(()=>{addChatMsg('agent',`Done. Paused 3 ad sets with ROAS below ${roas}x:\n• Ad Set "Interest - Yoga" (ROAS 0.8x) — paused\n• Ad Set "Broad - Women 25-44" (ROAS 1.1x) — paused\n• Ad Set "Lookalike 1%" (ROAS 1.3x) — paused\n\nSaved ~$340/day in wasted spend. Remaining budget reallocated to top performers.`);
      addActivity('system',`<strong>System</strong> paused 3 ad sets with ROAS < ${roas}x`);addNotif('🎯','Auto-paused 3 underperforming ad sets','Saved $340/day in ad spend');},1500);}},
  {match:/increase.*(budget|spend).*(.+?)\s+([\d]+%?)/i,
   action:()=>{addChatMsg('system','⚡ Executing: Adjusting campaign budgets');
    setTimeout(()=>{addChatMsg('agent','Budget increased by 20% on top 2 performing campaigns:\n• "Broad - US Women" → $180/day → $216/day\n• "ASC - UGC Creative" → $120/day → $144/day\n\nProjected impact: +$2,400 revenue/day at current ROAS of 2.8x.');
      addActivity('agent',`<strong>Mers</strong> increased budget 20% on 2 top campaigns`);},1200);}},
  {match:/kill rule|set.*kill|stop.*if/i,
   action:()=>{addChatMsg('system','⚡ Creating kill rule');
    setTimeout(()=>{addChatMsg('agent','Kill rule created:\n\n🔴 **IF** Cost Per Purchase > $25 for 72 hours\n**THEN** Pause ad set automatically\n**AND** Notify Aldiyar via Telegram\n\nApplied to all active campaigns. I\'ll watch it 24/7.');
      addActivity('agent',`<strong>Mers</strong> created kill rule: CPP > $25 → auto-pause`);},1000);}},
  {match:/audit|check.*(store|site|page)/i,
   action:()=>{addChatMsg('system','⚡ Running store audit on slimnfit.store...');
    setTimeout(()=>{addChatMsg('agent','Store audit complete. Found 6 issues:\n\n🔴 Critical:\n• No urgency elements (timer/stock counter) — est. -22% CR\n• Hero image not optimized for mobile — 68% of traffic is mobile\n• No trust badges above fold\n\n🟡 Medium:\n• Product descriptions too feature-heavy, need benefit-first copy\n• Missing size guide — causes returns\n• No cross-sell section\n\nWant me to fix the critical ones? I can update the Shopify theme directly.');
      tasks.unshift({id:Date.now(),col:'suggested',title:'Fix 6 store audit issues',desc:'3 critical, 3 medium issues found. Agent can auto-fix critical ones.',priority:'high',owner:'mers',time:'just now',impact:'↑ Est. +30% CR'});renderTasks();},2000);}},
  {match:/product.*research|find.*product|trending/i,
   action:()=>{addChatMsg('system','⚡ Researching trending products in fitness/beauty...');
    setTimeout(()=>{addChatMsg('agent','Top 3 trending products this week:\n\n1. 🏆 **Neck & Jaw Exerciser** — 340% search growth, low competition, $3 COGS / $24 sell price, 8x markup\n2. 🔥 **Ice Roller Face Massager** — 180% growth, medium competition, $2 COGS / $19 price\n3. ⭐ **Posture Corrector Belt** — 95% growth, high competition but high volume, $4 COGS / $29 price\n\nWant me to find suppliers and create a test campaign for any of these?');},1800);}},
  {match:/how.*(doing|going|performance|revenue|today)/i,
   action:()=>{setTimeout(()=>{addChatMsg('agent',`Here's your daily snapshot:\n\n📊 Today so far:\n• Revenue: $17,842 (+12% vs yesterday)\n• Orders: 142\n• Ad Spend: $6,920\n• ROAS: 2.58x\n• Best performer: "UGC Leggings Hook #3" (4.2x ROAS)\n\n🟢 All systems healthy. No kill rules triggered. Klaviyo welcome flow sent 89 emails (32% open rate).\n\nAnything specific you want me to dig into?`);},800);}},
  {match:/compare|before.*after|project|simulate|what.*if/i,
   action:()=>{addChatMsg('system','⚡ Running P&L simulation...');
    setTimeout(()=>{addChatMsg('agent','Here\'s the before/after if we implement the top 3 suggestions:\n\n**Current → Projected (30 days):**\n• Revenue: $500K → $612K (+22%)\n• CR: 2.57% → 3.34% (urgency + trust)\n• CPM: $38 → $22 (broad targeting)\n• AOV: $128 → $147 (bundles + BNPL)\n• Net Margin: 11.1% → 16.8%\n• Net Profit: $55K → $103K (+87%)\n\nI\'ve updated the Cash Flow tab with a Before/After toggle. Check it out!');
      showBeforeAfter=true;renderCashFlow();},2000);}},
  {match:/margin|profit|unit economics|p&l|pnl/i,
   action:()=>{setTimeout(()=>{addChatMsg('agent','Here\'s your product P&L snapshot:\n\n🖤 **Compression Leggings Black** — 33.9% margin (best)\n🔥 **Waist Trainer Pro** — 31.2% margin\n💙 **Compression Leggings Navy** — 27.0% margin\n📦 **Bundle (Leggings + Trainer)** — 30.8% margin\n💪 **Arm Shaper** — 27.3% margin\n🦵 **Thigh Trimmer** — 28.4% margin\n\nAverage blended margin: **29.8%**. Target is 30%+. The Navy leggings are underperforming — consider raising price by $3 or finding a cheaper supplier.\n\nFull breakdown in the P&L tab.');showPage('pnl')},800);}},
  {match:/competitor|spy|competition|price war/i,
   action:()=>{setTimeout(()=>{addChatMsg('agent','Competitor update:\n\n🔴 **SlimWear.co** dropped Compression Leggings to $29 (was $39). They\'re running aggressive UGC ads — est. $8K/day spend.\n🟡 **CurveQueen** launched a TikTok campaign with "POV: your jeans finally fit" hook — very high engagement.\n🟢 **FitSculpt** is slowing down — ad spend dropped 40% this week.\n\nRecommendation: Don\'t match SlimWear\'s price. Focus on quality positioning + reviews. Our 4.6★ rating is our moat.');showPage('competitors')},800);}},
  {match:/creative|hook|script|ad copy|brief/i,
   action:()=>{setTimeout(()=>{addChatMsg('agent','Here are 3 UGC hook scripts for Compression Leggings:\n\n**Hook A (Before/After):**\n"I wore these $39 leggings every day for 30 days... here\'s what happened"\n\n**Hook B (POV):**\n"POV: you finally find compression leggings that don\'t roll down"\n\n**Hook C (Problem/Solution):**\n"Nothing fits right after pregnancy? These changed everything for me"\n\n**CTA:** "Link in bio — 40% off ends tonight"\n\nEach hook → 15sec transformation montage → CTA. Film on iPhone, natural lighting, no editing needed. Want me to create full briefs in the Tasks board?')},1000);}},
  {match:/email|klaviyo|sms|abandon/i,
   action:()=>{setTimeout(()=>{addChatMsg('agent','Email/SMS performance:\n\n📧 **Abandoned Cart Flow:**\n• Email 1 (1h): 42% open, 8.2% click\n• Email 2 (24h): 38% open, 5.1% click\n• Email 3 (48h + 10% off): 35% open, 11.3% click\n• Recovery rate: 8.2% ($1,240/week)\n\n📱 **SMS (not active yet)**\nRecommendation: Set up Postscript. Welcome SMS converts 3x email. Est. additional $800/week revenue.\n\nNext steps:\n1. Add post-purchase review request (Day 7)\n2. Build winback flow for 60-day inactive\n3. Launch SMS welcome with 15% off code')},800);}},
  {match:/tiktok|tt ads|spark/i,
   action:()=>{setTimeout(()=>{addChatMsg('agent','TikTok Ads status:\n\n**Active campaigns:**\n• "POV Leggings" — 2.8x ROAS, $3,200/day spend, scaling\n• "Before/After 30 Days" — 1.9x ROAS, monitoring\n• "Gym Girl Reacts" — 3.1x ROAS, new creative, early data\n\n**Recommendations:**\n1. Scale "Gym Girl Reacts" — best hook rate (34%)\n2. Kill "Before/After" if ROAS doesn\'t improve in 48h\n3. Test Spark Ads with organic posts from last week\n\nTikTok CPMs are 45% lower than Meta right now ($12 vs $22). Worth shifting 10% more budget here.')},800);}},
];

function sendChat(){
  const input=$('#chat-input');const msg=input.value.trim();if(!msg)return;
  addChatMsg('user',msg);input.value='';
  $('#chat-typing').classList.add('show');
  
  const cmd=chatCommands.find(c=>c.match.test(msg));
  setTimeout(()=>{$('#chat-typing').classList.remove('show');
    if(cmd){cmd.action(msg.match(cmd.match));}
    else{addChatMsg('agent',`I can help with that. Here are some things I can do right now:\n\n• "Pause all ads with ROAS below 1.5"\n• "Increase budget on top campaigns"\n• "Set a kill rule for CPP > $25"\n• "Audit my store"\n• "Find trending products"\n• "How are we doing today?"\n• "Compare before and after"\n\nOr just tell me what you need — I'll figure it out.`);}
  },cmd?300:800);
}

function addChatMsg(type,text){
  const div=document.createElement('div');div.className='chat-msg '+type;
  div.innerHTML=text.replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>').replace(/\n/g,'<br>');
  $('#chat-messages').appendChild(div);
  $('#chat-messages').scrollTop=$('#chat-messages').scrollHeight;
}

/* ===== NOTIFICATIONS ===== */
let notifs=[
  {icon:'🎯',title:'Ad Set #3 auto-paused',detail:'CPP exceeded $25 kill rule after 72h. Saved $120/day.',time:'2 min ago',unread:true},
  {icon:'📉',title:'Competitor price drop detected',detail:'SlimWear.co dropped "Compression Leggings" from $39 to $29.',time:'18 min ago',unread:true},
  {icon:'📦',title:'Shipping delay alert',detail:'Teemdrop batch #47: 3-day delay on 12 orders. ETD updated.',time:'1h ago',unread:true},
  {icon:'🧠',title:'New tactic extracted',detail:'"Use countdown timers on product page" — 4/5 creators agree (92% confidence).',time:'2h ago',unread:true},
  {icon:'📧',title:'Klaviyo flow performing well',detail:'Abandoned cart flow: 8.2% recovery rate (above 5% target).',time:'3h ago',unread:true},
  {icon:'🔥',title:'Trending product detected',detail:'Neck exerciser +340% search volume. 8x margin potential.',time:'5h ago',unread:false},
  {icon:'✅',title:'Store audit completed',detail:'14 issues found, 8 critical. Recommendations added to Tasks.',time:'yesterday',unread:false},
];

function renderNotifs(){
  const unread=notifs.filter(n=>n.unread).length;
  const badge=$('#notif-badge');
  badge.textContent=unread;badge.style.display=unread?'flex':'none';
  $('#notif-panel').innerHTML=`<div style="padding:12px 16px;border-bottom:1px solid var(--border);display:flex;justify-content:space-between;align-items:center">
    <span style="font-size:13px;font-weight:600">Notifications</span>
    <button class="btn btn-ghost btn-sm" onclick="notifs.forEach(n=>n.unread=false);renderNotifs()">Mark all read</button>
  </div>${notifs.map((n,i)=>`<div class="notif-item${n.unread?' unread':''}" onclick="notifs[${i}].unread=false;renderNotifs()">
    <div class="notif-icon" style="background:var(--card);border:1px solid var(--border)">${svgIcon(n.icon,18)}</div>
    <div><div class="notif-text"><strong>${n.title}</strong><br>${n.detail}</div><div class="notif-time">${n.time}</div></div>
  </div>`).join('')}`;
}

function toggleNotifs(){
  event.stopPropagation();
  const p=$('#notif-panel');p.classList.toggle('open');
  document.addEventListener('click',()=>p.classList.remove('open'),{once:true});
}

function toggleAccountDropdown(e){
  e.stopPropagation();
  const p=$('#account-dropdown');p.classList.toggle('open');
  document.addEventListener('click',()=>p.classList.remove('open'),{once:true});
}
function closeAccountDropdown(){$('#account-dropdown').classList.remove('open')}

function addNotif(icon,title,detail){
  notifs.unshift({icon,title,detail,time:'just now',unread:true});renderNotifs();
}

/* ===== LIVE TICKER ===== */
function renderTicker(){
  const events=[
    {dot:'var(--green)',text:'Order #4892 — Compression Leggings Black × 2 — $78.00'},
    {dot:'var(--blue)',text:'Meta Ad "UGC Hook #3" — 4.2x ROAS — $1,240 revenue today'},
    {dot:'var(--pink)',text:'TikTok Ad "Before/After" — 2.8x ROAS — scaling'},
    {dot:'var(--green)',text:'Order #4891 — Waist Trainer Pro — $49.00'},
    {dot:'var(--accent)',text:'Kill rule check: all ad sets within thresholds ✓'},
    {dot:'var(--orange)',text:'Competitor SlimWear.co updated prices — monitoring'},
    {dot:'var(--green)',text:'Order #4890 — Arm Shaper Set + Leggings Bundle — $89.00'},
    {dot:'var(--blue)',text:'Klaviyo: 89 welcome emails sent — 32% open rate'},
    {dot:'var(--purple)',text:'Knowledge base updated: 3 new tactics from Davie Fogarty'},
    {dot:'var(--green)',text:'Order #4889 — Thigh Trimmer × 3 — $87.00'},
    {dot:'var(--pink)',text:'TikTok: "POV Leggings" creative approved — launching'},
    {dot:'var(--green)',text:'Order #4888 — Compression Leggings Navy — $39.00'},
  ];
  $('#ticker-content').innerHTML=events.map(e=>`<div class="ticker-item"><span class="dot" style="background:${e.dot}"></span>${e.text}</div>`).join('')
    +events.map(e=>`<div class="ticker-item"><span class="dot" style="background:${e.dot}"></span>${e.text}</div>`).join('');
}

/* ===== BEFORE/AFTER TOGGLE ===== */
let showBeforeAfter=false;

/* ===== COMPETITORS ===== */
const competitors=[
  {name:'SlimWear.co',url:'slimwear.co',status:'🟢 Active',products:48,priceRange:'$24-$59',adSpend:'~$8K/day',change:'Price drop on 3 items today',changeColor:'var(--red)',topProduct:'Sculpt Leggings',topPrice:'$29 (was $39)'},
  {name:'BodyShape Pro',url:'bodyshapepro.com',status:'🟢 Active',products:32,priceRange:'$29-$69',adSpend:'~$5K/day',change:'2 new products launched',changeColor:'var(--orange)',topProduct:'Waist Cincher',topPrice:'$34'},
  {name:'FitSculpt',url:'fitsculpt.store',status:'🟡 Slowing',products:21,priceRange:'$19-$45',adSpend:'~$2K/day',change:'Ad spend down 40% this week',changeColor:'var(--green)',topProduct:'Compression Shorts',topPrice:'$22'},
  {name:'CurveQueen',url:'curvequeen.co',status:'🟢 Active',products:67,priceRange:'$19-$79',adSpend:'~$12K/day',change:'New TikTok campaign detected',changeColor:'var(--orange)',topProduct:'Full Body Shaper',topPrice:'$49'},
];

const compAds=[
  {brand:'SlimWear',hook:'"I wore these for 30 days..."',format:'UGC Before/After',platform:'Meta',estSpend:'$15K',days:14,engagement:'High',style:'var(--blue)'},
  {brand:'CurveQueen',hook:'"POV: your jeans finally fit"',format:'TikTok Native',platform:'TikTok',estSpend:'$8K',days:7,engagement:'Very High',style:'var(--pink)'},
  {brand:'BodyShape Pro',hook:'"Gym trainers hate this trick"',format:'UGC Talking Head',platform:'Meta',estSpend:'$12K',days:21,engagement:'Medium',style:'var(--blue)'},
  {brand:'SlimWear',hook:'"Put it on and look 10lbs lighter"',format:'Product Demo',platform:'Meta',estSpend:'$20K',days:30,engagement:'High',style:'var(--blue)'},
  {brand:'FitSculpt',hook:'"$22 and it changed my life"',format:'UGC Review',platform:'TikTok',estSpend:'$3K',days:5,engagement:'Medium',style:'var(--pink)'},
  {brand:'CurveQueen',hook:'"Wedding in 2 weeks? I got you"',format:'Story Ad',platform:'Meta',estSpend:'$6K',days:10,engagement:'High',style:'var(--blue)'},
];

function renderCompetitors(){
  $('#comp-grid').innerHTML=competitors.map(c=>`<div style="background:var(--card);border:1px solid var(--border);border-radius:var(--radius);padding:18px;transition:var(--transition)" onmouseenter="this.style.borderColor='var(--border-hover)'" onmouseleave="this.style.borderColor='var(--border)'">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
      <div><div style="font-size:14px;font-weight:700">${c.name}</div><div style="font-size:11px;color:var(--text-muted)">${c.url}</div></div>
      <span style="font-size:11px">${c.status}</span>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:10px">
      <div><div style="font-size:10px;color:var(--text-muted)">Products</div><div style="font-size:14px;font-weight:600">${c.products}</div></div>
      <div><div style="font-size:10px;color:var(--text-muted)">Price Range</div><div style="font-size:14px;font-weight:600">${c.priceRange}</div></div>
      <div><div style="font-size:10px;color:var(--text-muted)">Est. Ad Spend</div><div style="font-size:14px;font-weight:600">${c.adSpend}</div></div>
    </div>
    <div style="font-size:11.5px;color:${c.changeColor};font-weight:500;margin-bottom:8px">📢 ${c.change}</div>
    <div style="font-size:11px;color:var(--text-dim)">Top product: <strong style="color:var(--text)">${c.topProduct}</strong> at ${c.topPrice}</div>
  </div>`).join('');

  $('#comp-ads').innerHTML=compAds.map(a=>`<div style="background:var(--card);border:1px solid var(--border);border-radius:var(--radius);padding:16px;cursor:pointer;transition:var(--transition)" onmouseenter="this.style.borderColor='var(--accent)'" onmouseleave="this.style.borderColor='var(--border)'" onclick="openCreativeBrief('${a.brand}','${a.hook.replace(/'/g,"\\'")}','${a.format}')">
    <div style="height:100px;background:linear-gradient(135deg,${a.style}22,${a.style}08);border-radius:var(--radius-xs);display:flex;align-items:center;justify-content:center;font-size:28px;margin-bottom:10px">${a.platform==='TikTok'?'🎵':'📘'}</div>
    <div style="font-size:12px;font-weight:600;margin-bottom:4px">${a.brand}</div>
    <div style="font-size:11.5px;color:var(--accent);margin-bottom:4px">${a.hook}</div>
    <div style="font-size:10.5px;color:var(--text-dim)">${a.format} · ${a.platform}</div>
    <div style="display:flex;justify-content:space-between;margin-top:8px;font-size:10.5px;color:var(--text-muted)">
      <span>Est. ${a.estSpend}</span><span>${a.days}d running</span><span style="color:${a.engagement==='Very High'?'var(--accent)':a.engagement==='High'?'var(--green)':'var(--text-dim)'}">${a.engagement}</span>
    </div>
  </div>`).join('');
}

function openAddCompModal(){
  openModal(`<h3>+ Track Competitor</h3>
    <label>Store URL</label><input id="ac-url" placeholder="e.g., slimwear.co">
    <label>Store name</label><input id="ac-name" placeholder="e.g., SlimWear">
    <p style="font-size:11.5px;color:var(--text-dim);margin-top:12px">Mers will automatically monitor their product catalog, pricing, and Meta Ad Library creatives.</p>
    <div class="modal-actions"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-primary" onclick="startCompTracking()">Start tracking</button></div>`);
}

function startCompTracking(){
  const url=$('#ac-url')?.value||'competitor.com';
  const name=$('#ac-name')?.value||'Competitor';
  closeModal();
  addNotif('🕵️',`Tracking ${name}`,`First scan of ${url} starting now...`);
  addActivity('agent',`<strong>Mers</strong> started tracking competitor <strong>${name}</strong>`);
  competitors.push({name,url,status:'🔄 Scanning',products:'...',priceRange:'Scanning...',adSpend:'Analyzing...',change:'Initial scan in progress',changeColor:'var(--blue)',topProduct:'Loading...',topPrice:'...'});
  renderCompetitors();
  setTimeout(()=>{
    const c=competitors.find(x=>x.name===name);
    if(c){c.status='🟢 Active';c.products=Math.floor(15+Math.random()*40);c.priceRange='$'+Math.floor(19+Math.random()*10)+'-$'+Math.floor(45+Math.random()*30);c.adSpend='~$'+Math.floor(1+Math.random()*10)+'K/day';c.change='Initial scan complete — monitoring started';c.changeColor='var(--green)';c.topProduct='Top product identified';c.topPrice='$'+Math.floor(24+Math.random()*25);renderCompetitors();addNotif('✅',`${name} scan complete`,`${c.products} products found, ad spend estimated at ${c.adSpend}`);}
  },3000);
}

function openCreativeBrief(brand,hook,format){
  openModal(`<h3>📝 Creative Brief — Inspired by ${brand}</h3>
    <div style="background:var(--card);border:1px solid var(--border);border-radius:var(--radius-sm);padding:14px;margin-bottom:16px">
      <div style="font-size:11px;color:var(--text-muted);margin-bottom:4px">Original hook:</div>
      <div style="font-size:13px;font-weight:600;color:var(--accent)">${hook}</div>
      <div style="font-size:11px;color:var(--text-dim);margin-top:4px">Format: ${format}</div>
    </div>
    <h4 style="font-size:13px;font-weight:600;margin-bottom:8px">🎬 Adapted Scripts for Your Products</h4>
    <div style="font-size:12.5px;color:var(--text-dim);line-height:1.7;margin-bottom:12px">
      <strong>Version A — Compression Leggings:</strong><br>
      "${hook.replace(/jeans|leggings|product/gi,'compression leggings').replace(/\.\.\./g,'')}" + show before/after transformation. End with: "Link in bio, 40% off today only."<br><br>
      <strong>Version B — Waist Trainer:</strong><br>
      Adapt to waist trainer with "wedding prep" or "postpartum" angle. Same hook structure, different product.<br><br>
      <strong>Version C — Bundle:</strong><br>
      "I tried the full set for 30 days..." — show leggings + waist trainer combo. Emphasize savings.
    </div>
    <h4 style="font-size:13px;font-weight:600;margin-bottom:8px">📋 Production Checklist</h4>
    <div style="font-size:12px;color:var(--text-dim);line-height:1.8">
      ☐ Film on iPhone, portrait 9:16<br>
      ☐ Natural lighting, no ring light<br>
      ☐ Hook must land in first 1.5 seconds<br>
      ☐ Show product in use by second 3<br>
      ☐ Total length: 15-30 seconds<br>
      ☐ Add trending sound (TikTok) or no music (Meta)<br>
      ☐ Caption: benefit-focused, include price
    </div>
    <div class="modal-actions">
      <button class="btn btn-ghost" onclick="closeModal()">Close</button>
      <button class="btn btn-primary" onclick="tasks.unshift({id:Date.now(),col:'backlog',title:'Film: ${format} ad (inspired by ${brand})',desc:'Adapted from competitor creative. Hook: ${hook}',priority:'med',owner:'aldiyar',time:'just now'});renderTasks();closeModal();addActivity('agent','<strong>Mers</strong> created creative brief task from ${brand} ad');addNotif('📝','Creative brief created','New task added to backlog: Film ${format} ad')">📋 Add to Tasks</button>
    </div>`);
}

/* ===== PRODUCT RESEARCH ===== */
const trendingProducts=[
  {name:'Neck & Jaw Exerciser',trend:'+340%',competition:'Low',cogs:'$3',sell:'$24',margin:'8x',score:94,cat:'Beauty/Fitness'},
  {name:'Ice Roller Face Massager',trend:'+180%',competition:'Medium',cogs:'$2',sell:'$19',margin:'9.5x',score:87,cat:'Beauty'},
  {name:'Posture Corrector Belt',trend:'+95%',competition:'High',cogs:'$4',sell:'$29',margin:'7.3x',score:72,cat:'Health/Fitness'},
  {name:'LED Red Light Therapy Mask',trend:'+210%',competition:'Low',cogs:'$12',sell:'$69',margin:'5.8x',score:89,cat:'Beauty'},
  {name:'Scalp Massager Shampoo Brush',trend:'+120%',competition:'Medium',cogs:'$1.50',sell:'$14',margin:'9.3x',score:78,cat:'Beauty'},
  {name:'Resistance Band Set (fabric)',trend:'+75%',competition:'High',cogs:'$3',sell:'$22',margin:'7.3x',score:68,cat:'Fitness'},
];

function renderTrending(){
  $('#trending-grid').innerHTML=trendingProducts.map(p=>{
    const scoreColor=p.score>=85?'var(--green)':p.score>=70?'var(--accent)':'var(--orange)';
    return `<div style="background:var(--card);border:1px solid var(--border);border-radius:var(--radius);padding:16px;cursor:pointer;transition:var(--transition)" onmouseenter="this.style.borderColor='var(--accent)'" onmouseleave="this.style.borderColor='var(--border)'" onclick="$('#research-input').value='${p.name}';runResearch()">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
        <div style="font-size:13px;font-weight:600">${p.name}</div>
        <div style="font-size:20px;font-weight:700;color:${scoreColor}">${p.score}</div>
      </div>
      <div style="font-size:10.5px;color:var(--text-muted);margin-bottom:8px">${p.cat}</div>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px">
        <div><div style="font-size:10px;color:var(--text-muted)">Trend</div><div style="font-size:12px;font-weight:600;color:var(--green)">${p.trend}</div></div>
        <div><div style="font-size:10px;color:var(--text-muted)">Margin</div><div style="font-size:12px;font-weight:600;color:var(--accent)">${p.margin}</div></div>
        <div><div style="font-size:10px;color:var(--text-muted)">Competition</div><div style="font-size:12px;font-weight:600;color:${p.competition==='Low'?'var(--green)':p.competition==='Medium'?'var(--orange)':'var(--red)'}">${p.competition}</div></div>
      </div>
      <div style="display:flex;justify-content:space-between;margin-top:8px;font-size:11px;color:var(--text-dim)">
        <span>COGS: ${p.cogs}</span><span>Sell: ${p.sell}</span>
      </div>
    </div>`;
  }).join('');
}

function runResearch(){
  const q=$('#research-input').value.trim();if(!q)return;
  $('#research-default').style.display='none';
  $('#research-results').innerHTML=`<div style="text-align:center;padding:40px;color:var(--text-dim)"><div style="font-size:24px;margin-bottom:12px">🔍</div>Analyzing "${q}"...</div>`;
  
  setTimeout(()=>{
    const score=70+Math.round(Math.random()*25);
    const trend='+'+Math.round(50+Math.random()*300)+'%';
    const compLevel=['Low','Medium','High'][Math.floor(Math.random()*3)];
    const cogs=Math.round(2+Math.random()*15);
    const sell=Math.round(cogs*4+Math.random()*30);
    const margin=(sell/cogs).toFixed(1);
    
    $('#research-results').innerHTML=`
      <div style="background:var(--card);border:1px solid var(--border);border-radius:var(--radius);padding:24px;margin-bottom:16px">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
          <h3 style="font-size:16px;font-weight:700">${q}</h3>
          <div style="text-align:center"><div style="font-size:32px;font-weight:700;color:${score>=85?'var(--green)':score>=70?'var(--accent)':'var(--orange)'}">${score}</div><div style="font-size:10px;color:var(--text-muted)">Mers Score</div></div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:12px;margin-bottom:16px">
          <div style="background:var(--bg);border-radius:var(--radius-xs);padding:12px"><div style="font-size:10px;color:var(--text-muted)">Search Trend</div><div style="font-size:18px;font-weight:700;color:var(--green)">${trend}</div></div>
          <div style="background:var(--bg);border-radius:var(--radius-xs);padding:12px"><div style="font-size:10px;color:var(--text-muted)">Competition</div><div style="font-size:18px;font-weight:700;color:${compLevel==='Low'?'var(--green)':compLevel==='Medium'?'var(--orange)':'var(--red)'}">${compLevel}</div></div>
          <div style="background:var(--bg);border-radius:var(--radius-xs);padding:12px"><div style="font-size:10px;color:var(--text-muted)">Est. COGS</div><div style="font-size:18px;font-weight:700">$${cogs}</div></div>
          <div style="background:var(--bg);border-radius:var(--radius-xs);padding:12px"><div style="font-size:10px;color:var(--text-muted)">Sell Price</div><div style="font-size:18px;font-weight:700">$${sell}</div></div>
          <div style="background:var(--bg);border-radius:var(--radius-xs);padding:12px"><div style="font-size:10px;color:var(--text-muted)">Margin</div><div style="font-size:18px;font-weight:700;color:var(--accent)">${margin}x</div></div>
          <div style="background:var(--bg);border-radius:var(--radius-xs);padding:12px"><div style="font-size:10px;color:var(--text-muted)">Meta Ad Saturation</div><div style="font-size:18px;font-weight:700;color:${compLevel==='Low'?'var(--green)':'var(--orange)'}">${compLevel==='Low'?'Low':'Moderate'}</div></div>
        </div>
        <h4 style="font-size:13px;font-weight:600;margin-bottom:8px">🤖 Mers Analysis</h4>
        <p style="font-size:12.5px;color:var(--text-dim);line-height:1.6;margin-bottom:12px">
          ${score>=80?`Strong product opportunity. ${trend} search growth with ${compLevel.toLowerCase()} competition suggests an emerging market. At $${cogs} COGS and $${sell} selling price, the ${margin}x margin leaves healthy room for a $${Math.round(sell*0.3)} CPA target (ROAS 3.3x breakeven).`:`Moderate opportunity. Competition is ${compLevel.toLowerCase()} and margins are viable at ${margin}x, but search trend growth is moderate. Consider testing with a small budget ($30/day) before committing to inventory.`}
        </p>
        <h4 style="font-size:13px;font-weight:600;margin-bottom:8px">📋 Recommended Next Steps</h4>
        <div style="font-size:12px;color:var(--text-dim);line-height:1.8">
          1. Order 3 samples from different AliExpress suppliers<br>
          2. Create 3 UGC-style test creatives (before/after, unboxing, testimonial)<br>
          3. Launch $30/day broad targeting campaign on Meta<br>
          4. Set kill rule: pause if no purchase after $${Math.round(sell*1.5)} spend<br>
          5. Scale rule: increase budget 20% if ROAS > 2.5x for 72h
        </div>
        <div style="display:flex;gap:8px;margin-top:16px">
          <button class="btn btn-primary" onclick="alert('Finding suppliers on AliExpress, CJ, and Teemdrop...')">🔍 Find suppliers</button>
          <button class="btn btn-ghost" onclick="alert('Creating creative brief...')">📝 Generate creative brief</button>
          <button class="btn btn-ghost" onclick="tasks.unshift({id:Date.now(),col:'backlog',title:'Test: ${q}',desc:'Product research score: ${score}. ${margin}x margin potential.',priority:'${score>=80?'high':'med'}',owner:'mers',time:'just now'});renderTasks();showPage('tasks');alert('Added to backlog!')">📋 Add to Tasks</button>
        </div>
      </div>
      <button class="btn btn-ghost" onclick="$('#research-results').innerHTML='';$('#research-default').style.display='block'">← Back to trending</button>`;
  },1500);
}

/* ===== DASHBOARD ===== */
function renderDashboard(){
  const h=new Date().getHours();
  const greeting=h<12?'Good morning':h<18?'Good afternoon':'Good evening';
  const el=$('#dash-greeting');if(el)el.textContent=`${greeting}, Aldiyar`;
  const da=$('#dash-activity');if(da)da.innerHTML=activities.sort((a,b)=>b.ts-a.ts).slice(0,6).map(a=>`<div style="display:flex;gap:8px;padding:6px 0;border-bottom:1px solid var(--border);font-size:11.5px">
    <div class="activity-dot ${a.type}" style="margin-top:5px"></div>
    <div><div class="activity-text">${a.text}</div><div style="font-size:10px;color:var(--text-muted);margin-top:1px">${timeAgo(a.ts)}</div></div>
  </div>`).join('');
}

/* ===== COMMAND PALETTE ===== */
const cmdActions=[
  {icon:'🏠',label:'Go to Dashboard',cat:'Navigate',fn:()=>{showPage('dashboard');closeCmdPalette()}},
  {icon:'⚡',label:'Go to Tasks',cat:'Navigate',fn:()=>{showPage('tasks');closeCmdPalette()}},
  {icon:'🧠',label:'Go to Knowledge Base',cat:'Navigate',fn:()=>{showPage('knowledge');closeCmdPalette()}},
  {icon:'📋',label:'Go to Playbooks',cat:'Navigate',fn:()=>{showPage('playbooks');closeCmdPalette()}},
  {icon:'💰',label:'Go to Cash Flow',cat:'Navigate',fn:()=>{showPage('cashflow');closeCmdPalette()}},
  {icon:'📊',label:'Go to Analytics',cat:'Navigate',fn:()=>{showPage('analytics');closeCmdPalette()}},
  {icon:'🔌',label:'Go to Integrations',cat:'Navigate',fn:()=>{showPage('integrations');closeCmdPalette()}},
  {icon:'🕵️',label:'Go to Competitors',cat:'Navigate',fn:()=>{showPage('competitors');closeCmdPalette()}},
  {icon:'🔬',label:'Go to Product Research',cat:'Navigate',fn:()=>{showPage('research');closeCmdPalette()}},
  {icon:'🧮',label:'Go to Product P&L',cat:'Navigate',fn:()=>{showPage('pnl');closeCmdPalette()}},
  {icon:'👤',label:'Go to Account',cat:'Navigate',fn:()=>{showPage('account');closeCmdPalette()}},
  {icon:'⚙️',label:'Go to Settings',cat:'Navigate',fn:()=>{showPage('settings');closeCmdPalette()}},
  {icon:'➕',label:'Create new task',cat:'Actions',fn:()=>{closeCmdPalette();openNewTaskModal()}},
  {icon:'📝',label:'Add tactic to Knowledge Base',cat:'Actions',fn:()=>{closeCmdPalette();openAddTacticModal()}},
  {icon:'🔍',label:'Run store audit',cat:'Agent',fn:()=>{closeCmdPalette();if(!$('#chat-panel').classList.contains('open'))toggleChat();setTimeout(()=>{$('#chat-input').value='Audit my store';sendChat()},300)}},
  {icon:'📊',label:'Get daily performance report',cat:'Agent',fn:()=>{closeCmdPalette();if(!$('#chat-panel').classList.contains('open'))toggleChat();setTimeout(()=>{$('#chat-input').value='How are we doing today?';sendChat()},300)}},
  {icon:'⏸️',label:'Pause underperforming ads',cat:'Agent',fn:()=>{closeCmdPalette();if(!$('#chat-panel').classList.contains('open'))toggleChat();setTimeout(()=>{$('#chat-input').value='Pause all ads with ROAS below 1.5';sendChat()},300)}},
  {icon:'📈',label:'Run before/after simulation',cat:'Agent',fn:()=>{closeCmdPalette();if(!$('#chat-panel').classList.contains('open'))toggleChat();setTimeout(()=>{$('#chat-input').value='Compare before and after';sendChat()},300)}},
  {icon:'🔥',label:'Find trending products',cat:'Agent',fn:()=>{closeCmdPalette();if(!$('#chat-panel').classList.contains('open'))toggleChat();setTimeout(()=>{$('#chat-input').value='Find trending products';sendChat()},300)}},
  {icon:'💬',label:'Open agent chat',cat:'Actions',fn:()=>{closeCmdPalette();toggleChat()}},
  {icon:'📥',label:'Export cash flow CSV',cat:'Actions',fn:()=>{closeCmdPalette();showPage('cashflow');setTimeout(exportCSV,300)}},
];

let cmdSelectedIdx=0;

function openCmdPalette(){
  $('#cmd-overlay').classList.add('open');
  $('#cmd-input').value='';
  cmdSelectedIdx=0;
  filterCmdPalette();
  setTimeout(()=>$('#cmd-input').focus(),50);
}

function closeCmdPalette(){$('#cmd-overlay').classList.remove('open')}

function filterCmdPalette(){
  const q=($('#cmd-input').value||'').toLowerCase();
  const filtered=q?cmdActions.filter(a=>(a.label+a.cat).toLowerCase().includes(q)):cmdActions;
  cmdSelectedIdx=Math.min(cmdSelectedIdx,filtered.length-1);
  $('#cmd-results').innerHTML=filtered.map((a,i)=>`<div class="cmd-item${i===cmdSelectedIdx?' selected':''}" onclick="cmdActions.find(x=>x.label==='${a.label}').fn()" onmouseenter="cmdSelectedIdx=${i};filterCmdPalette()">
    <div class="cmd-icon">${svgIcon(a.icon,16)}</div>
    <div class="cmd-label">${a.label}<br><small>${a.cat}</small></div>
  </div>`).join('')||'<div style="padding:20px;text-align:center;color:var(--text-muted);font-size:12px">No results</div>';
}

function handleCmdKey(e){
  const items=$('#cmd-results').querySelectorAll('.cmd-item');
  if(e.key==='ArrowDown'){e.preventDefault();cmdSelectedIdx=Math.min(cmdSelectedIdx+1,items.length-1);filterCmdPalette()}
  else if(e.key==='ArrowUp'){e.preventDefault();cmdSelectedIdx=Math.max(cmdSelectedIdx-1,0);filterCmdPalette()}
  else if(e.key==='Enter'){e.preventDefault();const q=($('#cmd-input').value||'').toLowerCase();const filtered=q?cmdActions.filter(a=>(a.label+a.cat).toLowerCase().includes(q)):cmdActions;if(filtered[cmdSelectedIdx])filtered[cmdSelectedIdx].fn()}
  else if(e.key==='Escape')closeCmdPalette();
}

/* ===== PRODUCT P&L ===== */
const products=[
  {name:'Compression Leggings — Black',orders:1420,revenue:55380,cogs:11928,shipping:4544,adCost:18176,fees:1938,returns:1107,img:'🖤'},
  {name:'Waist Trainer Pro',orders:890,revenue:43610,cogs:8010,shipping:2848,adCost:15274,fees:1526,returns:872,img:'🔥'},
  {name:'Compression Leggings — Navy',orders:680,revenue:26520,cogs:5712,shipping:2176,adCost:10608,fees:928,returns:530,img:'💙'},
  {name:'Arm Shaper Set',orders:520,revenue:17680,cogs:4160,shipping:1664,adCost:7072,fees:619,returns:354,img:'💪'},
  {name:'Thigh Trimmer',orders:390,revenue:11310,cogs:2730,shipping:1248,adCost:4524,fees:396,returns:226,img:'🦵'},
  {name:'Leggings + Trainer Bundle',orders:310,revenue:24490,cogs:5580,shipping:992,adCost:7347,fees:857,returns:490,img:'📦'},
];

function renderPnL(){
  $('#pnl-grid').innerHTML=products.map(p=>{
    const contrib=p.revenue-p.cogs-p.shipping-p.adCost-p.fees-p.returns;
    const margin=(contrib/p.revenue*100).toFixed(1);
    const cpa=(p.adCost/p.orders).toFixed(2);
    const marginColor=margin>=30?'var(--green)':margin>=15?'var(--accent)':'var(--red)';
    return `<div class="pnl-card">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
        <div style="display:flex;align-items:center;gap:8px">
          <span style="font-size:20px">${p.img}</span>
          <div><div style="font-size:13px;font-weight:600">${p.name}</div><div style="font-size:11px;color:var(--text-muted)">${p.orders} orders this month</div></div>
        </div>
        <div style="text-align:right"><div style="font-size:20px;font-weight:700;color:${marginColor}">${margin}%</div><div style="font-size:10px;color:var(--text-muted)">margin</div></div>
      </div>
      <div class="pnl-row"><span style="color:var(--text-dim)">Revenue</span><span class="pnl-pos">${fmt(p.revenue)}</span></div>
      <div class="pnl-row"><span style="color:var(--text-dim)">COGS (${pct(p.cogs,p.revenue)})</span><span class="pnl-neg">-${fmt(p.cogs)}</span></div>
      <div class="pnl-row"><span style="color:var(--text-dim)">Shipping (${pct(p.shipping,p.revenue)})</span><span class="pnl-neg">-${fmt(p.shipping)}</span></div>
      <div class="pnl-row"><span style="color:var(--text-dim)">Ad cost · CPA $${cpa} (${pct(p.adCost,p.revenue)})</span><span class="pnl-neg">-${fmt(p.adCost)}</span></div>
      <div class="pnl-row"><span style="color:var(--text-dim)">Processing fees (${pct(p.fees,p.revenue)})</span><span class="pnl-neg">-${fmt(p.fees)}</span></div>
      <div class="pnl-row"><span style="color:var(--text-dim)">Returns (${pct(p.returns,p.revenue)})</span><span class="pnl-neg">-${fmt(p.returns)}</span></div>
      <div class="pnl-row total"><span>Contribution</span><span style="color:${marginColor}">${fmt(contrib)} (${margin}%)</span></div>
      <div style="margin-top:10px;display:flex;gap:6px">
        <button class="btn btn-ghost btn-sm" onclick="alert('Optimizing ad spend allocation for ${p.name}...')">🎯 Optimize ads</button>
        <button class="btn btn-ghost btn-sm" onclick="alert('Finding alternative suppliers for ${p.name}...')">📦 Find cheaper supplier</button>
      </div>
    </div>`;
  }).join('');
}

/* ===== KEYBOARD SHORTCUTS ===== */
document.addEventListener('keydown',(e)=>{
  // Cmd+K or Ctrl+K: command palette
  if((e.metaKey||e.ctrlKey)&&e.key==='k'){e.preventDefault();openCmdPalette();return}
  // Escape: close modals
  if(e.key==='Escape'){
    if($('#cmd-overlay').classList.contains('open'))closeCmdPalette();
    else if($('#modal-overlay').classList.contains('open'))closeModal();
    else if($('#chat-panel').classList.contains('open'))toggleChat();
  }
});

/* ===== THEME ===== */
function setTheme(theme){
  localStorage.setItem('mers-theme',theme);
  if(theme==='dark'){document.documentElement.removeAttribute('data-theme')}
  else{document.documentElement.setAttribute('data-theme',theme)}
  renderSettings();
}
function initTheme(){
  const theme=localStorage.getItem('mers-theme')||'dark';
  if(theme!=='dark'){document.documentElement.setAttribute('data-theme',theme)}
}

/* ===== ACCOUNT PAGE ===== */
function renderAccount(){
  $('#page-account').innerHTML=`
    <div style="max-width:800px">
      <h2 style="font-size:17px;font-weight:700;margin-bottom:4px">Account</h2>
      <p style="font-size:12px;color:var(--text-dim);margin-bottom:20px">Manage your profile and team.</p>
      <div class="settings-section">
        <h4>👤 Profile</h4>
        <div class="profile-card">
          <div class="profile-avatar">A</div>
          <div>
            <div style="font-size:15px;font-weight:700">Aldiyar</div>
            <div style="font-size:12px;color:var(--text-dim)">aldiyar@mers.ai</div>
            <div style="font-size:11px;color:var(--accent);margin-top:2px">Owner</div>
          </div>
        </div>
        <div class="settings-row"><span style="color:var(--text-dim)">Full Name</span><span style="color:var(--text)">Aldiyar</span></div>
        <div class="settings-row"><span style="color:var(--text-dim)">Email</span><span style="color:var(--text)">aldiyar@mers.ai</span></div>
        <div class="settings-row"><span style="color:var(--text-dim)">Role</span><span class="card-tag tag-agent" style="font-size:10.5px">Owner</span></div>
        <div style="margin-top:12px"><button class="btn btn-ghost btn-sm" onclick="alert('Edit profile...')">Edit profile</button></div>
      </div>
      <div class="settings-section">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
          <h4 style="margin-bottom:0">👥 Team Members</h4>
          <button class="btn btn-primary btn-sm" onclick="openInviteModal()">+ Invite team member</button>
        </div>
        <table class="team-table">
          <thead><tr><th>Member</th><th>Email</th><th>Role</th><th>Status</th><th></th></tr></thead>
          <tbody>
            <tr><td><div style="display:flex;align-items:center;gap:8px"><div style="width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,var(--accent),var(--green));display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:#000">A</div><strong>Aldiyar</strong></div></td><td style="color:var(--text-dim)">aldiyar@mers.ai</td><td><span class="card-tag tag-agent" style="font-size:10.5px">Owner</span></td><td style="color:var(--green);font-size:11px">● Active</td><td></td></tr>
            <tr><td><div style="display:flex;align-items:center;gap:8px"><div style="width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,var(--blue),var(--purple));display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:#fff">S</div><strong>Sarah</strong></div></td><td style="color:var(--text-dim)">sarah@mers.ai</td><td><span class="card-tag tag-human" style="font-size:10.5px">Admin</span></td><td style="color:var(--green);font-size:11px">● Active</td><td><button class="btn btn-ghost btn-sm" onclick="alert('Edit member...')">Edit</button></td></tr>
            <tr><td><div style="display:flex;align-items:center;gap:8px"><div style="width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,var(--orange),var(--red));display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:#fff">M</div><strong>Mike</strong></div></td><td style="color:var(--text-dim)">mike@mers.ai</td><td><span class="card-tag tag-source" style="font-size:10.5px">Analyst</span></td><td style="color:var(--green);font-size:11px">● Active</td><td><button class="btn btn-ghost btn-sm" onclick="alert('Edit member...')">Edit</button></td></tr>
            <tr><td><div style="display:flex;align-items:center;gap:8px"><div style="width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,var(--pink),var(--purple));display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:#fff">J</div><strong>Jess</strong></div></td><td style="color:var(--text-dim)">jess@mers.ai</td><td><span style="font-size:10.5px;padding:2px 7px;border-radius:4px;background:rgba(255,159,67,.1);color:var(--orange);border:1px solid rgba(255,159,67,.15);font-weight:600">Ad Manager</span></td><td style="color:var(--orange);font-size:11px">● Invited</td><td><button class="btn btn-ghost btn-sm" onclick="alert('Edit member...')">Edit</button></td></tr>
          </tbody>
        </table>
      </div>
      <div class="settings-section">
        <h4>🔐 Role Permissions</h4>
        <table class="team-table">
          <thead><tr><th>Permission</th><th style="text-align:center">Owner</th><th style="text-align:center">Admin</th><th style="text-align:center">Analyst</th><th style="text-align:center">Ad Manager</th></tr></thead>
          <tbody>
            <tr><td>View dashboard & analytics</td><td style="text-align:center">✅</td><td style="text-align:center">✅</td><td style="text-align:center">✅</td><td style="text-align:center">✅</td></tr>
            <tr><td>Manage tasks</td><td style="text-align:center">✅</td><td style="text-align:center">✅</td><td style="text-align:center">—</td><td style="text-align:center">✅</td></tr>
            <tr><td>Edit knowledge base</td><td style="text-align:center">✅</td><td style="text-align:center">✅</td><td style="text-align:center">✅</td><td style="text-align:center">—</td></tr>
            <tr><td>Execute playbooks</td><td style="text-align:center">✅</td><td style="text-align:center">✅</td><td style="text-align:center">—</td><td style="text-align:center">✅</td></tr>
            <tr><td>Manage integrations</td><td style="text-align:center">✅</td><td style="text-align:center">✅</td><td style="text-align:center">—</td><td style="text-align:center">—</td></tr>
            <tr><td>Billing & team management</td><td style="text-align:center">✅</td><td style="text-align:center">—</td><td style="text-align:center">—</td><td style="text-align:center">—</td></tr>
            <tr><td>Agent kill/scale overrides</td><td style="text-align:center">✅</td><td style="text-align:center">✅</td><td style="text-align:center">—</td><td style="text-align:center">—</td></tr>
          </tbody>
        </table>
      </div>
    </div>`;
}

function openInviteModal(){
  openModal('<h3>Invite Team Member</h3>'+
    '<label>Email address</label><input id="inv-email" placeholder="colleague@company.com">'+
    '<label>Role</label><select id="inv-role"><option value="admin">Admin</option><option value="analyst">Analyst</option><option value="ad-manager">Ad Manager</option></select>'+
    '<p style="font-size:11px;color:var(--text-dim);margin-top:12px">They\'ll receive an email invitation to join your workspace.</p>'+
    '<div class="modal-actions"><button class="btn btn-ghost" onclick="closeModal()">Cancel</button><button class="btn btn-primary" onclick="closeModal();addNotif(\'📧\',\'Invitation sent\',\'Invite email sent to \'+($$(\'#inv-email\')[0]&&$$(\'#inv-email\')[0].value||\'team member\'))">Send invite</button></div>');
}

/* ===== SETTINGS PAGE ===== */
function renderSettings(){
  var theme=localStorage.getItem('mers-theme')||'dark';
  var lightActive=theme==='light'?' active':'';
  var systemActive=theme==='system'?' active':'';
  var darkActive=theme==='dark'?' active':'';
  $('#page-settings').innerHTML='<div style="max-width:800px">'+
    '<h2 style="font-size:17px;font-weight:700;margin-bottom:4px">Settings</h2>'+
    '<p style="font-size:12px;color:var(--text-dim);margin-bottom:20px">Customize your experience.</p>'+
    '<div class="settings-section">'+
      '<h4>🎨 Appearance</h4>'+
      '<p style="font-size:11.5px;color:var(--text-dim);margin-bottom:12px">Choose your preferred color mode.</p>'+
      '<div style="display:flex;gap:8px">'+
        '<button class="theme-btn'+lightActive+'" onclick="setTheme(\'light\')">☀️ Light</button>'+
        '<button class="theme-btn'+systemActive+'" onclick="setTheme(\'system\')">💻 System</button>'+
        '<button class="theme-btn'+darkActive+'" onclick="setTheme(\'dark\')">🌙 Dark</button>'+
      '</div>'+
    '</div>'+
    '<div class="settings-section">'+
      '<h4>🔔 Notification Preferences</h4>'+
      '<div class="settings-row"><span>Email notifications</span><div class="toggle-switch on" onclick="this.classList.toggle(\'on\')"></div></div>'+
      '<div class="settings-row"><span>Push notifications</span><div class="toggle-switch on" onclick="this.classList.toggle(\'on\')"></div></div>'+
      '<div class="settings-row"><span>Telegram alerts</span><div class="toggle-switch on" onclick="this.classList.toggle(\'on\')"></div></div>'+
      '<div class="settings-row"><span>SMS alerts</span><div class="toggle-switch" onclick="this.classList.toggle(\'on\')"></div></div>'+
    '</div>'+
    '<div class="settings-section">'+
      '<h4>🔑 API Keys</h4>'+
      '<div class="settings-row">'+
        '<div><div style="font-size:12px;font-weight:600">Live API Key</div><div class="api-key" id="api-key-live">demo_live_••••••••••••xxxx</div></div>'+
        '<div style="display:flex;gap:6px"><button class="btn btn-ghost btn-sm" onclick="toggleApiKey(\'live\')">👁 Reveal</button><button class="btn btn-ghost btn-sm" onclick="navigator.clipboard&&navigator.clipboard.writeText(\'demo_live_xxxxxxxxxxxxxxxxxxxx\');alert(\'Copied!\')">📋 Copy</button></div>'+
      '</div>'+
      '<div class="settings-row">'+
        '<div><div style="font-size:12px;font-weight:600">Test API Key</div><div class="api-key" id="api-key-test">demo_test_••••••••••••xxxx</div></div>'+
        '<div style="display:flex;gap:6px"><button class="btn btn-ghost btn-sm" onclick="toggleApiKey(\'test\')">👁 Reveal</button><button class="btn btn-ghost btn-sm" onclick="navigator.clipboard&&navigator.clipboard.writeText(\'demo_test_xxxxxxxxxxxxxxxxxxxx\');alert(\'Copied!\')">📋 Copy</button></div>'+
      '</div>'+
      '<div style="margin-top:10px"><button class="btn btn-ghost btn-sm" onclick="alert(\'Generating new API key...\')">+ Generate new key</button></div>'+
    '</div>'+
    '<div class="settings-section">'+
      '<h4>🔗 Connected Accounts</h4>'+
      '<div class="settings-row"><span><strong>Shopify</strong> — slimnfit.myshopify.com</span><span style="color:var(--green);font-size:11px">● Connected</span></div>'+
      '<div class="settings-row"><span><strong>Meta Ads</strong> — Business ID: 4819***</span><span style="color:var(--green);font-size:11px">● Connected</span></div>'+
      '<div class="settings-row"><span><strong>Stripe</strong> — acct_1N***</span><span style="color:var(--green);font-size:11px">● Connected</span></div>'+
      '<div class="settings-row"><span><strong>Klaviyo</strong></span><span style="color:var(--orange);font-size:11px">● Pending</span></div>'+
    '</div>'+
    '<div class="settings-section danger-zone">'+
      '<h4>⚠️ Danger Zone</h4>'+
      '<div class="settings-row">'+
        '<div><div style="font-size:12px;font-weight:600">Export all data</div><div style="font-size:11px;color:var(--text-dim)">Download a full export of your account data.</div></div>'+
        '<button class="btn btn-ghost btn-sm" onclick="alert(\'Preparing data export...\')">Export data</button>'+
      '</div>'+
      '<div class="settings-row">'+
        '<div><div style="font-size:12px;font-weight:600;color:var(--red)">Delete account</div><div style="font-size:11px;color:var(--text-dim)">Permanently delete your account and all data.</div></div>'+
        '<button class="btn btn-danger btn-sm" onclick="if(confirm(\'Are you sure? This cannot be undone.\'))alert(\'Account deletion initiated.\')">Delete account</button>'+
      '</div>'+
    '</div>'+
  '</div>';
}

function toggleApiKey(type){
  const el=$('#api-key-'+type);
  if(!el)return;
  if(el.dataset.revealed){
    el.textContent=type==='live'?'demo_live_••••••••••••xxxx':'demo_test_••••••••••••xxxx';
    delete el.dataset.revealed;
  } else {
    el.textContent=type==='live'?'demo_live_xxxxxxxxxxxxxxxxxxxx':'demo_test_xxxxxxxxxxxxxxxxxxxx';
    el.dataset.revealed='1';
  }
}

/* ===== ANIMATION HELPERS ===== */
function applyStagger(container,selector){
  if(!container)return;
  const items=container.querySelectorAll(selector);
  items.forEach((el,i)=>{
    el.style.opacity='0';
    el.style.animation='staggerFade .4s ease '+(i*50)+'ms both';
  });
}

function animateCountUp(el,target,duration){
  const txt=target.toString();
  const isPercent=txt.includes('%');
  const isDollar=txt.includes('$');
  const isX=txt.includes('x');
  let num=parseFloat(txt.replace(/[\$,%x,]/g,''));
  if(isNaN(num))return;
  const startTime=performance.now();
  const dur=duration||600;
  function tick(now){
    const elapsed=now-startTime;
    const progress=Math.min(elapsed/dur,1);
    const eased=1-Math.pow(1-progress,3);
    const current=num*eased;
    let display;
    if(isDollar)display='$'+Math.round(current).toLocaleString('en-US');
    else if(isPercent)display=Math.round(current)+'%';
    else if(isX)display=current.toFixed(2)+'x';
    else display=Math.round(current).toString();
    el.textContent=display;
    if(progress<1)requestAnimationFrame(tick);
    else el.textContent=txt;
  }
  requestAnimationFrame(tick);
}

/* ===== INIT ===== */
document.addEventListener('DOMContentLoaded',()=>{
  initTheme();
  renderDashboard();renderTasks();renderActivity();renderKBFilters();renderKB();renderPlaybooks();renderCashFlow();renderIntegrations();renderNotifs();renderTicker();renderCompetitors();renderTrending();renderPnL();

  // Animate dashboard stat numbers on load
  setTimeout(()=>{
    document.querySelectorAll('#page-dashboard [style*="font-size:22px"]').forEach(el=>{
      const text=el.textContent.trim();
      if(text.match(/^[\$\d]/))animateCountUp(el,text,800);
    });
    document.querySelectorAll('#global-stats .stat-val').forEach(el=>{
      animateCountUp(el,el.textContent.trim(),600);
    });
  },100);
  // Apply stagger to dashboard on first load
  setTimeout(()=>applyStagger($('#page-dashboard'),'.dash-card,.insight-item'),50);
  // Refresh activity timestamps periodically
  setInterval(()=>{renderActivity();renderDashboard()},30000);
  // Simulate live events
  const liveEvents=[
    ()=>addNotif('🛒','New order: '+['Compression Leggings Black','Waist Trainer Pro','Arm Shaper Set','Leggings + Trainer Bundle'][Math.floor(Math.random()*4)],'$'+[39,49,34,78][Math.floor(Math.random()*4)]+'.00 — '+['New York','London','Toronto','Sydney','Berlin'][Math.floor(Math.random()*5)]),
    ()=>addNotif('📈','Ad performance update','UGC Hook #3 ROAS improved to '+(2.5+Math.random()*2).toFixed(1)+'x in last hour'),
    ()=>addNotif('🧠','Knowledge base updated','New tactic extracted from '+['Biaheza','Jordan Welsh','Sara Finance','Davie Fogarty'][Math.floor(Math.random()*4)]+' — confidence '+Math.floor(75+Math.random()*20)+'%'),
    ()=>addNotif('⚡','Kill rule check','All '+Math.floor(8+Math.random()*5)+' active ad sets within thresholds ✓'),
    ()=>addNotif('🔍','Competitor scan complete',['SlimWear.co','CurveQueen','BodyShape Pro'][Math.floor(Math.random()*3)]+': no significant changes'),
  ];
  setInterval(()=>liveEvents[Math.floor(Math.random()*liveEvents.length)](),30000);

  // Update dashboard greeting periodically
  setInterval(renderDashboard,60000);
});