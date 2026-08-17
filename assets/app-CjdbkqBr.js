(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function o(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=o(r);fetch(r.href,s)}})();const I=""+new URL("tedh-logo-CPMey91_.png",import.meta.url).href,E=[{id:"v0.1.1",version:"v0.1.1",sourceRef:"v0.1.1",releasedAt:"2026-08-17",notes:"RP2350 RX power update.",targets:[{id:"rp2350-rx-2400",label:"RP2350 RX 2.4 GHz",board:"RP2350",role:"RX",frequency:"2.4 GHz",region:"Not specified in this build",files:{fs:{name:"FS.UF2",path:"v0.1.1/RP2350_RX_2400/FS.UF2",sha256:"8e379dc77c40059e4004413672c7f2e7f71cf441ddefc9d38e9e70d01a49e685"},firmware:{name:"FIRMWARE.UF2",path:"v0.1.1/RP2350_RX_2400/FIRMWARE.UF2",sha256:"28471edf973fc97adc0e5e44d09b1cb9cc31580837d1d3832bea5432591ad8ec"}}}]},{id:"v0.1.0",version:"v0.1.0",sourceRef:"v0.1.0",releasedAt:"2026-08-11",notes:"Initial RP2350 RX 2.4 GHz release.",targets:[{id:"rp2350-rx-2400",label:"RP2350 RX 2.4 GHz",board:"RP2350",role:"RX",frequency:"2.4 GHz",region:"Not specified in this build",files:{fs:{name:"FS.UF2",path:"v0.1.0/RP2350_RX_2400/FS.UF2",sha256:"530a9617c5279a518da5cb477629a577f1ff5acbd6c3de02a98a4b5341246414"},firmware:{name:"FIRMWARE.UF2",path:"v0.1.0/RP2350_RX_2400/FIRMWARE.UF2",sha256:"f2585ba3958d50f1fa8cfc82e23b564f3abafac404bb5675b48ccc80285c32a0"}}}]}],g={releases:E},e={port:null,reader:null,writer:null,readBuffer:"",connected:!1,busy:!1,message:"Connect PicoLRS over USB.",messageType:"info",page:"usb",info:null,options:{},form:{bindPhrase:"",uid:[],region:localStorage.getItem("picolrs.region")||"FCC",flashRole:localStorage.getItem("picolrs.flashRole")||"RX",flashRxAsTx:localStorage.getItem("picolrs.flashRxAsTx")==="true",moduleMode:localStorage.getItem("picolrs.moduleMode")||"auto",isAirport:!1,uartBaud:42e4},droppedFiles:{fs:null,firmware:null},selectedReleaseId:localStorage.getItem("picolrs.release")||g.releases[0]?.id||"",selectedTargetId:localStorage.getItem("picolrs.releaseTarget")||g.releases[0]?.targets[0]?.id||""},M=[{id:"usb",label:"USB"},{id:"parameters",label:"Parameters"},{id:"flashing",label:"Flashing"}],L=[9600,57600,115200,230400,4e5,42e4,460800,921600],m=document.querySelector("#app");function n(t,a="info"){e.message=t,e.messageType=a,u()}function f(t){e.busy=t,u()}function A(){const t=[e.info?.target,e.info?.product,e.info?.device,e.options["airport-uart-baud"]!==void 0?"TX":"",e.options["rcvr-uart-baud"]!==void 0?"RX":""].filter(Boolean).join(" ").toUpperCase();return t.includes("_TX")||t.includes(" TX")||t.endsWith("TX")?"TX":t.includes("_RX")||t.includes(" RX")||t.endsWith("RX")?"RX":"Unknown"}function C(){const t=e.options||{};e.form.uid=Array.isArray(t.uid)?t.uid.slice(0,6):[],e.form.isAirport=!!t["is-airport"],e.form.uartBaud=Number(t["rcvr-uart-baud"]??t["airport-uart-baud"]??e.form.uartBaud),e.form.moduleMode=localStorage.getItem("picolrs.moduleMode")||A().toLowerCase(),["auto","rx","tx"].includes(e.form.moduleMode)||(e.form.moduleMode="auto")}function b(){localStorage.setItem("picolrs.region",e.form.region),localStorage.setItem("picolrs.flashRole",e.form.flashRole),localStorage.setItem("picolrs.flashRxAsTx",String(e.form.flashRxAsTx)),localStorage.setItem("picolrs.moduleMode",e.form.moduleMode)}function S(){return g.releases.find(t=>t.id===e.selectedReleaseId)||g.releases[0]}function B(){const t=S();return t?.targets.find(a=>a.id===e.selectedTargetId)||t?.targets[0]}function F(t){return new URL(`firmware/releases/${t.path}`,window.location.href).toString()}function P(){localStorage.setItem("picolrs.release",e.selectedReleaseId),localStorage.setItem("picolrs.releaseTarget",e.selectedTargetId)}function D(){return new TextEncoder}function X(){return new TextDecoder}async function k(){if(!("serial"in navigator)){n("Web Serial is not available. Use Chrome or Edge from localhost or HTTPS.","error");return}try{f(!0),e.port=await navigator.serial.requestPort(),await e.port.open({baudRate:115200}),e.reader=e.port.readable.getReader(),e.writer=e.port.writable.getWriter(),e.connected=!0,await $(),e.page="parameters",n("USB connected. Device parameters loaded.","success")}catch(t){await v(),n(`USB connection failed: ${t.message}`,"error")}finally{f(!1)}}async function v(){try{e.reader&&(await e.reader.cancel(),e.reader.releaseLock())}catch{}try{e.writer&&e.writer.releaseLock()}catch{}try{(e.port?.readable||e.port?.writable)&&await e.port.close()}catch{}e.reader=null,e.writer=null,e.port=null,e.connected=!1}async function N(){await v(),e.info=null,e.options={},n("USB disconnected.","info")}async function w(t,a=3500){if(!e.connected||!e.reader||!e.writer)throw new Error("USB is not connected");e.readBuffer="",await e.writer.write(D().encode(`${t}
`));const o=Date.now()+a;for(;Date.now()<o;){const i=o-Date.now(),r=e.reader.read(),s=new Promise((p,d)=>{setTimeout(()=>d(new Error("Device did not answer in time")),i)}),{value:c,done:h}=await Promise.race([r,s]);if(h)throw new Error("USB device disconnected");e.readBuffer+=X().decode(c);const l=e.readBuffer.split(/\r?\n/);e.readBuffer=l.pop()||"";for(const p of l){const d=p.trim();if(!(!d||!d.startsWith("{")))try{return JSON.parse(d)}catch{}}}throw new Error("Device did not return JSON")}async function $(){f(!0);try{e.info=await w("$GET_INFO"),e.options=await w("$GET_OPTIONS"),C()}finally{f(!1)}}async function O(t){t.preventDefault();const a=e.form.bindPhrase.trim()?U(e.form.bindPhrase.trim()):e.form.uid,o=Number(e.form.uartBaud);if(!Number.isInteger(o)||o<1200||o>2e6){n("UART baud rate must be between 1200 and 2000000.","error");return}const i={...e.options,uid:a,"is-airport":e.form.isAirport,"rcvr-uart-baud":o,"airport-uart-baud":o};b();try{f(!0);const r=await w(`$SET_OPTIONS ${JSON.stringify(i)}`,5e3);if(r.status!=="ok")throw new Error(r.msg||"device rejected settings");e.form.uid=a,e.form.bindPhrase="",await $(),n("Parameters saved to the PicoLRS module.","success")}catch(r){n(`Save failed: ${r.message}`,"error")}finally{f(!1)}}async function W(){if(!e.connected){n("Connect USB first, then use the bootloader button.","error");return}try{f(!0);const t=await w("$REBOOT_BOOTLOADER",1500);if(t.status!=="rebooting")throw new Error(t.msg||"unexpected response");await v(),e.page="flashing",n("Bootloader command sent. Wait for the Pico bootloader drive to appear, then copy the UF2 files.","success")}catch(t){n(`Bootloader command failed: ${t.message}`,"error")}finally{f(!1)}}function _(t){t.preventDefault(),x(t.dataTransfer?.files||[])}function x(t){const a=Array.from(t);for(const i of a){const r=i.name.toUpperCase();r==="FS.UF2"&&(e.droppedFiles.fs=i),r==="FIRMWARE.UF2"&&(e.droppedFiles.firmware=i)}const o=[e.droppedFiles.fs?"FS.UF2":null,e.droppedFiles.firmware?"FIRMWARE.UF2":null].filter(Boolean);o.length?n(`Ready: ${o.join(" and ")} selected.`,"success"):n("Drop exactly FS.UF2 and/or FIRMWARE.UF2.","error")}async function j(t){const a=e.droppedFiles[t];if(!a){n(`Drop ${t==="fs"?"FS.UF2":"FIRMWARE.UF2"} first.`,"error");return}if(!("showDirectoryPicker"in window)){n("Automatic copy is not available in this browser. Drag the UF2 file to the bootloader drive manually.","error");return}try{f(!0);const r=await(await(await window.showDirectoryPicker({mode:"readwrite"})).getFileHandle(a.name.toUpperCase(),{create:!0})).createWritable();await r.write(a),await r.close(),n(`${a.name.toUpperCase()} copied. If the drive disappeared, reconnect bootloader before copying the next UF2.`,"success")}catch(o){n(`Copy failed: ${o.message}`,"error")}finally{f(!1)}}async function H(){const t=B();if(!t){n("No firmware release is available.","error");return}if(e.form.flashRxAsTx&&t.role!=="TX"){n("No TX firmware is published for this release. Turn off Flash RX as TX or choose a TX release.","error");return}try{f(!0);const a=Object.entries(t.files),o=await Promise.all(a.map(async([i,r])=>{const s=await fetch(F(r));if(!s.ok)throw new Error(`${r.name} could not be downloaded`);const c=await s.blob();return[i,new File([c],r.name,{type:"application/octet-stream"})]}));for(const[i,r]of o)e.droppedFiles[i]=r;n(`${t.label} files are ready to copy.`,"success")}catch(a){n(`Could not load release files: ${a.message}`,"error")}finally{f(!1)}}function U(t){if(/^[0-9, ]+$/.test(t)){const o=t.split(",").map(r=>r.trim()).filter(Boolean).map(Number);if(o.length>=4&&o.length<=6&&o.every(r=>Number.isInteger(r)&&r>=0&&r<256)){for(;o.length<6;)o.unshift(0);return o}}const a=z(`-DMY_BINDING_PHRASE="${t}"`);return Array.from(a.subarray(0,6))}function z(t){const a=[];for(let y=0;y<64;)a[y]=0|Math.abs(Math.sin(++y))*4294967296;let o,i,r,s;const c=[],h=unescape(encodeURI(t));let l=h.length;const p=[o=1732584193,i=-271733879,~o,~i];let d=0;for(;d<=l;)c[d>>2]|=(h.charCodeAt(d)||128)<<8*(d++%4);for(c[t=(l+8>>6)*16+14]=l*8,d=0;d<t;d+=16){for(l=p,s=0;s<64;)l=[r=l[3],(o=l[1]|0)+((r=l[0]+[o&(i=l[2])|~o&r,r&o|~r&i,o^i^r,i^(o|~r)][l=s>>4]+(a[s]+(c[[s,5*s+1,3*s+5,7*s][l]%16+d]|0)))<<(l=[7,12,17,22,5,9,14,20,4,11,16,23,6,10,15,21][4*l+s++%4])|r>>>32-l),o,i];for(s=4;s;)p[--s]=p[s]+l[s]}const T=[];for(s=0;s<32;)T.push((p[s>>3]>>(1^s++&7)*4&15)*16+(p[s>>3]>>(1^s++&7)*4&15));return new Uint8Array(T)}function R(t){m.innerHTML=`
    <main class="shell">
      <aside class="sidebar">
        <div class="brand">
          <img class="brand-logo" src="${I}" alt="TEDH" />
          <div>
            <strong>PicoLRS</strong>
            <small>Configurator</small>
          </div>
        </div>
        <nav>
          ${M.map(a=>`
            <button class="${e.page===a.id?"active":""}" data-page="${a.id}">
              ${a.label}
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
            <h1>${G()}</h1>
            <p>${q()}</p>
          </div>
        </header>
        <div class="notice ${e.messageType}">${e.message}</div>
        ${t}
      </section>
    </main>
  `}function G(){return e.page==="parameters"?"USB Parameters":e.page==="flashing"?"UF2 Flashing":"USB Access"}function q(){return e.page==="parameters"?"USB settings for the connected module.":e.page==="flashing"?"Bootloader mode and UF2 files.":"Select the PicoLRS USB serial device."}function J(){const t=A();return`
    <section class="workflow-page">
      <section class="workflow-summary">
        <div>
          <span class="section-index">USB serial</span>
          <h2>${e.connected?"PicoLRS connected":"Connect your PicoLRS module"}</h2>
          <p>${e.connected?"Read the device details, then continue to parameters.":"Use a USB data cable and select the PicoLRS serial device."}</p>
        </div>
        <div class="workflow-status ${e.connected?"ready":""}">
          <span></span>${e.connected?"Connected":"Not connected"}
        </div>
      </section>

      <section class="workflow-stage-grid">
        <article class="workflow-stage workflow-stage-dark">
          <span class="section-index">01</span>
          <h2>Choose USB device</h2>
          <p>Select the PicoLRS serial device when the browser prompts you.</p>
          <div class="stage-actions">
            <button data-action="connect" ${e.connected||e.busy?"disabled":""}>Connect USB</button>
            <button class="secondary inverse" data-action="disconnect" ${!e.connected||e.busy?"disabled":""}>Disconnect</button>
          </div>
        </article>

        <article class="workflow-stage">
          <span class="section-index">02</span>
          <h2>Read module</h2>
          <p>Device information is read directly from the connected board.</p>
          <dl class="facts workflow-facts">
            <dt>Product</dt><dd>${e.info?.product||"-"}</dd>
            <dt>Device</dt><dd>${e.info?.device||"-"}</dd>
            <dt>Version</dt><dd>${e.info?.version||"-"}</dd>
            <dt>Target</dt><dd>${e.info?.target||"-"}</dd>
            <dt>Role</dt><dd>${t}</dd>
            <dt>Platform</dt><dd>${e.info?.platform||"-"}</dd>
          </dl>
          <div class="stage-actions workflow-actions">
            <button type="button" class="secondary" data-action="refresh" ${!e.connected||e.busy?"disabled":""}>Read parameters</button>
            <button type="button" data-page="parameters" ${e.connected?"":"disabled"}>Open parameters</button>
          </div>
        </article>
      </section>
    </section>
  `}function V(){const t=e.form.bindPhrase.trim()?U(e.form.bindPhrase.trim()).join(", "):e.form.uid.join(", ");return`
    <section class="workflow-page">
      <section class="workflow-summary">
        <div>
          <span class="section-index">Module settings</span>
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
              <input id="bindPhrase" name="bindPhrase" type="text" autocomplete="off" value="${Y(e.form.bindPhrase)}" placeholder="Enter phrase or UID bytes" />
              <small>UID bytes: <span id="uidPreview">${t||"not set"}</span></small>
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
                  ${L.map(a=>`<option value="${a}" ${Number(e.form.uartBaud)===a?"selected":""}>${a}</option>`).join("")}
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
  `}function K(){const t=S(),a=B(),o=a?.files.fs,i=a?.files.firmware,r=e.form.flashRxAsTx&&a?.role!=="TX";return`
    <section class="flash-page">
      <section class="flash-summary" aria-label="Selected firmware">
        <div class="flash-summary-title">
          <span class="section-index">Selected</span>
          <h2>${a?.label||"Choose a firmware target"}</h2>
          <p>${t?.notes||"No release details available."}</p>
        </div>
        <div class="release-picker flash-picker">
          <label for="firmwareRelease">Version</label>
          <select id="firmwareRelease" name="firmwareRelease">
            ${g.releases.map(s=>`<option value="${s.id}" ${s.id===t?.id?"selected":""}>${s.version} - ${s.releasedAt}</option>`).join("")}
          </select>
          <label for="firmwareTarget">Target</label>
          <select id="firmwareTarget" name="firmwareTarget">
            ${(t?.targets||[]).map(s=>`<option value="${s.id}" ${s.id===a?.id?"selected":""}>${s.label}</option>`).join("")}
          </select>
        </div>
        <dl class="release-facts flash-facts">
          <dt>Role</dt><dd>${a?.role||"-"}</dd>
          <dt>Region</dt><dd>${a?.region||"-"}</dd>
        </dl>
      </section>

      <section class="flash-stage-grid">
        <article class="flash-stage">
          <span class="section-index">01</span>
          <h2>Prepare files</h2>
          <p>Download the selected pair, or load both files directly into this page.</p>
          <div class="stage-actions">
            <a class="button-link secondary" href="${o?F(o):"#"}" download="FS.UF2">Download FS.UF2</a>
            <a class="button-link secondary" href="${i?F(i):"#"}" download="FIRMWARE.UF2">Download FIRMWARE.UF2</a>
            <button type="button" data-action="load-release" ${!a||r||e.busy?"disabled":""}>Load release files</button>
          </div>
          <p class="stage-note">${r?"TX mode is selected, but this release contains RX firmware only.":"This release has no separate LBT file."}</p>
        </article>

        <article class="flash-stage flash-stage-dark">
          <span class="section-index">02</span>
          <h2>Enter bootloader</h2>
          <p>Connect PicoLRS over USB, then switch it into UF2 bootloader mode.</p>
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
    </section>
  `}function u(){e.page==="parameters"?R(V()):e.page==="flashing"?R(K()):R(J())}function Y(t){return String(t??"").replaceAll("&","&amp;").replaceAll('"',"&quot;").replaceAll("<","&lt;")}m.addEventListener("click",async t=>{const a=t.target.closest("[data-page]");if(a){e.page=a.dataset.page,u();return}const o=t.target.closest("[data-action]")?.dataset.action;if(o==="connect")return k();if(o==="disconnect")return N();if(o==="refresh"){try{await $(),n("Device parameters refreshed.","success")}catch(c){n(`Refresh failed: ${c.message}`,"error")}return}if(o==="bootloader")return W();const i=t.target.closest("[data-region]")?.dataset.region;if(i){e.form.region=i,b(),u();return}const r=t.target.closest("[data-module-mode]")?.dataset.moduleMode;if(r){e.form.moduleMode=r,b(),u();return}const s=t.target.closest("[data-copy]")?.dataset.copy;if(s)return j(s);if(o==="load-release")return H()});m.addEventListener("submit",t=>{t.target.matches('[data-form="parameters"]')&&O(t)});m.addEventListener("input",t=>{const a=t.target;if(a.name==="bindPhrase"){e.form.bindPhrase=a.value;const o=document.querySelector("#uidPreview");o&&(o.textContent=a.value.trim()?U(a.value.trim()).join(", "):e.form.uid.join(", ")||"not set");return}a.name==="uartBaud"&&(e.form.uartBaud=Number(a.value)),a.name==="isAirport"&&(e.form.isAirport=a.checked),a.name==="flashRxAsTx"&&(e.form.flashRxAsTx=a.checked,b()),u()});m.addEventListener("dragover",t=>{t.target.closest("[data-dropzone]")&&t.preventDefault()});m.addEventListener("drop",t=>{t.target.closest("[data-dropzone]")&&_(t)});m.addEventListener("change",t=>{t.target.id==="uf2Files"&&x(t.target.files),t.target.name==="firmwareRelease"&&(e.selectedReleaseId=t.target.value,e.selectedTargetId=S()?.targets[0]?.id||"",P(),u()),t.target.name==="firmwareTarget"&&(e.selectedTargetId=t.target.value,P(),u())});navigator.serial?.addEventListener("disconnect",async t=>{t.target===e.port&&(await v(),n("USB device disconnected.","info"))});u();
