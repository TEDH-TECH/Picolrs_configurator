(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const f of i.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&o(f)}).observe(document,{childList:!0,subtree:!0});function a(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=a(s);fetch(s.href,i)}})();const x=""+new URL("tedh-logo-CPMey91_.png",import.meta.url).href,L=[{id:"v1.1",label:"Version 1 (V1.1)",description:"Direct SX1280 output, no external PA/LNA."},{id:"v2",label:"Version 2",description:"AT2401C PA/LNA front-end on GP23/GP24."}],I=[{id:"picolrs",label:"PicoLRS (ELRS)",description:"Our ExpressLRS port. Configure it over USB on the Parameters page.",usbConfig:!0},{id:"mlrs",label:"mLRS (MAVLink)",description:"MAVLink telemetry link. One UF2 per device, flashed with BOOTSEL. No USB configuration.",usbConfig:!1}],E=[{target:"picolrs",hardware:"v2",reason:"A Version 2 build with the GP23/GP24 PA/LNA enabled is not released yet."}],X=[{id:"mlrs-v2-2026-11-21",target:"mlrs",hardware:"v2",version:"v1.4.03",releasedAt:"2026-11-21",notes:"mLRS port for RP2354 + SX1280 with the V2 PA/LNA.",files:[{role:"RX",use:"Receiver in the drone",name:"mlrs_rx_v2.uf2",path:"mlrs/2026-11-21/V2/mlrs_rx_v2.uf2",sha256:"1ce775078315ab70ab08a2180f89a2c636b7a7c9c7490494d210e2ad10e99bee"},{role:"TX",use:"Transmitter module",name:"mlrs_tx_v2.uf2",path:"mlrs/2026-11-21/V2/mlrs_tx_v2.uf2",sha256:"d9dd4a163fefe9c6df0cbf14d5b6eedfa711eaf2d6cf5f245dcc9ccdd90d79ee"}]},{id:"mlrs-v1.1-2026-11-21",target:"mlrs",hardware:"v1.1",version:"v1.4.03",releasedAt:"2026-11-21",notes:"mLRS port for RP2354 + SX1280.",files:[{role:"RX",use:"Receiver in the drone",name:"mlrs_rx_v1_1.uf2",path:"mlrs/2026-11-21/V1.1/mlrs_rx_v1_1.uf2",sha256:"68f86b22d7e9eb580bc4f09e9bfbd14161788b8bf03ea15f362f6907e1443fd7"},{role:"TX",use:"Transmitter module",name:"mlrs_tx_v1_1.uf2",path:"mlrs/2026-11-21/V1.1/mlrs_tx_v1_1.uf2",sha256:"0d490ab0a46bb693248cadda9795754ff37cbaeaa2afdbec95dc7421164e5511"}]},{id:"picolrs-v1.1-v0.1.1",target:"picolrs",hardware:"v1.1",version:"v0.1.1",releasedAt:"2026-08-17",notes:"RX power update.",files:[{role:"RX",kind:"fs",use:"File system, flash first on a new install",name:"FS.UF2",path:"v0.1.1/RP2350_RX_2400/FS.UF2",sha256:"8e379dc77c40059e4004413672c7f2e7f71cf441ddefc9d38e9e70d01a49e685"},{role:"RX",kind:"firmware",use:"Receiver firmware",name:"FIRMWARE.UF2",path:"v0.1.1/RP2350_RX_2400/FIRMWARE.UF2",sha256:"28471edf973fc97adc0e5e44d09b1cb9cc31580837d1d3832bea5432591ad8ec"}]},{id:"picolrs-v1.1-v0.1.0",target:"picolrs",hardware:"v1.1",version:"v0.1.0",releasedAt:"2026-08-11",notes:"Initial RP2350 RX 2.4 GHz release.",files:[{role:"RX",kind:"fs",use:"File system, flash first on a new install",name:"FS.UF2",path:"v0.1.0/RP2350_RX_2400/FS.UF2",sha256:"530a9617c5279a518da5cb477629a577f1ff5acbd6c3de02a98a4b5341246414"},{role:"RX",kind:"firmware",use:"Receiver firmware",name:"FIRMWARE.UF2",path:"v0.1.0/RP2350_RX_2400/FIRMWARE.UF2",sha256:"f2585ba3958d50f1fa8cfc82e23b564f3abafac404bb5675b48ccc80285c32a0"}]}],m={hardware:L,targets:I,pending:E,builds:X},e={port:null,reader:null,writer:null,readBuffer:"",connected:!1,busy:!1,message:"Connect PicoLRS over USB.",messageType:"info",page:"parameters",info:null,options:{},form:{bindPhrase:"",uid:[],region:localStorage.getItem("picolrs.region")||"FCC",flashRole:localStorage.getItem("picolrs.flashRole")||"RX",flashRxAsTx:localStorage.getItem("picolrs.flashRxAsTx")==="true",moduleMode:localStorage.getItem("picolrs.moduleMode")||"auto",isAirport:!1,uartBaud:42e4},droppedFiles:{fs:null,firmware:null},selectedHardwareId:localStorage.getItem("picolrs.hardware")||m.hardware[0]?.id||"",selectedFirmwareTargetId:"",selectedBuildId:""},C=[{id:"parameters",label:"Parameters"},{id:"flashing",label:"Flashing"}],M=[9600,57600,115200,230400,4e5,42e4,460800,921600],h=document.querySelector("#app");function n(r,t="info"){e.message=r,e.messageType=t,p()}function c(r){e.busy=r,p()}function P(){const r=[e.info?.target,e.info?.product,e.info?.device,e.options["airport-uart-baud"]!==void 0?"TX":"",e.options["rcvr-uart-baud"]!==void 0?"RX":""].filter(Boolean).join(" ").toUpperCase();return r.includes("_TX")||r.includes(" TX")||r.endsWith("TX")?"TX":r.includes("_RX")||r.includes(" RX")||r.endsWith("RX")?"RX":"Unknown"}function k(){const r=e.options||{};e.form.uid=Array.isArray(r.uid)?r.uid.slice(0,6):[],e.form.isAirport=!!r["is-airport"],e.form.uartBaud=Number(r["rcvr-uart-baud"]??r["airport-uart-baud"]??e.form.uartBaud),e.form.moduleMode=localStorage.getItem("picolrs.moduleMode")||P().toLowerCase(),["auto","rx","tx"].includes(e.form.moduleMode)||(e.form.moduleMode="auto")}function w(){localStorage.setItem("picolrs.region",e.form.region),localStorage.setItem("picolrs.flashRole",e.form.flashRole),localStorage.setItem("picolrs.flashRxAsTx",String(e.form.flashRxAsTx)),localStorage.setItem("picolrs.moduleMode",e.form.moduleMode)}function D(){return m.hardware.find(r=>r.id===e.selectedHardwareId)}function _(){return m.targets.find(r=>r.id===e.selectedFirmwareTargetId)}function U(){return m.builds.filter(r=>r.hardware===e.selectedHardwareId&&r.target===e.selectedFirmwareTargetId)}function A(){const r=U();return r.find(t=>t.id===e.selectedBuildId)||r[0]}function O(){return m.pending?.find(r=>r.hardware===e.selectedHardwareId&&r.target===e.selectedFirmwareTargetId)?.reason}function v(r){return new URL(`firmware/releases/${r.path}`,window.location.href).toString()}function N(){localStorage.setItem("picolrs.hardware",e.selectedHardwareId)}function W(){return new TextEncoder}function V(){return new TextDecoder}async function H(){if(!("serial"in navigator)){n("Web Serial is not available. Use Chrome or Edge from localhost or HTTPS.","error");return}try{c(!0),e.port=await navigator.serial.requestPort(),await e.port.open({baudRate:115200}),e.reader=e.port.readable.getReader(),e.writer=e.port.writable.getWriter(),e.connected=!0}catch(r){await g(),c(!1),n(`USB connection failed: ${r.message}`,"error");return}try{await F(),n("USB connected. Device parameters loaded.","success")}catch{await g(),n("This board did not answer. USB settings only work with PicoLRS firmware. A board running mLRS has no USB settings: flash it from the Flashing page using BOOTSEL.","error")}finally{c(!1)}}async function g(){try{e.reader&&(await e.reader.cancel(),e.reader.releaseLock())}catch{}try{e.writer&&e.writer.releaseLock()}catch{}try{(e.port?.readable||e.port?.writable)&&await e.port.close()}catch{}e.reader=null,e.writer=null,e.port=null,e.connected=!1,e.info=null,e.options={}}async function j(){await g(),e.info=null,e.options={},n("USB disconnected.","info")}async function y(r,t=3500){if(!e.connected||!e.reader||!e.writer)throw new Error("USB is not connected");e.readBuffer="",await e.writer.write(W().encode(`${r}
`));const a=Date.now()+t;for(;Date.now()<a;){const o=a-Date.now(),s=e.reader.read(),i=new Promise((u,l)=>{setTimeout(()=>l(new Error("Device did not answer in time")),o)}),{value:f,done:b}=await Promise.race([s,i]);if(b)throw new Error("USB device disconnected");e.readBuffer+=V().decode(f);const d=e.readBuffer.split(/\r?\n/);e.readBuffer=d.pop()||"";for(const u of d){const l=u.trim();if(!(!l||!l.startsWith("{")))try{return JSON.parse(l)}catch{}}}throw new Error("Device did not return JSON")}async function F(){c(!0);try{e.info=await y("$GET_INFO"),e.options=await y("$GET_OPTIONS"),k()}finally{c(!1)}}async function G(r){r.preventDefault();const t=e.form.bindPhrase.trim()?S(e.form.bindPhrase.trim()):e.form.uid,a=Number(e.form.uartBaud);if(!Number.isInteger(a)||a<1200||a>2e6){n("UART baud rate must be between 1200 and 2000000.","error");return}const o={...e.options,uid:t,"is-airport":e.form.isAirport,"rcvr-uart-baud":a,"airport-uart-baud":a};w();try{c(!0);const s=await y(`$SET_OPTIONS ${JSON.stringify(o)}`,5e3);if(s.status!=="ok")throw new Error(s.msg||"device rejected settings");e.form.uid=t,e.form.bindPhrase="",await F(),n("Parameters saved to the PicoLRS module.","success")}catch(s){n(`Save failed: ${s.message}`,"error")}finally{c(!1)}}async function q(){if(!e.connected){n("Connect USB on the Parameters page first, or hold BOOTSEL while plugging the board in.","error");return}try{c(!0);const r=await y("$REBOOT_BOOTLOADER",1500);if(r.status!=="rebooting")throw new Error(r.msg||"unexpected response");await g(),e.page="flashing",n("Bootloader command sent. Wait for the Pico bootloader drive to appear, then copy the UF2 files.","success")}catch(r){n(`Bootloader command failed: ${r.message}`,"error")}finally{c(!1)}}function z(r){r.preventDefault(),B(r.dataTransfer?.files||[])}function B(r){const t=Array.from(r);for(const o of t){const s=o.name.toUpperCase();s==="FS.UF2"&&(e.droppedFiles.fs=o),s==="FIRMWARE.UF2"&&(e.droppedFiles.firmware=o)}const a=[e.droppedFiles.fs?"FS.UF2":null,e.droppedFiles.firmware?"FIRMWARE.UF2":null].filter(Boolean);a.length?n(`Ready: ${a.join(" and ")} selected.`,"success"):n("Drop exactly FS.UF2 and/or FIRMWARE.UF2.","error")}async function J(r){const t=e.droppedFiles[r];if(!t){n(`Drop ${r==="fs"?"FS.UF2":"FIRMWARE.UF2"} first.`,"error");return}if(!("showDirectoryPicker"in window)){n("Automatic copy is not available in this browser. Drag the UF2 file to the bootloader drive manually.","error");return}try{c(!0);const s=await(await(await window.showDirectoryPicker({mode:"readwrite"})).getFileHandle(t.name.toUpperCase(),{create:!0})).createWritable();await s.write(t),await s.close(),n(`${t.name.toUpperCase()} copied. If the drive disappeared, reconnect bootloader before copying the next UF2.`,"success")}catch(a){n(`Copy failed: ${a.message}`,"error")}finally{c(!1)}}async function K(){const r=A();if(!r){n("No firmware build is available for this selection.","error");return}if(e.form.flashRxAsTx&&!r.files.some(t=>t.role==="TX")){n("No PicoLRS TX firmware is published yet. Turn off Flash RX as TX on the Parameters page.","error");return}try{c(!0);const t=await Promise.all(r.files.map(async a=>{const o=await fetch(v(a));if(!o.ok)throw new Error(`${a.name} could not be downloaded`);const s=await o.blob();return[a.kind,new File([s],a.name,{type:"application/octet-stream"})]}));for(const[a,o]of t)e.droppedFiles[a]=o;n(`PicoLRS ${r.version} files are ready to copy.`,"success")}catch(t){n(`Could not load release files: ${t.message}`,"error")}finally{c(!1)}}function S(r){if(/^[0-9, ]+$/.test(r)){const a=r.split(",").map(s=>s.trim()).filter(Boolean).map(Number);if(a.length>=4&&a.length<=6&&a.every(s=>Number.isInteger(s)&&s>=0&&s<256)){for(;a.length<6;)a.unshift(0);return a}}const t=Y(`-DMY_BINDING_PHRASE="${r}"`);return Array.from(t.subarray(0,6))}function Y(r){const t=[];for(let R=0;R<64;)t[R]=0|Math.abs(Math.sin(++R))*4294967296;let a,o,s,i;const f=[],b=unescape(encodeURI(r));let d=b.length;const u=[a=1732584193,o=-271733879,~a,~o];let l=0;for(;l<=d;)f[l>>2]|=(b.charCodeAt(l)||128)<<8*(l++%4);for(f[r=(d+8>>6)*16+14]=d*8,l=0;l<r;l+=16){for(d=u,i=0;i<64;)d=[s=d[3],(a=d[1]|0)+((s=d[0]+[a&(o=d[2])|~a&s,s&a|~s&o,a^o^s,o^(a|~s)][d=i>>4]+(t[i]+(f[[i,5*i+1,3*i+5,7*i][d]%16+l]|0)))<<(d=[7,12,17,22,5,9,14,20,4,11,16,23,6,10,15,21][4*d+i++%4])|s>>>32-d),a,o];for(i=4;i;)u[--i]=u[i]+d[i]}const $=[];for(i=0;i<32;)$.push((u[i>>3]>>(1^i++&7)*4&15)*16+(u[i>>3]>>(1^i++&7)*4&15));return new Uint8Array($)}function T(r){h.innerHTML=`
    <main class="shell">
      <aside class="sidebar">
        <div class="brand">
          <img class="brand-logo" src="${x}" alt="TEDH" />
          <div>
            <strong>PicoLRS</strong>
            <small>Configurator</small>
          </div>
        </div>
        <nav>
          ${C.map(t=>`
            <button class="${e.page===t.id?"active":""}" data-page="${t.id}">
              ${t.label}
            </button>
          `).join("")}
        </nav>
        <div class="connection ${e.connected?"online":""}">
          <span></span>
          ${e.connected?"USB connected":"USB not connected"}
        </div>
      </aside>
      <section class="workspace">
        <header class="topbar">
          <div>
            <h1>${Q()}</h1>
            <p>${Z()}</p>
          </div>
        </header>
        <div class="notice ${e.messageType}">${e.message}</div>
        ${r}
      </section>
    </main>
  `}function Q(){return e.page==="flashing"?"Firmware Flashing":"Parameters"}function Z(){return e.page==="flashing"?"Pick your board version and target, then flash the UF2 files.":"Connect a PicoLRS module over USB and change its settings."}function ee(){return`
    <section class="connect-card">
      <div class="connect-main">
        <span class="section-index">Step 1 · USB</span>
        <h2>${e.connected?"PicoLRS connected":"Connect your PicoLRS module"}</h2>
        <p>${e.connected?"Device details were read from the board. Change settings below.":"Use a USB data cable and pick the PicoLRS serial device when the browser asks. mLRS boards have no USB settings."}</p>
        <div class="stage-actions">
          <button data-action="connect" ${e.connected||e.busy?"disabled":""}>Connect USB</button>
          <button class="secondary" data-action="disconnect" ${!e.connected||e.busy?"disabled":""}>Disconnect</button>
          <button type="button" class="secondary" data-action="refresh" ${!e.connected||e.busy?"disabled":""}>Re-read</button>
        </div>
      </div>
      <dl class="facts connect-facts">
        <dt>Product</dt><dd>${e.info?.product||"-"}</dd>
        <dt>Version</dt><dd>${e.info?.version||"-"}</dd>
        <dt>Target</dt><dd>${e.info?.target||"-"}</dd>
        <dt>Role</dt><dd>${e.connected?P():"-"}</dd>
      </dl>
    </section>
  `}function re(){const r=e.form.bindPhrase.trim()?S(e.form.bindPhrase.trim()).join(", "):e.form.uid.join(", ");return`
    <section class="workflow-page">
      ${ee()}

      <section class="workflow-summary">
        <div>
          <span class="section-index">Step 2 · Module settings</span>
          <h2>Configure PicoLRS</h2>
          <p>Changes are written to the module only when you save.</p>
        </div>
        <div class="workflow-status ${e.connected?"ready":""}">
          <span></span>${e.connected?"USB connected":"Connect USB to save"}
        </div>
      </section>

      <form class="settings-form" data-form="parameters">
        <section class="settings-grid">
          <section class="settings-section">
            <span class="section-index">01</span>
            <h2>Identity</h2>
            <p>Use the same bind phrase on the matching module.</p>
            <div class="form-row">
              <label for="bindPhrase">Bind Phrase</label>
              <input id="bindPhrase" name="bindPhrase" type="text" autocomplete="off" value="${ne(e.form.bindPhrase)}" placeholder="Enter phrase or UID bytes" />
              <small>UID bytes: <span id="uidPreview">${r||"not set"}</span></small>
            </div>
          </section>

          <section class="settings-section">
            <span class="section-index">02</span>
            <h2>Firmware mode</h2>
            <p>These choices guide the firmware and module role you use next.</p>
            <div class="form-row">
              <label>Region</label>
              <div class="segmented">
                <button type="button" class="${e.form.region==="FCC"?"selected":""}" data-region="FCC">FCC</button>
                <button type="button" class="${e.form.region==="LBT"?"selected":""}" data-region="LBT">LBT</button>
              </div>
            </div>

            <div class="form-row inline">
              <div>
                <label for="flashRxAsTx">Flash RX as TX</label>
                <small>Use TX firmware on this board.</small>
              </div>
              <input id="flashRxAsTx" name="flashRxAsTx" type="checkbox" ${e.form.flashRxAsTx?"checked":""} />
            </div>

            <div class="form-row">
              <label>TX/RX Options</label>
              <div class="segmented">
                <button type="button" class="${e.form.moduleMode==="auto"?"selected":""}" data-module-mode="auto">Auto</button>
                <button type="button" class="${e.form.moduleMode==="tx"?"selected":""}" data-module-mode="tx">TX</button>
                <button type="button" class="${e.form.moduleMode==="rx"?"selected":""}" data-module-mode="rx">RX</button>
              </div>
            </div>
          </section>

          <section class="settings-section settings-section-wide">
            <span class="section-index">03</span>
            <h2>UART</h2>
            <p>Set the UART behavior and baud rate for this module.</p>
            <div class="uart-settings">
              <div class="form-row inline">
                <div>
                  <label for="isAirport">Use UART as AirPort</label>
                  <small>Routes UART as AirPort.</small>
                </div>
                <input id="isAirport" name="isAirport" type="checkbox" ${e.form.isAirport?"checked":""} />
              </div>
              <div class="form-row">
                <label for="uartBaud">UART Baud Rate</label>
                <select id="uartBaud" name="uartBaud">
                  ${M.map(t=>`<option value="${t}" ${Number(e.form.uartBaud)===t?"selected":""}>${t}</option>`).join("")}
                </select>
              </div>
            </div>
          </section>
        </section>
        <footer class="settings-actions">
          <div>
            <strong>Ready to apply changes?</strong>
            <span>Save settings to PicoLRS, then continue to flashing when needed.</span>
          </div>
          <div class="button-row">
            <button type="submit" ${!e.connected||e.busy?"disabled":""}>Save parameters</button>
            <button type="button" class="secondary" data-page="flashing">Open flashing</button>
          </div>
        </footer>
      </form>
    </section>
  `}function te(){const r=D(),t=_();return`
    <section class="flash-page">
      <section class="picker-card" aria-label="Choose firmware">
        <span class="section-index">Step 1 · Choose firmware</span>
        <h2>What are you flashing?</h2>
        <div class="picker-grid">
          <div class="release-picker">
            <label for="hardwareVersion">Hardware version</label>
            <select id="hardwareVersion" name="hardwareVersion">
              ${m.hardware.map(a=>`<option value="${a.id}" ${a.id===r?.id?"selected":""}>${a.label}</option>`).join("")}
            </select>
            <small>${r?.description||""}</small>
          </div>
          <div class="release-picker">
            <label for="firmwareTarget">Target</label>
            <select id="firmwareTarget" name="firmwareTarget">
              <option value="" disabled ${t?"":"selected"}>Choose a target</option>
              ${m.targets.map(a=>`<option value="${a.id}" ${a.id===t?.id?"selected":""}>${a.label}</option>`).join("")}
            </select>
            <small>${t?.description||"mLRS and PicoLRS are separate firmware. Pick the one this board should run."}</small>
          </div>
        </div>
      </section>

      ${ae(r,t)}
    </section>
  `}function ae(r,t){if(!t)return'<section class="empty-card"><p>Choose a target above to see its firmware files.</p></section>';const a=U();if(!a.length)return`
      <section class="empty-card">
        <strong>${t.label} is not available for ${r?.label||"this hardware"} yet.</strong>
        <p>${O()||"No firmware has been published for this combination."}</p>
      </section>
    `;const o=A();return`
    ${se(t,o,a)}
    ${t.id==="mlrs"?oe(o):ie(o)}
  `}function se(r,t,a){return`
    <section class="version-bar">
      <div>
        <span class="section-index">Firmware version</span>
        <h2>${r.label} ${t.version}</h2>
        <p>${t.notes} Released ${t.releasedAt}.</p>
      </div>
      <div class="release-picker">
        <label for="firmwareBuild">Version</label>
        <select id="firmwareBuild" name="firmwareBuild" ${a.length<2?"disabled":""}>
          ${a.map((o,s)=>`<option value="${o.id}" ${o.id===t.id?"selected":""}>${o.version} · ${o.releasedAt}${s===0?" (latest)":""}</option>`).join("")}
        </select>
      </div>
    </section>
  `}function oe(r){return`
    <section class="file-card-grid">
      ${r.files.map(t=>`
        <article class="flash-stage">
          <span class="section-index">${t.role}</span>
          <h2>${t.use}</h2>
          <p><code>${t.name}</code></p>
          <div class="stage-actions">
            <a class="button-link" href="${v(t)}" download="${t.name}">Download ${t.role} firmware</a>
          </div>
          <p class="stage-note">SHA-256 ${t.sha256.slice(0,16)}…</p>
        </article>
      `).join("")}
    </section>

    <section class="flash-transfer">
      <div class="transfer-heading">
        <span class="section-index">Flash</span>
        <div>
          <h2>Flash with BOOTSEL</h2>
          <p>mLRS does not use the USB configuration, so the bootloader is entered by hand.</p>
        </div>
      </div>
      <ol class="steps">
        <li>Unplug the board.</li>
        <li>Hold the <strong>BOOTSEL</strong> button, plug in USB, then let go.</li>
        <li>A drive named <strong>RP2350</strong> appears on your computer.</li>
        <li>Drag the <strong>RX</strong> file onto it for the drone receiver, or the <strong>TX</strong> file for the transmitter module.</li>
        <li>The board restarts by itself when the copy finishes.</li>
      </ol>
    </section>
  `}function ie(r){const t=r.files.find(s=>s.kind==="fs"),a=r.files.find(s=>s.kind==="firmware"),o=e.form.flashRxAsTx&&!r.files.some(s=>s.role==="TX");return`
      <section class="flash-stage-grid">
        <article class="flash-stage">
          <span class="section-index">01</span>
          <h2>Prepare files</h2>
          <p>Download the pair, or load both files straight into this page.</p>
          <div class="stage-actions">
            <a class="button-link secondary" href="${v(t)}" download="FS.UF2">Download FS.UF2</a>
            <a class="button-link secondary" href="${v(a)}" download="FIRMWARE.UF2">Download FIRMWARE.UF2</a>
            <button type="button" data-action="load-release" ${o||e.busy?"disabled":""}>Load release files</button>
          </div>
          <p class="stage-note">${o?"Flash RX as TX is on, but only RX firmware is published.":"Receiver (RX) firmware. No separate LBT file."}</p>
        </article>

        <article class="flash-stage flash-stage-dark">
          <span class="section-index">02</span>
          <h2>Enter bootloader</h2>
          <p>With USB connected on the Parameters page, switch the board into UF2 bootloader mode. Not connected? Hold BOOTSEL while plugging it in.</p>
          <button data-action="bootloader" ${!e.connected||e.busy?"disabled":""}>Enter bootloader mode</button>
          <ol class="steps">
            <li>Wait for the bootloader drive to appear.</li>
            <li>Flash <strong>FS.UF2</strong> first on a new install.</li>
            <li>Reconnect bootloader if the drive disappears.</li>
          </ol>
        </article>
      </section>

      <section class="flash-transfer">
        <div class="transfer-heading">
          <span class="section-index">03</span>
          <div>
            <h2>Copy files to the Pico drive</h2>
            <p>Drop your firmware pair here, or use the files loaded in step 1.</p>
          </div>
        </div>
        <div class="transfer-body">
          <div class="dropzone" data-dropzone>
            <strong>Drop FS.UF2 and FIRMWARE.UF2</strong>
            <span>Both files must match the selected firmware release.</span>
            <input type="file" id="uf2Files" multiple accept=".uf2" />
          </div>
          <div class="transfer-status">
            <div class="file-list">
              <div class="${e.droppedFiles.fs?"ready":""}"><span>FS.UF2</span><strong>${e.droppedFiles.fs?"Ready":"Missing"}</strong></div>
              <div class="${e.droppedFiles.firmware?"ready":""}"><span>FIRMWARE.UF2</span><strong>${e.droppedFiles.firmware?"Ready":"Missing"}</strong></div>
            </div>
            <div class="button-row">
              <button type="button" class="secondary" data-copy="fs" ${!e.droppedFiles.fs||e.busy?"disabled":""}>Copy FS.UF2</button>
              <button type="button" class="secondary" data-copy="firmware" ${!e.droppedFiles.firmware||e.busy?"disabled":""}>Copy FIRMWARE.UF2</button>
            </div>
          </div>
        </div>
      </section>
  `}function p(){e.page==="flashing"?T(te()):T(re())}function ne(r){return String(r??"").replaceAll("&","&amp;").replaceAll('"',"&quot;").replaceAll("<","&lt;")}h.addEventListener("click",async r=>{const t=r.target.closest("[data-page]");if(t){e.page=t.dataset.page,p();return}const a=r.target.closest("[data-action]")?.dataset.action;if(a==="connect")return H();if(a==="disconnect")return j();if(a==="refresh"){try{await F(),n("Device parameters refreshed.","success")}catch(f){n(`Refresh failed: ${f.message}`,"error")}return}if(a==="bootloader")return q();const o=r.target.closest("[data-region]")?.dataset.region;if(o){e.form.region=o,w(),p();return}const s=r.target.closest("[data-module-mode]")?.dataset.moduleMode;if(s){e.form.moduleMode=s,w(),p();return}const i=r.target.closest("[data-copy]")?.dataset.copy;if(i)return J(i);if(a==="load-release")return K()});h.addEventListener("submit",r=>{r.target.matches('[data-form="parameters"]')&&G(r)});h.addEventListener("input",r=>{const t=r.target;if(t.name==="bindPhrase"){e.form.bindPhrase=t.value;const a=document.querySelector("#uidPreview");a&&(a.textContent=t.value.trim()?S(t.value.trim()).join(", "):e.form.uid.join(", ")||"not set");return}t.name==="uartBaud"&&(e.form.uartBaud=Number(t.value)),t.name==="isAirport"&&(e.form.isAirport=t.checked),t.name==="flashRxAsTx"&&(e.form.flashRxAsTx=t.checked,w()),p()});h.addEventListener("dragover",r=>{r.target.closest("[data-dropzone]")&&r.preventDefault()});h.addEventListener("drop",r=>{r.target.closest("[data-dropzone]")&&z(r)});h.addEventListener("change",r=>{r.target.id==="uf2Files"&&B(r.target.files),["hardwareVersion","firmwareTarget","firmwareBuild"].includes(r.target.name)&&(r.target.name==="hardwareVersion"&&(e.selectedHardwareId=r.target.value),r.target.name==="firmwareTarget"&&(e.selectedFirmwareTargetId=r.target.value),e.selectedBuildId=r.target.name==="firmwareBuild"?r.target.value:"",e.droppedFiles={fs:null,firmware:null},N(),p())});navigator.serial?.addEventListener("disconnect",async r=>{r.target===e.port&&(await g(),n("USB device disconnected.","info"))});p();
