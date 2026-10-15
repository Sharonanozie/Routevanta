(() => {
  'use strict';
  const menu = document.querySelector('.menu-button');
  const mobile = document.querySelector('.mobile-nav');
  if (menu && mobile) {
    menu.addEventListener('click', () => {
      const opening = menu.getAttribute('aria-expanded') !== 'true';
      menu.setAttribute('aria-expanded', String(opening));
      menu.setAttribute('aria-label', opening ? 'Close navigation' : 'Open navigation');
      mobile.hidden = !opening;
    });
    mobile.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      mobile.hidden = true;
      menu.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-label', 'Open navigation');
    }));
  }
  const audienceData = {
    retail: {number:'01',category:'ONLINE RETAILERS',headline:'Keep the promise after checkout.',description:'Coordinate outgoing orders, follow rider progress and organise delivery confirmations without switching between endless chats.',detail:'Designed for e-commerce merchants and social sellers',graphic:'▣ <span>→</span> ◉'},
    courier: {number:'02',category:'COURIER OPERATORS',headline:'Make every dispatch more manageable.',description:'Bring jobs, riders and delivery status into one workflow, with room to grow as more businesses rely on your team.',detail:'Designed for independent courier companies and fleets',graphic:'♧ <span>→</span> ⌖'},
    local: {number:'03',category:'LOCAL DELIVERY TEAMS',headline:'More visibility into your daily deliveries.',description:'Move away from scattered calls and messages toward a simpler overview of local orders, rider assignments and handoffs.',detail:'Designed for shops, pharmacies and local service teams',graphic:'▤ <span>→</span> ✓'}
  };
  const tabs = document.querySelectorAll('.audience-tab');
  const panel = document.getElementById('audience-detail');
  const activateTab = (button) => {
    const entry = audienceData[button.dataset.audience];
    if (!entry || !panel) return;
    tabs.forEach(tab => {tab.classList.toggle('active',tab===button);tab.setAttribute('aria-selected',String(tab===button));});
    panel.querySelector('.panel-caption').textContent = `USE CASE / ${entry.number}`;
    panel.querySelector('.audience-category').textContent = entry.category;
    panel.querySelector('h3').textContent = entry.headline;
    panel.querySelector('p').textContent = entry.description;
    panel.querySelector('.audience-small').textContent = entry.detail;
    panel.querySelector('.panel-illustration').innerHTML = entry.graphic;
  };
  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => activateTab(tab));
    tab.addEventListener('keydown', event => {
      if (!['ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(event.key)) return;
      event.preventDefault();
      const increment = ['ArrowRight','ArrowDown'].includes(event.key) ? 1 : -1;
      const next = tabs[(i + increment + tabs.length) % tabs.length];
      next.focus(); activateTab(next);
    });
  });
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
  // Demo uses fictional data and runs entirely in the browser. No backend exists.
  const demoRoot = document.querySelector('[data-demo]');
  if (!demoRoot) return;
  const originals = [
    {id:'RV-1041',name:'Riverside Market',rider:'Amina',status:'active'},
    {id:'RV-1042',name:'Oakview Pharmacy',rider:'Not assigned',status:'pending'},
    {id:'RV-1043',name:'Northside Studio',rider:'Not assigned',status:'pending'},
    {id:'RV-1044',name:'Meadow Groceries',rider:'Tunde',status:'done'},
    {id:'RV-1045',name:'Central Books',rider:'Not assigned',status:'pending'}
  ];
  let orders = originals.map(order=>({...order}));
  const list = document.getElementById('orders');
  const assign = document.getElementById('assign');
  const complete = document.getElementById('complete');
  const reset = document.getElementById('reset');
  const announcer = document.getElementById('demo-announcement');
  const render = () => {
    document.getElementById('count-all').textContent = String(orders.length).padStart(2,'0');
    document.getElementById('count-active').textContent = String(orders.filter(x=>x.status==='active').length).padStart(2,'0');
    document.getElementById('count-done').textContent = String(orders.filter(x=>x.status==='done').length).padStart(2,'0');
    list.replaceChildren();
    orders.forEach((order) => {
      const row=document.createElement('div'); row.className='demo-order';
      const badge=document.createElement('span');badge.className='order-badge';badge.textContent='▣';
      const details=document.createElement('div');details.className='order-details';
      const strong=document.createElement('strong');strong.textContent=order.id+' · '+order.name;
      const small=document.createElement('small');small.textContent='Rider: '+order.rider;
      details.append(strong,small);
      const status=document.createElement('span');status.className='status '+order.status;
      status.textContent={pending:'PENDING',active:'ON ROUTE',done:'DELIVERED'}[order.status];
      row.append(badge,details,status);list.append(row);
    });
    assign.disabled=!orders.some(x=>x.status==='pending');
    complete.disabled=!orders.some(x=>x.status==='active');
  };
  assign.addEventListener('click',()=>{
    const next=orders.find(x=>x.status==='pending'); if (!next)return;
    next.status='active';next.rider=['Chika','Samuel','Ada'][originals.filter(x=>x.status==='pending').findIndex(x=>x.id===next.id)] || 'Alex';
    announcer.textContent=`Assigned sample order ${next.id}.`;render();
  });
  complete.addEventListener('click',()=>{
    const next=orders.find(x=>x.status==='active');if(!next)return;
    next.status='done';announcer.textContent=`Marked sample order ${next.id} as delivered.`;render();
  });
  reset.addEventListener('click',()=>{orders=originals.map(x=>({...x}));announcer.textContent='Sample data reset.';render();});
  render();
})();
