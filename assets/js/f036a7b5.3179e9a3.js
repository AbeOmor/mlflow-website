"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8364],{8890:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var s=t(5893),o=t(1151);const l={title:"MLflow 2.5.0",slug:"2.5.0",authors:["mlflow-maintainers"]},a=void 0,r={permalink:"/mlflow-website/releases/2.5.0",source:"@site/releases/2023-07-17-2.5.0-release.md",title:"MLflow 2.5.0",description:"MLflow 2.5.0 includes several major features and improvements:",date:"2023-07-17T00:00:00.000Z",formattedDate:"July 17, 2023",tags:[],readingTime:1.77,hasTruncateMarker:!1,authors:[{name:"MLflow maintainers",title:"MLflow maintainers",url:"https://github.com/mlflow/mlflow.git",imageURL:"https://github.com/mlflow-automation.png",key:"mlflow-maintainers"}],frontMatter:{title:"MLflow 2.5.0",slug:"2.5.0",authors:["mlflow-maintainers"]},unlisted:!1,prevItem:{title:"MLflow 2.6.0",permalink:"/mlflow-website/releases/2.6.0"},nextItem:{title:"MLflow 2.4.0",permalink:"/mlflow-website/releases/2.4.0"}},i={authorsImageUrls:[void 0]},c=[];function d(e){const n={a:"a",code:"code",li:"li",p:"p",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"MLflow 2.5.0 includes several major features and improvements:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["[MLflow AI Gateway] We are excited to announce the release of MLflow AI Gateway, a powerful tool designed to streamline the usage and management of various large language model (LLM) providers, such as OpenAI and Anthropic, within an organization. It offers a standardized interface that simplifies the interaction with these services and delivers centralized, secure management of credentials. To get started with MLflow AI Gateway, check out the docs at ",(0,s.jsx)(n.a,{href:"https://mlflow.org/docs/latest/gateway/index.html",children:"https://mlflow.org/docs/latest/gateway/index.html"}),". (#8694, @harupy, @BenWilson2, @dbczumar)"]}),"\n",(0,s.jsxs)(n.li,{children:["[Auth] We are excited to announce the release of authentication and authorization support for MLflow Tracking and the MLflow Model Registry, providing integrated access control capabilities to both services. To get started, check out the docs at ",(0,s.jsx)(n.a,{href:"https://mlflow.org/docs/latest/auth/index.html",children:"https://mlflow.org/docs/latest/auth/index.html"}),". (#9000, #8975, #8626, #8837, #8841, @gabrielfu, @harupy)"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Features:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"[Models] Add Support to the LangChain flavor for chains that contain unserializable components (#8736, @liangz1)"}),"\n",(0,s.jsx)(n.li,{children:"[Scoring] Infer spark udf return type from model output schema (#8934, @WeichenXu123)"}),"\n",(0,s.jsx)(n.li,{children:"[Models] Add support for automated signature inference (#8860, #8782 #8795, #8725, @jerrylian-db)"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Bug fixes:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["[Security] Improve robustness to LFI attacks on Windows by enhancing path validation (#8999, @serena-ruan)","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If you are using ",(0,s.jsx)(n.code,{children:"mlflow server"})," or ",(0,s.jsx)(n.code,{children:"mlflow ui"})," on Windows, we recommend upgrading to MLflow 2.5.0 as soon as possible."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"[Scoring] Support nullable array type values as spark_udf return values (#9014, @WeichenXu123)"}),"\n",(0,s.jsx)(n.li,{children:"[Models] Revert cache deletion of system modules when adding custom model code to the system path (#8722, @trungn1)"}),"\n",(0,s.jsx)(n.li,{children:"[Models] add micro version to mlflow version pinning (#8687, @C-K-Loan)"}),"\n",(0,s.jsx)(n.li,{children:"[Artifacts] Prevent manually deleted artifacts from causing artifact garbage collection to fail (#8498, @PenHsuanWang)"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Documentation updates:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"[Docs] Update .push_model_to_sagemaker docs (#8851, @pdifranc)"}),"\n",(0,s.jsx)(n.li,{children:"[Docs] Fix invalid link for Azure ML documentation (#8800, @dunnkers)"}),"\n",(0,s.jsx)(n.li,{children:"[Artifacts / Docs / Models / Projects] Adds information on the OCI MLflow plugins for seamless integration with Oralce Cloud Infrastructure services. (#8707, @mrDzurb)"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Deprecation:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["[Models] Deprecate the ",(0,s.jsx)(n.code,{children:"gluon"})," model flavor. The ",(0,s.jsx)(n.code,{children:"mlflow.gluon"})," module will be removed in a future release. (#8968, @harupy)"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["For a comprehensive list of changes, see the ",(0,s.jsx)(n.a,{href:"https://github.com/mlflow/mlflow/releases/tag/v2.5.0",children:"release change log"}),", and check out the latest documentation on ",(0,s.jsx)(n.a,{href:"http://mlflow.org/",children:"mlflow.org"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>a});var s=t(7294);const o={},l=s.createContext(o);function a(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);