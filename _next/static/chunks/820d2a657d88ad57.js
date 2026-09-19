(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,88973,64367,e=>{"use strict";var t=e.i(43476),s=e.i(71645);function n({text:e,title:n,className:a="",size:r=14}){let[i,o]=(0,s.useState)(!1),l=async()=>{try{await navigator.clipboard.writeText(e),o(!0),setTimeout(()=>o(!1),2e3)}catch(e){console.error("Failed to copy text: ",e)}};return(0,t.jsx)("button",{type:"button",onClick:l,className:`text-secondary hover:text-[#d4d4d4] transition-colors p-1 ${a}`,title:n||`Copy "${e}" to clipboard`,children:i?(0,t.jsxs)("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"currentColor","aria-label":"Copied",children:[(0,t.jsx)("title",{children:"Copied to clipboard"}),(0,t.jsx)("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"})]}):(0,t.jsxs)("svg",{width:r,height:r,viewBox:"0 0 24 24",fill:"currentColor","aria-label":"Copy command",children:[(0,t.jsx)("title",{children:"Copy to clipboard"}),(0,t.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"})]})})}e.s(["CopyButton",()=>n],64367);let a="ai-sdk-tools-preferred-package-manager";function r({packageName:e="ai-sdk-tools"}){let[r,i]=(0,s.useState)("npm");(0,s.useEffect)(()=>{try{let e=localStorage.getItem(a);e&&["npm","yarn","pnpm","bun"].includes(e)&&i(e)}catch(e){console.warn("localStorage not available:",e)}},[]);let o={npm:`npm install ${e}`,yarn:`yarn add ${e}`,pnpm:`pnpm add ${e}`,bun:`bun add ${e}`}[r];return(0,t.jsxs)("div",{className:"not-prose w-full max-w-lg",children:[(0,t.jsx)("div",{className:"flex gap-4",children:["npm","yarn","pnpm","bun"].map(e=>(0,t.jsx)("button",{className:`py-2 text-xs font-medium transition-colors ${r===e?"text-[#d4d4d4]":"text-secondary hover:text-[#d4d4d4]"}`,onClick:()=>(e=>{i(e);try{localStorage.setItem(a,e)}catch(e){console.warn("localStorage not available:",e)}})(e),children:e},e))}),(0,t.jsxs)("div",{className:"flex mt-1 items-center justify-between bg-[#0a0a0a] border border-dashed border-[#2a2a2a] p-2 text-sm overflow-x-auto",children:[(0,t.jsx)("pre",{children:(0,t.jsx)("code",{children:o})}),(0,t.jsx)(n,{text:o})]})]})}e.s(["InstallScriptTabs",()=>r],88973)},69814,e=>{"use strict";let t=new Set(["<",">","{","}","[","]"]),s=new Set(["for","do","while","if","else","return","function","var","let","const","true","false","undefined","this","new","delete","typeof","in","instanceof","void","break","continue","switch","case","default","throw","try","catch","finally","debugger","with","yield","async","await","class","extends","super","import","export","from","static"]),n=new Set(["+","-","*","/","%","=","!","&","|","^","~","!","?",":",".",",",";","'",'"',".","(",")","[","]","#","@","\\",...t]),a={keywords:s,onCommentStart:A,onCommentEnd:function(e,t){return e+t==="*/"?2:+("\n"===t)}},r=["identifier","keyword","string","class","property","entity","jsxliterals","sign","comment","break","space"],[i,o,l,c,d,m,x,h,p,u,g]=r.map((e,t)=>t);function f(e){return/^[^\S\r\n]+$/g.test(e)}function j(e){return n.has(e)}function y(e){return/^[\w_]+$/.test(e)||N(e)}function N(e){return/[^\u0000-\u007f]/.test(e)}function v(e){return/^[a-zA-Z]$/.test(e)}function b(e){var t;return(v(t=e[0])||N(t))&&(1===e.length||y(e.slice(1)))}function w(e){return'"'===e||"'"===e}function A(e,t){let s=e+t;return"/*"===s?2:+("//"===s)}function k(e,s){return(function(e){let t=[];function s(e){let s=e.map(([e,t])=>{let s=r[e];return{type:"element",tagName:"span",children:[{type:"text",value:t}],properties:{className:`sh__token--${s}`,style:{color:`var(--sh-${s})`}}}});t.push({type:"element",tagName:"span",children:s,properties:{className:"sh__line"}})}let n=[],a=!1;for(let t=0;t<e.length;t++){let r=e[t],[i,o]=r,l=t===e.length-1;if(i!==u){if(o.includes("\n")){let e=o.split("\n");for(let t=0;t<e.length;t++)n.push([i,e[t]]),t<e.length-1&&(s(n),n.length=0)}else n.push(r);a=!1}else a?s([]):(s(n),n.length=0),l&&s([]),a=!0}return n.length&&s(n),t})(function(e,s){let{keywords:r,onCommentStart:k,onCommentEnd:S}={...a,...s},T="",I=-1,M=[-1,""],C=[-2,""],H=[],$=!1,_=0,z=!1,P=0,W=()=>$&&!z&&!_,L=()=>!_&&W()&&!z&&P>0,R=null,E=!1,U=0,D=0,q=()=>E,G=()=>D>U,O=()=>D>0&&D===U,B=()=>null!==R||G(),Y=(e,t)=>{if(t&&(T=t),T){let t=[I=e||function(e){let t="\n"===e;if(_&&!W()){if(null!==R)return l;let[,t]=M;if(b(e)&&("<"===t||"</"===t))return m}if(L())return x;if(null!==R||G())return l;{let s;if(r.has(e))return"."===M[1]?i:o;if(t)return u;if(f(e))return g;if(e.split("").every(j))return h;if(y(s=e[0])&&s===s.toUpperCase()||"null"===e)return _&&!W()?i:c;if(b(e)){let e="."===M[1]&&b(C[1]);if(!B()&&!e)return i;if(e)return d}return l}}(T),T];I!==g&&I!==u&&(C=M,M=t),H.push(t)}T=""};for(let s=0;s<e.length;s++){var F,V;let a=e[s],r=e[s-1],i=e[s+1],o=r+a,c=a+i;if(w(a)&&!L()&&!G()){Y(),"\\"!==r&&(R&&a===R?R=null:R||(R=a)),Y(l,a);continue}if(!G()&&"\\n"!==r&&"`"===a){Y(),Y(l,a),D++;continue}if(G()){if("\\n"!==r&&"`"===a&&D>0){Y(),D--,Y(l,a);continue}if("${"===c){U++,Y(l),Y(h,c),s++;continue}}if(O()&&"}"===a){Y(),U--,Y(h,a);continue}if(W()&&"{"===a){Y(),Y(h,a),z=!0;continue}if($){if(!_&&"<"===a){Y(),"/"===i?(_=2,T=c,s++):(_=1,T=a),Y(h);continue}if(_){if(">"===a&&!"/=".includes(r)){Y(),1===_?(_=0,P++):(_=0,$=!1),Y(h,a);continue}if("/>"===c||"</"===c){"<"!==T&&"/"!==T&&Y(),"/>"===c?_=0:P--,P||($=!1),T=c,s++,Y(h);continue}if("<"===a){Y(),T=a,Y(h);continue}if("-"===i&&!B()&&!L()&&T){Y(d,T+a+i),s++;continue}if("="===i&&!B()&&!f(a)){f(T)&&Y();let e=T+a;if(b(e)){Y(d,e);continue}}}}!_&&("<"===a&&(v(i)||N(i))||"</"===c)&&(_="/"===i?2:1,"<"===a&&("/"===i||v(i))&&!B()&&!L()&&!q()&&($=!0));let m=w(V=a)||"`"===V,x=G(),u=!$&&"/"===(F=c)[0]&&!A(F[0],F[1]),g=L();if(m||x||w(R))T+=a;else if(u){Y();let[t,n]=M;if(u&&-1!==t&&(t!==h||")"===n)&&t!==p){T=a,Y();continue}E=!0;let r=s++,i=()=>s>=e.length,o=()=>i()||"\n"===e[s],c=!1;for(;!o();s++)if("/"===e[s]&&"\\"!==e[s-1]){for(c=!0;r!==s&&/^[a-z]$/.test(e[s+1])&&!o();)s++;break}E=!1,r!==s&&c?(T=e.slice(r,s+1),Y(l)):(T=a,Y(),s=r)}else if(k(a,i)){Y();let t=s,n=k(a,i);if(n)for(;s<e.length&&S(e[s-1],e[s])!=n;s++);T=e.slice(t,s+1),Y(p)}else" "===a||"\n"===a?" "===a&&(f(T)||!T||g)?(T+=a,"<"===i&&Y()):(Y(),T=a,Y()):z&&"}"===a?(Y(),T=a,Y(),z=!1):g&&!t.has(a)||G()||(y(a)===y(T[T.length-1])||W())&&!n.has(a)?T+=a:("</"===o&&(T=o),Y(),"</"!==o&&(T=a),"</"===c||"/>"===c?(T=c,Y(),s++):t.has(a)&&Y())}return Y(),H}(e,s)).map(e=>{let{tagName:t}=e,s=e.children.map(e=>{let{tagName:t,children:s,properties:n}=e;return`<${t} ${(e=>{let t=`class="${e.className}"`;if(e.style){let s=Object.entries(e.style).map(([e,t])=>`${e}:${t}`).join(";");t+=` style="${s}"`}return t})(n)}>${s[0].value.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}</${t}>`}).join("");return`<${t} class="${e.properties.className}">${s}</${t}>`}).join("\n")}r.map((e,t)=>[e,t]),e.s(["highlight",()=>k])},40353,e=>{"use strict";var t=e.i(43476),s=e.i(22016),n=e.i(69814),a=e.i(88973);function r(){return(0,t.jsx)("main",{className:"min-h-screen text-[#d4d4d4] font-[family-name:var(--font-geist-mono)]",children:(0,t.jsxs)("div",{className:"max-w-[95rem] mx-auto px-8 py-32 relativez-10",children:[(0,t.jsx)("section",{className:"mb-40",children:(0,t.jsxs)("div",{className:"max-w-4xl",children:[(0,t.jsx)("h1",{className:"text-4xl font-normal leading-tight tracking-wide mb-6",children:"Agents"}),(0,t.jsxs)("p",{className:"text-base text-secondary max-w-3xl leading-relaxed font-light mb-12",children:["Multi-agent orchestration for AI SDK v5. Build intelligent workflows with specialized agents, automatic handoffs, and seamless coordination. Works with any AI provider.",(0,t.jsxs)("strong",{className:"text-[#d4d4d4]",children:[" ","Includes built-in memory system for persistent context."]})]}),(0,t.jsx)(a.InstallScriptTabs,{packageName:"@ai-sdk-tools/agents @ai-sdk-tools/memory ai zod"})]})}),(0,t.jsx)("section",{className:"mb-40",children:(0,t.jsxs)("div",{className:"max-w-4xl",children:[(0,t.jsx)("h2",{className:"text-2xl font-normal mb-8",children:"Why Multi-Agent Systems?"}),(0,t.jsx)("p",{className:"text-sm text-secondary mb-8 leading-relaxed",children:"Complex tasks benefit from specialized expertise. Instead of a single model handling everything, break work into focused agents:"}),(0,t.jsxs)("div",{className:"grid md:grid-cols-2 gap-4 mb-8",children:[(0,t.jsxs)("div",{className:"border border-[#2a2a2a] p-6",children:[(0,t.jsx)("h3",{className:"text-base font-medium mb-2",children:"Customer Support"}),(0,t.jsx)("p",{className:"text-xs text-secondary",children:"Triage → Technical Support → Billing"})]}),(0,t.jsxs)("div",{className:"border border-[#2a2a2a] p-6",children:[(0,t.jsx)("h3",{className:"text-base font-medium mb-2",children:"Content Pipeline"}),(0,t.jsx)("p",{className:"text-xs text-secondary",children:"Research → Writing → Editing → Publishing"})]}),(0,t.jsxs)("div",{className:"border border-[#2a2a2a] p-6",children:[(0,t.jsx)("h3",{className:"text-base font-medium mb-2",children:"Code Development"}),(0,t.jsx)("p",{className:"text-xs text-secondary",children:"Planning → Implementation → Testing → Documentation"})]}),(0,t.jsxs)("div",{className:"border border-[#2a2a2a] p-6",children:[(0,t.jsx)("h3",{className:"text-base font-medium mb-2",children:"Data Analysis"}),(0,t.jsx)("p",{className:"text-xs text-secondary",children:"Collection → Processing → Visualization → Insights"})]})]}),(0,t.jsxs)("div",{className:"space-y-3",children:[(0,t.jsxs)("div",{className:"flex items-start gap-3",children:[(0,t.jsx)("span",{className:"text-xs text-secondary mt-1",children:"•"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-sm font-medium mb-1",children:"Specialization"}),(0,t.jsx)("p",{className:"text-xs text-secondary",children:"Each agent focuses on its domain with optimized instructions and tools"})]})]}),(0,t.jsxs)("div",{className:"flex items-start gap-3",children:[(0,t.jsx)("span",{className:"text-xs text-secondary mt-1",children:"•"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-sm font-medium mb-1",children:"Context Preservation"}),(0,t.jsx)("p",{className:"text-xs text-secondary",children:"Full conversation history maintained across handoffs"})]})]}),(0,t.jsxs)("div",{className:"flex items-start gap-3",children:[(0,t.jsx)("span",{className:"text-xs text-secondary mt-1",children:"•"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-sm font-medium mb-1",children:"Provider Flexibility"}),(0,t.jsx)("p",{className:"text-xs text-secondary",children:"Use different models for different tasks (GPT-4 for analysis, Claude for writing)"})]})]}),(0,t.jsxs)("div",{className:"flex items-start gap-3",children:[(0,t.jsx)("span",{className:"text-xs text-secondary mt-1",children:"•"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-sm font-medium mb-1",children:"Programmatic Routing"}),(0,t.jsx)("p",{className:"text-xs text-secondary",children:"Pattern matching and automatic agent selection"})]})]})]})]})}),(0,t.jsx)("section",{className:"mb-40",children:(0,t.jsxs)("div",{className:"max-w-4xl",children:[(0,t.jsx)("h2",{className:"text-2xl font-normal mb-8",children:"Built-in Memory System"}),(0,t.jsxs)("p",{className:"text-sm text-secondary mb-8 leading-relaxed",children:["Every agent includes a powerful memory system that maintains context across conversations. Memory is a"," ",(0,t.jsx)("strong",{className:"text-[#d4d4d4]",children:"required dependency"})," ","that provides:"]}),(0,t.jsxs)("div",{className:"space-y-3 mb-8",children:[(0,t.jsxs)("div",{className:"flex items-start gap-3",children:[(0,t.jsx)("span",{className:"text-xs text-secondary mt-1",children:"•"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-sm font-medium mb-1",children:"Working Memory"}),(0,t.jsx)("p",{className:"text-xs text-secondary",children:"Persistent context that agents can read and update during conversations"})]})]}),(0,t.jsxs)("div",{className:"flex items-start gap-3",children:[(0,t.jsx)("span",{className:"text-xs text-secondary mt-1",children:"•"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-sm font-medium mb-1",children:"Conversation History"}),(0,t.jsx)("p",{className:"text-xs text-secondary",children:"Automatic message persistence and retrieval across chat sessions"})]})]}),(0,t.jsxs)("div",{className:"flex items-start gap-3",children:[(0,t.jsx)("span",{className:"text-xs text-secondary mt-1",children:"•"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-sm font-medium mb-1",children:"Chat Management"}),(0,t.jsx)("p",{className:"text-xs text-secondary",children:"Automatic title generation and chat organization"})]})]}),(0,t.jsxs)("div",{className:"flex items-start gap-3",children:[(0,t.jsx)("span",{className:"text-xs text-secondary mt-1",children:"•"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"text-sm font-medium mb-1",children:"Flexible Scopes"}),(0,t.jsx)("p",{className:"text-xs text-secondary",children:"Chat-level or user-level memory with multiple storage backends"})]})]})]}),(0,t.jsx)("div",{className:"border border-[#2a2a2a] p-6",children:(0,t.jsx)("pre",{className:"text-sm font-mono leading-relaxed",dangerouslySetInnerHTML:{__html:(0,n.highlight)(`import { Agent } from '@ai-sdk-tools/agents'
import { InMemoryProvider } from '@ai-sdk-tools/memory/in-memory'
import { openai } from '@ai-sdk/openai'

const agent = new Agent({
  name: 'Assistant',
  model: openai('gpt-4o'),
  instructions: 'You are a helpful assistant.',
  memory: {
    provider: new InMemoryProvider(),
    workingMemory: {
      enabled: true,
      scope: 'chat', // or 'user'
    },
    history: {
      enabled: true,
      limit: 10,
    },
    chats: {
      enabled: true,
      generateTitle: true,
    }
  }
})`)},suppressHydrationWarning:!0})}),(0,t.jsx)("p",{className:"text-xs text-secondary mt-4",children:(0,t.jsx)(s.default,{href:"/docs/memory",className:"text-[#d4d4d4] hover:underline",children:"Learn more about memory configuration →"})})]})}),(0,t.jsx)("section",{className:"mb-40",children:(0,t.jsxs)("div",{className:"max-w-4xl",children:[(0,t.jsx)("h2",{className:"text-2xl font-normal mb-8",children:"Quick Start"}),(0,t.jsxs)("div",{className:"space-y-12",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"text-xl font-normal mb-4",children:"Basic: Single Agent"}),(0,t.jsx)("div",{className:"border border-[#2a2a2a] p-6",children:(0,t.jsx)("pre",{className:"text-sm font-mono leading-relaxed",dangerouslySetInnerHTML:{__html:(0,n.highlight)(`import { Agent } from '@ai-sdk-tools/agents'
import { openai } from '@ai-sdk/openai'

const agent = new Agent({
  name: 'Assistant',
  model: openai('gpt-4o'),
  instructions: 'You are a helpful assistant.',
})

// Generate response
const result = await agent.generate({
  prompt: 'What is 2+2?',
})

console.log(result.text) // "4"`)},suppressHydrationWarning:!0})})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"text-xl font-normal mb-4",children:"Handoffs: Two Specialists"}),(0,t.jsx)("div",{className:"border border-[#2a2a2a] p-6",children:(0,t.jsx)("pre",{className:"text-sm font-mono leading-relaxed",dangerouslySetInnerHTML:{__html:(0,n.highlight)(`import { Agent } from '@ai-sdk-tools/agents'
import { openai } from '@ai-sdk/openai'

// Create specialized agents
const mathAgent = new Agent({
  name: 'Math Tutor',
  model: openai('gpt-4o'),
  instructions: 'You help with math problems. Show step-by-step solutions.',
})

const historyAgent = new Agent({
  name: 'History Tutor',
  model: openai('gpt-4o'),
  instructions: 'You help with history questions. Provide context and dates.',
})

// Create orchestrator with handoff capability
const orchestrator = new Agent({
  name: 'Triage',
  model: openai('gpt-4o'),
  instructions: 'Route questions to the appropriate specialist.',
  handoffs: [mathAgent, historyAgent],
})

// LLM decides which specialist to use
const result = await orchestrator.generate({
  prompt: 'What is the quadratic formula?',
})

console.log(\`Handled by: \${result.finalAgent}\`) // "Math Tutor"
console.log(\`Handoffs: \${result.handoffs.length}\`) // 1`)},suppressHydrationWarning:!0})})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"text-xl font-normal mb-4",children:"Orchestration: Auto-Routing"}),(0,t.jsx)("p",{className:"text-sm text-secondary mb-4",children:"Use programmatic routing for instant agent selection without LLM overhead:"}),(0,t.jsx)("div",{className:"border border-[#2a2a2a] p-6",children:(0,t.jsx)("pre",{className:"text-sm font-mono leading-relaxed",dangerouslySetInnerHTML:{__html:(0,n.highlight)(`const mathAgent = new Agent({
  name: 'Math Tutor',
  model: openai('gpt-4o'),
  instructions: 'You help with math problems.',
  matchOn: ['calculate', 'math', 'equation', /\\d+\\s*[\\+\\-\\*\\/]\\s*\\d+/],
})

const historyAgent = new Agent({
  name: 'History Tutor',
  model: openai('gpt-4o'),
  instructions: 'You help with history questions.',
  matchOn: ['history', 'war', 'civilization', /\\d{4}/], // Years
})

const orchestrator = new Agent({
  name: 'Smart Router',
  model: openai('gpt-4o-mini'), // Efficient for routing
  instructions: 'Route to specialists. Fall back to handling general questions.',
  handoffs: [mathAgent, historyAgent],
})

// Automatically routes to mathAgent based on pattern match
const result = await orchestrator.generate({
  prompt: 'What is 15 * 23?',
})`)},suppressHydrationWarning:!0})})]})]})]})}),(0,t.jsx)("section",{className:"mb-40",children:(0,t.jsxs)("div",{className:"max-w-4xl",children:[(0,t.jsx)("h2",{className:"text-2xl font-normal mb-8",children:"Streaming with UI"}),(0,t.jsx)("p",{className:"text-sm text-secondary mb-4",children:"For Next.js route handlers and real-time UI updates:"}),(0,t.jsx)("div",{className:"border border-[#2a2a2a] p-6",children:(0,t.jsx)("pre",{className:"text-sm font-mono leading-relaxed",dangerouslySetInnerHTML:{__html:(0,n.highlight)(`// app/api/chat/route.ts
import { Agent } from '@ai-sdk-tools/agents'
import { openai } from '@ai-sdk/openai'

const supportAgent = new Agent({
  name: 'Support',
  model: openai('gpt-4o'),
  instructions: 'Handle customer support inquiries.',
  handoffs: [technicalAgent, billingAgent],
})

export async function POST(req: Request) {
  const { messages } = await req.json()

  return supportAgent.toUIMessageStream({
    messages,
    maxRounds: 5, // Max handoffs
    maxSteps: 10, // Max tool calls per agent
    onEvent: async (event) => {
      if (event.type === 'agent-handoff') {
        console.log(\`Handoff: \${event.from} → \${event.to}\`)
      }
    },
  })
}`)},suppressHydrationWarning:!0})})]})}),(0,t.jsx)("section",{className:"mb-40",children:(0,t.jsxs)("div",{className:"max-w-4xl",children:[(0,t.jsx)("h2",{className:"text-2xl font-normal mb-8",children:"Tools and Context"}),(0,t.jsxs)("div",{className:"space-y-12",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"text-xl font-normal mb-4",children:"Adding Tools"}),(0,t.jsx)("div",{className:"border border-[#2a2a2a] p-6",children:(0,t.jsx)("pre",{className:"text-sm font-mono leading-relaxed",dangerouslySetInnerHTML:{__html:(0,n.highlight)(`import { tool } from 'ai'
import { z } from 'zod'

const calculatorTool = tool({
  description: 'Perform calculations',
  parameters: z.object({
    expression: z.string(),
  }),
  execute: async ({ expression }) => {
    return eval(expression) // Use safe-eval in production
  },
})

const agent = new Agent({
  name: 'Calculator Agent',
  model: openai('gpt-4o'),
  instructions: 'Help with math using the calculator tool.',
  tools: {
    calculator: calculatorTool,
  },
  maxTurns: 20, // Max tool call iterations
})`)},suppressHydrationWarning:!0})})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"text-xl font-normal mb-4",children:"Context-Aware Agents"}),(0,t.jsx)("p",{className:"text-sm text-secondary mb-4",children:"Use typed context for team/user-specific behavior:"}),(0,t.jsx)("div",{className:"border border-[#2a2a2a] p-6",children:(0,t.jsx)("pre",{className:"text-sm font-mono leading-relaxed",dangerouslySetInnerHTML:{__html:(0,n.highlight)(`interface TeamContext {
  teamId: string
  userId: string
  preferences: Record<string, string>
}

const agent = new Agent<TeamContext>({
  name: 'Team Assistant',
  model: openai('gpt-4o'),
  instructions: (context) => {
    return \`You are helping team \${context.teamId}. 
    User preferences: \${JSON.stringify(context.preferences)}\`
  },
})

// Pass context when streaming
agent.toUIMessageStream({
  messages,
  context: {
    teamId: 'team-123',
    userId: 'user-456',
    preferences: { theme: 'dark', language: 'en' },
  },
})`)},suppressHydrationWarning:!0})})]})]})]})}),(0,t.jsx)("section",{className:"mb-40",children:(0,t.jsxs)("div",{className:"max-w-4xl",children:[(0,t.jsx)("h2",{className:"text-2xl font-normal mb-8",children:"Multi-Provider Setup"}),(0,t.jsx)("p",{className:"text-sm text-secondary mb-4",children:"Use the best model for each task:"}),(0,t.jsx)("div",{className:"border border-[#2a2a2a] p-6",children:(0,t.jsx)("pre",{className:"text-sm font-mono leading-relaxed",dangerouslySetInnerHTML:{__html:(0,n.highlight)(`import { openai } from '@ai-sdk/openai'
import { anthropic } from '@ai-sdk/anthropic'
import { google } from '@ai-sdk/google'

const researchAgent = new Agent({
  name: 'Researcher',
  model: anthropic('claude-3-5-sonnet-20241022'), // Excellent reasoning
  instructions: 'Research topics thoroughly.',
})

const writerAgent = new Agent({
  name: 'Writer',
  model: openai('gpt-4o'), // Great at creative writing
  instructions: 'Create engaging content.',
})

const editorAgent = new Agent({
  name: 'Editor',
  model: google('gemini-1.5-pro'), // Strong at review
  instructions: 'Review and improve content.',
  handoffs: [writerAgent], // Can send back for rewrites
})

const pipeline = new Agent({
  name: 'Content Manager',
  model: openai('gpt-4o-mini'), // Efficient orchestrator
  instructions: 'Coordinate content creation.',
  handoffs: [researchAgent, writerAgent, editorAgent],
})`)},suppressHydrationWarning:!0})})]})}),(0,t.jsx)("section",{className:"mb-40",children:(0,t.jsxs)("div",{className:"max-w-4xl",children:[(0,t.jsx)("h2",{className:"text-2xl font-normal mb-8",children:"Guardrails"}),(0,t.jsx)("p",{className:"text-sm text-secondary mb-4",children:"Control agent behavior with input/output validation:"}),(0,t.jsx)("div",{className:"border border-[#2a2a2a] p-6",children:(0,t.jsx)("pre",{className:"text-sm font-mono leading-relaxed",dangerouslySetInnerHTML:{__html:(0,n.highlight)(`const agent = new Agent({
  name: 'Moderated Agent',
  model: openai('gpt-4o'),
  instructions: 'Answer questions helpfully.',
  inputGuardrails: [
    async (input) => {
      if (containsProfanity(input)) {
        return { 
          pass: false, 
          action: 'block',
          message: 'Input violates content policy',
        }
      }
      return { pass: true }
    },
  ],
  outputGuardrails: [
    async (output) => {
      if (containsSensitiveInfo(output)) {
        return { 
          pass: false, 
          action: 'modify',
          modifiedOutput: redactSensitiveInfo(output),
        }
      }
      return { pass: true }
    },
  ],
})`)},suppressHydrationWarning:!0})})]})}),(0,t.jsx)("section",{className:"mb-40",children:(0,t.jsxs)("div",{className:"max-w-4xl",children:[(0,t.jsx)("h2",{className:"text-2xl font-normal mb-8",children:"API Reference"}),(0,t.jsxs)("div",{className:"space-y-8",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"text-xl font-normal mb-4",children:"Agent Constructor Options"}),(0,t.jsxs)("div",{className:"border border-[#2a2a2a] p-6 space-y-3 text-sm",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("code",{className:"text-xs",children:"name: string"})," - Unique agent identifier"]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("code",{className:"text-xs",children:"model: LanguageModel"})," - AI SDK language model"]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("code",{className:"text-xs",children:"instructions: string | ((context: TContext) => string)"})," ","- System prompt"]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("code",{className:"text-xs",children:"tools?: Record<string, Tool>"})," ","- Available tools"]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("code",{className:"text-xs",children:"handoffs?: Agent[]"})," - Agents this agent can hand off to"]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("code",{className:"text-xs",children:"maxTurns?: number"})," - Maximum tool call iterations (default: 10)"]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("code",{className:"text-xs",children:"temperature?: number"})," - Model temperature"]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("code",{className:"text-xs",children:"matchOn?: (string | RegExp)[] | ((message: string) => boolean)"})," ","- Routing patterns"]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("code",{className:"text-xs",children:"onEvent?: (event: AgentEvent) => void"})," ","- Lifecycle event handler"]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("code",{className:"text-xs",children:"inputGuardrails?: InputGuardrail[]"})," ","- Pre-execution validation"]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("code",{className:"text-xs",children:"outputGuardrails?: OutputGuardrail[]"})," ","- Post-execution validation"]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("code",{className:"text-xs",children:"permissions?: ToolPermissions"})," ","- Tool access control"]})]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"text-xl font-normal mb-4",children:"Methods"}),(0,t.jsxs)("div",{className:"border border-[#2a2a2a] p-6 space-y-4",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("code",{className:"text-xs text-secondary",children:"generate(options)"}),(0,t.jsx)("p",{className:"text-xs text-secondary mt-1",children:"Generate response (non-streaming)"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("code",{className:"text-xs text-secondary",children:"stream(options)"}),(0,t.jsx)("p",{className:"text-xs text-secondary mt-1",children:"Stream response (AI SDK stream)"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("code",{className:"text-xs text-secondary",children:"toUIMessageStream(options)"}),(0,t.jsx)("p",{className:"text-xs text-secondary mt-1",children:"Stream as UI messages (Next.js route handler)"})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("code",{className:"text-xs text-secondary",children:"getHandoffs()"}),(0,t.jsx)("p",{className:"text-xs text-secondary mt-1",children:"Get handoff agents"})]})]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"text-xl font-normal mb-4",children:"Event Types"}),(0,t.jsxs)("div",{className:"border border-[#2a2a2a] p-6 space-y-2 text-xs text-secondary",children:[(0,t.jsxs)("div",{children:["• ",(0,t.jsx)("code",{children:"agent-start"})," - Agent starts execution"]}),(0,t.jsxs)("div",{children:["• ",(0,t.jsx)("code",{children:"agent-step"})," - Agent completes a step"]}),(0,t.jsxs)("div",{children:["• ",(0,t.jsx)("code",{children:"agent-finish"})," - Agent finishes round"]}),(0,t.jsxs)("div",{children:["• ",(0,t.jsx)("code",{children:"agent-handoff"})," - Agent hands off to another"]}),(0,t.jsxs)("div",{children:["• ",(0,t.jsx)("code",{children:"agent-complete"})," - All execution complete"]}),(0,t.jsxs)("div",{children:["• ",(0,t.jsx)("code",{children:"agent-error"})," - Error occurred"]})]})]})]})]})}),(0,t.jsx)("section",{className:"mb-40",children:(0,t.jsxs)("div",{className:"max-w-4xl",children:[(0,t.jsx)("h2",{className:"text-2xl font-normal mb-8",children:"Integration with Other Packages"}),(0,t.jsxs)("div",{className:"space-y-8",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"text-xl font-normal mb-4",children:"With @ai-sdk-tools/memory"}),(0,t.jsx)("p",{className:"text-sm text-secondary mb-4",children:"Add persistent working memory and conversation history to agents:"}),(0,t.jsx)("div",{className:"border border-[#2a2a2a] p-6 mb-4",children:(0,t.jsx)("pre",{className:"text-sm font-mono leading-relaxed",dangerouslySetInnerHTML:{__html:(0,n.highlight)(`import { DrizzleProvider } from '@ai-sdk-tools/memory/drizzle'

const agent = new Agent({
  name: 'Assistant',
  model: openai('gpt-4o'),
  instructions: 'You are a helpful assistant.',
  memory: {
    provider: new DrizzleProvider(db),
    workingMemory: {
      enabled: true,
      scope: 'user', // or 'chat'
    },
    history: {
      enabled: true,
      limit: 10,
    },
    chats: {
      enabled: true,
      generateTitle: true,
    }
  },
})

// Agent automatically:
// - Loads working memory into system prompt
// - Injects updateWorkingMemory tool
// - Loads conversation history
// - Persists messages and generates titles`)},suppressHydrationWarning:!0})}),(0,t.jsxs)("p",{className:"text-xs text-secondary",children:["Learn more:"," ",(0,t.jsx)(s.default,{href:"/docs/memory",className:"text-[#d4d4d4] hover:underline",children:"Memory Documentation"})]})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"text-xl font-normal mb-4",children:"With @ai-sdk-tools/cache"}),(0,t.jsx)("p",{className:"text-sm text-secondary mb-4",children:"Cache expensive tool calls across agents:"}),(0,t.jsx)("div",{className:"border border-[#2a2a2a] p-6",children:(0,t.jsx)("pre",{className:"text-sm font-mono leading-relaxed",dangerouslySetInnerHTML:{__html:(0,n.highlight)(`import { cached } from '@ai-sdk-tools/cache'

const agent = new Agent({
  name: 'Data Agent',
  model: openai('gpt-4o'),
  instructions: 'Analyze data.',
  tools: {
    analyze: cached(expensiveAnalysisTool),
  },
})`)},suppressHydrationWarning:!0})})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"text-xl font-normal mb-4",children:"With @ai-sdk-tools/artifacts"}),(0,t.jsx)("p",{className:"text-sm text-secondary mb-4",children:"Stream structured artifacts from agents:"}),(0,t.jsx)("div",{className:"border border-[#2a2a2a] p-6",children:(0,t.jsx)("pre",{className:"text-sm font-mono leading-relaxed",dangerouslySetInnerHTML:{__html:(0,n.highlight)(`import { artifact } from '@ai-sdk-tools/artifacts'

const reportAgent = new Agent({
  name: 'Report Generator',
  model: openai('gpt-4o'),
  instructions: 'Generate structured reports.',
  tools: {
    createReport: tool({
      execute: async function* ({ title }) {
        const report = artifact.stream({ title, sections: [] })
        yield { text: 'Report complete', forceStop: true }
      },
    }),
  },
})`)},suppressHydrationWarning:!0})})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h3",{className:"text-xl font-normal mb-4",children:"With @ai-sdk-tools/devtools"}),(0,t.jsx)("p",{className:"text-sm text-secondary mb-4",children:"Debug agent execution in development:"}),(0,t.jsx)("div",{className:"border border-[#2a2a2a] p-6",children:(0,t.jsx)("pre",{className:"text-sm font-mono leading-relaxed",dangerouslySetInnerHTML:{__html:(0,n.highlight)(`import { AIDevTools } from '@ai-sdk-tools/devtools'

const agent = new Agent({
  name: 'Debug Agent',
  model: openai('gpt-4o'),
  instructions: 'Test agent.',
  onEvent: (event) => {
    console.log('[Agent Event]', event)
  },
})

// In your app
export default function App() {
  return (
    <>
      <YourChatInterface />
      <AIDevTools />
    </>
  )
}`)},suppressHydrationWarning:!0})})]})]})]})}),(0,t.jsx)("section",{className:"mb-40",children:(0,t.jsxs)("div",{className:"max-w-4xl",children:[(0,t.jsx)("h2",{className:"text-2xl font-normal mb-8",children:"Examples"}),(0,t.jsxs)("p",{className:"text-sm text-secondary mb-4",children:["Real-world implementations can be found in"," ",(0,t.jsx)("code",{className:"text-xs",children:"/apps/example/src/ai/agents/"}),":"]}),(0,t.jsxs)("div",{className:"space-y-3 text-sm",children:[(0,t.jsxs)("div",{className:"flex items-start gap-3",children:[(0,t.jsx)("span",{className:"text-xs text-secondary mt-1",children:"•"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"font-medium mb-1",children:"Triage Agent"}),(0,t.jsx)("p",{className:"text-xs text-secondary",children:"Route customer questions to specialists"})]})]}),(0,t.jsxs)("div",{className:"flex items-start gap-3",children:[(0,t.jsx)("span",{className:"text-xs text-secondary mt-1",children:"•"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"font-medium mb-1",children:"Financial Agent"}),(0,t.jsx)("p",{className:"text-xs text-secondary",children:"Multi-step analysis with artifacts"})]})]}),(0,t.jsxs)("div",{className:"flex items-start gap-3",children:[(0,t.jsx)("span",{className:"text-xs text-secondary mt-1",children:"•"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"font-medium mb-1",children:"Code Review"}),(0,t.jsx)("p",{className:"text-xs text-secondary",children:"Analyze → Test → Document workflow"})]})]}),(0,t.jsxs)("div",{className:"flex items-start gap-3",children:[(0,t.jsx)("span",{className:"text-xs text-secondary mt-1",children:"•"}),(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"font-medium mb-1",children:"Multi-Provider"}),(0,t.jsx)("p",{className:"text-xs text-secondary",children:"Use different models for different tasks"})]})]})]})]})}),(0,t.jsx)("section",{children:(0,t.jsxs)("div",{className:"max-w-4xl",children:[(0,t.jsx)("h2",{className:"text-2xl font-normal mb-8",children:"Next Steps"}),(0,t.jsxs)("div",{className:"grid md:grid-cols-2 gap-4",children:[(0,t.jsxs)(s.default,{href:"https://github.com/midday-ai/ai-sdk-tools/tree/main/packages/agents",target:"_blank",rel:"noopener noreferrer",className:"border border-[#2a2a2a] hover:border-[#404040] transition-colors p-6 group",children:[(0,t.jsx)("h3",{className:"text-base font-medium mb-2 group-hover:text-white transition-colors",children:"View on GitHub"}),(0,t.jsx)("p",{className:"text-xs text-secondary",children:"Explore source code and contribute"})]}),(0,t.jsxs)(s.default,{href:"/docs",className:"border border-[#2a2a2a] hover:border-[#404040] transition-colors p-6 group",children:[(0,t.jsx)("h3",{className:"text-base font-medium mb-2 group-hover:text-white transition-colors",children:"Back to Documentation"}),(0,t.jsx)("p",{className:"text-xs text-secondary",children:"Explore other packages"})]})]})]})})]})})}e.s(["default",()=>r])}]);