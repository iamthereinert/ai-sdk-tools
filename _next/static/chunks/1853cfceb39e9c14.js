(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,88973,64367,e=>{"use strict";var s=e.i(43476),t=e.i(71645);function r({text:e,title:r,className:a="",size:n=14}){let[i,o]=(0,t.useState)(!1),l=async()=>{try{await navigator.clipboard.writeText(e),o(!0),setTimeout(()=>o(!1),2e3)}catch(e){console.error("Failed to copy text: ",e)}};return(0,s.jsx)("button",{type:"button",onClick:l,className:`text-secondary hover:text-[#d4d4d4] transition-colors p-1 ${a}`,title:r||`Copy "${e}" to clipboard`,children:i?(0,s.jsxs)("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"currentColor","aria-label":"Copied",children:[(0,s.jsx)("title",{children:"Copied to clipboard"}),(0,s.jsx)("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"})]}):(0,s.jsxs)("svg",{width:n,height:n,viewBox:"0 0 24 24",fill:"currentColor","aria-label":"Copy command",children:[(0,s.jsx)("title",{children:"Copy to clipboard"}),(0,s.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"})]})})}e.s(["CopyButton",()=>r],64367);let a="ai-sdk-tools-preferred-package-manager";function n({packageName:e="ai-sdk-tools"}){let[n,i]=(0,t.useState)("npm");(0,t.useEffect)(()=>{try{let e=localStorage.getItem(a);e&&["npm","yarn","pnpm","bun"].includes(e)&&i(e)}catch(e){console.warn("localStorage not available:",e)}},[]);let o={npm:`npm install ${e}`,yarn:`yarn add ${e}`,pnpm:`pnpm add ${e}`,bun:`bun add ${e}`}[n];return(0,s.jsxs)("div",{className:"not-prose w-full max-w-lg",children:[(0,s.jsx)("div",{className:"flex gap-4",children:["npm","yarn","pnpm","bun"].map(e=>(0,s.jsx)("button",{className:`py-2 text-xs font-medium transition-colors ${n===e?"text-[#d4d4d4]":"text-secondary hover:text-[#d4d4d4]"}`,onClick:()=>(e=>{i(e);try{localStorage.setItem(a,e)}catch(e){console.warn("localStorage not available:",e)}})(e),children:e},e))}),(0,s.jsxs)("div",{className:"flex mt-1 items-center justify-between bg-[#0a0a0a] border border-dashed border-[#2a2a2a] p-2 text-sm overflow-x-auto",children:[(0,s.jsx)("pre",{children:(0,s.jsx)("code",{children:o})}),(0,s.jsx)(r,{text:o})]})]})}e.s(["InstallScriptTabs",()=>n],88973)},69814,e=>{"use strict";let s=new Set(["<",">","{","}","[","]"]),t=new Set(["for","do","while","if","else","return","function","var","let","const","true","false","undefined","this","new","delete","typeof","in","instanceof","void","break","continue","switch","case","default","throw","try","catch","finally","debugger","with","yield","async","await","class","extends","super","import","export","from","static"]),r=new Set(["+","-","*","/","%","=","!","&","|","^","~","!","?",":",".",",",";","'",'"',".","(",")","[","]","#","@","\\",...s]),a={keywords:t,onCommentStart:M,onCommentEnd:function(e,s){return e+s==="*/"?2:+("\n"===s)}},n=["identifier","keyword","string","class","property","entity","jsxliterals","sign","comment","break","space"],[i,o,l,m,c,d,x,p,h,g,u]=n.map((e,s)=>s);function f(e){return/^[^\S\r\n]+$/g.test(e)}function y(e){return r.has(e)}function b(e){return/^[\w_]+$/.test(e)||j(e)}function j(e){return/[^\u0000-\u007f]/.test(e)}function v(e){return/^[a-zA-Z]$/.test(e)}function N(e){var s;return(v(s=e[0])||j(s))&&(1===e.length||b(e.slice(1)))}function w(e){return'"'===e||"'"===e}function M(e,s){let t=e+s;return"/*"===t?2:+("//"===t)}function k(e,t){return(function(e){let s=[];function t(e){let t=e.map(([e,s])=>{let t=n[e];return{type:"element",tagName:"span",children:[{type:"text",value:s}],properties:{className:`sh__token--${t}`,style:{color:`var(--sh-${t})`}}}});s.push({type:"element",tagName:"span",children:t,properties:{className:"sh__line"}})}let r=[],a=!1;for(let s=0;s<e.length;s++){let n=e[s],[i,o]=n,l=s===e.length-1;if(i!==g){if(o.includes("\n")){let e=o.split("\n");for(let s=0;s<e.length;s++)r.push([i,e[s]]),s<e.length-1&&(t(r),r.length=0)}else r.push(n);a=!1}else a?t([]):(t(r),r.length=0),l&&t([]),a=!0}return r.length&&t(r),s})(function(e,t){let{keywords:n,onCommentStart:k,onCommentEnd:I}={...a,...t},S="",z=-1,P=[-1,""],C=[-2,""],T=[],_=!1,D=0,$=!1,A=0,H=()=>_&&!$&&!D,L=()=>!D&&H()&&!$&&A>0,W=null,U=!1,R=0,q=0,Q=()=>U,O=()=>q>R,F=()=>q>0&&q===R,B=()=>null!==W||O(),E=(e,s)=>{if(s&&(S=s),S){let s=[z=e||function(e){let s="\n"===e;if(D&&!H()){if(null!==W)return l;let[,s]=P;if(N(e)&&("<"===s||"</"===s))return d}if(L())return x;if(null!==W||O())return l;{let t;if(n.has(e))return"."===P[1]?i:o;if(s)return g;if(f(e))return u;if(e.split("").every(y))return p;if(b(t=e[0])&&t===t.toUpperCase()||"null"===e)return D&&!H()?i:m;if(N(e)){let e="."===P[1]&&N(C[1]);if(!B()&&!e)return i;if(e)return c}return l}}(S),S];z!==u&&z!==g&&(C=P,P=s),T.push(s)}S=""};for(let t=0;t<e.length;t++){var K,V;let a=e[t],n=e[t-1],i=e[t+1],o=n+a,m=a+i;if(w(a)&&!L()&&!O()){E(),"\\"!==n&&(W&&a===W?W=null:W||(W=a)),E(l,a);continue}if(!O()&&"\\n"!==n&&"`"===a){E(),E(l,a),q++;continue}if(O()){if("\\n"!==n&&"`"===a&&q>0){E(),q--,E(l,a);continue}if("${"===m){R++,E(l),E(p,m),t++;continue}}if(F()&&"}"===a){E(),R--,E(p,a);continue}if(H()&&"{"===a){E(),E(p,a),$=!0;continue}if(_){if(!D&&"<"===a){E(),"/"===i?(D=2,S=m,t++):(D=1,S=a),E(p);continue}if(D){if(">"===a&&!"/=".includes(n)){E(),1===D?(D=0,A++):(D=0,_=!1),E(p,a);continue}if("/>"===m||"</"===m){"<"!==S&&"/"!==S&&E(),"/>"===m?D=0:A--,A||(_=!1),S=m,t++,E(p);continue}if("<"===a){E(),S=a,E(p);continue}if("-"===i&&!B()&&!L()&&S){E(c,S+a+i),t++;continue}if("="===i&&!B()&&!f(a)){f(S)&&E();let e=S+a;if(N(e)){E(c,e);continue}}}}!D&&("<"===a&&(v(i)||j(i))||"</"===m)&&(D="/"===i?2:1,"<"===a&&("/"===i||v(i))&&!B()&&!L()&&!Q()&&(_=!0));let d=w(V=a)||"`"===V,x=O(),g=!_&&"/"===(K=m)[0]&&!M(K[0],K[1]),u=L();if(d||x||w(W))S+=a;else if(g){E();let[s,r]=P;if(g&&-1!==s&&(s!==p||")"===r)&&s!==h){S=a,E();continue}U=!0;let n=t++,i=()=>t>=e.length,o=()=>i()||"\n"===e[t],m=!1;for(;!o();t++)if("/"===e[t]&&"\\"!==e[t-1]){for(m=!0;n!==t&&/^[a-z]$/.test(e[t+1])&&!o();)t++;break}U=!1,n!==t&&m?(S=e.slice(n,t+1),E(l)):(S=a,E(),t=n)}else if(k(a,i)){E();let s=t,r=k(a,i);if(r)for(;t<e.length&&I(e[t-1],e[t])!=r;t++);S=e.slice(s,t+1),E(h)}else" "===a||"\n"===a?" "===a&&(f(S)||!S||u)?(S+=a,"<"===i&&E()):(E(),S=a,E()):$&&"}"===a?(E(),S=a,E(),$=!1):u&&!s.has(a)||O()||(b(a)===b(S[S.length-1])||H())&&!r.has(a)?S+=a:("</"===o&&(S=o),E(),"</"!==o&&(S=a),"</"===m||"/>"===m?(S=m,E(),t++):s.has(a)&&E())}return E(),T}(e,t)).map(e=>{let{tagName:s}=e,t=e.children.map(e=>{let{tagName:s,children:t,properties:r}=e;return`<${s} ${(e=>{let s=`class="${e.className}"`;if(e.style){let t=Object.entries(e.style).map(([e,s])=>`${e}:${s}`).join(";");s+=` style="${t}"`}return s})(r)}>${t[0].value.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}</${s}>`}).join("");return`<${s} class="${e.properties.className}">${t}</${s}>`}).join("\n")}n.map((e,s)=>[e,s]),e.s(["highlight",()=>k])},68513,e=>{"use strict";var s=e.i(43476),t=e.i(22016),r=e.i(69814),a=e.i(88973);function n(){return(0,s.jsx)("main",{className:"min-h-screen text-[#d4d4d4] font-[family-name:var(--font-geist-mono)]",children:(0,s.jsxs)("div",{className:"max-w-[95rem] mx-auto px-8 py-32 relativez-10",children:[(0,s.jsx)("section",{className:"mb-40",children:(0,s.jsxs)("div",{className:"max-w-4xl",children:[(0,s.jsx)("h1",{className:"text-4xl font-normal leading-tight tracking-wide mb-6",children:"Memory"}),(0,s.jsxs)("p",{className:"text-base text-secondary max-w-3xl leading-relaxed font-light mb-12",children:["Persistent memory system for AI agents with built-in providers for development and production. Working memory, conversation history, and chat persistence with a simple 4-method interface.",(0,s.jsxs)("strong",{className:"text-[#d4d4d4]",children:[" ","Required dependency for @ai-sdk-tools/agents."]})]}),(0,s.jsx)(a.InstallScriptTabs,{packageName:"@ai-sdk-tools/memory"})]})}),(0,s.jsx)("section",{className:"mb-40",children:(0,s.jsxs)("div",{className:"max-w-4xl",children:[(0,s.jsx)("h2",{className:"text-2xl font-normal mb-8",children:"Features"}),(0,s.jsxs)("div",{className:"space-y-3",children:[(0,s.jsxs)("div",{className:"flex items-start gap-3",children:[(0,s.jsx)("span",{className:"text-xs text-secondary mt-1",children:"•"}),(0,s.jsx)("div",{children:(0,s.jsx)("p",{className:"text-sm font-medium mb-1",children:"Simple API - Just 4 methods to implement"})})]}),(0,s.jsxs)("div",{className:"flex items-start gap-3",children:[(0,s.jsx)("span",{className:"text-xs text-secondary mt-1",children:"•"}),(0,s.jsx)("div",{children:(0,s.jsx)("p",{className:"text-sm font-medium mb-1",children:"Built-in Providers - InMemory, Drizzle ORM, and Upstash included"})})]}),(0,s.jsxs)("div",{className:"flex items-start gap-3",children:[(0,s.jsx)("span",{className:"text-xs text-secondary mt-1",children:"•"}),(0,s.jsx)("div",{children:(0,s.jsx)("p",{className:"text-sm font-medium mb-1",children:"TypeScript-first - Full type safety"})})]}),(0,s.jsxs)("div",{className:"flex items-start gap-3",children:[(0,s.jsx)("span",{className:"text-xs text-secondary mt-1",children:"•"}),(0,s.jsx)("div",{children:(0,s.jsx)("p",{className:"text-sm font-medium mb-1",children:"Flexible Scopes - Chat-level or user-level memory"})})]}),(0,s.jsxs)("div",{className:"flex items-start gap-3",children:[(0,s.jsx)("span",{className:"text-xs text-secondary mt-1",children:"•"}),(0,s.jsx)("div",{children:(0,s.jsx)("p",{className:"text-sm font-medium mb-1",children:"Conversation History - Optional message tracking"})})]}),(0,s.jsxs)("div",{className:"flex items-start gap-3",children:[(0,s.jsx)("span",{className:"text-xs text-secondary mt-1",children:"•"}),(0,s.jsx)("div",{children:(0,s.jsx)("p",{className:"text-sm font-medium mb-1",children:"Database Agnostic - Works with PostgreSQL, MySQL, and SQLite via Drizzle"})})]})]})]})}),(0,s.jsx)("section",{className:"mb-40",children:(0,s.jsxs)("div",{className:"max-w-4xl",children:[(0,s.jsx)("h2",{className:"text-2xl font-normal mb-8",children:"Quick Start"}),(0,s.jsx)("h3",{className:"text-lg font-medium mb-4",children:"InMemory Provider (Development)"}),(0,s.jsx)("p",{className:"text-sm text-secondary mb-6 leading-relaxed",children:"Perfect for local development - works immediately, no setup needed."}),(0,s.jsx)("div",{className:"border border-[#3c3c3c] p-6 mb-12",children:(0,s.jsx)("pre",{className:"text-xs font-mono leading-relaxed",dangerouslySetInnerHTML:{__html:(0,r.highlight)(`import { InMemoryProvider } from '@ai-sdk-tools/memory/in-memory'
import { Agent } from '@ai-sdk-tools/agents'

const memory = new InMemoryProvider()

// Use with agents
const agent = new Agent({
  name: 'Assistant',
  model: openai('gpt-4'),
  instructions: 'You are a helpful assistant.',
  memory: {
    provider: memory,
    workingMemory: {
      enabled: true,
      scope: 'chat',
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
})`)},suppressHydrationWarning:!0})})]})}),(0,s.jsx)("section",{className:"mb-40",children:(0,s.jsxs)("div",{className:"max-w-4xl",children:[(0,s.jsx)("h2",{className:"text-2xl font-normal mb-8",children:"Production Setup"}),(0,s.jsx)("h3",{className:"text-lg font-medium mb-4",children:"Drizzle Provider (SQL Databases)"}),(0,s.jsx)("p",{className:"text-sm text-secondary mb-6 leading-relaxed",children:"Works with PostgreSQL, MySQL, and SQLite via Drizzle ORM. Perfect if you already use Drizzle in your project."}),(0,s.jsx)("div",{className:"border border-[#3c3c3c] p-6 mb-8",children:(0,s.jsx)("pre",{className:"text-xs font-mono leading-relaxed",dangerouslySetInnerHTML:{__html:(0,r.highlight)(`import { drizzle } from 'drizzle-orm/vercel-postgres'
import { sql } from '@vercel/postgres'
import { pgTable, text, timestamp } from 'drizzle-orm/pg-core'
import { DrizzleProvider } from '@ai-sdk-tools/memory/drizzle'

// Define your schema
const workingMemory = pgTable('working_memory', {
  id: text('id').primaryKey(),
  scope: text('scope').notNull(),
  chatId: text('chat_id'),
  userId: text('user_id'),
  content: text('content').notNull(),
  updatedAt: timestamp('updated_at').notNull(),
})

const messages = pgTable('conversation_messages', {
  id: serial('id').primaryKey(),
  chatId: text('chat_id').notNull(),
  userId: text('user_id'),
  role: text('role').notNull(),
  content: text('content').notNull(),
  timestamp: timestamp('timestamp').notNull(),
})

// Initialize
const db = drizzle(sql)
const memory = new DrizzleProvider(db, {
  workingMemoryTable: workingMemory,
  messagesTable: messages,
})`)},suppressHydrationWarning:!0})}),(0,s.jsxs)("p",{className:"text-xs text-secondary mb-12",children:[(0,s.jsx)("a",{href:"https://github.com/midday-ai/ai-sdk-tools/blob/main/packages/memory/DRIZZLE.md",target:"_blank",rel:"noopener noreferrer",className:"hover:text-[#d4d4d4] underline",children:"Full Drizzle documentation"})," ","- Includes PostgreSQL, MySQL, SQLite/Turso examples"]}),(0,s.jsx)("h3",{className:"text-lg font-medium mb-4",children:"Upstash Provider (Serverless)"}),(0,s.jsx)("p",{className:"text-sm text-secondary mb-6 leading-relaxed",children:"Perfect for edge and serverless environments."}),(0,s.jsx)("div",{className:"border border-[#3c3c3c] p-6 mb-12",children:(0,s.jsx)("pre",{className:"text-xs font-mono leading-relaxed",dangerouslySetInnerHTML:{__html:(0,r.highlight)(`import { Redis } from '@upstash/redis'
import { UpstashProvider } from '@ai-sdk-tools/memory/upstash'

const redis = Redis.fromEnv()
const memory = new UpstashProvider(redis)`)},suppressHydrationWarning:!0})})]})}),(0,s.jsx)("section",{className:"mb-40",children:(0,s.jsxs)("div",{className:"max-w-4xl",children:[(0,s.jsx)("h2",{className:"text-2xl font-normal mb-8",children:"Usage with Agents"}),(0,s.jsxs)("p",{className:"text-sm text-secondary mb-6 leading-relaxed",children:["The memory package is a"," ",(0,s.jsx)("strong",{className:"text-[#d4d4d4]",children:"required dependency"})," ","for"," ",(0,s.jsx)(t.default,{href:"/docs/agents",className:"text-[#d4d4d4] hover:underline",children:"@ai-sdk-tools/agents"}),". The agent automatically handles:"]}),(0,s.jsxs)("div",{className:"space-y-3 mb-8",children:[(0,s.jsxs)("div",{className:"flex items-start gap-3",children:[(0,s.jsx)("span",{className:"text-xs text-secondary mt-1",children:"1."}),(0,s.jsx)("p",{className:"text-sm",children:"Loads working memory into system prompt"})]}),(0,s.jsxs)("div",{className:"flex items-start gap-3",children:[(0,s.jsx)("span",{className:"text-xs text-secondary mt-1",children:"2."}),(0,s.jsx)("p",{className:"text-sm",children:"Injects updateWorkingMemory tool"})]}),(0,s.jsxs)("div",{className:"flex items-start gap-3",children:[(0,s.jsx)("span",{className:"text-xs text-secondary mt-1",children:"3."}),(0,s.jsx)("p",{className:"text-sm",children:"Captures and persists conversation messages"})]}),(0,s.jsxs)("div",{className:"flex items-start gap-3",children:[(0,s.jsx)("span",{className:"text-xs text-secondary mt-1",children:"4."}),(0,s.jsx)("p",{className:"text-sm",children:"Generates chat titles from first message"})]})]}),(0,s.jsx)("div",{className:"border border-[#3c3c3c] p-6 mb-8",children:(0,s.jsx)("pre",{className:"text-xs font-mono leading-relaxed",dangerouslySetInnerHTML:{__html:(0,r.highlight)(`import { Agent } from '@ai-sdk-tools/agents'
import { DrizzleProvider } from '@ai-sdk-tools/memory/drizzle'

const agent = new Agent({
  name: 'Financial Assistant',
  model: openai('gpt-4'),
  instructions: 'You help users manage their finances.',
  memory: {
    provider: new DrizzleProvider(db),
    workingMemory: {
      enabled: true,
      scope: 'user', // or 'chat'
      template: \`# Working Memory

## User Preferences
- [Preferred currency, date format, etc.]

## Important Context
- [Key facts about the user's finances]
\`
    },
    history: {
      enabled: true,
      limit: 10, // Last 10 messages
    },
    chats: {
      enabled: true,
      generateTitle: true, // Auto-generate from first message
    }
  },
})

// In your route handler
export async function POST(req: Request) {
  const { message, chatId } = await req.json()
  
  return agent.toUIMessageStream({
    message, // Single message - agent loads history
    context: {
      chatId,
      userId: 'user-123',
      // ... other context
    }
  })
}`)},suppressHydrationWarning:!0})})]})}),(0,s.jsx)("section",{className:"mb-40",children:(0,s.jsxs)("div",{className:"max-w-4xl",children:[(0,s.jsx)("h2",{className:"text-2xl font-normal mb-8",children:"Memory Scopes"}),(0,s.jsx)("h3",{className:"text-lg font-medium mb-4",children:"Chat Scope (Recommended)"}),(0,s.jsx)("p",{className:"text-sm text-secondary mb-6 leading-relaxed",children:"Memory is tied to a specific conversation. Each chat has its own working memory."}),(0,s.jsx)("div",{className:"border border-[#3c3c3c] p-6 mb-12",children:(0,s.jsx)("pre",{className:"text-xs font-mono leading-relaxed",dangerouslySetInnerHTML:{__html:(0,r.highlight)(`workingMemory: {
  enabled: true,
  scope: 'chat',
}`)},suppressHydrationWarning:!0})}),(0,s.jsx)("h3",{className:"text-lg font-medium mb-4",children:"User Scope"}),(0,s.jsx)("p",{className:"text-sm text-secondary mb-6 leading-relaxed",children:"Memory persists across all conversations for a user. Useful for learning long-term preferences."}),(0,s.jsx)("div",{className:"border border-[#3c3c3c] p-6 mb-12",children:(0,s.jsx)("pre",{className:"text-xs font-mono leading-relaxed",dangerouslySetInnerHTML:{__html:(0,r.highlight)(`workingMemory: {
  enabled: true,
  scope: 'user',
}`)},suppressHydrationWarning:!0})})]})}),(0,s.jsx)("section",{className:"mb-40",children:(0,s.jsxs)("div",{className:"max-w-4xl",children:[(0,s.jsx)("h2",{className:"text-2xl font-normal mb-8",children:"API Reference"}),(0,s.jsx)("h3",{className:"text-lg font-medium mb-4",children:"MemoryProvider Interface"}),(0,s.jsx)("p",{className:"text-sm text-secondary mb-6 leading-relaxed",children:"All providers implement this simple 4-method interface:"}),(0,s.jsx)("div",{className:"border border-[#3c3c3c] p-6 mb-12",children:(0,s.jsx)("pre",{className:"text-xs font-mono leading-relaxed",dangerouslySetInnerHTML:{__html:(0,r.highlight)(`interface MemoryProvider {
  // Get working memory for a chat or user
  getWorkingMemory(params: {
    chatId?: string
    userId?: string
    scope: MemoryScope
  }): Promise<WorkingMemory | null>
  
  // Update working memory
  updateWorkingMemory(params: {
    chatId?: string
    userId?: string
    scope: MemoryScope
    content: string
  }): Promise<void>
  
  // Save a conversation message (optional)
  saveMessage?(message: ConversationMessage): Promise<void>
  
  // Get conversation messages (optional)
  getMessages?(params: {
    chatId: string
    limit?: number
  }): Promise<ConversationMessage[]>
}`)},suppressHydrationWarning:!0})}),(0,s.jsx)("h3",{className:"text-lg font-medium mb-4",children:"Types"}),(0,s.jsx)("div",{className:"border border-[#3c3c3c] p-6 mb-12",children:(0,s.jsx)("pre",{className:"text-xs font-mono leading-relaxed",dangerouslySetInnerHTML:{__html:(0,r.highlight)(`interface WorkingMemory {
  content: string
  updatedAt: Date
}

type MemoryScope = 'chat' | 'user'

interface ConversationMessage {
  chatId: string
  userId?: string
  role: 'user' | 'assistant' | 'system'
  content: string
  timestamp: Date
}`)},suppressHydrationWarning:!0})})]})}),(0,s.jsx)("section",{className:"mb-40",children:(0,s.jsxs)("div",{className:"max-w-4xl",children:[(0,s.jsx)("h2",{className:"text-2xl font-normal mb-8",children:"Custom Provider"}),(0,s.jsx)("p",{className:"text-sm text-secondary mb-6 leading-relaxed",children:"Implement your own memory backend by following the MemoryProvider interface:"}),(0,s.jsx)("div",{className:"border border-[#3c3c3c] p-6 mb-8",children:(0,s.jsx)("pre",{className:"text-xs font-mono leading-relaxed",dangerouslySetInnerHTML:{__html:(0,r.highlight)(`import type { 
  MemoryProvider, 
  WorkingMemory, 
  ConversationMessage,
  MemoryScope 
} from '@ai-sdk-tools/memory'

class MyCustomProvider implements MemoryProvider {
  async getWorkingMemory(params: {
    chatId?: string
    userId?: string
    scope: MemoryScope
  }): Promise<WorkingMemory | null> {
    // Fetch from your database
    const key = scope === 'chat' ? params.chatId : params.userId
    const data = await myDb.get(key)
    
    if (!data) return null
    
    return {
      content: data.content,
      updatedAt: new Date(data.updatedAt)
    }
  }
  
  async updateWorkingMemory(params: {
    chatId?: string
    userId?: string
    scope: MemoryScope
    content: string
  }): Promise<void> {
    // Save to your database
    const key = scope === 'chat' ? params.chatId : params.userId
    await myDb.set(key, {
      content: params.content,
      updatedAt: new Date()
    })
  }
  
  // Optional: Implement message storage
  async saveMessage(message: ConversationMessage): Promise<void> {
    await myDb.insertMessage(message)
  }
  
  // Optional: Implement message retrieval
  async getMessages(params: {
    chatId: string
    limit?: number
  }): Promise<ConversationMessage[]> {
    return await myDb.getMessages(params.chatId, params.limit)
  }
}`)},suppressHydrationWarning:!0})})]})}),(0,s.jsx)("section",{className:"mb-40",children:(0,s.jsxs)("div",{className:"max-w-4xl",children:[(0,s.jsx)("h2",{className:"text-2xl font-normal mb-8",children:"Complete Example"}),(0,s.jsx)("p",{className:"text-sm text-secondary mb-6 leading-relaxed",children:"Full example showing memory integration with agents:"}),(0,s.jsx)("div",{className:"border border-[#3c3c3c] p-6 mb-8",children:(0,s.jsx)("pre",{className:"text-xs font-mono leading-relaxed",dangerouslySetInnerHTML:{__html:(0,r.highlight)(`// app/api/chat/route.ts
import { Agent } from '@ai-sdk-tools/agents'
import { DrizzleProvider } from '@ai-sdk-tools/memory/drizzle'
import { openai } from '@ai-sdk/openai'

const memory = new DrizzleProvider(db)

const agent = new Agent({
  name: 'Assistant',
  model: openai('gpt-4'),
  instructions: 'You are a helpful assistant.',
  memory: {
    provider: memory,
    workingMemory: {
      enabled: true,
      scope: 'user',
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

export async function POST(req: Request) {
  const { message, chatId } = await req.json()
  
  return agent.toUIMessageStream({
    message,
    context: {
      chatId,
      userId: 'user-123',
    }
  })
}

// Client usage
import { useChat } from '@ai-sdk-tools/store'

function ChatComponent() {
  const { messages, sendMessage } = useChat({
    transport: new DefaultChatTransport({
      api: '/api/chat',
      prepareSendMessagesRequest({ messages, id }) {
        return {
          body: {
            message: messages[messages.length - 1],
            chatId: id,
          },
        }
      },
    }),
  })
}`)},suppressHydrationWarning:!0})})]})}),(0,s.jsx)("div",{className:"pt-8 border-t border-[#2a2a2a]",children:(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[(0,s.jsx)(t.default,{href:"/docs/agents",className:"text-sm text-secondary hover:text-[#d4d4d4] transition-colors",children:"← Agents"}),(0,s.jsx)(t.default,{href:"https://github.com/midday-ai/ai-sdk-tools/tree/main/packages/memory",target:"_blank",rel:"noopener noreferrer",className:"text-sm text-secondary hover:text-[#d4d4d4] transition-colors",children:"View on GitHub →"})]})})]})})}e.s(["default",()=>n])}]);