"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7810],{7963:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var s=t(5893),r=t(1151);const i={title:"MLflow 2.9.0",authors:["mlflow-maintainers"]},l=void 0,o={permalink:"/mlflow-site-refresh/releases/2023/12/06/2.9.0-release",source:"@site/releases/2023-12-06-2.9.0-release.md",title:"MLflow 2.9.0",description:"MLflow 2.9.0 includes several major features and improvements.",date:"2023-12-06T00:00:00.000Z",formattedDate:"December 6, 2023",tags:[],readingTime:2.055,hasTruncateMarker:!1,authors:[{name:"MLflow maintainers",title:"MLflow maintainers",url:"https://github.com/mlflow/mlflow.git",imageURL:"https://github.com/mlflow-automation.png",key:"mlflow-maintainers"}],frontMatter:{title:"MLflow 2.9.0",authors:["mlflow-maintainers"]},unlisted:!1,prevItem:{title:"MLflow 2.9.1",permalink:"/mlflow-site-refresh/releases/2023/12/07/2.9.1-release"},nextItem:{title:"MLflow 2.8.1",permalink:"/mlflow-site-refresh/releases/2023/11/15/2.8.1-release"}},a={authorsImageUrls:[void 0]},c=[{value:"MLflow AI Gateway deprecation (#10420, @harupy)",id:"mlflow-ai-gateway-deprecation-10420-harupy",level:3},{value:"MLflow Tracking docs overhaul (#10471, @B-Step62)",id:"mlflow-tracking-docs-overhaul-10471-b-step62",level:3},{value:"Security fixes",id:"security-fixes",level:3},{value:"Features",id:"features",level:3},{value:"Bug fixes",id:"bug-fixes",level:3},{value:"Documentation updates",id:"documentation-updates",level:3}];function d(e){const n={a:"a",code:"code",h3:"h3",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"MLflow 2.9.0 includes several major features and improvements."}),"\n",(0,s.jsx)(n.h3,{id:"mlflow-ai-gateway-deprecation-10420-harupy",children:"MLflow AI Gateway deprecation (#10420, @harupy)"}),"\n",(0,s.jsxs)(n.p,{children:["The feature previously known as MLflow AI Gateway has been moved to utilize ",(0,s.jsx)(n.a,{href:"https://mlflow.org/docs/latest/llms/deployments/index.html",children:"the MLflow deployments API"}),".\nFor guidance on migrating from the AI Gateway to the new deployments API, please see the [MLflow AI Gateway Migration Guide](",(0,s.jsx)(n.a,{href:"https://mlflow.org/docs/latest/llms/gateway/migration.html",children:"https://mlflow.org/docs/latest/llms/gateway/migration.html"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"mlflow-tracking-docs-overhaul-10471-b-step62",children:"MLflow Tracking docs overhaul (#10471, @B-Step62)"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://mlflow.org/docs/latest/tracking.html",children:"The MLflow tracking docs"})," have been overhauled. We'd like your feedback on the new tracking docs!"]}),"\n",(0,s.jsx)(n.h3,{id:"security-fixes",children:"Security fixes"}),"\n",(0,s.jsx)(n.p,{children:"Three security patches have been filed with this release and CVE's have been issued with the details involved in the security patch and potential attack vectors. Please review and update your tracking server deployments if your tracking server is not securely deployed and has open access to the internet."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Sanitize ",(0,s.jsx)(n.code,{children:"path"})," in ",(0,s.jsx)(n.code,{children:"HttpArtifactRepository.list_artifacts"})," (#10585, @harupy)"]}),"\n",(0,s.jsxs)(n.li,{children:["Sanitize ",(0,s.jsx)(n.code,{children:"filename"})," in ",(0,s.jsx)(n.code,{children:"Content-Disposition"})," header for ",(0,s.jsx)(n.code,{children:"HTTPDatasetSource"})," (#10584, @harupy)."]}),"\n",(0,s.jsxs)(n.li,{children:["Validate ",(0,s.jsx)(n.code,{children:"Content-Type"})," header to prevent POST XSS (#10526, @B-Step62)"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"features",children:"Features"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["[Tracking] Use ",(0,s.jsx)(n.code,{children:"backoff_jitter"})," when making HTTP requests (#10486, @ajinkyavbhandare)"]}),"\n",(0,s.jsxs)(n.li,{children:["[Tracking] Add default ",(0,s.jsx)(n.code,{children:"aggregate_results"})," if the score type is numeric in ",(0,s.jsx)(n.code,{children:"make_metric"})," API (#10490, @sunishsheth2009)"]}),"\n",(0,s.jsx)(n.li,{children:"[Tracking] Add string type of score types for metric value for genai (#10307, @sunishsheth2009)"}),"\n",(0,s.jsx)(n.li,{children:"[Artifacts] Support multipart upload for for proxy artifact access (#9521, @harupy)"}),"\n",(0,s.jsxs)(n.li,{children:["[Models] Support saving ",(0,s.jsx)(n.code,{children:"torch_dtype"})," for transformers models (#10586, @serena-ruan)"]}),"\n",(0,s.jsxs)(n.li,{children:["[Models] Add built-in metric ",(0,s.jsx)(n.code,{children:"ndcg_at_k"})," to retriever evaluation (#10284, @liangz1)"]}),"\n",(0,s.jsxs)(n.li,{children:["[Model Registry] Implement universal ",(0,s.jsx)(n.code,{children:"copy_model_version"})," (#10308, @jerrylian-db)"]}),"\n",(0,s.jsxs)(n.li,{children:["[Models] Support saving/loading ",(0,s.jsx)(n.code,{children:"RunnableSequence"}),", ",(0,s.jsx)(n.code,{children:"RunnableParallel"}),", and ",(0,s.jsx)(n.code,{children:"RunnableBranch"})," (#10521, #10611, @serena-ruan)"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"bug-fixes",children:"Bug fixes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"[Tracking] Resume system metrics logging when resuming an existing run (#10312, @chenmoneygithub)"}),"\n",(0,s.jsx)(n.li,{children:"[UI] Fix incorrect sorting order in line chart (#10553, @B-Step62)"}),"\n",(0,s.jsx)(n.li,{children:"[UI] Remove extra whitespace in git URLs (#10506, @mrplants)"}),"\n",(0,s.jsx)(n.li,{children:"[Models] Make spark_udf use NFS to broadcast model to spark executor on databricks runtime and spark connect mode (#10463, @WeichenXu123)"}),"\n",(0,s.jsx)(n.li,{children:"[Models] Fix promptlab pyfunc models not working for chat routes (#10346, @daniellok-db)"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"documentation-updates",children:"Documentation updates"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"[Docs] Add a quickstart guide for Tensorflow (#10398, @chenmoneygithub)"}),"\n",(0,s.jsx)(n.li,{children:"[Docs] Improve the parameter tuning guide (#10344, @chenmoneygithub)"}),"\n",(0,s.jsx)(n.li,{children:"[Docs] Add a guide for system metrics logging (#10429, @chenmoneygithub)"}),"\n",(0,s.jsx)(n.li,{children:"[Docs] Add instructions on how to configure credentials for Azure OpenAI (#10560, @BenWilson2)"}),"\n",(0,s.jsx)(n.li,{children:"[Docs] Add docs and tutorials for Sentence Transformers flavor (#10476, @BenWilson2)"}),"\n",(0,s.jsx)(n.li,{children:"[Docs] Add tutorials, examples, and guides for Transformers Flavor (#10360, @BenWilson2)"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["For a comprehensive list of changes, see the ",(0,s.jsx)(n.a,{href:"https://github.com/mlflow/mlflow/releases/tag/v2.9.0",children:"release change log"}),", and check out the latest documentation on ",(0,s.jsx)(n.a,{href:"http://mlflow.org/",children:"mlflow.org"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>l});var s=t(7294);const r={},i=s.createContext(r);function l(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);