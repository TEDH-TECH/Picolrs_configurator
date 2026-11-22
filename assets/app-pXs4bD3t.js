(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function a(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=a(s);fetch(s.href,o)}})();const M=""+new URL("tedh-logo-CPMey91_.png",import.meta.url).href,k=[{id:"v1.1",label:"Version 1 (V1.1)",description:"No amplifier"},{id:"v2",label:"Version 2",description:"With PA/LNA amplifier"}],C=[{id:"picolrs",label:"PicoLRS (ELRS)",description:"ExpressLRS, settings over USB",usbConfig:!0},{id:"mlrs",label:"mLRS (MAVLink)",description:"MAVLink telemetry, BOOTSEL flash",usbConfig:!1}],D=[],N=[{id:"picolrs-v2-v0.1.1",target:"picolrs",hardware:"v2",version:"v0.1.1",releasedAt:"2026-11-22",notes:"Includes the Version 2 settings file, which turns on the board's amplifier.",files:[{role:"RX",kind:"fs",use:"V2 settings file system, flash first on a new install",name:"FS.UF2",path:"picolrs/2026-11-22/V2/FS.UF2",sha256:"349b561b7155ff17a22e8151b02748ba139703b579bf9c33ae4f2adf5c168355"},{role:"RX",kind:"firmware",use:"Receiver firmware (same file as V1.1)",name:"FIRMWARE.UF2",path:"v0.1.1/RP2350_RX_2400/FIRMWARE.UF2",sha256:"28471edf973fc97adc0e5e44d09b1cb9cc31580837d1d3832bea5432591ad8ec"}]},{id:"mlrs-v2-2026-11-21",target:"mlrs",hardware:"v2",version:"v1.4.03",releasedAt:"2026-11-21",notes:"mLRS port for RP2354 + SX1280 with the V2 PA/LNA.",files:[{role:"RX",use:"Receiver in the drone",name:"mlrs_rx_v2.uf2",path:"mlrs/2026-11-21/V2/mlrs_rx_v2.uf2",sha256:"1ce775078315ab70ab08a2180f89a2c636b7a7c9c7490494d210e2ad10e99bee"},{role:"TX",use:"Transmitter module",name:"mlrs_tx_v2.uf2",path:"mlrs/2026-11-21/V2/mlrs_tx_v2.uf2",sha256:"d9dd4a163fefe9c6df0cbf14d5b6eedfa711eaf2d6cf5f245dcc9ccdd90d79ee"}]},{id:"mlrs-v1.1-2026-11-21",target:"mlrs",hardware:"v1.1",version:"v1.4.03",releasedAt:"2026-11-21",notes:"mLRS port for RP2354 + SX1280.",files:[{role:"RX",use:"Receiver in the drone",name:"mlrs_rx_v1_1.uf2",path:"mlrs/2026-11-21/V1.1/mlrs_rx_v1_1.uf2",sha256:"68f86b22d7e9eb580bc4f09e9bfbd14161788b8bf03ea15f362f6907e1443fd7"},{role:"TX",use:"Transmitter module",name:"mlrs_tx_v1_1.uf2",path:"mlrs/2026-11-21/V1.1/mlrs_tx_v1_1.uf2",sha256:"0d490ab0a46bb693248cadda9795754ff37cbaeaa2afdbec95dc7421164e5511"}]},{id:"picolrs-v1.1-v0.1.1",target:"picolrs",hardware:"v1.1",version:"v0.1.1",releasedAt:"2026-08-17",notes:"RX power update.",files:[{role:"RX",kind:"fs",use:"File system, flash first on a new install",name:"FS.UF2",path:"v0.1.1/RP2350_RX_2400/FS.UF2",sha256:"8e379dc77c40059e4004413672c7f2e7f71cf441ddefc9d38e9e70d01a49e685"},{role:"RX",kind:"firmware",use:"Receiver firmware",name:"FIRMWARE.UF2",path:"v0.1.1/RP2350_RX_2400/FIRMWARE.UF2",sha256:"28471edf973fc97adc0e5e44d09b1cb9cc31580837d1d3832bea5432591ad8ec"}]},{id:"picolrs-v1.1-v0.1.0",target:"picolrs",hardware:"v1.1",version:"v0.1.0",releasedAt:"2026-08-11",notes:"Initial RP2350 RX 2.4 GHz release.",files:[{role:"RX",kind:"fs",use:"File system, flash first on a new install",name:"FS.UF2",path:"v0.1.0/RP2350_RX_2400/FS.UF2",sha256:"530a9617c5279a518da5cb477629a577f1ff5acbd6c3de02a98a4b5341246414"},{role:"RX",kind:"firmware",use:"Receiver firmware",name:"FIRMWARE.UF2",path:"v0.1.0/RP2350_RX_2400/FIRMWARE.UF2",sha256:"f2585ba3958d50f1fa8cfc82e23b564f3abafac404bb5675b48ccc80285c32a0"}]}],h={hardware:k,targets:C,pending:D,builds:N},e={port:null,reader:null,writer:null,readBuffer:"",connected:!1,busy:!1,message:"",messageType:"info",page:"parameters",info:null,options:{},form:{bindPhrase:"",uid:[],region:localStorage.getItem("picolrs.region")||"FCC",flashRole:localStorage.getItem("picolrs.flashRole")||"RX",flashRxAsTx:localStorage.getItem("picolrs.flashRxAsTx")==="true",moduleMode:localStorage.getItem("picolrs.moduleMode")||"auto",isAirport:!1,uartBaud:42e4},droppedFiles:{fs:null,firmware:null},selectedHardwareId:localStorage.getItem("picolrs.hardware")||h.hardware[0]?.id||"",selectedFirmwareTargetId:"",selectedBuildId:""},O=[{id:"parameters",label:"Parameters"},{id:"flashing",label:"Flashing"}],W=[9600,57600,115200,230400,4e5,42e4,460800,921600],b=document.querySelector("#app");let B=null;function n(r,t="info"){e.message=r,e.messageType=t,p(),clearTimeout(B),t!=="error"&&(B=setTimeout(()=>{e.message="",document.querySelector(".toast")?.remove()},3500))}function f(r){e.busy=r,p()}function I(){const r=[e.info?.target,e.info?.product,e.info?.device,e.options["airport-uart-baud"]!==void 0?"TX":"",e.options["rcvr-uart-baud"]!==void 0?"RX":""].filter(Boolean).join(" ").toUpperCase();return r.includes("_TX")||r.includes(" TX")||r.endsWith("TX")?"TX":r.includes("_RX")||r.includes(" RX")||r.endsWith("RX")?"RX":"Unknown"}function H(){const r=e.options||{};e.form.uid=Array.isArray(r.uid)?r.uid.slice(0,6):[],e.form.isAirport=!!r["is-airport"],e.form.uartBaud=Number(r["rcvr-uart-baud"]??r["airport-uart-baud"]??e.form.uartBaud),e.form.moduleMode=localStorage.getItem("picolrs.moduleMode")||I().toLowerCase(),["auto","rx","tx"].includes(e.form.moduleMode)||(e.form.moduleMode="auto")}function w(){localStorage.setItem("picolrs.region",e.form.region),localStorage.setItem("picolrs.flashRole",e.form.flashRole),localStorage.setItem("picolrs.flashRxAsTx",String(e.form.flashRxAsTx)),localStorage.setItem("picolrs.moduleMode",e.form.moduleMode)}function V(){return h.hardware.find(r=>r.id===e.selectedHardwareId)}function j(){return h.targets.find(r=>r.id===e.selectedFirmwareTargetId)}function F(){return h.builds.filter(r=>r.hardware===e.selectedHardwareId&&r.target===e.selectedFirmwareTargetId)}function S(){const r=F();return r.find(t=>t.id===e.selectedBuildId)||r[0]}function q(){return h.pending?.find(r=>r.hardware===e.selectedHardwareId&&r.target===e.selectedFirmwareTargetId)?.reason}function x(r){return new URL(`firmware/releases/${r.path}`,window.location.href).toString()}function G(){localStorage.setItem("picolrs.hardware",e.selectedHardwareId)}function z(){return new TextEncoder}function J(){return new TextDecoder}async function Y(){if(!("serial"in navigator)){n("Web Serial is not available. Use Chrome or Edge from localhost or HTTPS.","error");return}try{f(!0),e.port=await navigator.serial.requestPort(),await e.port.open({baudRate:115200}),e.reader=e.port.readable.getReader(),e.writer=e.port.writable.getWriter(),e.connected=!0}catch(r){await v(),f(!1),n(`USB connection failed: ${r.message}`,"error");return}try{await T(),n("USB connected. Device parameters loaded.","success")}catch{await v(),n("This board did not answer. USB settings only work with PicoLRS firmware. A board running mLRS has no USB settings: flash it from the Flashing page using BOOTSEL.","error")}finally{f(!1)}}async function v(){try{e.reader&&(await e.reader.cancel(),e.reader.releaseLock())}catch{}try{e.writer&&e.writer.releaseLock()}catch{}try{(e.port?.readable||e.port?.writable)&&await e.port.close()}catch{}e.reader=null,e.writer=null,e.port=null,e.connected=!1,e.info=null,e.options={}}async function K(){await v(),e.info=null,e.options={},n("USB disconnected.","info")}async function y(r,t=3500){if(!e.connected||!e.reader||!e.writer)throw new Error("USB is not connected");e.readBuffer="",await e.writer.write(z().encode(`${r}
`));const a=Date.now()+t;for(;Date.now()<a;){const i=a-Date.now(),s=e.reader.read(),o=new Promise((m,c)=>{setTimeout(()=>c(new Error("Device did not answer in time")),i)}),{value:d,done:u}=await Promise.race([s,o]);if(u)throw new Error("USB device disconnected");e.readBuffer+=J().decode(d);const l=e.readBuffer.split(/\r?\n/);e.readBuffer=l.pop()||"";for(const m of l){const c=m.trim();if(!(!c||!c.startsWith("{")))try{return JSON.parse(c)}catch{}}}throw new Error("Device did not return JSON")}async function T(){f(!0);try{e.info=await y("$GET_INFO"),e.options=await y("$GET_OPTIONS"),H()}finally{f(!1)}}async function Q(r){r.preventDefault();const t=e.form.bindPhrase.trim()?A(e.form.bindPhrase.trim()):e.form.uid,a=Number(e.form.uartBaud);if(!Number.isInteger(a)||a<1200||a>2e6){n("UART baud rate must be between 1200 and 2000000.","error");return}const i={...e.options,uid:t,"is-airport":e.form.isAirport,"rcvr-uart-baud":a,"airport-uart-baud":a};w();try{f(!0);const s=await y(`$SET_OPTIONS ${JSON.stringify(i)}`,5e3);if(s.status!=="ok")throw new Error(s.msg||"device rejected settings");e.form.uid=t,e.form.bindPhrase="",await T(),n("Parameters saved to the PicoLRS module.","success")}catch(s){n(`Save failed: ${s.message}`,"error")}finally{f(!1)}}async function Z(){if(!e.connected){n("Connect USB on the Parameters page first, or hold BOOTSEL while plugging the board in.","error");return}try{f(!0);const r=await y("$REBOOT_BOOTLOADER",1500);if(r.status!=="rebooting")throw new Error(r.msg||"unexpected response");await v(),e.page="flashing",n("Bootloader command sent. Wait for the Pico bootloader drive to appear, then copy the UF2 files.","success")}catch(r){n(`Bootloader command failed: ${r.message}`,"error")}finally{f(!1)}}function ee(r){r.preventDefault(),E(r.dataTransfer?.files||[])}function E(r){const t=Array.from(r);for(const i of t){const s=i.name.toUpperCase();s==="FS.UF2"&&(e.droppedFiles.fs=i),s==="FIRMWARE.UF2"&&(e.droppedFiles.firmware=i)}const a=[e.droppedFiles.fs?"FS.UF2":null,e.droppedFiles.firmware?"FIRMWARE.UF2":null].filter(Boolean);a.length?n(`Ready: ${a.join(" and ")} selected.`,"success"):n("Drop exactly FS.UF2 and/or FIRMWARE.UF2.","error")}async function re(r){const t=e.droppedFiles[r];if(!t){n(`Drop ${r==="fs"?"FS.UF2":"FIRMWARE.UF2"} first.`,"error");return}if(!("showDirectoryPicker"in window)){n("Automatic copy is not available in this browser. Drag the UF2 file to the bootloader drive manually.","error");return}try{f(!0);const s=await(await(await window.showDirectoryPicker({mode:"readwrite"})).getFileHandle(t.name.toUpperCase(),{create:!0})).createWritable();await s.write(t),await s.close(),n(`${t.name.toUpperCase()} copied. If the drive disappeared, reconnect bootloader before copying the next UF2.`,"success")}catch(a){n(`Copy failed: ${a.message}`,"error")}finally{f(!1)}}async function te(){const r=S();if(!r){n("No firmware build is available for this selection.","error");return}if(e.form.flashRxAsTx&&!r.files.some(t=>t.role==="TX")){n("No PicoLRS TX firmware is published yet. Turn off Flash RX as TX on the Parameters page.","error");return}try{f(!0);const t=await Promise.all(r.files.map(async a=>{const i=await fetch(x(a));if(!i.ok)throw new Error(`${a.name} could not be downloaded`);const s=await i.blob();return[a.kind,new File([s],a.name,{type:"application/octet-stream"})]}));for(const[a,i]of t)e.droppedFiles[a]=i;n(`PicoLRS ${r.version} files are ready to copy.`,"success")}catch(t){n(`Could not load release files: ${t.message}`,"error")}finally{f(!1)}}function A(r){if(/^[0-9, ]+$/.test(r)){const a=r.split(",").map(s=>s.trim()).filter(Boolean).map(Number);if(a.length>=4&&a.length<=6&&a.every(s=>Number.isInteger(s)&&s>=0&&s<256)){for(;a.length<6;)a.unshift(0);return a}}const t=ae(`-DMY_BINDING_PHRASE="${r}"`);return Array.from(t.subarray(0,6))}function ae(r){const t=[];for(let R=0;R<64;)t[R]=0|Math.abs(Math.sin(++R))*4294967296;let a,i,s,o;const d=[],u=unescape(encodeURI(r));let l=u.length;const m=[a=1732584193,i=-271733879,~a,~i];let c=0;for(;c<=l;)d[c>>2]|=(u.charCodeAt(c)||128)<<8*(c++%4);for(d[r=(l+8>>6)*16+14]=l*8,c=0;c<r;c+=16){for(l=m,o=0;o<64;)l=[s=l[3],(a=l[1]|0)+((s=l[0]+[a&(i=l[2])|~a&s,s&a|~s&i,a^i^s,i^(a|~s)][l=o>>4]+(t[o]+(d[[o,5*o+1,3*o+5,7*o][l]%16+c]|0)))<<(l=[7,12,17,22,5,9,14,20,4,11,16,23,6,10,15,21][4*l+o++%4])|s>>>32-l),a,i];for(o=4;o;)m[--o]=m[o]+l[o]}const P=[];for(o=0;o<32;)P.push((m[o>>3]>>(1^o++&7)*4&15)*16+(m[o>>3]>>(1^o++&7)*4&15));return new Uint8Array(P)}function U(r){const t=e.info?.product||"PicoLRS";b.innerHTML=`
    <header class="appbar">
      <div class="appbar-inner">
        <div class="brand">
          <img class="brand-logo" src="${M}" alt="TEDH" />
          <span class="brand-name">PicoLRS <span>Configurator</span></span>
        </div>
        <nav class="tabs">
          ${O.map(a=>`
            <button class="${e.page===a.id?"active":""}" data-page="${a.id}">${a.label}</button>
          `).join("")}
        </nav>
        <div class="usb">
          <span class="usb-status ${e.connected?"online":""}">
            <i></i>${e.connected?`${_(t)} connected`:"Not connected"}
          </span>
          ${e.connected?`<button class="secondary" data-action="disconnect" ${e.busy?"disabled":""}>Disconnect</button>`:`<button data-action="connect" ${e.busy?"disabled":""}>Connect USB</button>`}
        </div>
      </div>
    </header>
    <main class="page">
      ${e.message&&e.messageType==="error"?`<div class="notice" role="alert">${e.message}</div>`:""}
      ${r}
    </main>
    ${e.message&&e.messageType!=="error"?`<div class="toast" role="status">${e.message}</div>`:""}
  `}function oe(){return e.connected?`
    <section class="device-strip">
      <dl>
        <div><dt>Product</dt><dd>${e.info?.product||"-"}</dd></div>
        <div><dt>Version</dt><dd>${e.info?.version||"-"}</dd></div>
        <div><dt>Target</dt><dd>${e.info?.target||"-"}</dd></div>
        <div><dt>Role</dt><dd>${I()}</dd></div>
      </dl>
      <button type="button" class="secondary" data-action="refresh" ${e.busy?"disabled":""}>Re-read</button>
    </section>
  `:`
      <section class="device-strip empty">
        <p><strong>No board connected.</strong> Plug in a PicoLRS board with a data cable and press <strong>Connect USB</strong> at the top right. mLRS boards have no USB settings.</p>
      </section>
    `}function se(){return Number(e.options["rcvr-uart-baud"]??e.options["airport-uart-baud"])}function ie(){return e.connected?!!e.form.bindPhrase.trim()||e.form.isAirport!==!!e.options["is-airport"]||Number(e.form.uartBaud)!==se():!1}function X(){const r=ie(),t=e.connected?r?"You have unsaved changes.":"The board matches what you see.":"Connect a board to change its settings.";return`
    <footer class="save-bar ${r?"dirty":""}">
      <span>${t}</span>
      <button type="submit" ${!r||e.busy?"disabled":""}>Save to board</button>
    </footer>
  `}function g(r,t,a,i=""){return`
    <div class="setting">
      <div class="setting-text">
        ${i?`<label for="${i}">${r}</label>`:`<span class="setting-label">${r}</span>`}
        ${t?`<small>${t}</small>`:""}
      </div>
      <div class="setting-control">${a}</div>
    </div>`}function L(r,t,a){return`<div class="segmented">${r.map(([i,s])=>`<button type="button" class="${t===i?"selected":""}" ${a}="${i}">${s}</button>`).join("")}</div>`}function ne(){const r=e.form.bindPhrase.trim()?A(e.form.bindPhrase.trim()).join(", "):e.form.uid.join(", ");return`
    ${oe()}
    <section class="settings-layout">
      <form class="settings-card" data-form="parameters">
        <header class="card-head">
          <h2>Module settings</h2>
          <p>Stored on the board. Written when you press Save to board.</p>
        </header>
        <!-- A disabled fieldset greys out every control inside it at once while no board is connected,
             so nobody edits default values thinking they came from the board. -->
        <fieldset ${e.connected?"":"disabled"}>
          ${g("Bind phrase",`Use the same phrase on both ends. UID bytes: <span id="uidPreview">${r||"not set"}</span>`,`<input id="bindPhrase" name="bindPhrase" type="text" autocomplete="off" value="${_(e.form.bindPhrase)}" placeholder="Phrase or UID bytes" />`,"bindPhrase")}
          ${g("UART baud rate","Speed of the serial link to the flight controller.",`<select id="uartBaud" name="uartBaud">${W.map(t=>`<option value="${t}" ${Number(e.form.uartBaud)===t?"selected":""}>${t}</option>`).join("")}</select>`,"uartBaud")}
          ${g("Use UART as AirPort","Send the UART through the radio link as a transparent serial port.",`<input class="switch" id="isAirport" name="isAirport" type="checkbox" ${e.form.isAirport?"checked":""} />`,"isAirport")}
        </fieldset>
        ${X()}
      </form>

      <section class="settings-card">
        <header class="card-head">
          <h2>Flashing preferences</h2>
          <p>Remembered in this browser only. Not sent to the board.</p>
        </header>
        ${g("Region","",L([["FCC","FCC"],["LBT","LBT"]],e.form.region,"data-region"))}
        ${g("TX/RX","",L([["auto","Auto"],["tx","TX"],["rx","RX"]],e.form.moduleMode,"data-module-mode"))}
        ${g("Flash RX as TX","Use TX firmware on this board.",`<input class="switch" id="flashRxAsTx" name="flashRxAsTx" type="checkbox" ${e.form.flashRxAsTx?"checked":""} />`,"flashRxAsTx")}
      </section>
    </section>
  `}function de(){const r=V(),t=j();return`
    <section class="flash-layout">
      ${le(r,t)}
      <section class="result">${ce(r,t)}</section>
    </section>
  `}function le(r,t){const a=t?F():[],i=a.length?S():null,s=(o,d,u)=>`
    <button type="button" class="tile ${u?"selected":""}" role="radio" aria-checked="${u}" ${o}="${d.id}">
      <strong>${d.label}</strong>
      <span>${d.description||""}</span>
    </button>`;return`
    <aside class="chooser">
      <div class="choice">
        <h3 id="hardwareLabel">Board</h3>
        <div class="tile-group" role="radiogroup" aria-labelledby="hardwareLabel">
          ${h.hardware.map(o=>s("data-pick-hardware",o,o.id===r?.id)).join("")}
        </div>
      </div>
      <div class="choice">
        <h3 id="targetLabel">Target</h3>
        <div class="tile-group" role="radiogroup" aria-labelledby="targetLabel">
          ${h.targets.map(o=>s("data-pick-target",o,o.id===t?.id)).join("")}
        </div>
      </div>
      ${i?`
        <div class="choice">
          <h3><label for="firmwareBuild">Firmware version</label></h3>
          <select id="firmwareBuild" name="firmwareBuild" ${a.length<2?"disabled":""}>
            ${a.map((o,d)=>`<option value="${o.id}" ${o.id===i.id?"selected":""}>${o.version} · ${o.releasedAt}${d===0?" (latest)":""}</option>`).join("")}
          </select>
        </div>`:""}
    </aside>
  `}function ce(r,t){if(!t)return`
      <div class="result-empty">
        <h2>Pick a target</h2>
        <p>Choose PicoLRS (ELRS) or mLRS (MAVLink) on the left. The files for ${r?.label||"your board"} appear here.</p>
      </div>`;if(!F().length)return`
      <div class="result-empty">
        <h2>${t.label} is not available for ${r?.label||"this board"} yet</h2>
        <p>${q()||"No firmware has been published for this combination."}</p>
      </div>`;const i=S();return`
    <header class="result-head">
      <h2>${t.label} for ${r?.label||i.hardware}</h2>
      <p class="build-meta">Firmware ${i.version} · Released ${i.releasedAt}</p>
      ${i.notes?`<p>${i.notes}</p>`:""}
    </header>
    ${t.id==="mlrs"?fe(i):ue(i)}
  `}function $(r,t){return`
    <div class="file-row">
      <div>
        <strong>${t}</strong>
        <code title="SHA-256 ${r.sha256}">${r.name}</code>
      </div>
      <a class="button-link" href="${x(r)}" download="${r.name}">Download</a>
    </div>`}function fe(r){return`
    <ol class="flash-steps">
      <li>
        <h3>Download the file for your device</h3>
        <div class="file-rows">
          ${r.files.map(t=>$(t,`${t.role} · ${t.use}`)).join("")}
        </div>
      </li>
      <li>
        <h3>Put the board in bootloader mode</h3>
        <p>Unplug it, hold <strong>BOOTSEL</strong>, plug in USB, then let go. A drive named <strong>RP2350</strong> appears.</p>
      </li>
      <li>
        <h3>Copy the file to the drive</h3>
        <p>Drag the RX file for the drone receiver, or the TX file for the transmitter module. The board restarts by itself when the copy finishes.</p>
      </li>
    </ol>
  `}function ue(r){const t=r.files.find(o=>o.kind==="fs"),a=r.files.find(o=>o.kind==="firmware"),i=e.form.flashRxAsTx&&!r.files.some(o=>o.role==="TX"),s=(o,d)=>`
    <div class="copy-row ${e.droppedFiles[o]?"ready":""}">
      <span><code>${d}</code> ${e.droppedFiles[o]?"✓ loaded":"not loaded"}</span>
      <button type="button" data-copy="${o}" ${!e.droppedFiles[o]||e.busy?"disabled":""}>Copy to drive</button>
    </div>`;return`
    <ol class="flash-steps">
      <li>
        <div class="step-split">
          <div>
            <h3>Get the files</h3>
            <p>Load them into this page for step 3, or download them to copy by hand.</p>
          </div>
          <button type="button" class="secondary" data-action="load-release" ${i||e.busy?"disabled":""}>Load into page</button>
        </div>
        <div class="file-rows">
          ${$(t,"Board settings")}
          ${$(a,"Receiver firmware")}
        </div>
        ${i?'<p class="step-warning">Flash RX as TX is on in Parameters, but only RX firmware is published.</p>':""}
      </li>
      <li>
        <div class="step-split">
          <div>
            <h3>Put the board in bootloader mode</h3>
            <p>${e.connected?"The board is connected, so the button can do it.":"Connect USB at the top right to use the button, or hold <strong>BOOTSEL</strong> while plugging in."} A drive named <strong>RP2350</strong> appears.</p>
          </div>
          <button type="button" class="secondary" data-action="bootloader" ${!e.connected||e.busy?"disabled":""}>Enter bootloader</button>
        </div>
      </li>
      <li>
        <h3>Copy to the RP2350 drive</h3>
        <p>FS.UF2 first, then FIRMWARE.UF2. If the drive disappears after the first copy, enter bootloader mode again.</p>
        <div class="copy-area">
          <label class="copy-drop" data-dropzone>
            <input type="file" id="uf2Files" multiple accept=".uf2" />
            <strong>Drop FS.UF2 and FIRMWARE.UF2</strong>
            <span>or click to choose them</span>
          </label>
          <div class="copy-rows">
            ${s("fs","FS.UF2")}
            ${s("firmware","FIRMWARE.UF2")}
          </div>
        </div>
      </li>
    </ol>
  `}function p(){e.page==="flashing"?U(de()):U(ne())}function pe(r){const t=document.createElement("template");return t.innerHTML=r.trim(),t.content.firstElementChild}function _(r){return String(r??"").replaceAll("&","&amp;").replaceAll('"',"&quot;").replaceAll("<","&lt;")}b.addEventListener("click",async r=>{const t=r.target.closest("[data-page]");if(t){e.page=t.dataset.page,e.message="",p();return}const a=r.target.closest("[data-action]")?.dataset.action;if(a==="connect")return Y();if(a==="disconnect")return K();if(a==="refresh"){try{await T(),n("Device parameters refreshed.","success")}catch(u){n(`Refresh failed: ${u.message}`,"error")}return}if(a==="bootloader")return Z();const i=r.target.closest("[data-region]")?.dataset.region;if(i){e.form.region=i,w(),p();return}const s=r.target.closest("[data-module-mode]")?.dataset.moduleMode;if(s){e.form.moduleMode=s,w(),p();return}const o=r.target.closest("[data-pick-hardware], [data-pick-target]");if(o){o.dataset.pickHardware&&(e.selectedHardwareId=o.dataset.pickHardware),o.dataset.pickTarget&&(e.selectedFirmwareTargetId=o.dataset.pickTarget),e.selectedBuildId="",e.droppedFiles={fs:null,firmware:null},e.message="",G(),p();return}const d=r.target.closest("[data-copy]")?.dataset.copy;if(d)return re(d);if(a==="load-release")return te()});b.addEventListener("submit",r=>{r.target.matches('[data-form="parameters"]')&&Q(r)});b.addEventListener("input",r=>{const t=r.target;if(t.name!=="firmwareBuild"){if(t.name==="bindPhrase"){e.form.bindPhrase=t.value;const a=document.querySelector("#uidPreview");a&&(a.textContent=t.value.trim()?A(t.value.trim()).join(", "):e.form.uid.join(", ")||"not set"),document.querySelector(".save-bar")?.replaceWith(pe(X()));return}t.name==="uartBaud"&&(e.form.uartBaud=Number(t.value)),t.name==="isAirport"&&(e.form.isAirport=t.checked),t.name==="flashRxAsTx"&&(e.form.flashRxAsTx=t.checked,w()),p()}});b.addEventListener("dragover",r=>{r.target.closest("[data-dropzone]")&&r.preventDefault()});b.addEventListener("drop",r=>{r.target.closest("[data-dropzone]")&&ee(r)});b.addEventListener("change",r=>{r.target.id==="uf2Files"&&E(r.target.files),r.target.name==="firmwareBuild"&&(e.selectedBuildId=r.target.value,e.droppedFiles={fs:null,firmware:null},e.message="",p())});navigator.serial?.addEventListener("disconnect",async r=>{r.target===e.port&&(await v(),n("USB device disconnected.","info"))});p();
