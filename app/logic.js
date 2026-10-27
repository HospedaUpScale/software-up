/* Núcleo de cálculos puros do Software UP. Valores internos em números (R$), arredondamento na apresentação. */
(function(root,factory){const lib=factory();if(typeof module==='object'&&module.exports)module.exports=lib;root.UPLogic=lib;})(typeof window!=='undefined'?window:globalThis,function(){
 'use strict';
 const finite=(v)=>{const x=Number(v);return Number.isFinite(x)?x:0;};
 const sum=(xs)=>xs.reduce((a,b)=>a+finite(b),0);
 const round1=x=>Math.round((x+Number.EPSILON)*10)/10;
 const average=xs=>xs.length?round1(sum(xs)/xs.length):0;
 const norm=(v,rev)=>rev?finite(v):finite(v);
 function diagnostic(d){
  const roda=d.roda||{},radar=d.radar||{};
  const rs=Object.values(roda).map(x=>finite(x&&x.score)),bs=Object.values(radar).map(x=>finite(x&&x.score));
  if(rs.length!==8||bs.length!==4)throw Error('Notas incompletas');
  if([...rs,...bs].some(v=>v<0||v>10))throw Error('Notas fora do intervalo');
  const minR=Math.min(...rs),minB=Math.min(...bs);
  const cuidados=Object.keys(roda).filter(k=>finite(roda[k].score)===minR);
  const gargalos=Object.keys(radar).filter(k=>finite(radar[k].score)===minB);
  const gargalo=gargalos.includes(d.gargalo)?d.gargalo:gargalos[0];
  return {mediaRoda:average(rs),mediaRadar:average(bs),cuidados,gargalos,gargalo,roda,radar,dificuldade:d.dificuldade||'',perfil:d.perfil||{}};
 }
 function finance(f){
  const revenue=finite(f.revenue),sales=finite(f.sales),cvf=f.variable||{};
  const cv=sum(['tax','fees','commission','material'].map(k=>{const v=cvf[k]||{};return v.unit==='percent'?revenue*finite(v.value)/100:finite(v.value);}));
  const mc=revenue-cv,mcPct=revenue>0?mc/revenue:0;
  const fixed=sum(Object.values(f.fixed||{}));const owner=finite(f.owner),house=finite(f.house);
  const ds=f.debts||[];
  const corpDebt=sum(ds.filter(d=>d.scope==='empresa').map(d=>d.payment));
  const personalDebt=sum(ds.filter(d=>d.scope==='pessoal').map(d=>d.payment));
  const liquid=mc-fixed-owner;const afterDebt=liquid-corpDebt;
  const breakEven=mcPct>0?(fixed+owner)/mcPct:null;
  const slack=breakEven!==null&&revenue>0?(revenue-breakEven)/revenue:null;
  const months=(fixed+owner)>0?finite(f.reserveCompany)/(fixed+owner):null;
  const debtWeight=revenue>0?corpDebt/revenue:null;
  const houseLeft=owner-house-personalDebt;
  const afterPct=revenue>0?afterDebt/revenue:null;
  const overdue=ds.some(d=>!!d.overdue);
  const separate=f.separate||'as_vezes';
  const traffic={
   separate:separate==='sim'?'verde':separate==='nao'?'vermelho':'amarelo',
   after:afterPct===null?'indisponivel':afterPct<0?'vermelho':afterPct<=.1?'amarelo':'verde',
   slack:slack===null?'indisponivel':slack<0?'vermelho':slack<=.2?'amarelo':'verde',
   reserve:months===null?'indisponivel':months<1?'vermelho':months<3?'amarelo':'verde',
   debt:debtWeight===null?'indisponivel':overdue||debtWeight>.2?'vermelho':debtWeight>=.1?'amarelo':'verde',
   house:houseLeft<0?'vermelho':houseLeft<=owner*.1?'amarelo':'verde'};
  const steps=[];
  if(overdue)steps.push('Comece pelas dívidas em atraso e procure renegociar primeiro as de juros mais altos.');
  if(separate!=='sim')steps.push('Separe as contas: a conta da empresa paga só a empresa, e você define um dia fixo e um valor fixo de retirada.');
  if(afterDebt<0)steps.push('A empresa está gastando mais do que gera. Revise custos fixos e preço antes de buscar mais vendas.');
  if(breakEven!==null&&revenue<breakEven)steps.push('Faltam '+new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(breakEven-revenue)+' por mês para empatar.');
  if(houseLeft<0)steps.push('A sua casa custa mais do que você retira. Ajuste o orçamento da casa ou a retirada antes de assumir novos compromissos.');
  if(months!==null&&months<1)steps.push('Defina um valor fixo por mês para começar a reserva da empresa.');
  if(!steps.length)steps.push('Seus números estão saudáveis. Use o Módulo 3 para crescer com base.');
  return {revenue,sales,cv,mc,mcPct,fixed,operating:mc-fixed,owner,liquid,corpDebt,personalDebt,afterDebt,afterPct,ticket:sales>0?revenue/sales:null,breakEven,slack,months,debtWeight,houseLeft,traffic,steps:steps.slice(0,3),orderedDebts:[...ds].sort((a,b)=>Number(!!b.overdue)-Number(!!a.overdue)||finite(b.rate)-finite(a.rate))};
 }
 function simulateDebt(balance,rate,payment,extra){let b=finite(balance),r=finite(rate)/100,p=finite(payment)+finite(extra);if(b<=0)return 0;if(p<=b*r||p<=0)return null;let n=0;while(b>.005&&n<1200){b=Math.max(0,b*(1+r)-p);n++;}return n<1200?n:null;}
 return {diagnostic,finance,simulateDebt,average};
});
