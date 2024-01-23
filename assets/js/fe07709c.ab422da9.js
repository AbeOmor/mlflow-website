"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1889],{5014:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=t(5893),s=t(1151);const i={title:"MLflow 2.7.0",authors:["mlflow-maintainers"]},o=void 0,a={permalink:"/mlflow-site-refresh/releases/2023/09/12/2.7.0-release",source:"@site/releases/2023-09-12-2.7.0-release.md",title:"MLflow 2.7.0",description:"MLflow 2.7.0 includes several major features and improvements",date:"2023-09-12T00:00:00.000Z",formattedDate:"September 12, 2023",tags:[],readingTime:1.47,hasTruncateMarker:!1,authors:[{name:"MLflow maintainers",title:"MLflow maintainers",url:"https://github.com/mlflow/mlflow.git",imageURL:"https://github.com/mlflow-automation.png",key:"mlflow-maintainers"}],frontMatter:{title:"MLflow 2.7.0",authors:["mlflow-maintainers"]},unlisted:!1,prevItem:{title:"MLflow 2.7.1",permalink:"/mlflow-site-refresh/releases/2023/09/17/2.7.1-release"},nextItem:{title:"MLflow 2.6.0",permalink:"/mlflow-site-refresh/releases/2023/08/15/2.6.0-release"}},l={authorsImageUrls:[void 0]},c=[];function d(e){const n={a:"a",code:"code",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"MLflow 2.7.0 includes several major features and improvements"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["[UI / Gateway] We are excited to announce the Prompt Engineering UI. This new addition offers a suite of tools tailored for efficient prompt development, testing, and evaluation for LLM use cases. Integrated directly into the MLflow AI Gateway, it provides a seamless experience for designing, tracking, and deploying prompt templates. To read about this new feature, see the documentation at ",(0,r.jsx)(n.a,{href:"https://mlflow.org/docs/latest/llms/prompt-engineering.html",children:"https://mlflow.org/docs/latest/llms/prompt-engineering.html"})," (#9503, @prithvikannan)"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Features:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["[Gateway] Introduce ",(0,r.jsx)(n.code,{children:"MosaicML"})," as a supported provider for the MLflow ",(0,r.jsx)(n.code,{children:"AI Gateway"})," (#9459, @arpitjasa-db)"]}),"\n",(0,r.jsxs)(n.li,{children:["[Models] Add support for using a snapshot download location when loading a ",(0,r.jsx)(n.code,{children:"transformers"})," model as ",(0,r.jsx)(n.code,{children:"pyfunc"})," (#9362, @serena-ruan)"]}),"\n",(0,r.jsxs)(n.li,{children:["[Server-infra] Introduce plugin support for MLflow ",(0,r.jsx)(n.code,{children:"Tracking Server"})," authentication (#9191, @barrywhart)"]}),"\n",(0,r.jsxs)(n.li,{children:["[Artifacts / Model Registry] Add support for storing artifacts using the ",(0,r.jsx)(n.code,{children:"R2"})," backend (#9490, @shichengzhou-db)"]}),"\n",(0,r.jsx)(n.li,{children:"[Artifacts] Improve upload and download performance for Azure-based artifact stores (#9444, @jerrylian-db)"}),"\n",(0,r.jsx)(n.li,{children:"[Sagemaker] Add support for deploying models to Sagemaker Serverless inference endpoints (#9085, @dogeplusplus)"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Bug fixes:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["[Gateway] Fix a credential expiration bug by re-resolving ",(0,r.jsx)(n.code,{children:"AI Gateway"})," credentials before each request (#9518, @dbczumar)"]}),"\n",(0,r.jsxs)(n.li,{children:["[Gateway] Fix a bug where ",(0,r.jsx)(n.code,{children:"search_routes"})," would raise an exception when no routes have been defined on the ",(0,r.jsx)(n.code,{children:"AI Gateway"})," server (#9387, @QuentinAmbard)"]}),"\n",(0,r.jsxs)(n.li,{children:["[Gateway] Fix compatibility issues with ",(0,r.jsx)(n.code,{children:"pydantic"})," 2.x for ",(0,r.jsx)(n.code,{children:"AI gateway"})," (#9339, @harupy)"]}),"\n",(0,r.jsxs)(n.li,{children:["[Gateway] Fix an initialization issue in the ",(0,r.jsx)(n.code,{children:"AI Gateway"})," that could render MLflow nonfunctional at import if dependencies were conflicting. (#9337, @BenWilson2)"]}),"\n",(0,r.jsxs)(n.li,{children:["[Artifacts] Fix a correctness issue when downloading large artifacts to ",(0,r.jsx)(n.code,{children:"fuse mount"})," paths on ",(0,r.jsx)(n.code,{children:"Databricks"})," (#9545, @BenWilson2)"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Documentation updates:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["[Docs] Add documentation for the ",(0,r.jsx)(n.code,{children:"Giskard"})," community plugin for ",(0,r.jsx)(n.code,{children:"mlflow.evaluate"})," (#9183, @rabah-khalek)"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["For a comprehensive list of changes, see the ",(0,r.jsx)(n.a,{href:"https://github.com/mlflow/mlflow/releases/tag/v2.7.0",children:"release change log"}),", and check out the latest documentation on ",(0,r.jsx)(n.a,{href:"http://mlflow.org/",children:"mlflow.org"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var r=t(7294);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);