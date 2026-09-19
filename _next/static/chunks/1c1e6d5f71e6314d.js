(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,88973,64367,e=>{"use strict";var t=e.i(43476),r=e.i(71645);function a({text:e,title:a,className:s="",size:n=14}){let[i,o]=(0,r.useState)(!1),l=async()=>{try{await navigator.clipboard.writeText(e),o(!0),setTimeout(()=>o(!1),2e3)}catch(e){console.error("Failed to copy text: ",e)}};return(0,t.jsx)("button",{type:"button",onClick:l,className:`text-secondary hover:text-[#d4d4d4] transition-colors p-1 ${s}`,title:a||`Copy "${e}" to clipboard`,children:i?(0,t.jsxs)("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"currentColor","aria-label":"Copied",children:[(0,t.jsx)("title",{children:"Copied to clipboard"}),(0,t.jsx)("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"})]}):(0,t.jsxs)("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"currentColor","aria-label":"Copy command",children:[(0,t.jsx)("title",{children:"Copy to clipboard"}),(0,t.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"})]})})}e.s(["CopyButton",()=>a],64367);let s="ai-sdk-tools-preferred-package-manager";function n({packageName:e="ai-sdk-tools"}){let[n,i]=(0,r.useState)("npm");(0,r.useEffect)(()=>{try{let e=localStorage.getItem(s);e&&["npm","yarn","pnpm","bun"].includes(e)&&i(e)}catch(e){console.warn("localStorage not available:",e)}},[]);let o={npm:`npm install ${e}`,yarn:`yarn add ${e}`,pnpm:`pnpm add ${e}`,bun:`bun add ${e}`}[n];return(0,t.jsxs)("div",{className:"not-prose w-full max-w-lg",children:[(0,t.jsx)("div",{className:"flex gap-4",children:["npm","yarn","pnpm","bun"].map(e=>(0,t.jsx)("button",{className:`py-2 text-xs font-medium transition-colors ${n===e?"text-[#d4d4d4]":"text-secondary hover:text-[#d4d4d4]"}`,onClick:()=>(e=>{i(e);try{localStorage.setItem(s,e)}catch(e){console.warn("localStorage not available:",e)}})(e),children:e},e))}),(0,t.jsxs)("div",{className:"flex mt-1 items-center justify-between bg-[#0a0a0a] border border-dashed border-[#2a2a2a] p-2 text-sm overflow-x-auto",children:[(0,t.jsx)("pre",{children:(0,t.jsx)("code",{children:o})}),(0,t.jsx)(a,{text:o})]})]})}e.s(["InstallScriptTabs",()=>n],88973)},69814,e=>{"use strict";let t=new Set(["<",">","{","}","[","]"]),r=new Set(["for","do","while","if","else","return","function","var","let","const","true","false","undefined","this","new","delete","typeof","in","instanceof","void","break","continue","switch","case","default","throw","try","catch","finally","debugger","with","yield","async","await","class","extends","super","import","export","from","static"]),a=new Set(["+","-","*","/","%","=","!","&","|","^","~","!","?",":",".",",",";","'",'"',".","(",")","[","]","#","@","\\",...t]),s={keywords:r,onCommentStart:k,onCommentEnd:function(e,t){return e+t==="*/"?2:+("\n"===t)}},n=["identifier","keyword","string","class","property","entity","jsxliterals","sign","comment","break","space"],[i,o,l,c,d,m,u,h,f,p,x]=n.map((e,t)=>t);function g(e){return/^[^\S\r\n]+$/g.test(e)}function b(e){return a.has(e)}function y(e){return/^[\w_]+$/.test(e)||j(e)}function j(e){return/[^\u0000-\u007f]/.test(e)}function v(e){return/^[a-zA-Z]$/.test(e)}function N(e){var t;return(v(t=e[0])||j(t))&&(1===e.length||y(e.slice(1)))}function w(e){return'"'===e||"'"===e}function k(e,t){let r=e+t;return"/*"===r?2:+("//"===r)}function A(e,r){return(function(e){let t=[];function r(e){let r=e.map(([e,t])=>{let r=n[e];return{type:"element",tagName:"span",children:[{type:"text",value:t}],properties:{className:`sh__token--${r}`,style:{color:`var(--sh-${r})`}}}});t.push({type:"element",tagName:"span",children:r,properties:{className:"sh__line"}})}let a=[],s=!1;for(let t=0;t<e.length;t++){let n=e[t],[i,o]=n,l=t===e.length-1;if(i!==p){if(o.includes("\n")){let e=o.split("\n");for(let t=0;t<e.length;t++)a.push([i,e[t]]),t<e.length-1&&(r(a),a.length=0)}else a.push(n);s=!1}else s?r([]):(r(a),a.length=0),l&&r([]),s=!0}return a.length&&r(a),t})(function(e,r){let{keywords:n,onCommentStart:A,onCommentEnd:z}={...s,...r},C="",S=-1,$=[-1,""],T=[-2,""],_=[],I=!1,H=0,B=!1,L=0,P=()=>I&&!B&&!H,R=()=>!H&&P()&&!B&&L>0,M=null,E=!1,U=0,D=0,V=()=>E,G=()=>D>U,O=()=>D>0&&D===U,q=()=>null!==M||G(),F=(e,t)=>{if(t&&(C=t),C){let t=[S=e||function(e){let t="\n"===e;if(H&&!P()){if(null!==M)return l;let[,t]=$;if(N(e)&&("<"===t||"</"===t))return m}if(R())return u;if(null!==M||G())return l;{let r;if(n.has(e))return"."===$[1]?i:o;if(t)return p;if(g(e))return x;if(e.split("").every(b))return h;if(y(r=e[0])&&r===r.toUpperCase()||"null"===e)return H&&!P()?i:c;if(N(e)){let e="."===$[1]&&N(T[1]);if(!q()&&!e)return i;if(e)return d}return l}}(C),C];S!==x&&S!==p&&(T=$,$=t),_.push(t)}C=""};for(let r=0;r<e.length;r++){var Z,W;let s=e[r],n=e[r-1],i=e[r+1],o=n+s,c=s+i;if(w(s)&&!R()&&!G()){F(),"\\"!==n&&(M&&s===M?M=null:M||(M=s)),F(l,s);continue}if(!G()&&"\\n"!==n&&"`"===s){F(),F(l,s),D++;continue}if(G()){if("\\n"!==n&&"`"===s&&D>0){F(),D--,F(l,s);continue}if("${"===c){U++,F(l),F(h,c),r++;continue}}if(O()&&"}"===s){F(),U--,F(h,s);continue}if(P()&&"{"===s){F(),F(h,s),B=!0;continue}if(I){if(!H&&"<"===s){F(),"/"===i?(H=2,C=c,r++):(H=1,C=s),F(h);continue}if(H){if(">"===s&&!"/=".includes(n)){F(),1===H?(H=0,L++):(H=0,I=!1),F(h,s);continue}if("/>"===c||"</"===c){"<"!==C&&"/"!==C&&F(),"/>"===c?H=0:L--,L||(I=!1),C=c,r++,F(h);continue}if("<"===s){F(),C=s,F(h);continue}if("-"===i&&!q()&&!R()&&C){F(d,C+s+i),r++;continue}if("="===i&&!q()&&!g(s)){g(C)&&F();let e=C+s;if(N(e)){F(d,e);continue}}}}!H&&("<"===s&&(v(i)||j(i))||"</"===c)&&(H="/"===i?2:1,"<"===s&&("/"===i||v(i))&&!q()&&!R()&&!V()&&(I=!0));let m=w(W=s)||"`"===W,u=G(),p=!I&&"/"===(Z=c)[0]&&!k(Z[0],Z[1]),x=R();if(m||u||w(M))C+=s;else if(p){F();let[t,a]=$;if(p&&-1!==t&&(t!==h||")"===a)&&t!==f){C=s,F();continue}E=!0;let n=r++,i=()=>r>=e.length,o=()=>i()||"\n"===e[r],c=!1;for(;!o();r++)if("/"===e[r]&&"\\"!==e[r-1]){for(c=!0;n!==r&&/^[a-z]$/.test(e[r+1])&&!o();)r++;break}E=!1,n!==r&&c?(C=e.slice(n,r+1),F(l)):(C=s,F(),r=n)}else if(A(s,i)){F();let t=r,a=A(s,i);if(a)for(;r<e.length&&z(e[r-1],e[r])!=a;r++);C=e.slice(t,r+1),F(f)}else" "===s||"\n"===s?" "===s&&(g(C)||!C||x)?(C+=s,"<"===i&&F()):(F(),C=s,F()):B&&"}"===s?(F(),C=s,F(),B=!1):x&&!t.has(s)||G()||(y(s)===y(C[C.length-1])||P())&&!a.has(s)?C+=s:("</"===o&&(C=o),F(),"</"!==o&&(C=s),"</"===c||"/>"===c?(C=c,F(),r++):t.has(s)&&F())}return F(),_}(e,r)).map(e=>{let{tagName:t}=e,r=e.children.map(e=>{let{tagName:t,children:r,properties:a}=e;return`<${t} ${(e=>{let t=`class="${e.className}"`;if(e.style){let r=Object.entries(e.style).map(([e,t])=>`${e}:${t}`).join(";");t+=` style="${r}"`}return t})(a)}>${r[0].value.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}</${t}>`}).join("");return`<${t} class="${e.properties.className}">${r}</${t}>`}).join("\n")}n.map((e,t)=>[e,t]),e.s(["highlight",()=>A])},69762,e=>{"use strict";var t=e.i(43476),r=e.i(22016),a=e.i(69814),s=e.i(88973);function n(){return(0,t.jsx)("main",{className:"min-h-screen text-[#d4d4d4] font-[family-name:var(--font-geist-mono)]",children:(0,t.jsxs)("div",{className:"max-w-[95rem] mx-auto px-8 py-32 relativez-10",children:[(0,t.jsx)("section",{className:"mb-40",children:(0,t.jsxs)("div",{className:"max-w-4xl",children:[(0,t.jsx)("h1",{className:"text-4xl font-normal leading-tight tracking-wide mb-6",children:"Artifacts"}),(0,t.jsx)("p",{className:"text-base text-secondary max-w-3xl leading-relaxed font-light mb-12",children:"Advanced streaming interfaces for AI applications. Create structured, type-safe artifacts that stream real-time updates from AI tools to React components with progress tracking and error handling."}),(0,t.jsx)(s.InstallScriptTabs,{packageName:"@ai-sdk-tools/artifacts"})]})}),(0,t.jsxs)("section",{className:"mb-40",children:[(0,t.jsx)("h2",{className:"text-2xl font-medium mb-8",children:"What it does"}),(0,t.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:[(0,t.jsxs)("div",{className:"border border-[#3c3c3c] p-6",children:[(0,t.jsx)("h3",{className:"text-lg font-medium mb-4",children:"🌊 Streaming"}),(0,t.jsx)("p",{className:"text-sm text-secondary",children:"Stream real-time updates from AI tools to React components with smooth, responsive interfaces."})]}),(0,t.jsxs)("div",{className:"border border-[#3c3c3c] p-6",children:[(0,t.jsx)("h3",{className:"text-lg font-medium mb-4",children:"📊 Progress"}),(0,t.jsx)("p",{className:"text-sm text-secondary",children:"Track progress and show loading states as AI tools process requests and generate responses."})]}),(0,t.jsxs)("div",{className:"border border-[#3c3c3c] p-6",children:[(0,t.jsx)("h3",{className:"text-lg font-medium mb-4",children:"🔒 Type Safety"}),(0,t.jsx)("p",{className:"text-sm text-secondary",children:"Full TypeScript support with schema validation using Zod for type-safe data structures."})]}),(0,t.jsxs)("div",{className:"border border-[#3c3c3c] p-6",children:[(0,t.jsx)("h3",{className:"text-lg font-medium mb-4",children:"⚡ Performance"}),(0,t.jsx)("p",{className:"text-sm text-secondary",children:"Optimized rendering with selective updates and efficient state management."})]}),(0,t.jsxs)("div",{className:"border border-[#3c3c3c] p-6",children:[(0,t.jsx)("h3",{className:"text-lg font-medium mb-4",children:"🛠️ Error Handling"}),(0,t.jsx)("p",{className:"text-sm text-secondary",children:"Built-in error handling with retry mechanisms and graceful fallbacks."})]}),(0,t.jsxs)("div",{className:"border border-[#3c3c3c] p-6",children:[(0,t.jsx)("h3",{className:"text-lg font-medium mb-4",children:"🎨 Customizable"}),(0,t.jsx)("p",{className:"text-sm text-secondary",children:"Highly customizable with support for custom UI components and styling."})]})]})]}),(0,t.jsxs)("section",{className:"mb-40",children:[(0,t.jsx)("h2",{className:"text-2xl font-medium mb-8",children:"Getting Started"}),(0,t.jsxs)("div",{className:"space-y-8",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"text-lg font-medium mb-4",children:"1. Install the package"}),(0,t.jsx)(s.InstallScriptTabs,{packageName:"@ai-sdk-tools/artifacts"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"text-lg font-medium mb-4",children:"2. Create an artifact"}),(0,t.jsx)("div",{className:"bg-transparent p-4 rounded border border-[#2a2a2a]",children:(0,t.jsx)("pre",{className:"text-xs font-mono leading-relaxed",dangerouslySetInnerHTML:{__html:(0,a.highlight)(`import { artifact } from '@ai-sdk-tools/artifacts'
import { z } from 'zod'

const burnRateArtifact = artifact('burn-rate', z.object({
  monthlyBurn: z.number(),
  runway: z.number(),
  title: z.string(),
  stage: z.enum(['loading', 'processing', 'complete']).default('loading'),
}))`)}})})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"text-lg font-medium mb-4",children:"3. Use in your component"}),(0,t.jsx)("div",{className:"bg-transparent p-4 rounded border border-[#2a2a2a]",children:(0,t.jsx)("pre",{className:"text-xs font-mono leading-relaxed",dangerouslySetInnerHTML:{__html:(0,a.highlight)(`import { useArtifact } from '@ai-sdk-tools/artifacts/client'

function BurnRateChart() {
  const { data, status, error, progress } = useArtifact(burnRateArtifact)
  
  if (status === 'error') return <div>Error: {error}</div>
  if (!data) return <div>Loading...</div>
  
  return (
    <div>
      <h2>{data.title}</h2>
      <p>Monthly Burn: \${data.monthlyBurn.toLocaleString()}</p>
      <p>Runway: {data.runway} months</p>
      {progress && <div>Progress: {Math.round(progress * 100)}%</div>}
    </div>
  )
}`)}})})]})]})]}),(0,t.jsxs)("section",{className:"mb-40",children:[(0,t.jsx)("h2",{className:"text-2xl font-medium mb-8",children:"Features"}),(0,t.jsxs)("div",{className:"space-y-8",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"text-lg font-medium mb-4",children:"Schema Validation"}),(0,t.jsx)("p",{className:"text-sm text-secondary mb-4",children:"Define data structures with Zod schemas for type safety and validation:"}),(0,t.jsx)("div",{className:"bg-transparent p-4 rounded border border-[#2a2a2a]",children:(0,t.jsx)("pre",{className:"text-xs font-mono leading-relaxed",dangerouslySetInnerHTML:{__html:(0,a.highlight)(`const userProfileArtifact = artifact('user-profile', z.object({
  name: z.string(),
  email: z.string().email(),
  avatar: z.string().url().optional(),
  preferences: z.object({
    theme: z.enum(['light', 'dark']),
    notifications: z.boolean(),
  }),
}))`)}})})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"text-lg font-medium mb-4",children:"Progress Tracking"}),(0,t.jsx)("p",{className:"text-sm text-secondary mb-4",children:"Track progress and show loading states:"}),(0,t.jsx)("div",{className:"bg-transparent p-4 rounded border border-[#2a2a2a]",children:(0,t.jsx)("pre",{className:"text-xs font-mono leading-relaxed",dangerouslySetInnerHTML:{__html:(0,a.highlight)(`function ProgressBar() {
  const { progress, status, isActive } = useArtifact(processingArtifact)
  
  return (
    <div>
      {isActive && (
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-blue-600 h-2.5 rounded-full" 
            style={{ width: \`\${(progress || 0) * 100}%\` }}
          />
        </div>
      )}
      <p>Status: {status}</p>
    </div>
  )
}`)}})})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"text-lg font-medium mb-4",children:"Error Handling"}),(0,t.jsx)("p",{className:"text-sm text-secondary mb-4",children:"Built-in error handling with retry mechanisms:"}),(0,t.jsx)("div",{className:"bg-transparent p-4 rounded border border-[#2a2a2a]",children:(0,t.jsx)("pre",{className:"text-xs font-mono leading-relaxed",dangerouslySetInnerHTML:{__html:(0,a.highlight)(`const resilientArtifact = artifact('resilient-data', z.object({
  data: z.string(),
  status: z.enum(['idle', 'loading', 'complete', 'error']).default('idle')
}))

function ResilientComponent() {
  const { data, status, error } = useArtifact(resilientArtifact, {
    onError: (error) => {
      console.error('Artifact error:', error)
      // Custom error handling
    },
    onComplete: (data) => {
      console.log('Success!', data)
    }
  })
  
  return <div>{status === 'error' ? error : data?.data}</div>
}`)}})})]})]})]}),(0,t.jsxs)("section",{className:"mb-40",children:[(0,t.jsx)("h2",{className:"text-2xl font-medium mb-8",children:"API Reference"}),(0,t.jsxs)("div",{className:"space-y-8",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"text-lg font-medium mb-4",children:"artifact(id, schema)"}),(0,t.jsx)("p",{className:"text-sm text-secondary mb-4",children:"Create a new artifact definition with schema validation:"}),(0,t.jsx)("div",{className:"bg-transparent p-4 rounded border border-[#2a2a2a]",children:(0,t.jsx)("pre",{className:"text-xs font-mono leading-relaxed",dangerouslySetInnerHTML:{__html:(0,a.highlight)(`import { artifact } from '@ai-sdk-tools/artifacts'
import { z } from 'zod'

const myArtifact = artifact(
  'unique-id', // Unique artifact identifier
  z.object({   // Zod schema for type safety
    title: z.string(),
    data: z.array(z.number()).default([]),
    status: z.enum(['idle', 'loading', 'complete']).default('idle')
  })
)`)}})})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"text-lg font-medium mb-4",children:"useArtifact(artifact, callbacks?)"}),(0,t.jsx)("p",{className:"text-sm text-secondary mb-4",children:"Hook for consuming a specific streaming artifact:"}),(0,t.jsx)("div",{className:"bg-transparent p-4 rounded border border-[#2a2a2a]",children:(0,t.jsx)("pre",{className:"text-xs font-mono leading-relaxed",dangerouslySetInnerHTML:{__html:(0,a.highlight)(`import { useArtifact } from '@ai-sdk-tools/artifacts/client'

const {
  data,        // Current artifact payload (typed)
  status,      // 'idle' | 'loading' | 'streaming' | 'complete' | 'error'
  progress,    // Progress value (0-1)
  error,       // Error message if failed
  isActive,    // Whether artifact is currently processing
  hasData,     // Whether artifact has any data
} = useArtifact(myArtifact, {
  onUpdate: (data, prevData) => console.log('Updated:', data),
  onComplete: (data) => console.log('Done!', data),
  onError: (error) => console.error('Failed:', error),
  onProgress: (progress) => console.log(\`\${progress * 100}%\`),
})`)}})})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"text-lg font-medium mb-4",children:"useArtifacts(options?)"}),(0,t.jsx)("p",{className:"text-sm text-secondary mb-4",children:"Hook for listening to all artifacts across all types. Perfect for switch cases:"}),(0,t.jsx)("div",{className:"bg-transparent p-4 rounded border border-[#2a2a2a]",children:(0,t.jsx)("pre",{className:"text-xs font-mono leading-relaxed",dangerouslySetInnerHTML:{__html:(0,a.highlight)(`import { useArtifacts } from '@ai-sdk-tools/artifacts/client'

const {
  byType,       // All artifacts grouped by type
  latest,       // Latest version of each artifact type
  artifacts,    // All artifacts in chronological order
  current,      // Most recent artifact across all types
} = useArtifacts({
  onData: (artifactType, data) => {
    console.log(\`New \${artifactType} artifact:\`, data)
  }
})

// Perfect for rendering different artifact types
return (
  <div>
    {Object.entries(latest).map(([type, artifact]) => {
      switch (type) {
        case 'burn-rate':
          return <BurnRateComponent key={type} data={artifact} />
        case 'financial-report':
          return <ReportComponent key={type} data={artifact} />
        default:
          return <GenericComponent key={type} type={type} data={artifact} />
      }
    })}
  </div>
)

// Perfect for Canvas-style switching on current artifact
function Canvas() {
  const { current } = useArtifacts()

  switch (current?.type) {
    case 'burn-rate-canvas':
      return <BurnRateCanvas />
    case 'revenue-canvas':
      return <RevenueCanvas />
    default:
      return <DefaultCanvas />
  }
}`)}})})]})]})]}),(0,t.jsxs)("section",{children:[(0,t.jsx)("h2",{className:"text-2xl font-medium mb-8",children:"Examples"}),(0,t.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[(0,t.jsxs)(r.default,{href:"/store",className:"group border border-[#2a2a2a] hover:border-[#404040] transition-colors p-8",children:[(0,t.jsx)("h3",{className:"text-xl font-normal mb-4 group-hover:text-white transition-colors",children:"Live Demo"}),(0,t.jsx)("p",{className:"text-secondary mb-6",children:"Try artifacts in action with our interactive demo."}),(0,t.jsx)("div",{className:"text-sm text-[#888] group-hover:text-[#aaa] transition-colors",children:"Try it out →"})]}),(0,t.jsxs)("a",{href:"https://github.com/midday-ai/ai-sdk-tools",target:"_blank",rel:"noopener noreferrer",className:"group border border-[#2a2a2a] hover:border-[#404040] transition-colors p-8",children:[(0,t.jsx)("h3",{className:"text-xl font-normal mb-4 group-hover:text-white transition-colors",children:"GitHub"}),(0,t.jsx)("p",{className:"text-secondary mb-6",children:"View source code and more examples on GitHub."}),(0,t.jsx)("div",{className:"text-sm text-[#888] group-hover:text-[#aaa] transition-colors",children:"View on GitHub →"})]})]})]})]})})}e.s(["default",()=>n])}]);